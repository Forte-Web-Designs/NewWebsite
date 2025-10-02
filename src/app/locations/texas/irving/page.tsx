import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Irving Growth Systems & Web Design | Corporate-Grade Business Solutions | Forte',
  description: 'Forte builds Growth Systems for Irving businesses that compete with Fortune 500 companies — custom websites, automation, and integrated solutions designed for Texas\'s corporate hub.',
  keywords: 'Irving growth systems, corporate-grade web design Irving, business automation Irving TX, Las Colinas marketing, DFW Airport business solutions, Fortune 500 systems',
  openGraph: {
    title: 'Irving Growth Systems & Web Design | Corporate-Grade Business Solutions',
    description: 'Growth Systems for Irving businesses that compete with Fortune 500 companies — custom websites, automation, and integrated solutions.',
    url: 'https://fortewebdesigns.com/locations/texas/irving',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Growth Systems for Irving, Texas Corporate Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irving Growth Systems & Web Design | Corporate-Grade Solutions',
    description: 'Growth Systems for Irving businesses that compete with Fortune 500 companies.',
    images: ['https://fortewebdesigns.com/images/og-image.jpg'],
  },
}

export default function IrvingWebDesigner() {
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
                Business Growth Systems Partner in Irving, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Irving Growth Systems for Texas's Corporate Heartland
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From Las Colinas to DFW Airport, we help Irving businesses scale with <strong>corporate-grade websites, automated follow-up, and integrated systems</strong> designed for Fortune 500 standards and local market growth.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=irving" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Book Free Irving Growth Snapshot
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

        {/* Irving Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Irving's Growth Hub: Where Business Meets Innovation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Home to Fortune 500 headquarters, Las Colinas, and DFW Airport's international commerce, Irving is one of Texas's most business-focused cities. Competing here requires more than a nice website — you need a Growth System built for corporate-level expectations and measurable results.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">240k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">18k+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">$72k</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Median Income</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600 mb-2">3rd</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Largest TX City</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">The Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Irving businesses face Fortune 500 competitors with million-dollar budgets, making it hard to stand out without corporate-grade systems.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Growth Systems combining <strong>custom-coded websites, smart automation, and business dashboards</strong> that deliver enterprise-level performance with small-business agility.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Deep knowledge of <strong>Las Colinas corporate culture</strong> and <strong>DFW Airport's global commerce flow</strong> ensures your system is tailored to Irving's unique market mix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for Irving */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Corporate Growth System Services for Irving Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From corporate services to international trade, we create Growth Systems that meet Irving's high business standards and deliver measurable results.
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
                  Corporate-grade websites that establish credibility and meet Fortune 500 presentation standards.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Professional, custom-coded websites</li>
                  <li>• Multi-device optimization (boardroom + mobile)</li>
                  <li>• Enterprise-level security & compliance</li>
                  <li>• Corporate branding & presentation standards</li>
                </ul>
              </div>

              {/* Growth Layer */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="search" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Growth Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated systems that capture local Irving searches and B2B keywords with smart follow-up.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Business-focused SEO & B2B targeting</li>
                  <li>• Automated lead capture & follow-up</li>
                  <li>• CRM integration & client management</li>
                  <li>• Email marketing & nurture sequences</li>
                </ul>
              </div>

              {/* Scaling Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="analytics" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scaling Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced systems with high-traffic performance and business intelligence dashboards.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Advanced dashboards & reporting</li>
                  <li>• High-traffic & uptime performance</li>
                  <li>• Enterprise integrations & APIs</li>
                  <li>• Multi-location management systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Irving Business Districts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Growth Systems Across All Irving Districts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From Las Colinas to DFW Airport, we deliver Growth Systems throughout Irving's diverse commercial districts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Las Colinas", description: "Corporate Growth Systems for headquarters & business services" },
                { area: "DFW Airport Area", description: "International commerce & logistics Growth Systems" },
                { area: "Irving Business District", description: "Professional services Growth Systems" },
                { area: "Valley Ranch", description: "Mixed-use business + residential systems" },
                { area: "North Irving", description: "Local business Growth Systems" },
                { area: "South Irving", description: "Industrial & manufacturing Growth Systems" }
              ].map((location, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white text-primary-600">{location.area}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Irving Businesses Choose Forte */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Irving Businesses Choose Forte
              </h2>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="design" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Corporate-Grade Systems</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites and integrations built to Fortune 500 standards.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="target" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">B2B & Local Reach</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  One system that captures enterprise clients and local customers alike.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon name="analytics" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Data-Driven Growth</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dashboards, automation, and reporting to measure ROI in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Scale with Corporate-Grade Growth Systems?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Irving businesses choose Forte Growth Systems to compete with corporate giants while still connecting locally. Whether you're serving Las Colinas executives, airport travelers, or North Irving neighborhoods — we build systems that help you scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=irving" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start My Irving Growth System
              </Link>
              <Link 
                href="/contact?location=irving" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center gap-2"
              >
                Book Free Irving Market Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
