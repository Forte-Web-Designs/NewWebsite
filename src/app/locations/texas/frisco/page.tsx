import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Web Designer in Frisco, Texas | Professional Website Design & SEO Services',
  description: 'Professional web design services in Frisco, TX. Custom websites, local SEO, and digital marketing solutions for Frisco businesses. Get started today!',
  keywords: 'web designer Frisco TX, website design Frisco, Frisco web development, local SEO Frisco, digital marketing Frisco Texas',
  openGraph: {
    title: 'Professional Web Designer in Frisco, Texas | Forte Web Designs',
    description: 'Custom websites and digital marketing solutions for Frisco businesses. Expert web design with local SEO optimization.',
    url: 'https://fortewebdesigns.com/locations/texas/frisco',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Professional Web Design in Frisco, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Designer in Frisco, Texas',
    description: 'Custom websites and digital marketing solutions for Frisco businesses.',
    images: ['https://fortewebdesigns.com/images/og-image.jpg'],
  },
}

export default function FriscoWebDesigner() {
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
                Web Designer in Frisco, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Professional Web Design for Frisco's Sports & Business Hub
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Custom websites that capture the championship spirit of Frisco. From The Star to Main Street, we help local businesses score big with cutting-edge web design and SEO that dominates the competition.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=frisco" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Frisco Website Quote
                <Icon name="rightarrow" className="w-4 h-4" />
              </Link>
              <Link 
                href="/checkup" 
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Free Website Analysis
                <Icon name="search" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Frisco Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frisco's Digital Playing Field: Where Champions Are Made
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  From the Dallas Cowboys at The Star to FC Dallas at Toyota Stadium, Frisco is synonymous with excellence. Your website needs to reflect this championship mentality and perform at the highest level.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">200k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">12k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">$115k</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Median Income</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">#1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Sports City USA</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Frisco's rapid growth and high-income demographics create intense competition. Your website must be as polished as The Star's facilities.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We create championship-level websites that capture the attention of Frisco's affluent, sports-loving community while dominating local search results.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Frisco's unique blend of sports culture, family values, and business ambition – from The Star's corporate presence to Main Street's local charm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Frisco */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Championship Web Design Services for Frisco Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From sports-related businesses to family services, we create winning websites that connect with Frisco's unique community.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="design" className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Championship Web Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Award-winning websites that reflect Frisco's excellence and attract your target audience with professional design.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="search" className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Local Frisco SEO</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dominate local search results for "web designer near me" and rank #1 for your industry in Frisco and surrounding areas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="mobile" className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Mobile-Optimized</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive websites that work perfectly on all devices, crucial for Frisco's active, mobile-first lifestyle.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="speed" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Lightning Speed</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fast-loading websites that keep up with Frisco's fast-paced lifestyle and Google's performance standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="security" className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Pro-Level Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Championship-grade security that protects your business and customers, meeting the highest industry standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="analytics" className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Performance Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed tracking and reporting to measure your website's success and ROI in the competitive Frisco market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frisco-Specific Areas */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Serving All of Frisco
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From The Star to Preston Road, we serve businesses throughout Frisco's diverse neighborhoods
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "The Star District", description: "Professional websites for corporate headquarters" },
                { area: "Main Street", description: "Local business websites with historic charm" },
                { area: "Preston Road Corridor", description: "Retail and service business websites" },
                { area: "Frisco Square", description: "Entertainment and dining websites" },
                { area: "Stonebriar Centre", description: "Shopping and retail websites" },
                { area: "West Frisco", description: "Residential service websites" }
              ].map((location, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-primary-600">{location.area}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Win in Frisco's Digital Arena?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join championship-level Frisco businesses already winning with professional web design from Forte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=frisco" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Frisco Web Design Project
              </Link>
              <Link 
                href="tel:8178736655" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center gap-2"
              >
                📞 Call (817) 873-6655
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
