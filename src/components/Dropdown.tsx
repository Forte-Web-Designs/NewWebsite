"use client";

import Link from 'next/link';
import { useState } from 'react';

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

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Element */}
      <div className="cursor-pointer">
        {trigger}
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 pt-1 z-50" style={{
          width: width
        }}>
          <div className="bg-primary-1150 rounded-lg shadow-lg w-full px-3 py-3">
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
      )}
    </div>
  );
} 