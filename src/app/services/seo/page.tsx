"use client";

import LightButton from "@/components/LightButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { PricingPage } from "@/components/pricing";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How Does Forte SEO™ Pricing Work? 💰",
    answer:
      "Forte SEO™ requires an active Forte Foundation™ ($200/mo) or Forte Pro™ ($350/mo) website. Then add Forte SEO Essential™ (+$300/mo) or Forte SEO Growth™ (+$500/mo). For example: Foundation + SEO Essential = $500/mo total.",
  },
  {
    question: "How Long Does It Take? 🤔",
    answer:
      "Some clients see improvements in just a few weeks. Others, especially in competitive markets, may need a few months of consistent Forte SEO™ to see results. We're always transparent about what's realistic and track everything so you can see progress clearly.",
  },
  {
    question: "What's the Difference Between Essential and Growth? 📈",
    answer:
      "Forte SEO Essential™ focuses on technical foundations and on-page optimization. Forte SEO Growth™ includes everything in Essential plus 4 blog posts per month, local SEO, competitor analysis, and link building campaigns.",
  },
];

export default function SeoDesignPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
          <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          Hi there! 👋
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6 max-w-4xl mx-auto">
          Tired of Being Invisible on Google?
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
          Let's be real - if customers can't find you online, you don't exist. Our SEO gets you found by people who are ready to buy what you sell.
        </p>
      </div>

      {/* Main Content Section - Mobile Optimized */}
      <div className="py-12 sm:py-16 lg:py-24 space-y-6 sm:space-y-8 lg:space-y-12">
        <div className="dark:bg-[radial-gradient(50.48%_57.98%_at_5.98%_5.37%,_#1A1A1A_0%,_rgba(21,21,21,0.5)_50%,_rgba(16,16,16,0)_100%)] bg-[radial-gradient(50.48%_57.98%_at_5.98%_5.37%,_#f4f4f4_0%,_rgba(244,244,244,0.5)_50%,_rgba(244,244,244,0)_100%)] p-4 sm:p-6 lg:p-8 rounded-tl-lg sm:rounded-tl-xl lg:rounded-tl-3xl w-full max-w-4xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex-1">
              <p className="text-xs sm:text-sm bg-secondary-1250 py-1 px-2 sm:py-2 sm:px-4 rounded-full dark:text-white text-secondary-1050 inline-block mb-3 sm:mb-4">
                users
              </p>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <div className="relative inline-block md:rounded-[34px] rounded-[20px] md:p-[1.11px] p-[0.5px] dark:bg-[linear-gradient(125.29deg,rgba(255,255,255,0.1)_24.73%,rgba(128,128,128,0.05)_39.69%,rgba(0,0,0,0)_54.64%)] bg-primary-1150">
                <button className="flex items-center gap-2 bg-[#1E1E1E80] dark:text-secondary-1500 text-secondary-1050 md:py-[8px] py-[4px] md:px-4 px-2 rounded-[34px] md:text-sm text-[6px] w-full h-full">
                  Daily Active Users
                  <Icon
                    name="down-arrow"
                    className="md:w-[10px] md:h-[6px] w-[4.66px] h-[3.32px] dark:text-secondary-1500 text-secondary-1050"
                  />
                </button>
              </div>

              <div className="relative inline-block md:rounded-[34px] rounded-[20px] md:p-[1.11px] p-[0.5px] dark:bg-[linear-gradient(125.29deg,rgba(255,255,255,0.1)_24.73%,rgba(128,128,128,0.05)_39.69%,rgba(0,0,0,0)_54.64%)] bg-primary-1150">
                <button className="flex items-center gap-2 bg-[#1E1E1E80] dark:text-secondary-1500 text-secondary-1050 md:py-[8px] py-[4px] md:px-4 px-2 pr-10 rounded-[34px] md:text-sm text-[6px] w-full h-full">
                  Last 28 Days
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-end md:gap-3 gap-1.5">
            <p className="md:text-[62px] text-[36px] md:font-medium font-normal dark:text-primary-1550 text-primary-1150 font-roboto md:h-[72px] h-10">
              5.24K
            </p>
            <div className="md:text-[14px] text-[8px] font-normal font-inter dark:text-secondary-1500 text-secondary-1050 flex items-center md:gap-1.5 gap-0.5 bg-primary-1150 rounded-xl md:px-2 px-1 w-fit md:h-6 h-3">
              <Icon
                name="top-arrow"
                className="md:w-[10px] md:h-3 w-[5.42px] h-1"
              />{" "}
              25%
            </div>
          </div>
          <BackgroundImage
            src="/images/services/graph.png"
            alt="Banner description"
            overlayClassName=""
          >
            <div className="md:py-14 py-6 flex flex-col md:gap-10 gap-7">
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  6K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  5K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  4K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div className="flex justify-end md:-mt-32">
          <h2 className="md:w-[696px] w-full md:text-[38px] text-[22px] font-medium font-inter max-[767px]:leading-[26px] dark:bg-transparent bg-white relative z-20">
            Here's the thing - we don't just build beautiful websites. We make sure people can actually find them! Our SEO is designed specifically for small businesses who want real results without the confusing agency jargon.
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:py-48 md:py-36 sm:py-10 py-6 px-5">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000">
          Who We Love Working With
        </h2>
        <p className="text-[18px] font-normal font-inter dark:text-primary-1050 text-primary-1400 max-w-[794px] leading-[22px] sm:mt-8 mt-5">
          Whether you're a local service business, online store, or growing company, we've helped all kinds of businesses get found and grow their customer base:
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:mt-16 sm:mt-14 mt-6 lg:gap-[5.2rem] md:gap-10 gap-8 max-[768px]:w-[80%]">
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="location"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Local Businesses (Contractors, Dentists, Cafes—you name it)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="bag"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              B2B services (consultants, agencies, software providers)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cap"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Education & training programs
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cursor"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Clinics, nonprofits, travel brands, and more
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:items-center lg:py-36 sm:py-28 py-14 px-5">
        <p className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000 lg:mb-10 md:mb-9 mb-7 md:leading-[46px] leading-[30px]">
          What's Inside Our SEO Package?
        </p>

        <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 bg-secondary-1350">
          <div className="flex flex-col md:gap-14 gap-6 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                1. Rock-Solid Technical Foundation
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                Every site we build is lightning-fast and error-free by design. But we go deeper—fixing crawl issues, broken links, and adding the technical magic that makes Google trust your site.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                2. Content That Actually Gets Found
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We research what your customers are actually searching for, then create content that matches their needs. Whether it's service pages or helpful blog posts, we make sure you show up when it matters.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:p-[60px] p-5">
            {/* Animated SEO Foundation Circle - Same style as SEO Growth */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/30 via-emerald-600/40 to-teal-600/30 animate-pulse shadow-2xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-green-400/20 to-emerald-500/30 animate-pulse delay-300"></div>
              <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-8 shadow-xl backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3">🏗️</div>
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Foundation
                </div>
              </div>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-bounce delay-700"></div>
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col items-center dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 mt-5 bg-secondary-1350">
          <div className="flex justify-center items-center md:p-[60px] p-5">
            {/* SEO Growth Animation */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-purple-600/30 animate-pulse shadow-2xl">
                <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 animate-pulse delay-300">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-cyan-400/20 to-blue-500/25 animate-pulse delay-700">
                  </div>
                </div>
              </div>
              <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-8 shadow-xl backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3">📈</div>
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SEO Growth
                </div>
              </div>
              {/* Floating particles for dynamic effect */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
          <div className="flex flex-col md:gap-14 gap-6 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                3. Local SEO That Works
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-primary-1400 dark:text-primary-1050  md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We optimize your Google Business Profile and local listings so you show up when people search "near me." Perfect for service businesses, local stores, and anyone who serves their community.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                4. Quality Link Building
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We build relationships with reputable websites and directories to boost your authority. No spammy shortcuts—just quality connections that Google respects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:pt-36 lg:pb-48 sm:py-20 py-10 sm:items-center items-start px-5">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter text-black dark:text-secondary-1000 lg:mb-9 md:mb-6 mb-1">
          Quick Questions...
        </h2>

        {faqData?.map((faq, index) => (
          <div
            key={index}
            className="dark:bg-primary-1150 bg-secondary-1350 sm:p-8 p-4 rounded-2xl transition-all duration-300 w-full"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="sm:text-[26px] text-[20px] max-[640px]:leading-7 font-medium font-inter dark:text-secondary-1050 text-black">
                {faq.question}
              </h2>
              <button className="transform transition-transform duration-300">
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`sm:h-[14px] h-[11px] sm:w-2 w-[6px] transition-transform duration-300 ${expandedIndex === index ? "rotate-[270deg]" : "rotate-90"
                    }`}
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                  0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                  7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 md:w-auto w-[86%] ${expandedIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
            >
              <p className="sm:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 text-primary-1400 md:leading-[22px] leading-[18px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}

        <div className="sm:mt-10 mt-3">
          <LightButton href="/contact">Let's Talk About Your Goals</LightButton>
        </div>
      </div>

      {/* SEO Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Ranking?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Add Forte SEO™ to your existing Forte Foundation™ or Pro™ website. Choose the plan that matches your growth goals.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💡 <strong>Small Business Tip:</strong> Most local businesses see great results starting with Foundation + SEO Essential™ ($500/month total)
              </p>
            </div>
          </div>
          <PricingPage serviceType="seo" />
        </div>
      </section>
    </section>
  );
}
