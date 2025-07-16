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
  error?: string;
  autoComplete?: string;
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
  error = "",
  autoComplete,
}: SimpleAnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Auto-complete mapping for better form filling
  const getAutoComplete = () => {
    if (autoComplete) return autoComplete;
    
    switch (name) {
      case 'name': return 'name';
      case 'email': return 'email';
      case 'phone': return 'tel';
      case 'company': return 'organization';
      default: return 'off';
    }
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-lg 
    bg-white/25 backdrop-blur-md border-2
    ${error ? 'border-red-400/70 focus:border-red-400' : 'border-white/50 hover:border-white/70 focus:border-blue-400'}
    text-white placeholder-white/80 font-medium
    focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400/50' : 'focus:ring-blue-400/50'}
    ${error ? 'focus:bg-red-50/10' : 'focus:bg-white/30'} focus:placeholder-white/60 focus:shadow-lg 
    ${error ? 'focus:shadow-red-500/20' : 'focus:shadow-blue-500/20'}
    transition-all duration-300 shadow-md
    ${isFocused ? (error ? 'bg-red-50/15 border-red-400/80 shadow-lg shadow-red-500/15' : 'bg-white/35 border-white/80 shadow-lg shadow-blue-500/15') : ''}
    ${error ? 'placeholder-red-200/80' : 'placeholder-white/60'}
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
          autoComplete={getAutoComplete()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={inputClasses}
        />
        {error && (
          <div className="mt-2 text-red-300 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}
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
        autoComplete={getAutoComplete()}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={inputClasses}
      />
      {error && (
        <div className="mt-2 text-red-300 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
