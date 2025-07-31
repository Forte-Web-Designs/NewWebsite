import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forte Landscaping - Professional Garden & Landscaping Services',
  description: 'Transform your outdoor space with Forte Landscaping. Professional landscaping, garden design, and maintenance services in Chicago.',
};

export default function LandscapingLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Forte Landscaping
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Garden & Landscaping Services
          </p>
          <p className="text-gray-500">
            This page is currently under development. Please check back soon!
          </p>
        </div>
      </div>
    </div>
  );
}