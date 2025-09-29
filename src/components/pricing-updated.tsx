'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
// Component will have its own modal

// Growth System Layers - New Pricing Structure
const pricingPlans = [
  {
    id: 'foundation',
    emoji: '🏗️',
    name: 'Foundation',
    description: 'Website Layer',
    setupFee: '$500',
    monthlyPrice: '$200',
    ctaText: '👉 Start My Foundation',
    features: [
      '✅ Custom-coded 5-page website',
      '✅ Hosting + domain included',
      '✅ SEO-ready foundation',
      '✅ Forte Care™ basic support'
    ],
    popular: false
  },
  {
    id: 'growth',
    emoji: '⚡',
    name: 'Growth Layer',
    description: 'Automation',
    setupFee: '$1,500',
    monthlyPrice: '$300',
    ctaText: '👉 Start My Growth Layer',
    features: [
      '✅ Smart reception system (24/7 missed-call reply)',
      '✅ Automated SMS/email follow-up',
      '✅ Booking calendar + reminders',
      '✅ Lead dashboard reporting'
    ],
    popular: false
  },
  {
    id: 'scaling',
    emoji: '📊',
    name: 'Scaling Layer',
    description: 'Business Systems',
    setupFee: '$3,500',
    monthlyPrice: '$500',
    ctaText: '👉 Start My Scaling Layer',
    features: [
      '✅ CRM setup & automation',
      '✅ Advanced dashboards & reporting',
      '✅ Lead routing + multi-location support',
      '✅ Workflow automations'
    ],
    popular: false
  },
  {
    id: 'prosystems',
    emoji: '🚀',
    name: 'Pro Systems',
    description: 'Best ROI – All Layers',
    setupFee: '$4,500',
    monthlyPrice: '$800',
    ctaText: '👉 Get My Pro System',
    features: [
      '✅ Foundation + Growth + Scaling combined',
      '✅ Forte Care™ Pro (priority support + advanced optimization)',
      '✅ Best ROI, fastest results'
    ],
    popular: true
  }
];

// Bundle & Save pricing table
const bundleOptions = [
  {
    name: 'Foundation + Growth',
    setup: '$1,750',
    monthly: '$450/mo',
    savings: 'Save $50/mo',
    description: 'Website + Smart Automation (reception system, follow-up, booking, dashboard)'
  },
  {
    name: 'Growth + Scaling',
    setup: '$4,500',
    monthly: '$700/mo',
    savings: 'Save $100/mo',
    description: 'Automation + Business Systems Integration (AI + CRM + dashboards + multi-location)'
  },
  {
    name: 'Pro (All 3 Layers)',
    setup: '$4,500',
    monthly: '$800/mo',
    savings: 'Save $200/mo',
    description: 'Everything + Forte Care™ Pro priority support'
  }
];



// Comparison table data
const comparisonFeatures = [
  { 
    feature: 'Custom Website (5 pages)',
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

// FAQ data for Growth Systems Pricing
const faqData = [
  {
    question: 'Can I start with just the Foundation?',
    answer: 'Yes. Many clients start with the Foundation and add Growth or Scaling later.'
  },
  {
    question: 'Can I add Growth or Scaling without a Foundation?',
    answer: 'Yes. If you already have a site you like, we can integrate Growth and Scaling layers on top.'
  },
  {
    question: 'Why do you charge a setup fee?',
    answer: 'Setup covers custom development, CRM buildout, and automation wiring — once done, the system runs smoothly.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'Your plan continues month-to-month. Cancel anytime after the first year.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Yes. Everything we build for you is yours — website, automations, CRM setup.'
  },
  {
    question: 'Can I pay one-time instead of monthly?',
    answer: 'One-time pricing is only available for Foundation websites. All Growth and Scaling layers require ongoing optimization and monitoring.'
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
              Simple, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Transparent Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-6">
              Growth shouldn't be complicated. With Forte, you start with a Foundation, then add Growth and Scaling layers as your business expands.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Every plan includes Forte Care™ support, hosting, and ongoing optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DarkButton 
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
              >
                👉 Book My Free Growth Audit
              </DarkButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Monthly Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Monthly Plans
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 ${
                    plan.popular
                      ? 'border-orange-500 relative'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Best ROI
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">{plan.emoji}</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Setup:
                      </div>
                      <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                        {plan.setupFee}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        Monthly:
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {plan.monthlyPrice}<span className="text-lg text-gray-500">/mo</span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        (12-month minimum)
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8 text-sm text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setShowGrowthSnapshotForm(true)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-orange-600 hover:bg-orange-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Bundle & Save Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-full mb-4 border border-orange-200 dark:border-orange-700">
                <span className="text-2xl">💡</span>
                <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">
                  Bundle & Save
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Bundle & Save
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Most clients choose <strong>Growth + Scaling together</strong> for the fastest ROI. Bundling reduces monthly cost and accelerates results.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Bundle</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Setup Fee</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Monthly</th>
                    <th className="text-center py-4 px-4 font-bold text-orange-600 dark:text-orange-400">Savings</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  {bundleOptions.map((bundle, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                        <strong>{bundle.name}</strong>
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-orange-600 dark:text-orange-400">
                        {bundle.setup}
                      </td>
                      <td className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white">
                        {bundle.monthly}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full text-sm font-semibold">
                          {bundle.savings}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                        {bundle.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                👉 Get My Bundle Quote
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Compare All Features
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See exactly what's included in each layer
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Foundation</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Growth Layer</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Scaling Layer</th>
                    <th className="text-center py-4 px-4 font-bold text-green-600 dark:text-green-400">Pro Systems</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.foundation ? 'text-green-500 text-xl' : 'text-red-500 text-xl'}>
                          {row.foundation ? '✅' : '❌'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.growth ? 'text-green-500 text-xl' : 'text-red-500 text-xl'}>
                          {row.growth ? '✅' : '❌'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.scaling ? 'text-green-500 text-xl' : 'text-red-500 text-xl'}>
                          {row.scaling ? '✅' : '❌'}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={row.pro ? 'text-green-500 text-xl' : 'text-red-500 text-xl'}>
                          {row.pro ? '✅' : '❌'}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto">
          <SimpleScrollReveal direction="up" delay={600}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <details className="group">
                    <summary className="cursor-pointer px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                      <Icon
                        name="down-arrow"
                        className="w-4 h-4 text-gray-500 transition-transform duration-200 group-open:rotate-180"
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container max-w-4xl mx-auto text-center">
          <SimpleScrollReveal direction="up" delay={700}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build your growth system?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you're starting with a Foundation or scaling across multiple locations, Forte has a clear path forward.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                👉 Book My Free Growth Audit
              </button>
              <button
                onClick={() => setShowGrowthSnapshotForm(true)}
                className="bg-orange-600 hover:bg-orange-700 text-white border-2 border-orange-400 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
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
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Business Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your Business Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Website URL (if you have one)
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="https://yourbusiness.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Which layer interests you most?
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
                    <option>Foundation (Website)</option>
                    <option>Growth Layer (Automation)</option>
                    <option>Scaling Layer (Business Systems)</option>
                    <option>Pro Systems (All Layers)</option>
                    <option>Not sure - help me decide</option>
                  </select>
                </div>
                <button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                  onClick={() => setShowGrowthSnapshotForm(false)}
                >
                  Get My Free Growth Snapshot
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
