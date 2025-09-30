"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "./images/Icon";
interface LightButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  iconName?: string;
  iconSize?: "small" | "medium" | "large";
  showIcon?: boolean;
  href?: string;
}

export default function LightButton({
  children,
  className = "",
  iconName = "arrow-right-2",
  iconSize = "small",
  showIcon = true,
  href,
  ...props
}: LightButtonProps) {
  // Define icon size classes
  const iconSizeClasses = {
    small: "h-3 w-2",
    medium: "h-4 w-3", 
    large: "h-5 w-4"
  };

  const buttonClasses = `p-[5px] bg-indigo-700 w-fit min-h-[44px] rounded-[70px] inline-flex flex-col justify-center items-center gap-2.5 transition-all duration-300 hover:bg-indigo-600 hover:scale-105 hover:shadow-lg cursor-pointer group ${className}`;
  
  const buttonContent = (
    <div
      className="inline-block p-[1px] rounded-3xl transition-all duration-300 hover:scale-105"
      style={{
        background:
          "linear-gradient(149deg, #5C73FF 15%, transparent 30%, transparent 100%)",
      }}
    >
      <div className="px-6 sm:px-11 py-3 sm:py-3.5 relative bg-[#081B8B] rounded-[61.20px] shadow-[inset_0px_-2px_4px_0px_rgba(0,0,0,0.30)] inline-flex justify-center items-center gap-2.5 overflow-hidden transition-all duration-300 hover:bg-[#0a1f9c] group-hover:shadow-xl text-center">
        <div className="w-32 h-12 left-0 right-0 top-4 m-auto absolute bg-blue-600 rounded-full blur-lg transition-all duration-300 hover:bg-blue-500 group-hover:scale-110"></div>
        <div className="text-center justify-center text-white text-base sm:text-lg font-medium font-['Roboto'] leading-none z-10">
          {children}
        </div>
        {showIcon && <Icon name={iconName} className={`${iconSizeClasses[iconSize]} z-10 transition-transform duration-300 group-hover:translate-x-1`} />}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {buttonContent}
    </button>
  );
}
