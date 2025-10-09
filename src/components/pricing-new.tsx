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
    description: 'Automation & AI',
    setupFee: '$1,500',
    monthlyPrice: '$300',
    subtitle: 'Add AI & Automation',
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
    subtitle: 'Add-On for Growing Businesses',
    ctaText: 'Start My Scaling Layer',
    features: [
      'CRM setup (HubSpot, Zoho, GoHighLevel)',
      'Advanced dashboards & reporting',
      'Lead routing & scoring',
      'Workflow automations',
      'Multi-location support',
      'Team training & onboarding',
      'Priority Forte Care™ support'
    ],
    popular: false,
    requiresFoundation: true
  },
  {
    id: 'prosystems',
    name: 'Pro Systems',
    description: 'Complete Growth System',
    setupFee: '$7,500',
    monthlyPrice: '$1,000',
    subtitle: 'All Layers Combined',
    ctaText: 'Get Pro Systems',
    features: [
      'Everything in all 3 layers',
      'Advanced automation workflows',
      'Premium dashboards & analytics', 
      'Multi-location CRM setup',
      'Priority support & training',
      'Quarterly strategy reviews',
      'White-glove Forte Care™ premium'
    ],
    popular: false,
    isBundle: true
  }
];

// Bundle savings information
const bundleSavings = {
  title: "Bundle & Save",
  description: "Most clients choose Growth + Scaling together for the best ROI. Save 15% when bundling multiple layers.",
  combinations: [
    {
      name: "Foundation + Growth",
      setupFee: "$3,500", 
      monthlyPrice: "$425",
      originalMonthly: "$500",
      savings: "$75/mo"
    },
    {
      name: "Foundation + Scaling",
      setupFee: "$5,500",
      monthlyPrice: "$600", 
      originalMonthly: "$700",
      savings: "$100/mo"
    },
    {
      name: "All Three Layers",
      setupFee: "$6,500",
      monthlyPrice: "$850",
      originalMonthly: "$1,000", 
      savings: "$150/mo"
    }
  ]
};

// Forte Care™ standalone pricing for one-time customers
const forteCareOptions = [
  {
    name: 'Forte Care™ Basic',
    monthlyPrice: '$150',
    description: 'For Foundation websites',
    features: [
      'Security monitoring & updates',
      'Performance optimization', 
      'Basic analytics reporting',
      'Email support (48hr response)',
      'Monthly backups'
    ]
  },
  {
    name: 'Forte Care™ Growth',
    monthlyPrice: '$300',
    description: 'For automation systems',
    features: [
      'Everything in Basic',
      'AI system fine-tuning',
      'Automation optimization',
      'Advanced reporting',
      'Priority support (24hr response)'
    ]
  },
  {
    name: 'Forte Care™ Pro',
    monthlyPrice: '$500',
    description: 'For complete systems',
    features: [
      'Everything in Growth', 
      'CRM optimization & training',
      'Advanced dashboard management',
      'Multi-location support',
      'Phone support (4hr response)'
    ]
  }
];

// Updated FAQ data for Growth Systems
const faqData = [
  {
    question: 'Why do you charge a setup fee?',
    answer: 'Setup fees cover the intensive work of building your custom system - from website development to CRM configuration and automation setup. This ensures you get a fully customized solution rather than a generic template. The monthly fee then covers hosting, maintenance, and ongoing optimization.'
  },
  {
    question: 'What happens after the 12-month minimum?',
    answer: 'After your initial 12 months, your plan automatically becomes month-to-month with no long-term commitment. You can cancel, upgrade, downgrade, or continue as-is. The 12-month minimum allows us to recoup setup costs while providing premium ongoing support at affordable monthly rates.'
  },
  {
    question: 'Can I add layers later?',
    answer: 'Absolutely! Our Growth System is designed to scale with your business. Start with Foundation, then add Growth Layer when ready for automation, and Scaling Layer when you need advanced systems integration. We credit previous investments when upgrading.'
  },
  {
    question: "What's included in Forte Care™?",
    answer: 'Forte Care™ includes unlimited website edits (content, images, pages, design tweaks), 24/7 security monitoring, performance optimization, automated backups, uptime monitoring, and priority technical support. The key value-add is unlimited edits – need to add a new service page, update your hours, or refresh your content? It\'s all included with no extra fees. Growth and Scaling layers include advanced features like system optimization, automation improvements, and CRM management.'
  },
  {
    question: 'Do I own my system if I cancel?',
    answer: 'Yes! You own your website, content, and data. However, advanced integrations and automations may require ongoing maintenance to function properly. We provide transition assistance and can export your data when needed.'
  },
  {
    question: 'Can I pay one-time instead of monthly?',
    answer: 'Yes! Foundation websites are available for $4,500 one-time payment. However, Growth and Scaling layers require ongoing maintenance and optimization, so they\'re only available as monthly services. You can add optional Forte Care™ maintenance for $150/month.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Foundation websites typically take 2-3 weeks. Growth Layer automation setup takes 1-2 weeks. Scaling Layer CRM integration takes 2-4 weeks. Pro Systems (all layers) typically complete within 4-6 weeks total.'
  },
  {
    question: 'Do you provide training?',
    answer: 'Yes! All layers include comprehensive training for your team. Foundation includes website management training, Growth Layer includes automation system training, and Scaling Layer includes full CRM and dashboard training with ongoing support.'
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6">
              Simple, <span className="text-green-600 dark:text-green-400">Transparent Pricing</span>
            </h1>
            <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Start with a website foundation, then add Growth and Scaling layers as your business expands. Every plan includes Forte Care™ support, hosting, and ongoing optimization.
            </p>
            
            <PricingToggle isMonthly={isMonthly} onToggle={setIsMonthly} />
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Growth System Plans Grid */}
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
                        Most Popular
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
                          Setup Fee
                        </div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                          {plan.setupFee}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          Then
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
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                          {plan.oneTimePrice || 'Add-On Only'}
                        </div>
                        {plan.requiresFoundation && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Requires Foundation
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

      {/* Bundle & Save Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50 dark:bg-green-900/10">
        <div className="container max-w-5xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {bundleSavings.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {bundleSavings.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bundleSavings.combinations.map((combo, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {combo.name}
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Setup: {combo.setupFee}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {combo.monthlyPrice}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {combo.originalMonthly}
                    </span>
                  </div>
                  <div className="text-green-600 dark:text-green-400 font-semibold">
                    Save {combo.savings}
                  </div>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* One-Time Option Section */}
      {!isMonthly && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  One-Time Foundation Website
                </h3>
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                    $4,500
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    Custom website with full ownership
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 mb-6">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Optional Forte Care™ Maintenance
                  </h4>
                  <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                    Keep your website secure, fast, and updated with our optional maintenance plan for $150/month.
                  </p>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Get One-Time Website
                  </button>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-4xl mx-auto">
          <SimpleScrollReveal direction="up" delay={500}>
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
          <SimpleScrollReveal direction="up" delay={600}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Growth System?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Let's discuss which layers make sense for your business goals and create a custom growth plan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-white">
                <span className="text-lg">📞</span>
                <span className="text-lg font-semibold">(817) 873-6655</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-lg">📧</span>
                <a href="mailto:seth@fortewebdesigns.com" className="text-lg font-semibold hover:text-green-200 transition-colors">
                  seth@fortewebdesigns.com
                </a>
              </div>
            </div>

            <button
              onClick={() => setShowContactModal(true)}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Start My Growth System
            </button>
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
