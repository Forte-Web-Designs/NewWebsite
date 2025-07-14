"use client";

import { useState } from "react";
import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { PricingPage } from "@/components/pricing";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How Does Forte PPC™ Pricing Work? 💰",
    answer:
      "Forte PPC™ requires an active Forte Foundation™ ($200/mo) or Forte Pro™ ($350/mo) website. Then add Forte PPC Starter™ (+$400/mo) or Forte PPC Growth™ (+$650/mo) plus your ad spend budget. For example: Foundation + PPC Starter = $600/mo + ad spend.",
  },
  {
    question: "What's Included in Ad Management? 🎯",
    answer:
      "Both plans include full campaign setup, keyword research, ad copy creation, landing page optimization, and detailed reporting. Forte PPC Growth™ adds multi-platform campaigns, advanced tracking, and detailed ROI analysis.",
  },
  {
    question: "How Much Should I Budget for Ad Spend? 💵",
    answer:
      "We typically recommend starting with $1,000-3,000/month in ad spend, depending on your market and goals. Our management fee is separate from your ad budget - we'll help you determine the right spend level for maximum ROI.",
  },
];

export default function GooglePPCAdsClientComponent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="container max-w-7xl mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal font-roboto flex items-center gap-2 text-primary-1000 mb-4 sm:mb-6">
        <Icon name="star" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        Hey there! 👋
      </span>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight max-w-4xl dark:text-secondary-1000 text-center mb-4 sm:mb-6">
        Google Ads That Actually Get You Customers
      </h1>
      <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 max-w-3xl text-center leading-relaxed mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        Want to get in front of customers who are ready to buy? Our Google Ads
        get you found fast, so you can focus on serving great customers instead
        of waiting for them to find you.
      </p>

      <div className="flex flex-col items-center w-full">
        <div className="w-full flex flex-col mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter dark:text-secondary-1000 leading-tight mb-4 sm:mb-6">
            Why Our Google Ads Actually Work
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 max-w-3xl mx-auto leading-relaxed">
            We don't just throw money at Google and hope for the best. We create
            smart, targeted campaigns that turn clicks into customers while
            keeping your budget happy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 dark:bg-primary-1150 bg-secondary-1350 rounded-[20px] w-full mb-12 sm:mb-16 md:mb-20">
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-14 p-6 sm:p-8 md:p-10 lg:p-[60px] order-2 lg:order-1">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black mb-2 sm:mb-3">
                1. We Get to Know Your Business
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed">
                First things first - we learn about your goals, your customers,
                and what success looks like for you. Then we build a strategy that
                actually fits your budget.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black mb-2 sm:mb-3">
                2. Smart Targeting That Works
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed">
                We find the keywords your customers are actually using and target
                the right people at the right time. No wasted clicks on people who
                aren't ready to buy.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black mb-2 sm:mb-3">
                3. Ads That Actually Convert
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-primary-1400 dark:text-primary-1050 leading-relaxed">
                We write clear, compelling ads that speak to your customers'
                needs and get them to take action. No fluff, just results.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black mb-2 sm:mb-3">
                4. Constant Optimization
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-primary-1400 dark:text-primary-1050 leading-relaxed">
                We watch your campaigns like a hawk, testing and tweaking to make
                sure every dollar works harder. You'll see exactly what's working
                and what's not.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-[60px] order-1 lg:order-2">
            <OptimizedImage
              src="/images/services/ads/hero.jpg"
              alt="Google Ads Management"
              className="w-full h-auto rounded-lg"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20 w-full">
        <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] p-6 sm:p-8 md:p-10 lg:p-16 rounded-2xl flex flex-col justify-center items-center text-center gap-4 sm:gap-6">
          <div
            className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] flex justify-center items-center
            "
          >
            <div className="p-2">
              <Icon name="target" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[34px] lg:h-9" />
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 mb-2 sm:mb-3">
              Right Audience, Right Time
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-primary-1050 text-primary-1400">
              We target people actively searching for what you offer, when
              they're ready to buy. No wasted ad spend on tire-kickers.
            </p>
          </div>
        </div>
        <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] p-6 sm:p-8 md:p-10 lg:p-16 rounded-2xl flex flex-col justify-center items-center text-center gap-4 sm:gap-6">
          <div
            className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] flex justify-center items-center
            "
          >
            <div className="p-2">
              <Icon name="dollar" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[34px] lg:h-9" />
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 mb-2 sm:mb-3">
              ROI That Makes Sense
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-primary-1050 text-primary-1400">
              Every campaign is built to turn ad spend into actual revenue. We
              track what matters and optimize for real business results.
            </p>
          </div>
        </div>
        <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] p-6 sm:p-8 md:p-10 lg:p-16 rounded-2xl flex flex-col justify-center items-center text-center gap-4 sm:gap-6">
          <div
            className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] flex justify-center items-center
            "
          >
            <div className="p-2">
              <Icon name="calendar" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-[34px] lg:h-9" />
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 mb-2 sm:mb-3">
              Always Getting Better
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-primary-1050 text-primary-1400">
              We're constantly testing, learning, and improving your campaigns.
              What worked last month might not work next month - we stay on top
              of it all.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <LightButton href="/contact">
          Let's Talk About Your Goals
        </LightButton>
      </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32">
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
      </section>

      {/* PPC Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Drive More Traffic?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Add Forte PPC™ to your existing Forte Foundation™ or Pro™ website. Plans start at just +$400/month plus your ad spend budget.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                💡 <strong>Small Business Tip:</strong> Start with $1,000/month ad budget + $400 management = $1,400/month total investment
              </p>
            </div>
          </div>
          <PricingPage serviceType="ppc" />
        </div>
      </section>
    </section>
  );
}
