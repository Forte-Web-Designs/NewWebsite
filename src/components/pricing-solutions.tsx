'use client';

import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

const pricingTiers = [
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
    description: 'End-to-end business system with custom software, automation, CRM, analytics, and everything you need to scale',
    features: [
      'Custom software & full automation suite',
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
  },
  {
    name: 'Website',
    price: '$2,000',
    period: 'starting at',
    description: 'Professional website that showcases your brand and converts visitors into customers',
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
    badge: 'Perfect Starting Point',
    badgeColor: 'bg-green-600',
    roi: 'Average ROI: 3-5x in first year'
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

      {/* Pricing Context Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Why We Show Our Pricing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Most consultants hide their pricing because they're optimizing for the transaction. We don't. We believe in transparency because we're optimizing for relationships.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ROI-Focused Pricing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every investment should pay for itself. Our clients typically see 3-10x returns within 12 months, with most projects paying for themselves in 1-3 months. We're not cheap, but we're profitable.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Custom Work, Not Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                You'll never get a WordPress template or a generic Zapier flow from us. Everything is custom-built for your specific business. That costs more upfront, but it's the difference between software that breaks and software that scales.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                No Hidden Costs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Every proposal includes the gotchas, the hidden costs, the potential roadblocks. Free, no contract required. We prove value before asking for commitment.
              </p>
            </div>
          </div>
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 rounded-full border border-amber-200 dark:border-amber-800">
                      <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-semibold text-amber-700 dark:text-amber-400">
                        {tier.roi}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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

        {/* Custom Software Callout */}
        <SimpleScrollReveal direction="up">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Custom Software?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Building custom dashboards, internal tools, or specialized applications? Projects are scoped individually based on your workflow, requirements, and expected outcomes. Book a strategy call and we'll provide a detailed proposal with timeline and investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/services/custom-software"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200"
                >
                  View Custom Software Services
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </SimpleScrollReveal>

        {/* Monthly Retainer Options */}
        <SimpleScrollReveal direction="up">
          <div className="max-w-6xl mx-auto mb-24">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Prefer Ongoing Partnership?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              For businesses that want continuous optimization, dedicated support, and peace of mind knowing your systems are always running at peak performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Essential Care */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Essential Care
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$497</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Keep your systems running smoothly with proactive monitoring and support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Hosting, security & performance monitoring
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Monthly performance reports
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority email support (24-hour response)
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Software updates & maintenance
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    2 hours of development/optimization per month
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>

              {/* Growth Partner - RECOMMENDED */}
              <div className="bg-white dark:bg-gray-900 border-2 border-blue-600 rounded-xl p-6 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    RECOMMENDED
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Growth Partner
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$997</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Everything you need to continuously improve and scale your systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Essential Care
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    8 hours of development/optimization per month
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Proactive recommendations & strategy
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Monthly optimization & A/B testing
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority phone & Slack support
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Quarterly system audits
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    First priority on urgent requests
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>

              {/* Priority Partner */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Priority Partner
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$1,997</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  White-glove service with dedicated attention for mission-critical operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Growth Partner
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    20 hours of development/optimization per month
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated account manager
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Same-day response on all requests
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom reporting & analytics
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Quarterly strategy sessions
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    After-hours emergency support
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 dark:text-gray-300">
                Need more than 20 hours per month? Contact us for custom enterprise support packages.
              </p>
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
                  Strategic consulting, custom development (not templates), optimization, training, and ongoing support. Our approach is designed for ROI. Clients typically see 3-10x returns within the first year, meaning the investment pays for itself.
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
                  How much does custom software development cost?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom software projects typically range from $5,000-$50,000+ depending on complexity. After our discovery call, we provide detailed project estimates with clear timelines and deliverables. All projects include source code ownership, documentation, and training.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  What ongoing support do you provide?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our retainer plans ($497-$1,997/month) provide ongoing maintenance, updates, optimization, and strategic support. Choose Essential Care for basic needs, Growth Partner for comprehensive support, or Priority Partner for hands-on strategic partnership. No long-term contracts required.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  How do I know if this will work for my business?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Book a free strategy call. We'll analyze your current situation, identify opportunities, and provide a clear roadmap with projected ROI. No pressure, no obligation. Just honest assessment of whether we're a good fit.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Do you offer payment plans?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes. We typically split projects into 50% upfront and 50% on completion. For larger projects ($20K+), we offer milestone-based payment schedules to align with deliverables. No long-term contracts required for retainer services.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Why should I pay you instead of an offshore developer at $25/hour?
                </h3>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <p>
                    Because cheap usually costs more in the long run. Offshore teams often lack business context, require extensive management, and build systems that break or don't scale. You'll spend months going back and forth, end up with something that doesn't work, and hire someone like us to rebuild it anyway.
                  </p>
                  <p>
                    We're not selling cheap labor. We're selling strategic partnership. We understand your business, identify opportunities you're missing, and build systems that work after we're gone. Our clients see 3-10x ROI within 12 months because we're focused on outcomes, not hourly rates.
                  </p>
                  <p>
                    If you just need code written to spec and you have the expertise to manage it, offshore makes sense. But if you want someone thinking strategically about your business and building systems that scale? That's us.
                  </p>
                </div>
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
              Book a free strategy call. We'll analyze your situation, identify opportunities, and provide a clear roadmap with projected ROI. No pressure, no obligation.
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
