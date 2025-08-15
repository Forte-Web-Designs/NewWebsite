"use client";

import { useState } from "react";
import Link from "next/link";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';
import { Metadata } from 'next';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How long until I see results?",
    answer: "Most businesses see movement within 30–60 days and strong results in 90+. We track progress transparently so you can see improvements at every step.",
  },
  {
    question: "What's the difference between Essential and Growth?",
    answer: "Essential focuses on optimizing your site with keyword targeting, technical fixes, and basic local SEO. Growth includes everything in Essential plus blog content creation, link building, and ongoing strategy development.",
  },
  {
    question: "Do you work with non-Forte websites?",
    answer: "Occasionally, yes - but we recommend rebuilding with Forte if your current site isn't SEO-ready. Our websites are built with clean code and proper technical foundations that make SEO much more effective.",
  },
  {
    question: "What industries do you work with?",
    answer: "We work with all types of local businesses - contractors, healthcare providers, professional services, restaurants, retail stores, and more. Our strategies adapt to your specific industry and local market.",
  },
];

// SEO metadata for the page
const pageMetadata = {
  title: "Professional SEO Services | Expert Search Engine Optimization Nationwide from DFW | Forte Web Designs",
  description: "Dominate Google search results with professional SEO services nationwide. DFW-based team delivering expert local SEO, advanced keyword optimization, content strategy, and proven search engine optimization that drives real business results.",
  keywords: "professional SEO services, search engine optimization, expert local SEO, Google ranking optimization, keyword research, SEO company, search marketing, professional SEO optimization, digital marketing SEO, nationwide SEO services, DFW SEO team"
};

