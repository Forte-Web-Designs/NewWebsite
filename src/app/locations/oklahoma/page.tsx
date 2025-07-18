import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma Web Design & SEO Services | Forte Web Designs',
  description: 'Professional web design and SEO services across Oklahoma. Serving Oklahoma City, Tulsa, Norman and surrounding areas with custom websites that drive business growth.',
  openGraph: {
    title: 'Oklahoma Web Design & SEO Services | Forte Web Designs',
    description: 'Professional web design and SEO services across Oklahoma. Serving Oklahoma City, Tulsa, Norman and surrounding areas with custom websites that drive business growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Web Designs Oklahoma Services',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma',
  },
};

const oklahomaCities = [
  {
    name: 'Oklahoma City',
    slug: 'oklahoma-city',
    description: 'State capital and largest city with thriving business sectors',
    population: '695,000+',
    keyIndustries: ['Energy', 'Healthcare', 'Aerospace', 'Government']
  },
  {
    name: 'Tulsa',
    slug: 'tulsa',
    description: 'Oil capital of the world with diverse economy',
    population: '413,000+',
    keyIndustries: ['Energy', 'Technology', 'Healthcare', 'Manufacturing']
  },
  {
    name: 'Norman',
    slug: 'norman',
    description: 'Home to University of Oklahoma and research hub',
    population: '128,000+',
    keyIndustries: ['Education', 'Research', 'Weather Technology', 'Healthcare']
  }
];

export default function OklahomaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Oklahoma Web Design & SEO Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering Oklahoma businesses with cutting-edge web design and SEO solutions. 
              From Oklahoma City to Tulsa, we help local businesses establish powerful online presences.
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

      {/* Oklahoma Cities Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Oklahoma Cities We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oklahomaCities.map((city) => (
                <div key={city.slug} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {city.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {city.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Population: {city.population}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Industries:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {city.keyIndustries.map((industry, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/locations/oklahoma/${city.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
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
              Why Oklahoma Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Lightning Fast
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built for speed and performance, keeping your Oklahoma customers engaged.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Local SEO Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dominate local search results across Oklahoma with our proven SEO strategies.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Round-the-clock support to keep your Oklahoma business running smoothly.
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
              Ready to Dominate Oklahoma's Digital Landscape?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful Oklahoma businesses that trust Forte Web Designs for their online presence.
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
