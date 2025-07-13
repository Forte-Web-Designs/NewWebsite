"use client";

import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import Image from 'next/image';
import { useState, useEffect } from "react";
import LightButton from "@/components/LightButton";
import { useTheme } from "@/app/providers/ThemeProvider";

const faqs = [
  {
    title: "Why Clients Rely on Forte Care™",
    content: [
      "1. Peace of Mind: No tech stress—we handle everything behind the scenes.",
      "2. Performance That Lasts: Your site stays fast, secure, and conversion-optimized.",
      "3. Built-In Growth: As your business evolves, we make sure your website grows with it."
    ]
  },
  {
    title: "Still Not Sure?",
    content: [
      "We’re here to help! Contact our support team anytime."
    ]
  }
];

export default function ServicePage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHighPerformer, setIsHighPerformer] = useState(false);
  const [auditedUrl, setAuditedUrl] = useState<string>("");
  const { theme } = useTheme();

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  // Handle responsive gradient directions and URL parameters
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check URL parameters
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get('type');
      const url = urlParams.get('url');
      
      if (type === 'protection') {
        setIsHighPerformer(true);
      }
      
      if (url) {
        setAuditedUrl(url);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto md:text-center text-start sm:gap-[24px] gap-[22px] grid">
            <div className="flex gap-2 md:justify-center align-middle items-center">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="md:text-[24px] text-[12px] font-normal leading-[12px] sm:leading-[24px] flex items-center text-center sm:justify-center sm:gap-2 gap-1 text-primary-1000 ">
                We Keep It Simple. And Powerful.
              </span>
            </div>
            <h1 className="font-roboto font-medium text-[32px] sm:text-[62px] sm:leading-[62px] leading-[40px] tracking-[-1.24px] sm:text-center text-start align-middle text-black dark:text-[#FFFFFF]">
              A Personalized Approach To Your Websites Well-Being
            </h1>
            <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center text-start align-middle text-[#626262]  dark:text-[#B4B4B4]">
              At Forte Web Designs, we don’t believe in overcomplicating things. No fluff. No gimmicks. Just a clear, proven system that delivers fast, secure, and high-converting websites—every time. Here’s what makes our process different:
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Banner for High Performers */}
      {isHighPerformer && (
        <section className="py-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20 dark:from-green-900/30 dark:to-emerald-900/30 border-y border-green-400/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/50 px-4 py-2 rounded-full border border-green-300 dark:border-green-700">
                  <span className="text-2xl">🎉</span>
                  <span className="text-green-800 dark:text-green-200 font-semibold">Great news!</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Your Website is Performing Well!
              </h2>
              {auditedUrl && (
                <p className="text-green-700 dark:text-green-300 font-medium mb-4">
                  Analysis results for: <span className="font-mono bg-white/50 dark:bg-black/50 px-2 py-1 rounded">{auditedUrl}</span>
                </p>
              )}
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                You've clearly invested in your website and it shows. However, <strong>Google updates its algorithm 500+ times per year</strong>. 
                Even high-performing sites typically lose 15-30% of their traffic within 6 months without ongoing optimization.
              </p>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  🛡️ Protect Your Hard-Earned Rankings
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Forte Care™ is designed specifically for sites like yours that are already performing well. 
                  We provide ongoing monitoring, optimization, and protection to ensure your rankings stay strong 
                  as search algorithms evolve.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-9  md:px-10 sm:px-6 lg:px-0 md:py-16">
        <div className=" container mx-auto xxl:px-8 sm:px-6 lg:px-8 px-4">
          <div className="grid gap-[24px]">
            <div className="">
              <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle sm:text-center text-start text-black dark:text-[#FFFFFF]">
                What Is Forte Care™?
              </h2>
            </div>
            <div className="">
              <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center text-start align-middle text-[#626262]  dark:text-[#B4B4B4]">Forte Care™ is our premium, ongoing support and optimization service— built to keep your <br /> website running fast, secure, and fully dialed-in long after launch. Whether you need content <br /> updates, performance tuning, or just peace of mind, we’re your behind-the-scenes team.</p>
            </div>
            <div className="">
              <h4 className="font-inter font-medium text-[18px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-normal sm:text-center text-start align-middle dark:text-[#EEEEEE] text-[black]">! Already included with most Forte website plans.</h4>
            </div>
          </div>
        </div>
      </section>
      {/* ============Test Setion=== */}
      <section className=" dark:bg-black text-white py-20 px-4 min-h-scree items-center justify-center grid sm:gap-[48px] gap-[24px]">
        <div className="text-center">
          <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle sm:text-center text-start text-black dark:text-[#FFFFFF]">
            Every Forte Care™ Plan Includes:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-1 max-w-6xl mx-auto w-full items-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2 md:gap-1">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] min-h-[120px] md:h-[150px] flex items-center justify-center font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center">
                Speed Optimization & Performance Checks
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] min-h-[120px] md:h-[150px] flex items-center justify-center font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center">
                Quarterly Performance Reports
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 md:gap-1">
            <div
              className="inline-block p-[1px] w-full rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerTop.mobile : gradientConfig.centerTop.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] w-full font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center flex items-center justify-center min-h-[60px]">
                Unlimited Content Edits
              </div>
            </div>
            <div
              className="inline-block p-[1px] w-full rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerMiddle.mobile : gradientConfig.centerMiddle.desktop}, #203FFC 100%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] text-center dark:shadow-[0_0_50px_rgba(85,135,255,0.4)] border dark:border-[#1A1A1A] w-full flex items-center justify-center">
                <OptimizedImage src="/images/services/Shape Holo.png" alt="logo" width={200} priority height={180} className="w-48 h-40 sm:w-56 sm:h-48 md:w-64 md:h-56 lg:w-[270px] lg:h-[250px]" />
              </div>
            </div>
            <div
              className="inline-block p-[1px] w-full rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerBottom.mobile : gradientConfig.centerBottom.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] w-full font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center flex items-center justify-center min-h-[60px]">
                Monthly Site Backups
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:gap-1">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] min-h-[120px] md:h-[150px] flex items-center justify-center font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center">
                Hosting Management & Uptime Monitoring
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-4 sm:p-6 rounded-[20px] dark:shadow-md border dark:border-[#1A1A1A] min-h-[120px] md:h-[150px] flex items-center justify-center font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight tracking-normal text-center">
                Broken Link Fixes
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="w-full dark:bg-black bg-white  py-16 px-4 overflow-hidden" >
        <div className="max-w-6xl mx-auto">

          <div className="max-w-6xl mx-auto grid md:grid-cols-6 gap-8 items-start dark:bg-black bg-white ">
            <div className="col-span-6 lg:col-span-3 px-[20px] sm:px-0 grid gap-[24px]">
              <h2 className="dark:text-white text-black ont-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle ">
                Bonus:<br />Monthly Website Health Review
              </h2>
              <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal  text-start align-middle text-[#626262]  dark:text-[#B4B4B4]">
                Every month, you’ll receive a custom Website Health Review: a proactive checkup with key insights, recommendations, and alerts—so you’re never left guessing about your site’s performance or stability.
              </p>
            </div>

            <div className="col-span-6 lg:col-span-3 relative border border-[#5C5C5C] rounded-[16px] grid gap-[24px]">
              <OptimizedImage src="/images/services/Shape Holo star.png" alt="logo" width={150} priority height={119} className="absolute -top-16 -right-12 z-10  lg:block hidden" />
              <div
                className="rounded-xl p-6"
                style={{
                  background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)',
                }}
              >
                <ul className="list-disc pl-5 space-y-3 text-sm">
                  <li className="text-white font-display font-medium text-[18px] leading-[24px] sm:text-[26px] sm:leading-[32px] tracking-normal align-middle">PageSpeed & Core Web Vitals grades</li>
                  <li className="text-white font-isplay font-medium text-[18px] leading-[24px] sm:text-[26px] sm:leading-[32px] tracking-normal align-middle">SSL & security checkups</li>
                  <li className="text-white font-display font-medium text-[18px] leading-[24px] sm:text-[26px] sm:leading-[32px] tracking-normal align-middle">Update alerts & improvement tips</li>
                  <li className="text-white font-display font-medium text-[18px] leading-[24px] sm:text-[26px] sm:leading-[32px] tracking-normal align-middle">Content & SEO suggestions</li>
                </ul>
              </div>

            </div>
          </div>


          <p className="font-inter font-medium text-[18px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-normal sm:text-center text-start align-middle dark:text-[#EEEEEE] text-[black] lg:mt-28 mt-6 mx-auto">
            It’s like having a digital pit crew—quietly keeping everything running in top condition so you can focus on growing your business.
          </p>
        </div>
      </section>

      <section className=" dark:bg-black bg-white">

        <div className="container  text-white flex flex-col sm:items-center sm:justify-center sm:px-4 sm:py-16 px-[20px] mx-auto sm:gap-[24px] gap-[22px]">
          <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal flex align-middle sm:text-center text-start text-black dark:text-[#FFFFFF]">Quick Questions...</h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-[100%]  mb-2  dark:bg-primary-1150 bg-[#F4F4F4] rounded-[16px] sm:p-[32px] overflow-hidden "
            >
              <button
                onClick={() => toggle(index)}
                className="w-[100%] flex justify-between items-center text-left sm:p-0 px-6 py-7 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"
                data-clickable
              >
                <span className="font-inter font-medium sm:text-[26px] text-[18px] leading-[22px] sm:leading-[32px] tracking-normal text-center align-middle text-[#000000] dark:text-[white]">{faq.title}</span>
                <Icon
                  name={theme === "dark" ? "selector-light" : "selector"}
                  alt="right arrow icon"
                  className={`w-[15px] h-[20px] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className=" text-md space-y-2 md:pt-[14px] sm:p-0 px-6 py-7">
                  {faq.content.map((line, i) => (
                    <p className="font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal  text-start align-middle text-[#626262]  dark:text-[#B4B4B4]" key={i}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-col sm:flex-row mx-auto mb-32 sm:mt-0 mt-[26.5px] sm:ml-0 ml-[44px]">
          <LightButton href="/contact" className="md:text-[18px] md:leading-[18px] text-[11px] leading-[11px]">Contact Us</LightButton>
        </div>
      </section>

    </>
  );
}
