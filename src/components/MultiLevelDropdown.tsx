"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface DropdownItem {
  label: string;
  href: string;
  children?: DropdownItem[];
}

interface MultiLevelDropdownProps {
  items: DropdownItem[];
  trigger: React.ReactNode;
  className?: string;
  width?: string;
}

export function MultiLevelDropdown({ items, trigger, className = '', width = '280px' }: MultiLevelDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
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
        setHoveredItem(null);
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
      setHoveredItem(null);
    }
  };

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredItem(index);
    }
  };

  const handleItemMouseLeave = () => {
    if (!isMobile) {
      setHoveredItem(null);
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
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => handleItemMouseEnter(index)}
                    onMouseLeave={handleItemMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between text-white hover:text-primary-1000 hover:bg-white/10 transition-all duration-300 first:rounded-t-md last:rounded-b-md mb-3 px-2 py-1 rounded cursor-pointer hover:scale-105"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <svg 
                          className="w-4 h-4 ml-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </Link>

                    {/* Nested Dropdown */}
                    {item.children && hoveredItem === index && !isMobile && (
                      <div 
                        className="absolute left-full top-0 ml-1 z-60"
                        style={{ width: '250px' }}
                      >
                        <div className="bg-primary-1150 rounded-lg shadow-2xl w-full px-3 py-3 border border-white/10">
                          <div>
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                href={child.href}
                                className="block text-white hover:text-primary-1000 hover:bg-white/10 transition-all duration-300 first:rounded-t-md last:rounded-b-md mb-3 px-2 py-1 rounded cursor-pointer hover:scale-105"
                                onClick={() => setIsOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
