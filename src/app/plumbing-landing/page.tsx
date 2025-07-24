'use client';

import { useState, useEffect } from 'react';

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
      secondary: 'orange-5                  � Call: (817) 873-66550',
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
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolledHalfway, setHasScrolledHalfway] = useState(false);

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

    // Scroll listener for popup trigger
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      if (scrollPercentage >= 0.5 && !hasScrolledHalfway && !showPopup) {
        setHasScrolledHalfway(true);
        setTimeout(() => setShowPopup(true), 1000); // Show popup 1 second after reaching halfway
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledHalfway, showPopup]);

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

  // Define color classes based on theme
  const getThemeClasses = () => {
    switch(colorScheme.theme) {
      case 'classic':
        return {
          headerBg: 'bg-blue-900',
          logoBg: 'bg-orange-500',
          primaryText: 'text-blue-900',
          secondaryText: 'text-orange-500',
          navHover: 'hover:text-orange-500',
          buttonBg: 'bg-gradient-to-r from-orange-500 to-orange-600',
          heroBg: 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900',
          accentText: 'text-orange-400',
          emergencyBg: 'bg-orange-500',
          serviceIconBg: 'bg-orange-500',
          servicePriceText: 'text-orange-500',
          serviceButton: 'bg-orange-500 hover:bg-orange-400',
          aboutBg: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900',
          contactBg: 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900',
          footerIconBg: 'bg-orange-500 hover:bg-orange-400'
        };
      case 'professional':
        return {
          headerBg: 'bg-slate-900',
          logoBg: 'bg-yellow-500',
          primaryText: 'text-slate-900',
          secondaryText: 'text-yellow-500',
          navHover: 'hover:text-yellow-500',
          buttonBg: 'bg-gradient-to-r from-yellow-500 to-yellow-600',
          heroBg: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
          accentText: 'text-yellow-400',
          emergencyBg: 'bg-yellow-500',
          serviceIconBg: 'bg-yellow-500',
          servicePriceText: 'text-yellow-500',
          serviceButton: 'bg-yellow-500 hover:bg-yellow-400',
          aboutBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
          contactBg: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
          footerIconBg: 'bg-yellow-500 hover:bg-yellow-400'
        };
      case 'trustworthy':
        return {
          headerBg: 'bg-emerald-900',
          logoBg: 'bg-cyan-500',
          primaryText: 'text-emerald-900',
          secondaryText: 'text-cyan-500',
          navHover: 'hover:text-cyan-500',
          buttonBg: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
          heroBg: 'bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900',
          accentText: 'text-cyan-400',
          emergencyBg: 'bg-cyan-500',
          serviceIconBg: 'bg-cyan-500',
          servicePriceText: 'text-cyan-500',
          serviceButton: 'bg-cyan-500 hover:bg-cyan-400',
          aboutBg: 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900',
          contactBg: 'bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900',
          footerIconBg: 'bg-cyan-500 hover:bg-cyan-400'
        };
      case 'emergency':
        return {
          headerBg: 'bg-gray-900',
          logoBg: 'bg-red-500',
          primaryText: 'text-gray-900',
          secondaryText: 'text-red-500',
          navHover: 'hover:text-red-500',
          buttonBg: 'bg-gradient-to-r from-red-500 to-red-600',
          heroBg: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900',
          accentText: 'text-red-400',
          emergencyBg: 'bg-red-500',
          serviceIconBg: 'bg-red-500',
          servicePriceText: 'text-red-500',
          serviceButton: 'bg-red-500 hover:bg-red-400',
          aboutBg: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
          contactBg: 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900',
          footerIconBg: 'bg-red-500 hover:bg-red-400'
        };
      default: // modern
        return {
          headerBg: 'bg-teal-900',
          logoBg: 'bg-orange-500',
          primaryText: 'text-teal-900',
          secondaryText: 'text-orange-500',
          navHover: 'hover:text-orange-500',
          buttonBg: 'bg-gradient-to-r from-orange-500 to-orange-600',
          heroBg: 'bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900',
          accentText: 'text-orange-400',
          emergencyBg: 'bg-orange-500',
          serviceIconBg: 'bg-orange-500',
          servicePriceText: 'text-orange-500',
          serviceButton: 'bg-orange-500 hover:bg-orange-400',
          aboutBg: 'bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900',
          contactBg: 'bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900',
          footerIconBg: 'bg-orange-500 hover:bg-orange-400'
        };
    }
  };

  const theme = getThemeClasses();

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className={`${theme.headerBg} text-white py-2 px-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span>📧 {params.business.toLowerCase().replace(/\s+/g, '')}@plumbing.com</span>
            <span>� Licensed & Insured</span>
            <span>🛡️ Bonded & Certified</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>⭐⭐⭐⭐⭐ 5.0 Rating</span>
            <span>📍 Serving {params.location}</span>
            <span>🏆 BBB A+ Rated</span>
          </div>
        </div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className={`${theme.logoBg} p-3 rounded-lg`}>
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99z"/>
                </svg>
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${theme.primaryText}`}>{params.business}</h1>
                <p className={`${theme.secondaryText} text-sm font-medium`}>
                  Licensed & Insured Plumbing Services
                </p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className={`${theme.primaryText} font-medium ${theme.navHover} transition-colors`}>Home</a>
              <a href="#services" className={`${theme.primaryText} font-medium ${theme.navHover} transition-colors`}>Services</a>
              <a href="#about" className={`${theme.primaryText} font-medium ${theme.navHover} transition-colors`}>About</a>
              <a href="#contact" className={`${theme.primaryText} font-medium ${theme.navHover} transition-colors`}>Contact</a>
            </nav>

            {/* Phone CTA */}
            {params.phone && (
              <a 
                href={`tel:${params.phone}`}
                className={`${theme.buttonBg} text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2`}
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
      <section id="home" className={`relative ${theme.heroBg} text-white py-20 overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 transform rotate-45">
            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {params.owner && (
                <div className={`inline-block ${theme.emergencyBg} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                  👋 Hey {params.owner.split(' ')[0]}! Love what you see?
                </div>
              )}
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className={theme.accentText}>THIS</span> Could Be{' '}
                <span className="underline decoration-4 decoration-orange-400">
                  Your Website
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed opacity-90">
                Impressed by this professional plumbing website? We designed it specifically for {params.business} in {params.location}. 
                <strong className="text-white"> Your business deserves a website this powerful.</strong>
              </p>

              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/30">
                <h3 className="text-2xl font-bold mb-4 text-white">🚀 What You Get:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Fully custom plumbing website - NO WordPress, Wix, or Squarespace templates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Hand-coded by professional developers - NO AI-generated content</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Mobile-responsive design that looks perfect on all devices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Lead generation forms to capture more plumbing customers</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>SEO optimization to rank higher on Google for plumbing services</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-green-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    <span>Fast loading speeds & professional hosting included</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setShowPopup(true)}
                  className={`${theme.serviceButton} text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  <span>Get MY Website Now</span>
                </button>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  See Our Portfolio
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span>Professional Web Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>5-Star Rated Company</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
                  </svg>
                  <span>2-Week Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  <span>Forte Web Designs</span>
                </div>
              </div>
            </div>

            {/* Right Content - Website Quote Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Get YOUR Website</h3>
                <p className="text-lg opacity-90">Professional design like this one!</p>
              </div>
              
              <form name="website-inquiry" method="POST" data-netlify="true" className="space-y-4">
                <input type="hidden" name="form-name" value="website-inquiry" />
                <input 
                  type="text" 
                  name="business-name"
                  placeholder="Business Name" 
                  defaultValue={params.business !== 'Your Plumbing Business' ? params.business : ''}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  defaultValue={params.owner}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  defaultValue={params.phone}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Tell us about your business and what you need..." 
                  rows={3}
                  className="w-full p-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  required
                />
                <button 
                  type="submit"
                  className={`w-full ${theme.serviceButton} text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                  <span>YES! Build My Website</span>
                </button>
              </form>
              
              <div className="text-center text-sm mt-4 space-y-2">
                <p className="opacity-75">
                  ✅ 100% USA Based • ✅ 2-week delivery • ✅ 100% client satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Services Banner */}
      <section className={`${theme.emergencyBg} text-white py-8`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🌟</span>
              <div>
                <h3 className="font-bold text-xl">This Is Just A Demo!</h3>
                <p className="text-sm opacity-90">We create custom websites that generate leads and grow your business</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center">
                <p className="font-bold text-lg">What {params.business} Could Earn:</p>
                <p className="text-2xl font-bold">+$15K-25K annually</p>
                <p className="text-sm opacity-90">with a professional website</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="tel:8133001816"
                  className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  � Call: (813) 300-1816
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${theme.primaryText} mb-4`}>
              Professional Website Packages for {params.location} Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect website package for your business. All packages include mobile-responsive design, SEO optimization, and professional hosting.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foundation Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent">
              <div className={`w-16 h-16 ${theme.serviceIconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${theme.primaryText} mb-4 text-center`}>Forte Foundation™</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 5-page professional website</li>
                <li>• Mobile-responsive design</li>
                <li>• SEO-ready foundation</li>
                <li>• Basic analytics</li>
                <li>• Contact forms & scheduling</li>
                <li>• Service area mapping</li>
                <li>• Hosting + domain included</li>
                <li>• Forte Care™ support</li>
              </ul>
              <div className="text-center">
                <div className="mb-4">
                  <p className={`text-2xl font-bold ${theme.servicePriceText} mb-1`}>$200/month</p>
                  <p className="text-sm text-gray-500">12-month minimum</p>
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-gray-600 text-sm mb-1">Or pay once:</p>
                  <p className={`text-3xl font-bold ${theme.servicePriceText}`}>$2,500</p>
                </div>
                <button 
                  onClick={() => setShowPopup(true)}
                  className={`${theme.serviceButton} text-white px-6 py-3 rounded-lg transition-colors font-medium w-full`}
                >
                  Choose Foundation
                </button>
              </div>
            </div>

            {/* Pro Package - POPULAR */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 MOST POPULAR
                </span>
              </div>
              <div className={`w-16 h-16 ${theme.serviceIconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${theme.primaryText} mb-4 text-center`}>Forte Pro™</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 10-page custom website</li>
                <li>• Mobile-responsive design</li>
                <li>• SEO-ready foundation</li>
                <li>• Advanced analytics</li>
                <li>• Online booking system</li>
                <li>• Customer testimonials page</li>
                <li>• Emergency service features</li>
                <li>• Conversion tracking</li>
                <li>• Priority support</li>
                <li>• Forte Care™ included</li>
              </ul>
              <div className="text-center">
                <div className="mb-4">
                  <p className={`text-2xl font-bold ${theme.servicePriceText} mb-1`}>$350/month</p>
                  <p className="text-sm text-gray-500">12-month minimum</p>
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-gray-600 text-sm mb-1">Or pay once:</p>
                  <p className={`text-3xl font-bold ${theme.servicePriceText}`}>$4,300</p>
                </div>
                <button 
                  onClick={() => setShowPopup(true)}
                  className={`${theme.serviceButton} text-white px-6 py-3 rounded-lg transition-colors font-medium w-full`}
                >
                  Choose Pro
                </button>
              </div>
            </div>

            {/* Custom Package */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent">
              <div className={`w-16 h-16 ${theme.serviceIconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-bold ${theme.primaryText} mb-4 text-center`}>Custom Solution</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Unlimited pages</li>
                <li>• E-commerce capabilities</li>
                <li>• Custom integrations</li>
                <li>• Advanced features</li>
                <li>• Priority development</li>
                <li>• Dedicated support</li>
                <li>• Forte Care™ premium</li>
              </ul>
              <div className="text-center">
                <div className="mb-4">
                  <p className={`text-2xl font-bold ${theme.servicePriceText} mb-1`}>Custom Quote</p>
                  <p className="text-sm text-gray-500">Based on requirements</p>
                </div>
                <div className="border-t pt-4 mb-4">
                  <p className="text-gray-600 text-sm mb-1">Starting at:</p>
                  <p className={`text-3xl font-bold ${theme.servicePriceText}`}>$5,000+</p>
                </div>
                <button 
                  onClick={() => setShowPopup(true)}
                  className={`${theme.serviceButton} text-white px-6 py-3 rounded-lg transition-colors font-medium w-full`}
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Not Sure Which Package Is Right?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss your business goals and find the perfect solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className={`${theme.serviceButton} text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg`}
                >
                  💬 Free Consultation
                </button>
                <button 
                  onClick={() => setShowPopup(true)}
                  className="border-2 border-white bg-transparent text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  📱 Call (817) 873-6655
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${theme.primaryText} mb-4`}>
              Real Results from Real Businesses
            </h2>
            <p className="text-xl text-gray-600">
              See how professional websites transformed these businesses just like yours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MH</span>
                </div>
                <h4 className="font-bold text-lg text-center">Mike's HVAC Service</h4>
                <p className="text-gray-600 text-center">Phoenix, AZ</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "After Forte Web Designs built our website, we went from 2-3 calls per week to 8-12! 
                The professional design and lead capture forms have really helped our business grow."
              </blockquote>
              <div className="text-center">
                <p className={`text-2xl font-bold ${theme.servicePriceText}`}>+250% More Leads</p>
                <p className="text-sm text-gray-500">in first 3 months</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">EP</span>
                </div>
                <h4 className="font-bold text-lg text-center">Elite Plumbing Co.</h4>
                <p className="text-gray-600 text-center">Denver, CO</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "I was skeptical about spending money on a website, but it paid for itself in 6 weeks! 
                Now customers find us online instead of going to our competitors."
              </blockquote>
              <div className="text-center">
                <p className={`text-2xl font-bold ${theme.servicePriceText}`}>ROI: 400%</p>
                <p className="text-sm text-gray-500">in first 6 months</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="absolute top-4 right-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">PS</span>
                </div>
                <h4 className="font-bold text-lg text-center">Pro Electric Solutions</h4>
                <p className="text-gray-600 text-center">Austin, TX</p>
              </div>
              <blockquote className="text-gray-700 italic mb-4">
                "The website looks so professional that customers automatically trust us more. 
                We've been able to increase our average job value significantly."
              </blockquote>
              <div className="text-center">
                <p className={`text-2xl font-bold ${theme.servicePriceText}`}>+$18K Revenue</p>
                <p className="text-sm text-gray-500">additional per year</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className={`${theme.heroBg} text-white rounded-3xl p-12 mt-16 text-center`}>
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business Like {params.business}?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of successful businesses who chose Forte Web Designs
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-1">25+</div>
                  <div className="text-sm opacity-80">Websites Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm opacity-80">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">USA</div>
                  <div className="text-sm opacity-80">Based</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowPopup(true)}
                className="bg-white text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start My Website Today
              </button>
              <button 
                onClick={() => setShowPopup(true)}
                className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                💬 Free Strategy Call
              </button>
            </div>
            
            <p className="text-sm mt-4 opacity-75">
              ⚡ Limited time: 50% off all packages • 100% USA based • 100% client satisfaction
            </p>
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
                <div className={`${theme.logoBg} p-3 rounded-lg`}>
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Forte Web Designs</h3>
                  <p className={`${theme.accentText} text-sm`}>Professional Website Design & Development</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We specialize in creating stunning, high-converting websites for local businesses like {params.business}. 
                Our team has helped hundreds of companies in {params.location} and across the country grow their online presence and increase revenue.
              </p>
              
              <div className="mb-4">
                <a 
                  href="tel:8178736655"
                  className={`${theme.buttonBg} text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-2 mb-4`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Call: (817) 873-6655</span>
                </a>
                <div className="text-gray-300">
                  <p>📧 hello@fortewebdesigns.com</p>
                  <p>🌐 www.fortewebdesigns.com</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Website Packages</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Forte</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Website Maintenance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Identity</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 Forte Web Designs. All rights reserved. Transforming businesses through professional web design.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <span>🌟 A+ BBB Rating</span>
                <span>🏆 Award-Winning Agency</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold z-10"
            >
              ×
            </button>
            
            <div className={`${theme.heroBg} text-white p-6 rounded-t-2xl`}>
              <h3 className="text-2xl font-bold mb-2 text-center">Get Your Website Built!</h3>
              <p className="text-center opacity-90">Professional plumbing website design</p>
            </div>
            
            <div className="p-6">
              <form name="popup-contact" method="POST" data-netlify="true" className="space-y-4">
                <input type="hidden" name="form-name" value="popup-contact" />
                <input type="hidden" name="source" value="popup" />
                <input type="hidden" name="business" value={params.business} />
                
                <input 
                  type="text" 
                  name="business-name"
                  placeholder="Business Name" 
                  defaultValue={params.business !== 'Your Plumbing Business' ? params.business : ''}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  defaultValue={params.owner}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  defaultValue={params.phone}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Tell us about your plumbing business and website needs..." 
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
                <button 
                  type="submit"
                  className={`w-full ${theme.serviceButton} text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}
                >
                  💬 Get My Free Quote
                </button>
              </form>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                <p>✅ 100% USA Based • ✅ 2-week delivery • ✅ 100% client satisfaction</p>
                <p className="mt-2 font-semibold">📞 Or call: (817) 873-6655</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
