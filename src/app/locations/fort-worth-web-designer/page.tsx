import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Web Designer Fort Worth TX | Custom Website Design & SEO',
  description: 'Professional web designer serving Fort Worth, TX. Custom websites, local SEO, and digital marketing for Fort Worth businesses. Free consultation.',
  keywords: 'web designer Fort Worth, website design Fort Worth TX, Fort Worth web development, custom websites Fort Worth',
};

export default function FortWorthWebDesigner() {
  return (
    <div className="relative">
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
              Professional Web Designer Serving Fort Worth, TX
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
              Custom website design and development for Fort Worth businesses. Get found, get calls, get results.
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
              Why Fort Worth Businesses Choose Forte Web Designs
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              We understand the Fort Worth market and what it takes to compete in Cowtown
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="location" className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">Local Fort Worth SEO</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We optimize your website to rank for "web designer near me" and other local Fort Worth searches, helping you dominate the competition.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                <Icon name="star" className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">DFW Market Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Based in the Dallas-Fort Worth area, we understand your local market, competitors, and what Fort Worth customers expect.
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
