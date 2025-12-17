"use client";

import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';

// Lazy load animation components
const ScrollReveal = React.lazy(() => import('./ScrollReveal'));
const FloatingElements = React.lazy(() => import('./FloatingElements'));
const AnimatedCard = React.lazy(() => import('./AnimatedCard'));
const AnimatedCounter = React.lazy(() => import('./AnimatedCounter'));
const AnimatedInput = React.lazy(() => import('./AnimatedInput'));
const AnimatedButton = React.lazy(() => import('./AnimatedButton'));
const AnimatedProgress = React.lazy(() => import('./AnimatedProgress'));
const LoadingStates = React.lazy(() => import('./LoadingStates'));

// Fallback components for SSR and loading states
const FallbackDiv = ({ children, className = "", ...props }: any) => (
  <div className={className} {...props}>{children}</div>
);

const FallbackSpan = ({ children, className = "", ...props }: any) => (
  <span className={className} {...props}>{children}</span>
);

// Reduced motion detection
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

// Animation performance context
export const AnimationContext = React.createContext({
  isEnabled: true,
  isLoaded: false,
});

export const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  useEffect(() => {
    // Small delay to let initial page content load first
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const value = {
    isEnabled: !prefersReducedMotion,
    isLoaded,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

// Lazy wrapper components with fallbacks
export const LazyScrollReveal = ({ children, fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    return fallback ? <FallbackDiv {...props}>{children}</FallbackDiv> : children;
  }

  return (
    <Suspense fallback={<FallbackDiv {...props}>{children}</FallbackDiv>}>
      <ScrollReveal {...props}>{children}</ScrollReveal>
    </Suspense>
  );
};

export const LazyFloatingElements = ({ fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    return fallback ? null : null;
  }

  return (
    <Suspense fallback={null}>
      <FloatingElements {...props} />
    </Suspense>
  );
};

export const LazyAnimatedCard = ({ children, fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    return fallback ? <FallbackDiv {...props}>{children}</FallbackDiv> : children;
  }

  return (
    <Suspense fallback={<FallbackDiv {...props}>{children}</FallbackDiv>}>
      <AnimatedCard {...props}>{children}</AnimatedCard>
    </Suspense>
  );
};

export const LazyAnimatedCounter = ({ fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    const { end, suffix = "", prefix = "" } = props;
    return fallback ? <FallbackSpan>{prefix}{end}{suffix}</FallbackSpan> : null;
  }

  return (
    <Suspense fallback={<FallbackSpan>{props.prefix || ""}{props.end}{props.suffix || ""}</FallbackSpan>}>
      <AnimatedCounter {...props} />
    </Suspense>
  );
};

export const LazyAnimatedInput = ({ fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    if (!fallback) return null;
    const { multiline, ...inputProps } = props;
    return multiline ? <textarea {...inputProps} /> : <input {...inputProps} />;
  }

  return (
    <Suspense fallback={
      props.multiline ? <textarea {...props} /> : <input {...props} />
    }>
      <AnimatedInput {...props} />
    </Suspense>
  );
};

export const LazyAnimatedButton = ({ children, fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    return fallback ? <button {...props}>{children}</button> : children;
  }

  return (
    <Suspense fallback={<button {...props}>{children}</button>}>
      <AnimatedButton {...props}>{children}</AnimatedButton>
    </Suspense>
  );
};

export const LazyAnimatedProgress = ({ fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    if (!fallback) return null;
    const { progress = 0 } = props;
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${props.progress || 0}%` }}
        />
      </div>
    }>
      <AnimatedProgress {...props} />
    </Suspense>
  );
};

export const LazyLoadingStates = ({ fallback = true, ...props }: any) => {
  const { isEnabled, isLoaded } = React.useContext(AnimationContext);
  
  if (!isEnabled || !isLoaded) {
    if (!fallback || !props.isLoading) return null;
    return (
      <div className="flex items-center justify-center py-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <Suspense fallback={
      props.isLoading ? (
        <div className="flex items-center justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : null
    }>
      <LoadingStates {...props} />
    </Suspense>
  );
};

// Performance monitoring hook
export const useAnimationPerformance = () => {
  const [metrics, setMetrics] = useState({
    animationsLoaded: 0,
    renderTime: 0,
    memoryUsage: 0,
  });

  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name.includes('animation')) {
          setMetrics(prev => ({
            ...prev,
            renderTime: entry.duration,
          }));
        }
      });
    });

    observer.observe({ entryTypes: ['measure'] });

    return () => observer.disconnect();
  }, []);

  return metrics;
};
