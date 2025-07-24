'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

interface PlumbingLandingProps {
  searchParams?: {
    business?: string;
    owner?: string;
    location?: string;
    phone?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  };
}

export default function PlumbingLanding() {
  const [params, setParams] = useState<{
    business: string;
    owner: string;
    location: string;
    phone: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
  }>({
    business: 'Your Plumbing Business',
    owner: '',
    location: 'your area',
    phone: '',
    utm_source: 'email',
    utm_medium: 'landing-page',
    utm_campaign: 'plumbing-outreach'
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Client-side parameter extraction
    const urlParams = new URLSearchParams(window.location.search);
    
    setParams({
      business: urlParams.get('business') || 'Your Plumbing Business',
      owner: urlParams.get('owner') || '',
      location: urlParams.get('location') || 'your area',
      phone: urlParams.get('phone') || '',
      utm_source: urlParams.get('utm_source') || 'email',
      utm_medium: urlParams.get('utm_medium') || 'landing-page',
      utm_campaign: urlParams.get('utm_campaign') || 'plumbing-outreach'
    });
    
    setIsLoaded(true);
  }, []);

  // Show loading state until parameters are loaded
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading your personalized experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Hero Section with Plumbing Theme */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Plumbing Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-blue-300">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="absolute top-32 right-20 text-blue-300">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-32 text-blue-300">
            <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.5 6.5C17.5 5.67 16.83 5 16 5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zM8 20v-6h5.17l.8 2.4c.14.42.52.6.95.6h1.58c.83 0 1.5-.67 1.5-1.5v-9C18 5.67 17.33 5 16.5 5H7.5C6.67 5 6 5.67 6 6.5v13c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5z"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center text-white">
          {/* Plumbing Business Header */}
          <div className="flex justify-center mb-6">
            <div className="bg-orange-500 p-4 rounded-full shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.5 3c-1.04 0-2.03.37-2.81 1.04L12 7.73 8.31 4.04C7.53 3.37 6.54 3 5.5 3 3.01 3 1 5.01 1 7.5c0 1.04.37 2.03 1.04 2.81L12 20.27l9.96-9.96C22.63 9.53 23 8.54 23 7.5 23 5.01 20.99 3 18.5 3z"/>
              </svg>
            </div>
          </div>

          {/* Dynamic Headline with Plumbing Focus */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Plumbing Website for{' '}
            <span className="text-orange-400">
              {params.business}
            </span>
          </h1>
          
          {/* Personalized Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            {params.owner && `Hi ${params.owner.split(' ')[0]}, `}
            Get more emergency calls, drain cleaning jobs, and pipe repairs in {params.location} with a website that works 24/7.
          </p>

          {/* Plumbing Services Preview */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-orange-300">
              Your {params.business} Website Will Include:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">24/7 Emergency</h3>
                <p className="text-blue-100 text-sm">
                  Emergency plumbing form that sends instant alerts to your phone
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">5-Star Reviews</h3>
                <p className="text-blue-100 text-sm">
                  Google review system to get more positive reviews automatically
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Local SEO</h3>
                <p className="text-blue-100 text-sm">
                  Show up first when people search "plumber near me" in {params.location}
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section with Plumbing Theme */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl text-white p-8 mb-12 shadow-2xl">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-orange-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Special Plumbing Website Package for {params.business}
            </h2>
            <div className="text-2xl font-bold mb-6 text-orange-200">
              Starting at $197/month
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Custom plumbing website design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Emergency service booking form</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Service area pages for {params.location}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Google My Business optimization</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Mobile-first responsive design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">24/7 hosting & maintenance</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <Link
              href={`/contact?business=${encodeURIComponent(params.business)}&owner=${encodeURIComponent(params.owner)}&service=Plumbing%20Website%20Design&utm_source=${params.utm_source}&utm_medium=${params.utm_medium}&utm_campaign=${params.utm_campaign}`}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
            >
              🚀 Get {params.business}'s Website Started
            </Link>
            
            {params.phone && (
              <div className="mt-6">
                <p className="text-blue-100 mb-3 text-lg">
                  Need to talk? Call us now:
                </p>
                <a 
                  href={`tel:${params.phone.replace(/\D/g, '')}`}
                  className="inline-block text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors duration-200"
                >
                  📞 {params.phone}
                </a>
              </div>
            )}
            
            <p className="text-blue-200 text-sm mt-4">
              ✅ Free consultation • ✅ No setup fees • ✅ Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plumbing Services {params.business} Can Showcase
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your new website will have dedicated pages for each service, making it easy for customers to find exactly what they need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Emergency Plumbing */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Emergency Plumbing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                24/7 emergency services with instant booking form and phone alerts for burst pipes, clogs, and urgent repairs.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Burst pipe repairs</li>
                <li>• Severe drain clogs</li>
                <li>• Water heater failures</li>
                <li>• Sewer line backups</li>
              </ul>
            </div>

            {/* Drain Cleaning */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Drain Cleaning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Professional drain cleaning services with before/after photos and customer review integration.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Kitchen sink clogs</li>
                <li>• Bathroom drain cleaning</li>
                <li>• Main line cleaning</li>
                <li>• Preventive maintenance</li>
              </ul>
            </div>

            {/* Pipe Repair */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Pipe Repair & Installation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete pipe services with detailed service pages and instant quote request forms.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Leak detection & repair</li>
                <li>• Pipe replacement</li>
                <li>• Repiping services</li>
                <li>• Fixture installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real Results from {params.location} Plumbing Businesses
          </h2>
          <p className="text-gray-600 mb-12">
            See how other plumbing companies increased their leads and revenue with professional websites
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Johnson Plumbing</h4>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Our emergency calls increased by 340% in just 3 months! The 24/7 booking form sends leads straight to my phone. Best investment we've made."
              </p>
              <p className="text-sm text-gray-500">
                - Mike Johnson, Johnson Plumbing (Fort Worth, TX)
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 text-white p-2 rounded-full mr-3">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Quick Fix Plumbing</h4>
                  <div className="text-yellow-500 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "We went from page 3 of Google to #1 for 'plumber near me'. The website pays for itself every single week with new customers."
              </p>
              <p className="text-sm text-gray-500">
                - Sarah Martinez, Quick Fix Plumbing (Dallas, TX)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Debug Information (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <section className="py-8 bg-yellow-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-4">
              Debug Information (Development Only)
            </h3>
            <div className="bg-white p-4 rounded-lg">
              <pre className="text-sm text-gray-600">
                {JSON.stringify(params, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
