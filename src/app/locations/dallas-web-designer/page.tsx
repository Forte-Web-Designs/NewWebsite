import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Dallas Web Designer | Professional Website Design & SEO Services Texas',
  description: 'Expert web designer serving Dallas, TX businesses with custom website design, local SEO optimization, and digital marketing solutions. Free consultation for Dallas area companies.',
  keywords: 'Dallas web designer, website design Dallas TX, Dallas web development, custom websites Dallas, SEO services Dallas, digital marketing Dallas, professional web design Texas',
};

export default function DallasWebDesigner() {
  // Schema markup for Dallas-specific service
  const dallasBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Forte Web Designs - Dallas Web Designer",
    "description": "Professional web designer serving Dallas, TX with custom websites, SEO, and digital marketing solutions",
    "url": "https://fortewebdesigns.com/locations/dallas-web-designer",
    "logo": "https://fortewebdesigns.com/images/home/logo2.png",
    "telephone": "(817) 873-6655",
    "email": "info@fortewebdesigns.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Dallas",
      "sameAs": "https://en.wikipedia.org/wiki/Dallas"
    },
    "serviceType": [
      "Web Design Dallas",
      "Website Development Dallas", 
      "SEO Services Dallas",
      "Digital Marketing Dallas",
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
            "description": "Professional website design tailored for Dallas businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services",
            "description": "Search engine optimization to help Dallas businesses rank higher"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Digital Marketing",
            "description": "Complete digital marketing solutions for Dallas companies"
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
          __html: JSON.stringify(dallasBusinessSchema),
        }}
      />
      
      <SectionBackgroundAnimation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
              <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Web Designer in Dallas, Texas
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
              Professional Dallas Web Designer | Custom Website Development & SEO Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Award-winning custom website design, local SEO optimization, and digital marketing solutions for Dallas businesses. Increase your online visibility, attract more customers, and grow your revenue with professional web development services tailored for the Dallas market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <DarkButton href="/contact?location=dallas" className="bg-primary-600 hover:bg-primary-700">
                Get Your Free Dallas Web Design Quote
              </DarkButton>
              <LightButton href="tel:8178736655">
                Call (817) 873-6655
              </LightButton>
            </div>
          </div>
        </div>
      </section>

      {/* Local Dallas Benefits */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Why Dallas Small Businesses Choose Forte Web Designs for Professional Website Development
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We understand the competitive Dallas business market and provide comprehensive digital marketing solutions including custom web design, local SEO services, and conversion optimization strategies to help your business dominate the DFW metroplex online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="location" className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Advanced Dallas Local SEO Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We specialize in Dallas local search optimization, helping your business rank for "web designer near me," "Dallas web development," and industry-specific keywords that drive qualified leads from Dallas area customers.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">DFW Market Expertise & Competitive Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based in the Dallas-Fort Worth metroplex, we provide in-depth market research, competitive analysis, and industry-specific digital marketing strategies that resonate with your Dallas target audience and local business goals.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="phone" className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Fast Response Time & Local Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Same-day response for Dallas area businesses with 24/7 support availability. We're in your Central Time zone and understand the urgency of your digital marketing projects and website needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dallas-Specific Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
              Comprehensive Web Design & Digital Marketing Services for Dallas Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Custom Website Design",
                description: "Responsive, conversion-focused websites that represent your Dallas business brand and attract your ideal customers",
                icon: "🎨"
              },
              {
                title: "Advanced Local SEO Optimization",
                description: "Dominate Dallas search results with targeted keyword optimization, Google My Business management, and local citation building",
                icon: "📍"
              },
              {
                title: "Mobile-First Responsive Design",
                description: "Lightning-fast websites optimized for Dallas mobile users with perfect functionality across all devices and screen sizes",
                icon: "📱"
              },
              {
                title: "E-commerce Development Solutions",
                description: "Professional online stores with secure payment processing, inventory management, and conversion optimization for Dallas retailers",
                icon: "🛒"
              },
              {
                title: "Ongoing Website Maintenance & Support",
                description: "Comprehensive website care including security updates, content management, and performance optimization for Dallas businesses",
                icon: "🔧"
              },
              {
                title: "Digital Marketing",
                description: "Complete marketing solutions to grow your Dallas business online",
                icon: "📈"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dallas Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dominate Dallas Web Design?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join Dallas businesses already growing with professional web design from Forte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?location=dallas" 
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Start Your Dallas Web Design Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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
