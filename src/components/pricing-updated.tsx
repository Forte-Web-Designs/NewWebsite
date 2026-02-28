'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

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
    answer: 'Setup covers custom development, CRM buildout, and automation wiring - once done, the system runs smoothly.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'Your plan continues month-to-month. Cancel anytime after the first year.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Yes. Everything we build for you is yours - website, automations, CRM setup.'
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
                👉 Book My Free Growth Snapshot
              </DarkButton>
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
