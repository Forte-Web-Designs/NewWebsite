"use client";

import { useEffect, useState } from 'react';

interface BundleStats {
  totalSize: number;
  animationSize: number;
  loadTime: number;
  componentsLoaded: string[];
}

export const useBundleAnalyzer = () => {
  const [stats, setStats] = useState<BundleStats>({
    totalSize: 0,
    animationSize: 0,
    loadTime: 0,
    componentsLoaded: [],
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Monitor resource loading
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.name.includes('animation') || entry.name.includes('Animation')) {
          setStats(prev => ({
            ...prev,
            animationSize: prev.animationSize + (entry as any).transferSize || 0,
            loadTime: performance.now() - startTime,
            componentsLoaded: [...prev.componentsLoaded, entry.name],
          }));
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['resource'] });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    return () => observer.disconnect();
  }, []);

  return stats;
};

export const BundleMonitor: React.FC = () => {
  const stats = useBundleAnalyzer();
  const [showDetails, setShowDetails] = useState(false);

  // Disabled for production-like experience
  return null;

  return (
    <div className="fixed top-4 right-4 bg-blue-900/90 text-white p-3 rounded-lg text-xs z-50 max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Bundle Monitor</h3>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-xs bg-blue-700 px-2 py-1 rounded"
        >
          {showDetails ? 'Hide' : 'Show'}
        </button>
      </div>
      
      <div>Load Time: {stats.loadTime.toFixed(0)}ms</div>
      <div>Animation Size: {(stats.animationSize / 1024).toFixed(1)}KB</div>
      <div>Components: {stats.componentsLoaded.length}</div>
      
      {showDetails && (
        <div className="mt-2 max-h-32 overflow-y-auto">
          <h4 className="font-semibold">Loaded Components:</h4>
          {stats.componentsLoaded.map((component, index) => (
            <div key={index} className="text-xs text-gray-300 truncate">
              {component.split('/').pop()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
