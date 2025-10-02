import { Metadata } from 'next';
import { HeroBackgroundAnimation, SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Santa Fe Growth Systems & Web Design | Arts, Tourism, Government | Forte',
  description: 'Forte builds Growth Systems for Santa Fe businesses. From galleries to tourism to government, we deliver custom-coded websites, SEO automation, and integrations that balance cultural sophistication with measurable results.',
  openGraph: {
    title: 'Santa Fe Growth Systems & Web Design | Arts, Tourism, Government | Forte',
    description: 'Forte builds Growth Systems for Santa Fe businesses. From galleries to tourism to government, we deliver custom-coded websites, SEO automation, and integrations that balance cultural sophistication with measurable results.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems Santa Fe Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/new-mexico/santa-fe',
  },
};

export default function SantaFePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Santa Fe Growth Systems — The City Different, Digitally
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From galleries and cultural institutions to government and healthcare, Forte builds Growth Systems that honor Santa Fe's artistic heritage while delivering measurable business results.
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
                Book Free Growth Snapshot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Santa Fe Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Santa Fe's Unique Market
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Cultural Heartbeat of the Southwest
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Santa Fe isn't just New Mexico's capital — it's the cultural heartbeat of the Southwest. With 87,000+ residents and 2M+ annual visitors, businesses here must balance artistic sophistication, government professionalism, and tourism appeal. Forte Growth Systems give Santa Fe businesses the foundation, automation, and integrations they need to thrive in this unique market.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Arts & Culture</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Cultural institutions and galleries need websites that blend beauty with performance.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Foundation design inspired by Santa Fe's artistic heritage + Growth Layer automation for event promotion and ticketing.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tourism Excellence</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Tourism businesses must capture visitors before they arrive and while they're in-market.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> SEO + Scaling Layer marketing that connects with tourists searching on mobile and builds repeat visitor relationships.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Government & Healthcare</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Government and healthcare organizations need credibility, accessibility, and compliance.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Professional-grade websites with secure integrations, ADA accessibility, and user-friendly design.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Santa Fe Market Profile
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">87,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Annual Visitors</span>
                    <span className="font-semibold text-gray-900 dark:text-white">2M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">6,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$62,000</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      A global arts destination with one of the highest visitor-to-resident ratios in the U.S.
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
              Santa Fe Growth Systems
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
                  Culturally inspired, custom-coded websites that reflect Santa Fe's uniqueness.
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
                  Tourism-focused SEO and content automation to reach visitors at the right moment.
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
                  Integrated systems for event ticketing, online sales, and long-term visitor engagement.
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
              Why Santa Fe Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Artistic Excellence + Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites as beautiful as Santa Fe art — but optimized for speed, SEO, and results.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Cultural Sensitivity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designs that respect Santa Fe's multicultural traditions while appealing to modern audiences.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Tourism + Local Balance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Systems built to capture both international tourists and long-term local relationships.
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
              Ready to Thrive in The City Different?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you run a gallery, hotel, or healthcare organization, Forte Growth Systems combine artistic sophistication with measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Free Growth Snapshot
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
