'use client';

import Link from 'next/link';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import SimpleAnimatedCard from './animations/SimpleAnimatedCard';

const solutions = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Custom',
    description: 'Website foundation with essential automation',
    features: [
      'Custom-built website',
      'Lead capture system',
      'Basic automation workflows',
      'Ongoing support & hosting'
    ],
    cta: 'Contact Sales',
    href: '/contact'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 'Custom',
    description: 'Complete growth system with AI & automation',
    features: [
      'Everything in Starter',
      'AI-powered lead nurturing',
      'Advanced workflow automation',
      'Performance dashboards',
      'CRM integration'
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'End-to-end system with custom integrations',
    features: [
      'Everything in Professional',
      'Multi-location support',
      'Custom AI agents',
      'Advanced integrations',
      'Dedicated support',
      'Priority implementation'
    ],
    cta: 'Contact Sales',
    href: '/contact'
  }
];

const faqData = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on project scope, complexity, and your specific business needs. We provide custom quotes after understanding your requirements in a consultation.'
  },
  {
    question: 'What\'s included in ongoing support?',
    answer: 'All plans include hosting, security updates, performance monitoring, and technical support. Professional and Enterprise plans include strategic optimization and continuous improvements.'
  },
  {
    question: 'Can I start small and scale up?',
    answer: 'Yes. Many clients start with our Starter package and add automation and integrations as they grow. We design systems to scale with your business.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Starter projects typically take 4-6 weeks. Professional systems take 6-10 weeks. Enterprise implementations are scoped individually based on complexity.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. We offer flexible payment structures including milestone-based payments and monthly retainers. Details are discussed during consultation.'
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 dark:text-white mb-8">
                Flexible pricing built for
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">growth</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                Custom solutions designed around your business needs, not one-size-fits-all packages.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SimpleAnimatedCard key={solution.id}>
                <div className={`relative bg-white dark:bg-gray-800 rounded-xl p-8 h-full flex flex-col ${
                  solution.popular ? 'ring-2 ring-blue-500' : ''
                }`}>
                  {solution.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {solution.name}
                    </h3>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {solution.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {solution.description}
                    </p>
                  </div>

                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={solution.href}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                      solution.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                  >
                    {solution.cta}
                  </Link>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Not sure which solution fits your needs?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
              >
                Talk to our team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Schedule a consultation to discuss your project and get a custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-lg transition-all shadow-xl"
            >
              Talk to Our Team
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
