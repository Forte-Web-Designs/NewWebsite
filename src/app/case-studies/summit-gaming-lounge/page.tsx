import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Summit Gaming Lounge Case Study | AI Omnichannel Concierge System | Forte Web Designs',
  description: 'Learn how we built an AI-powered omnichannel concierge system for Summit Gaming Lounge that manages customer communications across SMS, Discord, and Telegram.',
};

export default function SummitGamingLoungeCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">Summit Gaming Lounge</span>
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
                Summit Gaming Lounge: AI-Powered Omnichannel Concierge System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                How we transformed customer experience management for a modern gaming café with intelligent automation across SMS, Discord, and Telegram.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 12 weeks</div>
                <div>🎮 <strong>Industry:</strong> Entertainment/Gaming</div>
                <div>⚡ <strong>Result:</strong> Omnichannel AI concierge</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-12 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Gaming Café Concierge</h3>
                <p className="text-gray-600 dark:text-gray-400">AI automation across SMS, Discord & Telegram</p>
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
                Summit Gaming Lounge, a modern gaming café and social venue, struggled with managing customer communications across multiple platforms. Their growing community used different channels—some preferred SMS, others Discord, and many used Telegram—creating fragmented conversations and missed opportunities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Challenges:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Fragmented customer conversations across platforms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Manual reservation management
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Difficulty coordinating group events
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      No unified customer recognition system
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Business Impact:</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Inconsistent customer experience
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Lost bookings due to slow response times
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Staff overwhelmed by communication volume
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Missed opportunities for group bookings
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
                      Intelligent User Recognition
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-4">
                      Foundation: Cross-platform customer identification and unified profiles
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Core Features:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Unified customer profiles across SMS, Discord, Telegram
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Intelligent user matching and deduplication
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Preference tracking and history management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Real-time conversation context switching
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔗</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "One customer profile, three communication channels"
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
                      Smart Reservation & Group Management
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      Automation: Intelligent booking coordination and group formation
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Capabilities:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Automated reservation scheduling across all platforms
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Intelligent group formation for events and tournaments
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Real-time availability checking and suggestions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Automated reminders and confirmation management
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📅</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Result:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        90% reduction in manual booking coordination
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
                      Personalized Experience Engine
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      Intelligence: Memory management and personalized customer experiences
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Personalization Features:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Long-term customer preference memory
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Behavioral pattern recognition and suggestions
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Proactive event and promotion recommendations
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Cross-platform conversation continuity
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🧠</div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Result:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Truly personalized experiences that increase customer loyalty
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
            <h2 className="text-3xl font-bold text-white mb-12">Transformational Results</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-white/80 text-sm">Unified Platforms</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">90%</div>
                <div className="text-white/80 text-sm">Booking Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Customer Service</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">60%</div>
                <div className="text-white/80 text-sm">Faster Response</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Business Impact:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-white mb-3">Operational Excellence:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Eliminated double bookings and scheduling conflicts
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reduced staff workload by 70% for customer communications
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Customer Experience:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consistent experience across all communication channels
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Increased group event participation by 45%
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Build an omnichannel AI system that unifies your customer communications and automates your operations.
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
