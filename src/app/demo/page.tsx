'use client';

import Link from 'next/link';

export default function DemoShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Website Templates Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Showcase of professional website templates for different industries. 
            Perfect examples to show clients what their website could look like.
          </p>
          
          {/* Custom Demo Generator Button */}
          <div className="mb-8">
            <Link
              href="/demo/custom"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-3 text-2xl">🎯</span>
              Create Custom Client Demo
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Generate personalized demos with client business details
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Landscaping Template */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🌳</div>
                <h3 className="text-2xl font-bold">Landscaping</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Forte Landscaping</h3>
              <p className="text-gray-600 mb-4">
                Professional landscaping and garden design website featuring Forte Landscaping branding and services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Garden Design</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tree Care</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Lawn Care</span>
              </div>
              <Link 
                href="/landscaper" 
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Plumbing Template */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold">Plumbing</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Plumbing Services</h3>
              <p className="text-gray-600 mb-4">
                Reliable plumbing services website with city-specific content and emergency service focus.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Emergency</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Repairs</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">24/7</span>
              </div>
              <Link 
                href="/plumbing-landing?business=Forte%20Plumbing&owner=Seth%20Forte&location=Chicago&phone=(312)%20555-0123" 
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Coming Soon Templates */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
            <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold">Construction</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Construction Company</h3>
              <p className="text-gray-600 mb-4">
                Professional construction and contracting website template.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Coming Soon</span>
              </div>
              <button 
                disabled
                className="block w-full bg-gray-400 text-white text-center py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🍕</div>
                <h3 className="text-2xl font-bold">Restaurant</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Restaurant & Food</h3>
              <p className="text-gray-600 mb-4">
                Beautiful restaurant website with menu showcase and online ordering.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Coming Soon</span>
              </div>
              <button 
                disabled
                className="block w-full bg-gray-400 text-white text-center py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
            <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold">Healthcare</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Practice</h3>
              <p className="text-gray-600 mb-4">
                Professional healthcare website with appointment booking and services.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Coming Soon</span>
              </div>
              <button 
                disabled
                className="block w-full bg-gray-400 text-white text-center py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden opacity-75">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold">Electrical</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Electrical Services</h3>
              <p className="text-gray-600 mb-4">
                Professional electrical contractor website with service showcase.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Coming Soon</span>
              </div>
              <button 
                disabled
                className="block w-full bg-gray-400 text-white text-center py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Build Your Website?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            These are just examples of what we can create for your business. 
            Each website is fully customized to match your brand and industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Get Your Custom Website
            </Link>
            <Link 
              href="/pricing" 
              className="bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
