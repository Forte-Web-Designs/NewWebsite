import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Need any kind of services contact us.',
};

export default function Contact() {
  return (
    <div className="relative">
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

      <section className="py-12 sm:py-16 md:py-20 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
            <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            Ready to Get Started?
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6 max-w-4xl mx-auto">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to transform your online presence? Get started with a free 5-point website audit or schedule a strategy call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Booking Widget & Micro-Conversion */}
          <div className="space-y-8">
            {/* Calendly Booking Widget */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                Prefer to Schedule a Call?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book a free 30-minute strategy session to discuss your project and see if we're a good fit.
              </p>
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/seth-fortewebdesigns/30min" 
                style={{minWidth: '320px', height: '700px'}}
              ></div>
              <script 
                type="text/javascript" 
                src="https://assets.calendly.com/assets/external/widget.js" 
                async
              ></script>
            </div>

            {/* Micro-Conversion Offer */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">
                    Free Website Audit Checklist
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Download our comprehensive 25-point website audit checklist and see exactly how your current site measures up.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white text-sm"
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
                      Get Free Checklist
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    No spam, just valuable insights for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
