'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

// New Systems-Based Pricing Structure
const pricingTiers = [
  {
    id: 'foundation',
    emoji: '🏗️',
    name: 'Foundation Website',
    price: 'Starting at $2,000 + $200/mo',
    subtitle: '(One-time setup fee + ongoing retainer)',
    description: 'Custom-coded website that captures leads and provides the foundation for growth.',
    features: [
      'Custom-coded website (5+ pages)',
      'Mobile-responsive + SEO-ready',
      'Hosting, domain, and Forte Care™ support',
      'Optimized for conversions and future upgrades'
    ],
    note: 'Ecommerce websites (shopping carts, checkout systems, product catalogs) start at $5,000+ due to added complexity and integrations.',
    ctaText: 'Start My Foundation',
    popular: false
  },
  {
    id: 'growth',
    emoji: '⚡',
    name: 'Growth Layer - Automation',
    price: '$3,500–$7,500 + $300–$600/mo',
    subtitle: null,
    description: 'Smart automations that turn inquiries into booked jobs and deals.',
    features: [
      'Smart reception system (missed-call → instant reply)',
      'Automated SMS/email follow-up',
      'Booking calendar + reminders',
      'Lead dashboard + reporting'
    ],
    note: null,
    ctaText: 'Add Growth Layer',
    popular: true
  },
  {
    id: 'scaling',
    emoji: '📊',
    name: 'Scaling Layer - Business Systems', 
    price: '$5,000–$12,000 + $500–$1,000/mo',
    subtitle: null,
    description: 'Complete business command center with CRM, dashboards, and integrated automations.',
    features: [
      'CRM setup & automation',
      'Advanced dashboards & reporting',
      'Multi-location + lead routing',
      'Workflow automations'
    ],
    note: null,
    ctaText: 'Add Scaling Layer',
    popular: false
  },
  {
    id: 'pro',
    emoji: '🚀',
    name: 'Pro Systems - All Layers',
    price: 'Custom Quote (typically $10k–$20k + $800–$1,500/mo)',
    subtitle: null,
    description: 'Foundation + Growth + Scaling combined for maximum ROI and fastest implementation.',
    features: [
      'Foundation + Growth + Scaling combined',
      'Forte Care™ Pro (priority support + optimization)',
      'Best ROI, fastest implementation'
    ],
    note: null,
    ctaText: 'Get My Pro System',
    popular: false
  }
];

// Comparison table data
const comparisonFeatures = [
  { 
    feature: 'Custom Website (5+ pages)',
    foundation: true,
    growth: true, 
    scaling: true,
    pro: true
  },
  {
    feature: 'Hosting & Forte Care™',
    foundation: true,
    growth: true,
    scaling: true, 
    pro: true
  },
  {
    feature: 'Smart Reception System',
    foundation: false,
    growth: true,
    scaling: true,
    pro: true
  },
  {
    feature: 'Automated Follow-Up (SMS/Email)',
    foundation: false,
    growth: true,
    scaling: true,
    pro: true
  },
  {
    feature: 'Booking & Calendar Integration',
    foundation: false,
    growth: true,
    scaling: true,
    pro: true
  },
  {
    feature: 'CRM Setup & Dashboards',
    foundation: false,
    growth: false,
    scaling: true,
    pro: true
  },
  {
    feature: 'Workflow Automations',
    foundation: false,
    growth: false,
    scaling: true,
    pro: true
  },
  {
    feature: 'Multi-Location Support',
    foundation: false,
    growth: false,
    scaling: true,
    pro: true
  },
  {
    feature: 'Forte Care™ Pro (Priority)',
    foundation: false,
    growth: false,
    scaling: false,
    pro: true
  }
];

