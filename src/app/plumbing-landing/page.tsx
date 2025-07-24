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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Dynamic Content */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Dynamic Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Custom Website for{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {params.business}
            </span>
          </h1>
          
          {/* Personalized Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {params.owner && `Hi ${params.owner.split(' ')[0]}, `}
            We help plumbing businesses in {params.location} get more customers online with 
            professional websites that actually work.
          </p>

          {/* Key Benefits */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              What {params.business} Gets:
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Custom-coded website that loads in under 2 seconds
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Found on Google</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SEO optimized to get {params.business} found by local customers
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mobile Ready</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Perfect on phones, tablets, and desktops
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Special Offer for {params.business}
            </h2>
            <p className="text-xl mb-6">
              Complete website package starting at just $200/month
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Custom design for {params.business}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Hosting & maintenance included
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Local SEO for {params.location}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Unlimited updates
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <Link
              href={`/contact?business=${encodeURIComponent(params.business)}&owner=${encodeURIComponent(params.owner)}&service=Custom%20Website%20Design&utm_source=${params.utm_source}&utm_medium=${params.utm_medium}&utm_campaign=${params.utm_campaign}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started with {params.business}'s Website
            </Link>
            
            {params.phone && (
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Or call us directly at:
                </p>
                <a 
                  href={`tel:${params.phone.replace(/\D/g, '')}`}
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {params.phone}
                </a>
              </div>
            )}
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Free consultation • No upfront costs • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Other Plumbing Businesses Love Their New Websites
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Our website from Forte Web Designs increased our leads by 300% in just 3 months. 
                Best investment we've made for our plumbing business."
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                - Mike Johnson, Johnson Plumbing
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "We went from invisible on Google to the #1 plumber in our city. 
                The website pays for itself every month."
              </p>
              <p className="font-semibold text-gray-900 dark:text-white">
                - Sarah Martinez, Quick Fix Plumbing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Debug Information (remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <section className="py-8 bg-yellow-50 dark:bg-yellow-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
              Debug Information (Development Only)
            </h3>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-600 dark:text-gray-300">
                {JSON.stringify(params, null, 2)}
              </pre>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
