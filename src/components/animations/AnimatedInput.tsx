"use client";

import { useState, useRef, useEffect } from "react";

interface AnimatedInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  className?: string;
  delay?: number;
}

export default function AnimatedInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 4,
  className = "",
  delay = 0,
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hasValue = value.length > 0;
  const shouldShowLabel = isFocused || hasValue;

  const baseStyles = `
    w-full px-4 py-4 pt-6 bg-white/10 border border-[#FFFFFF14] rounded-lg 
    text-white placeholder-transparent focus:outline-none transition-all duration-300
    focus:border-white/40 focus:bg-white/15 hover:bg-white/15 hover:border-white/30
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
    ${className}
  `;

  const labelStyles = `
    absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
    ${shouldShowLabel 
      ? 'top-2 text-xs text-gray-300' 
      : 'top-4 text-base text-gray-400'
    }
  `;

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div className="relative group">
      {/* Input field */}
      <InputComponent
        ref={inputRef as any}
        type={multiline ? undefined : type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        rows={multiline ? rows : undefined}
        className={baseStyles}
        placeholder={placeholder}
      />
      
      {/* Floating label */}
      <label htmlFor={name} className={labelStyles}>
        {placeholder}
      </label>

      {/* Focus glow effect */}
      <div className={`
        absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none
        ${isFocused ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-sm -z-10
      `} />

      {/* Success indicator */}
      {hasValue && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  );
}
