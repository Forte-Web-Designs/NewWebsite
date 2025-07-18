import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Norman Web Design & SEO Services | Forte Web Designs',
  description: 'Professional web design and SEO services in Norman, Oklahoma. Custom websites, local SEO, and digital marketing solutions for Norman businesses.',
  openGraph: {
    title: 'Norman Web Design & SEO Services | Forte Web Designs',
    description: 'Professional web design and SEO services in Norman, Oklahoma. Custom websites, local SEO, and digital marketing solutions for Norman businesses.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs Norman Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma/norman',
  },
};

export default function NormanPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Norman Web Design & SEO Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering Norman businesses with cutting-edge web design and SEO solutions. 
              From university research to local businesses, we help Norman establish powerful digital presences.
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

      {/* Norman Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Norman's Innovation Hub
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  University Town Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Home to the University of Oklahoma and the National Weather Center, Norman is a 
                  thriving hub of education, research, and innovation. With over 128,000 residents, 
                  Norman combines academic excellence with entrepreneurial spirit.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Education Leadership</h4>
                      <p className="text-gray-600 dark:text-gray-300">Major university driving research and innovation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Weather Technology</h4>
                      <p className="text-gray-600 dark:text-gray-300">National Weather Center and meteorological research</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Healthcare Innovation</h4>
                      <p className="text-gray-600 dark:text-gray-300">Advanced medical facilities and research centers</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Norman Market Insights
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">128,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">University Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white">28,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">8,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$58,000</span>
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
              Our Norman Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Academic Web Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional websites that reflect Norman's intellectual excellence and research innovation.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Local SEO Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dominate Norman search results and connect with the university community and local residents.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive marketing strategies tailored to Norman's academic and business community.
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
              Why Norman Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Research-Grade Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Precision-engineered websites that meet Norman's high academic and professional standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Educational Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized understanding of Norman's educational ecosystem and community needs.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Innovation Driven
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cutting-edge solutions that match Norman's spirit of research and innovation.
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
              Ready to Lead Norman's Digital Innovation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join forward-thinking Norman businesses that trust Forte Web Designs for digital excellence.
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
