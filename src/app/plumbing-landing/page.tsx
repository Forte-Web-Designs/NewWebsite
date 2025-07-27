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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);
  const [showClaimSuccess, setShowClaimSuccess] = useState(false);
  const [claimFormError, setClaimFormError] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState(false);

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

  // Mobile menu and video modal escape key handlers
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        if (showVideo) {
          setShowVideo(false);
        }
      }
    };

    if (mobileMenuOpen || showVideo) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu or video is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, showVideo]);

  // Form submission handler for CLAIM MY CUSTOM WEBSITE
  const handleClaimFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingClaim(true);
    setClaimFormError(null);
    
    try {
      // Get form data directly from the form element (same pattern as ContactForm)
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      // Add form name for Netlify
      formDataToSend.append('form-name', 'website-mockup');
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        // Success - show success message within popup instead of opening popup
        setShowClaimSuccess(true);
        setShowClaimForm(false);
        
        // Reset form to initial state (keep pre-filled data for re-use)
        form.reset();
        // Re-populate with default values from URL params
        const businessInput = form.querySelector('input[name="business-name"]') as HTMLInputElement;
        const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
        const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
        const locationInput = form.querySelector('input[name="location"]') as HTMLInputElement;
        
        if (businessInput && params.business !== 'Hendrio') businessInput.value = params.business;
        if (nameInput && params.owner !== 'Admin') nameInput.value = params.owner;
        if (phoneInput && params.phone !== '123-456-7890') phoneInput.value = params.phone;
        if (locationInput && params.location !== 'Your City') locationInput.value = params.location;
        
        // Auto-hide success message after 8 seconds
        setTimeout(() => setShowClaimSuccess(false), 8000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setClaimFormError("Sorry, there was an error sending your information. Please try again or call us directly at (817) 873-6655");
    } finally {
      setIsSubmittingClaim(false);
    }
  };

  // Form submission handler for popup form
  const handlePopupFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingClaim(true);
    setClaimFormError(null);
    
    try {
      // Get form data directly from the form element
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      // Add form name for Netlify
      formDataToSend.append('form-name', 'website-mockup');
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        // Success - show success message within popup
        setShowClaimSuccess(true);
        
        // Reset form to initial state (keep pre-filled data for re-use)
        form.reset();
        // Re-populate with default values from URL params
        const businessInput = form.querySelector('input[name="business-name"]') as HTMLInputElement;
        const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
        const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
        const locationInput = form.querySelector('input[name="location"]') as HTMLInputElement;
        
        if (businessInput && params.business !== 'Hendrio') businessInput.value = params.business;
        if (nameInput && params.owner !== 'Admin') nameInput.value = params.owner;
        if (phoneInput && params.phone !== '123-456-7890') phoneInput.value = params.phone;
        if (locationInput && params.location !== 'Your City') locationInput.value = params.location;
        
        // Auto-hide success message after 8 seconds
        setTimeout(() => setShowClaimSuccess(false), 8000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setClaimFormError("Sorry, there was an error sending your information. Please try again or call us directly at (817) 873-6655");
    } finally {
      setIsSubmittingClaim(false);
    }
  };

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
    <div className="min-h-screen flex flex-col relative">

      {/* Top Header Section - Compact */}
      <div className={`${theme.primary} text-white py-2`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center text-xs space-y-1 lg:space-y-0">
            <div className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-6">
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                <span className="text-center lg:text-left">
                  {params.business !== 'Hendrio' && params.location !== 'your area' 
                    ? `Serving ${params.location}`
                    : 'Sandigo-USA'
                  }
                </span>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                info@{params.business.toLowerCase().replace(/\s+/g, '').replace(/plumbing$/, '')}plumbing.com
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center space-y-1 lg:space-y-0 lg:space-x-4">
              <div className="flex space-x-1">
                <a href="#" className="w-6 h-6 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-6 h-6 bg-white/20 rounded flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="font-semibold text-xs">
                  {params.phone || '+980 234 4567'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Compact Design - Always sticky and visible */}
      <header className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Logo - Smaller */}
            <div className="flex items-center">
              <div className={`w-8 h-8 ${theme.primary} rounded flex items-center justify-center mr-2`}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                </svg>
              </div>
              <div>
                <h1 className={`text-lg font-bold ${theme.primaryText}`}>
                  {params.business !== 'Hendrio' ? params.business : 'Hendrio'}
                </h1>
                <p className="text-xs text-gray-600">Professional Plumbing Services</p>
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
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* Right side buttons - Compact */}
            <div className="flex items-center space-x-2">
              <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </button>

              {/* Desktop Color Theme Switcher - Compact */}
              <div className="hidden sm:flex items-center space-x-1 bg-gray-50 p-1 rounded-lg border">
                <span className="text-xs text-gray-600 px-2 py-1 font-medium">DEMO:</span>
                {Object.keys(colorThemes).map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => setCurrentTheme(themeName)}
                    className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-110 ${
                      currentTheme === themeName 
                        ? 'border-gray-800 shadow-md' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    style={{
                      backgroundColor: 
                        themeName === 'blue' ? '#1e40af' :
                        themeName === 'navy' ? '#1e293b' :
                        themeName === 'green' ? '#065f46' :
                        themeName === 'red' ? '#991b1b' : '#1e40af'
                    }}
                    title={`Switch to ${themeName.charAt(0).toUpperCase() + themeName.slice(1)} theme`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 hover:bg-gray-100 rounded transition-colors lg:hidden"
              >
                {mobileMenuOpen ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                  </svg>
                )}
              </button>
              <button 
                onClick={() => setShowPopup(true)}
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-3 py-1.5 rounded-md font-medium transition-colors text-sm`}
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Expandable Content */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-md">
            <div className="container mx-auto px-4 py-4">
              {/* Color Theme Picker */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">🎨 Color Themes</h3>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(colorThemes).map((themeName) => (
                    <button
                      key={themeName}
                      onClick={() => setCurrentTheme(themeName)}
                      className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all hover:shadow-sm ${
                        currentTheme === themeName 
                          ? 'border-gray-800 bg-gray-50' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                      title={`Switch to ${themeName.charAt(0).toUpperCase() + themeName.slice(1)} theme`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full mb-1 border border-gray-300"
                        style={{
                          backgroundColor: 
                            themeName === 'blue' ? '#1e40af' :
                            themeName === 'navy' ? '#1e293b' :
                            themeName === 'green' ? '#065f46' :
                            themeName === 'red' ? '#991b1b' : '#1e40af'
                        }}
                      ></div>
                      <span className="text-xs font-medium capitalize">{themeName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Menu */}
              <nav className="grid grid-cols-2 gap-2">
                <a 
                  href="#" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-center"
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-center"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-center"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 px-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-medium text-center"
                >
                  Contact
                </a>
              </nav>

              {/* Bottom CTA Button */}
              <div className="mt-4">
                <button 
                  onClick={() => {
                    setShowPopup(true);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full py-3 px-4 ${theme.secondary} ${theme.secondaryHover} text-white rounded-lg transition-colors font-medium text-base`}
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Demo Disclaimer Banner */}
      {params.business !== 'Hendrio' && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center relative z-40">
          <div className="container mx-auto">
            <p className="text-xs md:text-sm">
              🎯 <strong>DEMO:</strong> Custom mockup for <strong>{params.business}</strong>.  
              <span className="hidden md:inline">Every detail can be personalized!</span>
            </p>
          </div>
        </div>
      )}

      {/* Google Reviews Section */}
      <section className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-6 h-6" />
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5</span>
            </div>
            
            <div className="text-gray-600 text-sm">
              <span className="font-medium">127+ Reviews</span> from customers in {params.location}
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span>Licensed & Insured</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Same-Day Service</span>
            </div>
          </div>
          
          {/* Sample Review Quotes */}
          <div className="mt-4 flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 text-center">
            <div className="text-xs text-gray-600 italic">
              "Fast, professional, and fair pricing!" - Sarah M.
            </div>
            <div className="text-xs text-gray-600 italic">
              "Fixed our emergency leak same day!" - Mike R.
            </div>
            <div className="text-xs text-gray-600 italic">
              "Highly recommend for all plumbing needs" - Jennifer K.
            </div>
          </div>
        </div>
      </section>

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
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <div className="hero-content">
                <h4 className="text-lg font-semibold mb-4">100% Satisfaction Guarantee</h4>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                  {params.business !== 'Hendrio' ? (
                    <>
                      <span className={`${theme.accent}`}>{params.business}</span><br />
                      Expert Plumbing
                    </>
                  ) : (
                    <>
                      We're Top <span className={`${theme.accent}`}>Expert</span><br />
                      in Plumbing
                    </>
                  )}
                </h1>
                {params.owner && (
                  <h2 className="text-2xl lg:text-3xl font-semibold mb-4 opacity-90">
                    Owned & Operated by {params.owner}
                  </h2>
                )}
                {params.location !== 'your area' && (
                  <h3 className="text-xl lg:text-2xl mb-6 opacity-80">
                    Proudly Serving {params.location} & Surrounding Areas
                  </h3>
                )}
                
                {/* Success Message in Hero */}
                {showClaimSuccess && (
                  <div className="mb-6 p-4 bg-green-100/90 border border-green-300 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-green-800 font-medium">🎉 Success! Your request has been submitted. We'll contact you within 24 hours!</span>
                    </div>
                  </div>
                )}

                {/* Error Message in Hero */}
                {claimFormError && (
                  <div className="mb-6 p-4 bg-red-100/90 border border-red-300 rounded-lg backdrop-blur-sm">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-800 font-medium">{claimFormError}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-lg lg:text-xl mb-8 leading-relaxed opacity-90">
                  {params.business !== 'Hendrio' 
                    ? `Professional plumbing services you can trust. Licensed, insured, and committed to excellence in ${params.location || 'your area'}.`
                    : 'Competently repurpose go forward benefits without oriented conveniently target business opportunities done'
                  }
                </p>
                <div className="hero-button flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className={`${theme.secondary} ${theme.secondaryHover} text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg`}
                  >
                    <span>Get Free Estimate</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </button>
                  {params.phone && (
                    <a 
                      href={`tel:${params.phone.replace(/\D/g, '')}`}
                      className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg hover:bg-gray-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span>Call Now</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            {/* Add website mockup preview for business owners */}
            {params.business !== 'Hendrio' && (
              <div className="w-full lg:w-1/2 lg:pl-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-center">Your Website Preview</h3>
                  <div className="bg-white rounded-lg p-4 text-gray-800 shadow-xl">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-blue-900 rounded mx-auto mb-2 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                        </svg>
                      </div>
                      <h4 className="font-bold text-lg">{params.business}</h4>
                      <p className="text-sm text-gray-600">Professional Plumbing Services</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm mb-3">Serving {params.location}</p>
                      <div className="bg-orange-500 text-white py-2 px-4 rounded text-sm font-bold">
                        Call {params.phone}
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-sm opacity-90 mb-3">
                      ✨ This could be your professional website!
                    </p>
                    <button 
                      onClick={() => setShowPopup(true)}
                      className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Claim Your Website
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Work Process Section - Exact Hendrio Match */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h4 className={`${theme.secondaryText} text-lg font-semibold mb-4`}>How We Work</h4>
            <h2 className={`text-3xl lg:text-4xl font-bold ${theme.primaryText} mb-4`}>
              Our Simple <span className={`${theme.accent}`}>4-Step Process</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting quality plumbing service has never been easier. Here's how we make it happen:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Contact Us Online" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">01</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Contact Us</h4>
              <p className="text-gray-600">Call, text, or fill out our online form to describe your plumbing issue</p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Schedule Service" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">02</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Schedule Service</h4>
              <p className="text-gray-600">We'll confirm your appointment and send a licensed plumber to your location</p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Free Estimate" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-blue-900">03</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Get Estimate</h4>
              <p className="text-gray-600">Receive a detailed, upfront estimate with no hidden fees or surprises</p>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Quality Work Completed" 
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-sm font-bold text-green-600">✓</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-blue-900 mb-3">Problem Solved</h4>
              <p className="text-gray-600">Professional work completed right the first time with a satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Customized with business info */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Professional plumber at work" 
                className="rounded-lg w-full h-96 object-cover"
              />
              {/* Stats Box */}
              <div className="absolute bottom-6 right-6 bg-orange-500 text-white p-6 rounded-lg text-center shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-lg font-bold">Happy</div>
                <div className="text-sm">Customers</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h4 className="text-orange-500 text-lg font-semibold mb-4">ABOUT {params.business.toUpperCase()}</h4>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">
                {params.business !== 'Hendrio' ? (
                  <>
                    Your Trusted <span className="text-orange-400">Local</span><br />
                    Plumbing Experts in {params.location || 'Your Area'}
                  </>
                ) : (
                  <>
                    Over 25+ Year of <span className="text-orange-400">Experience</span><br />
                    In Plumbing Service
                  </>
                )}
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {params.business !== 'Hendrio' ? (
                  `At ${params.business}, we're committed to providing reliable, professional plumbing services to homeowners and businesses in ${params.location || 'the local area'}. ${params.owner ? `Under the expert leadership of ${params.owner}, ` : ''}our team delivers quality workmanship and exceptional customer service on every job.`
                ) : (
                  'Competently repurpose go forward benefits without goal-oriented ROI the main conveniently target business opportunities whereas proactive streamline sustai content via functional multidisciplinary platforms'
                )}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">Upfront Pricing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="font-medium text-gray-900 dark:text-white">Satisfaction Guarantee</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">Customer Satisfaction</span>
                  <span className="font-bold text-orange-500">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '98%'}}></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
                >
                  <span>Get Free Estimate</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>

                {params.owner && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      {params.owner.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900">{params.owner}</h5>
                      <p className="text-sm text-gray-600">Owner & Licensed Plumber</p>
                    </div>
                  </div>
                )}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className={`${theme.accent}`}>{params.business !== 'Hendrio' ? params.business : 'hendrio'}</span>
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              For Your Plumbing Needs?
            </h2>
            
            {/* Video Section */}
            <div className="relative max-w-2xl mx-auto mb-8">
              {/* Video Thumbnail with Play Button */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
                   onClick={() => setShowVideo(!showVideo)}>
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional plumbing services video"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-xl">
                    <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Video info overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold mb-1">
                    See {params.business !== 'Hendrio' ? params.business : 'Our Team'} in Action
                  </h3>
                  <p className="text-white/90 text-sm">
                    Professional plumbing demonstration video • 1:45
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-white/90 text-xs">4.9/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Player Modal */}
              {showVideo && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                     onClick={() => setShowVideo(false)}>
                  <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
                       onClick={(e) => e.stopPropagation()}>
                    {/* Close button */}
                    <button 
                      onClick={() => setShowVideo(false)}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    {/* Video player - Professional plumbing services demo */}
                    <div className="relative aspect-video bg-black">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      >
                        {/* Multiple video sources for better compatibility */}
                        <source 
                          src="https://cdn.pixabay.com/video/2023/04/12/157942-818354052_large.mp4" 
                          type="video/mp4" 
                        />
                        <source 
                          src="https://cdn.pixabay.com/video/2022/08/31/128947-740894059_large.mp4" 
                          type="video/mp4" 
                        />
                        <source 
                          src="https://cdn.pixabay.com/video/2021/08/13/84889-584717748_large.mp4" 
                          type="video/mp4" 
                        />
                        <source 
                          src="https://cdn.pixabay.com/video/2019/07/15/25086-346944087_large.mp4" 
                          type="video/mp4" 
                        />
                        {/* Fallback message for browsers that don't support video */}
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center text-white p-8">
                            <div className="text-4xl mb-4">🔧</div>
                            <h3 className="text-xl font-semibold mb-2">
                              {params.business !== 'Hendrio' ? `${params.business} Professional Services` : 'Professional Plumbing Services'}
                            </h3>
                            <p className="text-white/80">
                              Expert drain cleaning, pipe repair & emergency services
                            </p>
                            <p className="text-sm text-white/60 mt-4">
                              Your browser doesn't support video playback. Please contact us for a demonstration.
                            </p>
                          </div>
                        </div>
                      </video>
                      
                      {/* Video overlay title - only show when video is playing */}
                      <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-lg p-3 video-overlay">
                        <h3 className="text-white font-semibold text-sm">
                          {params.business !== 'Hendrio' ? `${params.business} Professional Services` : 'Professional Plumbing Services'}
                        </h3>
                        <p className="text-white/80 text-xs">
                          Expert drain cleaning, pipe repair & emergency services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tabs Section */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4">
                {['Why Choose Us?', 'Our Experience', 'Service Guarantee'].map((tab, index) => (
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
                {/* Dynamic image based on active tab */}
                <img 
                  src={
                    activeTabIndex === 0 
                      ? "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      : activeTabIndex === 1
                      ? "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      : "https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  }
                  alt={
                    activeTabIndex === 0 
                      ? "Professional plumbing service"
                      : activeTabIndex === 1
                      ? "Experienced plumbing team"
                      : "Plumbing service guarantee"
                  }
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>

              <div>
                {/* Tab 1: Why Choose Us? */}
                {activeTabIndex === 0 && (
                  <>
                    <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      Trusted Local Plumbers <span className={`${theme.accent}`}>You Can</span>
                    </h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      Count On 24/7
                    </h2>
                    <p className="mb-8 opacity-90">
                      {params.business !== 'Hendrio' 
                        ? `When you need reliable plumbing services in ${params.location || 'your area'}, ${params.business} delivers. We're locally owned, fully licensed, and committed to fixing your plumbing problems right the first time. No hidden fees, no surprises - just honest, professional service you can trust.`
                        : 'Professional plumbing services with honest pricing, quality workmanship, and reliable customer support.'
                      }
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">24/7 Emergency Service</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Licensed & Insured Experts</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">100% Satisfaction Guarantee</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Upfront, Honest Pricing</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Tab 2: Our Experience */}
                {activeTabIndex === 1 && (
                  <>
                    <h4 className="text-lg font-semibold mb-4">Our Experience</h4>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      <span className={`${theme.accent}`}>15+ Years</span> of Professional
                    </h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      Plumbing Excellence
                    </h2>
                    <p className="mb-8 opacity-90">
                      {params.business !== 'Hendrio'
                        ? `${params.business} has been serving ${params.location || 'the local community'} for over 15 years. Our experienced team has handled thousands of plumbing emergencies, installations, and repairs. From simple drain clogs to complex pipe replacements, we've seen it all and fixed it all.`
                        : 'With over 15 years in the plumbing industry, our experienced team has handled thousands of residential and commercial plumbing projects.'
                      }
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">5,000+ Jobs Completed</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Master Plumber Certified</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Commercial & Residential</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Latest Tools & Techniques</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Tab 3: Service Guarantee */}
                {activeTabIndex === 2 && (
                  <>
                    <h4 className="text-lg font-semibold mb-4">Service Guarantee</h4>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      <span className={`${theme.accent}`}>100% Satisfaction</span> Guaranteed
                    </h2>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-6">
                      Or Your Money Back
                    </h2>
                    <p className="mb-8 opacity-90">
                      {params.business !== 'Hendrio'
                        ? `At ${params.business}, we stand behind our work. If you're not completely satisfied with our plumbing service, we'll make it right or refund your money. We also guarantee all our work with comprehensive warranties and 24/7 emergency support.`
                        : 'We guarantee 100% satisfaction on all plumbing services. Your satisfaction is our priority, and we stand behind every job we complete.'
                      }
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">Money-Back Guarantee</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">2-Year Parts Warranty</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">1-Year Labor Warranty</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-white font-medium">24/7 Emergency Support</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <button 
                  onClick={() => setShowPopup(true)}
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 text-lg"
                >
                  <span>🔧 Get Emergency Service Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Your Website Section - Only show for business owners */}
      {params.business !== 'Hendrio' && (
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to <span className="text-orange-400">Dominate</span> Your Local Market?
              </h2>
              <p className="text-xl mb-4 opacity-90">
                Stop losing customers to competitors! Get a custom website that brings in more calls and grows your business in {params.location}.
              </p>
              
              {/* Unique Value Proposition */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm rounded-lg p-6 mb-8 border border-gray-600 text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-400 text-xl mr-2">❌</span>
                  <p className="text-lg font-bold text-white">NO Website Templates</p>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-400 text-xl mr-2">❌</span>
                  <p className="text-lg font-bold text-white">NO AI-Generated Content</p>
                </div>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-red-400 text-xl mr-2">❌</span>
                  <p className="text-lg font-bold text-white">NO Wix/Squarespace/WordPress</p>
                </div>
                <div className="flex items-start mt-6 pt-4 border-t border-gray-600">
                  <span className="text-green-400 text-xl mr-2 mt-0.5">✅</span>
                  <p className="text-base opacity-95 text-white">
                    <strong className="text-green-400">100% CUSTOM-CODED</strong> websites built specifically for YOUR plumbing business. 
                    Every pixel designed to convert visitors into paying customers.
                  </p>
                </div>
              </div>
              
              {/* Trust Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-300 mb-2">100%</div>
                  <div className="text-sm font-medium text-white dark:text-gray-200">Custom Coded</div>
                  <div className="text-xs opacity-80">No templates or AI</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-300 mb-2">100%</div>
                  <div className="text-sm font-medium text-white dark:text-gray-200">USA Based</div>
                  <div className="text-xs opacity-80">Local support team</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl font-bold text-orange-300 mb-2">100%</div>
                  <div className="text-sm font-medium text-white dark:text-gray-200">Client Satisfaction</div>
                  <div className="text-xs opacity-80">Guaranteed results</div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-5 gap-12 items-start mb-12">
                <div className="lg:col-span-2 text-left">
                  <h3 className="text-2xl font-bold mb-6">Your Custom Website Includes:</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Custom Design</strong> - No templates, built from scratch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Lead Generation System</strong> - Forms that actually convert</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Local SEO Optimization</strong> - Rank #1 in your area</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Mobile-First Design</strong> - Perfect on all devices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Google My Business Integration</strong> - Dominate local search</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span><strong>Ongoing Support</strong> - We've got your back</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-3 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full inline-block mb-4">
                      ⚡ EXCLUSIVE ACCESS
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Claim This Website for Your Business!</h3>
                    <div className="flex items-center justify-center space-x-4 mb-2">
                      <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                        100% Custom
                      </div>
                      <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                        USA Based
                      </div>
                      <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                        2-Week Launch
                      </div>
                    </div>
                    <p className="text-sm opacity-75">Get the website that will dominate your local market!</p>
                  </div>
                  
                  {/* Success Message */}
                  {showClaimSuccess && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-800 font-medium">Success! Your request has been submitted. We'll contact you within 24 hours!</span>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {claimFormError && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-800 font-medium">{claimFormError}</span>
                      </div>
                    </div>
                  )}

                  <form 
                    name="website-mockup" 
                    method="POST" 
                    data-netlify="true" 
                    className="space-y-4" 
                    onSubmit={handleClaimFormSubmit}
                  >
                    <input type="hidden" name="form-name" value="website-mockup" />
                    <input type="hidden" name="source" value="hero-section" />
                    <input type="hidden" name="campaign" value="plumber-email-campaign" />
                    
                    <input 
                      type="text" 
                      name="business-name"
                      placeholder="Business Name"
                      defaultValue={params.business !== 'Hendrio' ? params.business : ''}
                      autoComplete="organization"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          const inputs = Array.from(form?.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]') || []);
                          const currentIndex = inputs.indexOf(e.currentTarget);
                          const nextInput = inputs[currentIndex + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                      required
                    />
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name"
                      defaultValue={params.owner !== 'Admin' ? params.owner : ''}
                      autoComplete="name"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          const inputs = Array.from(form?.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]') || []);
                          const currentIndex = inputs.indexOf(e.currentTarget);
                          const nextInput = inputs[currentIndex + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                      required
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address"
                      autoComplete="email"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          const inputs = Array.from(form?.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]') || []);
                          const currentIndex = inputs.indexOf(e.currentTarget);
                          const nextInput = inputs[currentIndex + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                        }
                      }}
                      required
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number"
                      defaultValue={params.phone !== '123-456-7890' ? params.phone : ''}
                      autoComplete="tel"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          const inputs = Array.from(form?.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]') || []);
                          const currentIndex = inputs.indexOf(e.currentTarget);
                          const nextInput = inputs[currentIndex + 1] as HTMLInputElement;
                          if (nextInput) nextInput.focus();
                          else {
                            const submitButton = form?.querySelector('button[type="submit"]') as HTMLButtonElement;
                            if (submitButton) submitButton.focus();
                          }
                        }
                      }}
                      required
                    />
                    <input 
                      type="text" 
                      name="location"
                      placeholder="City/Area You Serve"
                      defaultValue={params.location !== 'Your City' ? params.location : ''}
                      autoComplete="address-level2"
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 font-medium"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          const form = e.currentTarget.form;
                          const submitButton = form?.querySelector('button[type="submit"]') as HTMLButtonElement;
                          if (submitButton) submitButton.click();
                        }
                      }}
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isSubmittingClaim}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 text-lg shadow-lg"
                    >
                      {isSubmittingClaim ? '⏳ Submitting...' : '🚀 CLAIM MY CUSTOM WEBSITE'}
                    </button>
                  </form>
                  <div className="text-center mt-4 space-y-2">
                    <p className="text-xs opacity-80">
                      ✅ 100% Custom Code • ✅ 2-Week Delivery • ✅ 100% Client Satisfaction
                    </p>
                    <p className="text-xs opacity-60">
                      Custom quote based on your needs • Call: <span className="font-bold">(817) 873-6655</span>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-lg mb-4">
                  Questions? Call us directly: <a href="tel:+18178736655" className="text-orange-400 font-bold">(817) 873-6655</a>
                </p>
                <p className="text-sm opacity-75">
                  Forte Web Designs - Custom websites for plumbing contractors (No templates, No AI, No page builders)
                </p>
              </div>

              {/* Professional Plumbing Footer */}
              <div className="mt-20 pt-16 border-t border-white/20">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                  {/* Company Info */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-orange-400 mb-4">{params.business}</h3>
                    <p className="text-sm opacity-80 mb-4">
                      Your trusted local plumbing experts serving {params.location} and surrounding areas. 
                      Professional, reliable, and available 24/7 for emergency repairs.
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Our Services */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Emergency Plumbing</a></li>
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Drain Cleaning</a></li>
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Water Heater Repair</a></li>
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Pipe Installation</a></li>
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Bathroom Plumbing</a></li>
                      <li><a href="#services" className="hover:text-orange-400 transition-colors">Kitchen Plumbing</a></li>
                    </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                    <div className="space-y-3 text-sm opacity-80">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                        <a href={`tel:${params.phone}`} className="hover:text-orange-400 transition-colors">{params.phone}</a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        <span>info@{params.business.toLowerCase().replace(/\s+/g, '')}.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span>Serving {params.location} & Surrounding Areas</span>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                    <div className="space-y-2 text-sm opacity-80">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>8:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Emergency Only</span>
                      </div>
                      <div className="mt-3 p-2 bg-red-500/20 rounded border border-red-500/30">
                        <div className="text-red-300 font-semibold text-xs">
                          🚨 24/7 Emergency Service Available
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="pt-6 border-t border-white/10 text-center">
                  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm opacity-60">
                      © 2024 {params.business}. All rights reserved. Licensed & Insured Plumbing Contractor.
                    </div>
                    <div className="flex space-x-6 text-sm opacity-60">
                      <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
                      <a href="#" className="hover:text-orange-400 transition-colors">License #PLB123456</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services Section - Updated titles */}
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
                  alt="Kitchen Plumbing Services" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Kitchen Plumbing</h3>
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                    </svg>
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Sink & Faucet Repair
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Garbage Disposal Service
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Dishwasher Installation
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Bathroom Plumbing Services" 
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
                    Toilet Repair & Installation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Shower & Tub Service
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Leak Detection & Repair
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border overflow-hidden">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Emergency Plumbing Services" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l1.09 2.26L16 5.18l-1.64 1.63L15 10l-3-1.5L9 10l.64-3.19L8 5.18l2.91-.92L12 2z"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">Emergency Service</h3>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                  </div>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    24/7 Emergency Response
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Burst Pipe Repair
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Water Heater Service
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Demo Disclaimer */}
      {params.business !== 'Hendrio' && (
        <section className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  This is Your Custom Website Preview
                </h3>
                
                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                    <div className="text-xs font-medium text-gray-700">Custom Code</div>
                  </div>
                  <div className="text-center bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                    <div className="text-xs font-medium text-gray-700">USA Based</div>
                  </div>
                  <div className="text-center bg-orange-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                    <div className="text-xs font-medium text-gray-700">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">✅ What We Can Customize:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Your business name and branding</li>
                      <li>• Service descriptions and pricing</li>
                      <li>• Photos of your team and work</li>
                      <li>• Service areas and contact info</li>
                      <li>• Colors, fonts, and layout</li>
                      <li>• Content and messaging</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">🎯 What You Get:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Professional custom design</li>
                      <li>• Mobile-responsive website</li>
                      <li>• Search engine optimization</li>
                      <li>• Lead capture forms</li>
                      <li>• Google integration</li>
                      <li>• Ongoing support</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="text-sm text-orange-800">
                    <strong>This demo shows sample content for "{params.business}"</strong> - 
                    Your actual website will be completely customized with your real business information, 
                    photos, services, and branding. Nothing is set in stone!
                  </p>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={() => setShowPopup(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    💬 Let's Discuss Your Custom Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Sticky CTA - Compact */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-2 shadow-lg z-30 lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-xs font-medium leading-tight">Ready to claim your website?</p>
          </div>
          <div className="flex items-center">
            <button 
              onClick={() => setShowPopup(true)}
              className="bg-white text-orange-600 font-bold py-1 px-2 rounded text-xs whitespace-nowrap"
              aria-label="Open contact form popup"
            >
              💰 Claim
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal - Mobile & Desktop Optimized */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4 lg:p-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl lg:rounded-2xl max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl w-full max-h-[90vh] lg:max-h-[90vh] overflow-hidden relative shadow-2xl">
            
            {/* Orange Header Section - Extended to Top */}
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white relative rounded-t-xl lg:rounded-t-2xl">
              {/* Sticky Close Button - Now on Orange Background */}
              <button 
                onClick={() => {
                  setShowPopup(false);
                  setShowClaimSuccess(false);
                  setClaimFormError(null);
                }}
                className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-white/20 hover:bg-white/30 text-white hover:text-white w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-lg lg:text-xl font-bold z-20 transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              
              {/* Header Content */}
              <div className="text-center p-4 lg:p-6 pt-6 lg:pt-8">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg lg:text-2xl font-bold mb-3">Claim Your Custom Website!</h3>
                <div className="flex flex-wrap justify-center gap-1.5 lg:gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full">
                    100% Custom Code
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full">
                    USA Based Team
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-0.5 lg:px-2.5 lg:py-1 rounded-full">
                    2-Week Launch
                  </span>
                </div>
                <p className="opacity-90 text-sm lg:text-base">Get a website that will dominate your local plumbing market!</p>
              </div>
            </div>
            
            <div className="p-5 lg:p-8 overflow-y-auto max-h-[calc(90vh-140px)] lg:max-h-[calc(90vh-160px)]">
              
              {/* Success Message in Popup */}
              {showClaimSuccess && (
                <div className="mb-4 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-800 font-medium">🎉 Success! Your request has been submitted. We'll contact you within 24 hours!</span>
                  </div>
                </div>
              )}

              {/* Error Message in Popup */}
              {claimFormError && (
                <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-800 font-medium">{claimFormError}</span>
                  </div>
                </div>
              )}

              {!showClaimSuccess && (
                <form name="website-mockup" method="POST" data-netlify="true" className="space-y-5 lg:space-y-6" onSubmit={handlePopupFormSubmit}>
                  <input type="hidden" name="form-name" value="website-mockup" />
                  <input type="hidden" name="source" value="popup-mockup-request" />
                  <input type="hidden" name="campaign" value="plumber-email-campaign" />
                  
                  {/* Responsive layout: single column on mobile, two columns on desktop */}
                  <div className="space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6">
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Business Name</label>
                      <input 
                        type="text" 
                        name="business-name"
                        placeholder="e.g., Smith Plumbing Services" 
                        defaultValue={params.business !== 'Hendrio' ? params.business : ''}
                        className="w-full p-4 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        placeholder="Your full name" 
                        defaultValue={params.owner !== 'Admin' ? params.owner : ''}
                        className="w-full p-4 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="your@email.com" 
                        className="w-full p-4 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium text-base"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        placeholder="(555) 123-4567" 
                        defaultValue={params.phone !== '123-456-7890' ? params.phone : ''}
                        className="w-full p-4 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium text-base"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-2">City/Area You Serve</label>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Dallas, TX" 
                      defaultValue={params.location !== 'Your City' ? params.location : ''}
                      className="w-full p-4 lg:p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 font-medium text-base"
                      required
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmittingClaim}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 lg:py-5 px-6 rounded-lg transition-all duration-300 text-lg lg:text-xl"
                  >
                    {isSubmittingClaim ? '⏳ Submitting...' : '🚀 CLAIM MY CUSTOM WEBSITE'}
                  </button>
                </form>
              )}
              
              <div className="text-center mt-6 lg:mt-8 space-y-3">
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                  ✅ 100% Custom Code • ✅ 2-Week Delivery • ✅ 100% USA Based
                </p>
                <p className="text-sm lg:text-base font-semibold text-gray-700 dark:text-gray-300">
                  📞 Questions? Call: <a href="tel:+18178736655" className="text-orange-500 dark:text-orange-400">(817) 873-6655</a>
                </p>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                  Forte Web Designs - Professional websites for plumbing contractors
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
