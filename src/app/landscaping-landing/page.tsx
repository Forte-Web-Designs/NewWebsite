"use client";

import { useEffect } from 'react';
import './styles.css';

export default function LandscapingLandingPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Gettree - Garden & Landscaping';
    
    // Simple preloader removal - no complex scripts
    setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        (preloader as HTMLElement).style.display = 'none';
      }
    }, 1000);
  }, []);

  // Simple, clean template without complex animations
  return (
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
                <span className="top-location">📍 2072 Pinnickinick Street, WA 98370</span>
                <span className="top-mail">✉️ info@website.com</span>
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
                  <a href="#" title="Gettree">
                    <img src="/landscaping-template/icon/logo-dark.png" alt="Gettree Logo" />
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
                      <a href="#" title="About">About</a>
                    </li>
                    <li>
                      <a href="#" title="Services">Services</a>
                    </li>
                    <li>
                      <a href="#" title="Portfolio">Portfolio</a>
                    </li>
                    <li>
                      <a href="#" title="Blog">Blog</a>
                    </li>
                    <li>
                      <a href="#" title="Contact">Contact</a>
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
                  <a href="#" className="btn-primary">Get A Quote</a>
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
                Gardening Service
              </h1>
              <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor,<br />
                congue justo at, lobortis nisl. Cras eget urna ex.
              </p>
              <div className="hero-actions">
                <a href="#" className="btn-hero">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">
                <span className="icon">🌿</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Garden Care</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <span className="icon">🌺</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Planting</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at.</p>
              </div>
            </div>

            <div className="service-item">
              <div className="service-icon">
                <span className="icon">🌱</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">
                  <a href="#">Lawn Care</a>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">About Our Company</h2>
                <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, 
                lobortis nisl. Cras eget urna ex. Nulla facilisi. Donec mattis risus quis orci egestas.
              </p>
              
              <div className="about-features">
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  Professional gardening services
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  Experienced team members
                </div>
                <div className="feature-item">
                  <span className="check-icon">✓</span>
                  Quality guaranteed work
                </div>
              </div>
              
              <a href="#" className="btn-secondary">Learn More</a>
            </div>
            
            <div className="about-image">
              <img src="/landscaping-template/images/about-1.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/landscaping-template/icon/logo-light.png" alt="Gettree Logo" />
            </div>
            <p className="copyright">© 2024 Gettree. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
