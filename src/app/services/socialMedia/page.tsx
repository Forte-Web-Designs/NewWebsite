"use client";

import { Icon } from "@/components/images/Icon";
import { useState, useEffect } from "react";
import { PricingPage } from "@/components/pricing";
import LightButton from "@/components/LightButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What's the Investment? 💰",
    answer:
      "Social media management starts at $200/month and is only available to our website clients. Why? Because we want your brand to feel cohesive—from your homepage to your latest Instagram reel. It's all about consistency and quality that actually converts.",
  },
  {
    question: "Already a Forte Client? 🎉",
    answer:
      "Perfect! You're already in the family. You'll get the same amazing support you're used to, plus we can seamlessly extend your brand into social media. Just reach out and let's chat about adding social to your growth strategy!",
  },
];

export default function ServicePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Handle responsive gradient directions
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal font-roboto flex items-center gap-2 text-primary-1000 mb-4 sm:mb-6">
          <Icon name="star" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          Hey there! 👋
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight max-w-4xl dark:text-secondary-1000 mb-4 sm:mb-6">
          Social Media That Actually Works for Your Business
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 max-w-3xl leading-relaxed">
          Staying active on social media keeps you top-of-mind with customers—but who has time for that? We handle your social presence so you can focus on what you do best: running your business.
        </p>
      </section>

      <section className="w-full dark:bg-black bg-white py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 items-start">
            <div className="border border-[#5C5C5C] rounded-2xl p-2">
              <BackgroundImage
                src="/images/services/web-service-back.png"
                alt="Banner description"
                className="rounded-xl p-6 sm:p-8 md:p-10 lg:p-16 text-center"
              >
                <h1 className="font-medium text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                  Why Social Media Actually Matters
                </h1>
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-white leading-relaxed max-w-3xl mx-auto">
                  Great websites attract visitors. Great social feeds keep them engaged. Together, they build trust and turn followers into customers. We help you create content that actually connects with your local audience and supports your business goals.
                </p>
              </BackgroundImage>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-white">
            What You Get With Our Social Media Management:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto w-full items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Content That Connects</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Posts designed to reflect your brand and actually engage your local audience
                </p>
              </div>
            </div>

            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Smart Planning</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Monthly calendars that keep your message consistent and on-brand
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerTop.mobile : gradientConfig.centerTop.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A] w-full">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  Platform Management
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Facebook, Instagram, and Google Business Profile covered
                </p>
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerMiddle.mobile : gradientConfig.centerMiddle.desktop}, #203FFC 100%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-8 sm:p-10 md:p-12 lg:p-14 rounded-[20px] text-center dark:shadow-[0_0_50px_rgba(85,135,255,0.4)] border dark:border-[#1A1A1A] w-full">
                {/* Replaced large shape image with modern icon design */}
                <div className="flex justify-center items-center w-48 sm:w-56 md:w-64 lg:w-[270px] h-40 sm:h-48 md:h-56 lg:h-[250px] mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                  <div className="absolute inset-6 bg-gradient-to-l from-blue-500/30 to-cyan-500/30 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">🚀</div>
                    <div className="text-base sm:text-lg font-semibold">Social Growth</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerBottom.mobile : gradientConfig.centerBottom.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A] w-full">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  Performance Reports
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Simple stats to show growth, engagement, and ROI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  We Handle the Conversations
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  We monitor and respond to comments and messages professionally
                </p>
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Local Focus</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  Everything we do is tailored to your local market and ideal customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-black bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-16 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter text-black dark:text-secondary-1000 text-center mb-4 sm:mb-6 md:mb-9">
            Quick Questions...
          </h2>

          {faqData?.map((faq, index) => (
            <div
              key={index}
              className="dark:bg-primary-1150 bg-secondary-1350 p-4 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 w-full max-w-4xl"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black leading-tight pr-4">
                  {faq.question}
                </h2>
                <button className="transform transition-transform duration-300 flex-shrink-0">
                  <svg
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-2 sm:h-[14px] sm:w-2 transition-transform duration-300 ${expandedIndex === index ? "rotate-[270deg]" : "rotate-90"
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
                className={`overflow-hidden transition-all duration-300 ${expandedIndex === index ? "max-h-[500px] mt-3 sm:mt-4" : "max-h-0"
                  }`}
              >
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <LightButton href="/contact">Contact Us</LightButton>
        </div>
      </section>
      <section className="dark:bg-black bg-white py-16 sm:py-20 md:py-24 lg:py-32 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter text-black dark:text-secondary-1000 mb-6 sm:mb-8">
          Ready to Get Started?
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 sm:mb-12">
          Our social media plans are simple and designed for busy business owners. Pick what works for your goals, or let's chat about a custom solution!
        </p>

        <div className="text-left">
          <PricingPage />
        </div>
      </section>
    </>
  );
}
