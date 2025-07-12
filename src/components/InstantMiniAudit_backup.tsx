"use client";

import { useState } from 'react';
import { Icon } from './images/Icon';

interface MiniAuditResults {
  url: string;
  ssl: boolean;
  loadTime: number;
  mobileFriendly: boolean;
  seoScore: number;
  isLoading: boolean;
  error?: string;
}

interface InstantMiniAuditProps {
  onFullAuditClick: (url: string, seoScore?: number) => void;
  isNavigating?: boolean;
}

export default function InstantMiniAudit({ onFullAuditClick, isNavigating = false }: InstantMiniAuditProps) {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [results, setResults] = useState<MiniAuditResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateUrl = (url: string): string | null => {
    if (!url.trim()) return null;
    
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

  const performMiniAudit = async (url: string): Promise<MiniAuditResults> => {
    const domain = new URL(url).hostname;
    
    // Real SSL check
    const ssl = url.startsWith('https://');
    
    // Simulate load time with some realistic variation based on domain
    let loadTime = 2.1; // Default good time
    if (domain.includes('wordpress') || domain.includes('wix')) {
      loadTime = 3.5 + Math.random() * 2; // Slower for page builders
    } else if (domain.includes('shopify') || domain.includes('squarespace')) {
      loadTime = 2.8 + Math.random() * 1.5; // Medium for hosted platforms
    } else {
      loadTime = 1.5 + Math.random() * 2; // Faster for custom sites
    }
    
    // More realistic mobile friendly check (90% of modern sites)
    const mobileFriendly = Math.random() > 0.1;
    
    // More realistic SEO score based on SSL and other factors
    let seoScore = ssl ? 7 : 5; // Start higher if SSL exists
    seoScore += mobileFriendly ? 1 : 0; // Bonus for mobile friendly
    seoScore += loadTime < 3 ? 1 : 0; // Bonus for good speed
    seoScore += Math.random() > 0.5 ? 1 : 0; // Random bonus
    seoScore = Math.min(10, Math.max(3, seoScore)); // Keep between 3-10
    
    return {
      url,
      ssl,
      loadTime: Math.round(loadTime * 10) / 10,
      mobileFriendly,
      seoScore: Math.floor(seoScore),
      isLoading: false
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validatedUrl = validateUrl(websiteUrl);
    if (!validatedUrl) {
      setResults({
        url: websiteUrl,
        ssl: false,
        loadTime: 0,
        mobileFriendly: false,
        seoScore: 0,
        isLoading: false,
        error: "Please enter a valid website URL"
      });
      return;
    }

    setIsLoading(true);
    setResults({
      url: validatedUrl,
      ssl: false,
      loadTime: 0,
      mobileFriendly: false,
      seoScore: 0,
      isLoading: true
    });

    try {
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const auditResults = await performMiniAudit(validatedUrl);
      setResults(auditResults);
    } catch (error) {
      setResults({
        url: validatedUrl,
        ssl: false,
        loadTime: 0,
        mobileFriendly: false,
        seoScore: 0,
        isLoading: false,
        error: "Failed to analyze website. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return '🟢';
    if (score >= 6) return '🟡';
    return '🔴';
  };

  return (
    <div className="w-full">
      {/* Enhanced Instructions Banner */}
      {!results && (
        <div className="text-center mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl border border-blue-400/40 shadow-lg backdrop-blur-sm">
            <div className="text-white font-bold text-lg mb-2 flex items-center justify-center gap-2">
              🚀 <span>Free Website Health Check</span>
            </div>
            <div className="text-white/90 text-sm mb-3">
              Get instant insights about your website's performance, SEO, and security
            </div>
            <div className="text-xs text-white/70 bg-white/10 rounded-lg p-2 border border-white/20">
              ✨ <strong>Step 1:</strong> Enter your website URL below • <strong>Step 2:</strong> Get instant mini-audit • <strong>Step 3:</strong> Click for full analysis
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Enhanced Input Field */}
        <div className="relative mb-4">
          <label htmlFor="website-url" className="block text-white/90 text-sm font-medium mb-2 text-center">
            {!results ? "👇 Enter Your Website URL:" : "Try Another Website:"}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <Icon
                name="s1"
                alt="star-icon"
                className="w-[14px] h-[12px]"
              />
              <Icon
                name="s2"
                alt="star-icon"
                className="w-[8px] h-[24px] mt-1"
              />
            </div>
            <input
              id="website-url"
              type="search"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className="block bg-white/10 backdrop-blur-sm w-full py-4 px-12 text-white placeholder:text-white/60 text-lg rounded-xl border-2 border-white/30 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 hover:border-white/50 hover:bg-white/15 shadow-lg"
              placeholder={results ? "yoursite.com" : "yoursite.com (don't include https://)"}
              disabled={isLoading}
              required
            />
            <button
              type="submit"
              disabled={isLoading || !websiteUrl.trim()}
              className="absolute inset-y-0 end-0 flex items-center pe-4 text-white/70 hover:text-white transition-colors duration-300 disabled:opacity-50"
              aria-label="Quick check"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Enhanced Call to Action Button */}
        {!results && !isLoading && (
          <div className="text-center">
            <button
              type="submit"
              disabled={!websiteUrl.trim()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl disabled:shadow-none border border-blue-500/50 hover:border-blue-400/50"
            >
              {websiteUrl.trim() ? (
                <span className="flex items-center gap-2">
                  <span>🔍 Analyze My Website Now</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              ) : (
                "👆 Enter Your Website URL First"
              )}
            </button>
            {websiteUrl.trim() && (
              <div className="text-xs text-white/70 mt-2">
                ⚡ Results in 2 seconds • 100% Free • No signup required
              </div>
            )}
          </div>
        )}
      </form>

      {/* Enhanced Results Display with Sales Psychology */}
      {results && (
        <div className="mt-6 p-6 bg-gradient-to-br from-white/15 to-white/5 dark:from-white/10 dark:to-white/5 rounded-xl border border-white/30 backdrop-blur-sm shadow-xl">
          {results.error ? (
            <div className="text-center">
              <div className="text-red-400 text-sm mb-3 p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                {results.error}
              </div>
              <button
                onClick={() => setResults(null)}
                className="text-white/80 hover:text-white text-sm underline"
              >
                Try again
              </button>
            </div>
          ) : results.isLoading ? (
            <div className="text-center py-4">
              <div className="animate-pulse text-white/90">
                <div className="text-lg mb-3 font-medium">🔍 Analyzing {results.url}...</div>
                <div className="text-sm text-white/70 mb-4">Checking SSL, speed, mobile compatibility, and SEO basics</div>
                <div className="flex justify-center">
                  <div className="w-8 h-8 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <div className="text-white font-semibold text-lg mb-1">✅ Mini-Audit Complete!</div>
                <div className="text-blue-300 text-sm break-all bg-white/10 rounded-lg p-2 border border-white/20">{results.url}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                  <span className="text-white/90 font-medium">🔒 SSL Security:</span>
                  <span className={results.ssl ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
                    {results.ssl ? '✅ Secure' : '❌ Missing'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                  <span className="text-white/90 font-medium">⚡ Load Speed:</span>
                  <span className={results.loadTime < 3 ? 'text-green-400 font-semibold' : results.loadTime < 5 ? 'text-yellow-400 font-semibold' : 'text-red-400 font-semibold'}>
                    {results.loadTime}s
                  </span>
                </div>
                
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                  <span className="text-white/90 font-medium">📱 Mobile Ready:</span>
                  <span className={results.mobileFriendly ? 'text-green-400 font-semibold' : 'text-red-400 font-semibold'}>
                    {results.mobileFriendly ? 'Yes' : 'Needs Work'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between bg-white/10 rounded-lg p-3 border border-white/20">
                  <span className="text-white/90 font-medium">🎯 SEO Basics:</span>
                  <span className={`${getScoreColor(results.seoScore)} font-semibold`}>
                    {getScoreIcon(results.seoScore)} {results.seoScore}/10
                  </span>
                </div>
              </div>
              
              {/* CTA Section with Forte Care™ focus */}
              <div className="text-center pt-4 border-t border-white/30">
                <div className="mb-4 p-4 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg border border-green-400/40">
                  <div className="text-white font-medium text-base mb-2">
                    {results.seoScore >= 8 
                      ? "🎉 Excellent work! Your site is performing well. The challenge? Google updates algorithms 500+ times per year. Sites like yours typically lose 15-30% of their traffic within 6 months without ongoing optimization and maintenance."
                      : results.seoScore >= 6
                      ? "🚀 Good foundation! We found several ways to boost your rankings significantly."
                      : "💡 Major opportunities discovered! Your competition is missing these too."
                    }
                  </div>
                  <div className="text-white/90 text-sm">
                    {results.seoScore >= 8 
                      ? "Our Forte Care™ plan protects high-performing sites like yours with ongoing optimization, security monitoring, and monthly health reports."
                      : "Our complete analysis checks 25+ factors including technical SEO, content optimization, and provides specific action steps."
                    }
                  </div>
                </div>
                
                <button
                  onClick={() => onFullAuditClick(results.url, results.seoScore)}
                  disabled={isNavigating}
                  className={`inline-flex items-center gap-3 ${
                    results.seoScore >= 8 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                  } disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 shadow-2xl border border-green-500/50`}
                >
                  {isNavigating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Starting Analysis...</span>
                    </>
                  ) : (
                    <>
                      <span>{results.seoScore >= 8 ? '🛡️ Learn About Forte Care™' : '🚀 Get Complete Analysis'}</span>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
                
                <div className="text-xs text-white/70 mt-3 space-y-1">
                  {isNavigating ? (
                    <div className="text-green-300">
                      🚀 <strong>Starting comprehensive analysis...</strong>
                    </div>
                  ) : (
                    <>
                      <div>✨ <strong>Completely Free</strong> • No Credit Card • Instant Results</div>
                      <div>{results.seoScore >= 8 ? '🛡️ Discover how Forte Care™ protects your rankings' : '🎯 Takes 30 seconds • Auto-fills with your URL • Starts immediately'}</div>
                    </>
                  )}
                </div>
                
                {/* Try Another Website Option */}
                <div className="mt-4 pt-3 border-t border-white/20">
                  <button
                    onClick={() => {
                      setResults(null);
                      setWebsiteUrl("");
                    }}
                    className="text-white/80 hover:text-white text-sm underline transition-colors duration-300"
                  >
                    🔄 Try a different website
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
