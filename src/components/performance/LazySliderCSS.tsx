"use client";

import { useEffect, useState } from 'react';

interface LazySliderCSSProps {
  children: React.ReactNode;
  priority?: boolean;
}

/**
 * Component that lazy loads slick carousel CSS only when sliders are actually used
 */
function LazySliderCSS({ children, priority = false }: LazySliderCSSProps) {
  const [cssLoaded, setCSSLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If priority is true, load CSS immediately
    if (priority) {
      loadSliderCSS();
      return;
    }

    // Otherwise, use intersection observer to load CSS when slider comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !cssLoaded) {
            setIsVisible(true);
            loadSliderCSS();
          }
        });
      },
      { 
        rootMargin: '200px' // Load CSS 200px before the slider is visible
      }
    );

    // Find all slider elements and observe them
    const sliderElements = document.querySelectorAll('[data-slider]');
    sliderElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [priority, cssLoaded]);

  const loadSliderCSS = async () => {
    if (cssLoaded) return;

    try {
      // Load slick CSS files dynamically
      await Promise.all([
        loadCSS('/css/slick.css'),
        loadCSS('/css/slick-theme.css')
      ]);
      
      setCSSLoaded(true);
    } catch (error) {
      console.warn('Failed to load slider CSS:', error);
      // Fallback: load from CDN or inline critical styles
      loadFallbackCSS();
    }
  };

  const loadCSS = (href: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Check if already loaded
      if (document.querySelector(`link[href="${href}"]`)) {
        resolve();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print'; // Load as print initially (non-blocking)
      
      link.onload = () => {
        link.media = 'all'; // Switch to all media after load
        resolve();
      };
      link.onerror = reject;
      
      document.head.appendChild(link);
    });
  };

  const loadFallbackCSS = () => {
    // Critical slick styles inline to prevent layout shift
    const criticalSlickCSS = `
      .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
      }
      
      .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
      
      .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      
      .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
      }
      
      .slick-slide img {
        display: block;
      }
      
      .slick-slide.slick-loading img {
        display: none;
      }
      
      .slick-slide.slick-current {
        display: block;
      }
      
      .slick-loading .slick-slide {
        visibility: hidden;
      }
      
      .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
      }
      
      .slick-dots {
        position: absolute;
        bottom: -25px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
      }
      
      .slick-dots li {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
      }
      
      .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
      }
      
      .slick-dots li button:before {
        font-size: 6px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: .25;
        color: black;
      }
      
      .slick-dots li.slick-active button:before {
        opacity: .75;
        color: black;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalSlickCSS;
    style.id = 'slick-critical-css';
    document.head.appendChild(style);
    
    setCSSLoaded(true);
  };

  return (
    <div data-slider={!priority ? "lazy" : "priority"}>
      {children}
    </div>
  );
}

export default LazySliderCSS;
