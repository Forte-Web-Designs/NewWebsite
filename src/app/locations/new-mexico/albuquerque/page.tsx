import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Albuquerque Growth Systems & Web Design | Tech & Cultural Business Websites | Forte',
  description: 'Forte builds Growth Systems for Albuquerque businesses. From tech startups to healthcare to cultural enterprises, we deliver custom-coded websites, SEO automation, and integrations that drive measurable results.',
  openGraph: {
    title: 'Albuquerque Growth Systems & Web Design | Tech & Cultural Business Websites | Forte',
    description: 'Forte builds Growth Systems for Albuquerque businesses. From tech startups to healthcare to cultural enterprises, we deliver custom-coded websites, SEO automation, and integrations that drive measurable results.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems Albuquerque Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/new-mexico/albuquerque',
  },
};

export default function AlbuquerquePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Albuquerque Growth Systems — Innovation in the High Desert
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From tech startups to cultural enterprises, we design Growth Systems that help Albuquerque businesses capture more leads, automate operations, and thrive in New Mexico's largest market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start My Growth System
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Book Free Growth Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Albuquerque Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Albuquerque's Innovation Economy
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  High Desert Innovation Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Albuquerque isn't just New Mexico's largest city — it's the state's innovation hub. With 562,000+ residents and 38,000+ businesses across technology, healthcare, aerospace, and cultural sectors, success here demands more than a template website. Forte builds Growth Systems that deliver measurable ROI for Albuquerque's diverse economy.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technology Hub</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Albuquerque startups and established firms compete for visibility against larger national brands.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Foundation websites with custom-coded speed + Growth Layer SEO automation to rank locally and scale nationally.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Excellence</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Medical groups need compliance, trust, and patient-friendly online systems.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> HIPAA-aware design with patient portals, online booking, and secure integrations.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Aerospace & Defense</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> High-tech industries need credibility and secure digital infrastructure.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Enterprise-grade Scaling Layer integrations with robust security and performance.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Albuquerque Market Data
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">562,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Metro Area</span>
                    <span className="font-semibold text-gray-900 dark:text-white">916,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">38,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$56,000</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      One of the fastest-growing Southwestern markets for startups and cultural enterprises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Albuquerque Growth Systems
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Foundation Web Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom-coded websites designed for Albuquerque businesses.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Growth Layer SEO
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  SEO automation to dominate Albuquerque search results.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Scaling Layer Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive digital strategies that integrate CRM, automation, and advanced analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Why Albuquerque Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Desert-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom code that thrives at scale, with load times under 2 seconds.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Cultural & Local Sensitivity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designs that honor Albuquerque's cultural mix while performing for tech-driven markets.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Tech-Savvy Growth Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Layered systems that evolve with your business — from websites to AI automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Scale in Albuquerque's Innovation Hub?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you're a tech startup, a healthcare provider, or a cultural business, Forte Growth Systems deliver measurable results tailored to Albuquerque's economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Growth Audit
              </Link>
              <Link
                href="/contact"
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Start My Growth System
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
