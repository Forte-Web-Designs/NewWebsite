'use client';

import { useState, useEffect } from 'react';

export default function PlumbingLanding() {
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [params, setParams] = useState({
    business: 'Hendrio',
    owner: '',
    location: 'your area',
    phone: '',
    theme: 'blue',
    utm_source: 'email',
    utm_medium: 'landing-page',
    utm_campaign: 'plumbing-outreach'
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolledHalfway, setHasScrolledHalfway] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Color themes for plumbing businesses
  const colorThemes = {
    blue: {
      primary: 'bg-blue-900',
      primaryHover: 'hover:bg-blue-800',
      primaryText: 'text-blue-900',
      secondary: 'bg-orange-500',
      secondaryHover: 'hover:bg-orange-600',
      secondaryText: 'text-orange-500',
      accent: 'text-orange-400',
      gradient: 'from-blue-900 to-blue-800',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-white'
    },
    navy: {
      primary: 'bg-slate-800',
      primaryHover: 'hover:bg-slate-700',
      primaryText: 'text-slate-800',
      secondary: 'bg-amber-500',
      secondaryHover: 'hover:bg-amber-600',
      secondaryText: 'text-amber-500',
      accent: 'text-amber-400',
      gradient: 'from-slate-800 to-slate-700',
      bgGradient: 'bg-gradient-to-br from-slate-50 to-white'
    },
    green: {
      primary: 'bg-emerald-800',
      primaryHover: 'hover:bg-emerald-700',
      primaryText: 'text-emerald-800',
      secondary: 'bg-orange-500',
      secondaryHover: 'hover:bg-orange-600',
      secondaryText: 'text-orange-500',
      accent: 'text-orange-400',
      gradient: 'from-emerald-800 to-emerald-700',
      bgGradient: 'bg-gradient-to-br from-emerald-50 to-white'
    },
    red: {
      primary: 'bg-red-800',
      primaryHover: 'hover:bg-red-700',
      primaryText: 'text-red-800',
      secondary: 'bg-gray-700',
      secondaryHover: 'hover:bg-gray-600',
      secondaryText: 'text-gray-700',
      accent: 'text-gray-600',
      gradient: 'from-red-800 to-red-700',
      bgGradient: 'bg-gradient-to-br from-red-50 to-white'
    }
  };

  useEffect(() => {
    // Client-side parameter extraction
    const urlParams = new URLSearchParams(window.location.search);
    
    const extractedParams = {
      business: urlParams.get('business') || 'Hendrio',
      owner: urlParams.get('owner') || '',
      location: urlParams.get('location') || 'your area',
      phone: urlParams.get('phone') || '',
      theme: urlParams.get('theme') || 'blue',
      utm_source: urlParams.get('utm_source') || 'email',
      utm_medium: urlParams.get('utm_medium') || 'landing-page',
      utm_campaign: urlParams.get('utm_campaign') || 'plumbing-outreach'
    };
    
    setParams(extractedParams);
    setCurrentTheme(extractedParams.theme);
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

  const theme = colorThemes[currentTheme as keyof typeof colorThemes] || colorThemes.blue;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your personalized experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Color Theme Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
          {Object.keys(colorThemes).map((themeName) => (
            <button
              key={themeName}
              onClick={() => setCurrentTheme(themeName)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                currentTheme === themeName ? 'border-gray-800 scale-110' : 'border-gray-300'
              }`}
              style={{
                backgroundColor: 
                  themeName === 'blue' ? '#1e40af' :
                  themeName === 'navy' ? '#1e293b' :
                  themeName === 'green' ? '#065f46' :
                  themeName === 'red' ? '#991b1b' : '#1e40af'
              }}
              title={`Switch to ${themeName} theme`}
            />
          ))}
        </div>
      </div>

      {/* Top Header Section - Exact Hendrio Match */}
      <div className={`${theme.primary} text-white py-3`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                102/B New Market, Sandigo-USA
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                example@gmail.com
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.37 0 4.15 1.55 4.15 4.86v6.24h.02z"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.746.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="font-semibold">Call Us : +980 234 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Exact Hendrio Match */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className={`w-12 h-12 ${theme.primary} rounded flex items-center justify-center mr-3`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${theme.primaryText}`}>Hendrio</h1>
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
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-6 py-3 rounded-md font-medium transition-colors`}
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Exact Hendrio Match */}
      <section className={`hero-section bg-gradient-to-r ${theme.gradient} text-white relative overflow-hidden min-h-screen flex items-center`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20">
            <div className="w-32 h-32 border-4 border-white/20 rounded-full"></div>
          </div>
          <div className="absolute bottom-20 left-20">
            <div className="w-24 h-24 border-4 border-white/20 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex items-center">
            <div className="w-1/2">
              <div className="sero-content">
                <h4 className="text-lg font-semibold mb-4">100% Satisfaction Guarantee</h4>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  We're Top <span className={`${theme.accent}`}>Expert</span>
                </h1>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  in Plumbing
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  Competently repurpose go forward benefits without oriented conveniently target business opportunities done
                </p>
                <div className="hero-button">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className={`${theme.secondary} ${theme.secondaryHover} text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2`}
                  >
                    <span>Get An Estimate</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Section - Exact Hendrio Match */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className={`${theme.secondaryText} text-lg font-semibold mb-4`}>Work Process</h4>
            <h2 className={`text-4xl font-bold ${theme.primaryText} mb-4`}>
              We Follow the <span className={`${theme.accent}`}>Process</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1609205264738-0d997a6e81af?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Booking Online" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">01</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Booking Online</h4>
              <p className="text-gray-600">Competently repurpose forward conveniently target fixed</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1553484771-047a44eee27c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Confirmation" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">02</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Confirmation</h4>
              <p className="text-gray-600">Competently repurpose forward conveniently target fixed</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Estimate Details" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">03</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Estimate Details</h4>
              <p className="text-gray-600">Competently repurpose forward conveniently target fixed</p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Complete Works" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-green-600">✓</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Complete Works</h4>
              <p className="text-gray-600">Competently repurpose forward conveniently target fixed</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Exact Hendrio Match */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578017048-4d39d0651281?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional plumber at work" 
                className="rounded-lg w-full h-96 object-cover"
              />
              {/* Stats Box */}
              <div className="absolute bottom-6 right-6 bg-orange-500 text-white p-6 rounded-lg text-center shadow-lg">
                <div className="text-3xl font-bold">11</div>
                <div className="text-lg font-bold">K+</div>
                <div className="text-sm">Project<br />Done</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h4 className="text-orange-500 text-lg font-semibold mb-4">ABOUT US</h4>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Over 25+ Year of <span className="text-orange-400">Experience</span>
              </h2>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                In Plumbing Service
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Competently repurpose go forward benefits without goal-oriented ROI the main conveniently target business opportunities whereas proactive streamline sustai content via functional multidisciplinary platforms
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">Comfortable Pricing Plan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium">Top Experts Mechanic</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Basin Repairing</span>
                  <span className="font-bold text-orange-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Get An Estimate</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold">DM</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-900">David M. Alexon</h5>
                    <p className="text-sm text-gray-600">CEO & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - Exact Hendrio Match */}
      <section className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <h2 className="text-4xl font-bold mb-4">
              Some Reason for Choose <span className={`${theme.accent}`}>hendrio</span>
            </h2>
            <h2 className="text-4xl font-bold mb-8">
              Plumbing Servicing
            </h2>
            
            {/* Video Play Button */}
            <div className="relative inline-block">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-white/30 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="absolute inset-0 border-4 border-white/30 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {['Why Choose Us ?', 'hendrio Missions', 'Mission & Vision'].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTabIndex(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                      activeTabIndex === index 
                        ? 'bg-white text-blue-900' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <span className="mr-2">0{index + 1}.</span>
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional plumbing service" 
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
                <h2 className="text-3xl font-bold mb-6">
                  Hire Best Plumbing <span className={`${theme.accent}`}>Service</span>
                </h2>
                <h2 className="text-3xl font-bold mb-6">
                  For Great Work
                </h2>
                <p className="mb-8 opacity-90">
                  Competently repurpose go forward benefits without goal-oriented ROI the conveniently target business opportunities whereas proactive
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Repairing Roofing and Door</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Floor & Window Repair</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>Satisfactions Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span>24/7 Daily Live Support</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Get An Estimate</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Exact Hendrio Match */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className="text-orange-500 text-lg font-semibold mb-4">OUR SERVICES</h4>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              We Provide Best <span className="text-orange-400">Services</span>
            </h2>
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              For any Plumbing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Kitchen Plumbing" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Kitchen Plumbing</h3>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    House Floor Cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Roof Clean & Wash
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Washroom Clean
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Basement Plumbing" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Basement Plumbing</h3>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    House Floor Cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Roof Clean & Wash
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Washroom Clean
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Bathroom Plumbing" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Bathroom Plumbing</h3>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    House Floor Cleaning
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Roof Clean & Wash
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Washroom Clean
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <p className="mt-2 font-semibold">📞 Or call: +980 234 4567</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
