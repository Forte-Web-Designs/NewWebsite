"use client";

import { useState } from 'react';

interface SimpleAnimatedCardProps {
  children: React.ReactNode;
  hoverEffect?: 'lift' | 'glow' | 'scale';
  className?: string;
}

export default function SimpleAnimatedCard({
  children,
  hoverEffect = 'lift',
  className = ''
}: SimpleAnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getHoverStyles = () => {
    if (!isHovered) return {};
    
    switch (hoverEffect) {
      case 'lift':
        return {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)'
        };
      case 'glow':
        return {
          transform: 'translateY(-2px)',
          boxShadow: '0 5px 15px rgba(28, 58, 246, 0.3)'
        };
      case 'scale':
        return {
          transform: 'scale(1.02)'
        };
      default:
        return {};
    }
  };

  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform, box-shadow',
        ...getHoverStyles()
      }}
    >
      {children}
    </div>
  );
}
