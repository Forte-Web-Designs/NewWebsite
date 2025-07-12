"use client";

import { useState } from 'react';
import DarkButton from './DarkButton';

interface AuditResults {
  desktop: any;
  mobile: any;
}

interface SEOAuditToolProps {
  websiteUrl: string;
  setWebsiteUrl: (url: string) => void;
  selectedDevice: string;
  setSelectedDevice: (device: string) => void;
  onResultsUpdate: (results: AuditResults | null, url: string) => void;
  onResultsReady?: () => void;
}

export default function SEOAuditTool({ 
  websiteUrl, 
  setWebsiteUrl, 
  selectedDevice, 
  setSelectedDevice,
  onResultsUpdate,
  onResultsReady
}: SEOAuditToolProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingMessages = [
    "Checking your website's connection...",
    "Analyzing how fast your site loads...",
    "Reviewing your Google search visibility...",
    "Checking if your site is easy for everyone to use...",
    "Looking for ways to help you get more leads and customers...",
    "Reviewing your images and content for best results...",
    "Checking for hidden issues that could cost you business...",
    "Almost done—preparing your personalized results!",
    "Still working... Large sites can take a little longer. Hang tight!"
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
    const validatedUrl = validateUrl(websiteUrl);
    if (!validatedUrl) {
      alert('Please enter a valid website URL (e.g., example.com or https://example.com)');
      return;
    }

    setIsLoading(true);
    setLoadingStep(0);
    onResultsUpdate(null, validatedUrl);

    // Start loading message rotation
    let messageInterval = setInterval(() => {
      setLoadingStep(prev => {
        const nextStep = prev + 1;
        if (nextStep < loadingMessages.length) {
          setLoadingMessage(loadingMessages[nextStep]);
          return nextStep;
        } else {
          // Loop back to the last few messages
          const loopMessage = loadingMessages[loadingMessages.length - 1];
          setLoadingMessage(loopMessage);
          return prev;
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
    <div className="w-full">
      {/* Website Audit Tool */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-0 border border-[#FFFFFF14] rounded-xl p-[6px]">
        {/* Toggle Buttons */}
        <div className="flex bg-[#3448BF] rounded-xl p-1 border border-[#858585] mx-auto lg:mx-0">
          <button
            onClick={() => setSelectedDevice("Desktop")}
            className={`px-4 lg:px-6 py-2 rounded-xl text-sm font-medium transition-all ${
              selectedDevice === "Desktop"
                ? "bg-[#081B8B] rounded-xl text-white"
                : "text-[#D6DCFF]"
            }`}
            disabled={isLoading}
          >
            Desktop
          </button>

          <button
            onClick={() => setSelectedDevice("Mobile")}
            className={`px-4 py-[10px] rounded-xl text-sm font-medium transition-all ${
              selectedDevice === "Mobile"
                ? "bg-[#081B8B] text-white"
                : "text-[#D6DCFF]"
            }`}
            disabled={isLoading}
          >
            Mobile
          </button>
        </div>

        {/* Input Field */}
        <div className="flex-1 lg:mx-8 mx-2">
          <input
            type="url"
            placeholder="Enter your website's URL (e.g., example.com)"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full px-4 py-3 bg-transparent text-white placeholder-white focus:outline-none text-sm lg:text-base"
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
          className={`px-4 lg:px-6 py-3 rounded-xl font-medium transition-all text-sm lg:text-base ${
            isLoading || !websiteUrl.trim()
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-[#081B8B] hover:bg-[#061559] text-white'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="hidden lg:inline">Analyzing...</span>
              <span className="lg:hidden">...</span>
            </div>
          ) : (
            'Run Audit'
          )}
        </button>
      </div>

      {/* Loading Message */}
      {isLoading && loadingMessage && (
        <div className="mt-4 text-center">
          <p className="text-white/80 text-xs lg:text-sm animate-pulse px-2">
            {loadingMessage}
          </p>
        </div>
      )}
    </div>
  );
}
