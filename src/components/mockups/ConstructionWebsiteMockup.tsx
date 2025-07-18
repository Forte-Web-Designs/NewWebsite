import React from 'react';

export const ConstructionWebsiteMockup = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-orange-600 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-xl">
              🏗️
            </div>
            <div>
              <h1 className="font-bold text-lg">Premier Construction</h1>
              <p className="text-xs text-orange-200">General Contractor & Remodeling</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-orange-200">Licensed & Bonded</p>
            <p className="font-bold">(555) BUILD-IT</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Build Your Dream Project</h2>
          <p className="text-orange-100 mb-4">Quality construction and remodeling services since 1995</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
              Get Free Quote
            </button>
            <button className="border border-white px-4 py-2 rounded-lg font-semibold text-sm">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 py-6 bg-gray-50">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Construction Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🏠</div>
            <h4 className="font-semibold text-sm">Home Additions</h4>
            <p className="text-xs text-gray-600">Expand your living space</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🛁</div>
            <h4 className="font-semibold text-sm">Bathroom Remodels</h4>
            <p className="text-xs text-gray-600">Complete renovations</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🏢</div>
            <h4 className="font-semibold text-sm">Commercial Build</h4>
            <p className="text-xs text-gray-600">Office & retail spaces</p>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="px-6 py-6">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-orange-100 rounded-lg p-4">
            <div className="bg-orange-200 rounded h-24 mb-2 flex items-center justify-center">
              <span className="text-orange-700 font-bold">🏘️ Luxury Home Build</span>
            </div>
            <h4 className="font-semibold text-sm">Custom Home Construction</h4>
            <p className="text-xs text-gray-600">4,500 sq ft luxury residence</p>
          </div>
          <div className="bg-orange-100 rounded-lg p-4">
            <div className="bg-orange-200 rounded h-24 mb-2 flex items-center justify-center">
              <span className="text-orange-700 font-bold">🍳 Kitchen Renovation</span>
            </div>
            <h4 className="font-semibold text-sm">Modern Kitchen Remodel</h4>
            <p className="text-xs text-gray-600">Complete kitchen transformation</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-6 py-6 bg-blue-50">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Why Choose Premier Construction?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-sm">28+ Years Experience</h4>
              <p className="text-xs text-gray-600">Trusted by 500+ homeowners</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-sm">Licensed & Insured</h4>
              <p className="text-xs text-gray-600">Full coverage protection</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-sm">Quality Guarantee</h4>
              <p className="text-xs text-gray-600">2-year warranty on all work</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              ✓
            </div>
            <div>
              <h4 className="font-semibold text-sm">On-Time Delivery</h4>
              <p className="text-xs text-gray-600">Projects completed as promised</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-6 py-6 bg-orange-600 text-white text-center">
        <h3 className="text-lg font-bold mb-2">Ready to Start Your Project?</h3>
        <p className="text-orange-100 mb-4 text-sm">Get a free consultation and detailed estimate</p>
        <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">
          Schedule Free Consultation
        </button>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white px-6 py-4">
        <div className="text-center">
          <p className="text-sm font-semibold">Premier Construction</p>
          <p className="text-xs text-gray-400">Serving North Texas • Licensed #TX123456</p>
          <p className="text-xs text-gray-400">Call (555) BUILD-IT for your free estimate</p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionWebsiteMockup;
