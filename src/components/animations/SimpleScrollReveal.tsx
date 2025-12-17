"use client";

import { useEffect, useState, useRef } from 'react';

interface SimpleScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function SimpleScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: SimpleScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { 
        threshold: 0.05, // Trigger earlier - when 5% visible instead of 10%
        rootMargin: '100px 0px -50px 0px' // Start animation well before element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 20px, 0)'; // Reduced from 40px to 20px
      case 'down':
        return 'translate3d(0, -20px, 0)'; // Reduced from -40px to -20px
      case 'left':
        return 'translate3d(-20px, 0, 0)'; // Reduced from -40px to -20px
      case 'right':
        return 'translate3d(20px, 0, 0)'; // Reduced from 40px to 20px
      default:
        return 'translate3d(0, 20px, 0)'; // Reduced from 40px to 20px
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', // Faster: 0.6s → 0.3s
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
}
