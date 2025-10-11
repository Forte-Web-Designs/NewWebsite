'use client';

import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

const pricingTiers = [
  {
    name: 'Website',
    price: '$2,000',
    period: 'starting at',
    description: 'High-converting website that turns visitors into customers and pays for itself',
    features: [
      'Custom strategy & positioning',
      'Professional design & development',
      'Mobile-responsive & SEO optimized',
      'Lead capture & conversion optimization',
      'Analytics & tracking setup',
      'Training & documentation',
      '60 days of support & optimization'
    ],
    cta: 'Book Strategy Call',
    href: '/contact',
    badge: 'Best for New Brands',
    badgeColor: 'bg-green-600',
    roi: 'Average ROI: 3-5x in first year'
  },
  {
    name: 'Automation',
    price: '$3,500',
    period: 'starting at',
    description: 'AI-powered automation that saves 20+ hours per week and eliminates manual work',
    features: [
      'Custom workflow automation',
      'CRM & tool integrations',
      'Intelligent lead routing',
      'Email & SMS automation',
      'Real-time notifications & alerts',
      'Dashboard & reporting',
      'Continuous optimization & support'
    ],
    cta: 'Book Strategy Call',
    href: '/contact',
    badge: 'Biggest Time Saver',
    badgeColor: 'bg-purple-600',
    roi: 'Typical time savings: 20-40 hrs/week'
  },
  {
    name: 'Complete System',
    price: '$5,000+',
    period: 'custom pricing',
    description: 'End-to-end business system with automation, CRM, analytics, and everything you need to scale',
    features: [
      'Full business automation suite',
      'CRM setup & sales pipeline optimization',
      'Lead capture, routing & nurture sequences',
      'Multi-channel marketing automation',
      'Custom dashboards & real-time analytics',
      'Team training & documentation',
      'Dedicated project manager',
      'Priority support & continuous optimization'
    ],
    cta: 'Book Strategy Call',
    href: '/contact',
    popular: true,
    badge: 'Best Value',
    badgeColor: 'bg-blue-600',
    roi: 'Typical revenue impact: 2-10x in 12 months'
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <SimpleScrollReveal direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Invest in growth, not expenses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
            Custom solutions designed to deliver measurable ROI and scale your business
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Every project is tailored to your unique goals. Pricing reflects scope, complexity, and expected outcomes.
          </p>
        </SimpleScrollReveal>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
              <div
                className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? 'ring-2 ring-blue-600 shadow-xl'
                    : 'ring-1 ring-gray-200 dark:ring-gray-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className={`${tier.badgeColor} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {tier.description}
                  </p>
                  {tier.roi && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full">
                      <Icon
                        name="check"
                        className="w-4 h-4 text-green-600"
                      />
                      <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                        {tier.roi}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon
                        name="check"
                        className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.href}
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>

        {/* Monthly Retainer Options */}
        <SimpleScrollReveal direction="up">
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Prefer ongoing partnership?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              For businesses that want continuous optimization and dedicated support, we offer monthly retainer options.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Maintenance
                </h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">$250</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">/month</div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Hosting & security updates
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Performance monitoring
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Email support
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Monthly reports
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-xl p-6">
                <div className="text-xs font-semibold text-blue-600 mb-2">RECOMMENDED</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Growth Partner
                </h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">$750</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">/month</div>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Everything in Maintenance
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    5 hours development/month
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Monthly optimization & improvements
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    Priority support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* FAQ */}
        <SimpleScrollReveal direction="up">
          <div className="max-w-3xl mx-auto mt-24">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Frequently asked questions
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What's included that makes this worth the investment?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Strategic consulting, custom development (not templates), optimization, training, and ongoing support. Our approach is designed for ROI—clients typically see 3-10x returns within the first year, meaning the investment pays for itself.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What's included in the investment?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Discovery & strategy, custom design/development, testing & QA, training & documentation, launch support, and 30 days of post-launch optimization. Final pricing is determined after we understand your specific goals and requirements.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  How do I know if this will work for my business?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Book a free strategy call. We'll analyze your current situation, identify opportunities, and provide a clear roadmap with projected ROI. No pressure, no obligation—just honest assessment of whether we're a good fit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer payment plans?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes. We typically split projects into 50% upfront and 50% on completion. For larger projects ($20K+), we offer milestone-based payment schedules to align with deliverables.
                </p>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* CTA */}
        <SimpleScrollReveal direction="up">
          <div className="max-w-3xl mx-auto mt-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to scale your business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Book a free strategy call. We'll analyze your situation, identify opportunities, and provide a clear roadmap with projected ROI—no pressure, no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-600 dark:hover:bg-white transition-all duration-200"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
        </SimpleScrollReveal>
      </div>
    </div>
  );
}
