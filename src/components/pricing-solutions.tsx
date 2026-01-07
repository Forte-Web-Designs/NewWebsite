'use client';

import Link from 'next/link';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500 - $3,500',
    tagline: 'One problem, fixed.',
    timeline: '2-3 weeks'
  },
  {
    name: 'Automation',
    price: '$3,500 - $7,500',
    tagline: 'The work that eats your week.',
    timeline: '3-6 weeks',
    popular: true
  },
  {
    name: 'Full System',
    price: '$7,500 - $15,000+',
    tagline: 'Everything connected.',
    timeline: '6-12 weeks'
  }
];

const results = [
  { client: 'CR Deals Cincinnati', metric: '$52K/year saved', description: 'Product listings that generate themselves.' },
  { client: 'Modern Bungalow', metric: '15 hrs/month back', description: 'Customer emails that send themselves.' },
  { client: 'Hollow Bamboo', metric: '20 hrs/week back', description: 'Equipment tracking across 6 locations.' },
  { client: 'Revolut', metric: '$4M opportunity found', description: 'Transaction analysis in hours, not weeks.' },
  { client: 'Prediction Market Trader', metric: 'Research on autopilot', description: 'Hundreds of markets analyzed daily.' },
  { client: 'Kingfisher Ads', metric: 'Reports in 15 min', description: 'Monthly reporting that runs itself.' },
  { client: 'KlnBros Agency', metric: 'Back online in 2 hours', description: 'Emergency recovery, 43 workflows restored.' }
];

const faqItems = [
  {
    question: "What's included?",
    answer: "Discovery, build, testing, training, documentation, support. You own everything."
  },
  {
    question: 'How long do projects take?',
    answer: "2-12 weeks depending on scope. You'll know before we start."
  },
  {
    question: "What if I'm not sure what I need?",
    answer: "That's what the call is for. No pressure."
  },
  {
    question: 'Payment plans?',
    answer: '50% upfront, 50% on completion. Milestone payments for larger projects.'
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                Pricing
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                Most projects pay for themselves in 4-8 weeks.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
                <div className={`text-center p-8 rounded-2xl ${tier.popular ? 'bg-white dark:bg-gray-900 shadow-lg ring-2 ring-blue-600' : ''}`}>
                  {tier.popular && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-full mb-4">
                      Most Common
                    </span>
                  )}
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    {tier.price}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {tier.tagline}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {tier.timeline}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Callout */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center border-y border-gray-200 dark:border-gray-700 py-8">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Web Design</span> — Starting at $3,000. Website + CRM + automation as one system.{' '}
                <Link href="/services/web-design" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                  Learn more →
                </Link>
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Monthly Support Callout */}
      <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">Monthly Support</span> — $997-1,997/month. Someone who knows your system on call.{' '}
                <Link href="/support" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                  Learn more →
                </Link>
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6 text-center">
              Results
            </h2>
            <div className="text-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-0 border-t border-gray-200 dark:border-gray-700">
            {results.map((result, index) => (
              <SimpleScrollReveal key={result.client} direction="up" delay={index * 50}>
                <div className="flex items-center justify-between py-5 border-b border-gray-200 dark:border-gray-700 group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/50 -mx-4 px-4 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {result.client} — <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">
                      {result.description}
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="space-y-8">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-10">
                Got a problem?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
