import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom Website Design & Development | Forte Web Designs",
  description:
    "Hand-coded websites that outperform templates. Fast, secure, SEO-optimized custom web design for small businesses. No builders, no templates—just results.",
};

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#F4F4F4] dark:bg-[#101010] px-4 py-2 rounded-full mb-6">
            <Icon name="star" className="h-4 w-4 sm:h-6 sm:w-6" />
            <span className="text-[#8D9DFF] text-sm font-normal sm:text-lg">
              Results by Design
            </span>
          </div>
          
          <h1 className="text-[36px] md:text-[56px] lg:text-[62px] font-medium font-roboto leading-[40px] md:leading-[56px] lg:leading-[62px] dark:text-white md:text-center text-start mb-6 max-w-5xl">
            Stop Settling for Cookie-Cutter Templates
          </h1>
          
          <div className="max-w-4xl mx-auto bg-[#F4F4F4] dark:bg-[#101010] p-6 sm:p-8 rounded-xl mb-8">
            <p className="text-[16px] md:text-[18px] font-normal font-inter dark:text-[#B4B4B4] text-[#626262] leading-[22px] md:leading-[26px] md:text-center text-start">
              While your competitors struggle with slow, template-based websites, you could be dominating search results with a 
              lightning-fast, hand-coded site that converts visitors into customers. Here's why custom beats templates—every single time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <LightButton href="/contact">Get My Custom Quote</LightButton>
            <Link
              className="inline-flex items-center text-[#203FFC] dark:text-[#8D9DFF] border-b border-[#203FFC] dark:border-[#8D9DFF] hover:border-[#8D9DFF] transition-colors text-center justify-center px-4 py-2"
              href="/solutions/seotool"
            >
              See How My Current Site Ranks (FREE)
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="py-16 bg-[#F8F9FA] dark:bg-[#0A0A0A]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-medium font-roboto dark:text-white mb-4">
              The Numbers Don't Lie
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#626262] dark:text-[#B4B4B4] max-w-2xl mx-auto">
              While template sites struggle to keep up, our custom-coded websites deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
              <h3 className="text-[48px] lg:text-[56px] font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-4 leading-tight">
                98–100
              </h3>
              <p className="text-[16px] md:text-[18px] font-semibold dark:text-white text-[#000000] mb-2">
                Google PageSpeed Score
              </p>
              <p className="text-[14px] text-[#626262] dark:text-[#B4B4B4]">
                vs. 30-60 for most templates
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
              <h3 className="text-[48px] lg:text-[56px] font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-4 leading-tight">
                2x
              </h3>
              <p className="text-[16px] md:text-[18px] font-semibold dark:text-white text-[#000000] mb-2">
                Faster Load Times
              </p>
              <p className="text-[14px] text-[#626262] dark:text-[#B4B4B4]">
                Under 2 seconds vs. 4-8 seconds
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
              <h3 className="text-[48px] lg:text-[56px] font-bold font-roboto bg-gradient-to-r from-[#203FFC] to-[#8D9DFF] bg-clip-text text-transparent mb-4 leading-tight">
                Zero
              </h3>
              <p className="text-[16px] md:text-[18px] font-semibold dark:text-white text-[#000000] mb-2">
                Security Vulnerabilities
              </p>
              <p className="text-[14px] text-[#626262] dark:text-[#B4B4B4]">
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
              <p className="text-[16px] md:text-[18px] font-inter dark:text-[#B4B4B4] text-[#626262]">
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
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Slow loading kills conversions</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">3-8 second load times drive visitors away</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Security nightmares</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Constant plugin updates and vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Poor SEO performance</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Buried in search results behind faster sites</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Looks like everyone else</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Same templates = zero competitive advantage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#FF4444] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Ongoing headaches</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Constant maintenance, updates, and fixes</p>
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
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Lightning-fast performance</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Under 2 seconds = higher conversions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Bulletproof security</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">No plugins = no vulnerabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">SEO dominance</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Built for Google from day one</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Unique brand presence</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Stand out from your competition</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-[#4CAF50] mr-4 mt-1 text-xl">•</span>
                  <div>
                    <span className="text-[#626262] dark:text-[#B4B4B4] font-medium">Set it and forget it</span>
                    <p className="text-[#888] dark:text-[#999] text-sm mt-1">Zero maintenance with Forte Care™</p>
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
              <p className="text-[#626262] dark:text-[#B4B4B4]">
                Fast sites get better Quality Scores, meaning you pay less per click and get more leads from the same budget.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center">
              <div className="w-16 h-16 bg-[#203FFC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="search" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold dark:text-white mb-4">Higher Rankings</h3>
              <p className="text-[#626262] dark:text-[#B4B4B4]">
                Google loves fast, well-coded sites. Our clients regularly outrank template-based competitors.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626] text-center">
              <div className="w-16 h-16 bg-[#203FFC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="clean" className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-[24px] font-semibold dark:text-white mb-4">More Conversions</h3>
              <p className="text-[#626262] dark:text-[#B4B4B4]">
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
              Common Questions About Custom Websites
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626]">
              <h3 className="text-[22px] font-semibold dark:text-white mb-4">
                "Isn't custom more expensive than templates?"
              </h3>
              <p className="text-[#626262] dark:text-[#B4B4B4] leading-relaxed">
                Think of it as an investment, not a cost. Our custom sites typically pay for themselves within 3-6 months through 
                higher conversions, better SEO rankings, and lower advertising costs. Plus, you'll save thousands on ongoing maintenance.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626]">
              <h3 className="text-[22px] font-semibold dark:text-white mb-4">
                "How long does it take to build?"
              </h3>
              <p className="text-[#626262] dark:text-[#B4B4B4] leading-relaxed">
                Most projects take 4-6 weeks from start to finish. While templates might seem faster to set up, 
                they take months or years to customize properly—and often break in the process.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626]">
              <h3 className="text-[22px] font-semibold dark:text-white mb-4">
                "What if I need changes later?"
              </h3>
              <p className="text-[#626262] dark:text-[#B4B4B4] leading-relaxed">
                That's what our Forte Care™ plan is for! Unlimited edits, security monitoring, and performance optimization. 
                Unlike template sites that break when you modify them, our custom code adapts to your changing needs.
              </p>
            </div>

            <div className="bg-white dark:bg-[#101010] p-6 sm:p-8 rounded-xl border border-[#E5E5E5] dark:border-[#262626]">
              <h3 className="text-[22px] font-semibold dark:text-white mb-4">
                "Can you really guarantee better performance?"
              </h3>
              <p className="text-[#626262] dark:text-[#B4B4B4] leading-relaxed">
                Absolutely. Our custom sites routinely score 98-100 on Google PageSpeed, while template sites typically score 30-60. 
                If we don't beat your current site's performance by at least 50%, we'll refund your money.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
