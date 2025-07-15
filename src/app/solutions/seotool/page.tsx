"use client";

import { Icon } from "@/components/images/Icon";
import { useTheme } from "@/app/providers/ThemeProvider";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { useEffect, useState, useRef, Suspense } from "react";
import DarkButton from "@/components/DarkButton";
import SEOAuditTool from "@/components/SEOAuditTool";
import SEOResults from "@/components/SEOResults";
import { useSearchParams } from "next/navigation";
import { SectionBackgroundAnimation } from "@/components/animations/BackgroundAnimation";

const tabData = [
  {
    icon: "warning",
    heading: "Catch hidden performance issues before they cost you clients",
  },
  {
    icon: "volume",
    heading:
      "Get instant grades for SEO, speed, accessibility, and best practices",
  },
  {
    icon: "bag",
    heading:
      "Plus—see how Forte Care™ can fix issues and keep your site optimized long-term",
  },
];

const leftColumn = [
  {
    heading: "Performance",
    content: "How quickly your site loads—especially on slower connections.",
  },
  {
    heading: "Headings:",
    content:
      "Is content easy to scan, helps visitors & Google understand each page?",
  },
  {
    heading: "Meta",
    content:
      "Are your title tags and meta descriptions optimized for search engines?",
  },
];

const rightColumn = [
  {
    heading: "Overall",
    content: "A snapshot grade based on all categories combined.",
  },
  {
    heading: "Accessibility:",
    content:
      "Is your site usable by people with disabilities (ADA compliance)?",
  },
  {
    heading: "Schema",
    content:
      "Are you using structured data to help Google understand your content?",
  },
];

const bottomData = [
  {
    size: "A (90–100)",
    content:
      "Excellent. You’re in great shape, but there’s still room to edge out competitors.",
  },
  {
    size: "B (80–89)",
    content:
      "Good, but there are a few technical or structural improvements you should make.",
  },
  {
    size: "C (70–79)",
    content: "Average. You may be missing key optimizations or best practices.",
  },
  {
    size: "D (<70)",
    content:
      "Needs attention. You’re likely losing traffic or conversions due to avoidable issues.",
  },
];

