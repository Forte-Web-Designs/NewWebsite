'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Mail, MessageSquare, Zap } from 'lucide-react';

interface IndustryContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  industry: string;
  businessType?: string;
  calendlyUrl?: string;
}

const industryConfig: Record<string, {
  title: string;
  subtitle: string;
  services: string[];
  urgentText: string;
  calendlyUrl: string;
  primaryColor: string;
  icon: React.ReactNode;
}> = {
  plumbers: {
    title: "Get Your Plumbing Quote",
    subtitle: "Emergency repairs or planned installations - we're here 24/7",
    services: ["Emergency Repairs", "Drain Cleaning", "Pipe Installation", "Water Heater Service", "Leak Detection"],
    urgentText: "Plumbing Emergency? Call Now!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/plumbing-consultation",
    primaryColor: "blue",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/></svg>
  },
  hvac: {
    title: "HVAC System Consultation",
    subtitle: "Keep your home comfortable year-round with expert HVAC service",
    services: ["AC Repair", "Heating Installation", "Duct Cleaning", "Maintenance Plans", "Energy Audits"],
    urgentText: "No Heat/AC? Emergency Service Available!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/hvac-consultation",
    primaryColor: "orange",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>
  },
  electricians: {
    title: "Electrical Services Quote",
    subtitle: "Safe, reliable electrical work from licensed professionals",
    services: ["Electrical Repairs", "Panel Upgrades", "Outlet Installation", "Light Fixtures", "Safety Inspections"],
    urgentText: "Electrical Emergency? Call Immediately!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/electrical-consultation",
    primaryColor: "yellow",
    icon: <Zap className="w-5 h-5" />
  },
  construction: {
    title: "Construction Project Quote",
    subtitle: "From small renovations to major builds - let's discuss your project",
    services: ["Home Renovations", "Kitchen Remodels", "Bathroom Updates", "Additions", "Commercial Projects"],
    urgentText: "Ready to Build? Let's Start Planning!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/construction-consultation",
    primaryColor: "orange",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.5 3.5L3 7v11h14V7l-7.5-3.5z M9 14v2H7v-2H5v-2h2V10h2v2h2v2H9z"/></svg>
  },
  painters: {
    title: "Painting Services Quote",
    subtitle: "Transform your space with professional painting services",
    services: ["Interior Painting", "Exterior Painting", "Cabinet Refinishing", "Deck Staining", "Color Consultation"],
    urgentText: "Ready for a Fresh Look? Get Started Today!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/painting-consultation",
    primaryColor: "purple",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13.5 2c1.381 0 2.5 1.119 2.5 2.5 0 .563-.186 1.082-.5 1.5L13 8.5 11.5 7 14 4.5c.418-.314.937-.5 1.5-.5z M10 8.5L8.5 7l-6 6V17h3.5l6-6z"/></svg>
  },
  handyman: {
    title: "Handyman Services Quote",
    subtitle: "From honey-do lists to major repairs - we handle it all",
    services: ["Home Repairs", "Assembly Services", "Maintenance", "Small Renovations", "Odd Jobs"],
    urgentText: "Need It Fixed? We're On It!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/handyman-consultation",
    primaryColor: "green",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.5 2L3 7v11h14V7l-7.5-3.5z M8 12H6v-2h2v2z M12 12h-2v-2h2v2z M16 12h-2v-2h2v2z"/></svg>
  },
  landscapers: {
    title: "Landscaping Services Quote",
    subtitle: "Beautiful outdoor spaces designed and maintained by experts",
    services: ["Lawn Care", "Garden Design", "Tree Services", "Hardscaping", "Seasonal Cleanup"],
    urgentText: "Ready for Your Dream Yard? Let's Start!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/landscaping-consultation",
    primaryColor: "green",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2L3 7v11h14V7l-7-5z M8 12H6v-2h2v2z M12 12h-2v-2h2v2z M16 12h-2v-2h2v2z"/></svg>
  },
  restaurants: {
    title: "Restaurant Marketing Quote",
    subtitle: "Grow your restaurant with digital marketing that brings in customers",
    services: ["Website Design", "Social Media Marketing", "Online Ordering", "Review Management", "Local SEO"],
    urgentText: "Ready to Fill More Tables? Let's Talk!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/restaurant-consultation",
    primaryColor: "red",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3v6l4 1V3c0-1.1-.9-2-2-2S7 1.9 7 3z M12 3v5l4-1V3c0-1.1-.9-2-2-2s-2 .9-2 2z M3 12c0-3.31 2.69-6 6-6s6 2.69 6 6v5H3v-5z"/></svg>
  },
  healthcare: {
    title: "Healthcare Marketing Quote",
    subtitle: "Connect with more patients through professional digital marketing",
    services: ["Medical Website Design", "Patient Review Management", "Healthcare SEO", "Social Media", "HIPAA Compliance"],
    urgentText: "Ready to Grow Your Practice? Let's Connect!",
    calendlyUrl: "https://calendly.com/fortewebdesigns/healthcare-consultation",
    primaryColor: "blue",
    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3 9h-2v2H9v-2H7V9h2V7h2v2h2v2z"/></svg>
  }
};

