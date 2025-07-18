import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Web Designer DFW Texas | Dallas Fort Worth Web Design Services',
  description: 'Professional web designer serving the Dallas-Fort Worth metroplex. Custom websites, SEO, and digital marketing for DFW businesses. Free consultation.',
  keywords: 'web designer DFW, website design Dallas Fort Worth, DFW web development, custom websites DFW metroplex',
};

export default function DFWWebDesigner() {
  // Schema markup for DFW Metro-specific service
  const dfwBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Forte Web Designs - DFW Web Designer",
    "description": "Professional web designer serving the Dallas-Fort Worth metroplex with custom websites, SEO, and digital marketing solutions",
    "url": "https://fortewebdesigns.com/locations/dfw-web-designer",
    "logo": "https://fortewebdesigns.com/images/home/logo2.png",
    "telephone": "(817) 873-6655",
    "email": "info@fortewebdesigns.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas-Fort Worth",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Dallas-Fort Worth Metroplex",
      "sameAs": "https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex"
    },
    "serviceType": [
      "Web Design DFW",
      "Website Development DFW", 
      "SEO Services DFW",
      "Digital Marketing DFW",
      "Custom Website Design",
      "Local SEO Services"
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
            "description": "Professional website design tailored for DFW metroplex businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO Services",
            "description": "Search engine optimization to help DFW businesses dominate local search results"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Digital Marketing",
            "description": "Complete digital marketing solutions for Dallas-Fort Worth companies"
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
          __html: JSON.stringify(dfwBusinessSchema),
        }}
      />
      
      <SectionBackgroundAnimation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
              <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Web Designer in Dallas-Fort Worth
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
              Professional Web Designer Serving the DFW Metroplex
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Custom website design and development for Dallas-Fort Worth businesses. From Dallas to Fort Worth, Plano to Arlington - we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <DarkButton href="/contact?location=dfw" className="bg-primary-600 hover:bg-primary-700">
                Get Your Free DFW Web Design Quote
              </DarkButton>
              <LightButton href="tel:8178736655">
                Call (817) 873-6655
              </LightButton>
            </div>
          </div>
        </div>
      </section>

      {/* DFW Coverage Area */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Serving the Entire DFW Metroplex
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              Professional web design services throughout the Dallas-Fort Worth area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Dallas", description: "Big D's premier web design services" },
              { city: "Fort Worth", description: "Cowtown's trusted web designer" },
              { city: "Plano", description: "Modern web design for growing businesses" },
              { city: "Arlington", description: "Custom websites for Arlington businesses" },
              { city: "Garland", description: "Professional web design in Garland" },
              { city: "Irving", description: "Irving's go-to web design company" },
              { city: "Grand Prairie", description: "Web design that works for Grand Prairie" },
              { city: "Mesquite", description: "Mesquite businesses trust our web design" }
            ].map((location, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-2 dark:text-white text-primary-600">{location.city}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DFW Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Why DFW Businesses Choose Forte Web Designs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="location" className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Local DFW SEO</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We optimize your website to rank for "web designer near me" across the entire DFW metroplex, helping you beat the competition.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">DFW Market Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based in the DFW area, we understand your local market, competitors, and what DFW customers expect from professional websites.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="phone" className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Same-Day Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick response for DFW businesses. We're in your area and understand the fast-paced nature of the metroplex.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DFW Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate DFW Web Design?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join DFW businesses already growing with professional web design from Forte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?location=dfw" 
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Your DFW Web Design Project
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
