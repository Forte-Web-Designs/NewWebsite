import React from 'react';

export const LandscaperWebsiteMockup = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-green-700 text-white px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-xl">
              🌿
            </div>
            <div>
              <h1 className="font-bold text-lg">Elite Landscaping Co.</h1>
              <p className="text-xs text-green-200">Professional Landscape Design</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-green-200">24/7 Service</p>
            <p className="font-bold">(555) 123-LAWN</p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white px-6 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Transform Your Outdoor Space</h2>
          <p className="text-green-100 mb-4">Professional landscaping that increases your property value</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold text-sm">
              Get Free Estimate
            </button>
            <button className="border border-white px-4 py-2 rounded-lg font-semibold text-sm">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 py-6 bg-gray-50">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🌳</div>
            <h4 className="font-semibold text-sm">Landscape Design</h4>
            <p className="text-xs text-gray-600">Custom outdoor designs</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🌱</div>
            <h4 className="font-semibold text-sm">Lawn Care</h4>
            <p className="text-xs text-gray-600">Weekly maintenance</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="text-2xl mb-2">🏗️</div>
            <h4 className="font-semibold text-sm">Hardscaping</h4>
            <p className="text-xs text-gray-600">Patios & walkways</p>
          </div>
        </div>
      </div>

      {/* Portfolio Preview */}
      <div className="px-6 py-6">
        <h3 className="text-lg font-bold text-center mb-4 text-gray-800">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-100 rounded-lg p-4">
            <div className="bg-green-200 rounded h-24 mb-2 flex items-center justify-center">
              <span className="text-green-700 font-bold">🏡 Backyard Oasis</span>
            </div>
            <h4 className="font-semibold text-sm">Modern Garden Design</h4>
            <p className="text-xs text-gray-600">Complete landscape transformation</p>
          </div>
          <div className="bg-green-100 rounded-lg p-4">
            <div className="bg-green-200 rounded h-24 mb-2 flex items-center justify-center">
              <span className="text-green-700 font-bold">🌺 Front Yard Makeover</span>
            </div>
            <h4 className="font-semibold text-sm">Curb Appeal Enhancement</h4>
            <p className="text-xs text-gray-600">Increased property value by 15%</p>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-6 py-4 bg-green-50">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="text-green-600">✓</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-600">✓</span>
            <span>20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-600">✓</span>
            <span>Free Estimates</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-green-600">✓</span>
            <span>Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white px-6 py-4">
        <div className="text-center">
          <p className="text-sm font-semibold">Elite Landscaping Co.</p>
          <p className="text-xs text-gray-400">Serving Dallas & Surrounding Areas</p>
          <p className="text-xs text-gray-400">Call (555) 123-LAWN for your free consultation</p>
        </div>
      </div>
    </div>
  );
};

export default LandscaperWebsiteMockup;