export default function IndustryContactModal({ 
  isOpen, 
  onClose, 
  industry, 
  businessType,
  calendlyUrl: customCalendlyUrl 
}: IndustryContactModalProps) {
  const [currentStep, setCurrentStep] = useState<'form' | 'calendly'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    projectType: '',
    timeline: '',
    budget: ''
  });

  const config = industryConfig[industry] || industryConfig.construction;
  const finalCalendlyUrl = customCalendlyUrl || config.calendlyUrl;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-name': 'industry-contact',
          'industry': industry,
          'business-type': businessType || '',
          ...formData
        }).toString()
      });
      
      if (response.ok) {
        // Show success message or redirect
        alert('Thank you! We\'ll be in touch soon.');
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          projectType: '',
          timeline: '',
          budget: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  const colorClasses = {
    blue: {
      primary: 'bg-blue-600 hover:bg-blue-700',
      secondary: 'text-blue-600 border-blue-600 hover:bg-blue-50',
      accent: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    orange: {
      primary: 'bg-orange-600 hover:bg-orange-700',
      secondary: 'text-orange-600 border-orange-600 hover:bg-orange-50',
      accent: 'text-orange-600',
      bg: 'bg-orange-50'
    },
    yellow: {
      primary: 'bg-yellow-600 hover:bg-yellow-700',
      secondary: 'text-yellow-600 border-yellow-600 hover:bg-yellow-50',
      accent: 'text-yellow-600',
      bg: 'bg-yellow-50'
    },
    green: {
      primary: 'bg-green-600 hover:bg-green-700',
      secondary: 'text-green-600 border-green-600 hover:bg-green-50',
      accent: 'text-green-600',
      bg: 'bg-green-50'
    },
    purple: {
      primary: 'bg-purple-600 hover:bg-purple-700',
      secondary: 'text-purple-600 border-purple-600 hover:bg-purple-50',
      accent: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    red: {
      primary: 'bg-red-600 hover:bg-red-700',
      secondary: 'text-red-600 border-red-600 hover:bg-red-50',
      accent: 'text-red-600',
      bg: 'bg-red-50'
    }
  };

  const colors = colorClasses[config.primaryColor as keyof typeof colorClasses];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${colors.bg} p-6 border-b`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className={`${colors.accent}`}>
                {config.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{config.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{config.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setCurrentStep('calendly')}
              className={`flex items-center gap-2 px-4 py-2 ${colors.primary} text-white rounded-lg transition-colors`}
            >
              <Calendar className="w-4 h-4" />
              Schedule Call
            </button>
            <button
              onClick={() => setCurrentStep('form')}
              className={`flex items-center gap-2 px-4 py-2 border-2 ${colors.secondary} rounded-lg transition-colors`}
            >
              <MessageSquare className="w-4 h-4" />
              Get Quote
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {currentStep === 'form' ? (
            <form onSubmit={handleSubmit} name="industry-contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="industry-contact" />
              <input type="hidden" name="industry" value={industry} />
              <input type="hidden" name="business-type" value={businessType || ''} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company/Business
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Service Needed
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {config.services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="This week">This week</option>
                    <option value="This month">This month</option>
                    <option value="Next month">Next month</option>
                    <option value="Planning ahead">Planning ahead</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <div className="mt-6 flex gap-3">
                <button
                  type="submit"
                  className={`flex-1 ${colors.primary} text-white py-3 px-6 rounded-md font-medium transition-colors`}
                >
                  Get My Quote
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep('calendly')}
                  className={`px-6 py-3 border-2 ${colors.secondary} rounded-md font-medium transition-colors`}
                >
                  Or Schedule Call
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Schedule Your Free Consultation</h3>
              <p className="text-gray-600 mb-6">
                Pick a time that works for you and we'll discuss your project in detail.
              </p>
              
              {/* Calendly Embed */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <iframe
                  src={finalCalendlyUrl}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Schedule Consultation"
                  className="rounded-lg"
                />
              </div>
              
              <div className="mt-4">
                <button
                  onClick={() => setCurrentStep('form')}
                  className={`px-6 py-2 border-2 ${colors.secondary} rounded-md transition-colors`}
                >
                  ← Back to Quote Form
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
