import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'New Mexico Web Design & SEO Services | Forte Web Designs',
  description: 'Professional web design and SEO services across New Mexico. Serving Albuquerque, Santa Fe, Las Cruces and surrounding areas with custom websites that drive business growth.',
  openGraph: {
    title: 'New Mexico Web Design & SEO Services | Forte Web Designs',
    description: 'Professional web design and SEO services across New Mexico. Serving Albuquerque, Santa Fe, Las Cruces and surrounding areas with custom websites that drive business growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs New Mexico Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/new-mexico',
  },
};

const newMexicoCities = [
  {
    name: 'Albuquerque',
    slug: 'albuquerque',
    population: '562K+',
    featured: true,
    description: 'High desert, high tech, high competition. Netflix shoots here, but your business needs to stand out among 38,000+ competitors vying for attention.',
    problem: 'Tech companies and film productions dominate digital marketing, overshadowing local businesses.',
    solution: 'Desert-fast websites that load instantly and rank higher than template-based competitors.',
    insight: 'Albuquerque customers appreciate authenticity over corporate polish. Your website has 4 seconds to prove you\'re local.',
    businesses: '38,000+',
    keyIndustries: ['Technology', 'Healthcare', 'Aerospace', 'Manufacturing']
  },
  {
    name: 'Santa Fe',
    slug: 'santa-fe',
    population: '87K+',
    featured: true,
    description: 'The City Different attracts 2+ million visitors annually. Your website needs to capture both tourists and locals without losing either.',
    problem: 'Most Santa Fe businesses target either tourists or locals, missing massive revenue from the other market.',
    solution: 'Culturally-intelligent websites that adapt messaging for tourists vs. residents automatically.',
    insight: 'Santa Fe customers expect artistic excellence and cultural sensitivity. Your website must honor both.',
    businesses: '6,200+',
    keyIndustries: ['Tourism', 'Arts', 'Government', 'Healthcare']
  },
  {
    name: 'Las Cruces',
    slug: 'las-cruces',
    population: '111K+',
    featured: false,
    description: 'Growing university town with agricultural roots. NMSU brings 14,000+ students who research everything online before buying.',
    problem: 'Las Cruces businesses struggle to balance student-friendly pricing with professional service messaging.',
    solution: 'Smart websites that showcase value for students while demonstrating quality for professionals.',
    insight: 'Las Cruces customers comparison shop extensively. Your website must clearly communicate unique value.',
    businesses: '7,500+',
    keyIndustries: ['Education', 'Agriculture', 'Research', 'Manufacturing']
  }
];

export default function NewMexicoPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              New Mexico Web Design & SEO Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Elevating New Mexico businesses with innovative web design and SEO solutions. 
              From Albuquerque to Santa Fe, we help local businesses thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/checkup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Free Website Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Mexico Cities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              New Mexico Cities We Serve
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {newMexicoCities.map((city) => (
                <div key={city.slug} className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow relative ${city.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {city.name}
                    </h3>
                    {city.featured && (
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {city.population} people
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {city.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">
                        The Problem:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {city.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">
                        Our Solution:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {city.solution}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                        Market Insight:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {city.insight}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <p>{city.businesses} businesses</p>
                      <p>Local expertise</p>
                    </div>
                  </div>

                  <Link
                    href={`/locations/new-mexico/${city.slug}`}
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    See {city.name} Solutions
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Why New Mexico Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Desert-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimized for New Mexico's unique digital landscape with lightning-fast load times.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Local Market Knowledge
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of New Mexico's unique market dynamics and customer behavior.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Bilingual Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Culturally sensitive designs that resonate with New Mexico's diverse communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Elevate Your New Mexico Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join growing New Mexico businesses that trust Forte Web Designs for their digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/checkup"
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Free Website Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
