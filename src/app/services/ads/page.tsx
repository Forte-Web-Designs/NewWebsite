"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Do I need a CRM already to get started?",
    answer: "Not at all! We'll help you choose and set up the right CRM for your business size and needs. We work with HubSpot, Zoho, GoHighLevel, and others to find the perfect fit.",
  },
  {
    question: "Which CRMs and systems do you support?",
    answer: "We integrate with all major CRMs (HubSpot, Salesforce, Zoho, GoHighLevel), booking systems (Calendly, Acuity, ServiceTitan), and payment processors (Stripe, Square, PayPal). If you have existing tools, we'll make them work together.",
  },
  {
    question: "Can this integrate with my existing booking system?",
    answer: "Yes! We specialize in connecting existing systems. Whether you use ServiceTitan, Calendly, or custom booking software, we'll create seamless integrations that eliminate double-entry and missed appointments.",
  },
  {
    question: "How long does the systems integration setup take?",
    answer: "Most integrations are completed within 2-4 weeks. We handle the technical setup while training your team on the new workflows. You'll see immediate improvements in lead tracking and response times.",
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
      <Head>
        <title>Scaling Layer: Business Systems Integration | CRM & Automation Setup | Forte Web Designs</title>
        <meta name="description" content="Stop losing leads through disconnected systems. DFW-based team delivering business systems integration nationwide - CRM setup, automation workflows, and unified dashboards that scale your operations." />
        <meta name="keywords" content="business systems integration, CRM setup, workflow automation, lead routing, business operations, systems integration, business automation, lead management, dashboard reporting" />
        <link rel="canonical" href="https://fortewebdesigns.com/services/ads" />
      </Head>
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
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full mb-6 border border-green-200 dark:border-green-700">
                <Icon name="star" className="w-4 h-4 text-green-600" />
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Business Systems Integration Partner
                </span>
              </div>
            
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6 max-w-5xl mx-auto">
                Scaling Layer: <span className="text-green-600 dark:text-green-400">Business Systems Integration</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Your business deserves more than disconnected tools. We integrate your CRM, website, booking, and analytics into one seamless growth engine. No more lost leads, missed opportunities, or wondering what's working.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <LightButton href="/contact">Book My Free Systems Audit</LightButton>
                <DarkButton href="#pricing" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
                  See Integration Packages
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Business Systems Problems Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-red-50 dark:bg-red-900/10">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Losing Leads in the Chaos? Your Systems Are Broken.
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-700">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🔄</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Leads Falling Through the Cracks</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">No system to track or follow up on inquiries properly</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🧩</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tools Don't Talk to Each Other</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Website, CRM, booking system all completely disconnected</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📉</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Visibility Into What's Working</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">No idea where leads come from or what drives revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Business Systems Integration Solution Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  All Your Tools, Finally Working Together
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  We connect your website, CRM, booking system, and analytics into one seamless growth engine that captures every lead and tracks every dollar.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">🔧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">CRM Setup & Automation</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Custom pipelines for tracking leads from inquiry to close</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lead Routing & Dashboards</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Send inquiries to the right team instantly with real-time reporting</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">🧩</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Booking & Payment Integration</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Seamless scheduling and payment processing in one flow</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Workflow Automations</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Reduce busywork and speed up your sales cycles</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Multi-Location Support</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Perfect for franchises and growing teams</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 text-center">
                  <p className="text-green-800 dark:text-green-200 font-semibold text-lg">
                    Most clients achieve 95%+ lead response rate and cut operational overhead by 40% within 90 days.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte Care™ Promotional Snippet */}
        <SimpleScrollReveal direction="up" delay={450}>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Keep Your Systems Running Smoothly
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Your systems integration is only as good as its maintenance. Forte Care™ ensures your CRM, automations, and integrations stay optimized and running smoothly – monitoring performance, updating workflows, and fine-tuning processes that keep your business growing.
                </p>
                <Link
                  href="/solutions/care"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <span>Maintain My Systems</span>
                  <span className="text-sm">→</span>
                </Link>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Case Study Spotlight */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Real Client Results
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  How systems integration transformed this growing business
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Client Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🏠</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ABC Roofing</h3>
                        <p className="text-gray-600 dark:text-gray-400">Multi-location roofing company</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                          Problem
                        </h4>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          Losing track of leads from website, calls, and ads across 3 locations
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Solution
                        </h4>
                        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                          <li>• CRM integration with lead routing by location</li>
                          <li>• Automated booking system with calendar sync</li>
                          <li>• Unified dashboard for all locations</li>
                          <li>• Lead scoring and follow-up automation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6 text-center text-xl">
                        Results (90 Days):
                      </h4>
                      
                      <div className="grid grid-cols-1 gap-6 mb-6">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              📊 95%
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              lead response rate
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              ⚡ 40%
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              faster close times
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              📈 100%
                            </div>
                            <div className="text-sm text-green-700 dark:text-green-300">
                              clear dashboards
                            </div>
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300 text-center">
                        "Finally have visibility into our entire operation. No more lost leads, and our team knows exactly what to do with every inquiry."
                        <footer className="text-sm mt-2 not-italic font-semibold">
                          - Sarah Johnson, ABC Roofing
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Why Our Systems Integration Works */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Systems Integration Process
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  No more scattered tools. We create one unified system that grows with your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Systems Audit</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We map your current tools and identify gaps in your lead tracking and follow-up process.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. CRM & Integration Setup</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We connect your website, booking system, and communications into one unified platform.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Automation & Workflows</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We build automated workflows that route leads, trigger follow-ups, and keep deals moving.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Training & Optimization</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We train your team and continuously optimize your systems for maximum efficiency.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* What's Included - Scaling Layer Package */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={700}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What's Included - Scaling Layer Package
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Everything you need to scale your operations and never lose another lead
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">🔧</span>
                      <span className="font-semibold text-gray-900 dark:text-white">CRM Setup - HubSpot, Zoho, or GoHighLevel pipelines ready to use</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">📊</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Dashboard Reporting - leads, calls, and revenue in one view</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">🧩</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Integration - website, booking, payments, email, SMS all connected</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">🤖</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Automation - triggers and workflows to speed up sales cycles</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">🌍</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Multi-Location Support - perfect for franchises and growing teams</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">📞</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Lead Routing - send inquiries to the right team instantly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">📈</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Performance Tracking - monitor response times and conversion rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-xl">🎓</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Team Training - comprehensive onboarding for your staff</span>
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
                  Scaling Layer Pricing
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Business systems integration that scales with your growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Systems Starter */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Systems Starter</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">CRM setup + automation basics</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$500</div>
                    <div className="text-gray-500 dark:text-gray-400 mb-1">/month</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">(12-month minimum)</div>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>CRM setup + automation basics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Dashboard reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Website + booking integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Ongoing Forte Care™ optimization</span>
                    </div>
                  </div>
                  
                  <LightButton href="/contact" className="w-full">Start with Systems Starter</LightButton>
                </div>

                {/* Systems Pro */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-green-500 text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Systems Pro</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">Everything in Starter + advanced automation</p>
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$1,000</div>
                    <div className="text-gray-500 dark:text-gray-400 mb-1">/month</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">(12-month minimum)</div>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Everything in Systems Starter</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Multi-channel automation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Lead routing & scoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Advanced dashboards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span>Multi-location support</span>
                    </div>
                  </div>
                  
                  <LightButton href="/contact" className="w-full">Get Systems Pro</LightButton>
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
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-green-600 dark:bg-green-800">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={1000}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build Your Business Operating System
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Stop losing leads to broken systems. Let's create one unified platform that captures every opportunity and scales with your growth. Based in Grapevine, Texas, proudly serving businesses nationwide from our DFW headquarters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📞</span>
                  <span className="text-lg font-semibold">Call us: (817) 873-6655</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-lg">📧</span>
                  <a href="mailto:seth@fortewebdesigns.com" className="text-lg font-semibold hover:text-green-200 transition-colors">
                    Email: seth@fortewebdesigns.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <LightButton href="/contact" className="bg-white text-green-600 hover:bg-gray-100">
                  Book My Free Systems Audit
                </LightButton>
                <DarkButton href="/pricing" className="bg-green-800 hover:bg-green-900 text-white border-green-800">
                  Start My Growth System
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Industry-specific CTA functionality */}
        <IndustryLeadCTA 
          industry="systems"
          formName="Systems Integration Inquiry"
          title="Let's Build Your Business Operating System"
          subtitle="Tell us about your current tools and challenges. We'll show you how to connect everything into one seamless system that scales with your growth."
          mobileCtaText="Ready to integrate your systems?"
          mobileCtaSubtext="Get your free systems audit today"
          mobileBgGradient="bg-gradient-to-r from-green-600 to-blue-600"
        />
      </div>
    </div>
  );
}
