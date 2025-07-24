'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className={`bg-${colorScheme.primary} text-white py-2 px-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>📧 {params.business.toLowerCase().replace(/\s+/g, '')}@plumbing.com</span>
            <span>🕒 24/7 Emergency Service</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>⭐⭐⭐⭐⭐ 5.0 Rating</span>
            <span>📍 Serving {params.location}</span>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h1 className={`text-2xl font-bold text-${colorScheme.primary}`}>{params.business}</h1>
                <p className={`text-${colorScheme.secondary} text-sm font-medium`}>
                  Licensed & Insured Plumbing Services
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className={`text-${colorScheme.primary} font-medium hover:text-${colorScheme.secondary} transition-colors`}>Home</a>
              <a href="#services" className={`text-${colorScheme.primary} font-medium hover:text-${colorScheme.secondary} transition-colors`}>Services</a>
              <a href="#about" className={`text-${colorScheme.primary} font-medium hover:text-${colorScheme.secondary} transition-colors`}>About</a>
              <a href="#contact" className={`text-${colorScheme.primary} font-medium hover:text-${colorScheme.secondary} transition-colors`}>Contact</a>
            </nav>

            {/* Phone CTA */}
            {params.phone && (
              <a 
                href={`tel:${params.phone}`}
                className={`bg-gradient-to-r ${colorScheme.buttonGradient} text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call: {params.phone}</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className={`relative bg-gradient-to-r ${colorScheme.gradient} text-white py-20 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 transform rotate-45">
            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-10 right-10 transform -rotate-45">
            <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99z"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {params.owner && (
                <div className={`inline-block bg-${colorScheme.secondary} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                  👋 Welcome {params.owner.split(' ')[0]}!
                </div>
              )}
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className={`text-${colorScheme.accent}`}>Emergency</span> Plumbing Services in{' '}
                <span className="underline decoration-4 decoration-orange-400">
                  {params.location}
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
                Licensed, insured, and ready to solve your plumbing problems 24/7. From burst pipes to drain cleaning, we've got {params.location} covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className={`bg-${colorScheme.secondary} hover:bg-${colorScheme.accent} text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Emergency Call Now</span>
                </button>
                <button className={`border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-${colorScheme.primary} transition-all duration-300`}>
                  Free Estimate
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>5-Star Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12l2.5 2.5L12 12l2.5 2.5L17.5 12 15 9.5 12 12 9 9.5 7.5 12z"/>
                  </svg>
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span>Local {params.location} Team</span>
                </div>
              </div>
            </div>

            {/* Right Content - Service Image/Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Instant Quote</h3>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="">Select Service</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="drain">Drain Cleaning</option>
                    <option value="water-heater">Water Heater</option>
                    <option value="leak">Leak Repair</option>
                    <option value="installation">New Installation</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Describe your plumbing issue..." 
                    rows={3}
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className={`w-full bg-${colorScheme.secondary} hover:bg-${colorScheme.accent} text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Get Free Estimate
                </button>
              </form>
              
              <p className="text-center text-sm mt-4 opacity-75">
                ✅ No obligation • ✅ Quick response • ✅ Licensed professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className={`bg-${colorScheme.secondary} text-white py-4`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="text-2xl">🚨</span>
              <div>
                <h3 className="font-bold text-lg">24/7 Emergency Service</h3>
                <p className="text-sm opacity-90">Available weekends, holidays & after hours</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="font-bold text-lg">Average Response:</p>
                <p className="text-2xl font-bold">45 Minutes</p>
              </div>
              {params.phone && (
                <a 
                  href={`tel:${params.phone}`}
                  className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <span>Emergency: {params.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-${colorScheme.primary} mb-4`}>
              Professional Plumbing Services in {params.location}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to routine maintenance, our licensed plumbers deliver reliable solutions with upfront pricing and guaranteed satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Emergency Plumbing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Emergency Repairs</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Burst pipe repair</li>
                <li>• Sewer line blockages</li>
                <li>• Water heater failures</li>
                <li>• Toilet & faucet emergencies</li>
                <li>• Gas line leaks</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Starting at $125</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Call Now
                </button>
              </div>
            </div>

            {/* Drain Cleaning */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Drain Cleaning</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Kitchen sink drains</li>
                <li>• Bathroom drain cleaning</li>
                <li>• Main sewer line cleaning</li>
                <li>• Floor drain service</li>
                <li>• Preventive maintenance</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Starting at $99</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Schedule Service
                </button>
              </div>
            </div>

            {/* Water Heater */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Water Heater Service</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Water heater repair</li>
                <li>• New installation</li>
                <li>• Tankless water heaters</li>
                <li>• Annual maintenance</li>
                <li>• Emergency replacement</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Starting at $149</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Free Estimate
                </button>
              </div>
            </div>

            {/* Leak Detection */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Leak Detection & Repair</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Advanced leak detection</li>
                <li>• Pipe leak repairs</li>
                <li>• Slab leak service</li>
                <li>• Water damage prevention</li>
                <li>• Insurance claims help</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Starting at $175</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Book Now
                </button>
              </div>
            </div>

            {/* Fixture Installation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 6V4h-4v2c0 1.1.9 2 2 2s2-.9 2-2zm-6 6c0-2 4-3.1 6-3.1S20 10 20 12v10H8V12z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Fixture Installation</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Toilet installation</li>
                <li>• Faucet replacement</li>
                <li>• Shower & bathtub install</li>
                <li>• Garbage disposal</li>
                <li>• Bathroom remodeling</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Starting at $89</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Get Quote
                </button>
              </div>
            </div>

            {/* Commercial Plumbing */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold text-${colorScheme.primary} mb-4 text-center`}>Commercial Services</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Office building plumbing</li>
                <li>• Restaurant equipment</li>
                <li>• Retail store service</li>
                <li>• Preventive maintenance</li>
                <li>• Emergency commercial calls</li>
              </ul>
              <div className="text-center">
                <p className={`text-2xl font-bold text-${colorScheme.secondary} mb-2`}>Custom Pricing</p>
                <button className={`bg-${colorScheme.secondary} text-white px-6 py-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors font-medium`}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className={`text-4xl font-bold text-${colorScheme.primary} mb-6`}>
                Why Choose {params.business}?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With over 15 years serving {params.location}, we've built our reputation on reliable service, 
                fair pricing, and treating every customer like family. Our licensed, insured technicians 
                arrive on time and get the job done right the first time.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className={`bg-${colorScheme.secondary} p-2 rounded-lg flex-shrink-0 mt-1`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully licensed plumbers with comprehensive insurance coverage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className={`bg-${colorScheme.secondary} p-2 rounded-lg flex-shrink-0 mt-1`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">5-Star Rating</h4>
                    <p className="text-gray-600 text-sm">Consistently rated 5 stars by satisfied customers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className={`bg-${colorScheme.secondary} p-2 rounded-lg flex-shrink-0 mt-1`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Same Day Service</h4>
                    <p className="text-gray-600 text-sm">Most repairs completed the same day you call</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className={`bg-${colorScheme.secondary} p-2 rounded-lg flex-shrink-0 mt-1`}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Upfront Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden fees - you know the cost before we start</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`bg-${colorScheme.secondary} text-white px-8 py-4 rounded-lg font-bold hover:bg-${colorScheme.accent} transition-colors`}>
                  Schedule Service
                </button>
                <button className={`border-2 border-${colorScheme.secondary} text-${colorScheme.secondary} px-8 py-4 rounded-lg font-bold hover:bg-${colorScheme.secondary} hover:text-white transition-colors`}>
                  Free Estimate
                </button>
              </div>
            </div>
            
            {/* Right Content - Stats/Image Placeholder */}
            <div className={`bg-gradient-to-br ${colorScheme.gradient} rounded-3xl p-8 text-white`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">Our Track Record</h3>
                <p className="opacity-90">Serving {params.location} since 2008</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">5,000+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm opacity-90">Emergency Service</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-sm opacity-90">Satisfaction Guaranteed</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm opacity-90">"Best plumber in {params.location}!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold text-${colorScheme.primary} mb-4`}>
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from satisfied customers across {params.location}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Had a burst pipe emergency at 2 AM. {params.business} came out immediately and fixed it professionally. 
                Great service and fair pricing. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mike Johnson</p>
                  <p className="text-sm text-gray-500">Homeowner • {params.location}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Professional, punctual, and reasonably priced. They installed our new water heater quickly and 
                cleaned up everything. Will definitely use again!"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">SW</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Williams</p>
                  <p className="text-sm text-gray-500">Business Owner • {params.location}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
              <p className="text-gray-700 mb-6">
                "Excellent drain cleaning service! They arrived on time, diagnosed the problem quickly, and 
                fixed it for a fair price. Very honest and reliable plumbers."
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-${colorScheme.secondary} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">RD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Robert Davis</p>
                  <p className="text-sm text-gray-500">Property Manager • {params.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gradient-to-r ${colorScheme.gradient} text-white`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Ready for Fast, Reliable Plumbing Service?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Don't wait for a small problem to become a big one. Contact {params.business} today 
              for professional plumbing services in {params.location}.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                {params.phone && (
                  <div className="flex items-center space-x-4">
                    <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-lg">Emergency Line</p>
                      <a href={`tel:${params.phone}`} className="text-xl hover:text-yellow-300 transition-colors">
                        {params.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-4">
                  <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Service Area</p>
                    <p className="text-xl">{params.location} & Surrounding Areas</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM7.5 12l2.5 2.5L12 12l2.5 2.5L17.5 12 15 9.5 12 12 9 9.5 7.5 12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Business Hours</p>
                    <p className="text-xl">24/7 Emergency Service Available</p>
                    <p className="text-sm opacity-75">Regular hours: Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-xl">{params.business.toLowerCase().replace(/\s+/g, '')}@plumbing.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <h4 className="text-lg font-bold">Why Call Us Right Now?</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✅ Free estimates on all major repairs</li>
                  <li>✅ Same-day service available</li>
                  <li>✅ Licensed, bonded, and insured</li>
                  <li>✅ Upfront pricing - no surprises</li>
                  <li>✅ 100% satisfaction guarantee</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Service Online</h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name*" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name*" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Street Address" 
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                
                <select className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="">Select Service Type*</option>
                  <option value="emergency">🚨 Emergency Repair</option>
                  <option value="drain">🔧 Drain Cleaning</option>
                  <option value="water-heater">🔥 Water Heater</option>
                  <option value="leak">💧 Leak Detection/Repair</option>
                  <option value="installation">🔧 Fixture Installation</option>
                  <option value="maintenance">⚙️ Preventive Maintenance</option>
                  <option value="other">❓ Other</option>
                </select>
                
                <textarea 
                  placeholder="Describe your plumbing issue in detail..." 
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                />
                
                <div className="flex items-center space-x-3">
                  <input type="checkbox" id="urgent" className="w-5 h-5" />
                  <label htmlFor="urgent" className="text-sm">This is an urgent/emergency situation</label>
                </div>
                
                <button 
                  type="submit"
                  className={`w-full bg-${colorScheme.secondary} hover:bg-${colorScheme.accent} text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  <span>Send Service Request</span>
                </button>
              </form>
              
              <p className="text-center text-sm mt-4 opacity-75">
                * Required fields • We'll respond within 15 minutes during business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-${colorScheme.secondary} p-3 rounded-lg`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{params.business}</h3>
                  <p className={`text-${colorScheme.accent} text-sm`}>Licensed & Insured Plumbing Services</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted local plumber serving {params.location} and surrounding areas since 2008. 
                We specialize in emergency repairs, drain cleaning, water heater service, and all your 
                residential and commercial plumbing needs.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className={`bg-${colorScheme.secondary} p-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className={`bg-${colorScheme.secondary} p-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className={`bg-${colorScheme.secondary} p-3 rounded-lg hover:bg-${colorScheme.accent} transition-colors`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emergency Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Estimates</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Emergency Repairs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Drain Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Water Heater Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leak Detection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fixture Installation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Commercial Plumbing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 {params.business}. All rights reserved. Licensed, bonded, and insured.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>License #PL-2024-{Math.floor(Math.random() * 10000)}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
