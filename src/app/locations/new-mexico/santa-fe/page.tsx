import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Santa Fe Web Design & SEO Services | Forte Web Designs',
  description: 'Professional web design and SEO services in Santa Fe, New Mexico. Custom websites, local SEO, and digital marketing solutions for Santa Fe businesses.',
  openGraph: {
    title: 'Santa Fe Web Design & SEO Services | Forte Web Designs',
    description: 'Professional web design and SEO services in Santa Fe, New Mexico. Custom websites, local SEO, and digital marketing solutions for Santa Fe businesses.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs Santa Fe Services',
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
              Santa Fe Web Design & SEO
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Elevating Santa Fe businesses with artistic web design and SEO solutions. 
              From galleries to government, we help local businesses create compelling digital presences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/checkup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Free Website Audit
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
              Santa Fe's Cultural & Economic Hub
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  The City Different
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  As New Mexico's capital and cultural heart, Santa Fe blends historic charm with modern 
                  innovation. With over 87,000 residents, it's a thriving center for arts, tourism, 
                  government, and healthcare that demands sophisticated digital solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Arts & Culture</h4>
                      <p className="text-gray-600 dark:text-gray-300">World-renowned galleries, museums, and cultural institutions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Tourism Excellence</h4>
                      <p className="text-gray-600 dark:text-gray-300">Major destination requiring strong digital marketing presence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Government Center</h4>
                      <p className="text-gray-600 dark:text-gray-300">State capital with significant government and healthcare presence</p>
                    </div>
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
                    <span className="font-semibold text-gray-900 dark:text-white">2+ million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">6,200+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$62,000</span>
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
              Our Santa Fe Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Artistic Web Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Beautiful, culturally-inspired websites that reflect Santa Fe's unique artistic heritage.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Tourism SEO
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized SEO strategies to attract visitors and connect with Santa Fe's tourist market.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Cultural Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Digital marketing strategies that honor Santa Fe's cultural richness and heritage.
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
                  Artistic Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designs that capture Santa Fe's unique aesthetic and cultural sophistication.
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
                  Deep respect for Santa Fe's multicultural heritage and artistic traditions.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Tourism Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized knowledge in attracting visitors and supporting Santa Fe's tourism economy.
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
              Ready to Showcase Your Santa Fe Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Santa Fe's artistic and cultural businesses that trust Forte Web Designs for digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/checkup"
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Free Website Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
