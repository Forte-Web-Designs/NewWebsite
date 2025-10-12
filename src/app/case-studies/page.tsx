import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results from AI Automation & Web Design | Forte Web Designs',
  description: 'See how we\'ve helped businesses save time and grow revenue with AI automation, custom web design, and intelligent integrations. Real projects, real results.',
};

const caseStudies = [
  {
    id: 'modern-bungalow',
    title: 'Modern Bungalow',
    subtitle: 'Automated E-commerce Order Processing & Accounting Sync',
    challenge: 'Manual order processing and QuickBooks sync issues causing 20+ hours/week of repetitive work',
    solution: 'Custom n8n automation system with intelligent order sync, automated email workflows, and multi-channel inventory management',
    results: [
      '95% reduction in manual data entry',
      '20+ hours per week saved on order processing',
      '100% order accuracy with zero duplicates'
    ],
    tags: ['E-commerce Automation', 'QuickBooks Integration', 'Order Processing'],
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'summit-gaming-lounge',
    title: 'Summit Gaming Lounge',
    subtitle: 'Omnichannel AI Concierge System',
    challenge: 'Managing customer communications across SMS, Discord, and Telegram while scaling operations',
    solution: 'Built AI-powered automation with intelligent user recognition and reservation management',
    results: [
      'Automated 80% of customer communications',
      'Reduced manual booking time by 15 hours/week',
      'Improved customer experience across all channels'
    ],
    tags: ['AI Automation', 'CRM Integration', 'Multi-Platform'],
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'metroeats',
    title: 'MetroEats',
    subtitle: 'AI-Powered Restaurant Discovery',
    challenge: 'Manually sourcing and onboarding restaurant partners was slowing expansion',
    solution: 'AI-powered partner discovery system with web crawling and automated lead pipeline',
    results: [
      '85% contact info coverage on all leads',
      '40% increase in monthly sign-ups',
      'Multi-city expansion within 6 months'
    ],
    tags: ['AI Automation', 'Lead Generation', 'Data Pipeline'],
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'fetchly',
    title: 'Fetchly',
    subtitle: 'AI Executive Assistant in Slack',
    challenge: 'Leadership team overwhelmed by repetitive admin tasks across multiple platforms',
    solution: 'Custom AI assistant integrated with Gmail, Calendar, monday.com, and Contacts',
    results: [
      'Saved 15+ hours per week in admin work',
      '24/7 availability without training or PTO',
      'Eliminated context-switching between platforms'
    ],
    tags: ['AI Assistant', 'Workflow Automation', 'Slack Integration'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'clearwater-systems',
    title: 'ClearWater Systems',
    subtitle: 'AI-Powered Quoting & CRM Automation',
    challenge: 'Lost time on manual quotes, email replies, and disorganized lead tracking',
    solution: 'AI-driven quoting and CRM automation that operates 24/7',
    results: [
      '80% reduction in manual quoting time',
      'Same-day quotes that win more deals',
      'Seamless scaling as leads grow'
    ],
    tags: ['AI Automation', 'CRM', 'Quote Generation'],
    gradient: 'from-pink-600 to-red-600'
  },
  {
    id: 'summit-supply-chain',
    title: 'Summit Supply Chain',
    subtitle: 'AI-Powered Procurement Analytics',
    challenge: 'Manual procurement processes slowing decision-making and supplier assessments',
    solution: 'AI analytics system integrated with SQL databases for real-time intelligence',
    results: [
      '85% faster query response times',
      '40% faster procurement decisions',
      'Supplier assessments in under 30 minutes'
    ],
    tags: ['AI Analytics', 'Data Integration', 'Procurement'],
    gradient: 'from-red-600 to-orange-600'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
                Client Success Stories
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                See how we've helped companies eliminate manual work, automate operations, and scale with intelligent systems.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <SimpleScrollReveal key={study.id} direction="up" delay={index * 100}>
                <Link href={`/case-studies/${study.id}`} className="block group h-full">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                    {/* Header with Gradient */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${study.gradient} mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <Icon name="check" className="w-8 h-8 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-6">
                      {study.subtitle}
                    </p>

                    {/* Challenge */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                        Challenge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">
                        Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                              <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      Read Full Case Study
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to See Similar Results?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free strategy call. We'll analyze your workflows, identify opportunities, and show you exactly how we can help—no pressure, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
                >
                  Book Your Free Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200 text-lg"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
