"use client";

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
    question: "How Does Forte SEO™ Pricing Work? 💰",
    answer:
      "Forte SEO™ works as an add-on to your Forte™ website. Choose Forte SEO Essential™ (+$300/month) for website optimization and on-page SEO, or Forte SEO Growth™ (+$500/month) which includes everything plus content creation, local SEO, and link building. Both require an active Forte Foundation™ or Pro™ website. Save even more with our ecosystem packages - like Forte Growth™ which includes website + SEO for just $500/month (saving $100/month).",
  },
  {
    question: "How Long Does It Take to See Results? 🤔",
    answer:
      "SEO is a marathon, not a sprint! Some improvements happen quickly (technical fixes), while others take 3-6 months to fully mature. Local businesses often see improvements in 6-12 weeks, while competitive markets may need 4-6 months. We track everything transparently so you can see progress at every step.",
  },
  {
    question: "What's Included in Essential vs Growth? 📈",
    answer:
      "Forte SEO Essential™ ($300/month) includes website optimization, on-page SEO, keyword research, and monthly reporting. Forte SEO Growth™ ($500/month) includes everything in Essential plus 4 SEO blog posts monthly, local SEO optimization, competitor analysis, and strategic link building campaigns.",
  },
  {
    question: "Do You Work with All Business Types? 🏢",
    answer:
      "Absolutely! We work with restaurants, contractors, professional services, retail stores, and more. Our Forte SEO™ strategies adapt to your industry - whether you need local search dominance or broader market reach. We understand what makes each business type successful online.",
  },
];

