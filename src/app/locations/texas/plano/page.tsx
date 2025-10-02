import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Plano Growth Systems & Web Design | Compete With Corporate Sophistication | Forte',
  description: 'Forte helps Plano businesses grow with custom websites, automation, and SEO designed to meet corporate-level expectations. From Legacy West to downtown, we deliver measurable results.',
  keywords: 'Plano growth systems, Plano business automation, Legacy West web design, Plano CRM systems, corporate web design Plano, Plano SEO services',
  openGraph: {
    title: 'Plano Growth Systems & Web Design | Compete With Corporate Sophistication | Forte',
    description: 'Forte helps Plano businesses grow with custom websites, automation, and SEO designed to meet corporate-level expectations. From Legacy West to downtown, we deliver measurable results.',
    url: 'https://fortewebdesigns.com/locations/texas/plano',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Plano Growth Systems & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plano Growth Systems & Web Design | Corporate Sophistication',
    description: 'Custom websites, automation, and SEO designed to meet corporate-level expectations in Plano, Texas.',
    images: ['https://fortewebdesigns.com/images/og-image.jpg'],
  },
}

export default function PlanoWebDesigner() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
                <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Plano, Texas Growth Systems
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Plano Growth Systems for Texas's Corporate Capital
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From Legacy West startups to corporate headquarters, we help Plano businesses grow with <strong>custom websites, smart automation, and integrated business systems</strong> built for the city's sophisticated, tech-forward market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=plano" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Plano Growth Snapshot
                <Icon name="rightarrow" className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkup" 
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Free Website & Growth Analysis
                <Icon name="search" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Plano Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Plano's Corporate Capital: Where Sophistication Meets Results
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Plano is the corporate headquarters capital of Texas, home to tech startups, Fortune 500 companies, and a highly educated consumer base. Your digital presence must meet the highest expectations — fast, secure, mobile-first, and results-driven.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">295k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">15k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">$98k</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Median Income</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">Top 3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Best Places to Live</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Plano's competitive, corporate-heavy market makes it difficult to stand out against billion-dollar brands and their sophisticated digital presence.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Growth Systems that blend <strong>custom-coded websites, automation, and advanced SEO</strong> to help local businesses compete with Fortune 500 sophistication.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">The Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand both Legacy West's corporate demands and downtown Plano's small-business charm — your system reflects both innovation and authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Plano */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Growth System Services for Plano Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From Legacy West startups to established Plano enterprises, we provide integrated Growth Systems that deliver measurable results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="design" className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Foundation Websites</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom-coded 5-page websites that reflect Plano's professional sophistication and corporate standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="search" className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Growth Layer Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Targeted local SEO + automated follow-ups that help you dominate Plano search results and capture high-value leads.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="mobile" className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Mobile-First Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Included in every layer: Responsive websites that work perfectly on all devices for Plano's mobile-savvy consumers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="speed" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Standard with our custom-coded framework: Lightning-fast websites that meet corporate-level expectations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="security" className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scaling Layer feature: CRM + security integration to meet corporate standards and protect high-value client data.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="analytics" className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Advanced Dashboards & Reporting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Scaling Layer upgrade: Comprehensive tracking and reporting to measure ROI and business growth in the Plano market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Plano Businesses Choose Forte */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Plano Businesses Choose Forte Growth Systems
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We understand Plano's corporate sophistication and build Growth Systems that compete at the highest level.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Corporate Market Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We know how to position businesses against billion-dollar competitors with sophisticated Growth Systems.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Custom Growth Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites + automation + CRM designed for Plano sophistication and high-value client expectations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Measurable ROI
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every system is built to track leads, revenue, and long-term customer retention with corporate-level reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Compete at Corporate Level?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Plano businesses choose Forte Growth Systems to compete with corporate giants, capture high-value clients, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=plano" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Plano Growth System
              </Link>
              <Link 
                href="/contact?utm_source=plano_page&utm_medium=market_analysis" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center gap-2"
              >
                Book Free Plano Market Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
