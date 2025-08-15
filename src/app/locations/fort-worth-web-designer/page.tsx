import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Fort Worth Web Designer | Professional Website Design & SEO Services Texas',
  description: 'Expert web designer serving Fort Worth, TX businesses with custom website design, local SEO optimization, and comprehensive digital marketing solutions. Free consultation for Fort Worth area companies.',
  keywords: 'Fort Worth web designer, website design Fort Worth TX, Fort Worth web development, custom websites Fort Worth, SEO services Fort Worth, digital marketing Fort Worth, professional web design Texas',
};

export default function FortWorthWebDesigner() {
  // Schema markup for Fort Worth-specific service
  const fortWorthBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Forte Web Designs - Fort Worth Web Designer",
    "description": "Professional web designer serving Fort Worth, TX with custom websites, local SEO, and digital marketing solutions",
    "url": "https://fortewebdesigns.com/locations/fort-worth-web-designer",
    "logo": "https://fortewebdesigns.com/images/home/logo2.png",
    "telephone": "(817) 873-6655",
    "email": "info@fortewebdesigns.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fort Worth",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Fort Worth",
      "sameAs": "https://en.wikipedia.org/wiki/Fort_Worth,_Texas"
    },
    "serviceType": [
      "Web Design Fort Worth",
      "Website Development Fort Worth", 
      "SEO Services Fort Worth",
      "Digital Marketing Fort Worth",
      "Custom Website Design"
    ],
    "priceRange": "$200-$1200",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Design",
            "description": "Professional website design tailored for Fort Worth businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Search engine optimization to help Fort Worth businesses rank higher locally"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Digital Marketing",
            "description": "Complete digital marketing solutions for Fort Worth companies"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="relative">
      {/* Schema markup for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fortWorthBusinessSchema),
        }}
      />
      
      <SectionBackgroundAnimation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
              <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Web Designer in Fort Worth, Texas
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
              Professional Fort Worth Web Designer | Custom Website Development & Local SEO Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Award-winning custom website design, local SEO optimization, and digital marketing solutions for Fort Worth businesses. Boost your online presence, attract more qualified leads, and increase revenue with professional web development services designed specifically for the Fort Worth market and Cowtown business community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <DarkButton href="/contact?location=fort-worth" className="bg-primary-600 hover:bg-primary-700">
                Get Your Free Fort Worth Web Design Quote
              </DarkButton>
              <LightButton href="tel:8178736655">
                Call (817) 873-6655
              </LightButton>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Worth Benefits */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Why Fort Worth Small Businesses Choose Forte Web Designs for Professional Website Development
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We understand the unique Fort Worth business landscape and provide comprehensive digital marketing solutions including custom web design, local SEO services, and conversion optimization strategies to help your Cowtown business thrive online and outrank competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="location" className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Advanced Fort Worth Local SEO Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We specialize in Fort Worth local search optimization, helping your business dominate search results for "web designer near me," "Fort Worth web development," and industry-specific keywords that attract qualified customers throughout Tarrant County.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">DFW Market Expertise & Fort Worth Business Understanding</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based in the Dallas-Fort Worth metroplex, we provide deep market insights, competitive analysis, and culturally-aware digital marketing strategies that connect with Fort Worth's unique business community and local customer base.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="phone" className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Quick Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Same-day response for Fort Worth businesses. We're in your area and understand the urgency of your projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fort Worth Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate Fort Worth Web Design?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join Fort Worth businesses already growing with professional web design from Forte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?location=fort-worth" 
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Your Fort Worth Web Design Project
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
    </div>
  );
}
