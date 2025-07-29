'use client';

import { useEffect, useState } from 'react';
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

export default function CustomPlumbingPage() {
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
    <title>${businessDetails.businessName} - Professional Plumbing Services</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            color: white;
            padding: 1rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .nav {
            display: flex;
            list-style: none;
            gap: 2rem;
        }
        
        .nav a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        
        .nav a:hover {
            opacity: 0.8;
        }
        
        .cta-button {
            background: #ef4444;
            color: white;
            padding: 0.7rem 1.5rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
        }
        
        .cta-button:hover {
            background: #dc2626;
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(30, 64, 175, 0.9), rgba(59, 130, 246, 0.9)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23f3f4f6" width="1200" height="600"/><circle cx="200" cy="150" r="30" fill="%233b82f6" opacity="0.1"/><circle cx="800" cy="300" r="50" fill="%231e40af" opacity="0.1"/><circle cx="1000" cy="100" r="40" fill="%23ef4444" opacity="0.1"/></svg>');
            color: white;
            padding: 150px 0 100px;
            text-align: center;
            background-size: cover;
            background-position: center;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .btn-primary {
            background: #ef4444;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all 0.3s;
            border: 2px solid #ef4444;
        }
        
        .btn-primary:hover {
            background: #dc2626;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(239, 68, 68, 0.4);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all 0.3s;
            border: 2px solid white;
        }
        
        .btn-secondary:hover {
            background: white;
            color: #1e40af;
        }
        
        /* Services Section */
        .services {
            padding: 80px 0;
            background: #f8fafc;
        }
        
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #1e40af;
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
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
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
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #1e40af;
        }
        
        /* About Section */
        .about {
            padding: 80px 0;
            background: white;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .about-text h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #1e40af;
        }
        
        .about-text p {
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            color: #64748b;
        }
        
        .about-features {
            list-style: none;
        }
        
        .about-features li {
            padding: 0.5rem 0;
            display: flex;
            align-items: center;
        }
        
        .about-features li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            margin-right: 1rem;
            font-size: 1.2rem;
        }
        
        .about-image {
            background: linear-gradient(45deg, #3b82f6, #1e40af);
            height: 400px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 4rem;
        }
        
        /* Emergency Section */
        .emergency {
            background: #ef4444;
            color: white;
            padding: 60px 0;
            text-align: center;
        }
        
        .emergency h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .emergency p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        
        .emergency-phone {
            font-size: 2rem;
            font-weight: bold;
            text-decoration: none;
            color: white;
            border: 3px solid white;
            padding: 1rem 2rem;
            border-radius: 10px;
            display: inline-block;
            transition: all 0.3s;
        }
        
        .emergency-phone:hover {
            background: white;
            color: #ef4444;
        }
        
        /* Contact Section */
        .contact {
            padding: 80px 0;
            background: #f8fafc;
        }
        
        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }
        
        .contact-info h3 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            color: #1e40af;
        }
        
        .contact-item {
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
        }
        
        .contact-item span {
            font-size: 1.5rem;
            margin-right: 1rem;
            width: 40px;
        }
        
        .contact-form {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: #374151;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 5px;
            font-size: 1rem;
        }
        
        .form-group textarea {
            resize: vertical;
            height: 120px;
        }
        
        .submit-btn {
            background: #1e40af;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            transition: background 0.3s;
        }
        
        .submit-btn:hover {
            background: #1d4ed8;
        }
        
        /* Footer */
        .footer {
            background: #1f2937;
            color: white;
            padding: 40px 0;
            text-align: center;
        }
        
        .footer h3 {
            margin-bottom: 1rem;
        }
        
        .footer p {
            margin-bottom: 0.5rem;
        }
        
        .footer a {
            color: #60a5fa;
            text-decoration: none;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }
            
            .nav {
                display: none;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">${businessDetails.businessName}</div>
                <nav>
                    <ul class="nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <a href="#contact" class="cta-button">Get Quote</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Professional Plumbing Services${businessDetails.city ? ' in ' + businessDetails.city : ''}</h1>
            <p>Expert plumbing solutions for your home and business. Available 24/7 for emergencies with licensed, insured professionals you can trust.</p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">Get Free Quote</a>
                <a href="tel:${businessDetails.phone}" class="btn-secondary">Call Now: ${businessDetails.phone}</a>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our Plumbing Services</h2>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">🔧</div>
                    <h3>Emergency Repairs</h3>
                    <p>24/7 emergency plumbing services for burst pipes, clogged drains, and urgent repairs that can't wait.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🚿</div>
                    <h3>Bathroom Plumbing</h3>
                    <p>Complete bathroom plumbing services including toilet installation, shower repairs, and fixture upgrades.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🍽️</div>
                    <h3>Kitchen Plumbing</h3>
                    <p>Kitchen sink installation, garbage disposal repair, dishwasher connections, and water line services.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🔥</div>
                    <h3>Water Heater Service</h3>
                    <p>Water heater installation, repair, and maintenance for both traditional and tankless systems.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">💧</div>
                    <h3>Drain Cleaning</h3>
                    <p>Professional drain cleaning and sewer line services to clear blockages and prevent future clogs.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">🏠</div>
                    <h3>Whole House Plumbing</h3>
                    <p>Complete plumbing system installation and repiping for new construction and home renovations.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2>Why Choose ${businessDetails.businessName}?</h2>
                    <p>With over 15 years of experience serving${businessDetails.city ? ' ' + businessDetails.city + ' and surrounding areas' : ' the local community'}, ${businessDetails.businessName} is your trusted partner for all plumbing needs. Our team of licensed professionals is committed to providing high-quality workmanship and exceptional customer service.</p>
                    <ul class="about-features">
                        <li>Licensed & Insured Plumbers</li>
                        <li>24/7 Emergency Service</li>
                        <li>Upfront Pricing - No Hidden Fees</li>
                        <li>Quality Workmanship Guarantee</li>
                        <li>Modern Equipment & Techniques</li>
                        <li>Fast Response Times</li>
                    </ul>
                </div>
                <div class="about-image">
                    🔧
                </div>
            </div>
        </div>
    </section>

    <!-- Emergency Section -->
    <section class="emergency">
        <div class="container">
            <h2>Plumbing Emergency?</h2>
            <p>Don't wait! Call us now for immediate assistance with burst pipes, major leaks, and urgent plumbing issues.</p>
            <a href="tel:${businessDetails.phone}" class="emergency-phone">${businessDetails.phone}</a>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Get Your Free Quote Today</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    <div class="contact-item">
                        <span>📍</span>
                        <div>
                            <strong>Address:</strong><br>
                            ${businessDetails.address}<br>
                            ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>📞</span>
                        <div>
                            <strong>Phone:</strong><br>
                            <a href="tel:${businessDetails.phone}">${businessDetails.phone}</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>✉️</span>
                        <div>
                            <strong>Email:</strong><br>
                            <a href="mailto:${businessDetails.email}">${businessDetails.email}</a>
                        </div>
                    </div>
                    <div class="contact-item">
                        <span>👤</span>
                        <div>
                            <strong>Contact:</strong><br>
                            ${businessDetails.ownerName}
                        </div>
                    </div>
                </div>
                <form class="contact-form">
                    <h3>Request Service Quote</h3>
                    <div class="form-group">
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                    <div class="form-group">
                        <label for="service">Service Needed</label>
                        <select id="service" name="service">
                            <option>Select Service</option>
                            <option>Emergency Repair</option>
                            <option>Bathroom Plumbing</option>
                            <option>Kitchen Plumbing</option>
                            <option>Water Heater Service</option>
                            <option>Drain Cleaning</option>
                            <option>Whole House Plumbing</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="message">Problem Description</label>
                        <textarea id="message" name="message" placeholder="Please describe your plumbing issue or service need..."></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Request Quote</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <h3>${businessDetails.businessName}</h3>
            <p>${businessDetails.address}, ${businessDetails.city}, ${businessDetails.state} ${businessDetails.zip}</p>
            <p>Phone: <a href="tel:${businessDetails.phone}">${businessDetails.phone}</a> | Email: <a href="mailto:${businessDetails.email}">${businessDetails.email}</a></p>
            <p style="margin-top: 20px; opacity: 0.8;">
                Copyright 2025 by ${businessDetails.businessName}. All rights reserved.
            </p>
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
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! This is a demo. In the real website, this form would submit your service request to ${businessDetails.businessName}.');
        });
    </script>
</body>
</html>`;

      return templateContent;
    };

    // Create and inject the template
    const iframe = document.getElementById('customTemplate') as HTMLIFrameElement;
    if (iframe) {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(createCustomTemplate());
        doc.close();
      }
    }
  }, [businessDetails]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Demo Header */}
      <div className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            Demo: {businessDetails.businessName} - Custom Plumbing Website
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
