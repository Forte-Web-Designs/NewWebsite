import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas - Professional Web Design Across Texas | Forte Web Designs',
  description: 'Providing expert web design services throughout Texas. Specializing in Dallas, Fort Worth, and DFW metro area with local expertise and proven results.',
  keywords: 'web design Texas, Dallas web designer, Fort Worth web designer, DFW web design, local web design services',
  openGraph: {
    title: 'Service Areas - Professional Web Design Across Texas | Forte Web Designs',
    description: 'Expert web design services throughout Texas. Local expertise in Dallas, Fort Worth, and DFW metro area.',
    url: 'https://fortewebdesigns.com/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations',
  },
};

const serviceAreas = [
  {
    city: 'Dallas',
    slug: 'dallas-web-designer',
    description: 'Professional web design services for Dallas businesses, from downtown corporate offices to suburban enterprises.',
    highlights: ['Fortune 500 Experience', 'Local Market Knowledge', 'Same-Day Response'],
    population: '1.3M+',
    businesses: '45,000+',
    featured: true,
  },
  {
    city: 'Fort Worth',
    slug: 'fort-worth-web-designer',
    description: 'Custom web design solutions for Fort Worth companies, blending traditional Texas values with modern digital strategies.',
    highlights: ['Cowtown Pride', 'Local Partnership Focus', 'Industry Expertise'],
    population: '950K+',
    businesses: '32,000+',
    featured: true,
  },
  {
    city: 'DFW Metro',
    slug: 'dfw-web-designer',
    description: 'Comprehensive web design services across the entire Dallas-Fort Worth metroplex, serving all 13 counties.',
    highlights: ['Metro-Wide Coverage', 'Multi-Location Support', 'Regional Expertise'],
    population: '7.8M+',
    businesses: '180,000+',
    featured: true,
  },
];

const benefits = [
  {
    icon: '📍',
    title: 'Local Market Knowledge',
    description: 'Deep understanding of Texas business culture and local market dynamics.',
  },
  {
    icon: '⏰',
    title: 'Same-Day Response',
    description: 'Quick turnaround times with local availability for meetings and support.',
  },
  {
    icon: '⭐',
    title: 'Proven Track Record',
    description: 'Successfully serving Texas businesses with measurable results and growth.',
  },
];

export default function LocationsPage() {
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
                Service Areas
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Professional Web Design Services Across Texas
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                Local expertise meets world-class web design. Serving Dallas, Fort Worth, and the entire DFW metroplex with custom digital solutions that drive real business results.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Overview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Our Service Areas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From bustling Dallas to historic Fort Worth, we provide comprehensive web design services 
                throughout Texas with local expertise and personal attention.
              </p>
            </div>

            {/* Featured Service Areas */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {serviceAreas.map((area) => (
                <div key={area.slug} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {area.city}
                      </h3>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                        {area.population} residents
                      </span>
                    </div>
                    {area.featured && (
                      <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 text-sm px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {area.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{area.businesses} businesses</span>
                    <span>Local expertise</span>
                  </div>
                  
                  <Link
                    href={`/locations/${area.slug}`}
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group-hover:shadow-md"
                  >
                    View {area.city} Services
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Local */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Why Choose Local Web Design?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Working with a local Texas web design company offers unique advantages for your business growth.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="text-4xl mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                DFW Metro Coverage
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      Complete Metro Coverage
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We proudly serve all 13 counties in the Dallas-Fort Worth metroplex, 
                      providing consistent quality and local expertise across the region.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Dallas County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Tarrant County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Collin County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Denton County</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Rockwall County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Ellis County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Johnson County</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>And 6 more...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                      <span className="text-4xl">📍</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Based in Grapevine, serving the entire DFW metroplex
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Work with Local Texas Experts?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free consultation and see how local expertise can transform your business online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=locations_page&utm_medium=cta_button"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Consultation
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
