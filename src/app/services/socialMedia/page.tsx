"use client";

import { useEffect, useState } from "react";
import LightButton from "@/components/LightButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { PricingPage } from "@/components/pricing";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What Platforms Do You Manage? 📱",
    answer:
      "We focus on the big three that actually drive business: Facebook, Instagram, and Google Business Profile. These are where your local customers spend their time and where consistent posting makes the biggest impact on your bottom line.",
  },
  {
    question: "How Does Forte Social™ Pricing Work? 💰",
    answer:
      "Forte Social™ works as an add-on to your Forte™ website. Choose Forte Social Essential™ (+$200/month) for consistent posting and engagement, or Forte Social Growth™ (+$350/month) for advanced content creation and community management. Both require an active Forte Foundation™ or Pro™ website. Save with ecosystem packages - like Forte Brand Boost™ which includes website + SEO + social for just $700/month (saving $200/month).",
  },
  {
    question: "How Much Content Do You Create? 📅",
    answer:
      "Forte Social Essential™ includes 12 posts per month (3 per week) across 2 platforms, while Forte Social Growth™ includes 20 posts per month (5 per week) across 3 platforms, plus Stories and Reels creation. All content is custom-designed to match your brand and engage your audience.",
  },
  {
    question: "Do You Handle Customer Interactions? 💬",
    answer:
      "Absolutely! Both plans include professional monitoring and response to comments, messages, and reviews within business hours. Forte Social Growth™ also includes proactive community management to keep your audience engaged and build stronger customer relationships.",
  },
];

