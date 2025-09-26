import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Arlington Growth Systems & Web Design | Entertainment Capital Business Solutions | Forte',
  description: 'Forte builds Growth Systems for Arlington businesses that need to compete in Texas\'s entertainment capital — custom websites, automation, and SEO designed to capture both locals and millions of annual visitors.',
  keywords: 'Arlington growth systems, business growth Arlington TX, Arlington web design, entertainment capital marketing, Arlington automation systems, AT&T Stadium marketing',
  openGraph: {
    title: 'Arlington Growth Systems & Web Design | Entertainment Capital Business Solutions',
    description: 'Growth Systems for Arlington businesses — custom websites, automation, and SEO designed to capture both locals and millions of annual visitors.',
    url: 'https://fortewebdesigns.com/locations/texas/arlington',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Growth Systems for Arlington, Texas Entertainment Capital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arlington Growth Systems & Web Design | Entertainment Capital Solutions',
    description: 'Growth Systems for Arlington businesses that compete in Texas\'s entertainment capital.',
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
                Business Growth Systems Partner in Arlington, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Arlington Growth Systems for Texas's Entertainment Capital
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From AT&T Stadium to Globe Life Field, we help Arlington businesses grow with <strong>custom-coded websites, automated follow-ups, and integrated business systems</strong> designed to capture both fans and locals.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=arlington" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Book Free Arlington Growth Audit
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

        {/* Arlington Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Arlington's Digital Arena: Where Businesses Compete & Win
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Arlington is Texas's entertainment capital, home to the Cowboys, Rangers, Six Flags, and millions of annual visitors. In this high-energy, high-traffic market, your business needs a Growth System that can handle both local customers and the massive tourist influx.
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
                    Arlington businesses must appeal to both local customers and millions of visitors while standing out in an entertainment-saturated market.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Growth Systems that combine <strong>custom-coded websites, smart automation, and SEO strategies</strong> designed for both local and tourist search traffic.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">The Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Arlington's unique dual-market environment — and build systems that perform during game-day surges, seasonal events, and everyday local business needs.
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
                Growth System Services for Arlington Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From sports businesses to entertainment venues, we create Growth Systems that win in Arlington's diverse, high-energy market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Foundation Layer */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="design" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Foundation Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Stadium-quality websites built for high-traffic performance and polished presentation.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Custom-coded websites built for high traffic</li>
                  <li>• Mobile-first design for on-the-go visitors</li>
                  <li>• Event-ready load speeds & reliability</li>
                  <li>• Professional branding that stands out</li>
                </ul>
              </div>

              {/* Growth Layer */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="search" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Growth Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated systems that capture both local residents and tourist visitors with smart follow-up.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Dual-market SEO (locals + tourists)</li>
                  <li>• Automated follow-up sequences</li>
                  <li>• Lead capture during major events</li>
                  <li>• Social media integration & management</li>
                </ul>
              </div>

              {/* Scaling Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="analytics" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scaling Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced systems with location-based marketing and event-driven optimization.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Advanced dashboards & reporting</li>
                  <li>• Location-based lead routing</li>
                  <li>• Event traffic optimization</li>
                  <li>• Multi-location management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Arlington Districts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Growth Systems Across All Arlington Districts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From the Entertainment District to South Arlington, we deliver Growth Systems throughout Arlington's diverse business areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Entertainment District", description: "Sports + Venue Growth Systems" },
                { area: "Downtown Arlington", description: "Local Business Growth Systems" },
                { area: "Parks Mall Area", description: "Retail + Shopping Growth Systems" },
                { area: "UTA District", description: "Education + Student Service Systems" },
                { area: "South Arlington", description: "Residential + Community Market Solutions" },
                { area: "I-30 Corridor", description: "Business + Commercial Growth Systems" }
              ].map((location, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-primary-600">{location.area}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Arlington Businesses Choose Forte */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Arlington Businesses Choose Forte
              </h2>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="speed" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Entertainment-Ready Systems</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites built to handle game-day spikes and 10M+ annual visitors.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="target" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Dual-Market Targeting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  One system that captures both tourists and loyal locals.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="analytics" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Measurable ROI</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Track leads, bookings, and sales during major events and everyday traffic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Compete & Win in Arlington's Digital Arena?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Arlington businesses choose Forte Growth Systems to compete with corporate venues and national chains — and win more customers with measurable, predictable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=arlington" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start My Arlington Growth System
              </Link>
              <Link 
                href="/contact?location=arlington" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center gap-2"
              >
                Book Free Arlington Market Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
