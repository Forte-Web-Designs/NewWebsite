import { Metadata } from 'next';
import { HeroBackgroundAnimation, SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Las Cruces Growth Systems & Web Design | Education, Agriculture, Bilingual Markets | Forte',
  description: 'Forte builds Growth Systems for Las Cruces businesses. From NMSU and research to agriculture and manufacturing, we deliver custom-coded websites, SEO automation, and integrations designed to help diverse bilingual markets thrive.',
  openGraph: {
    title: 'Las Cruces Growth Systems & Web Design | Education, Agriculture, Bilingual Markets | Forte',
    description: 'Forte builds Growth Systems for Las Cruces businesses. From NMSU and research to agriculture and manufacturing, we deliver custom-coded websites, SEO automation, and integrations designed to help diverse bilingual markets thrive.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems Las Cruces Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/new-mexico/las-cruces',
  },
};

export default function LasCrucesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Las Cruces Growth Systems — Built for Education, Agriculture, and Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From New Mexico State University to agricultural leaders, Forte builds Growth Systems that help Las Cruces businesses thrive with custom websites, automation, and integrations that deliver measurable results.
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

      {/* Las Cruces Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Las Cruces' Diverse Market
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Education, Agriculture, and Innovation Hub
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Las Cruces, the City of the Crosses, is New Mexico's second-largest city and home to New Mexico State University. With 111,000+ residents and 14,000+ university students, Las Cruces blends academic innovation with agricultural heritage and growing manufacturing. Forte Growth Systems help businesses stand out in this diverse market with solutions built for performance, scalability, and measurable ROI.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education & Research</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Universities and research centers need websites that serve students, faculty, and global partners.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Foundation sites with ADA compliance + Growth Layer integrations for research portals and enrollment funnels.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Agriculture & Food Processing</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Agricultural businesses need to modernize operations and connect with wholesale and consumer markets.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Scaling Layer marketing + bilingual websites that support farmers, processors, and distributors.</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manufacturing & Industry</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Manufacturers must build credibility and attract contracts in competitive sectors.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Our Approach:</strong> Professional-grade websites with secure integrations, portfolio showcases, and local SEO for visibility.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Las Cruces Market Overview
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">111,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">University Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white">14,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">7,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$48,000</span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      Las Cruces is a bilingual hub where businesses thrive by serving both English and Spanish-speaking communities.
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
              Las Cruces Growth Systems
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
                  Custom-coded websites that blend NMSU innovation with local agricultural roots.
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
                  Local SEO + bilingual optimization to dominate searches across Las Cruces and Southern NM.
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
                  Automation, CRMs, and integrated tools that help education, agriculture, and manufacturing scale.
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
              Why Las Cruces Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Aggie-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning-fast websites tailored for Las Cruces' university-driven market.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Industry Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep knowledge of education, agriculture, and manufacturing sectors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Community & Culture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bilingual, community-first design that connects with Las Cruces' diverse population.
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
              Ready to Scale in the City of the Crosses?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you serve students, farmers, or manufacturers, Forte Growth Systems help Las Cruces businesses thrive with cultural sensitivity and measurable growth.
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
