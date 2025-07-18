import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Mexico Web Design Services - Albuquerque, Santa Fe, Las Cruces | Forte Web Designs',
  description: 'Professional web design services throughout New Mexico. Specializing in Albuquerque, Santa Fe, and Las Cruces markets with cultural expertise that understands your Southwest business challenges.',
  keywords: 'New Mexico web design, Albuquerque web designer, Santa Fe web designer, Las Cruces web design, New Mexico website development, local web design New Mexico',
  openGraph: {
    title: 'New Mexico Web Design Services - Albuquerque, Santa Fe, Las Cruces | Forte Web Designs',
    description: 'Professional web design services throughout New Mexico. Cultural expertise in Albuquerque, Santa Fe, and Las Cruces markets.',
    url: 'https://fortewebdesigns.com/locations/new-mexico',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/new-mexico',
  },
};

const newMexicoCities = [
  {
    city: 'Albuquerque',
    href: '/locations/new-mexico/albuquerque',
    population: '562K+',
    businesses: '38,000+',
    description: 'Desert metropolis balances tech innovation with authentic Southwest culture.',
    keyChallenge: 'Generic corporate websites dominate search results over local businesses',
    ourApproach: 'Culturally-aware design + Southwest-inspired branding',
    featured: true,
  },
  {
    city: 'Santa Fe',
    href: '/locations/new-mexico/santa-fe',
    population: '87K+',
    businesses: '6,200+',
    description: 'The City Different serves 2M+ annual visitors and discerning locals.',
    keyChallenge: 'Dual market appeal - tourists vs. residents with different needs',
    ourApproach: 'Adaptive messaging + artistic sophistication',
    featured: true,
  },
  {
    city: 'Las Cruces',
    href: '/locations/new-mexico/las-cruces',
    population: '111K+',
    businesses: '7,500+',
    description: 'University town with agricultural heritage and growing tech sector.',
    keyChallenge: 'Balancing student-friendly pricing with professional service messaging',
    ourApproach: 'Value communication + bilingual optimization',
    featured: false,
  },
];

const newMexicoStats = {
  totalPopulation: '2.1M+',
  totalBusinesses: '180K+',
  metropolitanAreas: '4+',
  economicRank: '#37 in US',
};

export default function NewMexicoPage() {
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
                New Mexico Web Design
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Built for Southwest Business
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                Every New Mexico market has unique challenges. From Albuquerque's tech scene to Santa Fe's artistic heritage, we build websites that honor your local culture while driving results.
              </p>
            </div>
            
            {/* New Mexico Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{newMexicoStats.totalPopulation}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{newMexicoStats.totalBusinesses}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{newMexicoStats.metropolitanAreas}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Metro Areas</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{newMexicoStats.economicRank}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Economy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Major New Mexico Markets
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each New Mexico city has distinct cultural characteristics that require authentic solutions, not generic template websites.
              </p>
            </div>

            {/* Featured Cities Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {newMexicoCities.filter(city => city.featured).map((city) => (
                <div key={city.city} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {city.city}
                      </h3>
                      <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{city.population} people</span>
                        <span>{city.businesses} businesses</span>
                      </div>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {city.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">Key Challenge:</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">{city.keyChallenge}</p>
                  </div>
                  
                  <div className="mb-6 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-900 dark:text-green-400 mb-1">Our Approach:</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">{city.ourApproach}</p>
                  </div>
                  
                  <Link
                    href={city.href}
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group-hover:shadow-md"
                  >
                    See {city.city} Solutions
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Cities */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Additional New Mexico Markets
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {newMexicoCities.filter(city => !city.featured).map((city) => (
                  <div key={city.city} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {city.city}
                        </h4>
                        <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{city.population}</span>
                          <span>•</span>
                          <span>{city.businesses}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {city.description}
                    </p>
                    
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-3">
                      <span className="font-medium">Challenge:</span> {city.keyChallenge}
                    </div>
                    
                    <Link
                      href={city.href}
                      className="inline-flex items-center justify-center w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why New Mexico Businesses Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why New Mexico Businesses Choose Forte
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We understand Southwest culture and bilingual markets. Cultural expertise meets custom development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌵</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Southwest Cultural Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We understand Albuquerque's tech scene, Santa Fe's arts community, and Las Cruces' bilingual markets.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Custom Code Performance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No WordPress templates. Every website is custom-coded for maximum speed, security, and search rankings.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Authentic Design Heritage
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Websites that honor New Mexico's unique character while delivering modern functionality and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Honor Your New Mexico Heritage?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how cultural expertise can transform your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=new-mexico_page&utm_medium=cta_button"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free New Mexico Market Analysis
                </Link>
                <Link
                  href="tel:8178736655"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Call (817) 873-6655
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
