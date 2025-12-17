"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "../images/Icon";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  iconName?: string;
  iconSize?: "small" | "medium" | "large";
  showIcon?: boolean;
  href?: string;
  variant?: "light" | "dark" | "gradient";
  loadingText?: string;
  successText?: string;
  onAsyncClick?: () => Promise<void>;
}

export default function AnimatedButton({
  children,
  className = "",
  iconName = "arrow-right-2",
  iconSize = "small",
  showIcon = true,
  href,
  variant = "light",
  loadingText = "Loading...",
  successText = "Success!",
  onAsyncClick,
  ...props
}: AnimatedButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const iconSizeClasses = {
    small: "h-3 w-2",
    medium: "h-4 w-3",
    large: "h-5 w-4"
  };

  const handleClick = async (e: React.MouseEvent) => {
    if (onAsyncClick) {
      e.preventDefault();
      setIsLoading(true);
      
      try {
        await onAsyncClick();
        setIsSuccess(true);
        
        // Reset success state after 2 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } catch (error) {
        console.error('Button action failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-medium transition-all duration-300 transform overflow-hidden group";
    
    switch (variant) {
      case "dark":
        return `${baseStyles} bg-black text-white border border-gray-800 hover:bg-gray-900 hover:scale-105 hover:shadow-lg`;
      case "gradient":
        return `${baseStyles} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl`;
      default:
        return `${baseStyles} bg-gradient-to-r from-[#203FFC] to-[#5C73FF] text-white hover:from-[#1a35e0] hover:to-[#4c63e6] hover:scale-105 hover:shadow-lg`;
    }
  };

  const getDisplayText = () => {
    if (isSuccess) return successText;
    if (isLoading) return loadingText;
    return children;
  };

  const getIconName = () => {
    if (isSuccess) return "check";
    if (isLoading) return "loader";
    return iconName;
  };

  const buttonContent = (
    <button 
      className={`${getButtonStyles()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {/* Animated background blob */}
      <div className={`absolute inset-0 bg-white/10 rounded-full transition-all duration-300 ${
        isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-0'
      }`} />
      
      {/* Ripple effect on click */}
      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
        isSuccess ? 'bg-green-400/20 scale-150' : 'bg-transparent scale-100'
      }`} />
      
      {/* Button text */}
      <span className={`relative z-10 transition-all duration-300 ${
        isSuccess ? 'text-green-100' : ''
      }`}>
        {getDisplayText()}
      </span>
      
      {/* Icon with animations */}
      {showIcon && (
        <div className={`relative z-10 transition-all duration-300 ${
          isLoading ? 'animate-spin' : isSuccess ? 'animate-bounce' : ''
        }`}>
          <Icon 
            name={getIconName()} 
            className={`${iconSizeClasses[iconSize]} transition-transform duration-300 ${
              isHovered && !isLoading ? 'translate-x-1' : ''
            }`} 
          />
        </div>
      )}
      
      {/* Hover shine effect */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-700 ${
        isHovered ? 'translate-x-full' : '-translate-x-full'
      }`} />
    </button>
  );

  if (href && !onAsyncClick) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
