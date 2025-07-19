"use client";

import { Icon } from "@/components/images/Icon";
import { useEffect, useState, useRef, Suspense } from "react";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";
import { SectionBackgroundAnimation } from "@/components/animations/BackgroundAnimation";

function SiteCheckUpContent() {
  const searchParams = useSearchParams();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [showMiniAuditWelcome, setShowMiniAuditWelcome] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gradesRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const [shouldHighlightButton, setShouldHighlightButton] = useState(false);
  const auditToolRef = useRef<HTMLDivElement>(null);
  const triggerAutoRun = useRef<(() => void) | null>(null);

  // Handle URL parameters and auto-run functionality
  useEffect(() => {
    const urlParam = searchParams.get('url');
    const autorunParam = searchParams.get('autorun');
    const mobileRedirectParam = searchParams.get('mobile-redirect');
    
    if (urlParam) {
      setWebsiteUrl(urlParam);
      
      // Handle mobile redirect from mini-audit
      if (mobileRedirectParam === 'true') {
        setTimeout(() => {
          if (auditToolRef.current) {
            auditToolRef.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            setShouldHighlightButton(true);
            setTimeout(() => setShouldHighlightButton(false), 3000);
          }
        }, 500);
        return;
      }
      
      // Handle autorun - AUTO START AUDIT IMMEDIATELY
      if (autorunParam === 'true') {
        const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
        
        if (!isMobileDevice) {
          setShowMiniAuditWelcome(true);
          setTimeout(() => setShowMiniAuditWelcome(false), 5000);
        }
        
        const attemptAutoRun = () => {
          if (triggerAutoRun.current) {
            // Automatically start the audit
            triggerAutoRun.current();
            
            // Auto-scroll to the audit section when audit starts
            setTimeout(() => {
              if (auditToolRef.current) {
                auditToolRef.current.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'center' 
                });
              }
            }, 800);
            
            return true;
          } else {
            // Fallback attempts with auto-scroll
            const fallbackAttempts = [1000, 2000, 3000, 5000];
            fallbackAttempts.forEach((delay) => {
              setTimeout(() => {
                if (triggerAutoRun.current && !document.querySelector('.audit-results')) {
                  triggerAutoRun.current();
                  
                  // Auto-scroll after triggering
                  setTimeout(() => {
                    if (auditToolRef.current) {
                      auditToolRef.current.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                      });
                    }
                  }, 800);
                }
              }, delay);
            });
            return false;
          }
        };
        
        // Start immediately with shorter delay
        setTimeout(attemptAutoRun, 800);
      }
    }
  }, [searchParams]);

  const handleResultsUpdate = (results: any, url: string) => {
    setAuditResults(results);
    setAuditedUrl(url);
  };

  const setAutoRunTrigger = (triggerFunction: () => void) => {
    triggerAutoRun.current = triggerFunction;
  };

  const scrollToResults = () => {
    const targetRef = headerRef.current || screenshotRef.current || gradesRef.current || resultsRef.current;
    
    if (targetRef) {
      setTimeout(() => {
        if (targetRef) {
          const targetTop = targetRef.offsetTop;
          window.scrollTo({
            top: targetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 800);
    }
  };

  // New function to scroll to audit tool (loading bar area)
  const scrollToAuditTool = () => {
    if (auditToolRef.current) {
      setTimeout(() => {
        auditToolRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Premium Background Effects with Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-purple-600/25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-32 w-80 h-80 bg-gradient-to-br from-cyan-400/25 to-blue-600/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/25 to-pink-600/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-2xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-2xl animate-bounce delay-1000" style={{animationDuration: '5s'}}></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>
      
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Welcome Banner for Mini-Audit Users */}
        {showMiniAuditWelcome && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[110] bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm animate-bounce max-w-sm sm:max-w-md mx-4">
            <div className="text-center">
              <div className="text-xs sm:text-sm font-semibold">🎉 Welcome to the Complete Analysis!</div>
              <div className="text-xs opacity-90">Auto-starting your audit... Results will appear below shortly!</div>
            </div>
          </div>
        )}

        {/* Stunning Hero Section with Enhanced Visual Design */}
        <section className="container max-w-7xl mx-auto px-4 sm:px-5 py-16 sm:py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Enhanced Content */}
            <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/30 dark:border-blue-800/30 rounded-full px-6 py-3 backdrop-blur-sm">
                  <Icon name="star" className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-blue-700 dark:text-blue-300 text-lg font-medium">
                    Professional Website Analysis
                  </span>
                </div>
                
                <h1 className="font-roboto font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-pulse">
                    Discover Your Website's Hidden Potential
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light relative">
                  <span className="relative z-10">
                    Get a comprehensive, professional-grade website audit in under 60 seconds. 
                    We'll analyze performance, SEO, accessibility, and reveal actionable insights to boost your online presence.
                  </span>
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg blur-lg -z-10"></div>
                </p>
              </div>

              {/* Enhanced Benefits List with Icons */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What You'll Discover:</h3>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Performance Insights</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Detailed analysis of loading speed, Core Web Vitals, and user experience metrics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl">
                      📱
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Mobile Excellence</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive mobile optimization review and responsive design analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white text-xl">
                      🔍
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">SEO Optimization</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">In-depth search engine optimization analysis and ranking improvement strategies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xl">
                      ♿
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">Accessibility Compliance</h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">ADA compliance review and inclusive design recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Enhanced Audit Tool */}
            <div className="order-1 lg:order-2 lg:pl-8">
              <div className="relative group">
                {/* Multiple glowing border effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-700"></div>
                
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-700/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Animated premium badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse hover:animate-bounce transition-all duration-300">
                      ✨ PROFESSIONAL AUDIT
                    </div>
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 delay-500"></div>
                    <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50 delay-1000"></div>
                    <div className="absolute bottom-6 right-12 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-60 delay-1500"></div>
                  </div>
                  
                  <div className="text-center mb-8 sm:mb-10 mt-4 relative z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4 sm:mb-6">
                      Complete Website Analysis
                    </h2>
                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                      Enter your website URL below for a comprehensive performance audit. 
                      <span className="text-blue-400 font-medium"> Most analyses complete in under 60 seconds.</span>
                    </p>
                  </div>
                  
                  <div className="space-y-6 sm:space-y-8" ref={auditToolRef}>
                    <SEOAuditTool
                      websiteUrl={websiteUrl}
                      setWebsiteUrl={setWebsiteUrl}
                      onResultsUpdate={handleResultsUpdate}
                      onResultsReady={scrollToResults}
                      onAuditStart={scrollToAuditTool}
                      setAutoRunTrigger={setAutoRunTrigger}
                      shouldHighlightButton={shouldHighlightButton}
                      auditToolRef={auditToolRef}
                    />
                  </div>
                  
                  {/* Enhanced Audit Points */}
                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-700/50">
                    <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 text-center font-medium">Comprehensive Analysis Includes:</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 text-sm sm:text-base">
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                        <span className="text-green-400 text-lg">✓</span> 
                        <span className="font-medium">Performance</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                        <span className="text-green-400 text-lg">✓</span> 
                        <span className="font-medium">SEO Analysis</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                        <span className="text-green-400 text-lg">✓</span> 
                        <span className="font-medium">Accessibility</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm">
                        <span className="text-green-400 text-lg">✓</span> 
                        <span className="font-medium">Best Practices</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 bg-slate-800/50 rounded-lg p-3 backdrop-blur-sm col-span-2 justify-center">
                        <span className="text-green-400 text-lg">✓</span> 
                        <span className="font-medium">Mobile Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Enhanced Understanding Your Results Section */}
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 overflow-hidden">
          {/* Enhanced background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-black dark:via-slate-900 dark:to-blue-900"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
          </div>
          
          {/* Dynamic grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          <div className="relative z-10 container max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <span className="text-blue-400 text-2xl">📊</span>
                <span className="text-blue-300 font-medium">Detailed Analysis</span>
              </div>
              
              <h2 className="font-inter-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 lg:mb-8">
                Understanding Your 
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Results</span>
              </h2>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive SiteCheckup™ analyzes your website across 8 critical areas that directly impact your visibility, user experience, and conversion rates:
              </p>
            </div>

            {/* Enhanced Analysis Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* Performance Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-orange-400/50 hover:bg-gradient-to-br hover:from-orange-50/50 hover:to-red-50/50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-orange-500/50">
                  ⚡
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Performance</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Loading speed analysis, Core Web Vitals, and optimization recommendations for lightning-fast user experiences.</p>
              </div>
              
              {/* Headings Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-blue-400/50 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-cyan-50/50 dark:hover:from-blue-900/20 dark:hover:to-cyan-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50">
                  📝
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Content Structure</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Heading hierarchy, content organization, and readability analysis for better user engagement and SEO.</p>
              </div>
              
              {/* Meta Tags Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-purple-400/50 hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-pink-50/50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-purple-500/50">
                  🏷️
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Meta Optimization</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Title tags, meta descriptions, and search engine snippet optimization for maximum click-through rates.</p>
              </div>

              {/* Links Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-green-400/50 hover:bg-gradient-to-br hover:from-green-50/50 hover:to-emerald-50/50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-green-500/50">
                  🔗
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">Link Analysis</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Internal and external link structure, anchor text optimization, and link health assessment.</p>
              </div>
              
              {/* Central Feature Box - Enhanced */}
              <div className="group relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 sm:p-10 text-center text-white shadow-2xl md:col-span-2 lg:col-span-1 hover:scale-105 transition-all duration-500 overflow-hidden">
                {/* Animated background gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90 group-hover:from-blue-500/90 group-hover:via-purple-500/90 group-hover:to-pink-500/90 transition-all duration-500"></div>
                
                {/* Floating animation elements */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full animate-pulse opacity-40 delay-1000"></div>
                  <div className="absolute top-1/2 left-0 w-16 h-16 bg-white/10 rounded-full animate-bounce opacity-30" style={{animationDuration: '3s'}}></div>
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute top-4 right-8 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-white rounded-full animate-ping opacity-40 delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-50 delay-2000"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">📈</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">Complete SEO Growth</h3>
                  <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">Comprehensive website analysis for maximum search engine visibility and user engagement</p>
                </div>
              </div>
              
              {/* Images Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-yellow-400/50 hover:bg-gradient-to-br hover:from-yellow-50/50 hover:to-orange-50/50 dark:hover:from-yellow-900/20 dark:hover:to-orange-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-yellow-500/50">
                  🖼️
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">Image Optimization</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Image compression, alt text analysis, and visual content optimization for faster loading and accessibility.</p>
              </div>

              {/* Overall Score Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-indigo-400/50 hover:bg-gradient-to-br hover:from-indigo-50/50 hover:to-purple-50/50 dark:hover:from-indigo-900/20 dark:hover:to-purple-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-indigo-500/50">
                  🎯
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">Overall Score</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Comprehensive grade combining all analysis categories for a complete website health assessment.</p>
              </div>
              
              {/* Accessibility Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-teal-400/50 hover:bg-gradient-to-br hover:from-teal-50/50 hover:to-cyan-50/50 dark:hover:from-teal-900/20 dark:hover:to-cyan-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-teal-500/50">
                  ♿
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">Accessibility</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">ADA compliance review, inclusive design analysis, and recommendations for universal usability.</p>
              </div>
              
              {/* Schema Card */}
              <div className="group bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-rose-400/50 hover:bg-gradient-to-br hover:from-rose-50/50 hover:to-pink-50/50 dark:hover:from-rose-900/20 dark:hover:to-pink-900/20">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-rose-500/50">
                  📋
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">Structured Data</h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">Schema markup analysis and structured data implementation for enhanced search result features.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Grades Explanation Section */}
        <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 container max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200/30 dark:border-blue-800/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
                <span className="text-2xl">📊</span>
                <span className="text-blue-700 dark:text-blue-300 font-medium">Performance Grades</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
                What Do the 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Grades Mean?</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Even "A" rated websites need ongoing optimization. Search algorithms evolve, competitors advance, and technology changes. 
                <span className="font-semibold text-blue-600 dark:text-blue-400"> That's why continuous monitoring matters.</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Grade A */}
              <div className="group relative bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-xl border border-green-200/50 dark:border-green-800/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  A
                </div>
                <div className="pr-20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-green-700 dark:text-green-400 mb-4">Excellent (90–100)</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Outstanding performance! Your website exceeds industry standards, but there's always room for refinement to stay ahead of competitors and algorithm changes.
                  </p>
                </div>
              </div>
              
              {/* Grade B */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 shadow-xl border border-blue-200/50 dark:border-blue-800/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  B
                </div>
                <div className="pr-20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-4">Good (80–89)</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Solid foundation with room for improvement. A few strategic optimizations could significantly boost your search rankings and user experience.
                  </p>
                </div>
              </div>
              
              {/* Grade C */}
              <div className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 shadow-xl border border-yellow-200/50 dark:border-yellow-800/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  C
                </div>
                <div className="pr-20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-700 dark:text-yellow-400 mb-4">Average (70–79)</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Meeting basic requirements but missing key optimizations. Addressing these gaps could unlock significant performance improvements.
                  </p>
                </div>
              </div>
              
              {/* Grade D */}
              <div className="group relative bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-2xl p-8 shadow-xl border border-red-200/50 dark:border-red-800/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                  D
                </div>
                <div className="pr-20">
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-700 dark:text-red-400 mb-4">Needs Work (&lt;70)</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Critical issues are likely costing you traffic and conversions. Priority fixes could deliver immediate, measurable improvements.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call-to-action section */}
            <div className="mt-16 text-center">
              <div className="relative group bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating elements */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute top-4 left-8 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 right-12 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/2 right-4 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full animate-bounce delay-2000" style={{animationDuration: '3s'}}></div>
                </div>
                
                {/* Sparkles */}
                <div className="absolute top-6 right-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-12 left-20 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-16 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping delay-2000"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">Ready to Improve Your Score?</h3>
                  <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300">
                    Our team can help you implement the recommendations from your audit and maintain peak performance with ongoing optimization.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-white text-blue-600 font-semibold px-12 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function SiteCheckUp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteCheckUpContent />
    </Suspense>
  );
}
