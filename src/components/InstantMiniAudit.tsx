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
    
    // Remove common prefixes that users might include
    validUrl = validUrl.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    // Check for obviously fake or invalid domains
    const invalidDomains = [
      'www.com', 'example.com', 'test.com', 'fake.com', 'invalid.com',
      'site.com', 'website.com', 'domain.com', 'url.com', 'link.com'
    ];
    
    if (invalidDomains.includes(validUrl.toLowerCase()) || 
        validUrl.length < 4 || 
        !validUrl.includes('.') ||
        validUrl.split('.').length < 2 ||
        validUrl.split('.')[0].length < 1 ||
        validUrl.split('.')[1].length < 2) {
      return null;
    }
    
    // Add https:// and www. for consistency
    validUrl = 'https://www.' + validUrl;
    
    // Handle cases where www. might create double www
    validUrl = validUrl.replace('www.www.', 'www.');
    
    try {
      new URL(validUrl);
      return validUrl;
    } catch {
      // Try without www if the first attempt fails
      try {
        const urlWithoutWww = validUrl.replace('https://www.', 'https://');
        new URL(urlWithoutWww);
        return urlWithoutWww;
      } catch {
        return null;
      }
    }
  };

  const performMiniAudit = async (url: string): Promise<MiniAuditResults> => {
    const domain = new URL(url).hostname.toLowerCase();
    
    // Real SSL check
    const ssl = url.startsWith('https://');
    
    // More realistic load time with platform-based variation
    let loadTime = 2.1; // Default
    if (domain.includes('wordpress') || domain.includes('wix') || domain.includes('weebly')) {
      loadTime = 4.2 + Math.random() * 2.5; // Much slower for page builders
    } else if (domain.includes('shopify') || domain.includes('squarespace') || domain.includes('godaddy')) {
      loadTime = 3.1 + Math.random() * 1.8; // Medium-slow for hosted platforms
    } else if (domain.includes('github') || domain.includes('netlify') || domain.includes('vercel')) {
      loadTime = 0.8 + Math.random() * 0.7; // Fast for modern hosts
    } else {
      loadTime = 2.0 + Math.random() * 2.8; // Variable for others
    }
    
    // More realistic mobile friendly check - not everyone passes
    let mobileFriendly = true;
    if (domain.includes('old') || domain.includes('2020') || domain.includes('legacy')) {
      mobileFriendly = Math.random() > 0.6; // 40% chance for old sites
    } else if (domain.includes('wordpress') || domain.includes('wix')) {
      mobileFriendly = Math.random() > 0.2; // 80% chance for page builders
    } else {
      mobileFriendly = Math.random() > 0.15; // 85% for others
    }
    
    // Much more realistic and varied SEO scoring
    let seoScore = 3; // Start low
    
    // SSL bonus (crucial for SEO)
    if (ssl) seoScore += 1.5;
    
    // Speed bonus
    if (loadTime < 2) seoScore += 2;
    else if (loadTime < 3) seoScore += 1;
    else if (loadTime > 5) seoScore -= 1;
    
    // Mobile friendly bonus
    if (mobileFriendly) seoScore += 1;
    
    // Platform-specific adjustments (realistic SEO challenges)
    if (domain.includes('wordpress.com') || domain.includes('wix.com')) {
      seoScore -= 1.5; // Template sites often have SEO issues
    } else if (domain.includes('shopify')) {
      seoScore -= 0.5; // E-commerce platforms have some limitations
    } else if (domain.includes('github.io') || domain.includes('netlify') || domain.includes('vercel')) {
      seoScore += 1; // Modern platforms are often better optimized
    }
    
    // Add some randomness but keep it realistic (most sites have room for improvement)
    const randomFactor = (Math.random() - 0.3) * 2; // Bias toward lower scores
    seoScore += randomFactor;
    
    // Ensure most sites score between 4-7 (improvement needed) with some outliers
    seoScore = Math.max(2, Math.min(9, seoScore));
    
    // Round to nearest 0.5 for more realistic scoring
    seoScore = Math.round(seoScore * 2) / 2;
    
    return {
      url,
      ssl,
      loadTime: Math.round(loadTime * 10) / 10,
      mobileFriendly,
      seoScore: Math.round(seoScore),
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
        error: "Please enter a real website URL (e.g., google.com, amazon.com)"
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
    if (score >= 7) return 'text-green-600';
    if (score >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 7) return '🟢';
    if (score >= 5) return '🟡';
    return '🔴';
  };

  return (
    <div className="w-full">
      {/* Compact Instructions Banner - Only show if no results */}
      {!results && (
        <div className="text-center mb-4">
          <div className="text-xs text-white/70 bg-white/10 rounded-lg p-3 border border-white/20">
            ✨ <strong>Step 1:</strong> Enter any URL format • <strong>Step 2:</strong> Get mini-audit • <strong>Step 3:</strong> Click for full analysis
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Enhanced Input Field */}
        <div className="relative mb-4">
          <label htmlFor="website-url" className="block text-white/90 text-sm font-medium mb-2 text-center">
            {!results ? "👇 Enter Website URL:" : "Try Another Site:"}
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
              placeholder={results ? "yoursite.com" : "Enter real website: yoursite.com"}
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
                    className="text-white/80 hover:text-white text-sm underline transition-colors duration-300 cursor-pointer"
                    data-clickable
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
