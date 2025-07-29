'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface BusinessDetails {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  industry: string;
}

function CustomPlumbingPageContent() {
  const searchParams = useSearchParams();
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    businessName: 'Forte Plumbing',
    ownerName: 'Business Owner',
    phone: '(555) 123-4567',
    email: 'info@business.com',
    address: '1247 W Madison St',
    city: 'Chicago',
    state: 'IL',
    zip: '60607',
    industry: 'plumbing'
  });

  // Extract business details from URL parameters
  useEffect(() => {
    const urlData: Partial<BusinessDetails> = {};
    
    searchParams.forEach((value, key) => {
      if (key in businessDetails) {
        (urlData as any)[key] = value;
      }
    });

    if (Object.keys(urlData).length > 0) {
      setBusinessDetails(prev => ({ ...prev, ...urlData }));
    }
  }, [searchParams]);

  // Convert business details to the params format expected by the plumbing landing page
  const params = {
    business: businessDetails.businessName || 'Forte Plumbing',
    owner: businessDetails.ownerName || 'Business Owner',
    location: businessDetails.city || 'Chicago',
    phone: businessDetails.phone || '(555) 123-4567',
    email: businessDetails.email || 'info@business.com',
    theme: 'blue',
    utm_source: 'custom-demo',
    utm_medium: 'demo-page',
    utm_campaign: 'plumbing-custom'
  };

  // Generate clean email addresses
  const generateEmail = (businessName: string) => {
    if (!businessName || businessName === 'Forte Plumbing') {
      return 'info@forteplumbing.com';
    }
    
    let cleanName = businessName.toLowerCase().replace(/\s+/g, '');
    
    cleanName = cleanName
      .replace(/plumbing/g, '')
      .replace(/services?/g, '')
      .replace(/solutions?/g, '')
      .replace(/company?/g, '')
      .replace(/co$/g, '')
      .replace(/inc$/g, '')
      .replace(/llc$/g, '');
    
    if (cleanName.length < 2) {
      cleanName = 'plumbingpro';
    }
    
    return `info@${cleanName}plumbing.com`;
  };

  // Use generated email if not provided
  if (!businessDetails.email || businessDetails.email === 'info@business.com') {
    params.email = generateEmail(params.business);
  }

  // State management (copied from plumbing landing page)
  const [isLoaded, setIsLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Color themes (copied from plumbing landing page)
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

  const currentTheme = colorThemes.blue;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Demo Header */}
      <div className="bg-blue-600 text-white p-4 relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Demo: {params.business} - Custom Website
          </h1>
          <div className="flex space-x-4">
            <a
              href="/demo/custom"
              className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded transition-colors"
            >
              Edit Demo
            </a>
            <a
              href="/demo"
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded transition-colors"
            >
              Back to Demos
            </a>
          </div>
        </div>
      </div>

      {/* EXACT COPY OF PLUMBING LANDING PAGE CONTENT STARTS HERE */}
      <div className={`min-h-screen ${currentTheme.bgGradient}`}>
        {/* Header */}
        <header className={`${currentTheme.primary} text-white shadow-lg sticky top-0 z-40 transition-all duration-300`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <svg className={`w-6 h-6 ${currentTheme.primaryText}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold">{params.business}</h1>
                  <p className="text-sm opacity-90">Professional Plumbing Services</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <nav className="flex space-x-6">
                  <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
                  <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
                  <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
                </nav>
                <a href={`tel:${params.phone}`} className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  {params.phone}
                </a>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4">
                <nav className="flex flex-col space-y-2">
                  <a href="#services" className="hover:text-blue-200 transition-colors py-2">Services</a>
                  <a href="#about" className="hover:text-blue-200 transition-colors py-2">About</a>
                  <a href="#contact" className="hover:text-blue-200 transition-colors py-2">Contact</a>
                  <a href={`tel:${params.phone}`} className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center mt-2">
                    {params.phone}
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Hero Section */}
        <section className={`py-20 ${currentTheme.primary} text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  {params.location}'s Most Trusted Plumbing Experts
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  24/7 emergency service, licensed professionals, and guaranteed satisfaction. 
                  {params.business} has been serving {params.location} with reliable plumbing solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className={`${currentTheme.secondary} ${currentTheme.secondaryHover} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center`}>
                    Get Free Estimate
                  </a>
                  <a href={`tel:${params.phone}`} className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block text-center">
                    Call Now: {params.phone}
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Emergency? We're Here 24/7</h3>
                  <div className="space-y-4">
                    {[
                      'Licensed & Insured',
                      'Same-Day Service',
                      'Upfront Pricing',
                      '100% Satisfaction Guarantee'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className={`w-full ${currentTheme.secondary} ${currentTheme.secondaryHover} text-white py-3 px-6 rounded-lg font-semibold mt-6 inline-block text-center transition-colors`}>
                    Schedule Service Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Plumbing Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From emergency repairs to complete installations, {params.business} provides comprehensive plumbing solutions for {params.location} residents and businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency Repairs",
                  description: "24/7 emergency plumbing repairs for burst pipes, leaks, and clogs",
                  icon: "🚨"
                },
                {
                  title: "Drain Cleaning",
                  description: "Professional drain cleaning and sewer line maintenance",
                  icon: "🚿"
                },
                {
                  title: "Water Heater Service",
                  description: "Installation, repair, and maintenance of all water heater types",
                  icon: "🔥"
                },
                {
                  title: "Pipe Installation",
                  description: "New pipe installation and pipe replacement services",
                  icon: "🔧"
                },
                {
                  title: "Bathroom Remodeling",
                  description: "Complete bathroom renovation and fixture installation",
                  icon: "🛁"
                },
                {
                  title: "Commercial Plumbing",
                  description: "Comprehensive plumbing services for businesses and facilities",
                  icon: "🏢"
                }
              ].map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-20 ${currentTheme.bgGradient}`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose {params.business}?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  {params.owner} and the team at {params.business} have been providing reliable plumbing services to {params.location} for years. We understand the unique challenges of local plumbing systems and are committed to delivering exceptional results.
                </p>
                <div className="space-y-4">
                  {[
                    'Licensed & Fully Insured',
                    '24/7 Emergency Service',
                    '100% Satisfaction Guarantee',
                    'Upfront Pricing - No Hidden Fees',
                    'Local Family-Owned Business',
                    'Modern Equipment & Techniques'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className={`${currentTheme.primary} text-white p-8 rounded-2xl`}>
                  <h3 className="text-2xl font-bold mb-4">Get Your Free Estimate</h3>
                  <p className="text-blue-100 mb-6">Contact us today for a free, no-obligation estimate on your plumbing project.</p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-200">📞</span>
                      <a href={`tel:${params.phone}`} className="hover:text-blue-200">{params.phone}</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-200">✉️</span>
                      <a href={`mailto:${params.email}`} className="hover:text-blue-200">{params.email}</a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-200">📍</span>
                      <span>Serving {params.location} & Surrounding Areas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-200">👤</span>
                      <span>Owner: {params.owner}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600">Contact {params.business} today for reliable plumbing services in {params.location}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <a href={`tel:${params.phone}`} className="text-blue-600 hover:text-blue-800">{params.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a href={`mailto:${params.email}`} className="text-blue-600 hover:text-blue-800">{params.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Service Area</h4>
                      <p className="text-gray-600">{params.location} & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Owner</h4>
                      <p className="text-gray-600">{params.owner}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Service</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you for your interest! This is a demo website for ${params.business}. In the actual website, this form would submit your service request directly to ${params.owner}.`);
                }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Emergency Repair</option>
                      <option>Drain Cleaning</option>
                      <option>Water Heater</option>
                      <option>Pipe Installation</option>
                      <option>Bathroom Remodel</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Describe your plumbing needs..."></textarea>
                  </div>
                  <button type="submit" className={`w-full ${currentTheme.primary} hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors`}>
                    Request Service
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`${currentTheme.primary} text-white py-12`}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">{params.business}</h3>
                <p className="text-blue-200 mb-4">Your trusted plumbing professionals in {params.location}</p>
                <p className="text-blue-200">Licensed & Insured • 24/7 Emergency Service</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-blue-200">
                  <p>Phone: <a href={`tel:${params.phone}`} className="hover:text-white">{params.phone}</a></p>
                  <p>Email: <a href={`mailto:${params.email}`} className="hover:text-white">{params.email}</a></p>
                  <p>Owner: {params.owner}</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <div className="space-y-2 text-blue-200">
                  <p>Emergency Repairs</p>
                  <p>Drain Cleaning</p>
                  <p>Water Heater Service</p>
                  <p>Pipe Installation</p>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-700 mt-8 pt-8 text-center">
              <p className="text-blue-200">&copy; 2025 {params.business}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function CustomPlumbingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomPlumbingPageContent />
    </Suspense>
  );
}
