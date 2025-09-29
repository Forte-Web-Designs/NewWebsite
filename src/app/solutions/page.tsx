"use client";

import { useState } from "react";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from "@/components/DarkButton";

export default function SolutionsPage() {
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

  // Solutions data
  const solutions = [
    {
      emoji: "🎯",
      title: "Lead & Intake",
      subtitle: "Turn missed calls and form fills into booked jobs.",
      description: "Most businesses lose work not because of skill — but because opportunities slip through the cracks.",
      bullets: [
        "Instant text-back for missed calls",
        "Auto-responses for web forms & chat",
        "Smart routing to the right team member"
      ],
      results: "Faster response times, fewer missed leads, and a first-touch rate that builds trust immediately."
    },
    {
      emoji: "📑",
      title: "Faster Quotes & Sales Ops",
      subtitle: "Send quotes same-day. Get answers faster.",
      description: "Waiting days to get back with a quote kills momentum. We help you speed it up.",
      bullets: [
        "Guided quote templates with pre-filled details",
        "Automatic reminders until the deal is closed",
        "Simple workflows that remove bottlenecks"
      ],
      results: "Faster turnaround, more replies, and higher close rates."
    },
    {
      emoji: "🔁",
      title: "Follow-Ups & Retention",
      subtitle: "Stay top-of-mind. Win back lost revenue.",
      description: "Most businesses stop following up after one attempt. That's where opportunities get wasted.",
      bullets: [
        "Automated reminders for no-shows",
        "Personalized win-back campaigns",
        "Steady drip of reviews from happy customers"
      ],
      results: "Lower no-show rates, more reviews, and repeat customers without chasing."
    },
    {
      emoji: "📊",
      title: "Data & Owner Dashboards",
      subtitle: "Clarity on what's working — and what's stuck.",
      description: "Business owners don't need more spreadsheets. They need answers at a glance.",
      bullets: [
        "One dashboard for leads, quotes, and pipeline",
        "Weekly scorecards with key metrics",
        "Alerts for stuck or overdue items"
      ],
      results: "Clearer forecasting, faster decisions, and accountability without micromanaging."
    },
    {
      emoji: "🔍",
      title: "Marketing & SEO Automations",
      subtitle: "Local visibility that turns into booked jobs.",
      description: "Your growth system works best when people can actually find you.",
      bullets: [
        "Local SEO tuned for your services",
        "Automated review flows that boost rankings",
        "Ongoing tracking of keyword and inquiry lift"
      ],
      results: "Higher search visibility, lower cost per lead, and more inbound inquiries."
    },
    {
      emoji: "⚙️",
      title: "Integrations & Operations",
      subtitle: "Fewer manual steps. Smoother handoffs.",
      description: "Every dropped ball between staff, systems, or software is lost time and lost revenue.",
      bullets: [
        "Connects your tools (CRM, invoicing, scheduling)",
        "Removes duplicate data entry",
        "Automates handoffs across teams"
      ],
      results: "Cleaner operations, fewer mistakes, and more time back in your day."
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
            "name": "Business Growth Solutions",
            "description": "Six outcome-focused growth solutions for small service businesses. Stop losing opportunities and start growing steadily with our systematic approach.",
            "url": "https://fortewebdesigns.com/solutions",
            "mainEntity": {
              "@type": "Service",
              "name": "Business Growth Systems",
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
                  Business Growth Isn't{" "}
                  <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                    Guesswork.
                  </span>{" "}
                  It's a System.
                </h1>

                {/* Intro */}
                <div className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  <p className="mb-4">
                    At Forte, we help small service businesses stop losing opportunities and start growing steadily.
                  </p>
                  <p className="mb-6 font-medium text-gray-700 dark:text-gray-300">
                    Catch every opportunity. Respond faster. Win more jobs.
                  </p>
                  <div className="text-center mb-8">
                    <DarkButton 
                      onClick={() => setShowGrowthSnapshotForm(true)}
                      className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
                    >
                      👉 Get My Free Growth Snapshot →
                    </DarkButton>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal>
              <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Solutions: Fix the Bottlenecks That Cost You Growth
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                  Growth doesn't come from working harder. It comes from eliminating the gaps where opportunities leak out.
                  Forte's Growth Systems focus on six outcome areas — each designed to free up your time, remove friction, and drive measurable results.
                </p>
              </div>
            </SimpleScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                    {/* Emoji Icon */}
                    <div className="mb-6">
                      <span className="text-5xl">{solution.emoji}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                      {solution.title}
                    </h2>
                    
                    {/* Subtitle */}
                    <h3 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                      {solution.subtitle}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {solution.description}
                    </p>
                    
                    {/* Bullets */}
                    <ul className="space-y-3 mb-6">
                      {solution.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Results */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                          📈 Results:
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          {solution.results}
                        </p>
                      </div>
                    </div>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Works Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                  Why It Works
                </h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                      The old way =
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      multiple vendors, disconnected tools, endless spreadsheets.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                      The Forte way =
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      one connected system, one dashboard, one team making it all work together.
                    </p>
                  </div>
                </div>
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
                  Ready to see where your biggest opportunities are slipping?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Start with a free Growth Snapshot — we'll review your missed calls, quote delays, and follow-up gaps, then show you two quick fixes.
                </p>
                
                <div className="space-y-2 mb-8">
                  <p className="text-sm text-gray-600 dark:text-gray-400">✅ 100% free. No meeting required.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">✅ 1-page PDF + 2-min Loom.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">✅ Works with your tools (no rip-and-replace).</p>
                </div>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'solutions-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-4 text-lg"
                >
                  👉 Get My Free Growth Snapshot →
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
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We'll analyze your current setup and show you exactly where opportunities are slipping through the cracks.
                </p>
                
                {/* Form */}
                <div className="space-y-4">
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