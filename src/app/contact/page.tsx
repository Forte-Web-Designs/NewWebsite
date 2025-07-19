import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Need any kind of services contact us.',
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
              Why 25+ Businesses Trust Forte Web Designs
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
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Local Support</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Dallas-Fort Worth</div>
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
                Book a free 30-minute strategy session to discuss your project and see if we're a good fit.
              </p>
              <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
            </div>

            {/* Interactive Location Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Dallas-Fort Worth Based
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Proudly serving businesses throughout Texas and nationwide with cutting-edge web solutions.
                  </p>
                  
                  {/* Interactive Google Map */}
                  <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600" style={{height: '300px'}}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429516.5330124774!2d-97.0945249!3d32.8206721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dallas, Texas Location"
                    ></iframe>
                    
                    {/* Tech overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                    
                    {/* Floating tech elements */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-lg">
                      🚀 Serving DFW & Beyond
                    </div>
                  </div>
                  
                  {/* Tech stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">20+</div>
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
