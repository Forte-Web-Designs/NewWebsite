'use client';

import { useState, useEffect } from 'react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-20 right-16 lg:bottom-4 lg:right-4 z-40
        bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
        text-white
        rounded-full
        p-3 lg:p-4
        shadow-2xl hover:shadow-xl
        transition-all duration-300
        flex items-center justify-center
        group
        animate-fadeIn
        hover:scale-105
        active:scale-95
      "
      aria-label="Back to top"
    >
      <svg 
        className="w-5 h-5 lg:w-6 lg:h-6 transform group-hover:-translate-y-0.5 transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
}
