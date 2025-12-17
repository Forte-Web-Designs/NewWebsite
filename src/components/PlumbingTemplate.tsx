'use client';

import { useState, useEffect } from 'react';
import { CityData } from '../lib/cityDatabase';

interface PlumbingTemplateProps {
  cityData: CityData;
}

export default function PlumbingTemplate({ cityData }: PlumbingTemplateProps) {
  const [currentTheme, setCurrentTheme] = useState('blue');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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
    }
  };

  const theme = colorThemes[currentTheme as keyof typeof colorThemes];

  useEffect(() => {
    // Set page title
    document.title = `Professional Plumbing Services in ${cityData.name}, ${cityData.state} | Forte Web Designs`;
    
    // Prevent body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen, cityData]);

  const handlePhoneCall = () => {
    window.location.href = `tel:${cityData.phoneNumber}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`${theme.primary} ${theme.bgGradient} sticky top-0 z-50 shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className={`${theme.primaryText} text-2xl font-bold`}>
                🔧 Forte Plumbing
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-200 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Phone Number */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="text-white">{cityData.phoneNumber}</span>
              <button
                onClick={handlePhoneCall}
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-6 py-2 rounded-lg font-semibold transition-colors`}
              >
                Call Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 bg-opacity-95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-white hover:text-gray-200 w-full text-left"
              >
                Contact
              </button>
              <button
                onClick={handlePhoneCall}
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-3 py-2 rounded-lg font-semibold w-full text-left`}
              >
                {cityData.phoneNumber}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className={`${theme.gradient} bg-gradient-to-r text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {cityData.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {cityData.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePhoneCall}
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors`}
              >
                Call {cityData.phoneNumber}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Plumbing Services in {cityData.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Serving {cityData.serviceArea} with reliable, professional plumbing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emergency Repairs", icon: "🚨", description: "24/7 emergency plumbing services for urgent repairs and emergencies." },
              { title: "Drain Cleaning", icon: "🌊", description: "Professional drain cleaning and unclogging services using advanced equipment." },
              { title: "Water Heater Service", icon: "🔥", description: "Water heater installation, repair, and maintenance for all types and brands." },
              { title: "Pipe Repair", icon: "🔧", description: "Expert pipe repair and replacement for leaks, breaks, and aging systems." },
              { title: "Bathroom Plumbing", icon: "🛁", description: "Complete bathroom plumbing services including fixtures and renovations." },
              { title: "Kitchen Plumbing", icon: "🍽️", description: "Kitchen sink, garbage disposal, and appliance installation and repair." }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us for Your {cityData.name} Plumbing Needs?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {cityData.aboutText}
              </p>
              <div className="space-y-4">
                {cityData.serviceBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`${theme.secondaryText} text-xl mr-3 mt-1`}>✓</div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">Primary Service Area:</h4>
                  <p className="text-gray-600">{cityData.serviceArea}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Neighborhoods:</h4>
                  <p className="text-gray-600">{cityData.neighborhoods.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">ZIP Codes:</h4>
                  <p className="text-gray-600">{cityData.zipCodes.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 ${theme.gradient} bg-gradient-to-r text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Fix Your Plumbing Issues?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for fast, reliable plumbing services in {cityData.name} and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePhoneCall}
                className={`${theme.secondary} ${theme.secondaryHover} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors`}
              >
                Call {cityData.phoneNumber}
              </button>
              <button
                className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Service Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">🔧 Forte Plumbing</h3>
              <p className="text-gray-400">
                Professional plumbing services in {cityData.name}, {cityData.state}. 
                Licensed, insured, and trusted by {cityData.population} residents.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="text-gray-400 space-y-2">
                {cityData.neighborhoods.slice(0, 4).map((neighborhood, index) => (
                  <li key={index}>{neighborhood}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>📞 {cityData.phoneNumber}</p>
                <p>📍 Serving {cityData.serviceArea}</p>
                <p>🕒 24/7 Emergency Service</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Forte Plumbing Services. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
