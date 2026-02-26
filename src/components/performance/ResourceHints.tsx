"use client";

import { useEffect } from 'react';

/**
 * Resource hints optimizer for better loading performance
 */
function ResourceHints() {
  useEffect(() => {
    addResourceHints();
  }, []);

  const addResourceHints = () => {
    const hints = [
      // DNS prefetch for external domains
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      
      // Preconnect for critical external resources
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      
      // Prefetch likely navigation targets
      { rel: 'prefetch', href: '/contact' },
      { rel: 'prefetch', href: '/services' },
      { rel: 'prefetch', href: '/case-studies' },
      
      // Preload critical assets
      { rel: 'preload', href: '/fonts/InterDisplay-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', href: '/fonts/InterDisplay-Medium.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      
      // Preload critical images (above the fold)
      { rel: 'preload', href: '/images/home/slider1.webp', as: 'image', type: 'image/webp' },
      { rel: 'preload', href: '/images/home/Frame1.png', as: 'image', type: 'image/png' },
    ];

    hints.forEach(hint => {
      // Check if hint already exists
      const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        
        if (hint.as) link.setAttribute('as', hint.as);
        if (hint.type) link.setAttribute('type', hint.type);
        if (hint.crossOrigin) link.setAttribute('crossorigin', hint.crossOrigin);
        
        document.head.appendChild(link);
      }
    });

    // Add viewport meta tag optimization
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
    }

    // Add performance hints for next navigation
    addNavigationHints();
  };

  const addNavigationHints = () => {
    // Monitor link hovers and prefetch on hover
    const links = document.querySelectorAll('a[href^="/"]');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
          const prefetchLink = document.createElement('link');
          prefetchLink.rel = 'prefetch';
          prefetchLink.href = href;
          document.head.appendChild(prefetchLink);
        }
      }, { passive: true });
    });

    // Intersection observer for prefetching links in viewport
    const linkObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          const href = link.getAttribute('href');
          
          if (href && href.startsWith('/') && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
          
          linkObserver.unobserve(link);
        }
      });
    }, { rootMargin: '50px' });

    // Observe all internal links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      linkObserver.observe(link);
    });
  };

  return null;
}

export default ResourceHints;
