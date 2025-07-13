"use client";

import React, { useState } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'tilt' | 'scale' | 'rotate';
  glowColor?: string;
}

export default function AnimatedCard({
  children,
  className = '',
  hoverEffect = 'lift',
  glowColor = '#203FFC'
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const getHoverStyles = () => {
    const baseStyles = "transition-all duration-300 ease-out";
    
    switch (hoverEffect) {
      case 'glow':
        return `${baseStyles} ${isHovered ? 'shadow-2xl' : 'shadow-lg'}`;
      case 'tilt':
        return `${baseStyles} ${isHovered ? 'transform-gpu' : ''}`;
      case 'scale':
        return `${baseStyles} ${isHovered ? 'scale-105' : 'scale-100'}`;
      case 'rotate':
        return `${baseStyles} ${isHovered ? 'rotate-1' : 'rotate-0'}`;
      default: // lift
        return `${baseStyles} ${isHovered ? 'transform -translate-y-2 shadow-xl' : 'shadow-lg'}`;
    }
  };

  const getTiltTransform = () => {
    if (hoverEffect !== 'tilt' || !isHovered) return '';
    
    const tiltX = (mousePosition.y - 50) / 10;
    const tiltY = (mousePosition.x - 50) / 10;
    
    return `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(20px)`;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${getHoverStyles()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: getTiltTransform(),
        boxShadow: hoverEffect === 'glow' && isHovered 
          ? `0 20px 40px -12px ${glowColor}40, 0 0 30px ${glowColor}20`
          : undefined
      }}
    >
      {/* Gradient overlay on hover */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-10' : ''
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${glowColor} 0%, transparent 70%)`
        }}
      />
      
      {/* Shimmer effect */}
      <div className={`absolute inset-0 transform -skew-x-12 transition-transform duration-700 ${
        isHovered ? 'translate-x-full' : '-translate-x-full'
      }`}>
        <div className="h-full w-6 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
