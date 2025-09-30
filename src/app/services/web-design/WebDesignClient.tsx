'use client';

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from "@/components/DarkButton";

// Website packages data
const websitePackages = [
  {
    type: "Monthly Plan",
    commitment: "12-month minimum, then month-to-month",
    setupFee: "from $2,000+",
    setupNote: "Higher for eCommerce or advanced sites",
    monthlyFee: "$200/month",
    includes: [
      "5–10 fully custom-coded pages",
      "Mobile responsive design",
      "SEO-ready foundation",
      "Hosting + domain included",
      "Analytics setup",
      "Forte Care™ (unlimited edits + ongoing optimization)"
    ],
    popular: true,
    ctaText: "Start Monthly Plan",
    ctaLink: "/contact"
  },
  {
    type: "One-Time Build",
    commitment: "Single payment, optional ongoing care",
    setupFee: "from $5,000+",
    setupNote: "Varies based on complexity and features needed",
    monthlyFee: "Optional Care: $200/month",
    includes: [
      "Full custom website build",
      "Complete design & development",
      "SEO optimization",
      "1 year of hosting included",
      "Training & handoff",
      "30-day support included"
    ],
    popular: false,
    ctaText: "Get Quote",
    ctaLink: "/contact"
  }
];

const websiteFeatures = [
  {
    title: "Hand-Coded for Speed",
    description: "No WordPress bloat. Clean, custom code that loads in seconds and ranks better on Google.",
    icon: "code"
  },
  {
    title: "Mobile-First Design", 
    description: "Built for phones first, then scaled up. Perfect experience on any device.",
    icon: "cursor"
  },
  {
    title: "SEO-Ready Foundation",
    description: "Proper structure, meta tags, schema markup, and optimization built in from day one.",
    icon: "search"
  },
  {
    title: "Lead Capture Focus",
    description: "Designed to turn visitors into customers with clear CTAs and conversion optimization.",
    icon: "cursor1"
  },
  {
    title: "Ongoing Care Included",
    description: "Unlimited edits, updates, and optimization with Forte Care™ maintenance plans.",
    icon: "star"
  },
  {
    title: "Local DFW Focus",
    description: "Built for Dallas-Fort Worth businesses with local SEO and market understanding.",
    icon: "gps"
  }
];

export default function WebDesignClient() {
  const [showCheckupForm, setShowCheckupForm] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 text-white pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Custom Website Design & Hand-Coded Websites
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-4xl mx-auto mb-8">
                Custom-coded websites built for speed, clarity, and lead capture. No WordPress—just clean, fast sites that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/growth-audit">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                    Get Free Website Audit →
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto">
                    Start Your Project →
                  </button>
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Why Choose Custom-Coded Websites?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Built from scratch for your business. No templates, no limitations, just websites that work exactly how you need them to.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteFeatures.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg text-center h-full">
                  <Icon name={feature.icon} className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Website Packages & Pricing
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the approach that fits your business. Both options include custom design and hand-coded development.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <SimpleAnimatedCard key={index}>
                <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 h-full flex flex-col ${pkg.popular ? 'border-primary-500' : 'border-gray-200 dark:border-gray-700'}`}>
                  {pkg.popular && (
                    <div className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                      {pkg.type}
                    </h3>
                    <div className="mb-4">
                      <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                        {pkg.setupFee}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {pkg.setupNote}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                        {pkg.monthlyFee}
                      </p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {pkg.commitment}
                    </p>
                  </div>
                  
                  <div className="flex-grow mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={pkg.ctaLink}>
                    <DarkButton className="w-full justify-center">
                      {pkg.ctaText} →
                    </DarkButton>
                  </Link>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Free Website Checkup CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
                Get a Free Website Performance Checkup
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                See how your current website performs on speed, SEO, mobile experience, and conversion optimization. Get actionable recommendations in 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowCheckupForm(!showCheckupForm)}
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Get Free Checkup →
                </button>
                <Link href="/contact">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    Discuss New Website →
                  </button>
                </Link>
              </div>

              {showCheckupForm && (
                <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl text-left max-w-md mx-auto">
                  <h3 className="font-bold text-lg mb-4">Quick Website Checkup Request</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Website URL"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Send Checkup Request →
                    </button>
                  </form>
                </div>
              )}

              <p className="mt-8 text-sm text-primary-200">
                <Icon name="gps" className="inline w-4 h-4 mr-2" />
                Serving Dallas-Fort Worth & surrounding areas • Based in Grapevine, TX
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}