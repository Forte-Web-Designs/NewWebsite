'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

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
  template: string;
}

export default function CustomDemoPage() {
  const searchParams = useSearchParams();
  const [businessDetails, setBusinessDetails] = useState<BusinessDetails>({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    industry: 'landscaping',
    template: 'landscaping'
  });

  const [showDemo, setShowDemo] = useState(false);
  const [demoUrl, setDemoUrl] = useState('');

  // Load data from URL parameters if available
  useEffect(() => {
    const urlData: Partial<BusinessDetails> = {};
    
    // Get all search params
    searchParams.forEach((value, key) => {
      if (key in businessDetails) {
        (urlData as any)[key] = value;
      }
    });

    // Update state if URL params exist
    if (Object.keys(urlData).length > 0) {
      setBusinessDetails(prev => ({ ...prev, ...urlData }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBusinessDetails(prev => ({ ...prev, [name]: value }));
  };

  const generateDemo = () => {
    if (!businessDetails.businessName || !businessDetails.ownerName) {
      alert('Please fill in at least Business Name and Owner Name');
      return;
    }

    // Create URL with business parameters
    const params = new URLSearchParams();
    Object.entries(businessDetails).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    let baseUrl = '';
    switch (businessDetails.template) {
      case 'landscaping':
        baseUrl = '/landscaper/custom';
        break;
      case 'plumbing':
        baseUrl = '/plumbing/custom';
        break;
      default:
        baseUrl = '/landscaper/custom';
    }

    const url = `${baseUrl}?${params.toString()}`;
    setDemoUrl(url);
    setShowDemo(true);
  };

  const copyToClipboard = () => {
    const fullUrl = `${window.location.origin}${demoUrl}`;
    navigator.clipboard.writeText(fullUrl);
    alert('Demo URL copied to clipboard!');
  };

  const templates = [
    { value: 'landscaping', label: 'Landscaping & Garden Design', icon: '🌳' },
    { value: 'plumbing', label: 'Plumbing Services', icon: '🔧' },
  ];

  const industries = [
    'landscaping', 'plumbing', 'hvac', 'electrical', 'roofing', 'construction',
    'restaurant', 'retail', 'healthcare', 'legal', 'real estate', 'automotive'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Custom Demo Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a personalized website demo for your clients with their business details
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Business Name */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                Business Name *
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={businessDetails.businessName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Green Thumb Landscaping"
                required
              />
            </div>

            {/* Owner Name */}
            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700 mb-2">
                Owner Name *
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={businessDetails.ownerName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., John Smith"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={businessDetails.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={businessDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="info@business.com"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={businessDetails.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123 Main Street"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={businessDetails.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Chicago"
              />
            </div>

            {/* State */}
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={businessDetails.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="IL"
                maxLength={2}
              />
            </div>

            {/* ZIP */}
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={businessDetails.zip}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="60607"
              />
            </div>
          </div>

          {/* Template Selection */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Choose Template
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {templates.map((template) => (
                <label key={template.value} className="cursor-pointer">
                  <input
                    type="radio"
                    name="template"
                    value={template.value}
                    checked={businessDetails.template === template.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`p-4 border-2 rounded-lg transition-all ${
                    businessDetails.template === template.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{template.icon}</span>
                      <span className="font-medium">{template.label}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={generateDemo}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Generate Custom Demo
            </button>
          </div>

          {/* Demo URL Result */}
          {showDemo && (
            <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Demo Generated Successfully!</h3>
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={`${window.location.origin}${demoUrl}`}
                  readOnly
                  className="flex-1 px-3 py-2 bg-white border border-green-300 rounded text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition-colors"
                >
                  Copy URL
                </button>
                <Link
                  href={demoUrl}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/demo"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Demo Showcase
          </Link>
        </div>
      </div>
    </div>
  );
}
