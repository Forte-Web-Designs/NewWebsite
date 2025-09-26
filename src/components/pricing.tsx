'use client';

import { useState } from 'react';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import ContactModal from './ContactModal';

// Legacy pricing component - redirects to new pricing system
export function PricingPage() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Pricing Information
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Please visit our updated pricing page for current information.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                View Updated Pricing
              </Link>
              <button onClick={() => setShowContactModal(true)} className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </SimpleScrollReveal>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
    </section>
  );
}

export default PricingPage;
