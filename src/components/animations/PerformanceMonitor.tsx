"use client";

import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
  animationsActive: number;
  bundleSize: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    animationsActive: 0,
    bundleSize: 0,
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Monitor performance metrics
    const startTime = performance.now();
    
    // FPS monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setMetrics(prev => ({
          ...prev,
          fps: frameCount,
          loadTime: currentTime - startTime,
        }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    measureFPS();

    // Memory monitoring (if available)
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // MB
        }));
      };
      
      const memoryInterval = setInterval(checkMemory, 2000);
      return () => clearInterval(memoryInterval);
    }

  }, []);

  // Performance score calculation
  const getPerformanceScore = () => {
    let score = 100;
    
    if (metrics.fps < 30) score -= 30;
    else if (metrics.fps < 50) score -= 15;
    
    if (metrics.memoryUsage > 50) score -= 20;
    else if (metrics.memoryUsage > 30) score -= 10;
    
    if (metrics.loadTime > 3000) score -= 25;
    else if (metrics.loadTime > 1500) score -= 10;
    
    return Math.max(0, score);
  };

  const toggleOptimization = () => {
    setIsOptimized(!isOptimized);
    // This would toggle between optimized and unoptimized versions
    localStorage.setItem('forte-animations-optimized', String(!isOptimized));
    window.location.reload();
  };

  // Disabled for production-like experience
  return null;

  const score = getPerformanceScore();

  return (
    <div className="fixed bottom-4 left-4 bg-gray-900/95 text-white p-4 rounded-lg text-xs z-50 min-w-64">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-sm">Performance Monitor</h3>
        <div className={`px-2 py-1 rounded text-xs font-bold ${
          score >= 80 ? 'bg-green-600' : score >= 60 ? 'bg-yellow-600' : 'bg-red-600'
        }`}>
          {score}%
        </div>
      </div>
      
      <div className="space-y-1 mb-3">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps >= 50 ? 'text-green-400' : metrics.fps >= 30 ? 'text-amber-500' : 'text-red-400'}>
            {metrics.fps}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={metrics.loadTime <= 1500 ? 'text-green-400' : metrics.loadTime <= 3000 ? 'text-amber-500' : 'text-red-400'}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        {metrics.memoryUsage > 0 && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage <= 30 ? 'text-green-400' : metrics.memoryUsage <= 50 ? 'text-amber-500' : 'text-red-400'}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={toggleOptimization}
          className={`px-3 py-1 rounded text-xs font-medium ${
            isOptimized 
              ? 'bg-green-600 hover:bg-green-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors`}
        >
          {isOptimized ? 'Optimized ✓' : 'Enable Optimization'}
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-400">
        <div>• Green: Excellent performance</div>
        <div>• Yellow: Good performance</div>
        <div>• Red: Needs optimization</div>
      </div>
    </div>
  );
};
