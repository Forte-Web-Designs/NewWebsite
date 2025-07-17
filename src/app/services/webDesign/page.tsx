import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { PricingPage } from "@/components/pricing";
import { Metadata } from "next";
import Link from "next/link";
import { SectionBackgroundAnimation } from "@/components/animations/BackgroundAnimation";

export const metadata: Metadata = {
  title: "Custom Website Design & Development | Forte Web Designs",
  description:
    "Hand-coded websites that outperform templates. Fast, secure, SEO-optimized custom web design for small businesses. No builders, no templates—just results.",
};

export default function WebsiteDesignPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-1 sm:gap-2 bg-[#F4F4F4] dark:bg-[#101010] px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
              <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
              <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-lg font-normal">
                Results by Design
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight dark:text-white mb-4 sm:mb-6 max-w-5xl mx-auto">
              Websites That Work Harder
            </h1>
            
            <div className="max-w-4xl mx-auto bg-[#F4F4F4] dark:bg-[#101010] p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed">
                While your competitors struggle with slow, template-based websites that leak customers, you could be dominating with a 
                lightning-fast, hand-coded powerhouse that works around the clock to convert visitors into paying customers.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
              <LightButton href="/contact">Get My Custom Quote</LightButton>
              <Link
                className="inline-flex items-center text-[#203FFC] dark:text-[#8D9DFF] border-b border-[#203FFC] dark:border-[#8D9DFF] hover:border-[#8D9DFF] transition-colors text-center justify-center px-4 py-2 text-sm sm:text-base"
                href="/solutions/seotool"
              >
                See How My Current Site Ranks (FREE)
              </Link>
            </div>
          </div>
        </section>

        {/* Performance Stats Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-[#F8F9FA] dark:bg-[#0A0A0A]">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-roboto dark:text-white mb-3 sm:mb-4">
                The Numbers Don't Lie
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                While template sites struggle to keep up, our custom-coded websites deliver measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-lg sm:rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm text-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
                  &lt;2s
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-semibold dark:text-white text-[#000000] mb-2">
                  Lightning-Fast Load Times
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  Visitors stay, engage & convert faster
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-lg sm:rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm text-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
                  2x
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-semibold dark:text-white text-[#000000] mb-2">
                  Faster Load Times
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  Under 2 seconds vs. 4-8 seconds
                </p>
              </div>
              
              <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-lg sm:rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm text-center sm:col-span-2 lg:col-span-1">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
                  Zero
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-semibold dark:text-white text-[#000000] mb-2">
                  Security Vulnerabilities
                </p>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  No plugins = no risk
                </p>
              </div>
            </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-medium font-roboto dark:text-white mb-6">
              Your Template Website Is Costing You Money
            </h2>
            <div className="max-w-3xl mx-auto bg-[#F4F4F4] dark:bg-[#101010] p-6 sm:p-8 rounded-xl">
              <p className="text-[16px] md:text-[18px] font-inter dark:text-gray-300 text-gray-700">
                Every second your site takes to load costs you customers. Every security update you miss puts your business at risk. 
                Every template limitation holds back your growth. It's time to break free.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem Side */}
            <div className="bg-gradient-to-br from-[#FFF1F1] to-[#FFE8E8] dark:from-[#2D1B1B] dark:to-[#331C1C] p-8 rounded-xl border-2 border-[#FFB3B3] dark:border-[#8B3333]">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#FF4444] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">✕</span>
                </div>
                <h3 className="text-[28px] font-bold text-[#D32F2F] dark:text-[#FF6B6B]">Template Websites</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Slow loading kills conversions</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">3-8 second load times drive visitors away</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Security nightmares</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Constant plugin updates and vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Poor SEO performance</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Buried in search results behind faster sites</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Looks like everyone else</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Same templates = zero competitive advantage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Ongoing headaches</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Constant maintenance, updates, and fixes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="bg-gradient-to-br from-[#F0F8FF] to-[#E8F4FF] dark:from-[#1B2D3D] dark:to-[#1C2E40] p-8 rounded-xl border-2 border-[#4CAF50] dark:border-[#66BB6A]">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <h3 className="text-[28px] font-bold text-[#2E7D32] dark:text-[#81C784]">Forte Custom Code</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Lightning-fast performance</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Under 2 seconds = higher conversions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Bulletproof security</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">No plugins = no vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">SEO dominance</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Built for Google from day one</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Unique brand presence</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Stand out from your competition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Set it and forget it</span>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Zero maintenance with Forte Care™</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Benefits Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA] dark:bg-[#0A0A0A]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-medium font-roboto dark:text-white mb-6">
              Why Smart Business Owners Choose Custom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center">
              <div className="w-16 h-16 bg-[#203FFC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="flash" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold dark:text-white mb-4">Lower Ad Costs</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Fast sites get better Quality Scores, meaning you pay less per click and get more leads from the same budget.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center">
              <div className="w-16 h-16 bg-[#203FFC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="search" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold dark:text-white mb-4">Higher Rankings</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Google loves fast, well-coded sites. Our clients regularly outrank template-based competitors.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center">
              <div className="w-16 h-16 bg-[#203FFC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="clean" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold dark:text-white mb-4">More Conversions</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Every second faster = 7% higher conversion rate. That adds up to serious revenue growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] p-[2px] rounded-2xl">
            <BackgroundImage
              src="/images/services/web-service-back.png"
              alt="Custom web design background"
              className="h-[500px] md:h-[640px] flex flex-col justify-center items-center text-center rounded-2xl px-6"
            >
              <h2 className="text-[36px] md:text-[56px] lg:text-[62px] font-medium font-roboto text-white leading-[40px] md:leading-[56px] lg:leading-[62px] mb-6 max-w-4xl">
                Ready to Dominate Your Competition?
              </h2>
              
              <div className="max-w-3xl mx-auto bg-black/20 backdrop-blur-sm p-6 rounded-xl mb-8">
                <p className="text-[18px] md:text-[20px] font-inter text-white leading-[24px] md:leading-[28px]">
                  Stop losing customers to faster websites. Get a custom-coded site that converts visitors into sales 
                  and leaves your template-using competitors in the dust.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <LightButton href="/contact">Get My Custom Quote Now</LightButton>
                <DarkButton href="/solutions/seotool">Free Site Speed Analysis</DarkButton>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA] dark:bg-[#0A0A0A]">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[42px] font-medium font-roboto dark:text-white mb-6">
              Quick Questions...
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-[22px] font-semibold dark:text-white">
                  How Does Forte Website™ Pricing Work? 💰
                </h3>
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-2 transition-transform duration-300 group-open:rotate-[270deg] rotate-90 flex-shrink-0"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </summary>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Choose Forte Foundation™ ($200/month) for a 5-page website or Forte Pro™ ($350/month) for 10 pages. Both include Forte Care™ support, hosting, and our performance guarantee. Add SEO, PPC, or Social Media services when you're ready to grow.
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-[22px] font-semibold dark:text-white">
                  How Long Does It Take to Build? ⏱️
                </h3>
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-2 transition-transform duration-300 group-open:rotate-[270deg] rotate-90 flex-shrink-0"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </summary>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Most Forte™ websites are completed in 4-6 weeks from start to finish. Unlike template sites that take months to customize properly (and often break), our hand-coded approach means it's done right the first time.
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-[22px] font-semibold dark:text-white">
                  What Makes This Better Than Templates? 🚀
                </h3>
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-2 transition-transform duration-300 group-open:rotate-[270deg] rotate-90 flex-shrink-0"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </summary>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Template sites load slowly and lose customers. Forte™ websites load in under 2 seconds, so visitors stay and convert. Templates have security risks from plugins. Forte™ sites are rock-solid secure with zero vulnerabilities. Templates get slower over time. Forte™ sites stay lightning-fast forever.
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-[22px] font-semibold dark:text-white">
                  What's Included With Forte Care™? 🛡️
                </h3>
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-2 transition-transform duration-300 group-open:rotate-[270deg] rotate-90 flex-shrink-0"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </summary>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Unlimited content updates, 24/7 security monitoring, performance optimization, backup management, and priority support. Unlike template sites that break when you modify them, Forte™ sites adapt to your changing needs seamlessly.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Mini Case Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Case Study</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                From Template Struggle to Custom Success
              </h2>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">RH</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Rivera Healthcare</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Medical Practice</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-red-600 dark:text-red-400 font-semibold">The Problem:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        WordPress template site took 8+ seconds to load. Patients were bouncing before booking appointments.
                      </p>
                    </div>
                    
                    <div>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">The Solution:</span>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Custom-coded Forte™ website with optimized appointment booking and patient forms.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">1.2s</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">New Load Time</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">(Previously 8.3s)</div>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">247%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">More Online Bookings</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">First 4 months</div>
                  </div>
                  
                  <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">$0</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Security Issues</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">vs. monthly WordPress fixes</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "We went from losing patients due to our slow website to booking 2-3 new appointments daily through our site. The difference is night and day." 
                  <span className="font-semibold">- Dr. Maria Rivera, Rivera Healthcare</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Ditch Your Template for Good?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
              Join businesses who made the switch to custom-coded websites. Choose your Forte Foundation™ and start converting more visitors into customers.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-green-700 dark:text-green-300">
                🚀 <strong>Template Recovery:</strong> We'll migrate your existing content for free - no starting from scratch!
              </p>
            </div>
          </div>
          <PricingPage serviceType="website" />
        </div>
      </section>
      </div>
    </div>
  );
}