// Updated FAQ data aligned with new pricing structure
const faqData = [
  {
    question: 'Why do Growth/Scaling have ranges?',
    answer: 'Because complexity varies by workflows, integrations, and industry. Pricing depends on scope of work, industry complexity, and growth goals - not company size.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Ownership transfers only after the 12-month minimum has been fulfilled. Before that period, you are leasing access to the system while we manage, optimize, and maintain it. This ensures we can deliver on the upfront investment we make in custom workflows and integrations.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'After 12 months, you own your website and systems. The monthly fee continues as a retainer for hosting, Forte Care™ updates, and ongoing improvements. If you\'d like to pause, downgrade, or upgrade, you have full flexibility.'
  },
  {
    question: 'Do you offer one-time projects?',
    answer: 'Only Foundation websites can be one-time projects. Growth & Scaling are ongoing systems that require continuous optimization and monitoring.'
  },
  {
    question: 'Can I start with just Foundation and add layers later?',
    answer: 'Absolutely! Most clients start with Foundation, then add Growth or Scaling layers as their business grows and needs evolve.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Foundation: 2-4 weeks. Growth Layer: 4-8 weeks. Scaling Layer: 6-12 weeks. We deliver in phases so you see results quickly.'
  }
];

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
              Simple, <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Transparent Pricing</span>
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-4 text-center">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Growth shouldn't be complicated. At Forte, every project starts with a <strong>Foundation website</strong> - then layers of <strong>Automation</strong> and <strong>Systems</strong> can be added as you grow.
              </p>
              
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Every plan includes Forte Care™ hosting, updates, and ongoing optimization.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mt-8">
              <DarkButton 
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
              >
                👉 Book My Free Growth Snapshot
              </DarkButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-8">
            {pricingTiers.map((tier, index) => (
              <SimpleScrollReveal key={tier.id} direction="up" delay={index * 100}>
                <div
                  className={`bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border-2 ${
                    tier.popular
                      ? 'border-primary-500 relative'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Left: Title and Pricing */}
                    <div className="text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                        <div className="text-4xl">{tier.emoji}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {tier.name}
                          </h3>
                          <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                            {tier.price}
                          </div>
                          {tier.subtitle && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {tier.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {tier.description}
                      </p>
                      
                      {tier.note && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-4">
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Note:</strong> {tier.note}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Middle: Features */}
                    <div>
                      <div className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Right: CTA */}
                    <div className="text-center">
                      <button
                        onClick={() => setShowGrowthSnapshotForm(true)}
                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all hover:scale-105 ${
                          tier.popular
                            ? 'bg-primary-600 hover:bg-primary-700 text-white'
                            : 'bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100'
                        }`}
                      >
                        👉 {tier.ctaText}
                      </button>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why a Range? Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12 text-center">
              <div className="text-5xl mb-6">💡</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why a Range?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Every business is unique. Pricing depends on:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="text-3xl mb-3">📋</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Scope of Work</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Number of pages, integrations, automations, and custom workflows needed for your business.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="text-3xl mb-3">🏢</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industry Complexity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare vs. plumbing vs. ecommerce - each has different compliance, integration, and workflow needs.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth Goals</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Basic online presence vs. multi-location system vs. full business automation platform.</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We'll give you a <strong>clear, custom quote</strong> after your free Growth Snapshot.
              </p>
              
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-all hover:scale-105"
              >
                👉 Get My Custom Quote
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-6xl mx-auto">
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What's Included in Each Tier
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Compare features across Foundation, Growth, Scaling, and Pro Systems
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Foundation</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Growth</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Scaling</th>
                    <th className="text-center py-4 px-4 font-bold text-primary-600 dark:text-primary-400">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.foundation ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'}>
                          {row.foundation ? '✅' : '-'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.growth ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'}>
                          {row.growth ? '✅' : '-'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.scaling ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'}>
                          {row.scaling ? '✅' : '-'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.pro ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'}>
                          {row.pro ? '✅' : '-'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-4xl mx-auto">
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <details className="group">
                    <summary className="cursor-pointer px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-left">
                        {faq.question}
                      </h3>
                      <Icon
                        name="down-arrow"
                        className="w-4 h-4 text-gray-500 transition-transform duration-200 group-open:rotate-180 flex-shrink-0 ml-4"
                      />
                    </summary>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container max-w-4xl mx-auto text-center">
          <SimpleScrollReveal direction="up" delay={500}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build your growth system?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Whether you're starting with Foundation or scaling across multiple locations, Forte has a clear path forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                👉 Book My Free Growth Snapshot
              </button>
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-primary-800 hover:bg-primary-900 text-white border-2 border-primary-400 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                👉 Start My System
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Growth Snapshot Form Modal */}
      {showGrowthSnapshotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
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
                We'll analyze your current setup and show you exactly where opportunities are slipping through the cracks - plus give you 2-3 quick wins you can implement immediately.
              </p>
              
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
                    Which system interests you most?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white">
                    <option>Foundation Website ($2,000 + $200/mo)</option>
                    <option>Growth Layer ($3.5K-$7.5K + $300-$600/mo)</option>
                    <option>Scaling Layer ($5K-$12K + $500-$1K/mo)</option>
                    <option>Pro Systems (All Layers)</option>
                    <option>Not sure - help me decide</option>
                  </select>
                </div>
                <button
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                  onClick={() => setShowGrowthSnapshotForm(false)}
                >
                  Get My Free Growth Snapshot →
                </button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We'll only use your info to prepare your snapshot. No spam, no sales calls unless you ask.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
