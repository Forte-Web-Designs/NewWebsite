"use client";

import { useState } from "react";

interface SimpleAnimatedInputProps {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  delay?: number;
  multiline?: boolean;
  rows?: number;
  className?: string;
}

export default function SimpleAnimatedInput({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  delay = 0,
  multiline = false,
  rows = 1,
  className = "",
}: SimpleAnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const inputClasses = `
    w-full px-4 py-3 rounded-lg 
    bg-white/25 backdrop-blur-md border-2
    border-white/50 hover:border-white/70
    text-white placeholder-white/80 font-medium
    focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400
    focus:bg-white/30 focus:placeholder-white/60 focus:shadow-lg focus:shadow-blue-500/20
    transition-all duration-300 shadow-md
    ${isFocused ? 'bg-white/35 border-white/80 shadow-lg shadow-blue-500/15 placeholder-white/60' : ''}
    ${className}
  `;

  const animationStyle = {
    animationDelay: `${delay}ms`,
  };

  if (multiline) {
    return (
      <div 
        className="animate-fadeInUp opacity-0 animation-fill-forwards"
        style={animationStyle}
      >
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={rows}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
        />
      </div>
    );
  }

  return (
    <div 
      className="animate-fadeInUp opacity-0 animation-fill-forwards"
      style={animationStyle}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={inputClasses}
      />
    </div>
  );
}
