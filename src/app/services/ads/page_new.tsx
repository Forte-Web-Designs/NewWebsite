"use client";

import { useState } from "react";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How much should I spend on Google Ads?",
    answer: "We recommend $1,000/month to start. You can scale up once we optimize performance and prove ROI with your initial budget.",
  },
  {
    question: "Do I need a Forte website to use PPC?",
    answer: "Yes — landing pages matter. All campaigns are built on your Forte Foundation™ or Pro™ website design package. We need conversion-focused pages to maximize your ad spend.",
  },
  {
    question: "Can I cancel after a few months?",
    answer: "Plans require a 12-month minimum commitment, then go month-to-month. This gives us time to properly optimize and scale your campaigns.",
  },
  {
    question: "Will I see results quickly?",
    answer: "Most campaigns see strong lead flow in the first 30–60 days after optimization. Initial setup and testing typically takes 2-3 weeks.",
  },
];

export default function GooglePPCAdsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-700">
                <Icon name="star" className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Google Ads That Convert
                </span>
              </div>
            
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6 max-w-5xl mx-auto">
                Google Ads That <span className="text-blue-600 dark:text-blue-400">Actually Perform</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Tired of paying for clicks that don't convert? Our Google Ads are built to deliver ROI — not vanity metrics. We help you turn ad spend into paying customers, fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <LightButton href="/contact">Fix My Ads & Get More Leads</LightButton>
                <DarkButton href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600">
                  Book a Free Ad Review
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Common PPC Problems Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-900/10">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Struggling with Google Ads? You're Not Alone.
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-700">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💸</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">High Spend, Low-Quality Leads</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Burning through budget without getting qualified prospects</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clicks That Don't Convert</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Traffic that looks good on paper but never turns into customers</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competing with Giants</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Trying to outbid massive companies on tiny budgets</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte PPC™ Solution Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Smart Ads That Deliver Results
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  We build your campaigns from the ground up — using smart targeting, custom landing pages, and constant optimization to stretch every dollar.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">High-intent keyword targeting</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Reach buyers, not browsers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Landing pages built for conversions</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Turn clicks into customers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time optimization</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Reduce wasted spend daily</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weekly reporting & strategy</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Know exactly what's working</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 text-center">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold text-lg">
                    Most clients see 3–5x Return on Ad Spend (ROAS) within the first 60 days.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Case Study Spotlight */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Case Study Spotlight
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  How we transformed a struggling ad campaign into a lead generation machine
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Client Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Summit Roofing</h3>
                        <p className="text-gray-600 dark:text-gray-400">Local roofing contractor</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                          Challenge
                        </h4>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          $3,500/month ad budget, only 2–3 leads per month
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Fix
                        </h4>
                        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                          <li>• Rebuilt campaign targeting local, service-based keywords</li>
                          <li>• Created service-specific landing pages</li>
                          <li>• Added negative keywords to filter out bad traffic</li>
                          <li>• Installed call/conversion tracking</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6 text-center text-xl">
                        Results (3 Months):
                      </h4>
                      
                      <div className="grid grid-cols-1 gap-6 mb-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              📈 580%
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              more leads
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              💰 67%
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              lower cost per lead
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              🚀 4.2x
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              Return on Ad Spend
                            </div>
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300 text-center">
                        "Night and day difference. We went from barely getting leads to having more qualified prospects than we can handle."
                        <footer className="text-sm mt-2 not-italic font-semibold">
                          — Mike Torres, Summit Roofing
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Why Our PPC Campaigns Work */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Our PPC Campaigns Work
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  No guesswork. No wasted spend. Just proven strategies that turn clicks into customers.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. We Learn Your Business</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We start with strategy — understanding your goals, budget, and who you want to reach.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Laser-Focused Targeting</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We don't guess. We use data-driven keyword research to reach buyers, not browsers.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Conversion-Focused Ads</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    No fluff. Just clear messaging that turns clicks into customers.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Constant Testing</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We manage, monitor, and tweak your campaigns every week. No "set it and forget it."
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* PPC Features & Deliverables */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={700}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  PPC Features & Deliverables
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything you need for successful Google Ads campaigns, all included
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Campaign Setup & Targeting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Landing Page Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Ad Copy Writing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Keyword & Negative Keyword Strategy</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Bid Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Conversion Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Weekly Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="font-semibold text-gray-900 dark:text-white">A/B Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={800}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Pricing: Forte PPC™
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Professional Google Ads management with proven results
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Forte PPC™</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Complete Google Ads management + ad spend</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$400</div>
                    <div className="text-gray-500 dark:text-gray-400 mb-1">/month + ad spend</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">(12-month minimum)</div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                    <p className="text-blue-800 dark:text-blue-200 font-semibold">
                      ⚡ Starter Budget Recommendation:
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 text-sm mt-1">
                      Start with $1,000/month ad spend + $400 management = $1,400/month total investment.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6">
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Want SEO + PPC together? Check out the <strong>Forte Growth™ Bundle</strong> and save $150/month.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <LightButton href="/contact" className="w-full mb-4">Get Started with PPC</LightButton>
                    <DarkButton href="/pricing" className="w-full bg-gray-600 hover:bg-gray-700 text-white border-gray-600">
                      View All Bundles
                    </DarkButton>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up" delay={900}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <Icon
                        name="down-arrow"
                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={1000}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Turn Your Ad Budget into Real Business Growth
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                You've got a great business. Let's make sure customers can find it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📞</span>
                  <span className="text-lg font-semibold">Call us: (817) 873-6655</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📧</span>
                  <a href="mailto:seth@fortewebdesigns.com" className="text-lg font-semibold hover:text-blue-200 transition-colors">
                    Email: seth@fortewebdesigns.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Fix My Ads & Get More Leads
                </LightButton>
                <DarkButton href="/pricing" className="bg-blue-800 hover:bg-blue-900 text-white border-blue-800">
                  Start My Forte™ Ecosystem
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
