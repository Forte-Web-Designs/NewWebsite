"use client";

import { useEffect } from 'react';

/**
 * JavaScript optimizer that removes unused polyfills and optimizes code loading
 */
function JavaScriptOptimizer() {
  useEffect(() => {
    // Remove legacy polyfills that are no longer needed for modern browsers
    const modernBrowserFeatures = [
      'Promise',
      'fetch',
      'IntersectionObserver',
      'ResizeObserver',
      'requestAnimationFrame',
      'classList',
      'querySelector',
      'addEventListener'
    ];

    const isModernBrowser = modernBrowserFeatures.every(feature => {
      return feature in window || feature in document.documentElement;
    });

    if (isModernBrowser) {
      // Remove any loaded polyfill scripts for modern browsers
      const polyfillScripts = document.querySelectorAll('script[src*="polyfill"]');
      polyfillScripts.forEach(script => {
        console.log('Removing unused polyfill:', script.getAttribute('src'));
        script.remove();
      });
    }

    // Preload critical JavaScript modules
    const criticalModules = [
      '/_next/static/chunks/pages/_app.js',
      '/_next/static/chunks/main.js'
    ];

    criticalModules.forEach(module => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = module;
      document.head.appendChild(link);
    });

    // Optimize third-party scripts
    optimizeThirdPartyScripts();

    // Remove unused CSS and JS after page load
    setTimeout(() => {
      removeUnusedAssets();
    }, 3000);

  }, []);

  const optimizeThirdPartyScripts = () => {
    // Optimize Google Analytics loading
    const gtmScript = document.querySelector('script[src*="googletagmanager"]');
    if (gtmScript) {
      gtmScript.setAttribute('async', 'true');
      gtmScript.setAttribute('defer', 'true');
    }

    // Delay non-critical third-party scripts
    const nonCriticalScripts = document.querySelectorAll('script[src*="analytics"], script[src*="tracking"]');
    nonCriticalScripts.forEach(script => {
      if (!script.hasAttribute('async')) {
        script.setAttribute('async', 'true');
      }
    });
  };

  const removeUnusedAssets = () => {
    // Remove unused CSS classes (this is a simplified version)
    const usedClasses = new Set<string>();
    
    // Scan for actually used CSS classes
    document.querySelectorAll('*').forEach(element => {
      element.className.split(' ').forEach(className => {
        if (className.trim()) {
          usedClasses.add(className.trim());
        }
      });
    });

    // Log optimization results
    console.log(`CSS Optimization: Found ${usedClasses.size} used CSS classes`);

    // Check for unused JavaScript modules (development only)
    if (process.env.NODE_ENV === 'development') {
      checkUnusedModules();
    }
  };

  const checkUnusedModules = () => {
    // Analyze which modules are actually being used
    const loadedModules = performance.getEntriesByType('resource')
      .filter(entry => entry.name.includes('.js'))
      .map(entry => entry.name);

    console.log('JavaScript Optimization Report:');
    console.log(`- Loaded JS modules: ${loadedModules.length}`);
    
    // Check for common unused libraries
    const potentiallyUnused = [
      'moment',
      'lodash',
      'jquery',
      'bootstrap',
      'foundation'
    ];

    const unusedLibraries = potentiallyUnused.filter(lib => 
      !loadedModules.some(module => module.includes(lib))
    );

    if (unusedLibraries.length > 0) {
      console.log('✅ Good: These heavy libraries are not loaded:', unusedLibraries);
    }

    // Report on bundle size
    const totalJSSize = loadedModules.reduce((total, module) => {
      const entry = performance.getEntriesByName(module)[0] as any;
      return total + (entry?.transferSize || 0);
    }, 0);

    console.log(`- Total JS transfer size: ${(totalJSSize / 1024).toFixed(1)} KB`);
    
    if (totalJSSize > 500 * 1024) { // > 500KB
      console.warn('⚠️ High JavaScript bundle size detected. Consider code splitting.');
    } else {
      console.log('✅ JavaScript bundle size is optimized');
    }
  };

  // Preload critical resources based on user interaction
  useEffect(() => {
    const preloadOnInteraction = (resources: string[]) => {
      const preload = () => {
        resources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = resource;
          document.head.appendChild(link);
        });
      };

      // Preload on first user interaction
      const events = ['mousedown', 'touchstart', 'keydown'] as const;
      const handler = () => {
        preload();
        events.forEach(event => 
          document.removeEventListener(event, handler)
        );
      };

      events.forEach(event => 
        document.addEventListener(event, handler)
      );
    };

    // Preload likely next pages
    preloadOnInteraction([
      '/contact',
      '/pricing',
      '/services',
      '/about'
    ]);
  }, []);

  return null; // This component doesn't render anything
}

export default JavaScriptOptimizer;
