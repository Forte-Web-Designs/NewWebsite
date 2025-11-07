import { Metadata } from 'next';
import { Suspense, lazy } from 'react';
import ContactForm from "@/components/ContactForm";
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import InteractiveMap from '@/components/InteractiveMap';

// Lazy load CalendlyWidget for better performance
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export const metadata: Metadata = {
  title: 'Business Growth Systems Partner | Strategic Consultation | Nationwide Service | Forte Web Designs',
  description: 'Partner with Forte Web Designs for comprehensive business growth systems. From strategic planning to digital transformation, we help businesses scale nationwide from our DFW headquarters.',
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
              <Icon name="check" className="w-4 h-4 text-blue-600" />
              Business Growth Partner
            </div>
            <div className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-blue-600" />
              Strategic Implementation
            </div>
            <div className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-blue-600" />
              Measurable ROI
            </div>
          </div>
        </div>
      </section>

      {/* Business Growth Systems Overview */}
      <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Your Complete Business Growth Systems Partner
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We don't just build websites—we implement comprehensive growth systems that transform how you attract, convert, and retain customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Icon name="check" className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strategic Foundation</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Market positioning • Brand strategy • Competitive analysis</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Icon name="check" className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Digital Systems</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Website development • Lead generation • Automation</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                <Icon name="check" className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Growth Optimization</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">Performance tracking • ROI optimization • Scaling systems</div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-800 dark:text-blue-200">
              <Icon name="star" className="w-4 h-4 text-blue-600" />
              Serving ambitious businesses nationwide from Dallas-Fort Worth
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 pb-24 sm:pb-32 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Business Growth Focus */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-blue-600 dark:text-blue-400 mb-4 sm:mb-6">
            <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            Ready to Scale Your Business?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-roboto leading-tight text-gray-900 dark:text-white mb-4 sm:mb-6 max-w-4xl mx-auto">
            Let's Discuss Your Project
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Tell us about your challenges and goals. We'll show you how intelligent automation and custom development can help.
          </p>
          
          {/* Dual CTA Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Need Immediate Results?</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Strategic consultation • Growth snapshot • Implementation plan</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Planning a Major Project?</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Complete rebrand • System overhaul • Multi-phase implementation</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Booking Widget & Engaging Map */}
          <div className="space-y-8">
            {/* Strategic Consultation Booking */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="star" className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Strategic Growth Consultation
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Complimentary 30-minute session</p>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Book a strategic consultation to analyze your current systems and identify growth opportunities.
                </p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="w-4 h-4 text-green-600" />
                    Business growth assessment
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="w-4 h-4 text-green-600" />
                    Custom strategy recommendations
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="check" className="w-4 h-4 text-green-600" />
                    Implementation roadmap
                  </div>
                </div>
              </div>
              <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
              </Suspense>
            </div>

            {/* Business Growth Hub */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="star" className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Business Growth Hub - Dallas, TX
                  </h3>

                  {/* Location Information */}
                  <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Icon name="star" className="w-4 h-4 text-blue-600" />
                      5473 Blair Rd Ste 100 PMB 492829
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <div>Dallas, TX 75231-4227</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Your strategic partner for comprehensive business growth systems. Serving ambitious businesses nationwide from the heart of Dallas-Fort Worth.
                    </div>
                  </div>
                  
                  {/* Interactive Google Map */}
                  <InteractiveMap />
                  
                  {/* Growth Performance Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">25+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Growth Partners</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">2.5x</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Avg ROI Increase</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">90d</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Implementation</div>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                      <Icon name="star" className="w-4 h-4 text-blue-600" />
                      Service Coverage
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>Primary:</strong> Dallas-Fort Worth Metroplex<br/>
                      <strong>Nationwide:</strong> Remote strategic partnerships & implementation
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
