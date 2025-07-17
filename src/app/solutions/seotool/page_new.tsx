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
  const [isLoading, setIsLoading] = useState(false);
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
      
      // Handle autorun
      if (autorunParam === 'true') {
        const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);
        
        if (!isMobileDevice) {
          setShowMiniAuditWelcome(true);
          setTimeout(() => setShowMiniAuditWelcome(false), 5000);
        }
        
        const attemptAutoRun = () => {
          if (triggerAutoRun.current) {
            triggerAutoRun.current();
            return true;
          } else {
            // Fallback attempts
            const fallbackAttempts = [1000, 2000, 3000, 5000];
            fallbackAttempts.forEach((delay) => {
              setTimeout(() => {
                if (triggerAutoRun.current && !document.querySelector('.audit-results')) {
                  triggerAutoRun.current();
                }
              }, delay);
            });
            return false;
          }
        };
        
        setTimeout(attemptAutoRun, 1500);
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

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Welcome Banner for Mini-Audit Users */}
        {showMiniAuditWelcome && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm animate-bounce">
            <div className="text-center">
              <div className="text-sm font-semibold">🎉 Welcome to the Complete Analysis!</div>
              <div className="text-xs opacity-90">Auto-starting your audit... Results will appear below shortly!</div>
            </div>
          </div>
        )}

        {/* Optimized Two-Column Hero Section */}
        <section className="container max-w-7xl mx-auto px-5 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="text-[#8D9DFF] text-lg font-normal flex gap-2 items-center">
                  <Icon name="star" className="h-5 w-5" />
                  We Keep It Simple. And Powerful.
                </span>
                
                <h1 className="font-roboto font-bold text-4xl lg:text-5xl xl:text-6xl leading-tight text-black dark:text-white">
                  Curious How Your Website Really Performs?
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Get a free website performance audit in seconds. We'll analyze your site for speed, SEO, accessibility, and more—then show you exactly how to improve.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-xl">⚡</span>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">Performance Analysis</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">See how fast your site loads on desktop and mobile</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-400 text-xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">Mobile Optimization</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ensure your site works perfectly on all devices</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-xl">🔍</span>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">SEO Health Check</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Discover what's helping or hurting your search rankings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">♿</span>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">Accessibility Review</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Make sure everyone can use your website</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">⚙️</span>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">Best Practices</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Follow modern web standards and security guidelines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Audit Tool */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Free 5-Point Website Audit
                  </h2>
                  <p className="text-slate-300">
                    Enter your website URL to get started. Most audits complete in under 60 seconds.
                  </p>
                </div>
                
                <div className="space-y-6" ref={auditToolRef}>
                  <SEOAuditTool
                    websiteUrl={websiteUrl}
                    setWebsiteUrl={setWebsiteUrl}
                    onResultsUpdate={handleResultsUpdate}
                    onResultsReady={scrollToResults}
                    setAutoRunTrigger={setAutoRunTrigger}
                    shouldHighlightButton={shouldHighlightButton}
                    auditToolRef={auditToolRef}
                  />
                </div>
                
                {/* Audit Points */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <p className="text-slate-400 text-sm mb-4">What we analyze:</p>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span> Performance
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span> SEO
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span> Accessibility
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span> Best Practices
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span> Mobile Ready
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

        {/* Understanding Your Results Section */}
        <section className="dark:bg-black text-white py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-inter-display font-medium text-3xl lg:text-4xl text-black dark:text-white mb-6">
                Understanding Your Results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                The Forte SiteCheckup™ tool analyzes your website across 8 key areas that impact your visibility, usability, and conversions:
              </p>
            </div>

            {/* Analysis Categories Grid */}
            <div className="grid md:grid-cols-3 gap-6 items-start">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Performance</h3>
                  <p className="text-gray-600 dark:text-gray-300">How quickly your site loads—especially on slower connections.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Headings</h3>
                  <p className="text-gray-600 dark:text-gray-300">Is content easy to scan, helps visitors & Google understand each page?</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Meta Tags</h3>
                  <p className="text-gray-600 dark:text-gray-300">Are your title tags and meta descriptions optimized for search engines?</p>
                </div>
              </div>

              {/* Center Column */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Links</h3>
                  <p className="text-gray-600 dark:text-gray-300">Are your internal & external links clean, functional, and SEO friendly?</p>
                </div>
                
                {/* Central Feature Box */}
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white shadow-xl">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-bold mb-2">SEO Growth</h3>
                  <p className="text-blue-100">Comprehensive analysis for better rankings</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Images</h3>
                  <p className="text-gray-600 dark:text-gray-300">Are your images optimized for performance and accessibility?</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Overall Score</h3>
                  <p className="text-gray-600 dark:text-gray-300">A snapshot grade based on all categories combined.</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Accessibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">Is your site usable by people with disabilities (ADA compliance)?</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Schema</h3>
                  <p className="text-gray-600 dark:text-gray-300">Are you using structured data to help Google understand your content?</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grades Explanation Section */}
        <section className="py-16 px-4">
          <div className="container max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
                What Do the Grades Mean?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Even "A" sites require maintenance—search algorithms change, plugins break, and competitors catch up. 
                That's why we offer Forte Care™ to keep your site at its peak, long after the audit is done.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-green-600 mb-3">A (90–100)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Excellent. You're in great shape, but there's still room to edge out competitors.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-blue-600 mb-3">B (80–89)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Good, but there are a few technical or structural improvements you should make.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-yellow-600 mb-3">C (70–79)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Average. You may be missing key optimizations or best practices.
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-red-600 mb-3">D (&lt;70)</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Needs attention. You're likely losing traffic or conversions due to avoidable issues.
                </p>
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
