import React from "react";
import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { PricingPage } from "@/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads That Actually Work",
  description:
    "Professional Google Ads management that gets results. We help small businesses get found and grow with targeted PPC campaigns.",
};

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How Does Forte PPC™ Pricing Work? 💰",
    answer:
      "Forte PPC™ requires an active Forte Foundation™ ($200/month) or Forte Pro™ ($350/month) website. Then add Forte PPC Starter™ (+$400/month) or Forte PPC Growth™ (+$650/month) plus your ad spend budget. For example: Foundation + PPC Starter = $600/month + ad spend.",
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

export default function GooglePPCAdsPage() {
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

      {/* Problem-Solution Structure */}
      <div className="py-8 sm:py-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Problem Statement */}
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">
                Struggling with Google Ads?
              </h3>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  Spending money on ads but getting few quality leads
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  Clicks that don't convert into actual customers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  Competing against big companies with huge ad budgets
                </li>
              </ul>
            </div>
          </div>

          {/* Solution & Benefits */}
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                Forte PPC™ Solution
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Smart targeting to reach customers ready to buy
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Landing pages optimized for conversions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Budget optimization to maximize ROI
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-800/30 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Expected Results: 3-5x return on ad spend within 60 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 rounded-full animate-pulse backdrop-blur-sm" />
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-pink-600/30 rounded-full animate-pulse animation-delay-75 backdrop-blur-sm" />
              <div className="absolute inset-8 bg-gradient-to-br from-blue-600/40 via-purple-700/40 to-pink-700/40 rounded-full animate-pulse animation-delay-150 backdrop-blur-sm" />
              <div className="text-8xl sm:text-9xl animate-bounce">📈</div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/60 rounded-full animate-bounce animation-delay-300" />
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-500/60 rounded-full animate-bounce animation-delay-500" />
              <div className="absolute -bottom-6 -left-2 w-10 h-10 bg-pink-500/60 rounded-full animate-bounce animation-delay-700" />
              <div className="absolute -bottom-4 -right-4 w-7 h-7 bg-green-500/60 rounded-full animate-bounce animation-delay-900" />
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-yellow-500/60 rounded-full animate-bounce animation-delay-1100" />
              <div className="absolute bottom-1/3 -left-6 w-4 h-4 bg-indigo-500/60 rounded-full animate-bounce animation-delay-1300" />
            </div>
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

      <div className="flex justify-center w-full mb-16 sm:mb-20 md:mb-24">
        <LightButton href="/contact">
          Get My Free Website Analysis
        </LightButton>
      </div>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 w-full">
        <div className="container mx-auto flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-16 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter text-black dark:text-secondary-1000 text-center mb-4 sm:mb-6 md:mb-9">
            Quick Questions...
          </h2>

          {faqData?.map((faq, index) => (
            <details key={index} className="dark:bg-primary-1150 bg-secondary-1350 p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-4xl group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black leading-tight pr-4">
                  {faq.question}
                </h2>
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-2 sm:h-[14px] sm:w-2 transition-transform duration-300 group-open:rotate-[270deg] rotate-90 flex-shrink-0"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </summary>
              <div className="mt-3 sm:mt-4">
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* PPC Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 w-full">
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
      </div>
    </section>
  );
}
