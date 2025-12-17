"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  domContentLoaded: number | null;
  windowLoad: number | null;
}

interface ResourceMetrics {
  cssCount: number;
  jsCount: number;
  imageCount: number;
  totalResources: number;
  transferSize: number;
}

/**
 * Performance monitoring component for tracking optimization improvements
 */
function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    domContentLoaded: null,
    windowLoad: null,
  });
  
  const [resourceMetrics, setResourceMetrics] = useState<ResourceMetrics>({
    cssCount: 0,
    jsCount: 0,
    imageCount: 0,
    totalResources: 0,
    transferSize: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when specifically enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showPerformanceMonitor') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);
    collectPerformanceMetrics();
    collectResourceMetrics();

    // Toggle visibility with keyboard shortcut (Ctrl+Shift+P)
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const collectPerformanceMetrics = () => {
    // Web Vitals with polyfill fallback
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID) - using 'first-input' if available
      try {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          });
        }).observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // Fallback for browsers without first-input support
        console.log('FID measurement not supported');
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      }).observe({ entryTypes: ['paint'] });
    }

    // Navigation timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      setMetrics(prev => ({
        ...prev,
        ttfb: navigation.responseStart - navigation.requestStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        windowLoad: navigation.loadEventEnd - navigation.fetchStart,
      }));
    });
  };

  const collectResourceMetrics = () => {
    setTimeout(() => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      
      let cssCount = 0;
      let jsCount = 0;
      let imageCount = 0;
      let totalTransferSize = 0;

      resources.forEach((resource) => {
        if (resource.name.includes('.css')) cssCount++;
        if (resource.name.includes('.js')) jsCount++;
        if (resource.name.match(/\.(jpg|jpeg|png|gif|svg|webp)/)) imageCount++;
        totalTransferSize += (resource as any).transferSize || 0;
      });

      setResourceMetrics({
        cssCount,
        jsCount,
        imageCount,
        totalResources: resources.length,
        transferSize: totalTransferSize,
      });
    }, 2000); // Delay to capture more resources
  };

  const formatTime = (time: number | null) => {
    if (time === null) return 'N/A';
    return `${time.toFixed(0)}ms`;
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  };

  const getScoreColor = (metric: string, value: number | null) => {
    if (value === null) return 'text-gray-500';
    
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'text-green-500' : value <= 4000 ? 'text-yellow-500' : 'text-red-500';
      case 'fid':
        return value <= 100 ? 'text-green-500' : value <= 300 ? 'text-yellow-500' : 'text-red-500';
      case 'cls':
        return value <= 0.1 ? 'text-green-500' : value <= 0.25 ? 'text-yellow-500' : 'text-red-500';
      case 'fcp':
        return value <= 1800 ? 'text-green-500' : value <= 3000 ? 'text-yellow-500' : 'text-red-500';
      case 'ttfb':
        return value <= 800 ? 'text-green-500' : value <= 1800 ? 'text-yellow-500' : 'text-red-500';
      default:
        return 'text-blue-500';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg text-xs font-mono max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm">Performance Monitor</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <div className="text-gray-400">Core Web Vitals</div>
          <div className={`${getScoreColor('lcp', metrics.lcp)}`}>
            LCP: {formatTime(metrics.lcp)}
          </div>
          <div className={`${getScoreColor('fid', metrics.fid)}`}>
            FID: {formatTime(metrics.fid)}
          </div>
          <div className={`${getScoreColor('cls', metrics.cls)}`}>
            CLS: {metrics.cls?.toFixed(3) || 'N/A'}
          </div>
        </div>
        
        <div>
          <div className="text-gray-400">Other Metrics</div>
          <div className={`${getScoreColor('fcp', metrics.fcp)}`}>
            FCP: {formatTime(metrics.fcp)}
          </div>
          <div className={`${getScoreColor('ttfb', metrics.ttfb)}`}>
            TTFB: {formatTime(metrics.ttfb)}
          </div>
          <div className="text-blue-500">
            Load: {formatTime(metrics.windowLoad)}
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 pt-2">
        <div className="text-gray-400 mb-1">Resources</div>
        <div className="text-xs">
          <div>CSS: {resourceMetrics.cssCount} files</div>
          <div>JS: {resourceMetrics.jsCount} files</div>
          <div>Images: {resourceMetrics.imageCount} files</div>
          <div>Total: {resourceMetrics.totalResources} resources</div>
          <div>Transfer: {formatSize(resourceMetrics.transferSize)}</div>
        </div>
      </div>
      
      <div className="text-gray-500 text-xs mt-2">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}

export default PerformanceMonitor;
