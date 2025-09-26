'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import ContactModal from './ContactModal';

// New Growth Systems Partner Model - 4-card pricing structure
const growthSystemPlans = [
  {
    id: 'foundation',
    name: 'Foundation',
    description: 'Website',
    setupFee: '$500',
    monthlyPrice: '$200',
    oneTimePrice: '$4,500',
    subtitle: 'Essential Starting Point',
    ctaText: 'Start My Website Foundation',
    features: [
      'Custom-coded 5-page website',
      'Hosting + domain included',
      'SEO-ready foundation',
      'Forte Care™ basic support'
    ],
    popular: false
  },
  {
    id: 'growth',
    name: 'Growth Layer',
    description: 'Smart Automation',
    setupFee: '$1,500',
    monthlyPrice: '$300',
    subtitle: 'Add Smart Automation',
    ctaText: 'Start My Growth Layer',
    features: [
      'Smart reception system 24/7',
      'Automated SMS/email follow-up',
      'Booking calendar + reminders',
      'Lead dashboard reporting'
    ],
    popular: false,
    requiresFoundation: true
  },
  {
    id: 'scaling',
    name: 'Scaling Layer',
    description: 'Business Systems Integration',
    setupFee: '$3,500',
    monthlyPrice: '$500',
    subtitle: 'Systems & CRM Integration',
    ctaText: 'Start My Scaling Layer',
    features: [
      'CRM setup & automation',
      'Advanced dashboards & reporting',
      'Lead routing + multi-location support',
      'Workflow automations'
    ],
    popular: false,
    requiresFoundation: true
  },
  {
    id: 'prosystems',
    name: 'Pro Systems',
    description: 'All Layers',
    setupFee: '$4,500',
    monthlyPrice: '$800',
    subtitle: 'Bundle Discount - Best ROI',
    ctaText: 'Get My Pro System',
    features: [
      'Foundation + Growth + Scaling combined',
      'Forte Care™ Pro included (priority support + advanced optimization)',
      'Best ROI, fastest results'
    ],
    popular: true,
    isBundle: true
  }
];

// Bundle & Save information
const bundleSavings = {
  title: "Bundle & Save",
  description: "Most clients choose Growth + Scaling together for the best ROI. Save 20% when bundling multiple layers."
};

