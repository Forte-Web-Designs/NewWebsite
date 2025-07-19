"use client";

import { Icon } from "@/components/images/Icon";
import { useEffect, useState, useRef, Suspense } from "react";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";

const caseStudies = [
  {
    company: "TechCorp Solutions",
    industry: "SaaS",
    initialScore: "9/10",
    improvement: "+60% organic traffic",
    challenge: "Despite near-perfect technical SEO, TechCorp Solutions was steadily losing market share to aggressive SaaS competitors.",
    solution: "Conducted a deep competitive analysis, uncovering three high-impact strategies their rivals were using (including targeted content clusters and advanced link-building).",
    results: "Reclaimed the #1 Google ranking for 15 high-value SaaS keywords, driving a 60% increase in organic traffic and restoring their industry leadership.",
    timeframe: "6 months"
  },
  {
    company: "BluePeak Digital",
    industry: "Digital Marketing Agency",
    initialScore: "8/10",
    improvement: "+65% lead quality",
    challenge: "BluePeak Digital had strong SEO scores but struggled with low conversion rates and underperforming lead quality.",
    solution: "Identified competitive content gaps and implemented advanced schema markup, improving both visibility and user engagement.",
    results: "Doubled the number of qualified leads while maintaining top search rankings, resulting in a significant boost in high-value client acquisitions.",
    timeframe: "4 months"
  },
  {
    company: "Luxora Home",
    industry: "Premium E-commerce (Home & Lifestyle)",
    initialScore: "9/10",
    improvement: "+125% revenue",
    challenge: "Luxora Home’s site was technically flawless, but they were losing customers to larger, established competitors.",
    solution: "Leveraged advanced competitive intelligence and strategic brand positioning to target commercial-intent keywords and optimize product landing pages.",
    results: "Outranked three major retail competitors for high-converting keywords, resulting in a 125% increase in online revenue and a surge in new customer acquisition.",
    timeframe: "8 months"
  }
];

const competitiveFactors = [
  {
    icon: "🎯",
    title: "Competitor Keyword Gaps",
    description: "Find the high-value keywords your competitors rank for that you don't"
  },
  {
    icon: "🔍",
    title: "Advanced Schema Opportunities",
    description: "Rich snippets and structured data your competitors haven't implemented"
  },
  {
    icon: "⚡",
    title: "Technical Advantages",
    description: "Core Web Vitals optimizations that give you the edge"
  },
  {
    icon: "📈",
    title: "Content Strategy Gaps",
    description: "Content types and topics dominating your space"
  },
  {
    icon: "🔗",
    title: "Link Building Vulnerabilities",
    description: "Backlink opportunities your competitors are missing"
  },
  {
    icon: "🏆",
    title: "Market Positioning",
    description: "Strategic advantages to maintain your competitive edge"
  }
];

function CompetitiveAnalysisContent() {
  const searchParams = useSearchParams();
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gradesRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for URL parameter and pre-fill the website URL
    const urlParam = searchParams.get('url');
    const typeParam = searchParams.get('type');
    
    if (urlParam) {
      setWebsiteUrl(urlParam);
      
      // Show welcome banner for high performers
      if (typeParam === 'high-performer') {
        setShowWelcomeBanner(true);
        
        setTimeout(() => {
          setShowWelcomeBanner(false);
        }, 8000);
      }
    }
  }, [searchParams]);

  const handleResultsUpdate = (results: any, url: string) => {
    setAuditResults(results);
    setAuditedUrl(url);
  };

  const scrollToResults = () => {
    const targetRef = resultsRef.current;
    
    if (targetRef) {
      setTimeout(() => {
        if (targetRef) {
          const targetTop = targetRef.offsetTop;
          const offset = 100;
          
          window.scrollTo({
            top: targetTop - offset,
            behavior: 'smooth'
          });
        }
      }, 500);
    }
  };

  return (
    <>
      {/* Welcome Banner for High Performers */}
      {showWelcomeBanner && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-sm font-bold">🎯 HIGH-PERFORMER DETECTED!</div>
            <div className="text-xs opacity-90">Running specialized competitive analysis...</div>
          </div>
        </div>
      )}
      
      <section className="container max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid gap-6 sm:gap-8 justify-center items-center text-center w-full">
          <span className="text-[#FF6B35] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal flex items-center justify-center gap-2">
            <Icon name="star" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Competitive Intelligence for High Performers
          </span>

          <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-black dark:text-[#FFFFFF] max-w-4xl mx-auto">
            Advanced Competitive Analysis
          </h1>
          <p className="max-w-4xl mx-auto font-inter font-normal text-sm sm:text-base lg:text-lg leading-relaxed tracking-normal text-center text-[#626262] dark:text-[#B4B4B4]">
            Your site already performs well—but your competitors are studying you. 
            Our specialized analysis reveals the advanced strategies they're planning to use against you, 
            and exactly how to stay ahead.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="w-full mt-12 sm:mt-16">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
            🏆 High Performers Who Stayed Ahead
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 px-4">
            Real results from websites that started with high scores like yours
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-base sm:text-lg text-black dark:text-white">{study.company}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{study.industry}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-xs text-gray-500">Initial Score</div>
                    <div className="text-lg font-bold text-green-600">{study.initialScore}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg p-3 mb-4">
                  <div className="text-base sm:text-lg font-bold text-green-700 dark:text-green-400">{study.improvement}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">in {study.timeframe}</div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase">Challenge</div>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{study.challenge}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">Solution</div>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{study.solution}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">Results</div>
                    <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{study.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Factors Section */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
            🔍 What We Analyze Beyond Basic SEO
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            The advanced factors that separate leaders from followers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {competitiveFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-2xl sm:text-3xl mb-3">{factor.icon}</div>
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white mb-2">{factor.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Audit Tool Section */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-orange-400/30">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
                🎯 Get Your Competitive Intelligence Report
              </h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Start your specialized analysis below - we'll identify exactly what your competitors are planning
              </p>
            </div>
            
            <SEOAuditTool
              websiteUrl={websiteUrl}
              setWebsiteUrl={setWebsiteUrl}
              onResultsUpdate={handleResultsUpdate}
              onResultsReady={scrollToResults}
            />
          </div>
        </div>

        {/* Results Section */}
        {auditResults && (
          <div ref={resultsRef} className="w-full mt-12 sm:mt-16 px-4">
            <SEOResults 
              results={auditResults} 
              auditedUrl={auditedUrl}
              headerRef={headerRef}
              gradesRef={gradesRef}
              screenshotRef={screenshotRef}
            />
          </div>
        )}
      </section>
    </>
  );
}

export default function CompetitiveAnalysis() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CompetitiveAnalysisContent />
    </Suspense>
  );
}
