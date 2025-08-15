import { Metadata } from 'next';
import { Suspense, lazy } from 'react';
import ContactForm from "@/components/ContactForm";
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import InteractiveMap from '@/components/InteractiveMap';

// Lazy load CalendlyWidget for better performance
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export const metadata: Metadata = {
  title: 'Contact Professional Web Design Team | Get Your Free Website Consultation | DFW-Based, Nationwide Service | Forte Web Designs',
  description: 'Contact Forte Web Designs for professional web design services nationwide from our DFW headquarters. Get your free consultation, website quote, and discover how our professional website design can grow your business.',
};

export default function Contact() {
  return (
    <div className="relative">
      {/* Hidden forms for Netlify */}
      <form name="email-capture" data-netlify="true" style={{ display: 'none' }}>
        <input name="email" type="email" />
        <input name="source" type="text" />
      </form>
      <form name="newsletter-signup" data-netlify="true" style={{ display: 'none' }}>
        <input name="email" type="email" />
        <input name="source" type="text" />
        <input name="timestamp" type="text" />
      </form>
      <form name="Plumber Inquiry" data-netlify="true" style={{ display: 'none' }}>
        <input name="firstName" type="text" />
        <input name="businessName" type="text" />
        <input name="email" type="email" />
        <input name="phone" type="tel" />
        <textarea name="message"></textarea>
        <input name="trigger" type="text" />
        <input name="industry" type="text" />
      </form>
      
      <SectionBackgroundAnimation />
      
      {/* Trust Bar */}
      <section className="py-4 bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-medium text-blue-800 dark:text-blue-200">
            <div className="flex items-center gap-2">
              <span className="text-blue-600">🇺🇸</span>
              USA-based Team
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">⚡</span>
              24-hr Response
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✅</span>
              100% Satisfaction Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Trust Badge Strip */}
      <section className="py-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Why 25+ Growing Businesses Nationwide Trust Forte Web Designs
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Award-Winning</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Hand-coded websites</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Secure & Fast</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">&lt;2 second load times</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">📈</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Proven Results</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">2x more leads average</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">🤝</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">DFW-Based Team</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Serving Nationwide</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 pb-24 sm:pb-32 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
            <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            Ready to Get Started?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6 max-w-4xl mx-auto">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to transform your online presence? Get started with a free 5-point website audit or schedule a strategy call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Booking Widget & Engaging Map */}
          <div className="space-y-8">
            {/* Calendly Booking Widget */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Prefer to Schedule a Call?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book a free 15-minute strategy session to discuss your project and see if we're a good fit.
              </p>
              <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
              </Suspense>
            </div>

            {/* Interactive Location Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Serving from Grapevine, TX
                  </h3>
                  
                  {/* Location Information */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">📍 129 S Main St #260</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <div>Grapevine, TX 76051</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Supporting businesses throughout Dallas-Fort Worth and nationwide with cutting-edge web solutions.
                    </div>
                  </div>
                  
                  {/* Interactive Google Map */}
                  <InteractiveMap />
                  
                  {/* Tech stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">25+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Businesses</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">24hr</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">5★</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
