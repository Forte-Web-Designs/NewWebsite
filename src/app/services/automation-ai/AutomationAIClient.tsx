'use client';

import { useState } from 'react';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export default function AutomationAIClient() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // What we build data
  const automationServices = [
    {
      title: "Smart Intake & First Touch",
      description: "Instant text-back on missed calls and web form auto-replies.",
      result: "Response time down; booked calls up.",
      icon: "phone"
    },
    {
      title: "Quote & Sales Follow-Through",
      description: "Guided templates and auto-nudges until answered.",
      result: "Same-day quotes; higher close rates.",
      icon: "dollar"
    },
    {
      title: "Retention & Review Loops",
      description: "No-show reminders and steady review requests that post.",
      result: "More repeat revenue; review engine that compounds.",
      icon: "star"
    },
    {
      title: "Owner Scorecard & Alerts",
      description: "Weekly dashboards that show what's working and what's stuck.",
      result: "You know what to fix Monday morning.",
      icon: "chart"
    }
  ];

  const implementationSteps = [
    {
      phase: "Week 1-2",
      title: "Quick Wins & Foundation",
      items: [
        "Missed-call text-back automation",
        "Form confirmation + next-step routing",
        "Basic quote template system",
        "First metrics dashboard"
      ]
    },
    {
      phase: "Week 3-6",
      title: "Core Automation Rollout",
      items: [
        "Full follow-up sequence automation",
        "Review request & collection pipeline",
        "No-show prevention system",
        "Owner reporting & alerts"
      ]
    },
    {
      phase: "Week 7-12",
      title: "AI Agent & Advanced Systems",
      items: [
        "Smart lead qualification agent",
        "Cross-platform data aggregation",
        "Predictive analytics & insights",
        "Advanced workflow optimization"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Do I need to replace my current tools?",
      answer: "No. We build automation layers on top of your existing CRM, phone system, and other tools. Most implementations work with what you already have."
    },
    {
      question: "How long until I see results?",
      answer: "Quick wins (like missed-call text-back) start working immediately. Full automation systems typically show measurable impact within 30-60 days."
    },
    {
      question: "What if my business is too small for AI?",
      answer: "We scale to your size. Even 1-person businesses benefit from smart automation. We start with high-impact, low-complexity systems and grow from there."
    },
    {
      question: "How much ongoing maintenance is required?",
      answer: "Minimal. Our systems are designed to run reliably with occasional tuning. Most clients need less than 2 hours/month of adjustments after the initial setup period."
    },
    {
      question: "Can you integrate with [my specific tool]?",
      answer: "Probably. We work with most major CRMs, project management tools, communication platforms, and industry-specific software. We'll audit your stack during our consultation."
    }
  ];

  const pricingTiers = [
    {
      name: "Foundation Package",
      price: "Starting at $2,500",
      setup: "$1,500 setup + $200/month ongoing",
      description: "Essential automation for small teams",
      features: [
        "Missed-call text-back automation",
        "Form auto-reply & routing",
        "Basic quote templates",
        "Simple follow-up sequences",
        "Monthly performance reports"
      ],
      bestFor: "1-5 person teams, service-based businesses",
      popular: false
    },
    {
      name: "Growth System",
      price: "Starting at $5,000",
      setup: "$3,000 setup + $400/month ongoing",
      description: "Comprehensive automation & AI agents",
      features: [
        "Everything in Foundation",
        "Smart lead qualification",
        "Review collection automation",
        "No-show prevention system",
        "Owner dashboard & alerts",
        "CRM integration & data sync"
      ],
      bestFor: "5-25 person teams, growing businesses",
      popular: true
    },
    {
      name: "Enterprise Automation",
      price: "Custom pricing",
      setup: "Starting at $10,000",
      description: "Advanced AI systems & custom development",
      features: [
        "Everything in Growth System",
        "Custom AI agent development",
        "Advanced workflow automation",
        "Predictive analytics & insights",
        "Multi-location/team management",
        "Custom integration development"
      ],
      bestFor: "25+ person teams, complex workflows",
      popular: false
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
                AI Automation Services
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-8">
                Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What We Build For You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Practical automation that saves time and grows revenue. No complexity, no over-engineering—just systems that work.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationServices.map((service, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {service.result}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                30–90 Day Implementation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We start with quick wins and build toward comprehensive automation. You see results within weeks, not months.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{step.phase}</span>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{step.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Investment & Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transparent pricing based on your business size and automation needs. Most clients see ROI within 60-90 days.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border transition-all duration-300 hover:shadow-xl relative ${tier.popular ? 'border-blue-600 ring-2 ring-blue-600' : 'border-gray-200 dark:border-gray-700'}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {tier.price}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {tier.setup}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide mb-2">
                      Best For
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tier.bestFor}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200"
                  >
                    Get Started
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 50}>
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-start gap-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white flex-1">
                      {faq.question}
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 flex-shrink-0 text-xl sm:text-2xl mt-0.5">
                      {expandedFAQ === index ? '−' : '+'}
                    </span>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-4 sm:px-6 pb-4 border-t border-gray-100 dark:border-gray-800 pt-4">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Based in Dallas, we help businesses across DFW implement AI automation that drives real results. Stop manual work and start growing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