export default function SeoDesignPage() {
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
                  SEO That Actually Works
                </span>
              </div>
            
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6 max-w-5xl mx-auto">
                Get Found. <span className="text-blue-600 dark:text-blue-400">Stay Booked.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Stop being invisible on Google. Our SEO doesn't just boost rankings - it brings in real, qualified leads so you can focus on serving customers, not chasing them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <LightButton href="/contact">Get My Free Website Analysis</LightButton>
                <DarkButton href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600">
                  Add Forte SEO™ to My Website
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-900/10">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Here's What You're Up Against
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-700">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">👻</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Invisible on Google</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Your website doesn't show up when people search your service</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Competitors Winning</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Competitors are winning customers that should be yours</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">💰</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Missing High-Intent Leads</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">You're missing out on high-intent leads ready to buy today</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte SEO™ Solution Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  SEO That Works for Real Businesses
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  We don't waste time with buzzwords and fluff. We use proven methods that get your website ranking and keep the phone ringing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Local keyword targeting</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Strategic targeting for your local market</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical SEO your developer forgot</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Fix the technical issues holding you back</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Monthly content strategy</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Fresh, SEO-optimized content every month</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Link building that builds trust</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Quality backlinks from relevant sources</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">✅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real reports, real growth</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Transparent tracking and monthly reporting</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700 text-center">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold text-lg">
                    Most clients see 30–50% more organic traffic in the first 90 days.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Built-in SEO vs Full SEO Package Comparison */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Already Have a Forte Website? Great - You've Got a Head Start.
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  But to actually rank, you need more than a good foundation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="text-left py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">Feature</th>
                        <th className="text-center py-6 px-6 font-bold text-blue-600 dark:text-blue-400 text-lg">Built-In SEO (Included)</th>
                        <th className="text-center py-6 px-6 font-bold text-green-600 dark:text-green-400 text-lg">Forte SEO™ Add-On</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Technical Setup</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Initial setup</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Ongoing audits & fixes</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Metadata / Alt Tags</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Basic</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Monthly refinement</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Keyword Research</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Monthly & strategic</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Blog Strategy</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">SEO-driven content planning</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Link Building</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Authority outreach</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Analytics & Reporting</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Monthly growth reports</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* What's Included - Forte SEO™ Services */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What's Included – Forte SEO™ Services
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive SEO services that work together to get you found and keep you ranking
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔧</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Rock-Solid Technical Foundation</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    We fix the crawl errors, broken links, and speed bottlenecks holding your site back.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📝</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Content That Gets Clicks</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    We write helpful blog posts and optimize your service pages so Google and your customers know exactly what you offer.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📍</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Local SEO That Gets You Ranked "Near Me"</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Google Business Profile, local citations, map rankings - we handle it all.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🔗</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quality Link Building</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    We build trustworthy links from relevant sites. No shady spam. Just credibility.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte Care™ Promotional Snippet */}
        <SimpleScrollReveal direction="up" delay={650}>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🩺</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Your Website's Monthly Checkup
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Just like you get regular health checkups to catch problems early, your website needs monthly monitoring to stay healthy. Forte Care™ provides ongoing SEO monitoring, performance optimization, and technical maintenance so your rankings stay strong and your site keeps attracting customers.
                </p>
                <Link
                  href="/solutions/care"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <span>Get Your Website Checkup</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Real Client Results - Case Study */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={700}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Real Client Results
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  See how we helped a local business dominate their market
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Case Study Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🏥</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Alpine Physical Therapy</h3>
                        <p className="text-gray-600 dark:text-gray-400">Local healthcare practice</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                          Problem
                        </h4>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          Not ranking for "physical therapy + city" - competitors getting all the traffic
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Solution
                        </h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                          Local SEO strategy, 12 optimized service pages, blog content, and Google Business revamp
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6 text-center text-xl">
                        Results in 6 months:
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            +287%
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Organic Traffic
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            +450%
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Qualified Leads
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            #1
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Ranking for "Physical Therapy [City]"
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            12+
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Page-1 Keywords
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300 text-center">
                        "We went from struggling to booked out with a waitlist. The ROI was incredible."
                        <footer className="text-sm mt-2 not-italic font-semibold">
                          - Dr. Sarah Chen, Alpine Physical Therapy
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={800}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Choose the Right SEO Plan for Your Goals
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Requires a Forte Foundation™ or Pro™ website design package. Save with our Growth Bundle or Dominate Bundle.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* SEO Essential */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="search" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">SEO Essential™</h3>
                    <p className="text-gray-600 dark:text-gray-400">On-page optimization, keyword targeting, basic local SEO</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Keyword research & optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Technical SEO audits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">On-page optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly reporting</span>
                    </li>
                  </ul>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$300</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <div className="text-center">
                    <LightButton href="/contact" className="w-full">Get Started</LightButton>
                  </div>
                </div>

                {/* SEO Growth */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-green-500 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">SEO Growth™</h3>
                    <p className="text-gray-600 dark:text-gray-400">Includes blog content, link building, full SEO strategy</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Everything in Essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">4 SEO blog posts monthly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Link building campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Competitor analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Local SEO optimization</span>
                    </li>
                  </ul>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$500</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">per month</div>
                  </div>
                  
                  <div className="text-center">
                    <DarkButton href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600">Get Started</DarkButton>
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
                Let's Put Your Business on the Map
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We've helped hundreds of small businesses rank #1 on Google. Yours could be next.
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
                  Get My Free Website Analysis
                </LightButton>
                <DarkButton href="/pricing" className="bg-blue-800 hover:bg-blue-900 text-white border-blue-800">
                  Add SEO to My Website
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Industry-specific CTA functionality */}
        <IndustryLeadCTA 
          industry="seo"
          formName="SEO Inquiry"
          title="Let's Build Your SEO Strategy Right"
          subtitle="Tell us about your business and we'll get back to you within 1 business day. No pressure - just real help from a team that builds winning SEO strategies."
          mobileCtaText="Ready to rank higher?"
          mobileCtaSubtext="Get your SEO strategy today"
          mobileBgGradient="bg-gradient-to-r from-green-600 to-teal-600"
        />
      </div>
    </div>
  );
}
