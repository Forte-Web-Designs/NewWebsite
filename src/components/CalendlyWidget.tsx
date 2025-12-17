'use client';
import { useEffect, useState, useRef } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);
  const maxRetries = 3;

  const loadCalendly = () => {
    // Reset states
    setIsLoading(true);
    setHasError(false);

    // Check if Calendly script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    const initializeWidget = () => {
      // Check if Calendly object is available
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        try {
          // Initialize the widget
          (window as any).Calendly.initInlineWidget({
            url: url,
            parentElement: widgetRef.current,
            prefill: {},
            utm: {}
          });
          
          // Set a timeout to check if widget loaded
          setTimeout(() => {
            const calendlyWidget = widgetRef.current?.querySelector('iframe');
            if (calendlyWidget) {
              setIsLoading(false);
            } else if (retryCount < maxRetries) {
              setRetryCount(prev => prev + 1);
            } else {
              setHasError(true);
              setIsLoading(false);
            }
          }, 2000);
          
        } catch (error) {
          console.error('Calendly initialization error:', error);
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1);
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }
      } else {
        // Calendly not loaded yet, retry
        setTimeout(() => {
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1);
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }, 1000);
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        initializeWidget();
      };
      
      script.onerror = () => {
        console.error('Failed to load Calendly script');
        if (retryCount < maxRetries) {
          setRetryCount(prev => prev + 1);
        } else {
          setHasError(true);
          setIsLoading(false);
        }
      };
      
      document.head.appendChild(script);
    } else {
      initializeWidget();
    }
  };

  // Retry effect
  useEffect(() => {
    if (retryCount > 0 && retryCount <= maxRetries) {
      const retryTimeout = setTimeout(() => {
        loadCalendly();
      }, 1000 * retryCount); // Progressive delay
      
      return () => clearTimeout(retryTimeout);
    }
  }, [retryCount]);

  // Initial load
  useEffect(() => {
    loadCalendly();
  }, [url]);

  // Retry function
  const handleRetry = () => {
    setRetryCount(0);
    setHasError(false);
    loadCalendly();
  };

  if (hasError) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="text-center p-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Unable to Load Calendar
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            We're having trouble loading the booking calendar. Please try again or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
            <a
              href="mailto:seth@fortewebdesigns.com"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Email Us Instead
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 z-10" style={{height: '700px'}}>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-blue-500 bg-blue-100 dark:bg-blue-900/20 transition ease-in-out duration-150">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading Calendar...
            </div>
          </div>
        </div>
      )}
      
      {/* Calendly Widget Container */}
      <div 
        ref={widgetRef}
        className="calendly-inline-widget w-full overflow-hidden" 
        data-url={url}
        style={{minWidth: '320px', height: '700px', maxHeight: '700px'}}
      />
    </div>
  );
}
