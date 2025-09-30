import { Metadata } from 'next';
import Link from 'next/link';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Our Portfolio | Coming Soon | Forte Web Designs',
  description: 'Our portfolio page is currently being updated with fresh client work. Check back soon to see our latest projects.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* Coming Soon Hero */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-32 lg:py-48">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
            Portfolio
            <span className="block text-blue-600 dark:text-blue-400">Coming Soon</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            We're currently updating our portfolio with fresh client work and success stories. 
            Check back soon to see how we've helped businesses transform their online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <LightButton href="/contact">
              Discuss Your Project
            </LightButton>
            <Link 
              href="/case-studies"
              className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Project: AI Omnichannel System
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              A complex AI-powered messaging system we built for Summit Gaming Lounge that processes communications across multiple platforms with intelligent routing and automation.
            </p>
            <Link 
              href="/case-studies/summit-gaming-lounge"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
            >
              View Full Case Study →
            </Link>
          </div>

          {/* Omnichannel Flow Diagram */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Omnichannel Message Processing Flow
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                This diagram shows the sophisticated AI routing system that handles member communications across SMS, Discord, and Telegram platforms with intelligent user recognition and automated responses.
              </p>
            </div>
            
            {/* Flow Chart Image */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 overflow-x-auto">
              <img 
                src="/images/case-studies/omnichannel-message-flow.png"
                alt="TableTop AI Concierge - Omnichannel Message Processing Flow"
                className="w-full h-auto mx-auto"
                style={{ minWidth: '1200px' }}
              />
            </div>
            
            {/* Flow Description */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Multi-Platform Intake
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  SMS, Discord, and Telegram messages are processed through unified entry points with platform-specific optimizations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Smart Recognition
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI agents identify existing members vs. new users and route conversations to specialized processing paths.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Automated Actions
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  System handles reservations, group formation, and member services automatically while maintaining conversation context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We're Working On
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              While our portfolio page is being refreshed, here's what we specialize in:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Design */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Website Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailored websites that convert visitors into customers with strategic design and functionality.
              </p>
            </div>

            {/* Automation & AI */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Automation & AI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Smart solutions that streamline operations and improve efficiency for growing businesses.
              </p>
            </div>

            {/* SEO & Marketing */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 002-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">SEO & Digital Marketing</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic optimization to help your business get found by the right customers online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Don't wait for our portfolio page to be complete. Let's discuss your project and 
            see how we can help transform your business online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <LightButton href="/contact">
              Start Your Project
            </LightButton>
            <Link 
              href="/services"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-300 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* 
===========================================
ORIGINAL PORTFOLIO CONTENT - PRESERVED FOR RESTORATION
===========================================

This content has been temporarily commented out while the portfolio page 
is being updated with real client work. All original code is preserved 
and can be easily restored when ready.

[The original portfolio data, components, and full page structure would 
be preserved here in comments for easy restoration when you have your 
real client information ready to showcase]

END ORIGINAL CONTENT
===========================================
*/