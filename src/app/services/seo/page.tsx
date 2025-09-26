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
    question: "How fast does automation start working?",
    answer: "Your AI receptionist and booking system go live within 24-48 hours. Most businesses see immediate improvements in response times and start capturing after-hours leads right away.",
  },
  {
    question: "Can AI handle industry-specific questions?",
    answer: "Absolutely. We train your AI with your specific services, pricing, and FAQs. It learns your business inside and out to provide accurate, helpful responses to potential customers.",
  },
  {
    question: "Do I need a new CRM system?",
    answer: "Not necessarily. Our automation layer integrates with most existing CRMs and booking systems. We can also recommend simple solutions if you don't have one yet.",
  },
  {
    question: "Does this work after hours and weekends?",
    answer: "That's the whole point! Your AI receptionist works 24/7, capturing leads, answering questions, and booking appointments even when you're sleeping or busy with customers.",
  },
];

// Growth Layer: Automation & AI metadata for the page
const pageMetadata = {
  title: "Growth Layer: Automation & AI | 24/7 Lead Capture & Booking System | Forte Web Designs",
  description: "Transform your website into a 24/7 sales machine. AI receptionists, automated follow-up, and smart booking systems that convert traffic into paying clients. Turn leads into revenue automatically.",
  keywords: "automation systems, AI receptionist, automated booking, lead capture automation, business automation, AI chat, automated follow-up, smart scheduling, lead conversion, automated sales funnel"
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
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full mb-6 border border-green-200 dark:border-green-700">
                <Icon name="star" className="w-4 h-4 text-green-600" />
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Growth Layer: Automation & AI
                </span>
              </div>
            
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6 max-w-5xl mx-auto">
                Growth Layer: <span className="text-green-600 dark:text-green-400">Automation & AI</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Turn your website into a 24/7 sales rep. AI receptionists, automated follow-up, and booking flows that convert traffic into paying clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <LightButton href="/contact">Book My Free Growth Audit</LightButton>
                <DarkButton href="#pricing" className="bg-green-600 hover:bg-green-700 text-white border-green-600">
                  Add Growth Layer to My Website
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
                        <span className="text-2xl">⏳</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Slow Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Leads slip away when you don't answer fast enough</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📉</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lost Opportunities</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Competitors call back first and win the job</p>
                    </div>

                    <div className="text-center">
                      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🤯</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Overwhelmed Teams</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Manual follow-ups eat hours every week</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* AI & Automation Solution Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  AI & Automation That Works for Real Businesses
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  No more missed calls or lost leads. Our automation layer captures every opportunity and turns them into paying customers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Receptionist</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Answer leads instantly 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">📲</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automated Follow-Up</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">SMS & email drips until lead responds</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">📅</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Booking Integration</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Calendar, reminders, reschedules handled automatically</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lead Dashboard</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Track conversations, appointments, and ROI</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <span className="text-green-500 text-xl">⭐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lead Scoring</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Prioritize high-value opportunities automatically</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 text-center">
                  <p className="text-green-800 dark:text-green-200 font-semibold text-lg">
                    Most clients see 2x more bookings in the first 60 days.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Foundation vs Growth Layer Comparison */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Already Have a Forte Website? Great — Now Supercharge It.
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Foundation websites capture leads → Growth Layer converts them into bookings.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="text-left py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">Feature</th>
                        <th className="text-center py-6 px-6 font-bold text-blue-600 dark:text-blue-400 text-lg">Foundation Only</th>
                        <th className="text-center py-6 px-6 font-bold text-green-600 dark:text-green-400 text-lg">Growth Layer Added</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Lead Response</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Email notifications</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">🤖</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">AI chats with leads instantly</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Follow-Up</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                            <span className="text-gray-400 font-semibold">Manual only</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">📲</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Auto SMS & email sequences</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Appointment Booking</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Basic contact form</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">📅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Auto-schedules & sends reminders</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Lead Tracking</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                            <span className="text-gray-400 font-semibold">None</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">📊</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Full dashboard & analytics</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">After Hours Coverage</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">❌</span>
                            <span className="text-gray-400 font-semibold">Leads wait until morning</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">🌙</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">24/7 AI coverage</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Lead Conversion</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-yellow-500 text-xl">⚠️</span>
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">Hope they call back</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">⭐</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Tracks outcomes & ROI</span>
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

        {/* What's Included - Growth Layer Package */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  What's Included — Growth Layer Package
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Complete automation system that captures leads, nurtures prospects, and books appointments
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Receptionist</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Answers FAQs and qualifies leads 24/7, so you never miss an opportunity.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📲</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Automated Follow-Up</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    SMS and email sequences that nurture leads until they respond or book.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📅</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Booking Integration</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Calendar integration with automated reminders and reschedule handling.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📊</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Lead Dashboard</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Track conversations, appointments, and ROI in one clean dashboard.
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
                  Your Automation System's Ongoing Care
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Just like you service your HVAC system to prevent breakdowns, your automation systems need regular optimization to keep generating leads. Forte Care™ provides ongoing AI fine-tuning, performance monitoring, and system maintenance so your automations stay effective and your business keeps growing.
                </p>
                <Link
                  href="/solutions/care"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <span>Optimize My Automation</span>
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
                  See how automation transformed this local business
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Case Study Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mike's HVAC</h3>
                        <p className="text-gray-600 dark:text-gray-400">Local HVAC contractor</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                          Problem
                        </h4>
                        <p className="text-red-700 dark:text-red-300 text-sm">
                          Missing calls after hours, slow response to leads, competitors booking jobs first
                        </p>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          Solution
                        </h4>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                          AI receptionist + auto-booking + reminder system + automated follow-up sequences
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6 text-center text-xl">
                        Results in 60 days:
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            2x
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            More Service Calls
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            24/7
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Lead Capture
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            85%
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Booking Rate
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            0
                          </div>
                          <div className="text-sm text-green-700 dark:text-green-300">
                            Missed Opportunities
                          </div>
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-700 dark:text-green-300 text-center">
                        "I never miss a lead now. Even when I'm on a job, the AI is booking the next one."
                        <footer className="text-sm mt-2 not-italic font-semibold">
                          - Mike Johnson, Mike's HVAC
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
                  Choose the Right Automation Plan for Your Goals
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  Add the Growth Layer to your Foundation website. Transform visitors into leads with AI automation and smart booking systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Automation Starter */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Automation Starter</h3>
                    <p className="text-gray-600 dark:text-gray-400">AI receptionist setup, automated follow-up, basic booking</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">AI receptionist setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Automated SMS/email follow-up</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Basic booking integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly performance reports</span>
                    </li>
                  </ul>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$1,500 + $300/mo</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">setup fee + monthly</div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-3 mb-4">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      💡 <strong>Bundle & Save:</strong> Combine this layer with Foundation or Scaling to save up to $200/month. 
                      <Link href="/pricing" className="font-semibold underline ml-1">See bundle pricing →</Link>
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <LightButton href="/contact" className="w-full">Start My Growth Layer</LightButton>
                  </div>
                </div>

                {/* Automation Pro */}
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
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Automation Pro</h3>
                    <p className="text-gray-600 dark:text-gray-400">Advanced workflows, lead scoring, multi-channel automation</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Everything in Starter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Advanced workflows (lead scoring, multi-channel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Dashboard reporting & optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">CRM integration & pipeline automation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Custom workflow optimization</span>
                    </li>
                  </ul>
                  
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$2,500 + $500/mo</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">setup fee + monthly</div>
                  </div>
                  
                  <div className="text-center">
                    <DarkButton href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600">Start My Growth Layer</DarkButton>
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
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-green-600 dark:bg-green-800">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={1000}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Turn Your Website Into a 24/7 Sales Machine
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                We've helped hundreds of businesses capture more leads and book more appointments. Yours could be next.
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
                <LightButton href="/contact" className="bg-white text-green-600 hover:bg-gray-100">
                  Book Your Free Growth System Audit
                </LightButton>
                <DarkButton href="/pricing" className="bg-green-800 hover:bg-green-900 text-white border-green-800">
                  Add Growth Layer to My Website
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Industry-specific CTA functionality */}
        <IndustryLeadCTA 
          industry="automation"
          formName="Growth Layer Automation Inquiry"
          title="Let's Build Your Automation System Right"
          subtitle="Tell us about your business and we'll show you exactly how automation can turn more leads into paying customers. No pressure - just real help from a team that builds winning growth systems."
          mobileCtaText="Ready to automate your growth?"
          mobileCtaSubtext="Get your automation system today"
          mobileBgGradient="bg-gradient-to-r from-green-600 to-teal-600"
        />
      </div>
    </div>
  );
}
