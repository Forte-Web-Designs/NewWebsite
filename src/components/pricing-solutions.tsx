'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

// New Solutions-Based Pricing Structure
const pricingSolutions = [
  {
    id: 'foundation',
    emoji: '🌐',
    name: 'Website Foundation',
    setupPrice: 'Starting at $2,000',
    monthlyPrice: '$200/mo',
    setupNote: '(more for complex sites like ecommerce)',
    monthlyNote: '(retainer for Forte Care™, hosting, updates, and ongoing optimization)',
    description: 'Custom-coded website that establishes your professional online presence.',
    features: [
      'Custom-coded website',
      'Hosting + domain',
      'SEO-ready foundation', 
      'Ongoing Forte Care™ basic support'
    ],
    ctaText: 'Start My Website Foundation',
    popular: false
  },
  {
    id: 'growth',
    emoji: '🚀',
    name: 'Growth Systems',
    setupPrice: '$3,500–$7,500',
    monthlyPrice: '$300–$700/mo',
    setupNote: null,
    monthlyNote: null,
    description: 'Automation, AI workflows, lead capture, follow-ups, and dashboards.',
    features: [
      'Smart automation workflows',
      'AI-powered lead capture',
      'Automated follow-up systems',
      'Performance dashboards',
      'Lead routing & scoring'
    ],
    whyRange: 'Project complexity: Every business has unique needs, and some systems require more setup and integration than others. Pricing reflects the scope of what\'s needed to support your goals, processes, and long-term growth.',
    ctaText: 'Start My Growth System',
    popular: true
  },
  {
    id: 'endtoend',
    emoji: '⚡',
    name: 'End-to-End System',
    setupPrice: '$7,500–$15,000+',
    monthlyPrice: '$800–$1,500/mo',
    setupNote: null,
    monthlyNote: null,
    description: 'Full stack: website foundation + automation + integrations + dashboards + scaling layer.',
    features: [
      'Everything in Foundation & Growth',
      'Advanced CRM integrations',
      'Multi-location support',
      'Custom dashboard development',
      'Advanced workflow automation',
      'Priority Forte Care™ Pro support'
    ],
    whyRange: 'Scope varies depending on how many systems, integrations, or advanced automations a business needs.',
    ctaText: 'Build My End-to-End System',
    popular: false
  }
];

// Comparison table data for new structure
const comparisonFeatures = [
  { 
    feature: 'Custom Website',
    foundation: true,
    growth: false,
    endtoend: true
  },
  {
    feature: 'Hosting & Forte Care™',
    foundation: true,
    growth: false,
    endtoend: true
  },
  {
    feature: 'SEO-Ready Foundation',
    foundation: true,
    growth: false,
    endtoend: true
  },
  {
    feature: 'Smart Automation Workflows',
    foundation: false,
    growth: true,
    endtoend: true
  },
  {
    feature: 'AI-Powered Lead Capture',
    foundation: false,
    growth: true,
    endtoend: true
  },
  {
    feature: 'Automated Follow-ups',
    foundation: false,
    growth: true,
    endtoend: true
  },
  {
    feature: 'Performance Dashboards',
    foundation: false,
    growth: true,
    endtoend: true
  },
  {
    feature: 'Advanced CRM Integration',
    foundation: false,
    growth: false,
    endtoend: true
  },
  {
    feature: 'Multi-Location Support',
    foundation: false,
    growth: false,
    endtoend: true
  },
  {
    feature: 'Priority Forte Care™ Pro',
    foundation: false,
    growth: false,
    endtoend: true
  }
];

// Updated FAQ data 
const faqData = [
  {
    question: 'Can I start with just a website?',
    answer: 'Yes. Many clients begin with the Website Foundation as a starting point. From there, you can add automation, dashboards, and integrations over time as your business grows.'
  },
  {
    question: 'Why is there a setup fee?',
    answer: 'The setup fee covers the heavy lifting at the start—design, development, integrations, and system configuration. It\'s a one-time investment that ensures your foundation is solid before ongoing optimization begins.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'After 12 months, you own your website and systems. The monthly fee continues as a retainer for hosting, Forte Care™ updates, and ongoing improvements. If you\'d like to pause, downgrade, or upgrade, you have full flexibility.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Ownership transfers only after the 12-month minimum has been fulfilled. Before that period, you are leasing access to the system while we manage, optimize, and maintain it. This ensures we can deliver on the upfront investment we make in custom workflows and integrations.'
  },
  {
    question: 'Can I upgrade from Foundation to Growth or End-to-End later?',
    answer: 'Absolutely. Many clients start small and expand as they see results. Since everything we build is modular, upgrades are seamless without redoing your foundation.'
  },
  {
    question: 'Why does pricing show ranges?',
    answer: 'Because every business has different processes, goals, and tools. Some require deeper integrations or more advanced automations than others. The range reflects the scope of work needed to deliver measurable outcomes, not cookie-cutter services.'
  }
];

