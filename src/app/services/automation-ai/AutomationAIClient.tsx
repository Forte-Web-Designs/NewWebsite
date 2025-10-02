'use client';

import { useState } from 'react';
import Link from 'next/link';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

export default function AutomationAIClient() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // What we build data (simplified to one-line feature + outcome)
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center">
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              AI Automation Services & Systems Integration
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/growth-audit">
                <LightButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                  Get Free Growth Snapshot →
                </LightButton>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 w-full sm:w-auto">
                  Book Consultation →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              What We Build For You
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Practical automation that saves time and grows revenue. No fluff, no over-engineering—just systems that work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                  {service.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Solutions Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              Explore Our AI & Automation Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dive deeper into our specialized offerings to see how we can transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AI Agents Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">🤖</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    AI Agents
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Intelligent automation that thinks
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Custom AI agents that handle complex workflows, customer interactions, and business processes. From chatbots to document processing, our agents work 24/7 to grow your business.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Smart customer service agents</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Document processing & analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Lead qualification & nurturing</span>
                </div>
              </div>
              
              <Link href="/services/automation-ai/ai-agents">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore AI Agents →
                </button>
              </Link>
            </div>

            {/* Technology Stack Card */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl text-white">⚙️</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                    Technology Stack
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    The tech behind the magic
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Discover the cutting-edge technologies and frameworks we use to build robust, scalable automation systems. From AI models to integration platforms.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Modern AI/ML frameworks</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Enterprise integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">Scalable architecture</span>
                </div>
              </div>
              
              <Link href="/services/automation-ai/technology-stack">
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Technology Stack →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              30–90 Day Implementation Timeline
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We start with quick wins and build toward comprehensive automation. You see results within weeks, not months.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{step.phase}</span>
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">{step.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              Investment & Pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent pricing based on your business size and automation needs. Most clients see ROI within 60-90 days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg relative ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
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
                      <span className="text-green-500 text-sm mt-0.5">✓</span>
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
                
                <Link href="/contact">
                  <DarkButton className="w-full justify-center">
                    Get Started →
                  </DarkButton>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-lg"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">
                    {expandedFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Dallas-Fort Worth Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
              Serving Dallas–Fort Worth & Beyond
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Based in Grapevine, we help businesses across DFW implement AI automation that drives real results. Ready to stop manual work and start growing?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/growth-audit">
                <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Get Free Growth Snapshot →
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation →
                </button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <Link href="/dfw/ai-consulting" className="text-blue-200 hover:text-white transition-colors text-sm">
                AI Consulting DFW →
              </Link>
              <Link href="/dfw/automation-consulting" className="text-blue-200 hover:text-white transition-colors text-sm">
                Automation Consulting →
              </Link>
              <Link href="/dfw/business-growth-systems" className="text-blue-200 hover:text-white transition-colors text-sm">
                Business Growth Systems →
              </Link>
              <Link href="/pricing" className="text-blue-200 hover:text-white transition-colors text-sm">
                View Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}