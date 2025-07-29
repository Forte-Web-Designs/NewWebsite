'use client';

import { useEffect, useState, Suspense } from 'react';
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
    // Create a dynamic HTML template with the business details
    const createCustomTemplate = () => {
      const templateContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${businessDetails.businessName} - Professional Landscaping Services</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
        }
        
        /* Header Styles */
        .header {
            background: linear-gradient(135deg, #2d5a27 0%, #4a7c59 100%);
            color: white;
            padding: 1rem 0;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #a8d5a3;
            text-decoration: none;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-menu a:hover {
            color: #a8d5a3;
        }
        
        .cta-button {
            background: #a8d5a3;
            color: #2d5a27;
            padding: 0.75rem 1.5rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
        }
        
        .cta-button:hover {
            background: white;
            transform: translateY(-2px);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(45, 90, 39, 0.8), rgba(45, 90, 39, 0.8)), 
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23228B22" width="1200" height="800"/><circle fill="%2332CD32" cx="200" cy="200" r="50" opacity="0.3"/><circle fill="%2332CD32" cx="800" cy="300" r="30" opacity="0.2"/><circle fill="%2332CD32" cx="1000" cy="600" r="40" opacity="0.3"/></svg>');
            background-size: cover;
            background-position: center;
            height: 100vh;
            display: flex;
            align-items: center;
            text-align: center;
            color: white;
            margin-top: 80px;
        }
        
        .hero-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn-primary {
            background: #a8d5a3;
            color: #2d5a27;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            display: inline-block;
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s;
            display: inline-block;
        }
        
        .btn-primary:hover {
            background: white;
            transform: translateY(-2px);
        }
        
        .btn-secondary:hover {
            background: white;
            color: #2d5a27;
        }
        
        /* About Section */
        .about {
            padding: 5rem 0;
            background: white;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }
        
        .about-content h2 {
            font-size: 2.5rem;
            color: #2d5a27;
            margin-bottom: 1rem;
        }
        
        .about-content p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #666;
        }
        
        .features {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .feature {
            padding: 1.5rem;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #2d5a27;
        }
        
        .feature h3 {
            color: #2d5a27;
            margin-bottom: 0.5rem;
        }
        
        .about-image {
            text-align: center;
        }
        
        .about-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        /* Services Section */
        .services {
            padding: 5rem 0;
            background: #f8f9fa;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: #2d5a27;
            margin-bottom: 3rem;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        
        .service-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        
        .service-card:hover {
            transform: translateY(-5px);
        }
        
        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .service-card h3 {
            color: #2d5a27;
            margin-bottom: 1rem;
        }
        
        /* Contact Section */
        .contact {
            padding: 5rem 0;
            background: white;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }
        
        .contact-info h3 {
            color: #2d5a27;
            margin-bottom: 2rem;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        
        .contact-icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            color: #2d5a27;
        }
        
        .contact-form {
            background: #f8f9fa;
            padding: 2rem;
            border-radius: 10px;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #2d5a27;
            font-weight: bold;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            resize: vertical;
            height: 120px;
        }
        
        .submit-btn {
            background: #2d5a27;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s;
            width: 100%;
        }
        
        .submit-btn:hover {
            background: #1e3d1b;
        }
        
        /* Footer */
        .footer {
            background: #2d5a27;
            color: white;
            padding: 3rem 0 1rem;
            text-align: center;
        }
        
        .footer-content {
            margin-bottom: 2rem;
        }
        
        .footer h4 {
            color: #a8d5a3;
            margin-bottom: 1rem;
        }
        
        .footer-bottom {
            border-top: 1px solid #4a7c59;
            padding-top: 1rem;
            opacity: 0.8;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .about-grid,
            .contact-grid {
                grid-template-columns: 1fr;
            }
            
            .features {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>

<body>
    <!-- Header -->
    <header class="header">
        <div class="nav-container">
            <a href="#" class="logo">${businessDetails.businessName}</a>
            <nav>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a href="#contact" class="cta-button">Get Quote</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Transform Your Outdoor Space</h1>
            <p>Professional landscaping services that bring your vision to life. Creating beautiful, sustainable outdoor environments ${businessDetails.city ? 'throughout ' + businessDetails.city : 'in your area'}.</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">Get Free Quote</a>
                <a href="#services" class="btn-secondary">Our Services</a>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <h2>About ${businessDetails.businessName}</h2>
                    <p>With years of experience in landscape design and maintenance, we specialize in creating outdoor spaces that enhance your property's beauty and value. Our team is dedicated to delivering exceptional results that exceed your expectations.</p>
                    <p>Located ${businessDetails.city ? 'in ' + businessDetails.city : 'locally'}, we serve residential and commercial clients with personalized landscaping solutions tailored to your unique needs and budget.</p>
                    
                    <div class="features">
                        <div class="feature">
                            <h3>🌱 Expert Design</h3>
                            <p>Custom landscape designs that complement your property</p>
                        </div>
                        <div class="feature">
                            <h3>🏆 Quality Work</h3>
                            <p>Professional installation and meticulous attention to detail</p>
                        </div>
                        <div class="feature">
                            <h3>🛡️ Licensed & Insured</h3>
                            <p>Fully licensed professionals with comprehensive coverage</p>
                        </div>
                        <div class="feature">
                            <h3>💚 Sustainable Practices</h3>
                            <p>Eco-friendly solutions for long-term environmental health</p>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <div style="width: 400px; height: 300px; background: linear-gradient(45deg, #2d5a27, #4a7c59); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem; margin: 0 auto;">
                        Beautiful Landscape Photo
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Our Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🌿</div>
                    <h3>Landscape Design</h3>
                    <p>Custom landscape designs that transform your outdoor space into a beautiful, functional environment.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌱</div>
                    <h3>Garden Installation</h3>
                    <p>Professional planting services including trees, shrubs, flowers, and garden bed creation.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">✂️</div>
                    <h3>Lawn Maintenance</h3>
                    <p>Regular lawn care services including mowing, trimming, fertilization, and seasonal cleanup.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏗️</div>
                    <h3>Hardscaping</h3>
                    <p>Patios, walkways, retaining walls, and other stone or concrete landscape features.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💧</div>
                    <h3>Irrigation Systems</h3>
                    <p>Efficient watering systems designed to keep your landscape healthy while conserving water.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🌳</div>
                    <h3>Tree Services</h3>
                    <p>Tree planting, pruning, removal, and ongoing tree health maintenance programs.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get Your Free Quote</h2>
            <div class="contact-grid">
                <div class="contact-info">
                    <h3>Contact ${businessDetails.businessName}</h3>
                    
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <div>
                            <strong>Address:</strong><br>
                            ${businessDetails.address}<br>
                            ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">📞</span>
                        <div>
                            <strong>Phone:</strong><br>
                            <a href="tel:${businessDetails.phone}" style="color: #2d5a27; text-decoration: none;">${businessDetails.phone}</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">✉️</span>
                        <div>
                            <strong>Email:</strong><br>
                            <a href="mailto:${businessDetails.email}" style="color: #2d5a27; text-decoration: none;">${businessDetails.email}</a>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <span class="contact-icon">👤</span>
                        <div>
                            <strong>Owner:</strong><br>
                            ${businessDetails.ownerName}
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h3>Request Your Free Quote</h3>
                    <form onsubmit="handleFormSubmit(event)">
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        <div class="form-group">
                            <label for="service">Service Needed</label>
                            <select id="service" name="service">
                                <option value="">Select a service</option>
                                <option value="landscape-design">Landscape Design</option>
                                <option value="garden-installation">Garden Installation</option>
                                <option value="lawn-maintenance">Lawn Maintenance</option>
                                <option value="hardscaping">Hardscaping</option>
                                <option value="irrigation">Irrigation Systems</option>
                                <option value="tree-services">Tree Services</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">Project Details</label>
                            <textarea id="message" name="message" placeholder="Tell us about your landscaping project..."></textarea>
                        </div>
                        <button type="submit" class="submit-btn">Send Quote Request</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <h4>${businessDetails.businessName}</h4>
                <p>Professional Landscaping Services</p>
                <p>${businessDetails.address}, ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}</p>
                <p>
                    Phone: <a href="tel:${businessDetails.phone}" style="color: #a8d5a3;">${businessDetails.phone}</a> | 
                    Email: <a href="mailto:${businessDetails.email}" style="color: #a8d5a3;">${businessDetails.email}</a>
                </p>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ${businessDetails.businessName}. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Contact form submission
        function handleFormSubmit(e) {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo website for ${businessDetails.businessName}. In the actual website, this form would submit your quote request directly to ${businessDetails.ownerName}.');
        }
        
        // Simple mobile menu toggle (for responsive design)
        function toggleMobileMenu() {
            const menu = document.querySelector('.nav-menu');
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
    </script>
</body>
</html>`;
    <script src="/landscaping-template/rev-slider/js/jquery.themepunch.tools.min.js"></script>
    <script src="/landscaping-template/rev-slider/js/jquery.themepunch.revolution.min.js"></script>
    <script src="/landscaping-template/javascript/rev-slider.js"></script>
    
    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Contact form submission
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo. In the real website, this form would submit your quote request to ${businessDetails.businessName}.');
        });
    </script>
</body>
</html>`;

      return templateContent;
    };

    // Create and inject the template with a slight delay to ensure iframe is ready
    setTimeout(() => {
      const iframe = document.getElementById('customTemplate') as HTMLIFrameElement;
      if (iframe) {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(createCustomTemplate());
          doc.close();
        }
      }
    }, 100);
  }, [businessDetails]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Demo: {businessDetails.businessName} - Custom Website
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

      {/* Template Display */}
      <iframe
        id="customTemplate"
        className="w-full"
        style={{ height: 'calc(100vh - 80px)' }}
        frameBorder="0"
        title={`${businessDetails.businessName} Demo Website`}
      />
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
