import React from "react";
import Link from "next/link";
import { Icon } from "./images/Icon";

interface DarkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  iconName?: string;
  iconSize?: "small" | "medium" | "large";
  showIcon?: boolean;
  href?: string;
}

export default function DarkButton({
  children,
  className = "",
  iconName = "arrow-right-2",
  iconSize = "small",
  showIcon = true,
  href,
  ...props
}: DarkButtonProps) {
  const iconSizeClasses = {
    small: "h-3 w-2",
    medium: "h-4 w-3",
    large: "h-5 w-4"
  };

  const buttonClasses = `bg-black dark:bg-white px-4 sm:px-5 py-3 sm:py-3 text-white dark:text-black rounded-3xl flex items-center justify-center gap-2 text-center min-h-[44px] transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 hover:shadow-lg cursor-pointer ${className}`;
  const buttonStyle = {
    boxShadow: "0px 4px 40px 0px #203FFC",
  };

  const buttonContent = (
    <>
      {children}
      {showIcon && <Icon name={iconName} className={`${iconSizeClasses[iconSize]} z-10`} />}
    </>
  );

  const containerDiv = (content: React.ReactNode) => (
    <div
      className="inline-block p-[1px] rounded-3xl transition-all duration-300 hover:scale-105"
      style={{
        background: "linear-gradient(141deg, #5C73FF 12%, transparent 30%, black 100%)",
      }}
    >
      {content}
    </div>
  );

  if (href) {
    return containerDiv(
      <Link href={href} className={buttonClasses} style={buttonStyle}>
        {buttonContent}
      </Link>
    );
  }

  return containerDiv(
    <button className={buttonClasses} style={buttonStyle} {...props}>
      {buttonContent}
    </button>
  );
} 