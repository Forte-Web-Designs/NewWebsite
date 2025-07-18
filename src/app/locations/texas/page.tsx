import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Texas Web Design Services - Dallas, Fort Worth, DFW | Forte Web Designs',
  description: 'Professional web design services throughout Texas. Specializing in Dallas, Fort Worth, and DFW metro markets with local expertise that understands your business challenges.',
  keywords: 'Texas web design, Dallas web designer, Fort Worth web designer, DFW web design, Texas website development, local web design Texas',
  openGraph: {
    title: 'Texas Web Design Services - Dallas, Fort Worth, DFW | Forte Web Designs',
    description: 'Professional web design services throughout Texas. Local expertise in Dallas, Fort Worth, and DFW metro markets.',
    url: 'https://fortewebdesigns.com/locations/texas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/texas',
  },
};

const texasCities = [
  {
    city: 'Dallas',
    href: '/locations/texas/dallas',
    population: '1.3M+',
    businesses: '45,000+',
    description: 'Big D competition demands custom solutions that outperform template websites.',
    keyChallenge: 'Corporate giants dominating search results',
    ourApproach: 'Lightning-fast custom code + local SEO mastery',
    featured: true,
  },
  {
    city: 'Fort Worth',
    href: '/locations/texas/fort-worth',
    population: '950K+',
    businesses: '32,000+',
    description: 'Cowtown authenticity meets modern business needs.',
    keyChallenge: 'Balancing tradition with digital innovation',
    ourApproach: 'Authentic Texas branding + mobile-first design',
    featured: true,
  },
  {
    city: 'Plano',
    href: '/locations/texas/plano',
    population: '285K+',
    businesses: '8,500+',
    description: 'Corporate headquarters capital requires enterprise-level solutions.',
    keyChallenge: 'Competing with Fortune 500 marketing budgets',
    ourApproach: 'Professional positioning + premium user experience',
    featured: false,
  },
  {
    city: 'Frisco',
    href: '/locations/texas/frisco',
    population: '200K+',
    businesses: '6,200+',
    description: 'Fastest-growing city needs fast-launching websites.',
    keyChallenge: 'New competition opening daily',
    ourApproach: 'Quick-launch optimization + modern mobile design',
    featured: false,
  },
  {
    city: 'Arlington',
    href: '/locations/texas/arlington',
    population: '395K+',
    businesses: '12,000+',
    description: 'Sports capital requires high-performance architecture.',
    keyChallenge: 'Event traffic spikes crash template websites',
    ourApproach: 'Scalable performance + conversion optimization',
    featured: false,
  },
  {
    city: 'Irving',
    href: '/locations/texas/irving',
    population: '240K+',
    businesses: '7,800+',
    description: 'Business hub between Dallas and Fort Worth.',
    keyChallenge: 'Getting noticed between major markets',
    ourApproach: 'Strategic positioning + local SEO focus',
    featured: false,
  },
];

const texasStats = {
  totalPopulation: '30M+',
  totalBusinesses: '2.8M+',
  metropolitanAreas: '25+',
  economicRank: '#2 in US',
};

export default function TexasPage() {
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
                Texas Web Design
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Built for Texas Business
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Every Texas market has unique challenges. From Dallas corporate giants to Fort Worth authenticity, we build websites that win in your specific local market.
              </p>
            </div>
            
            {/* Texas Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{texasStats.totalPopulation}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{texasStats.totalBusinesses}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{texasStats.metropolitanAreas}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Metro Areas</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{texasStats.economicRank}</div>
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
                Major Texas Markets
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Each Texas city has distinct business challenges that require custom solutions, not generic template websites.
              </p>
            </div>

            {/* Featured Cities Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {texasCities.filter(city => city.featured).map((city) => (
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
                Additional Texas Markets
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {texasCities.filter(city => !city.featured).map((city) => (
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

        {/* Why Texas Businesses Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Texas Businesses Choose Forte
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We understand Texas markets because we're based here. Local expertise meets custom development.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Local Market Knowledge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We know Dallas competition, Fort Worth authenticity, and Plano expectations. Your website strategy reflects local market realities.
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
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Texas-Sized Results
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Websites that convert Texas customers. Built for local search, mobile-first, and designed to outperform competitors.
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
                Ready to Dominate Your Texas Market?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and discover how local expertise can transform your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=texas_page&utm_medium=cta_button"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Texas Market Analysis
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
