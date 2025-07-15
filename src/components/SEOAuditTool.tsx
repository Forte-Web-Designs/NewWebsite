"use client";

import { useState, useEffect } from 'react';

interface AuditResults {
  desktop: any;
  mobile: any;
}

interface SEOAuditToolProps {
  websiteUrl: string;
  setWebsiteUrl: (url: string) => void;
  onResultsUpdate: (results: AuditResults | null, url: string) => void;
  onResultsReady?: () => void;
  setAutoRunTrigger?: (triggerFunction: () => void) => void;
  shouldHighlightButton?: boolean;
  auditToolRef?: React.RefObject<HTMLDivElement | null>;
}

export default function SEOAuditTool({ 
  websiteUrl, 
  setWebsiteUrl, 
  onResultsUpdate,
  onResultsReady,
  setAutoRunTrigger,
  shouldHighlightButton = false,
  auditToolRef
}: SEOAuditToolProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Register the runAudit function with the parent component for auto-run
  useEffect(() => {
    if (setAutoRunTrigger) {
      const isMobile = /Mobi|Android/i.test(navigator.userAgent);
      
      if (isMobile) {
        // For mobile, add a small delay to ensure everything is ready
        setTimeout(() => {
          setAutoRunTrigger(runAudit);
          console.log('📱 Mobile auto-run function registered');
        }, 500);
      } else {
        setAutoRunTrigger(runAudit);
        console.log('💻 Desktop auto-run function registered');
      }
    }
  }, [setAutoRunTrigger]); // Removed websiteUrl dependency to avoid unnecessary re-registrations

  const loadingMessages = [
    "Checking your website's connection...",
    "Analyzing desktop loading speed and performance...",
    "Testing mobile responsiveness and speed...",
    "Reviewing your Google search visibility...",
    "Checking if your site is easy for everyone to use...",
    "Comparing desktop vs mobile user experience...",
    "Looking for ways to help you get more leads and customers...",
    "Reviewing your images and content for best results...",
    "Checking for hidden issues that could cost you business...",
    "Almost done—preparing your personalized desktop & mobile results!",
    "Still working... Comprehensive analysis takes a little longer. Hang tight!"
  ];

  const validateUrl = (url: string): string | null => {
    if (!url.trim()) {
      return "Please enter a website URL";
    }

    // Add protocol if missing
    let validUrl = url.trim();
    if (!validUrl.startsWith('http://') && !validUrl.startsWith('https://')) {
      validUrl = 'https://' + validUrl;
    }

    try {
      new URL(validUrl);
      return validUrl;
    } catch {
      return null;
    }
  };

  const runAudit = async () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    console.log(`🚀 Running audit - Mobile: ${isMobile}, URL: ${websiteUrl}`);
    
    const validatedUrl = validateUrl(websiteUrl);
    if (!validatedUrl) {
      alert('Please enter a valid website URL (e.g., example.com or https://example.com)');
      return;
    }

    setIsLoading(true);
    onResultsUpdate(null, validatedUrl);

    // Start loading message rotation
    const messageInterval = setInterval(() => {
      setLoadingMessage(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = currentIndex + 1;
        if (nextIndex < loadingMessages.length) {
          return loadingMessages[nextIndex];
        } else {
          // Loop back to the last few messages
          return loadingMessages[loadingMessages.length - 1];
        }
      });
    }, 3000);

    setLoadingMessage(loadingMessages[0]);

    try {
      // Using PageSpeed Insights API
      const apiKey = process.env.NEXT_PUBLIC_PAGESPEED_API_KEY || 'AIzaSyBd6mtWxDHRXo99dwG79FC2HINvGUzDPf0';
      const categories = ['performance', 'accessibility', 'best-practices', 'seo'];

      const getEndpoint = (strategy: string) => {
        const params = new URLSearchParams({
          url: validatedUrl,
          key: apiKey,
          strategy
        });
        categories.forEach(cat => params.append('category', cat));
        return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?${params}`;
      };

      // Fetch both desktop and mobile results in parallel
      const [desktopResponse, mobileResponse] = await Promise.all([
        fetch(getEndpoint('desktop')),
        fetch(getEndpoint('mobile'))
      ]);

      if (!desktopResponse.ok || !mobileResponse.ok) {
        throw new Error('Failed to fetch audit data');
      }

      const [desktopData, mobileData] = await Promise.all([
        desktopResponse.json(),
        mobileResponse.json()
      ]);

      const results: AuditResults = {
        desktop: desktopData,
        mobile: mobileData
      };

      onResultsUpdate(results, validatedUrl);
      
      // Trigger scroll to results after a short delay
      if (onResultsReady) {
        setTimeout(() => {
          onResultsReady();
        }, 100);
      }

    } catch (error) {
      console.error('Audit error:', error);
      alert('Failed to run audit. Please check the URL and try again.');
      onResultsUpdate(null, validatedUrl);
    } finally {
      clearInterval(messageInterval);
      setIsLoading(false);
      setLoadingMessage('');
    }
  };

  return (
    <div ref={auditToolRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      {/* Website Audit Tool - Mobile Optimized */}
      <div className="flex flex-col gap-4 border border-[#FFFFFF14] rounded-xl p-4 sm:p-6 bg-gradient-to-r from-[#081B8B]/20 to-[#3448BF]/20">
        {/* Header - Both Desktop and Mobile Analysis */}
        <div className="text-center">
          <h3 className="text-white font-medium text-lg mb-2">Complete Website Analysis</h3>
          <p className="text-white/80 text-sm">We'll analyze both desktop and mobile performance for a complete picture</p>
        </div>

        {/* Input and Button Section - Stacked on Mobile */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center">
          {/* Input Field */}
          <div className="flex-1">
            <input
              type="url"
              placeholder="Enter your website's URL (e.g., example.com)"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white/20 text-sm sm:text-base rounded-lg border border-white/20 focus:border-white/50 transition-all"
              disabled={isLoading}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  runAudit();
                }
              }}
            />
          </div>

          {/* Run Audit Button */}
          <button
            onClick={runAudit}
            disabled={isLoading || !websiteUrl.trim()}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition-all text-sm sm:text-base min-w-[140px] ${
              isLoading || !websiteUrl.trim()
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : shouldHighlightButton
                ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-xl animate-pulse ring-4 ring-orange-300'
                : 'bg-[#081B8B] hover:bg-[#061559] text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing...</span>
              </div>
            ) : (
              'Run Audit'
            )}
          </button>
        </div>
      </div>

      {/* Loading Message - Mobile Optimized */}
      {isLoading && loadingMessage && (
        <div className="mt-6 text-center">
          <div className="bg-[#081B8B]/20 rounded-xl p-4 sm:p-6 border border-white/10 mx-4 sm:mx-0">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="text-white font-medium text-sm sm:text-base">Analyzing Desktop & Mobile Performance</span>
            </div>
            <p className="text-white/80 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              {loadingMessage}
            </p>
            <div className="mt-3 text-xs text-white/60">
              Running both desktop and mobile audits • This usually takes 15-20 seconds
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
