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
    bg-white dark:bg-gray-800 border-2
    ${error ? 'border-red-400/70 focus:border-red-400' : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 focus:border-blue-500'}
    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium
    focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-400/50' : 'focus:ring-blue-500/50'}
    ${error ? 'focus:bg-red-50 dark:focus:bg-red-900/20' : 'focus:bg-gray-50 dark:focus:bg-gray-700'} focus:placeholder-gray-400 dark:focus:placeholder-gray-500 focus:shadow-lg 
    ${error ? 'focus:shadow-red-500/20' : 'focus:shadow-blue-500/20'}
    transition-all duration-300 shadow-sm
    ${isFocused ? (error ? 'bg-red-50 dark:bg-red-900/20 border-red-400/80 shadow-lg shadow-red-500/15' : 'bg-gray-50 dark:bg-gray-700 border-blue-500 shadow-lg shadow-blue-500/15') : ''}
    ${error ? 'placeholder-red-400 dark:placeholder-red-400' : 'placeholder-gray-500 dark:placeholder-gray-400'}
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
          <div className="mt-2 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
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
        <div className="mt-2 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
