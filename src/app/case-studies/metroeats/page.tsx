import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MetroEats Case Study | AI Restaurant Partner Discovery System | Forte Web Designs',
  description: 'Discover how we built an AI-powered partner discovery system for MetroEats that automated restaurant identification and onboarding, leading to 40% increase in monthly sign-ups.',
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
                MetroEats: AI-Powered Restaurant Partner Discovery System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                How we accelerated restaurant onboarding for a fast-scaling DFW food delivery startup with intelligent partner discovery and automated lead generation.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 8 weeks</div>
                <div>🍕 <strong>Industry:</strong> Food Delivery/Tech</div>
                <div>⚡ <strong>Result:</strong> 40% increase in sign-ups</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-12 text-center">
                <div className="text-6xl mb-4">🍕</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Restaurant Discovery AI</h3>
                <p className="text-gray-600 dark:text-gray-400">Web crawling, API search & intelligent lead generation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">The Challenge</h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                MetroEats, a rapidly growing Dallas-Fort Worth food delivery platform, was struggling to scale their restaurant partner acquisition. Their team was spending days manually researching potential restaurant partners, trying to find contact information, and qualifying leads—creating a major bottleneck in their expansion plans.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Growth Bottlenecks:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Manual restaurant research taking 2-3 days per lead
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Low contact information success rate (under 30%)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Inconsistent lead qualification criteria
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Scaling challenges as they expanded to new cities
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Business Impact:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Slow market entry in new cities
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      High cost per acquisition due to manual processes
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Limited scalability of growth team
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Missed opportunities due to slow response times
                    </li>
                  </ul>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our AI-Powered Solution</h2>
            
            <div className="space-y-12">
              {/* Component 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Intelligent Web Crawling Engine
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-4">
                      Automated restaurant discovery across multiple data sources
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Discovery Capabilities:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Google Maps API integration for restaurant identification
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Yelp, DoorDash, and Uber Eats data scraping
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Social media profile discovery and analysis
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Real-time menu and pricing intelligence
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔍</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "Discovers 200+ qualified restaurants per city in under 2 hours"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component 2 */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Contact Intelligence System
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      Automated contact discovery and qualification scoring
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Discovery:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Owner/manager contact information extraction
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Phone number validation and verification
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Email address discovery through multiple sources
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Lead scoring based on partner fit criteria
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📞</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Success Rate:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        85% contact info coverage vs. 30% manual
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component 3 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Partnership Management Dashboard
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      Real-time pipeline management and team coordination
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Dashboard Features:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Live pipeline with qualification scoring
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Automated task assignment and follow-up reminders
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Performance analytics and conversion tracking
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Territory management for multi-city expansion
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📊</div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Result:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Complete visibility into partnership funnel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Explosive Growth Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">&lt; 1hr</div>
                <div className="text-white/80 text-sm">Research Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <div className="text-white/80 text-sm">Contact Success</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-white/80 text-sm">More Sign-ups</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">6mo</div>
                <div className="text-white/80 text-sm">Multi-city Scale</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Business Transformation:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-3">Operational Efficiency:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reduced research time from days to under 1 hour
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Automated discovery of 200+ restaurants per city
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Growth Acceleration:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      40% increase in monthly restaurant sign-ups
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Scaled from Dallas to multi-city rollout in 6 months
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Accelerate Your Business Development?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Build an AI-powered discovery and qualification system that scales your business development efforts automatically.
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
