"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { useCanAnimate } from './AnimationManager';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  animationId?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 300, // Faster: 600ms → 300ms
  threshold = 0.05, // Earlier trigger: 0.1 → 0.05
  className = '',
  animationId = `scroll-reveal-${Math.random().toString(36).substr(2, 9)}`
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const canAnimate = useCanAnimate(animationId);

  const triggerAnimation = useCallback(() => {
    if (hasAnimated || !canAnimate) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
      setHasAnimated(true);
    }, delay);
  }, [delay, hasAnimated, canAnimate]);

  useEffect(() => {
    // If animations are disabled, show content immediately
    if (!canAnimate) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          triggerAnimation();
          // Unobserve after triggering to prevent re-animations
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: Math.max(0.01, threshold),
        rootMargin: '150px 0px -50px 0px' // Start animation much earlier - increased from 50px to 150px
      }
    );

    const currentElement = elementRef.current;
    if (currentElement && !hasAnimated) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, triggerAnimation, hasAnimated, canAnimate]);

  const getInitialTransform = () => {
    if (!canAnimate) return 'none';
    
    switch (direction) {
      case 'up': return 'translateY(15px)'; // Reduced from 30px to 15px
      case 'down': return 'translateY(-15px)'; // Reduced from -30px to -15px
      case 'left': return 'translateX(15px)'; // Reduced from 30px to 15px
      case 'right': return 'translateX(-15px)'; // Reduced from -30px to -15px
      case 'scale': return 'scale(0.98)'; // Less dramatic: 0.95 → 0.98
      default: return 'translateY(15px)'; // Reduced from 30px to 15px
    }
  };

  const getInitialOpacity = () => {
    if (!canAnimate) return 1;
    return direction === 'fade' ? 0 : 0.6; // Higher initial opacity: 0.3 → 0.6
  };

  const getAnimationDuration = () => {
    if (!canAnimate) return 0;
    // Reduce duration for performance mode
    return duration;
  };

  return (
    <div
      ref={elementRef}
      className={`${canAnimate ? 'transition-all ease-out' : ''} ${className}`}
      style={{
        transform: isVisible || !canAnimate ? 'translateY(0px) translateX(0px) scale(1)' : getInitialTransform(),
        opacity: isVisible || !canAnimate ? 1 : getInitialOpacity(),
        transitionDuration: `${getAnimationDuration()}ms`,
        transitionDelay: isVisible && canAnimate ? `${delay}ms` : '0ms',
        willChange: canAnimate && !hasAnimated ? 'transform, opacity' : 'auto'
      }}
    >
      {children}
    </div>
  );
}
