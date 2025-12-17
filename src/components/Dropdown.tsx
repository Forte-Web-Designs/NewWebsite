"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  className?: string;
  width?: string;
}

export function Dropdown({ items, trigger, className = '', width = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect if device is mobile/touch
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Element */}
      <div className="cursor-pointer" onClick={handleClick}>
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          {isMobile && (
            <div 
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
          
          <div 
            className={`${
              isMobile 
                ? 'fixed left-1/2 transform -translate-x-1/2 z-50 top-20' 
                : 'absolute top-full left-0 z-50'
            } pt-1`} 
            style={{
              width: isMobile ? '90vw' : width,
              maxWidth: isMobile ? '300px' : 'none'
            }}
          >
            <div className="bg-primary-1150 rounded-lg shadow-2xl w-full px-3 py-3 border border-white/10">
              <div>
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-white hover:text-primary-1000 hover:bg-white/10 transition-all duration-300 first:rounded-t-md last:rounded-b-md mb-3 px-2 py-1 rounded cursor-pointer hover:scale-105"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 