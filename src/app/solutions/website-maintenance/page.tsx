"use client";

import { Icon } from "@/components/images/Icon";
import { useEffect, useState, useRef, Suspense } from "react";
import DarkButton from "@/components/DarkButton";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";

const maintenanceStats = [
  {
    stat: "500+",
    label: "Google algorithm updates per year",
    description: "That's more than one per day"
  },
  {
    stat: "73%",
    label: "of high-performing sites lose traffic",
    description: "Within 6 months without maintenance"
  },
  {
    stat: "24-48hrs",
    label: "how long it takes to lose rankings",
    description: "After a major algorithm update"
  }
];

const maintenanceServices = [
  {
    icon: "🔍",
    title: "Monthly Website Monitoring",
    description: "Track your rankings, traffic, and site speed",
    value: "$297/month"
  },
  {
    icon: "⚡",
    title: "Algorithm Update Protection",
    description: "Immediate fixes when Google releases updates",
    value: "$497/month"
  },
  {
    icon: "🛡️",
    title: "Complete Website Maintenance",
    description: "Everything above plus content updates",
    value: "$797/month"
  }
];

const riskFactors = [
  "Site speed can change with any hosting update",
  "Competitors constantly improving their sites",
  "Google algorithm updates can hurt rankings overnight",
  "Technical issues can develop without warning",
  "Content can become outdated and lose relevance",
  "Security vulnerabilities can harm search rankings"
];

function WebsiteMaintenanceContent() {
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
      
      // Show welcome banner for maintenance-focused users
      if (typeParam === 'maintenance') {
        setShowWelcomeBanner(true);
        
        setTimeout(() => {
          setShowWelcomeBanner(false);
        }, 6000);
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
      {/* Welcome Banner */}
      {showWelcomeBanner && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4 rounded-lg shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-sm font-bold">🛡️ PROTECTION MODE ACTIVATED</div>
            <div className="text-xs opacity-90">Analyzing maintenance requirements...</div>
          </div>
        </div>
      )}
      
      <section className="container max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="grid gap-6 sm:gap-8 justify-center items-center text-center w-full">
          <span className="text-[#10B981] text-sm sm:text-lg md:text-xl lg:text-2xl font-normal flex items-center justify-center gap-2">
            <Icon name="star" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Protect Your Investment
          </span>

          <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-black dark:text-[#FFFFFF] max-w-4xl mx-auto">
            Your Website's Personal Bodyguard
          </h1>
          <p className="max-w-4xl mx-auto font-inter font-normal text-sm sm:text-base lg:text-lg leading-relaxed tracking-normal text-center text-[#626262] dark:text-[#B4B4B4]">
            Look, websites break. Hackers attack. Google makes 500+ changes per year. While you're busy running your business, who's watching your website? We are! Think of us as your site's 24/7 security team and speed optimizer rolled into one.
          </p>
        </div>

        {/* Stats Section */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-6 sm:mb-8">
            What Happens When Your Website Breaks?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {maintenanceStats.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-red-600 dark:text-red-400 mb-2">{item.stat}</div>
                <div className="text-base sm:text-lg font-semibold text-black dark:text-white mb-2">{item.label}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Factors */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
            Your Website Has Daily Enemies
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Every day you're not monitoring is a day you could lose everything you've built
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {riskFactors.map((risk, index) => (
              <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                <div className="text-red-500 text-lg sm:text-xl mt-0.5 flex-shrink-0">⚠️</div>
                <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{risk}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Services */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white mb-2">
            🛡️ Our Maintenance & Protection Plans
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            Choose the level of protection that's right for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {maintenanceServices.map((service, index) => (
              <div key={index} className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border ${index === 2 ? 'border-green-400 dark:border-green-500 ring-2 ring-green-400/50' : 'border-gray-200 dark:border-gray-700'} hover:scale-105 transition-all duration-300`}>
                <div className="text-2xl sm:text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-base sm:text-lg text-black dark:text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400 mb-4">{service.value}</div>
                {index === 2 && (
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-2 text-center">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400">MOST POPULAR</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEO Audit Tool Section */}
        <div className="w-full mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-4 sm:p-6 border border-green-400/30">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-1 sm:mb-2">
                🔍 Get Your Maintenance Assessment
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                See exactly what needs ongoing attention to protect your rankings
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <SEOAuditTool
                websiteUrl={websiteUrl}
                setWebsiteUrl={setWebsiteUrl}
                onResultsUpdate={handleResultsUpdate}
                onResultsReady={scrollToResults}
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        {auditResults && (
          <div ref={resultsRef} className="w-full mt-8 sm:mt-12 px-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-black dark:text-white mb-1 sm:mb-2">
                  🛡️ Your Maintenance Requirements
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  Based on your current speed and security, here's what needs ongoing attention
                </p>
              </div>
              
              <SEOResults 
                results={auditResults} 
                auditedUrl={auditedUrl}
                headerRef={headerRef}
                gradesRef={gradesRef}
                screenshotRef={screenshotRef}
              />
              
              {/* CTA Section */}
              <div className="text-center mt-6 p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="text-sm sm:text-base font-bold text-black dark:text-white mb-2">
                  Ready to Protect Your Investment?
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-3 text-xs sm:text-sm leading-relaxed">
                  Don't wait for algorithm updates to hurt your rankings. Let's discuss a maintenance plan that fits your needs.
                </p>
                <DarkButton href="/contact">
                  Schedule Free Consultation
                </DarkButton>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default function WebsiteMaintenance() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebsiteMaintenanceContent />
    </Suspense>
  );
}
