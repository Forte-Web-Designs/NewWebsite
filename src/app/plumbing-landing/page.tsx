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
    business: 'Hendrio',
    owner: '',
    location: 'your area',
    phone: '',
    utm_source: 'email',
    utm_medium: 'landing-page',
    utm_campaign: 'plumbing-outreach'
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolledHalfway, setHasScrolledHalfway] = useState(false);

  useEffect(() => {
    // Client-side parameter extraction
    const urlParams = new URLSearchParams(window.location.search);
    
    const extractedParams = {
      business: urlParams.get('business') || 'Hendrio',
      owner: urlParams.get('owner') || '',
      location: urlParams.get('location') || 'your area',
      phone: urlParams.get('phone') || '',
      utm_source: urlParams.get('utm_source') || 'email',
      utm_medium: urlParams.get('utm_medium') || 'landing-page',
      utm_campaign: urlParams.get('utm_campaign') || 'plumbing-outreach'
    };
    
    setParams(extractedParams);
    setIsLoaded(true);

    // Scroll listener for popup trigger
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrollPosition / (documentHeight - windowHeight);
      
      if (scrollPercentage >= 0.5 && !hasScrolledHalfway && !showPopup) {
        setHasScrolledHalfway(true);
        setTimeout(() => setShowPopup(true), 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledHalfway, showPopup]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar - Website Sales Focus */}
      <div className="bg-blue-900 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-8">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
              </svg>
              Serving Businesses in {params.location}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              seth@fortewebdesigns.com
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2">
              <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.86v6.24h.02z"/>
                </svg>
              </a>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span className="font-semibold">Call Us : (817) 873-6655</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Exact Hendrio Match */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center mr-3">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-2.08-5.99z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Forte Web Designs</h1>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                  Home
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
              </div>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <div className="relative group">
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                  Pages
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                  Shop
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors">
                  Blog
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </a>
              </div>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors lg:hidden">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
              <button 
                onClick={() => setShowPopup(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium transition-colors"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Exact Hendrio Match */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20">
            <div className="w-32 h-32 border-4 border-white/20 rounded-full"></div>
          </div>
          <div className="absolute bottom-20 left-20">
            <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
            <svg className="w-64 h-64 text-orange-400/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                This Website Could Be YOURS!
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Build <span className="text-orange-400">Websites</span>
                <br />
                That Get Results
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Stop losing customers to competitors with better websites. Get a professional, mobile-responsive website that converts visitors into paying customers.
              </p>

              <div className="mb-8">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get My Website Quote</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - ROI Calculator */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">What {params.business} Could Earn</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/20 p-4 rounded-lg">
                    <div className="text-2xl mb-2">�</div>
                    <h4 className="font-bold">Monthly Revenue</h4>
                    <p className="text-sm opacity-90">+$2K-5K more</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <div className="text-2xl mb-2">�</div>
                    <h4 className="font-bold">New Leads</h4>
                    <p className="text-sm opacity-90">15-30 per month</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🎯</div>
                    <h4 className="font-bold">Local Ranking</h4>
                    <p className="text-sm opacity-90">Top 3 Google</p>
                  </div>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h4 className="font-bold">Quick Setup</h4>
                    <p className="text-sm opacity-90">2-week delivery</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Start My Website: (817) 873-6655
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section - Exact Hendrio Match */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 text-lg font-semibold mb-4">How We Work</h4>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Your Website in <span className="text-orange-400">4 Simple Steps</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">01</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Free Consultation</h4>
              <p className="text-gray-600">We discuss your business goals and create a custom website strategy</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">02</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Design & Build</h4>
              <p className="text-gray-600">Our team creates your custom website with professional design and copy</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">03</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">SEO Optimization</h4>
              <p className="text-gray-600">We optimize your site to rank higher on Google and attract more customers</p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-green-600">✓</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Launch & Support</h4>
              <p className="text-gray-600">Your website goes live and we provide ongoing support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Exact Hendrio Match */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image placeholder */}
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                <div className="text-gray-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <p className="text-lg font-semibold">Professional Website</p>
                  <p>Design & Development</p>
                </div>
              </div>
              {/* Stats Box */}
              <div className="absolute bottom-6 right-6 bg-orange-500 text-white p-6 rounded-lg text-center shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Websites Built</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h4 className="text-orange-500 text-lg font-semibold mb-4">ABOUT FORTE WEB DESIGNS</h4>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                We've Helped <span className="text-orange-400">Hundreds</span> of Businesses Like {params.business} Grow Online
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Stop losing customers to competitors with better websites! We specialize in creating high-converting websites for local businesses that actually bring in more customers and increase revenue.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">Mobile-Responsive Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">SEO Optimized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">Lead Generation Forms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">2-Week Delivery</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Client Satisfaction Rate</span>
                  <span className="font-bold text-orange-500">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Get My Website Quote</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">SW</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-900">Seth Wilson</h5>
                    <p className="text-sm text-gray-600">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Exact Hendrio Match */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 text-lg font-semibold mb-4">Website Packages</h4>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Choose Your Perfect <span className="text-orange-400">Website</span> Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional websites that convert visitors into customers. All packages include mobile design, SEO optimization, and lead generation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Package 1 - Foundation */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Forte Foundation™</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 5-page professional website</li>
                <li>• Mobile-responsive design</li>
                <li>• SEO-ready foundation</li>
                <li>• Contact forms & scheduling</li>
                <li>• Hosting + domain included</li>
                <li>• 2-week delivery</li>
              </ul>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-orange-500 mb-2">$200/month</p>
                <p className="text-sm text-gray-500">or $2,500 one-time</p>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="text-orange-500 hover:text-orange-600 font-semibold flex items-center mx-auto space-x-2"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Package 2 - Pro (Most Popular) */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  🔥 MOST POPULAR
                </span>
              </div>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Forte Pro™</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• 10-page custom website</li>
                <li>• Advanced lead generation</li>
                <li>• Online booking system</li>
                <li>• Customer testimonials</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
                <li>• 2-week delivery</li>
              </ul>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-orange-500 mb-2">$350/month</p>
                <p className="text-sm text-gray-500">or $4,300 one-time</p>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="text-orange-500 hover:text-orange-600 font-semibold flex items-center mx-auto space-x-2"
                >
                  <span>Get Started</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Package 3 - Custom */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Custom Solution</h3>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Unlimited pages</li>
                <li>• E-commerce capabilities</li>
                <li>• Custom integrations</li>
                <li>• Advanced features</li>
                <li>• Dedicated support</li>
                <li>• Custom timeline</li>
              </ul>
              <div className="text-center mb-4">
                <p className="text-3xl font-bold text-orange-500 mb-2">Custom Quote</p>
                <p className="text-sm text-gray-500">Starting at $5,000+</p>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="text-orange-500 hover:text-orange-600 font-semibold flex items-center mx-auto space-x-2"
                >
                  <span>Get Quote</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Lead Generation Banner */}
      <section className="bg-orange-500 text-white py-8">
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
                  href="tel:8178736655"
                  className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call: (817) 873-6655
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Hendrio Match */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Forte Web Designs</h3>
                  <p className="text-orange-400 text-sm">Professional Website Development</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                We build websites that work. From lead generation to conversion optimization, our designs help businesses grow their revenue and reach more customers online.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center hover:bg-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.86v6.24h.02z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Maintenance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Forte Web Designs. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
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
            
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-t-2xl">
              <h3 className="text-2xl font-bold mb-2 text-center">Get Your Free Quote!</h3>
              <p className="text-center opacity-90">Professional plumbing services by {params.business}</p>
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
                  defaultValue={params.business !== 'Hendrio' ? params.business : ''}
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
                  placeholder="Tell us about your plumbing needs..." 
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  💬 Get My Free Quote
                </button>
              </form>
              
              <div className="text-center mt-4 text-sm text-gray-600">
                <p>✅ Licensed & Insured • ✅ 24/7 Emergency Service • ✅ Free Estimates</p>
                <p className="mt-2 font-semibold">📞 Or call: (817) 873-6655</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
