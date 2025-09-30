import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MetroEats Case Study | AI-Powered Lead Discovery System | Forte Web Designs',
  description: 'Learn how we partnered with MetroEats to build an AI-powered lead discovery system that automates restaurant identification, validates information, and enriches contact details for scalable business growth.',
};

export default function MetroEatsCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-primary-600 dark:hover:text-primary-400">Case Studies</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">MetroEats</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-4 block">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                MetroEats | AI-Powered Lead Discovery System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We partnered with MetroEats, a fast-growing food delivery and restaurant promotion platform, to design and deploy an AI-powered lead discovery system. MetroEats needed a scalable way to identify and onboard partner restaurants quickly while maintaining high-quality data for outreach. This system automates the discovery of optimal restaurant partners, validates their information, and enriches contact details—allowing MetroEats to expand efficiently across new markets while keeping sales teams focused on closing deals.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 3 phases</div>
                <div>🍕 <strong>Industry:</strong> Food Delivery/Tech</div>
                <div>⚡ <strong>Result:</strong> AI-powered lead discovery</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-12 text-center">
                <div className="text-6xl mb-4">🍕</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MetroEats Lead Discovery</h3>
                <p className="text-gray-600 dark:text-gray-400">AI-Powered Lead Discovery System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Overview</h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                By integrating advanced <strong>web crawling, API-driven search, and a user-friendly interface</strong>, the system creates a dynamic database of restaurant leads with actionable insights, helping MetroEats accelerate growth and stay competitive against larger platforms.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Lead Discovery Backend</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Google Search API integration and dynamic database storage
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automated Enrichment</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Web crawling with FireCrawl for contact information
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend Interface</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React + TypeScript user-friendly search interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our 3-Phase Solution</h2>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Lead Discovery Backend & Database
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-4">
                      <strong>Trigger:</strong> Initiated when MetroEats submits lead criteria (e.g., location, cuisine type, price bracket) into the backend.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Functionality:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Google Search API Integration</div>
                        <p className="text-sm ml-4">Retrieves lists of 10–100+ restaurants based on custom criteria (location, cuisine, price range). Results include restaurant names, addresses, Google ratings, review counts, and descriptions.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Dynamic Database Storage</div>
                        <p className="text-sm ml-4">Stores lead data in Google Sheets, serving as a living database. Captures restaurant name, address, average rating, review totals, and category details.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Data Validation</div>
                        <p className="text-sm ml-4">Cross-references API data to ensure accuracy and consistency for every lead.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "Core backend infrastructure for reliable and scalable restaurant discovery pipeline"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Automated Web Crawling & Enrichment
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      <strong>Trigger:</strong> Activated automatically to enrich restaurants stored in the lead database.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Functionality:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Web Crawling with FireCrawl</div>
                        <p className="text-sm ml-4">Scrapes each restaurant's website to extract detailed contact information, including emails, phone numbers, and decision-maker names (where available).</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Lead Enrichment</div>
                        <p className="text-sm ml-4">Appends crawled data to existing records, giving sales teams complete contact profiles.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Scalable Crawling</div>
                        <p className="text-sm ml-4">Supports high-volume enrichment, enabling thousands of restaurants to be processed at scale.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🕷️</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Improved Quality:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Significantly improved quality and depth of restaurant lead data
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Lead Discovery Frontend
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      <strong>Trigger:</strong> Activated when a MetroEats team member inputs search criteria via the custom frontend.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• User-Friendly Interface</div>
                        <p className="text-sm ml-4">A React + TypeScript frontend allows non-technical users to search for restaurants by location, cuisine, or custom filters.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Natural Language Input</div>
                        <p className="text-sm ml-4">Supports conversational queries (e.g., "Italian restaurants in downtown Dallas under $25 signs").</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Real-Time Feedback</div>
                        <p className="text-sm ml-4">Displays search progress and results instantly, ensuring clarity and ease of use.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">💻</div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Complete System:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Seamless, intuitive interface for lead discovery pipeline
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return on Investment Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Return on Investment</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg text-white/95 leading-relaxed text-center mb-8">
                By implementing this AI-powered lead discovery system, MetroEats gained a <strong>transformative tool</strong> that:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90"><strong>Automates</strong> restaurant identification, saving hours of manual research each week.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90"><strong>Delivers</strong> actionable contact details, making outreach faster and more effective.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90"><strong>Scales</strong> effortlessly, supporting rapid expansion into new cities and regions.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90"><strong>Simplifies</strong> adoption, requiring minimal training for team members.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90"><strong>Extends</strong> functionality with modular design—ready for new features like automated outreach or integration with CRM systems.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="text-lg text-white/95 leading-relaxed">
                The result: <strong>faster restaurant acquisition, higher-quality partnerships, and a scalable AI-driven system</strong> that powers MetroEats' mission to connect more customers with local dining options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Your AI-Powered Lead Discovery System?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Create an intelligent lead discovery system that automates prospect identification, enriches contact data, and delivers actionable insights that drive rapid business growth across multiple markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your AI Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
