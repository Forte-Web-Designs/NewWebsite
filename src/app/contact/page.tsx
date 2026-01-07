import { Metadata } from 'next';
import { Suspense, lazy } from 'react';
import ContactForm from "@/components/ContactForm";
import { OptimizedImage } from '@/components/images/OptimizedImage';

// Lazy load CalendlyWidget for better performance
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export const metadata: Metadata = {
  title: 'Contact | Forte Web Designs',
  description: 'Tell us about your business and what you are trying to solve. We will show you what is possible.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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

      {/* Hero Section with Headshot */}
      <section className="pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
              <OptimizedImage
                src="/images/about/headshot-6.jpg"
                alt="Seth Forte"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                sizes="96px"
              />
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6">
              Let's Talk
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Book a call. Just tell me what's not working.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 sm:py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
            <video
              controls
              className="w-full"
            >
              <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
            2-minute intro
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Form */}
            <div>
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Get in Touch
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Describe your situation and I'll get back to you within one business day.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Calendar Section */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 sm:p-6 border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Or Book a Call Directly
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Skip the back-and-forth. Book a 30-minute call and we'll talk through your situation live.
                </p>
                <Suspense fallback={
                  <div className="h-80 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                }>
                  <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:seth@fortewebdesigns.com"
                  className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  seth@fortewebdesigns.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Location</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Based in Dallas, Texas. Working with clients everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
