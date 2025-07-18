import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/images/Icon'
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation'

export const metadata: Metadata = {
  title: 'Web Designer in Irving, Texas | Professional Website Design & SEO Services',
  description: 'Professional web design services in Irving, TX. Custom websites, local SEO, and digital marketing solutions for Irving businesses. Get started today!',
  keywords: 'web designer Irving TX, website design Irving, Irving web development, local SEO Irving, digital marketing Irving Texas',
  openGraph: {
    title: 'Professional Web Designer in Irving, Texas | Forte Web Designs',
    description: 'Custom websites and digital marketing solutions for Irving businesses. Expert web design with local SEO optimization.',
    url: 'https://fortewebdesigns.com/locations/texas/irving',
    type: 'website',
    images: [
      {
        url: 'https://fortewebdesigns.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs - Professional Web Design in Irving, Texas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Designer in Irving, Texas',
    description: 'Custom websites and digital marketing solutions for Irving businesses.',
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
                Web Designer in Irving, Texas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Professional Web Design for Irving's Corporate Heartland
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Custom websites that reflect Irving's corporate excellence. From Las Colinas to DFW Airport, we help local businesses soar with cutting-edge web design and SEO that connects with Irving's business-focused community.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=irving" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-flex items-center gap-2 justify-center"
              >
                Get Your Irving Website Quote
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

        {/* Irving Market Insights */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Irving's Business Ecosystem: Where Commerce Takes Flight
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Home to corporate headquarters, DFW Airport, and Las Colinas, Irving is a business powerhouse. Your website needs to compete in this sophisticated market where Fortune 500 companies set the standard.
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
                    Irving's corporate environment means high expectations for professional presentation. Your website must meet Fortune 500 standards to compete effectively.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Our Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We create corporate-grade websites that match Irving's business sophistication while optimizing for both local and corporate search terms.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Local Advantage</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Irving's unique business culture – from Las Colinas corporate campuses to DFW Airport's international commerce hub.
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
                Corporate-Grade Web Design Services for Irving Businesses
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From corporate services to international trade, we create professional websites that meet Irving's high business standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="design" className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Corporate Web Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Professional websites that match Irving's corporate excellence and establish credibility with business clients.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="search" className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Business-Focused SEO</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Strategic SEO that targets both local Irving searches and corporate B2B keywords to capture your ideal clients.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="mobile" className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Multi-Device Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Responsive websites that work flawlessly on all devices, from boardroom presentations to mobile airport browsing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="speed" className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Enterprise Performance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  High-performance websites that load quickly and handle traffic spikes, meeting corporate uptime expectations.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="security" className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Corporate Security</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Enterprise-level security measures that protect your business data and meet compliance requirements.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/40 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="analytics" className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">Business Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced analytics and reporting that provide insights into your Irving market performance and ROI.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Irving Business Districts */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Serving All of Irving
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                From Las Colinas to DFW Airport, we serve businesses throughout Irving's diverse commercial districts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { area: "Las Colinas", description: "Corporate headquarters and business services" },
                { area: "DFW Airport Area", description: "International trade and logistics" },
                { area: "Irving Business District", description: "Professional services and consulting" },
                { area: "Valley Ranch", description: "Mixed-use commercial and residential" },
                { area: "North Irving", description: "Local businesses and community services" },
                { area: "South Irving", description: "Industrial and manufacturing services" }
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
              Ready to Take Your Irving Business to New Heights?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Join Irving's leading businesses already soaring with professional web design from Forte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?location=irving" 
                className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Start Your Irving Web Design Project
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
