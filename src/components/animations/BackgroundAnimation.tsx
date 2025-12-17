"use client";

import { useEffect, useRef } from 'react';

interface BackgroundAnimationProps {
  variant?: 'hero' | 'section' | 'minimal';
  className?: string;
}

export default function BackgroundAnimation({ 
  variant = 'hero', 
  className = '' 
}: BackgroundAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating elements
    const createFloatingElement = (index: number) => {
      const element = document.createElement('div');
      const size = Math.random() * 120 + 40; // 40-160px
      const x = Math.random() * 100; // 0-100%
      const y = Math.random() * 100; // 0-100%
      const duration = Math.random() * 20 + 15; // 15-35s
      const delay = Math.random() * 5; // 0-5s delay

      // Different shapes and styles based on variant
      if (variant === 'hero') {
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        element.className = `floating-element ${shape}`;
        element.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          left: ${x}%;
          top: ${y}%;
          opacity: 0.1;
          pointer-events: none;
          animation: float-${index} ${duration}s infinite ease-in-out;
          animation-delay: ${delay}s;
        `;

        // Apply shape-specific styles
        switch (shape) {
          case 'circle':
            element.style.borderRadius = '50%';
            element.style.background = 'linear-gradient(135deg, #1C3AF6, #8495FF)';
            break;
          case 'square':
            element.style.borderRadius = '8px';
            element.style.background = 'linear-gradient(135deg, #F59E0B, #FBBF24)';
            element.style.transform = 'rotate(45deg)';
            break;
          case 'triangle':
            element.style.width = '0';
            element.style.height = '0';
            element.style.borderLeft = `${size/2}px solid transparent`;
            element.style.borderRight = `${size/2}px solid transparent`;
            element.style.borderBottom = `${size}px solid rgba(28, 58, 246, 0.3)`;
            element.style.background = 'none';
            break;
          case 'hexagon':
            element.style.background = 'linear-gradient(135deg, #8B5CF6, #A855F7)';
            element.style.clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            break;
        }
      } else if (variant === 'section') {
        element.className = 'floating-dot';
        element.style.cssText = `
          position: absolute;
          width: ${size/2}px;
          height: ${size/2}px;
          left: ${x}%;
          top: ${y}%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(28, 58, 246, 0.2), transparent);
          opacity: 0.6;
          pointer-events: none;
          animation: pulse-float-${index} ${duration}s infinite ease-in-out;
          animation-delay: ${delay}s;
        `;
      } else {
        // minimal variant
        element.className = 'floating-minimal';
        element.style.cssText = `
          position: absolute;
          width: 2px;
          height: ${size/3}px;
          left: ${x}%;
          top: ${y}%;
          background: linear-gradient(to bottom, transparent, rgba(28, 58, 246, 0.3), transparent);
          opacity: 0.4;
          pointer-events: none;
          animation: minimal-float-${index} ${duration}s infinite ease-in-out;
          animation-delay: ${delay}s;
        `;
      }

      return element;
    };

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      .floating-element {
        will-change: transform, opacity;
      }
      
      /* Hero variant animations */
      ${Array.from({ length: 15 }, (_, i) => `
        @keyframes float-${i} {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.1;
          }
          25% {
            transform: translateY(-${Math.random() * 30 + 10}px) translateX(${Math.random() * 20 - 10}px) rotate(90deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-${Math.random() * 50 + 20}px) translateX(${Math.random() * 30 - 15}px) rotate(180deg);
            opacity: 0.15;
          }
          75% {
            transform: translateY(-${Math.random() * 30 + 10}px) translateX(${Math.random() * 20 - 10}px) rotate(270deg);
            opacity: 0.25;
          }
        }
      `).join('')}
      
      /* Section variant animations */
      ${Array.from({ length: 10 }, (_, i) => `
        @keyframes pulse-float-${i} {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-${Math.random() * 20 + 10}px) scale(1.2);
            opacity: 0.6;
          }
        }
      `).join('')}
      
      /* Minimal variant animations */
      ${Array.from({ length: 8 }, (_, i) => `
        @keyframes minimal-float-${i} {
          0%, 100% {
            transform: translateY(0px) scaleY(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-${Math.random() * 15 + 5}px) scaleY(1.5);
            opacity: 0.4;
          }
        }
      `).join('')}
    `;
    
    document.head.appendChild(style);

    // Create elements based on variant
    const elementCount = variant === 'hero' ? 15 : variant === 'section' ? 10 : 8;
    const elements: HTMLElement[] = [];
    
    for (let i = 0; i < elementCount; i++) {
      const element = createFloatingElement(i);
      elements.push(element);
      container.appendChild(element);
    }

    // Cleanup function
    return () => {
      elements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [variant]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}

// Preset variants for easy use
export const HeroBackgroundAnimation = (props: Omit<BackgroundAnimationProps, 'variant'>) => (
  <BackgroundAnimation variant="hero" {...props} />
);

export const SectionBackgroundAnimation = (props: Omit<BackgroundAnimationProps, 'variant'>) => (
  <BackgroundAnimation variant="section" {...props} />
);

export const MinimalBackgroundAnimation = (props: Omit<BackgroundAnimationProps, 'variant'>) => (
  <BackgroundAnimation variant="minimal" {...props} />
);
