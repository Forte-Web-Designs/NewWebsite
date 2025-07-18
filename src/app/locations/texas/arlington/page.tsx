import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Web Designer in Arlington, Texas | Professional Website Design & SEO Services',
  description: 'Professional web design services in Arlington, TX. Custom websites, local SEO, and digital marketing solutions for Arlington businesses. Get started today!',
  keywords: 'web designer Arlington TX, website design Arlington, Arlington web development, local SEO Arlington, digital marketing Arlington Texas',
  openGraph: {
    title: 'Professional Web Designer in Arlington, Texas | Forte Web Designs',
    description: 'Custom websites and digital marketing solutions for Arlington businesses. Expert web design with local SEO optimization.',
    url: 'https://fortewebdesigns.com/locations/texas/arlington',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Professional Web Design in Arlington, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Designer in Arlington, Texas',
    description: 'Custom websites and digital marketing solutions for Arlington businesses.',
    images: ['https://fortewebdesigns.com/images/og-image.jpg'],
  },
}

export default function ArlingtonWebDesigner() {
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
                Web Designer in Arlington, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Professional Web Design for Arlington's Entertainment Capital
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Custom websites that capture Arlington's dynamic energy. From AT&T Stadium to Globe Life Field, we help local businesses hit home runs with cutting-edge web design and SEO that brings fans to your door.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=arlington" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Arlington Website Quote
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

        {/* Arlington Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Arlington's Digital Stadium: Where Businesses Score Big
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Home to the Cowboys, Rangers, and Six Flags, Arlington is Texas's entertainment capital. Your website needs to compete in this high-energy, high-expectation market where millions of visitors come to play.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">395k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">20k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">10M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Annual Visitors</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">#1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Entertainment Hub</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Arlington's massive tourist influx creates opportunity but also intense competition. Your website must capture both local customers and visiting fans.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We create high-impact websites that stand out in Arlington's crowded market, optimized for both local searches and tourist traffic.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Arlington's unique dual market – serving both local residents and millions of entertainment-seeking visitors year-round.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Arlington */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Championship Web Design Services for Arlington Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From sports businesses to entertainment venues, we create winning websites that connect with Arlington's diverse, high-energy market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="design" className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Stadium-Quality Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional websites that match Arlington's world-class entertainment venues and capture visitor attention.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="search" className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Dual-Market SEO</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimize for both local Arlington searches and tourist traffic, capturing customers from both resident and visitor markets.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="mobile" className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Mobile-First Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive websites that work perfectly for on-the-go visitors checking your business from AT&T Stadium parking lots.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="speed" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">High-Traffic Performance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites built to handle high-volume traffic during game days and events, ensuring you never miss a customer.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="location" className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Location-Based Marketing</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Targeted campaigns that capture customers near major Arlington attractions and entertainment districts.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="analytics" className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Event-Driven Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track performance during major events and optimize your website for peak Arlington entertainment season traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Districts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Serving All of Arlington
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From the Entertainment District to South Arlington, we serve businesses throughout the city's diverse areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Entertainment District", description: "Sports and venue-related businesses" },
                { area: "Downtown Arlington", description: "Local businesses and professional services" },
                { area: "Parks Mall Area", description: "Retail and shopping center businesses" },
                { area: "UTA District", description: "Student-focused and educational services" },
                { area: "South Arlington", description: "Residential and community services" },
                { area: "I-30 Corridor", description: "Business and commercial services" }
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
              Ready to Score Big in Arlington's Digital Arena?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join Arlington businesses already winning big with professional web design from Forte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=arlington" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Arlington Web Design Project
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