// Bundle savings information
const bundleSavings = {
  title: "Bundle & Save",
  description: "Bundling multiple system layers reduces cost compared to building them separately.",
  examples: [
    {
      name: "Foundation + Growth Bundle",
      savings: "Save up to 15%",
      description: "Perfect for businesses ready to automate lead capture and follow-up"
    },
    {
      name: "Growth + End-to-End Bundle", 
      savings: "Save up to 20%",
      description: "Complete automation and scaling solution for established businesses"
    }
  ]
};

// Main PricingPage component
export function PricingPage() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto text-center">
          <SimpleScrollReveal direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Simple, <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Transparent Pricing</span> Built for Growth
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4 text-center mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Every business has different goals and processes, so we build systems that scale with you. 
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Pricing reflects the scope of your project and the outcomes you want to achieve—not cookie-cutter packages.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DarkButton 
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-4 text-lg font-semibold"
              >
                👉 Book My Free Growth Snapshot
              </DarkButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Pricing Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-8">
            {pricingSolutions.map((solution, index) => (
              <SimpleScrollReveal key={solution.id} direction="up" delay={index * 100}>
                <div
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-2 ${
                    solution.popular
                      ? 'border-primary-500 relative'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Left: Title and Pricing */}
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                        <div className="text-4xl">{solution.emoji}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {solution.name}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div>
                          <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                            Setup: {solution.setupPrice}
                          </div>
                          {solution.setupNote && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {solution.setupNote}
                            </p>
                          )}
                        </div>
                        
                        <div>
                          <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                            Monthly: {solution.monthlyPrice}
                          </div>
                          {solution.monthlyNote && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {solution.monthlyNote}
                            </p>
                          )}
                        </div>
                      </div>

                      {solution.whyRange && (
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                            Why the range?
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {solution.whyRange}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Middle: Description */}
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {solution.description}
                      </p>
                    </div>

                    {/* Right: Features and CTA */}
                    <div>
                      <ul className="space-y-3 mb-6">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon name="check" className="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <DarkButton className="w-full">
                        {solution.ctaText}
                      </DarkButton>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle & Save Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {bundleSavings.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {bundleSavings.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {bundleSavings.examples.map((bundle, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center">
                  <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                    {bundle.savings}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {bundle.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {bundle.description}
                  </p>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-6xl mx-auto">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Compare Solutions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See what's included in each solution level
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left p-6 text-gray-900 dark:text-white font-semibold">
                        Features
                      </th>
                      <th className="text-center p-6 text-gray-900 dark:text-white font-semibold">
                        Foundation
                      </th>
                      <th className="text-center p-6 text-gray-900 dark:text-white font-semibold bg-primary-50 dark:bg-primary-900/20">
                        Growth
                      </th>
                      <th className="text-center p-6 text-gray-900 dark:text-white font-semibold">
                        End-to-End
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="p-6 text-gray-600 dark:text-gray-300">
                          {feature.feature}
                        </td>
                        <td className="text-center p-6">
                          {feature.foundation ? (
                            <Icon name="check" className="w-5 h-5 text-primary-500 dark:text-primary-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400 dark:text-gray-500">—</span>
                          )}
                        </td>
                        <td className="text-center p-6 bg-primary-50 dark:bg-primary-900/20">
                          {feature.growth ? (
                            <Icon name="check" className="w-5 h-5 text-primary-500 dark:text-primary-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400 dark:text-gray-500">—</span>
                          )}
                        </td>
                        <td className="text-center p-6">
                          {feature.endtoend ? (
                            <Icon name="check" className="w-5 h-5 text-primary-500 dark:text-primary-400 mx-auto" />
                          ) : (
                            <span className="text-gray-400 dark:text-gray-500">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about our pricing and services
              </p>
            </div>

            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container max-w-4xl mx-auto text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Build Your Growth System?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss which solution makes sense for your business goals and create a custom growth plan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DarkButton 
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-4 text-lg font-semibold"
              >
                👉 Book My Free Growth Snapshot
              </DarkButton>
              
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300"
              >
                👉 Start My System
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Growth Snapshot Form Modal */}
      {showGrowthSnapshotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                  Book Your Free Growth Snapshot
                </h3>
                <button
                  onClick={() => setShowGrowthSnapshotForm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <Icon name="x" className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Name *
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your Business Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website URL
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="https://yourbusiness.com (if you have one)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Which solution interests you most?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
                    <option>Website Foundation (Starting at $2,000 + $200/mo)</option>
                    <option>Growth Systems ($3,500–$7,500 + $300–$700/mo)</option>
                    <option>End-to-End System ($7,500–$15,000+ + $800–$1,500/mo)</option>
                    <option>Not sure - help me decide</option>
                  </select>
                </div>
                <button
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                  onClick={() => setShowGrowthSnapshotForm(false)}
                >
                  Book My Free Growth Snapshot →
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We'll only use your info to prepare your audit. No spam, no sales calls unless you ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
