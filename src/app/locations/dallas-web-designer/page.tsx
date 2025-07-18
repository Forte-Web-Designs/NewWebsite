import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Web Designer Dallas TX | Custom Website Design & Development',
  description: 'Professional web designer serving Dallas, TX. Custom websites, SEO, and digital marketing for Dallas businesses. Free consultation available.',
  keywords: 'web designer Dallas, website design Dallas TX, Dallas web development, custom websites Dallas',
};

export default function DallasWebDesigner() {
  return (
    <div className="relative">
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
              Professional Web Designer Serving Dallas, TX
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
              Custom website design and development for Dallas businesses. Get found, get calls, get results.
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
              Why Dallas Businesses Choose Forte Web Designs
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We understand the Dallas market and what it takes to compete in the DFW metroplex
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="location" className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Local Dallas SEO</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We optimize your website to rank for "web designer near me" and other local Dallas searches, helping you beat the competition.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">DFW Market Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based in the Dallas-Fort Worth area, we understand your local market, competitors, and what Dallas customers expect.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="phone" className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Quick Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Same-day response for Dallas businesses. We're in your timezone and understand the urgency of your projects.
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
              Web Design Services for Dallas Businesses
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Website Design",
                description: "Professional websites that represent your Dallas business perfectly",
                icon: "🎨"
              },
              {
                title: "Local SEO Optimization",
                description: "Rank higher for Dallas-specific searches and attract local customers",
                icon: "📍"
              },
              {
                title: "Mobile-First Design",
                description: "Websites that work perfectly on all devices for Dallas mobile users",
                icon: "📱"
              },
              {
                title: "E-commerce Solutions",
                description: "Online stores that convert Dallas visitors into customers",
                icon: "🛒"
              },
              {
                title: "Website Maintenance",
                description: "Ongoing support and updates for Dallas business websites",
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
