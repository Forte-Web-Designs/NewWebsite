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
    id: 'fast-track-auction',
    title: 'CR Deals Cincinnati',
    subtitle: 'Enterprise AI-Powered Marketplace Automation & Multi-Platform Social Distribution System',
    challenge: 'Leading Cincinnati auction and resale operation facing critical scaling bottleneck with 1,500-3,000 monthly products overwhelming manual processes',
    solution: 'Comprehensive enterprise-grade AI automation system with real-time market intelligence, automated content generation for 50-100 products daily, and multi-platform social distribution',
    results: [
      '1,040+ hours saved annually',
      '$52K annual labor cost savings',
      '24/7 autonomous operation processing 3,000 products monthly'
    ],
    tags: ['FLAGSHIP PROJECT', 'Enterprise AI Automation', 'Multi-Platform Distribution', 'Market Intelligence'],
    gradient: 'from-blue-600 to-indigo-600',
    featured: true
  },
  {
    id: 'modern-bungalow',
    title: 'Modern Bungalow',
    subtitle: 'Home Goods E-commerce Automation & Accounting Sync',
    challenge: 'Premium home goods retailer struggling with manual order processing and QuickBooks sync causing 20+ hours/week of repetitive work',
    solution: 'Custom n8n automation system with intelligent order sync, automated customer communications, and multi-channel inventory management for contemporary furniture business',
    results: [
      '95% reduction in manual data entry',
      '20+ hours per week saved on order processing',
      '100% order accuracy with zero duplicates'
    ],
    tags: ['Home Goods E-commerce', 'QuickBooks Integration', 'Shopify Automation'],
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    id: 'revolut',
    title: 'Revolut (Fintech)',
    subtitle: 'AI-Powered Financial Analytics & Automated Insight Generation',
    challenge: 'Analyzing 200K+ transactions across 90 days to identify profitability drivers and develop £4M growth strategy',
    solution: 'AI-powered financial analytics automation system with intelligent data cleaning, automated analysis, and executive reporting',
    results: [
      '90% reduction in analysis time through automation',
      '40 hrs/week saved on manual reporting',
      '£4M growth pathway identified and quantified'
    ],
    tags: ['AI Analytics', 'Financial Automation', 'Data Processing'],
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'hollow-bamboo',
    title: 'Hollow Bamboo Film Productions',
    subtitle: 'Custom Google Sheets Inventory Automation System',
    challenge: 'Manually tracking hundreds of equipment items across multiple film sets with no real-time visibility',
    solution: 'Custom Google Sheets automation with QR code mobile access and real-time multi-location sync',
    results: [
      '20+ hrs/week saved on manual inventory updates',
      '6 locations tracked with real-time sync',
      '100% equipment visibility across all sets'
    ],
    tags: ['Google Sheets Automation', 'Inventory Management', 'Film Production'],
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 'emi-kirschner-activecampaign',
    title: 'Emi Kirschner Coaching',
    subtitle: 'Strategic ActiveCampaign CRM Setup & Marketing Automation',
    challenge: 'High-touch coaching business needed strategic CRM and automation to scale without sacrificing personal touch—8-12 hours/week lost to manual client management',
    solution: 'Built complete ActiveCampaign ecosystem with 5 specialized pipelines, lifecycle automations (check-ins, referrals, birthdays), and multi-tool integrations (Kajabi, WordPress, ClickUp)',
    results: [
      'Projected 8-12 hrs/week saved on manual CRM tasks',
      'Estimated 20-30% increase in referral generation',
      '15-25% improvement in lead conversion',
      '$20K-$30K annual value in recovered time'
    ],
    tags: ['CRM Strategy', 'ActiveCampaign', 'Coaching Business', 'Marketing Automation'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'kingfisher-ads-automation',
    title: 'Kingfisher Ads',
    subtitle: 'Agency Operations Automation with AI-Powered Reporting',
    challenge: 'Irish ad agency growth constrained by manual reporting, invoicing, and data analysis—19-25 hours/week spent on repetitive operations instead of client strategy',
    solution: 'Built n8n automation system with GPT-4 integration for automated reporting (Meta, Google, Shopify, BigCommerce), ad spend-based invoicing with Xero, and unified dashboards with AI insights',
    results: [
      'Projected 19-25 hrs/week saved on operations',
      '3-5x capacity increase without adding staff',
      '30-40% reduction in support inquiries',
      '$49K-$65K annual value in recovered time'
    ],
    tags: ['Agency Automation', 'n8n', 'GPT-4', 'API Integration', 'Marketing Agency'],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    id: 'compass-real-estate-ai-automation',
    title: 'Compass Real Estate',
    subtitle: 'AI Email & Drive Automation',
    challenge: 'Real estate agents spending 11-17 hours/week on email drafting and file organization instead of closing deals',
    solution: 'Built hybrid automation system with ChatGPT-powered email drafts appearing in Gmail within 10 seconds, intelligent Google Drive organization, and automated showing workflows',
    results: [
      '11-17 hours/week saved on admin work',
      '50-60x faster email drafting (10 seconds vs 5-10 minutes)',
      'Capacity to handle 20-30% more clients',
      '$28K-$44K annual value in recovered time'
    ],
    tags: ['Real Estate', 'ChatGPT API', 'Gmail Automation', 'Google Drive'],
    gradient: 'from-orange-600 to-amber-600'
  },
  {
    id: 'handl-agency-automation',
    title: 'HandL Agency',
    subtitle: 'Three-Tier Operations Automation',
    challenge: 'Agency growth limited by operational overhead—email management, meeting coordination, and invoice processing consuming 15-24 hours weekly',
    solution: 'Built three-tier modular automation system: (1) AI email responder with approval workflow, (2) Automated meeting follow-up using Fathom transcripts, (3) Invoice processing automation with FreeAgent integration',
    results: [
      '15-24 hours/week saved across all tiers',
      'Tier 1: 5-8 hrs/week ($13K-$20K annually)',
      'Tier 2: 4-6 hrs/week ($10K-$15K annually)',
      'Tier 3: 6-10 hrs/week ($15K-$26K annually)'
    ],
    tags: ['Marketing Agency', 'GPT-4', 'Three-Tier System', 'Modular Automation'],
    gradient: 'from-violet-600 to-fuchsia-600'
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
                  <div className={`${study.featured ? 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-700' : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'} rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full flex flex-col`}>
                    {/* Featured Flag */}
                    {study.featured && (
                      <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-bold mb-4 w-fit shadow-lg">
                        FLAGSHIP ENTERPRISE PROJECT
                      </div>
                    )}

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
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            tag.includes('FLAGSHIP') 
                              ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-sm' 
                              : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                          }`}
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
