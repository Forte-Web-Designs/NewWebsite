import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Kingfisher Ads Case Study | Agency Operations Automation | Forte Web Designs',
  description: 'Automated reporting, invoicing, and data analysis for Irish ad agency. Built with n8n, GPT-4, and multi-platform APIs. Projected 19-25 hours/week saved, $49K-$65K annual value.',
  openGraph: {
    title: 'Kingfisher Ads Case Study - Agency Automation Success',
    description: 'n8n automation system with GPT-4 integration for automated reporting, invoicing, and multi-platform dashboards.',
    images: ['/images/case-studies/kingfisher-ads.jpg'],
  },
};

export default function KingfisherAdsCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400">Case Studies</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Kingfisher Ads</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Kingfisher Ads
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-100 mb-8">
                Agency Operations Automation with AI-Powered Reporting
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>Ongoing Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Digital Marketing Agency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>19-25 hrs/week projected</span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Kingfisher Ads, a growing Irish online advertising agency, manages ad campaigns across Meta, Google, Shopify, and BigCommerce for multiple clients. As they took on more clients, they hit a classic agency problem: operational overhead was growing faster than revenue.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The team was drowning in repetitive work—pulling data from ad platforms, generating client reports, calculating and creating invoices based on ad spend, managing client communications across Slack and ClickUp. Every new client meant 10-15 hours of additional weekly admin work. They couldn't afford to hire more staff just to handle operations, but without automation, they were maxing out capacity. The business was growth-constrained by manual processes, not by demand or capability.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We built a comprehensive n8n automation system with GPT-4 integration to automate the three biggest time drains: performance reporting (automated data extraction and AI-generated insights), invoice generation (ad spend-based billing with Xero integration), and unified dashboards (real-time multi-platform data with intelligent analysis). The goal: enable Kingfisher to serve 3-5x more clients without adding operational staff.
              </p>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What We Built
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AI-Powered Reporting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated data extraction from Meta and Google Ads, combined with e-commerce data. GPT-4 analyzes performance and writes executive summaries with scheduled delivery to clients.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Automated Invoicing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ad spend-based invoice generation with Xero integration. Automatic fee calculation, professional invoice creation, and payment tracking—eliminating billing errors entirely.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Unified Dashboards
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time data from Meta, Google, Shopify, and BigCommerce in one dashboard. GPT-4 identifies opportunities and red flags automatically with actionable recommendations.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Projected Impact
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    19-25 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved on operations
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    $49K-$65K
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Estimated annual value in recovered time
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    3-5x
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Capacity increase without adding staff
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    30-40%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Reduction in client support inquiries
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-cyan-200 dark:border-cyan-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Additional Projected Wins
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Eliminated billing errors entirely (from 5-10% error rate to 0%)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Team can focus on campaign strategy and optimization instead of admin work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Capacity to add $150K-$250K in annual revenue without hiring operations staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">10-20% projected improvement in campaign performance through faster optimization cycles</span>
                  </li>
                </ul>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                How It Works
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Multi-Platform Data Extraction
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      n8n workflows automatically pull campaign data from Meta Ads and Google Ads APIs, combine with Shopify and BigCommerce conversion tracking, and aggregate into unified datasets. Scheduled extractions run daily or weekly based on client needs.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI-Powered Analysis & Reporting
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      GPT-4 analyzes performance data, identifies trends and anomalies, and generates executive summaries with actionable insights. Reports are automatically formatted and delivered to clients via email or Google Sheets with branded templates.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Automated Billing & Accounting
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Ad spend is monitored in real-time, agency fees are calculated automatically, and professional invoices are generated in Xero accounting system. Payment tracking, reconciliation, and overdue reminders all run automatically—eliminating manual billing work entirely.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Technical Stack
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Platform & Automation</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• n8n (self-hosted automation)</li>
                      <li>• OpenAI GPT-4 API</li>
                      <li>• JavaScript for calculations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Integrations</h4>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                      <li>• Meta Ads & Google Ads APIs</li>
                      <li>• Shopify & BigCommerce</li>
                      <li>• Xero (accounting)</li>
                      <li>• Slack & ClickUp</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Scale Your Agency?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how we can automate your reporting, invoicing, and operations to unlock growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200"
                >
                  View More Case Studies
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
