import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Frisco Growth Systems & Web Design | Championship-Level Business Solutions | Forte',
  description: 'Forte helps Frisco businesses compete with championship-level Growth Systems: custom websites, smart automation, and SEO designed to dominate search and deliver measurable results.',
  keywords: 'Frisco growth systems, Frisco business automation, The Star web design, Frisco CRM systems, championship web design Frisco, Frisco SEO services',
  openGraph: {
    title: 'Frisco Growth Systems & Web Design | Championship-Level Business Solutions | Forte',
    description: 'Forte helps Frisco businesses compete with championship-level Growth Systems: custom websites, smart automation, and SEO designed to dominate search and deliver measurable results.',
    url: 'https://fortewebdesigns.com/locations/texas/frisco',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Frisco Growth Systems & Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frisco Growth Systems & Web Design | Championship-Level Solutions',
    description: 'Custom websites, smart automation, and SEO designed to dominate search and deliver measurable results in Frisco, Texas.',
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
                Frisco, Texas Growth Systems
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Frisco Growth Systems for Texas's Sports & Business Hub
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                From The Star to Main Street, we help Frisco businesses grow with <strong>custom-coded websites, smart automation, and integrated business systems</strong> built to perform at championship level.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=frisco" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Frisco Growth Audit
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

        {/* Frisco Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Frisco's Championship Market: Where Growth Systems Win
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Frisco is one of the fastest-growing cities in the U.S., home to championship teams, Fortune 500 headquarters, and affluent families. Your website has to compete at the highest level — fast, polished, and measurable.
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
                    Frisco's rapid growth, affluent customer base, and championship reputation create a high bar for businesses to compete online.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Growth Systems that combine <strong>custom-coded websites, automated follow-ups, and advanced SEO</strong> to deliver measurable ROI.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">The Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Frisco's unique culture — part sports hub, part family community, part corporate powerhouse — and design systems that resonate across all audiences.
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
                Growth System Services for Frisco Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From sports-related businesses to family services, we create championship-level Growth Systems that deliver winning results.
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
                  Championship-quality websites that establish your Frisco business as the clear leader.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Custom web design reflecting Frisco's winning spirit</li>
                  <li>• Mobile-first responsive development</li>
                  <li>• Local SEO domination for Frisco searches</li>
                  <li>• Professional branding that stands out</li>
                </ul>
              </div>

              {/* Growth Layer */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="growth" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Growth Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated systems that capture and convert Frisco's affluent market into loyal customers.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Lead capture automation for The Star & Legacy West</li>
                  <li>• Email marketing sequences that convert</li>
                  <li>• Social media integration & management</li>
                  <li>• Customer relationship management systems</li>
                </ul>
              </div>

              {/* Scaling Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="analytics" className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scaling Layer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Advanced analytics and optimization systems that maximize your championship performance.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Advanced analytics & performance tracking</li>
                  <li>• Conversion rate optimization testing</li>
                  <li>• Multi-location management systems</li>
                  <li>• Custom integrations & advanced features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Frisco-Specific Areas */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Growth Systems Across All Frisco Districts
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From The Star to Preston Road, we deliver championship-level Growth Systems throughout Frisco's business districts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "The Star District", description: "Growth Systems for corporate headquarters & championship businesses" },
                { area: "Main Street", description: "Growth Systems blending historic charm with modern automation" },
                { area: "Preston Road Corridor", description: "Growth Systems for retail & service businesses" },
                { area: "Frisco Square", description: "Growth Systems for entertainment & dining establishments" },
                { area: "Stonebriar Centre", description: "Growth Systems for shopping & retail operations" },
                { area: "West Frisco", description: "Growth Systems for residential service providers" }
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
              Ready to Build Your Championship Growth System?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join championship-level Frisco businesses already winning with Growth Systems from Forte Web Designs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=frisco" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Get Your Frisco Growth Audit
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
