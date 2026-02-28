import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Summit Gaming Lounge Case Study | AI Omnichannel Concierge | Forte Web Designs',
  description: 'How we built an AI-powered omnichannel concierge system for Summit Gaming Lounge that automated 80% of customer communications and saved 15 hours per week.',
};

export default function SummitGamingLoungeCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">Summit Gaming Lounge</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Summit Gaming Lounge
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                AI-Powered Omnichannel Concierge System
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>12 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Entertainment/Gaming</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>15 hrs/week saved</span>
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
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Summit Gaming Lounge needed to manage customer communications across multiple platforms (SMS, Discord, and Telegram) while scaling their operations. Manual handling of reservations, group coordination, and customer inquiries was consuming too much time and creating bottlenecks.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We built a custom AI automation system with intelligent user recognition, automated reservation management, and seamless group coordination. The system operates 24/7 across all three platforms, providing personalized customer experiences while eliminating manual administrative work.
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
                Key Features
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Intelligent User Recognition
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    AI-powered identification of existing members vs. new users with cross-platform profile linking across SMS, Discord, and Telegram.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Automated Reservations
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time reservation management with instant booking confirmations, availability checks, and automated reminders.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Group Coordination
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Smart group formation and event coordination with automated notifications and member matching based on preferences.
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
                Results & Impact
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    80%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Customer communications automated
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    15 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved on manual booking
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    24/7
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Availability across all platforms
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Multi-Platform Message Processing
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Incoming messages from SMS (Twilio), Discord, and Telegram are processed through a unified pipeline with platform-specific optimizations and formatting.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI-Powered User Recognition
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      The system identifies existing members, links profiles across platforms, and routes new users appropriately-all in real-time with conversational memory.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Dynamic Database Operations
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Real-time reservation management and group coordination powered by Model Context Protocol (MCP) with instant availability checks and automated confirmations.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <div className="text-white/80 text-5xl mb-6">"</div>
              <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed">
                This AI concierge system transformed how we operate. We can now focus on creating amazing experiences for our members instead of managing bookings all day.
              </p>
              <div className="text-white/90 font-semibold">
                - Summit Gaming Lounge Team
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
                Ready to Automate Your Operations?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how we can build a custom automation solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
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
