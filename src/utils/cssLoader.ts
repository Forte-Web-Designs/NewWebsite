/**
 * CSS Loader utility for optimizing non-critical CSS loading
 * This helps reduce render blocking by deferring non-critical stylesheets
 */

export class CSSLoader {
  private static loadedStylesheets = new Set<string>();

  /**
   * Preload CSS with high priority (critical CSS)
   */
  static preloadCSS(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedStylesheets.has(href)) {
        resolve();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = href;
      link.onload = () => {
        // Convert to stylesheet after preload
        link.rel = 'stylesheet';
        this.loadedStylesheets.add(href);
        resolve();
      };
      link.onerror = reject;
      
      document.head.appendChild(link);
    });
  }

  /**
   * Load CSS asynchronously (non-critical CSS)
   */
  static loadCSS(href: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedStylesheets.has(href)) {
        resolve();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print'; // Load as print media first (non-blocking)
      
      link.onload = () => {
        // Switch to all media after load
        link.media = 'all';
        this.loadedStylesheets.add(href);
        resolve();
      };
      link.onerror = reject;
      
      document.head.appendChild(link);
    });
  }

  /**
   * Load CSS with media query for responsive loading
   */
  static loadCSSWithMedia(href: string, media: string = 'all'): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loadedStylesheets.has(href)) {
        resolve();
        return;
      }

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = media;
      
      link.onload = () => {
        this.loadedStylesheets.add(href);
        resolve();
      };
      link.onerror = reject;
      
      document.head.appendChild(link);
    });
  }

  /**
   * Load inline CSS for critical styles
   */
  static inlineCSS(css: string, id?: string): void {
    const style = document.createElement('style');
    if (id) style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  }

  /**
   * Remove CSS by href or id
   */
  static removeCSS(identifier: string): void {
    // Try to find by href first
    let element = document.querySelector(`link[href="${identifier}"]`) as HTMLLinkElement;
    
    // If not found by href, try by id
    if (!element) {
      element = document.getElementById(identifier) as HTMLLinkElement;
    }
    
    if (element) {
      element.remove();
      this.loadedStylesheets.delete(identifier);
    }
  }
}

/**
 * React hook for loading CSS dynamically
 */
export function useCSS(href: string, defer: boolean = true): boolean {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!href) return;

    const loadMethod = defer ? CSSLoader.loadCSS : CSSLoader.preloadCSS;
    
    loadMethod(href)
      .then(() => setLoaded(true))
      .catch(console.error);

    return () => {
      if (defer) {
        CSSLoader.removeCSS(href);
      }
    };
  }, [href, defer]);

  return loaded;
}

// React import for the hook
import React from 'react';
