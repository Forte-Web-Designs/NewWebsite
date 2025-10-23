'use client';

import { useState } from 'react';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import { Icon } from '@/components/images/Icon';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export default function WebDesignClient() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);

  const features = [
    {
      icon: "flash",
      title: "Hand-Coded Performance",
      description: "No WordPress bloat. Pure HTML, CSS, and JavaScript for lightning-fast load times and better SEO rankings."
    },
    {
      icon: "shield", 
      title: "Conversion-Focused Design",
      description: "Every element is designed to guide visitors toward taking action—whether that's calling, filling out a form, or making a purchase."
    },
    {
      icon: "star",
      title: "Mobile-First Responsive",
      description: "Perfect display on all devices. Your site will look professional whether viewed on phones, tablets, or desktops."
    },
    {
      icon: "services",
      title: "SEO-Optimized Structure", 
      description: "Built with clean code and proper structure so search engines can easily find and rank your content."
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Strategy & Planning",
      description: "We analyze your business goals, target audience, and competitors to create a strategic website plan."
    },
    {
      step: "2", 
      title: "Custom Design",
      description: "Our designers create a unique, professional design that reflects your brand and converts visitors."
    },
    {
      step: "3",
      title: "Hand-Coded Development", 
      description: "We build your site with clean, optimized code for maximum performance and reliability."
    },
    {
      step: "4",
      title: "Launch & Optimize",
      description: "We launch your site and provide ongoing optimization to ensure peak performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Custom Website Design & Hand-Coded Websites
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                Professional, fast-loading websites built with clean code. No WordPress templates—just custom designs that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/growth-audit">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Get My Free Growth Snapshot →
                  </DarkButton>
                </Link>
                <Link href="/contact">
                  <LightButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Start My Project →
                  </LightButton>
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Why Hand-Coded Websites Outperform Templates
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon name={feature.icon} className="w-8 h-8 text-primary-600" />
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Our Website Design Process
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8">
              Ready to Build Your Professional Website?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/growth-audit">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Get My Free Growth Snapshot →
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto">
                  Start My Project →
                </button>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
