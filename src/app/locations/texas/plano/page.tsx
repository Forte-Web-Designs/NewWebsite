import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Web Designer in Plano, Texas | Professional Website Design & SEO Services',
  description: 'Professional web design services in Plano, TX. Custom websites, local SEO, and digital marketing solutions for Plano businesses. Get started today!',
  keywords: 'web designer Plano TX, website design Plano, Plano web development, local SEO Plano, digital marketing Plano Texas',
  openGraph: {
    title: 'Professional Web Designer in Plano, Texas | Forte Web Designs',
    description: 'Custom websites and digital marketing solutions for Plano businesses. Expert web design with local SEO optimization.',
    url: 'https://fortewebdesigns.com/locations/texas/plano',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Professional Web Design in Plano, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Designer in Plano, Texas',
    description: 'Custom websites and digital marketing solutions for Plano businesses.',
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
                Web Designer in Plano, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Professional Web Design for Plano's Growing Business Community
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Custom websites that capture the spirit of Plano's innovation and business growth. From Legacy West to downtown, we help local businesses dominate their markets with cutting-edge web design and SEO.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=plano" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Plano Website Quote
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

        {/* Plano Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Plano's Business Landscape: Innovation Meets Opportunity
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Plano is home to some of Texas's most innovative businesses, from tech startups in Legacy West to established enterprises throughout the city. Your website needs to reflect this level of sophistication and innovation.
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
                    Plano's competitive business environment means your website needs to stand out among highly educated, tech-savvy consumers who expect premium online experiences.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We create sophisticated, fast-loading websites that match the high expectations of Plano's affluent market, with advanced SEO to capture "web designer near me" searches.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Legacy West's corporate culture, downtown Plano's historic charm, and the diverse neighborhoods that make up this thriving city.
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
                Web Design Services Tailored for Plano Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From Legacy West startups to established Plano enterprises, we provide comprehensive digital solutions that drive growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="design" className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Premium Web Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  High-end custom websites that reflect Plano's sophisticated business environment and attract your target market.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="search" className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Local Plano SEO</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dominate local search results for "web designer near me" and industry-specific terms throughout Plano and surrounding areas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="mobile" className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Mobile-First Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive websites that work perfectly on all devices, crucial for Plano's mobile-savvy consumers.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="speed" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Performance Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning-fast websites that meet the high expectations of Plano's tech-forward business community.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="security" className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Enterprise Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bank-level security features that protect your business and customer data, meeting corporate standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="analytics" className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Analytics & Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive tracking and reporting to measure your website's performance and ROI in the Plano market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Plano Business Online?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join Plano businesses already thriving with professional web design from Forte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=plano" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Plano Web Design Project
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