// Forte Care™ standalone pricing
const forteCareOptions = [
  {
    name: 'Basic',
    monthlyPrice: '$150',
    description: 'Foundation only',
    features: [
      'Security monitoring & updates',
      'Performance optimization', 
      'Basic analytics reporting',
      'Email support'
    ]
  },
  {
    name: 'Growth', 
    monthlyPrice: '$300',
    description: 'Foundation + Growth',
    features: [
      'Everything in Basic',
      'AI system optimization',
      'Automation optimization',
      'Priority support'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: '$500',
    description: 'All layers',
    features: [
      'Everything in Growth',
      'CRM management & training',
      'Advanced dashboard optimization',
      'Phone support'
    ]
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

// Updated FAQ data for Growth Systems
const faqData = [
  {
    question: 'Can I start with just the Foundation?',
    answer: 'Absolutely! Most clients start with Foundation and add layers as their business grows. You can upgrade anytime and we credit your previous investment toward the new setup fees.'
  },
  {
    question: 'Can I add Growth or Scaling without a Foundation?',
    answer: 'Yes, but bundling saves money! You can add Growth or Scaling to an existing website, but our systems work best when integrated from the ground up with a Forte Foundation website.'
  },
  {
    question: 'Why do you charge a setup fee?',
    answer: 'Setup fees cover the intensive custom development work - website coding, CRM configuration, automation setup, and system integration. This ensures you get a fully customized solution, not a template. Monthly fees then cover hosting, maintenance, and ongoing optimization.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'After 12 months, your plan becomes month-to-month with no long-term commitment. You can cancel, upgrade, downgrade, or continue as-is. The initial commitment allows us to recoup setup costs while providing premium ongoing support.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Yes! You own your website, content, and data. However, advanced integrations and automations require ongoing maintenance to function properly. We provide transition assistance and can export your data when needed.'
  },
  {
    question: 'Why is One-Time Pricing only available for websites?',
    answer: 'A website is a finished product that can be delivered and owned outright. Growth and Scaling layers are living systems — they include automations, CRM workflows, and integrations that require continuous optimization. That\'s why these layers are only available as setup fee + monthly plans. This ensures your systems stay updated, optimized, and continue generating measurable results.'
  },
  {
    question: 'Can I pay one-time instead of monthly?',
    answer: 'Foundation websites are available for $4,500 one-time payment with optional Forte Care™ maintenance ($150/month). Growth, Scaling, and Pro Systems require ongoing optimization and are only available as monthly services for best results.'
  }
];

// Pricing toggle component  
interface PricingToggleProps {
  isMonthly: boolean;
  onToggle: (monthly: boolean) => void;
}

function PricingToggle({ isMonthly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-lg font-medium ${isMonthly ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isMonthly)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isMonthly ? 'bg-green-600' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isMonthly ? 'translate-x-1' : 'translate-x-6'
          }`}
        />
      </button>
      <span className={`text-lg font-medium ${!isMonthly ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
        One-Time
      </span>
    </div>
  );
}

// Main PricingPage component
export function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto text-center">
          <SimpleScrollReveal direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              Simple, <span className="text-green-600 dark:text-green-400">Transparent Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Start with a Foundation website, then add Growth and Scaling layers as your business expands. Every plan includes Forte Care™ support, hosting, and ongoing optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Book My Free Growth Audit
              </button>
              <Link href="/services" className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                View Service Layers
              </Link>
            </div>
            
            <PricingToggle isMonthly={isMonthly} onToggle={setIsMonthly} />
          </SimpleScrollReveal>
        </div>
      </section>

      {/* 4-Card Pricing Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthSystemPlans.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 ${
                    plan.popular
                      ? 'border-green-500 relative'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Best ROI
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    
                    {isMonthly ? (
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Setup
                        </div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {plan.setupFee}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          + Monthly
                        </div>
                        <div className="text-3xl font-bold text-gray-900 dark:text-white">
                          {plan.monthlyPrice}<span className="text-lg text-gray-500">/mo</span>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          12-month minimum
                        </div>
                      </div>
                    ) : (
                      <div className="mb-6">
                        {plan.id === 'foundation' ? (
                          <>
                            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                              {plan.oneTimePrice}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              One-time payment
                            </div>
                          </>
                        ) : (
                          <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                              Growth and Scaling layers require continuous optimization and are only available as setup + monthly plans. Only Foundation websites may be purchased one-time.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <ul className="space-y-3 mb-8 text-sm text-left">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <span className="text-green-500 mt-0.5">✅</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setShowContactModal(true)}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        plan.popular
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
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

      {/* Bundle Pricing Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full mb-4 border border-green-200 dark:border-green-700">
                <span className="text-2xl">💡</span>
                <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Bundle & Save
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Bundle Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Most clients choose Growth + Scaling together for the best ROI. Bundling multiple layers lowers your monthly cost and gives you the fastest path to results.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white">Bundle</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Setup Fee</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">Monthly</th>
                    <th className="text-center py-4 px-4 font-bold text-green-600 dark:text-green-400">Savings</th>
                    <th className="text-center py-4 px-4 font-bold text-gray-900 dark:text-white">What's Included</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      <strong>Foundation + Growth</strong>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-green-600 dark:text-green-400">
                      $1,750
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white">
                      $450/mo
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm font-semibold">
                        Save $50/mo
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                      Website + Smart Automation (reception system, follow-up, booking, lead dashboard)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      <strong>Growth + Scaling</strong>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-green-600 dark:text-green-400">
                      $4,500
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white">
                      $700/mo
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm font-semibold">
                        Save $100/mo
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                      Automation + Business Systems Integration (AI + CRM + dashboards + multi-location)
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      <strong>Foundation + Growth + Scaling (Pro)</strong>
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-green-600 dark:text-green-400">
                      $4,500
                    </td>
                    <td className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white">
                      $800/mo
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-sm font-semibold">
                        Save $200/mo
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                      All 3 layers + Forte Care™ Pro priority support
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 max-w-2xl mx-auto mb-6">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  <strong>Note:</strong> Bundles require ongoing optimization and are billed as setup + monthly plans. Only Foundation websites may be purchased one-time.
                </p>
              </div>
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Get My Bundle Quote
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

      {/* Bundle & Save Callout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto">
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12 text-center border border-green-200 dark:border-green-800">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {bundleSavings.title}
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {bundleSavings.description}
              </p>
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Learn About Bundles
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* One-Time Option Toggle */}
      {!isMonthly && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  One-Time Website Option
                </h3>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    $4,500
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    Foundation website - one-time payment
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 max-w-md mx-auto">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      <strong>Optional:</strong> Forte Care™ maintenance available for $150/month
                    </p>
                  </div>
                </div>
                
                <div className="text-center text-gray-600 dark:text-gray-400 mb-6">
                  <p>Growth, Scaling, and Pro Systems require ongoing optimization and are available as monthly services only.</p>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Get One-Time Quote
                  </button>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>
      )}

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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 dark:bg-green-800">
        <div className="container max-w-4xl mx-auto text-center">
          <SimpleScrollReveal direction="up" delay={700}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Growth System?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Whether you're starting with a Foundation or scaling across multiple locations, Forte has a clear path for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Book My Free Growth Audit
              </button>
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-green-700 hover:bg-green-800 text-white border-2 border-green-400 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Start My System
              </button>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </div>
  );
}
