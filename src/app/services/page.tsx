import { Metadata } from 'next';
import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web development and digital services offered by Forte.',
};

const cardsData = [
  {
    title: "Websites That Actually Make You Money",
    desc: "Forget pretty websites that don't convert. We hand-code lightning-fast sites that turn visitors into customers. No templates, no page builders, just sites that work.",
    linkText: "Get My Converting Website",
    href: "/services/webDesign",
    caseStudy: {
      client: "Mike's HVAC",
      result: "2x more service calls in 60 days",
      icon: "🔧"
    }
  },
  {
    title: "Your Website's Personal Bodyguard",
    desc: "While you sleep, we're monitoring your site 24/7. Unlimited edits, instant fixes, and continuous improvements. Think of us as your website's insurance policy.",
    linkText: "Protect My Investment Now",
    href: "/solutions/care",
    caseStudy: {
      client: "Bella's Boutique",
      result: "Zero downtime for 18 months",
      icon: "👗"
    }
  },
  {
    title: "Get Found by Customers Who Want to Buy",
    desc: "Stop being invisible on Google. Our SEO gets you found by people who are actively searching for what you sell. More traffic = more customers = more money.",
    linkText: "Dominate Google Now",
    href: "/services/seo",
    caseStudy: {
      client: "Local Law Firm",
      result: "Ranking #2 for main keywords",
      icon: "⚖️"
    }
  },
  {
    title: "Google Ads That Actually Work",
    desc: "Tired of burning money on ads that don't convert? We create campaigns that bring you qualified leads who are ready to buy, not just tire-kickers.",
    linkText: "Stop Wasting Ad Money",
    href: "/services/ads",
    caseStudy: {
      client: "Local Restaurant",
      result: "50% lower cost per customer",
      icon: "🍕"
    }
  },
  {
    title: "Find Out What's Killing Your Conversions",
    desc: "Your website might look good, but is it making you money? Our free audit reveals exactly what's costing you customers (and how to fix it).",
    linkText: "Get My Free Audit Now",
    href: "/solutions/seotool",
    caseStudy: {
      client: "Healthcare Clinic",
      result: "Found 12 critical issues",
      icon: "🏥"
    }
  },
  {
    title: "Social Media That Actually Sells",
    desc: "Stop posting into the void. We create social media content that builds real relationships and drives actual sales, not just vanity metrics.",
    linkText: "Turn Likes Into Sales",
    href: "/services/socialMedia",
    caseStudy: {
      client: "Real Estate Agent",
      result: "3 new clients from social",
      icon: "🏠"
    }
  },
];

export default function ServicePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">Solutions That Drive Growth</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
                Stop Throwing Money at Marketing That Doesn't Work
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                Tired of "marketing experts" who disappear with your money? We're different. Every service we offer is designed to bring you real customers and measurable results. No fluff, no false promises, just growth.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {cardsData.map((card, index) => (
                <div 
                  key={index} 
                  className="group p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414] hover:shadow-md transition-all duration-300 hover:border-primary-700 dark:hover:border-blue-400"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
                    {card.desc}
                  </p>
                  
                  {/* Mini Case Study */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4 border-l-4 border-green-500">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{card.caseStudy.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {card.caseStudy.client}:
                      </span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">
                        {card.caseStudy.result}
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={card.href} 
                    className="inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-primary-700 dark:text-blue-200 hover:underline font-medium group-hover:text-primary-800 dark:group-hover:text-blue-100 transition-colors duration-200"
                  >
                    {card.linkText}
                    <Icon
                      name="rightarrow"
                      alt="right arrow icon"
                      className="w-2 h-3 sm:w-[7px] sm:h-[12px] transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
