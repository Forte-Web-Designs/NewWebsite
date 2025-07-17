"use client";

import { Icon } from "@/components/images/Icon";
import { useEffect, useState, useRef, Suspense } from "react";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";
import { SectionBackgroundAnimation } from "@/components/animations/BackgroundAnimation";

function OptimizedSEOAuditContent() {
  const searchParams = useSearchParams();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gradesRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);

  const loadingStages = [
    { stage: "Connection", message: "Checking your website's connection...", progress: 10 },
    { stage: "Desktop Analysis", message: "Analyzing desktop loading speed and performance...", progress: 25 },
    { stage: "Mobile Analysis", message: "Testing mobile responsiveness and speed...", progress: 45 },
    { stage: "SEO Review", message: "Reviewing your Google search visibility...", progress: 65 },
    { stage: "Accessibility Check", message: "Checking if your site is easy for everyone to use...", progress: 80 },
    { stage: "Final Review", message: "Comparing desktop vs mobile user experience...", progress: 90 },
    { stage: "Optimization Tips", message: "Looking for ways to help you get more leads and customers...", progress: 95 },
    { stage: "Complete", message: "Almost done—preparing your personalized desktop & mobile results!", progress: 100 }
  ];

  // Handle URL parameters
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam) {
      setWebsiteUrl(urlParam);
    }
  }, [searchParams]);

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
    setLoadingProgress(0);
    setAuditResults(null);

    // Animate through loading stages
    let currentStageIndex = 0;
    const progressInterval = setInterval(() => {
      if (currentStageIndex < loadingStages.length) {
        const stage = loadingStages[currentStageIndex];
        setCurrentStage(stage.stage);
        setLoadingMessage(stage.message);
        setLoadingProgress(stage.progress);
        currentStageIndex++;
      }
    }, 2000);

    try {
      // API call to get audit results
      const response = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: validatedUrl }),
      });

      if (!response.ok) {
        throw new Error('Audit failed');
      }

      const data = await response.json();
      
      // Complete the progress
      setLoadingProgress(100);
      setCurrentStage('Complete');
      setLoadingMessage('🎉 Analysis complete! Displaying your results...');

      setTimeout(() => {
        setAuditResults(data);
        setAuditedUrl(validatedUrl);
        
        // Scroll to results
        setTimeout(() => {
          if (resultsRef.current) {
            resultsRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start' 
            });
          }
        }, 100);
      }, 800);

    } catch (error) {
      console.error('Audit error:', error);
      alert('Failed to run audit. Please check the URL and try again.');
    } finally {
      clearInterval(progressInterval);
      setIsLoading(false);
      setLoadingMessage('');
      setLoadingProgress(0);
      setCurrentStage('');
    }
  };

  return (
    <div className="relative min-h-screen">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        
        {/* Hero Section - Two Column Layout */}
        <section className="container max-w-7xl mx-auto px-5 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-200/30 dark:border-blue-800/30">
                🚀 Free Analysis
              </div>
              
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white">
                Curious How Your Website 
                <span className="text-blue-600 dark:text-blue-400"> Really</span>
                <br />
                <span className="text-blue-700 dark:text-blue-300">Performs?</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Want to see how your website really performs? Our free analysis takes 30 seconds and might surprise you.
              </p>
              
              {/* Benefits List */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">100% Free</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">Instant Results</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <span className="text-green-500">✓</span>
                  <span className="font-medium">No Email Required</span>
                </div>
              </div>
            </div>

            {/* Right Column - Audit Form */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700">
              {/* Header */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-blue-400 mb-3">
                  🚀 <span className="font-semibold">Free 5-Point Website Audit</span>
                </div>
                <p className="text-slate-300 text-sm mb-1">
                  See what's helping or hurting your site — instantly.
                </p>
                <p className="text-slate-400 text-xs">
                  No email. No sales pitch. Just real, helpful insights.
                </p>
              </div>

              {/* What We Check Section */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm mb-4">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  What We Check:
                </div>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-3">
                    <span className="text-orange-400">⚡</span>
                    <div>
                      <span className="text-white font-medium">PageSpeed & Load Time</span>
                      <span className="text-slate-400"> – How fast does your site really load?</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400">📱</span>
                    <div>
                      <span className="text-white font-medium">Mobile Friendliness</span>
                      <span className="text-slate-400"> – Is your site optimized for phones?</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400">🔍</span>
                    <div>
                      <span className="text-white font-medium">SEO Basics</span>
                      <span className="text-slate-400"> – Can Google actually find and rank you?</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-pink-400">🎨</span>
                    <div>
                      <span className="text-white font-medium">Design & Clarity</span>
                      <span className="text-slate-400"> – Is your homepage clear and conversion-ready?</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400">🛡️</span>
                    <div>
                      <span className="text-white font-medium">Security & Trust Signals</span>
                      <span className="text-slate-400"> – Do visitors feel safe on your site?</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why It Matters */}
              <div className="mb-6 p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Why It Matters:
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  You only get one chance to make a digital first impression. This quick audit shows where you stand — and how to improve.
                </p>
              </div>

              {/* Try It Now */}
              <div className="text-center mb-4">
                <div className="text-yellow-400 font-semibold text-sm mb-3">
                  ✨ Try It Now (Takes 30 Seconds)
                </div>
                <div className="text-orange-400 text-sm mb-2">
                  👇 Enter your website below:
                </div>
              </div>

              {/* Input Section */}
              <div className="space-y-4">
                <div>
                  <label className="flex items-center gap-2 text-red-400 font-medium text-sm mb-2">
                    📍 Your Website URL:
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      placeholder="yoursite.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-600/50 text-white placeholder-slate-400 border border-slate-500 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-sm"
                      disabled={isLoading}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          runAudit();
                        }
                      }}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Icon name="search" className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={runAudit}
                  disabled={isLoading || !websiteUrl.trim()}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-all ${
                    isLoading || !websiteUrl.trim()
                      ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Analyzing...
                    </div>
                  ) : websiteUrl.trim() ? (
                    <div className="flex items-center justify-center gap-2">
                      🚀 <span>Run My Free Audit</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      👆 <span>Enter Your Website URL First</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Loading with Progress Bar */}
        {isLoading && loadingMessage && (
          <section className="container max-w-4xl mx-auto px-5 py-8">
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-6 sm:p-8 border border-slate-700 backdrop-blur-sm">
              {/* Header with spinner */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-6 h-6 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-white font-semibold text-lg">Analyzing Your Website</span>
              </div>

              {/* Progress Bar Container */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 font-medium">{currentStage}</span>
                  <span className="text-slate-400 text-sm">{loadingProgress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full transition-all duration-700 ease-out relative"
                    style={{ width: `${loadingProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Current Message */}
              <p className="text-slate-300 text-center leading-relaxed mb-4">
                {loadingMessage}
              </p>

              {/* Stage Indicators */}
              <div className="flex justify-center gap-2 mb-4">
                {loadingStages.slice(0, 6).map((stage, index) => (
                  <div
                    key={stage.stage}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      loadingProgress >= stage.progress
                        ? loadingProgress === 100 && index < 5
                          ? 'bg-green-400 scale-110 animate-bounce'
                          : 'bg-blue-400 scale-110'
                        : loadingProgress >= (loadingStages[index - 1]?.progress || 0)
                        ? 'bg-blue-400/50 animate-pulse'
                        : 'bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              {/* Bottom text */}
              <div className="text-center text-xs text-slate-400">
                🚀 Comprehensive desktop & mobile analysis • Usually takes 15-20 seconds
              </div>
            </div>
          </section>
        )}

        {/* SEO Results Section */}
        {auditResults && (
          <div ref={resultsRef} className="audit-results">
            <SEOResults 
              results={auditResults}
              auditedUrl={auditedUrl}
              headerRef={headerRef}
              gradesRef={gradesRef}
              screenshotRef={screenshotRef}
            />
          </div>
        )}

      </div>
    </div>
  );
}

export default function OptimizedSEOAudit() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OptimizedSEOAuditContent />
    </Suspense>
  );
}