export default function SocialMediaPage() {
  const [isMobile, setIsMobile] = useState(false);

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
        <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal font-roboto flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
          <Icon name="star" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          Hey there! 👋
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight max-w-4xl text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
          Grow Followers, Build Trust, Stay Top-of-Mind
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
          Stop letting your competitors dominate social media while you're buried in your business. We keep you visible, engaging, and top-of-mind with customers who are ready to buy.
        </p>
      </section>

      {/* Problem-Solution Section */}
      <section className="w-full bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 text-center">
            Social Media That Actually Drives Business
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Problem Statement */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-red-800 dark:text-red-300 mb-4 flex items-center gap-2">
                <span>❌</span> The Problem You're Facing
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-red-700 dark:text-red-200">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>You know you need to be on social media, but posting consistently feels impossible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Your competitors are more active online and getting the customers you should have</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>You've tried posting yourself, but engagement is low and it takes forever</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>Managing multiple platforms while running your business is overwhelming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  <span>You're missing out on local customers who discover businesses through social media</span>
                </li>
              </ul>
            </div>
            
            {/* Solution & Benefits */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-300 mb-4 flex items-center gap-2">
                <span>✅</span> The Forte Social™ Solution
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-green-700 dark:text-green-200 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Professional content calendar with 3-5 posts per week across your key platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Custom-designed posts that reflect your brand and engage your local audience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>We handle all comments, messages, and customer interactions professionally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Focus on Facebook, Instagram, and Google Business Profile where customers actually are</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Monthly growth reports showing engagement and reach</span>
                </li>
              </ul>
              
              <div className="bg-green-100 dark:bg-green-800/30 rounded-lg p-4">
                <p className="text-sm sm:text-base font-medium text-green-800 dark:text-green-200">
                  <span className="font-bold">Expected Results:</span> 3-5x more social engagement, consistent brand visibility, increased local awareness, and more website traffic from social platforms within the first 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 rounded-xl mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Real Social Media Success Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              How consistent social presence transformed a local business
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Client Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/40 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Luxe Beauty Salon</h3>
                    <p className="text-gray-700 dark:text-gray-300">Local beauty salon</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Sporadic posting, inconsistent branding, and barely any engagement. Their social media looked unprofessional and wasn't bringing in new clients. Owner was too busy running the salon to manage social.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Our Social Strategy
                    </h4>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• Created cohesive brand aesthetic across all platforms</li>
                      <li>• Developed content calendar showcasing services & results</li>
                      <li>• Engaged with local community and beauty influencers</li>
                      <li>• Used strategic hashtags and location targeting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                    The Results (6 Months)
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        425%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Follower Growth
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        850%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Engagement Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        35%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        New Clients from Social
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        15+
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Bookings per Month
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300">
                    "I finally have a professional social presence that brings in real clients. My booking calendar is fuller than it's ever been, and I can focus on what I love - making people beautiful."
                    <footer className="text-sm mt-2 not-italic">
                      — Maria Rodriguez, Luxe Beauty Salon
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white dark:bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">
            Here's the Thing About Social Media...
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 bg-gray-50 dark:bg-gray-800 rounded-[20px] w-full">
            <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-14 p-6 sm:p-8 md:p-10 lg:p-[60px] order-2 lg:order-1 text-left">
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                  It's About Building Relationships
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed">
                  Your customers scroll social media every day. When they see your business sharing helpful tips, community events, or behind-the-scenes moments, you become the obvious choice when they need your services.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                  Consistency Is Everything
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed">
                  Posting once in a while doesn't cut it. Your audience needs to see you regularly to remember you exist. We keep you visible with content that actually matters to your local community.
                </p>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter text-gray-900 dark:text-gray-100 mb-2 sm:mb-3">
                  It Supports Everything Else
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed">
                  Social media makes your website, Google ads, and word-of-mouth marketing work better. When people hear about you, they check you out online—and active social profiles build instant credibility.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-[60px] order-1 lg:order-2">
              <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                  {/* Social Media Growth Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                  <div className="absolute inset-6 bg-gradient-to-l from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-full backdrop-blur-sm" style={{
                    animation: 'spin 15s linear infinite'
                  }}></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full backdrop-blur-sm" style={{
                    animation: 'bounce 3s ease-in-out infinite'
                  }}></div>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4" style={{
                      animation: 'bounce 2s ease-in-out infinite'
                    }}>📱</div>
                    <div className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Social Engagement
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute top-8 left-8 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute top-16 right-12 w-2 h-2 bg-purple-400 rounded-full" style={{
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                    animationDelay: '0.5s'
                  }}></div>
                  <div className="absolute bottom-12 left-16 w-4 h-4 bg-pink-400 rounded-full" style={{
                    animation: 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                    animationDelay: '1s'
                  }}></div>
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{
                    animationDelay: '1.5s'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Content That Connects</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Smart Planning</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700 w-full">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  Platform Management
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-8 sm:p-10 md:p-12 lg:p-14 rounded-[20px] text-center dark:shadow-[0_0_50px_rgba(85,135,255,0.4)] border dark:border-gray-700 w-full">
                {/* Social Media Growth Animation */}
                <div className="flex justify-center items-center w-48 sm:w-56 md:w-64 lg:w-[270px] h-40 sm:h-48 md:h-56 lg:h-[250px] mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full backdrop-blur-sm animate-pulse"></div>
                  <div className="absolute inset-6 bg-gradient-to-l from-cyan-500/30 via-blue-500/30 to-indigo-500/30 rounded-full backdrop-blur-sm" style={{
                    animation: 'spin 15s linear infinite'
                  }}></div>
                  <div className="absolute inset-12 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full backdrop-blur-sm" style={{
                    animation: 'bounce 3s ease-in-out infinite'
                  }}></div>
                  
                  {/* Center content */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4" style={{
                      animation: 'bounce 2s ease-in-out infinite'
                    }}>📱</div>
                    <div className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">Social Growth</div>
                  </div>

                  {/* Floating social icons */}
                  <div className="absolute top-8 left-8 text-lg animate-ping">💬</div>
                  <div className="absolute top-16 right-12 text-sm" style={{
                    animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                    animationDelay: '0.5s'
                  }}>❤️</div>
                  <div className="absolute bottom-12 left-16 text-lg" style={{
                    animation: 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                    animationDelay: '1s'
                  }}>📍</div>
                  <div className="absolute bottom-8 right-8 text-sm animate-ping" style={{
                    animationDelay: '1.5s'
                  }}>🔔</div>
                </div>
              </div>
            </div>
            <div
              className="inline-block p-[1px] rounded-[20px]"
              style={{
                background: `linear-gradient(${isMobile ? gradientConfig.centerBottom.mobile : gradientConfig.centerBottom.desktop}, #203FFC 30%, transparent 100%, black 100%)`,
              }}
            >
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700 w-full">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  Growth Reports
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">
                  We Handle the Conversations
                </h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 border-gray-300 shadow-[inset_0_0_12px_0_#DFDFDF] text-gray-900 dark:text-gray-100 p-6 sm:p-8 md:p-9 rounded-[20px] text-center dark:shadow-md border dark:border-gray-700">
                <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium mb-3 sm:mb-4">Local Focus</h5>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Everything we do is tailored to your local market and ideal customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8 xl:px-16 items-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter text-gray-900 dark:text-gray-100 text-center mb-4 sm:mb-6 md:mb-9">
            Quick Questions...
          </h2>

          {faqData?.map((faq, index) => (
            <details
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-2xl transition-all duration-300 w-full max-w-4xl group"
              open={index === 0}
            >
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] font-medium font-inter text-gray-900 dark:text-gray-100 leading-tight pr-4">
                  {faq.question}
                </h2>
                <button className="transform transition-transform duration-300 flex-shrink-0 group-open:rotate-[270deg] rotate-90">
                  <svg
                    viewBox="0 0 7 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-2 sm:h-[14px] sm:w-2 transition-transform duration-300"
                  >
                    <path
                      d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                  0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                  7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                      className="fill-gray-900 dark:fill-gray-100"
                    />
                  </svg>
                </button>
              </summary>
              <div className="mt-3 sm:mt-4">
                <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
        <div className="flex justify-center mt-8 sm:mt-12 px-4">
          <LightButton href="/contact">Grow My Social Following</LightButton>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-16 sm:py-20 md:py-24 lg:py-32 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-medium font-inter text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">
          Ready to Build Your Social Media Presence?
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12">
          Add Forte Social™ to your existing Forte Foundation™ or Pro™ website. Plans start at just +$200/month and scale with your growth goals.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            💡 <strong>Small Business Tip:</strong> Most restaurants and service businesses love Foundation + Social Essential™ ($400/month total)
          </p>
        </div>

        <div className="text-left">
          <PricingPage serviceType="social" />
        </div>
      </section>
    </>
  );
}
