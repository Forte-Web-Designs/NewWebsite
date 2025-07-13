"use client";

import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { AnimationConfig, detectOptimalConfig, PERFORMANCE_BUDGETS, DEFAULT_CONFIG } from './config';

interface AnimationManagerState {
  config: AnimationConfig;
  activeAnimations: Set<string>;
  frameRate: number;
  isThrottled: boolean;
  performanceScore: number;
  setConfig: (config: Partial<AnimationConfig>) => void;
  registerAnimation: (id: string) => boolean;
  unregisterAnimation: (id: string) => void;
}

const AnimationManagerContext = createContext<AnimationManagerState | null>(null);

export const useAnimationManager = () => {
  const context = useContext(AnimationManagerContext);
  if (!context) {
    throw new Error('useAnimationManager must be used within AnimationManagerProvider');
  }
  return context;
};

export const AnimationManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfigState] = useState<AnimationConfig>(() => {
    // Safe initialization that works in both SSR and client
    if (typeof window === 'undefined') {
      return DEFAULT_CONFIG;
    }
    try {
      return detectOptimalConfig();
    } catch (error) {
      console.warn('Failed to detect optimal config, using default:', error);
      return DEFAULT_CONFIG;
    }
  });
  const [activeAnimations, setActiveAnimations] = useState<Set<string>>(new Set());
  const [frameRate, setFrameRate] = useState(60);
  const [isThrottled, setIsThrottled] = useState(false);
  const [performanceScore, setPerformanceScore] = useState(100);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  // Monitor frame rate and performance
  useEffect(() => {
    let animationId: number;
    
    const measureFrameRate = () => {
      const now = performance.now();
      frameCountRef.current++;
      
      if (now - lastTimeRef.current >= 1000) {
        const fps = frameCountRef.current;
        setFrameRate(fps);
        frameCountRef.current = 0;
        lastTimeRef.current = now;
        
        // Calculate performance score
        let score = 100;
        if (fps < PERFORMANCE_BUDGETS.minFPS) score -= 40;
        else if (fps < PERFORMANCE_BUDGETS.targetFPS) score -= 20;
        
        if (activeAnimations.size > PERFORMANCE_BUDGETS.maxConcurrentAnimations) {
          score -= 20;
        }
        
        setPerformanceScore(Math.max(0, score));
        
        // Auto-adjust quality based on performance
        if (fps < PERFORMANCE_BUDGETS.minFPS && !isThrottled) {
          setIsThrottled(true);
          setConfigState(prev => ({
            ...prev,
            maxConcurrent: Math.max(2, prev.maxConcurrent - 2),
            quality: fps < 20 ? 'low' : 'medium',
          }));
        } else if (fps > PERFORMANCE_BUDGETS.targetFPS - 10 && isThrottled) {
          setIsThrottled(false);
          setConfigState(prev => ({
            ...prev,
            maxConcurrent: Math.min(12, prev.maxConcurrent + 1),
            quality: 'high',
          }));
        }
      }
      
      animationId = requestAnimationFrame(measureFrameRate);
    };
    
    measureFrameRate();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isThrottled, activeAnimations.size]);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = () => {
      setConfigState(prev => ({
        ...prev,
        reducedMotion: mediaQuery.matches,
        enabled: !mediaQuery.matches,
      }));
    };
    
    handleChange(); // Set initial value
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const setConfig = (newConfig: Partial<AnimationConfig>) => {
    setConfigState(prev => ({ ...prev, ...newConfig }));
  };

  const registerAnimation = (id: string): boolean => {
    if (!config.enabled || config.reducedMotion) {
      return false;
    }

    if (activeAnimations.size >= config.maxConcurrent) {
      // Animation queue is full, deny registration
      return false;
    }

    setActiveAnimations(prev => new Set([...prev, id]));
    return true;
  };

  const unregisterAnimation = (id: string) => {
    setActiveAnimations(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  const value: AnimationManagerState = {
    config,
    activeAnimations,
    frameRate,
    isThrottled,
    performanceScore,
    setConfig,
    registerAnimation,
    unregisterAnimation,
  };

  return (
    <AnimationManagerContext.Provider value={value}>
      {children}
    </AnimationManagerContext.Provider>
  );
};

// Hook for components to check if they should animate
export const useCanAnimate = (animationId: string) => {
  const { config, registerAnimation, unregisterAnimation } = useAnimationManager();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    if (config.enabled && !config.reducedMotion) {
      const allowed = registerAnimation(animationId);
      setCanAnimate(allowed);

      if (allowed) {
        return () => unregisterAnimation(animationId);
      }
    } else {
      setCanAnimate(false);
    }
  }, [animationId, config.enabled, config.reducedMotion, registerAnimation, unregisterAnimation]);

  return canAnimate;
};

// Performance settings component for debugging
export const AnimationDebugPanel: React.FC = () => {
  const { config, activeAnimations, frameRate, isThrottled, performanceScore, setConfig } = useAnimationManager();

  // Disabled for production-like experience
  return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
      <h3 className="font-bold mb-2">Animation Debug</h3>
      <div>FPS: {frameRate}</div>
      <div>Active: {activeAnimations.size}/{config.maxConcurrent}</div>
      <div>Throttled: {isThrottled ? 'Yes' : 'No'}</div>
      <div>Quality: {config.quality}</div>
      <div>Score: {performanceScore}%</div>
      
      <div className="mt-2">
        <button
          onClick={() => setConfig({ quality: 'high' })}
          className="bg-green-600 px-2 py-1 rounded mr-1"
        >
          High
        </button>
        <button
          onClick={() => setConfig({ quality: 'low' })}
          className="bg-red-600 px-2 py-1 rounded"
        >
          Low
        </button>
      </div>
    </div>
  );
};
