"use client";

import { useEffect, useState, useRef } from 'react';

interface AnimatedProgressProps {
  percentage: number;
  label?: string;
  color?: string;
  height?: number;
  duration?: number;
  showPercentage?: boolean;
  className?: string;
  animated?: boolean;
}

export default function AnimatedProgress({
  percentage,
  label,
  color = '#203FFC',
  height = 8,
  duration = 1500,
  showPercentage = true,
  className = '',
  animated = true
}: AnimatedProgressProps) {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) {
      setDisplayPercentage(percentage);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateProgress();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = progressRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [percentage, hasAnimated, animated]);

  const animateProgress = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = percentage;

    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const currentValue = startValue + (endValue - startValue) * easedProgress;
      setDisplayPercentage(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setDisplayPercentage(endValue);
      }
    };

    requestAnimationFrame(updateProgress);
  };

  return (
    <div ref={progressRef} className={`w-full ${className}`}>
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-sm font-bold text-gray-900 dark:text-white tabular-nums">
              {Math.round(displayPercentage)}%
            </span>
          )}
        </div>
      )}
      
      {/* Progress bar container */}
      <div 
        className="w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative"
        style={{ height: `${height}px` }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600" />
        
        {/* Progress fill */}
        <div
          className="relative h-full rounded-full transition-all duration-300 ease-out overflow-hidden"
          style={{
            width: `${displayPercentage}%`,
            background: `linear-gradient(90deg, ${color} 0%, ${color}CC 100%)`,
            boxShadow: `0 0 10px ${color}40`
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse" />
          
          {/* Animated dots */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-80 animate-pulse" />
        </div>
        
        {/* Glow effect */}
        <div 
          className="absolute top-0 left-0 h-full transition-all duration-500 ease-out opacity-60"
          style={{
            width: `${displayPercentage}%`,
            background: `linear-gradient(90deg, transparent 0%, ${color}40 50%, transparent 100%)`,
            filter: 'blur(2px)'
          }}
        />
      </div>
      
      {/* Success indicator */}
      {displayPercentage >= 100 && (
        <div className="flex items-center mt-2 text-green-600 dark:text-green-400">
          <svg className="w-4 h-4 mr-1 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-xs font-medium">Complete!</span>
        </div>
      )}
    </div>
  );
}
