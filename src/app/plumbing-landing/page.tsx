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

// Plumber-themed color schemes generator
const generatePlumberColorScheme = (businessName: string) => {
  const schemes = [
    {
      name: 'Classic Blue & Orange',
      primary: 'blue-900',
      secondary: 'orange-500',
      accent: 'orange-400',
      background: 'blue-800',
      gradient: 'from-blue-900 via-blue-800 to-blue-900',
      buttonGradient: 'from-orange-500 to-orange-600',
      cardBg: 'blue-800/30',
      theme: 'classic'
    },
    {
      name: 'Professional Navy & Gold',
      primary: 'slate-900', 
      secondary: 'yellow-500',
      accent: 'yellow-400',
      background: 'slate-800',
      gradient: 'from-slate-900 via-slate-800 to-slate-900',
      buttonGradient: 'from-yellow-500 to-yellow-600',
      cardBg: 'slate-800/30',
      theme: 'professional'
    },
    {
      name: 'Trustworthy Green & Blue',
      primary: 'emerald-900',
      secondary: 'cyan-500', 
      accent: 'cyan-400',
      background: 'emerald-800',
      gradient: 'from-emerald-900 via-emerald-800 to-emerald-900',
      buttonGradient: 'from-cyan-500 to-cyan-600',
      cardBg: 'emerald-800/30',
      theme: 'trustworthy'
    },
    {
      name: 'Emergency Red & Gray',
      primary: 'gray-900',
      secondary: 'red-500',
      accent: 'red-400', 
      background: 'gray-800',
      gradient: 'from-gray-900 via-gray-800 to-gray-900',
      buttonGradient: 'from-red-500 to-red-600',
      cardBg: 'gray-800/30',
      theme: 'emergency'
    },
    {
      name: 'Modern Teal & Orange',
      primary: 'teal-900',
      secondary: 'orange-500',
      accent: 'orange-400',
      background: 'teal-800', 
      gradient: 'from-teal-900 via-teal-800 to-teal-900',
      buttonGradient: 'from-orange-500 to-orange-600',
      cardBg: 'teal-800/30',
      theme: 'modern'
    }
  ];

  // Generate a consistent hash from business name to ensure same business gets same colors
  let hash = 0;
  for (let i = 0; i < businessName.length; i++) {
    const char = businessName.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return schemes[Math.abs(hash) % schemes.length];
};

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
  const [colorScheme, setColorScheme] = useState(generatePlumberColorScheme('default'));

  useEffect(() => {
    // Client-side parameter extraction
    const urlParams = new URLSearchParams(window.location.search);
    
    const extractedParams = {
      business: urlParams.get('business') || 'Your Plumbing Business',
      owner: urlParams.get('owner') || '',
      location: urlParams.get('location') || 'your area',
      phone: urlParams.get('phone') || '',
      utm_source: urlParams.get('utm_source') || 'email',
      utm_medium: urlParams.get('utm_medium') || 'landing-page',
      utm_campaign: urlParams.get('utm_campaign') || 'plumbing-outreach'
    };
    
    setParams(extractedParams);
    
    // Generate color scheme based on business name
    setColorScheme(generatePlumberColorScheme(extractedParams.business));
    
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
    <div className={`min-h-screen bg-gradient-to-br ${colorScheme.gradient}`}>
      {/* Professional Header Bar - Aspem Plumbing Style */}
      <div className={`bg-${colorScheme.primary} border-b-4 border-${colorScheme.secondary}`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99zM6.5 3h11l1.5 4.5h-14L6.5 3z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{params.business}</h1>
                <p className={`text-${colorScheme.accent} text-sm font-medium`}>
                  Licensed • Insured • 24/7 Emergency Service
                </p>
              </div>
            </div>
            
            {params.phone && (
              <div className="hidden md:block">
                <a 
                  href={`tel:${params.phone}`}
                  className={`bg-gradient-to-r ${colorScheme.buttonGradient} text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Call Now: {params.phone}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Section - Aspem Plumbing Inspired */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className={`w-32 h-32 text-${colorScheme.accent}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.5 3c-1.04 0-2.03.37-2.81 1.04L12 7.73 8.31 4.04C7.53 3.37 6.54 3 5.5 3 3.01 3 1 5.01 1 7.5c0 1.04.37 2.03 1.04 2.81L12 20.27l9.96-9.96C22.63 9.53 23 8.54 23 7.5 23 5.01 20.99 3 18.5 3z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 transform -rotate-12">
            <svg className={`w-28 h-28 text-${colorScheme.accent}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {params.owner && (
                <div className={`inline-block bg-${colorScheme.secondary} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                  👋 Hi {params.owner.split(' ')[0]}!
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className={`text-${colorScheme.accent}`}>Professional</span> Plumbing Website for{' '}
                <span className="text-white underline decoration-4 decoration-orange-400">
                  {params.business}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Get more emergency calls, drain cleaning jobs, and pipe repairs in{' '}
                <span className={`text-${colorScheme.accent} font-semibold`}>{params.location}</span>{' '}
                with a website that works 24/7 and looks professional like the big companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className={`bg-gradient-to-r ${colorScheme.buttonGradient} text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                  Get My Plumbing Website
                </button>
                <button className={`border-2 border-${colorScheme.accent} bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-${colorScheme.accent} hover:text-${colorScheme.primary} transition-all duration-300`}>
                  See Examples
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-blue-200">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span className="text-blue-200">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span className="text-blue-200">Local {params.location} Experts</span>
                </div>
              </div>
            </div>

            {/* Right Content - Service Preview */}
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20 bg-gradient-to-br ${colorScheme.cardBg}`}>
              <h2 className={`text-2xl font-semibold mb-6 text-${colorScheme.accent} text-center`}>
                Your {params.business} Website Preview
              </h2>
              
              {/* Mock Website Preview */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-${colorScheme.secondary} rounded-lg flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold text-${colorScheme.primary}`}>{params.business}</h3>
                      <p className="text-gray-500 text-sm">24/7 Emergency Plumbing</p>
                    </div>
                  </div>
                  <div className={`bg-${colorScheme.secondary} text-white px-4 py-2 rounded-lg text-sm font-bold`}>
                    CALL NOW
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-${colorScheme.secondary}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🚨</span>
                      <span className="font-medium text-gray-800">Emergency Repairs</span>
                    </div>
                    <span className={`text-${colorScheme.secondary} font-bold`}>24/7</span>
                  </div>
                  <div className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-${colorScheme.secondary}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔧</span>
                      <span className="font-medium text-gray-800">Drain Cleaning</span>
                    </div>
                    <span className={`text-${colorScheme.secondary} font-bold`}>$99+</span>
                  </div>
                  <div className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-${colorScheme.secondary}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔥</span>
                      <span className="font-medium text-gray-800">Water Heater Service</span>
                    </div>
                    <span className={`text-${colorScheme.secondary} font-bold`}>$149+</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <div className={`bg-gradient-to-r ${colorScheme.buttonGradient} text-white px-6 py-3 rounded-lg font-bold inline-flex items-center space-x-2`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>Free Estimate →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why {params.business} Needs a Professional Website
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stand out from competitors and capture more emergency calls with a website that builds instant trust
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Forms</h3>
              <p className="text-gray-600">
                Capture emergency calls even when you're sleeping. Our forms send instant alerts to your phone.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">5-Star Review System</h3>
              <p className="text-gray-600">
                Automatically request reviews from happy customers and display them prominently on your site.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local SEO Domination</h3>
              <p className="text-gray-600">
                Show up first when people search "plumber near me" in {params.location} with our proven SEO strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Special Website Package for {params.business}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to compete with the big plumbing companies
          </p>
          
          <div className={`bg-gradient-to-r ${colorScheme.buttonGradient} rounded-2xl text-white p-8 shadow-2xl`}>
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
            </div>
            <h3 className="text-4xl font-bold mb-2">$197/month</h3>
            <p className="text-xl mb-6 opacity-90">No setup fees • Cancel anytime</p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom plumbing website design</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Emergency service booking forms</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Service area pages for {params.location}</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Google My Business optimization</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Mobile-optimized for emergency calls</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-green-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Unlimited updates & maintenance</span>
              </div>
            </div>
            
            <button className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Start My Plumbing Website Today
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 bg-gradient-to-r ${colorScheme.gradient}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Emergency Calls, {params.owner ? params.owner.split(' ')[0] : 'Friend'}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of plumbers who trust us to build their online presence and capture more leads in {params.location}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`bg-${colorScheme.secondary} hover:bg-${colorScheme.accent} text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg`}>
              Get My Free Quote
            </button>
            
            {params.phone && (
              <a 
                href={`tel:${params.phone}`}
                className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-colors text-lg flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call Us: {params.phone}</span>
              </a>
            )}
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            No contracts • 30-day money-back guarantee • Setup in 2 weeks
          </p>
        </div>
      </section>
    </div>
  );
}
