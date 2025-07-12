"use client";

import { OptimizedImage } from "@/components/images/OptimizedImage";
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
    question: "Pricing & Availability?",
    answer:
      "Social media management starts at $200/month and is only available to our active website clients. Why? Because we want your brand to feel cohesive—from your homepage to your latest Instagram reel. It’s all about consistency and quality.",
  },
  {
    question: "What if I am already a Forte web designs client?",
    answer:
      "If you're already a Forte Web Designs client, you're in great hands! You’ll continue to receive dedicated support, regular updates, and access to all the latest features we roll out. Our team is always here to ensure your website stays fast, secure, and aligned with your business goals. If you need changes, upgrades, or just have questions — simply reach out, and we’ll take care of it.",
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
      <section className="py-16 md:py-24 md:text-center flex flex-col md:items-center">
        <span className="sm:text-2xl text-xs font-normal font-roboto flex md:items-center sm:gap-1.5 gap-1 text-primary-1000 px-5 md:mx-auto">
          <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
          Stay Active Stay Relevent
        </span>
        <h1 className="md:text-[62px] text-[36px] md:max-w-[794px] font-medium font-roboto md:mt-7 mt-5 w-full max-[767px]:leading-[40px] dark:text-secondary-1000 md:text-center px-5">
          Done-for-You Social Media Management
        </h1>
        <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 lg:w-[840px] md:w-[715px] w-[97%] md:mt-6 mt-5 md:text-center text-primary-1400 max-[767px]:leading-[18px] px-5 leading-[22px]">
          Staying active on social media keeps you top-of-mind—but it’s easy to
          fall behind. That’s why we offer exclusive social media management for
          our web clients, keeping your presence consistent, sharp, and
          local-focused. .
        </p>
      </section>

      <section className="w-full dark:bg-black bg-white md:py-40 py-10 md:px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 items-start">
            <div className="col-span-6 lg:col-span-3  border border-[#5C5C5C] rounded-2xl p-2">
              <BackgroundImage
                src="/images/services/web-service-back.png"
                alt="Banner description"
                className="rounded-xl p-6 text-center md:py-16 py-12 md:px-10"
              >
                <h1 className="font-medium text-white md:text-4xl text-[38px]">
                  Why Social Media Matters
                </h1>
                <p className="md:text-[18px] text-[14px] font-normal font-inter md:mt-5 mt-4 text-white max-[767px]:leading-[18px] leading-[22px]">
                  Great websites attract. Great social feeds engage. Together,
                  they convert. We help small businesses build trust and
                  credibility through thoughtful posts, community engagement,
                  and smart strategy—all designed to support your business goals
                  and grow your brand locally.
                </p>
              </BackgroundImage>
            </div>
          </div>
        </div>
      </section>

      <section className=" dark:bg-black text-white py-24 px-4 min-h-scree items-center justify-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl  font-medium text-gray-900 dark:text-white text-center md:mb-8">
            Every Forte Care™ Plan Includes:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-1  max-w-6xl mx-auto w-full items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-1">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="md:text-[26px] text-[18px]">Content Creation</h5>
                <p
                  className="text-[18px] mt-4 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400"
                >
                  Posts designed to reflect your brand and drive interaction
                </p>
              </div>
            </div>

            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.leftColumn.mobile : gradientConfig.leftColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="md:text-[26px] text-[18px]">Monthly Planning</h5>
                <p className="text-[18px] mt-4 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400">
                  Editorial calendars to keep your messaging focused
                </p>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="flex flex-col  items-center gap-1">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerTop.mobile : gradientConfig.centerTop.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A] w-[100%]">
                <h5 className="md:text-[26px] text-[18px]">
                  Platform Management
                </h5>
                <p className="text-[18px] mt-4 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400">
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
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-14 rounded-[20px] text-center dark:shadow-[0_0_50px_rgba(85,135,255,0.4)]   border dark:border-[#1A1A1A] text-lg  w-full">
                <OptimizedImage
                  src="/images/services/Shape Holo ring.png"
                  alt="logo"
                  width={270}
                  priority
                  height={250}
                  className="lg:w-[270px] lg:h-[250px] mx-auto"
                />
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerBottom.mobile : gradientConfig.centerBottom.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A] w-[100%]">
                <h5 className="md:text-[26px] text-[18px]">
                  Performance Reports
                </h5>
                <p className="text-[18px] mt-3 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400">
                  Simple stats to show growth, engagement, and ROI
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-1">
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="md:text-[26px] text-[18px]">
                  Community Engagement
                </h5>
                <p className="text-[18px] mt-4 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400">
                  We monitor comments and messages so you don’t have to
                </p>
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.rightColumn.mobile : gradientConfig.rightColumn.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-[#101010] border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-black dark:text-white p-9 rounded-[20px] text-center dark:shadow-md border dark:border-[#1A1A1A]">
                <h5 className="md:text-[26px] text-[18px]">Local Focus</h5>
                <p className="text-[18px] mt-4 md:leading-[22px] leading-[18px] text-gray-600 dark:text-gray-400">
                  Everything we do is geared toward your specific audience and
                  location
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" dark:bg-black bg-white pb-32">
        <div className=" md:container mx-auto flex flex-col gap-3 lg:pt-32 lg:pb-14 sm:py-24 py-16 sm:items-center items-start xl:px-16 lg:px-10 px-4">
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
        </div>
        <div className="flex justify-center flex-col sm:flex-row mx-auto">
          <LightButton href="/contact">Contact Us</LightButton>
        </div>
      </section>
      <section className="dark:bg-black bg-white pb-32 text-center">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter text-black dark:text-secondary-1000 lg:mb-9 md:mb-6 mb-1">
          It’s Easy to Get Started
        </h2>
        <p className="mt-6 md:w-[60%] mx-auto text-lg leading-6 text-gray-600 dark:text-gray-400 text-center  px-4">
          Our social media marketing plans are simple, flexible, and designed
          for busy professionals. Pick the package that fits your goals, or ask
          us about a custom solution!
        </p>

        <div className="text-left">
          <PricingPage />
        </div>
      </section>
    </>
  );
}
