'use client';

import Link from 'next/link';
import { OptimizedImage } from './images/OptimizedImage';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

const tiers = [
  {
    name: 'Starter',
    price: '$1,500 - $4,000',
    tagline: 'Get the basics in place.',
    timeline: '1-3 weeks',
    products: [
      { name: 'Capture It', description: 'Funnels, landing pages, booking', href: '/services/capture-it' },
      { name: 'See Everything', description: 'Reporting, dashboards, data', href: '/services/see-everything' }
    ]
  },
  {
    name: 'Growth',
    price: '$3,500 - $7,500',
    tagline: 'Build the engine.',
    timeline: '3-6 weeks',
    popular: true,
    products: [
      { name: 'Work the Lead', description: 'CRM, pipeline, follow-up', href: '/services/work-the-lead' },
      { name: 'Serve the Customer', description: 'Invoicing, onboarding, operations', href: '/services/serve-the-customer' }
    ]
  },
  {
    name: 'Scale',
    price: '$7,500 - $15,000+',
    tagline: 'Everything connected.',
    timeline: '6-12 weeks',
    products: [
      { name: 'Get Found', description: 'SEO, ads, content, outreach', href: '/services/get-found' },
      { name: 'Keep and Grow', description: 'Reviews, referrals, reactivation', href: '/services/keep-and-grow' },
      { name: 'Full Foundation', description: 'All six stages, built or rebuilt', href: '/services' }
    ]
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
    answer: "Discovery, build, testing, training, documentation, support. You own everything. Every project includes the Runbook... a living document that maps your entire system so you're never dependent on us."
  },
  {
    question: 'How long do projects take?',
    answer: "1-12 weeks depending on scope. Starter tier is 1-3 weeks. Growth is 3-6 weeks. Scale is 6-12 weeks. You'll know before we start."
  },
  {
    question: "What if I'm not sure what I need?",
    answer: "That's what the call is for. I figure out where you are, what's missing, and what makes sense to build first. No pressure."
  },
  {
    question: "What if I already have some things in place?",
    answer: "Most businesses do. We figure out what's working, what's not connected, and what's missing. You don't rebuild what's already good. We just fill the gaps and connect the pieces."
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
                <div className={`p-8 rounded-2xl h-full ${tier.popular ? 'bg-white dark:bg-gray-900 shadow-lg ring-2 ring-blue-600' : ''}`}>
                  <div className="text-center mb-6">
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

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-5 space-y-3">
                    {tier.products.map((product) => (
                      <Link key={product.name} href={product.href} className="block group">
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                          {product.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {product.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Web Design */}
            <SimpleScrollReveal direction="up">
              <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Web Design</span> - Starting at $3,000. Websites that connect to your system, not just sit there.{' '}
                  <Link href="/services/web-design" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Learn more →
                  </Link>
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Automation and Custom Software */}
            <SimpleScrollReveal direction="up">
              <div className="text-center border-b border-gray-200 dark:border-gray-700 pb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Automation and Custom Software</span> - Starting at $500. One-off builds, integrations, API work, and workflow fixes.{' '}
                  <Link href="/services/automation-ai" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Learn more →
                  </Link>
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Monthly Support */}
            <SimpleScrollReveal direction="up">
              <div className="text-center pb-4">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  <span className="font-semibold text-gray-900 dark:text-white">Monthly Support</span> - $497-$1,997/month. Three tiers depending on what you need:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Maintain</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">$497/mo</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Monitoring, bug fixes, priority support. Up to 3 hours/month.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Optimize</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">$997/mo</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Everything in Maintain plus ongoing optimization, monthly reporting, proactive improvements. Up to 8 hours/month.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">Scale</p>
                    <p className="text-blue-600 dark:text-blue-400 font-bold mb-2">$1,997/mo</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Everything in Optimize plus new builds, system expansion, dedicated availability. Up to 20 hours/month.</p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
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
                      {result.client} - <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
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

      {/* CTA with Headshot & Calendly */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Headshot & Brief */}
            <SimpleScrollReveal direction="up">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <OptimizedImage
                    src="/images/about/headshot-6.jpg"
                    alt="Seth Forte"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    sizes="96px"
                  />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                  Got a problem?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Book a call. Just tell me what's not working.
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-black max-w-sm mx-auto lg:mx-0">
                  <video
                    controls
                    className="w-full"
                  >
                    <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 lg:text-left text-center">
                  2-minute intro
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Right - Calendly */}
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a call with Seth"
                  className="w-full"
                />
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
