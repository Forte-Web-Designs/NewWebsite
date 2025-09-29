"use client";

import { useState } from "react";
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';

export default function IndustriesPage() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Industries data
  const industries = [
    {
      icon: "🏠",
      title: "Home Services",
      subtitle: "Roofing, HVAC, Plumbing, Electrical, Landscaping",
      points: [
        "Auto-reply to every missed call and form",
        "Same-day quoting for faster closes", 
        "Review flows that boost local rankings"
      ],
      impact: "More booked jobs, less admin time, and steady 5★ reviews.",
      bgColor: "bg-white dark:bg-gray-700"
    },
    {
      icon: "🏥", 
      title: "Healthcare & Clinics",
      subtitle: "Medical, Dental, Therapy Practices",
      points: [
        "Intake automation for new patients",
        "Faster replies to appointment requests",
        "Follow-up reminders to reduce no-shows"
      ],
      impact: "More patient inquiries, fewer gaps in your schedule, higher retention.",
      bgColor: "bg-gray-50 dark:bg-gray-800"
    },
    {
      icon: "🛠",
      title: "Contractors & Renovation", 
      subtitle: "General Contracting, Remodeling, Specialty Trades",
      points: [
        "Pre-loaded quote templates for complex jobs",
        "Automatic reminders on open estimates",
        "Centralized dashboard for owners & teams"
      ],
      impact: "Shorter sales cycles, higher win rates, and clarity on every project lead.",
      bgColor: "bg-white dark:bg-gray-700"
    },
    {
      icon: "🛍",
      title: "Retail & Boutiques",
      subtitle: "Local Shops, Salons, Service Retail", 
      points: [
        "Follow-up campaigns for one-time customers",
        "Review collection on autopilot",
        "Dashboard to track repeat visits & spend"
      ],
      impact: "More repeat sales, better reviews, and steady customer flow.",
      bgColor: "bg-gray-50 dark:bg-gray-800"
    },
    {
      icon: "📑",
      title: "Professional Services",
      subtitle: "Legal, Finance, Real Estate, Consulting",
      points: [
        "Auto-responses that build trust with inquiries", 
        "Proposal workflows that send faster",
        "CRM integration for full pipeline visibility"
      ],
      impact: "Stronger client relationships, faster closes, and better accountability.",
      bgColor: "bg-white dark:bg-gray-700"
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Growth Systems by Industry",
            "description": "Industry-specific growth systems tailored to your business bottlenecks. Forte adapts proven systems to fit the way your business works.",
            "url": "https://fortewebdesigns.com/industries",
            "mainEntity": {
              "@type": "Service", 
              "name": "Industry-Specific Growth Systems",
              "provider": {
                "@type": "Organization",
                "name": "Forte Web Designs"
              },
              "areaServed": ["US", "DFW", "Dallas", "Fort Worth"],
              "serviceType": "Business Growth Consulting"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-4xl mx-auto">
                {/* Headline */}
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                  Your Industry. Your{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                    Bottlenecks.
                  </span>{" "}
                  Our Systems.
                </h1>

                {/* Intro */}
                <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Every industry has its own version of missed calls, slow quotes, and lost follow-ups. Forte adapts proven growth systems to fit the way your business works.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Industries Sections */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {industries.map((industry, index) => (
                <SimpleScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`rounded-2xl p-8 lg:p-12 ${industry.bgColor}`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                        {/* Icon and Title */}
                        <div className="flex items-start gap-6 mb-6">
                          <div className="text-6xl">{industry.icon}</div>
                          <div>
                            <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-2">
                              {industry.title}
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                              {industry.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Points */}
                        <ul className="space-y-4 mb-8">
                          {industry.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                              <span className="text-lg text-gray-700 dark:text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Impact */}
                        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                          <div className="flex items-start gap-3">
                            <Icon name="trending-up" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                📈 Impact:
                              </h3>
                              <p className="text-gray-700 dark:text-gray-300">
                                {industry.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Visual placeholder */}
                      <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-xl p-12 aspect-square flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-8xl mb-4">{industry.icon}</div>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">
                              {industry.title} Growth System
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Other Local Businesses Section */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <div className="flex justify-center mb-8">
                  <div className="text-6xl">🌎</div>
                </div>
                
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Other Local Businesses
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Don't see your industry listed? Growth systems work across the board. If you rely on leads, quotes, or repeat customers — Forte can make it easier to catch every opportunity.
                </p>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'other-industries');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-4 text-lg"
                >
                  Get My Free Growth Snapshot
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Growth Snapshot CTA */}
        <section className="py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SimpleScrollReveal direction="up">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Want to see how these systems look in your industry?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Start with a <strong>free Growth Snapshot</strong> — tailored to your business.
                </p>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'industries-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-4 text-lg"
                >
                  👉 Get My Free Growth Snapshot
                </DarkButton>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Growth Snapshot Form Modal */}
        {showGrowthSnapshotForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                    Get Your Free Growth Snapshot
                  </h3>
                  <button
                    onClick={() => setShowGrowthSnapshotForm(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    aria-label="Close modal"
                  >
                    <Icon name="x" className="w-6 h-6" />
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We'll analyze your industry-specific bottlenecks and show you exactly where opportunities are slipping through the cracks.
                </p>
                
                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Industry
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
                      <option value="">Select your industry</option>
                      <option value="home-services">Home Services</option>
                      <option value="healthcare">Healthcare & Clinics</option>
                      <option value="contractors">Contractors & Renovation</option>
                      <option value="retail">Retail & Boutiques</option>
                      <option value="professional">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Website URL
                    </label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="https://yourbusiness.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <button 
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    onClick={() => setShowGrowthSnapshotForm(false)}
                  >
                    Get My Free Growth Snapshot →
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    We'll only use your info to prepare your snapshot. No spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}