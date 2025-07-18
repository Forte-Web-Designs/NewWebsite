import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma Web Design Services - Oklahoma City, Tulsa, Norman | Forte Web Designs',
  description: 'Professional web design services throughout Oklahoma. Specializing in Oklahoma City, Tulsa, and Norman markets with local expertise that understands your energy sector and business challenges.',
  keywords: 'Oklahoma web design, Oklahoma City web designer, Tulsa web designer, Norman web design, Oklahoma website development, local web design Oklahoma',
  openGraph: {
    title: 'Oklahoma Web Design Services - Oklahoma City, Tulsa, Norman | Forte Web Designs',
    description: 'Professional web design services throughout Oklahoma. Local expertise in Oklahoma City, Tulsa, and Norman markets.',
    url: 'https://fortewebdesigns.com/locations/oklahoma',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma',
  },
};

const oklahomaCities = [
  {
    city: 'Oklahoma City',
    href: '/locations/oklahoma/oklahoma-city',
    population: '695K+',
    businesses: '35,000+',
    description: 'Energy capital requires professional credibility that matches corporate competition.',
    keyChallenge: 'Energy giants with massive marketing budgets dominate search',
    ourApproach: 'Industry-specific optimization + local Oklahoma authenticity',
    featured: true,
  },
  {
    city: 'Tulsa',
    href: '/locations/oklahoma/tulsa',
    population: '413K+',
    businesses: '28,000+',
    description: 'Oil capital balances traditional relationships with modern digital expectations.',
    keyChallenge: 'Dual market appeal - corporate energy and creative economy',
    ourApproach: 'Adaptive design systems + cultural market sensitivity',
    featured: true,
  },
  {
    city: 'Norman',
    href: '/locations/oklahoma/norman',
    population: '128K+',
    businesses: '8,500+',
    description: 'University town demands technical excellence and academic credibility.',
    keyChallenge: 'Educated customers quickly spot amateur web design',
    ourApproach: 'Technical excellence + year-round optimization',
    featured: false,
  },
];

const oklahomaStats = {
  totalPopulation: '4.0M+',
  totalBusinesses: '320K+',
  metropolitanAreas: '5+',
  economicRank: '#28 in US',
};

export default function OklahomaPage() {
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
                Oklahoma Web Design
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Built for Oklahoma Business
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                Every Oklahoma market has unique challenges. From Oklahoma City energy giants to Tulsa oil-town relationships, we build websites that win in your specific local market.
              </p>
            </div>
            
            {/* Oklahoma Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{oklahomaStats.totalPopulation}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{oklahomaStats.totalBusinesses}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{oklahomaStats.metropolitanAreas}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Metro Areas</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{oklahomaStats.economicRank}</div>
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
                Major Oklahoma Markets
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each Oklahoma city has distinct business challenges that require custom solutions, not generic template websites.
              </p>
            </div>

            {/* Featured Cities Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {oklahomaCities.filter(city => city.featured).map((city) => (
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
                Additional Oklahoma Markets
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {oklahomaCities.filter(city => !city.featured).map((city) => (
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

        {/* Why Oklahoma Businesses Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Oklahoma Businesses Choose Forte
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We understand Oklahoma markets and the energy sector. Local expertise meets custom development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Energy Sector Expertise
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We know Oklahoma City's corporate energy landscape and Tulsa's oil heritage. Your website strategy reflects industry knowledge.
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
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Relationship-Based Results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Oklahoma values relationships. We build websites that earn trust and convert visitors into loyal customers.
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
                Ready to Dominate Your Oklahoma Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how local expertise can transform your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=oklahoma_page&utm_medium=cta_button"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Oklahoma Market Analysis
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
