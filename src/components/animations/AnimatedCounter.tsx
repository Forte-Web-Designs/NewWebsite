"use client";

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimal?: number;
  className?: string;
  trigger?: boolean;
}

export default function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = '',
  decimal = 0,
  className = '',
  trigger = true
}: CounterProps) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [trigger, hasStarted]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const totalChange = endValue - startValue;

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      const currentValue = startValue + (totalChange * easedProgress);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const formatNumber = (num: number): string => {
    const rounded = decimal > 0 ? num.toFixed(decimal) : Math.round(num).toString();
    
    if (separator && separator === ',') {
      return rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    return rounded;
  };

  return (
    <span 
      ref={countRef}
      className={`inline-flex items-center font-bold tabular-nums ${className}`}
    >
      <span className="inline-block transform transition-all duration-300">
        {prefix}
      </span>
      <span className={`inline-block transform transition-all duration-500 ${
        hasStarted ? 'scale-110' : 'scale-100'
      }`}>
        {formatNumber(count)}
      </span>
      <span className="inline-block transform transition-all duration-300">
        {suffix}
      </span>
    </span>
  );
}
