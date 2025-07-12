"use client";

import { Icon } from "@/components/images/Icon";
import { useTheme } from "@/app/providers/ThemeProvider";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { useEffect, useState, useRef } from "react";
import DarkButton from "@/components/DarkButton";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";

const caseStudies = [
  {
    company: "TechCorp Solutions",
    industry: "SaaS",
    initialScore: "9/10",
    improvement: "+127% organic traffic",
    challenge: "Despite perfect technical scores, they were losing market share to competitors",
    solution: "Identified 3 competitor strategies they weren't using",
    results: "Reclaimed #1 rankings for 15 high-value keywords",
    timeframe: "6 months"
  },
  {
    company: "Elite Marketing Agency",
    industry: "Digital Marketing",
    initialScore: "8/10",
    improvement: "+89% lead quality",
    challenge: "High SEO scores but low conversion rates",
    solution: "Competitive content gaps and advanced schema implementation",
    results: "Doubled qualified leads while maintaining top rankings",
    timeframe: "4 months"
  },
  {
    company: "Premium E-commerce Store",
    industry: "Retail",
    initialScore: "9/10",
    improvement: "+203% revenue",
    challenge: "Perfect site performance but competitors stealing customers",
    solution: "Advanced competitive intelligence and strategic positioning",
    results: "Outranked 3 major competitors for commercial keywords",
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

export default function CompetitiveAnalysis() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const [selectedDevice, setSelectedDevice] = useState("Desktop");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

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

    return () => window.removeEventListener('resize', handleResize);
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
      
      <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-5 py-16 md:py-24">
        <div className="grid gap-[24px] justify-center items-center">
          <span className="text-[#FF6B35] sm:text-[24px] text-[12px] font-normal leading-[12px] sm:leading-[24px] flex gap-2 sm:justify-center justify-start">
            <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
            Competitive Intelligence for High Performers
          </span>

          <h1 className="font-roboto font-medium text-[32px] sm:text-[62px] sm:leading-[62px] leading-[40px] tracking-[-1.24px] sm:text-center text-start align-middle text-black dark:text-[#FFFFFF]">
            Advanced Competitive Analysis
          </h1>
          <p className="lg:w-[794px] md:w-[740px] w-[90%] font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal sm:text-center text-start align-middle text-[#626262] dark:text-[#B4B4B4]">
            Your site already performs well—but your competitors are studying you. 
            Our specialized analysis reveals the advanced strategies they're planning to use against you, 
            and exactly how to stay ahead.
          </p>
        </div>

        {/* Case Studies Section */}
        <div className="w-full mt-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
            🏆 High Performers Who Stayed Ahead
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Real results from websites that started with high scores like yours
          </p>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-black dark:text-white">{study.company}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{study.industry}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Initial Score</div>
                    <div className="text-lg font-bold text-green-600">{study.initialScore}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg p-3 mb-4">
                  <div className="text-lg font-bold text-green-700 dark:text-green-400">{study.improvement}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">in {study.timeframe}</div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase">Challenge</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{study.challenge}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase">Solution</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{study.solution}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase">Results</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{study.results}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competitive Factors Section */}
        <div className="w-full mt-16">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
            🔍 What We Analyze Beyond Basic SEO
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            The advanced factors that separate leaders from followers
          </p>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {competitiveFactors.map((factor, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-3">{factor.icon}</div>
                <h3 className="font-bold text-lg text-black dark:text-white mb-2">{factor.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Audit Tool Section */}
        <div className="w-full mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-8 border border-orange-400/30">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2">
                🎯 Get Your Competitive Intelligence Report
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Start your specialized analysis below - we'll identify exactly what your competitors are planning
              </p>
            </div>
            
            <SEOAuditTool
              websiteUrl={websiteUrl}
              setWebsiteUrl={setWebsiteUrl}
              selectedDevice={selectedDevice}
              setSelectedDevice={setSelectedDevice}
              onResultsUpdate={handleResultsUpdate}
              onResultsReady={scrollToResults}
            />
          </div>
        </div>

        {/* Results Section */}
        {auditResults && (
          <div ref={resultsRef} className="w-full mt-16">
            <SEOResults 
              results={auditResults} 
              auditedUrl={auditedUrl}
              selectedDevice={selectedDevice}
            />
          </div>
        )}
      </section>
    </>
  );
}
