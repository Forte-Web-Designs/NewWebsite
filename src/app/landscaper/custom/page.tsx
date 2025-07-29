'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import './styles.css';

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

function CustomLandscapingPageContent() {
  const searchParams = useSearchParams();
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    businessName: 'Forte Landscaping',
    ownerName: 'Business Owner',
    phone: '(555) 123-4567',
    email: 'info@business.com',
    address: '1247 W Madison St',
    city: 'Chicago',
    state: 'IL',
    zip: '60607',
    industry: 'landscaping'
  });

  useEffect(() => {
    // Load business details from URL parameters
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

  useEffect(() => {
    // Set page title with custom business name
    document.title = `${businessDetails.businessName} - Garden & Landscaping`;
    
    // Simple preloader removal - no complex scripts
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        (preloader as HTMLElement).style.display = 'none';
      }
    }, 1000);
  }, [businessDetails.businessName]);

  return (
    <div className="min-h-screen">
      {/* Demo Header */}
      <div className="bg-green-600 text-white p-4 relative z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Demo: {businessDetails.businessName} - Custom Website
          </h1>
          <div className="flex space-x-4">
            <a
              href="/demo/custom"
              className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded transition-colors"
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

      {/* EXACT COPY OF LANDSCAPING LANDING PAGE CONTENT WITH CUSTOM BUSINESS DETAILS */}
      <div className="gettree-template-container">
        {/* Preloader */}
        <div className="preloader">
          <div className="loading-spinner"></div>
        </div>

        {/* Header */}
        <div className="flat-header-box">
          <div className="container">
            <div className="top-header">
              <div className="top-header-inner">
                <div className="top-bar-left">
                  <span className="top-location">📍 {businessDetails.address}, {businessDetails.city}, {businessDetails.state} {businessDetails.zip}</span>
                  <span className="top-mail">✉️ {businessDetails.email}</span>
                </div>
                <div className="top-bar-right">
                  <div className="social-links">
                    <a href="#" aria-label="Facebook">📘</a>
                    <a href="#" aria-label="Twitter">🐦</a>
                    <a href="#" aria-label="Google Plus">🔴</a>
                    <a href="#" aria-label="Instagram">📸</a>
                  </div>
                </div>
              </div>
            </div>

            <header className="header">
              <div className="header-wrap">
                <div className="logo-section">
                  <div className="logo-header">
                    <a href="#" title={businessDetails.businessName}>
                      <span className="text-2xl font-bold text-green-600">{businessDetails.businessName}</span>
                    </a>
                  </div>
                </div>

                <div className="nav-section">
                  <nav className="main-nav">
                    <ul className="menu">
                      <li className="current-menu-item">
                        <a href="#" title="Home">Home</a>
                      </li>
                      <li>
                        <a href="#about" title="About">About</a>
                      </li>
                      <li>
                        <a href="#services" title="Services">Services</a>
                      </li>
                      <li>
                        <a href="#portfolio" title="Portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="#contact" title="Contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-actions">
                  <div className="search-btn">
                    <a href="#" aria-label="Search">🔍</a>
                  </div>
                  <div className="cart-btn">
                    <a href="#" aria-label="Cart">🛒</a>
                  </div>
                  <div className="quote-btn">
                    <a href="#contact" className="btn-primary">Get A Quote</a>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-bg">
            <img src="/landscaping-template/images/slides/slide-1.jpg" alt="Hero Background" />
          </div>
          <div className="hero-content">
            <div className="container">
              <div className="hero-text">
                <h1 className="hero-title">
                  We're Providing Quality<br />
                  Landscaping Service in {businessDetails.city}
                </h1>
                <p className="hero-description">
                  {businessDetails.businessName} offers professional landscaping and garden care services.<br />
                  Contact {businessDetails.ownerName} for a free consultation and estimate.
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="btn-hero">Get A Quote</a>
                  <a href={`tel:${businessDetails.phone}`} className="btn-secondary ml-4">Call: {businessDetails.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Our Landscaping Services</h2>
              <p className="section-description">{businessDetails.businessName} provides comprehensive landscaping solutions for {businessDetails.city} area residents and businesses.</p>
            </div>
            
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">🌿</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Garden Care & Maintenance</a>
                  </h3>
                  <p>Professional garden maintenance, pruning, weeding, and seasonal care to keep your landscape beautiful year-round.</p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">🌺</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Landscape Design & Planting</a>
                  </h3>
                  <p>Custom landscape design and professional planting services to transform your outdoor space into a beautiful oasis.</p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">🌱</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Lawn Care & Treatment</a>
                  </h3>
                  <p>Complete lawn care services including mowing, fertilization, aeration, and pest control for a healthy, green lawn.</p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">🌳</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Tree & Shrub Care</a>
                  </h3>
                  <p>Expert tree trimming, pruning, removal, and shrub maintenance to enhance your property's beauty and safety.</p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">🏞️</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Hardscaping & Irrigation</a>
                  </h3>
                  <p>Professional hardscaping installation including patios, walkways, retaining walls, and efficient irrigation systems.</p>
                </div>
              </div>

              <div className="service-item">
                <div className="service-icon">
                  <span className="icon">❄️</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">
                    <a href="#">Seasonal Cleanup</a>
                  </h3>
                  <p>Spring and fall cleanup services including leaf removal, debris cleanup, and seasonal garden preparation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <div className="section-header">
                  <h2 className="section-title">About {businessDetails.businessName}</h2>
                  <p className="section-description">Your trusted landscaping professionals in {businessDetails.city}</p>
                </div>
                
                <p className="about-text">
                  {businessDetails.ownerName} and the team at {businessDetails.businessName} have been providing 
                  exceptional landscaping services to {businessDetails.city} and surrounding areas. We specialize in 
                  creating and maintaining beautiful outdoor spaces that enhance your property's value and curb appeal.
                </p>
                
                <div className="about-features">
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Licensed & Insured Professional Service
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Experienced & Skilled Team Members
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Quality Guaranteed Workmanship
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Eco-Friendly Practices & Materials
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Competitive Pricing & Free Estimates
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    Year-Round Service & Maintenance
                  </div>
                </div>
                
                <a href="#contact" className="btn-secondary">Get Free Estimate</a>
              </div>
              
              <div className="about-image">
                <img src="/landscaping-template/images/about-1.jpg" alt="About Us" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="section-header text-center mb-12">
              <h2 className="section-title">Contact {businessDetails.businessName}</h2>
              <p className="section-description">Ready to transform your outdoor space? Get in touch with us today!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="contact-info">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <a href={`tel:${businessDetails.phone}`} className="text-green-600 hover:text-green-800">{businessDetails.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a href={`mailto:${businessDetails.email}`} className="text-green-600 hover:text-green-800">{businessDetails.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Service Area</h4>
                      <p className="text-gray-600">{businessDetails.city}, {businessDetails.state} & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Owner</h4>
                      <p className="text-gray-600">{businessDetails.ownerName}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Free Estimate</h3>
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you for your interest! This is a demo website for ${businessDetails.businessName}. In the actual website, this form would submit your landscaping request directly to ${businessDetails.ownerName}.`);
                }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option>Garden Care & Maintenance</option>
                      <option>Landscape Design & Planting</option>
                      <option>Lawn Care & Treatment</option>
                      <option>Tree & Shrub Care</option>
                      <option>Hardscaping & Irrigation</option>
                      <option>Seasonal Cleanup</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Describe your landscaping project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Request Free Estimate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-info grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="footer-logo mb-4">
                    <span className="text-2xl font-bold text-white">{businessDetails.businessName}</span>
                  </div>
                  <p className="text-gray-300">Your trusted landscaping professionals in {businessDetails.city}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Phone: <a href={`tel:${businessDetails.phone}`} className="hover:text-white">{businessDetails.phone}</a></p>
                    <p>Email: <a href={`mailto:${businessDetails.email}`} className="hover:text-white">{businessDetails.email}</a></p>
                    <p>Owner: {businessDetails.ownerName}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                  <div className="space-y-2 text-gray-300">
                    <p>Garden Care & Maintenance</p>
                    <p>Landscape Design & Planting</p>
                    <p>Lawn Care & Treatment</p>
                    <p>Tree & Shrub Care</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-600 pt-8">
                <p className="copyright text-center">© 2025 {businessDetails.businessName}. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default function CustomLandscapingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomLandscapingPageContent />
    </Suspense>
  );
}