function SiteCheckUpContent() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const [selectedDevice, setSelectedDevice] = useState("Desktop");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState<any>(null);
  const [auditedUrl, setAuditedUrl] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [showMiniAuditWelcome, setShowMiniAuditWelcome] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);
  const gradesRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLDivElement>(null);
  const leftContent = [bottomData[2], bottomData[0]];
  const rightContent = [bottomData[1], bottomData[3]];
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive gradient directions and URL parameters
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Check for URL parameter and pre-fill the website URL
    const urlParam = searchParams.get('url');
    const autorunParam = searchParams.get('autorun');
    
    if (urlParam) {
      setWebsiteUrl(urlParam);
      
      // If autorun is true, show welcome message and trigger the audit
      if (autorunParam === 'true') {
        setShowMiniAuditWelcome(true);
        
        // Hide welcome message after 5 seconds
        setTimeout(() => {
          setShowMiniAuditWelcome(false);
        }, 5000);
        
        // Fixed mobile auto-run with longer delay and fallback mechanism
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        const delay = isMobile ? 2500 : 1500; // Longer delay for mobile
        
        const attemptAutoRun = () => {
          if (triggerAutoRun.current) {
            console.log('🚀 Auto-triggering audit for mobile...');
            triggerAutoRun.current();
          } else {
            // Fallback: try again after another second
            setTimeout(() => {
              if (triggerAutoRun.current) {
                console.log('🚀 Fallback auto-trigger successful');
                triggerAutoRun.current();
              }
            }, 1000);
          }
        };
        
        setTimeout(attemptAutoRun, delay);
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [searchParams]);

  const handleResultsUpdate = (results: any, url: string) => {
    setAuditResults(results);
    setAuditedUrl(url);
  };

  const triggerAutoRun = useRef<(() => void) | null>(null);

  const setAutoRunTrigger = (triggerFunction: () => void) => {
    triggerAutoRun.current = triggerFunction;
  };

  const scrollToResults = () => {
    // Prioritize screenshot section, then grades, then results as fallback
    const targetRef = screenshotRef.current || gradesRef.current || resultsRef.current;
    
    if (targetRef) {
      // Add a delay to ensure results are fully rendered
      setTimeout(() => {
        if (targetRef) {
          // Get the position of the target section
          const targetTop = targetRef.offsetTop;
          
          // Scroll to show the target section with some padding above
          window.scrollTo({
            top: targetTop - 100, // 100px padding from top to show the title clearly
            behavior: 'smooth'
          });
        }
      }, 800); // Longer delay to ensure screenshot is loaded
    }
  };


  const gradientConfig = {
    leftColumn: {
      desktop: "269deg",
      mobile: "180deg"
    },
    centerTop: {
      desktop: "359deg",
      mobile: "180deg"
    },
    centerMiddle: {
      desktop: "269deg",
      mobile: "135deg"
    },
    centerBottom: {
      desktop: "179deg",
      mobile: "0deg"
    },
    rightColumn: {
      desktop: "459deg",
      mobile: "0deg"
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
      
      <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-5 py-16 md:py-24">
        <div className="grid gap-[24px] justify-center items-center">
          <span className="text-[#8D9DFF] sm:text-[24px] text-[12px] font-normal leading-[12px] sm:leading-[24px] flex gap-2 sm:justify-center justify-start">
            <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
            We Keep It Simple. And Powerful.
          </span>

          <h1 className="font-roboto font-medium text-[32px] sm:text-[62px] sm:leading-[62px] leading-[40px] tracking-[-1.24px] sm:text-center text-start align-middle text-black dark:text-[#FFFFFF]">
            Forte SiteCheckup™
          </h1>
          <p className="lg:w-[794px] md:w-[740px] w-[90%] font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center text-start align-middle text-[#626262]  dark:text-[#B4B4B4]">
            Run a free website checkup and find out in seconds how your site
            really performs. Even if your site earns an A, there’s always room
            to sharpen your edge.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:gap-5 gap-3 mt-[100px] md:mt-[150px]">
          {tabData.map((item, index) => (
            <>
              <div
                key={index}
                className="!dark:bg-secondary-1350 dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] md:py-[60px] md:px-8 py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div
                  className="
                                        border 
                                        border-transparent 
                                        p-[1px] 
                                        bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                                        bg-origin-border
                                        rounded-[90px]
                                        md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
                                    "
                >
                  <div className="p-2">
                    <Icon
                      name={item.icon}
                      className="md:w-[34px] md:h-9 w-7 h-6"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-inter font-medium text-[18px] leading-[22px] sm:text-[26px] sm:leading-[32px] tracking-normal text-center align-middle dark:text-secondary-1050">
                    {item.heading}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
        <section className="lg:hidden block">
          <h1 className="text-[26px] max-w-[794px] font-medium font-roboto mt-5 w-[90%] max-[768px]:leading-[40px] dark:text-secondary-1000 md:text-center">
            What Is Forte Care™?
          </h1>
          <p className="text-[18px] font-normal font-inter text-primary-1400 dark:text-primary-1050 lg:w-[794px] md:w-[740px] w-[90%] mt-5 md:text-center">
            Forte Care™ is our premium, ongoing support and optimization
            service— built to keep your website running fast, secure, and fully
            dialed-in long after launch. Whether you need content updates,
            performance tuning, or just peace of mind, we’re your
            behind-the-scenes team.
          </p>
        </section>
        
        {/* Mobile SEO Audit Tool */}
        <section className="lg:hidden block w-full px-4 py-8">
          <div className="max-w-md mx-auto">
            <div className="dark:border dark:border-[#5C5C5C] rounded-2xl p-4 dark:bg-transparent bg-[#F4F4F4]">
              <div className="text-center mb-6">
                <h2 className="font-inter-display font-medium text-[26px] leading-[30px] text-black dark:text-[#FFFFFF]">
                  Your free checkup starts here!
                </h2>
                <p className="mt-4 font-inter font-normal text-[16px] leading-[20px] text-[#626262] dark:text-primary-1050">
                  We'll scan your site for speed, SEO, accessibility, and more.
                </p>
              </div>
              <div
                className="rounded-xl p-4 text-center"
                style={{
                  backgroundImage: "url('/images/forteSolutions/bg-img.png')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >                  <SEOAuditTool
                    websiteUrl={websiteUrl}
                    setWebsiteUrl={setWebsiteUrl}
                    selectedDevice={selectedDevice}
                    setSelectedDevice={setSelectedDevice}
                    onResultsUpdate={handleResultsUpdate}
                    onResultsReady={scrollToResults}
                    setAutoRunTrigger={setAutoRunTrigger}
                  />
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-base text-primary-1050 mb-4">
                Enter your email and we'll send your results in a downloadable format.
              </p>
              <div className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-full px-4 py-3 dark:bg-white/10 bg-[#f4f4f4] text-black dark:border dark:border-[#FFFFFF14] rounded-lg dark:text-white placeholder-gray-300 focus:outline-none"
                />
                <DarkButton showIcon={false}>
                  Add
                </DarkButton>
                <DarkButton iconName="download" iconSize="large">
                  Download PDF Report
                </DarkButton>
              </div>
            </div>
          </div>
        </section>
        
        {/* -----///---- */}
        <section className="w-full dark:bg-black bg-white  py-16 px-4 overflow-hidden lg:block hidden">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 items-start">
              <div className="col-span-6 lg:col-span-3  dark:border dark:border-[#5C5C5C] rounded-2xl p-2 md:mt-6 dark:bg-transparent bg-[#F4F4F4]">
                <div className="text-center mb-6">
                  <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle sm:text-center text-black dark:text-[#FFFFFF] mt-4">
                    Your free checkup starts here!
                  </h2>
                  <p className="md:mt-6  px-[197px]  font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center align-middle text-[#626262] dark:text-primary-1050">
                    We’ll scan your site for speed, SEO, accessibility, and
                    more. Most audits finish in under a minute—even for larger
                    sites.
                  </p>
                </div>
                <div
                  className="rounded-xl p-6 text-center py-16 px-10"
                  style={{
                    backgroundImage: "url('/images/forteSolutions/bg-img.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  {/* Website Audit Tool */}
                  <SEOAuditTool
                    websiteUrl={websiteUrl}
                    setWebsiteUrl={setWebsiteUrl}
                    selectedDevice={selectedDevice}
                    setSelectedDevice={setSelectedDevice}
                    onResultsUpdate={handleResultsUpdate}
                    onResultsReady={scrollToResults}
                    setAutoRunTrigger={setAutoRunTrigger}
                  />
                </div>

              </div>

            </div>

          </div>
          <p className="text-lg mt-5 text-primary-1050 text-center">Enter your email and we&apos;ll send your results in a downloadable format—perfect for sharing or saving.</p>
          <div className="w-[792px] mx-auto mt-6 flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="flex-1 px-4 py-3 dark:bg-white/10 bg-[#f4f4f4] text-black dark:border dark:border-[#FFFFFF14] rounded-lg dark:text-white placeholder-gray-300 focus:outline-none"
            />
            {/* <button 
                                    type="button"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 font-medium whitespace-nowrap"
                                >
                                    Add
                                </button> */}
            <DarkButton showIcon={false}>
              Add
            </DarkButton>
          </div>
          <div className="flex justify-center mt-6">
            <DarkButton iconName="download" iconSize="large">
              Download PDF Report
            </DarkButton>
          </div>

        </section>

        {/* SEO Results Section */}
        {auditResults && (
          <div ref={resultsRef}>
            <SEOResults 
              results={auditResults}
              auditedUrl={auditedUrl}
              selectedDevice={selectedDevice}
              gradesRef={gradesRef}
              screenshotRef={screenshotRef}
            />
          </div>
        )}

        {/* ----------- */}
        <section className=" dark:bg-black text-white py-20 px-4 min-h-scree items-center justify-center">
          <div className="text-center mb-16">
            <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle  text-black dark:text-[#FFFFFF] md:mb-8">
              Understanding Your Results
            </h2>
            <p className="mt-3  lg:w-[50%] lg:m-auto font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal  align-middle text-[#626262]  dark:text-[#B4B4B4]">
              The Forte SiteCheckup™ tool analyzes your website across 8 key
              areas that impact your visibility, usability, and conversions:
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-1  max-w-6xl mx-auto w-full items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-1">
              {leftColumn.map((data, index) => (
                <div
                  key={index}
                  className="inline-block p-[1px] rounded-[20px] transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{
                    background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
                  }}
                >
                  <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-5 pl-2 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] text-center transition-all duration-300 hover:shadow-lg">
                    <h5 className="font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-black dark:text-[#FFFFFF]">
                      {data.heading}
                    </h5>
                    <p className="mt-3 font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-primary-1400 dark:text-[#B4B4B4]">
                      {data.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column */}
            <div className="flex flex-col items-center gap-1">
              <div
                className="inline-block p-[1px] w-full rounded-[20px]"
                style={{
                  background: `linear-gradient(${isMobile ? gradientConfig.centerTop.mobile : gradientConfig.centerTop.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
                }}
              >
                <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-5 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] text-center w-full">
                  <h5 className="font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-black dark:text-[#FFFFFF]">
                    Links
                  </h5>
                  <p className="mt-3 font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-primary-1400 dark:text-[#B4B4B4]">
                    Are your internal & external links clean, functional, and SEO, friendly?
                  </p>
                </div>
              </div>
              <div
                className="inline-block p-[1px] w-full rounded-[20px]"
                style={{
                  background: `linear-gradient(${isMobile ? gradientConfig.centerMiddle.mobile : gradientConfig.centerMiddle.desktop}, #203FFC 100%, transparent 100%, black 100%)`,
                }}
              >
                <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white px-6 py-14 rounded-[20px] text-center dark:shadow-[0_0_50px_rgba(85,135,255,0.4)] border dark:border-[#1A1A1A] text-lg w-full">
                  {/* SEO Growth Animation */}
                  <div className="w-[270px] h-[250px] mx-auto relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-purple-600/30 animate-pulse shadow-2xl"></div>
                    <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 animate-pulse delay-300"></div>
                    <div className="absolute inset-12 rounded-full bg-gradient-to-bl from-cyan-400/20 to-blue-500/25 animate-pulse delay-700"></div>
                    <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-8 shadow-xl backdrop-blur-sm">
                      <div className="text-4xl md:text-5xl mb-3">📈</div>
                      <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        SEO Growth
                      </div>
                    </div>
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
                    <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1500"></div>
                  </div>
                </div>
              </div>
              <div
                className="inline-block p-[1px] w-full rounded-[20px]"
                style={{
                  background: `linear-gradient(${isMobile ? gradientConfig.centerBottom.mobile : gradientConfig.centerBottom.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
                }}
              >
                <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-5 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] text-center w-full">
                  <h5 className="font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-black dark:text-[#FFFFFF]">
                    Images
                  </h5>
                  <p className="mt-3 font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-primary-1400 dark:text-[#B4B4B4]">
                    Are your images optimized for performance and accessibility?
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-1">
              {rightColumn.map((item, index) => (
                <div
                  key={index}
                  className="inline-block p-[1px] rounded-[20px]"
                  style={{
                    background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
                  }}
                >
                  <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-5 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] text-center">
                    <h5 className="font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-black dark:text-[#FFFFFF]">
                      {item.heading}
                    </h5>
                    <p className="mt-3 font-inter font-normal text-[14px] sm:text-[18px] sm:leading-[22px] leading-[16px] tracking-normal align-middle text-primary-1400 dark:text-[#B4B4B4]">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="text-center my-16">
          <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle  text-black dark:text-[#FFFFFF]  md:mb-8">
            What Do the Grades Mean?
          </h2>
          <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal  align-middle text-[#626262]  dark:text-[#B4B4B4] mt-3  lg:w-[60%] lg:m-auto">
            Even “A” sites require maintenance—search algorithms change, plugins
            break, and competitors catch up. That’s why we offer Forte Care™ to
            keep your site at its peak, long after the audit is done.
          </p>
        </div>
        {/* last Section mobile*/}
        <section className="mt-[60px] mb-[100px] mx-auto flex gap-5 sm:hidden">
          <div
            className="h-[510px] w-[4px]"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(180deg, #FFFFFF 0%, #5C73FF 100%)"
                  : "linear-gradient(180deg, #FFFFFF 0%, #132696 100%)",
            }}
          ></div>
          <div>
            {bottomData.map((item, index) => (
              <div
                key={index}
                className="py-4 pl-4 pr-[102px] rounded-2xl mb-4 relative"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(90deg, #8293FF 0%, rgba(255, 255, 255, 0) 100%)"
                      : "linear-gradient(90deg, rgba(16, 16, 16, 0) 0%, #020D50 100%)",
                }}
              >
                <OptimizedImage
                  src={
                    theme === "light"
                      ? "/images/forteSolutions/triangle-light.svg"
                      : "/images/forteSolutions/triangle.svg"
                  }
                  alt="logo"
                  width={22}
                  priority
                  height={26.46}
                  className="absolute top-0 bottom-0 m-auto -left-4"
                />
                <h4 className="bg-gradient-to-r dark:from-[#B1BCFF] dark:to-[#5362BD] from-[#001495] to-[#5362BD] bg-clip-text text-transparent text-[14px] lead-[18px] font-display font-medium">
                  {item.size}
                </h4>
                <p className="text-[14px] lead-[18px] font-display dark:text-white text-black font-normal">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Last Section Desktop */}
        <section className="mt-[60px] hidden gap-7 sm:flex">
          {/* Left-content */}
          <div className="pt-[100px]">
            {leftContent.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl mb-4 relative"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #8293FF 100%)"
                      : "linear-gradient(90deg, rgba(16, 16, 16, 0) 0%, #020D50 100%)",
                }}
              >
                <OptimizedImage
                  src={
                    theme === "light"
                      ? "/images/forteSolutions/triangle-light.svg"
                      : "/images/forteSolutions/triangle.svg"
                  }
                  alt="logo"
                  width={22}
                  priority
                  height={26.46}
                  className="absolute top-0 bottom-0 m-auto -right-[14px] rotate-180"
                />
                <h4 className="mb-6 bg-gradient-to-r dark:from-[#B1BCFF] dark:to-[#5362BD] from-[#001495] to-[#5362BD] bg-clip-text text-transparent font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] ">
                  {item.size}
                </h4>
                <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px]  dark:text-white text-black ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
          {/* Center Line */}
          <div
            className="h-[530px] w-[4px]"
            style={{
              background:
                theme === "light"
                  ? "linear-gradient(180deg, #FFFFFF 0%, #5C73FF 100%)"
                  : "linear-gradient(180deg, #FFFFFF 0%, #132696 100%)",
            }}
          ></div>
          {/* Right-content */}
          <div>
            {rightContent.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl mb-9 relative"
                style={{
                  background:
                    theme === "light"
                      ? "linear-gradient(90deg, #8293FF 0%, rgba(255, 255, 255, 0) 100%)"
                      : "linear-gradient(90deg, rgba(16, 16, 16, 0) 0%, #020D50 100%)",
                }}
              >
                <OptimizedImage
                  src={
                    theme === "light"
                      ? "/images/forteSolutions/triangle-light.svg"
                      : "/images/forteSolutions/triangle.svg"
                  }
                  alt="logo"
                  width={22}
                  priority
                  height={26.46}
                  className="absolute top-0 bottom-0 m-auto -left-4"
                />
                <h4 className="mb-6 bg-gradient-to-r dark:from-[#B1BCFF] dark:to-[#5362BD] from-[#001495] to-[#5362BD] bg-clip-text text-transparent font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] ">
                  {item.size}
                </h4>
                <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px]  dark:text-white text-black ">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>
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