export default function SeoDesignPage() {
  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question.replace(/[^\w\s]/gi, ''), // Remove emojis for clean schema
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
          <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          Hi there! 👋
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6 max-w-4xl mx-auto">
          Get Found. Stay Booked.
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Stop being invisible on Google. Our SEO doesn't just improve rankings - it drives qualified customers to your door every single day, so you can stop chasing leads and focus on serving them.
        </p>
      </div>

      {/* Problem-Solution Structure */}
      <div className="py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Problem Statement */}
          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-3">
                The Problem You're Facing
              </h3>
              <ul className="space-y-2 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  Your website isn't showing up when customers search for your services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  Competitors are stealing your potential customers online
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">×</span>
                  You're missing out on qualified leads who are ready to buy
                </li>
              </ul>
            </div>
          </div>

          {/* Solution & Benefits */}
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                The Forte SEO™ Solution
              </h3>
              <ul className="space-y-2 text-green-700 dark:text-green-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Strategic keyword targeting for your local market
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Lightning-fast technical optimization that Google loves
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  Content strategy that converts visitors into customers
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-800/30 rounded-lg">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Expected Results: 30-50% increase in organic traffic within 90 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section - Mobile Optimized */}
      {/* SEO Upgrade Explanation */}
      <div className="py-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center justify-center md:w-1/3">
              <div className="text-center">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-lg font-bold mb-1">Beyond Built-in SEO</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">Taking your website to the next level</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Forte SEO™ goes deeper:</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                We research your market, target keywords, optimize your site monthly, create content, build authority, and track your growth—turning your foundation into a search engine magnet.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-md p-3">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  <strong>Already have a Forte™ website?</strong> Your site has the SEO foundations in place. Forte SEO™ builds on this foundation to help you climb search rankings month after month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl mx-4 sm:mx-6 lg:mx-8 mb-12">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold dark:text-white mb-4">
              Real SEO Success Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              See how we helped a local business dominate their market
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Client Info */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Alpine Physical Therapy</h3>
                    <p className="text-gray-700 dark:text-gray-300">Local healthcare practice</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                      The Challenge
                    </h4>
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Zero page-1 rankings for "physical therapy + [city]" searches. Competing clinics were capturing all the local search traffic, leaving Alpine invisible to potential patients.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      Our SEO Strategy
                    </h4>
                    <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                      <li>• Comprehensive local keyword research and optimization</li>
                      <li>• Created 12 location-specific service pages</li>
                      <li>• Built authority with healthcare-focused content marketing</li>
                      <li>• Optimized Google Business Profile and local citations</li>
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
                        287%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Organic Traffic Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        #1
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        "Physical Therapy [City]"
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        450%
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Qualified Lead Increase
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                        12
                      </div>
                      <div className="text-sm text-green-700 dark:text-green-300">
                        Page-1 Keywords
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300">
                    "Our phone started ringing within weeks. We went from struggling to fill our schedule to having a 2-week wait list. The ROI has been incredible."
                    <footer className="text-sm mt-2 not-italic">
                      — Dr. Sarah Chen, Alpine Physical Therapy
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
            Here's the thing - we don't just build beautiful websites. We make sure people can actually find them! Our Forte SEO™ service is designed specifically for small businesses who want real results without the confusing agency jargon.
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:py-48 md:py-36 sm:py-10 py-6 px-5">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000">
          Who We Love Working With
        </h2>
        <p className="text-[18px] font-normal font-inter dark:text-gray-300 text-gray-700 max-w-[794px] leading-[22px] sm:mt-8 mt-5">
          Whether you're a local service business, online store, or growing company, we've helped all kinds of businesses get found and grow their customer base:
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:mt-16 sm:mt-14 mt-6 lg:gap-[5.2rem] md:gap-10 gap-8 max-[768px]:w-[80%]">
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="location"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-gray-700 leading-[18px] md:w-auto w-[246px]">
              Local Businesses (Contractors, Dentists, Cafes—you name it)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="bag"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-gray-700 leading-[18px] md:w-auto w-[246px]">
              B2B services (consultants, agencies, software providers)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cap"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-gray-700 leading-[18px] md:w-auto w-[246px]">
              Education & training programs
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cursor"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-gray-700 leading-[18px] md:w-auto w-[246px]">
              Clinics, nonprofits, travel brands, and more
            </p>
          </div>
        </div>
      </div>

      {/* SEO Comparison Table */}
      <div className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 dark:text-white">Built‑In SEO vs. Forte SEO™ Package</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Every Forte™ website comes with SEO foundations built-in. Our Forte SEO™ package takes your online visibility to the next level.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white dark:bg-gray-800">
                  <th className="text-left p-4 border-b dark:border-gray-700">Feature</th>
                  <th className="p-4 border-b dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Built‑In SEO</span>
                      <span className="text-green-600 dark:text-green-400 text-sm">(Included)</span>
                    </div>
                  </th>
                  <th className="p-4 border-b dark:border-gray-700">
                    <div className="flex flex-col items-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">Forte SEO™ Package</span>
                      <span className="text-amber-600 dark:text-amber-400 text-sm">(Add-On)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Technical setup</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Yes</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Audits & fixes ongoing</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Metadata / alt tags</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Basic implementation</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Regular refinement</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Keyword research</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">❌ No</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Monthly & strategic</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Content & blog guidance</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">❌ No</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Yes (planned content schedule)</td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Link building</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">❌ No</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Outreach & authority building</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <td className="p-4 border-b dark:border-gray-700 font-medium">Traffic/rank tracking</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">❌ No</td>
                  <td className="p-4 border-b dark:border-gray-700 text-center">✅ Monthly analytics + reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <LightButton href="/contact">Boost My SEO Rankings</LightButton>
          </div>
        </div>
      </div>

      {/* What's Inside Our SEO Package? */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 bg-secondary-1350">
          <div className="flex flex-col md:gap-14 gap-6 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                1. Rock-Solid Technical Foundation
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-gray-700 dark:text-gray-300 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                Every site we build is lightning-fast and error-free by design. But we go deeper—fixing crawl issues, broken links, and adding the technical magic that makes Google trust your site.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                2. Content That Actually Gets Found
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-gray-700 dark:text-gray-300 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
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
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-gray-700 dark:text-gray-300  md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We optimize your Google Business Profile and local listings so you show up when people search "near me." Perfect for service businesses, local stores, and anyone who serves their community.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                4. Quality Link Building
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-gray-700 dark:text-gray-300 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
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
          <details 
            key={index}
            className="dark:bg-primary-1150 bg-secondary-1350 p-4 sm:p-8 rounded-2xl transition-all duration-300 w-full group max-w-4xl"
            open={index === 0}
          >
            <summary className="flex justify-between items-center cursor-pointer list-none">
              <h2 className="text-lg sm:text-[26px] font-medium font-inter dark:text-secondary-1050 text-black leading-tight pr-4">
                {faq.question}
              </h2>
              <button className="transform transition-transform duration-300 group-open:rotate-[270deg] rotate-90">
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:h-[14px] h-[11px] sm:w-2 w-[6px] transition-transform duration-300"
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                  0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                  7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </button>
            </summary>
            <div className="mt-3 sm:mt-4">
              <p className="text-sm sm:text-[18px] font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed sm:leading-[22px]">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}

        <div className="sm:mt-10 mt-3">
          <LightButton href="/contact">Get My Free Website Analysis</LightButton>
        </div>
      </div>

      {/* SEO Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Ranking?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
              Add Forte SEO™ to your existing Forte Foundation™ or Pro™ website. Choose the plan that matches your growth goals.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                💡 <strong>Small Business Tip:</strong> Most local businesses see great results starting with Foundation + SEO Essential™ ($500/month total)
              </p>
            </div>
            
            {/* Quick Success Story */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl mx-auto mb-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Local search was killing us - customers couldn't find us on Google. Forte's local SEO put us #1 for 'auto repair near me' and doubled our new customer calls."
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-gray-900 dark:text-white">Carlos Rivera</div>
                <div className="text-gray-700 dark:text-gray-300">Rivera Auto Repair • Foundation + SEO Essential</div>
              </div>
            </div>
          </div>
          <PricingPage serviceType="seo" />
        </div>
      </section>
    </section>
    </>
  );
}
