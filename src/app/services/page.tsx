"use client";

import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { useState } from 'react';

const coreServices = [
  {
    id: "websites",
    title: "Forte Foundation™ Websites",
    desc: "Hand-coded, lightning-fast websites that convert visitors into customers. No templates, no plugins, just pure performance.",
    features: [
      "Custom coded for speed & SEO",
      "Mobile-first responsive design", 
      "Forte Care™ support included",
      "Built for conversions"
    ],
    pricing: "Starting at $200/month",
    linkText: "Get My Converting Website",
    href: "/services/webDesign",
    caseStudy: {
      client: "Mike's HVAC",
      result: "2x more service calls in 60 days",
      icon: "🔧"
    }
  },
  {
    id: "seo",
    title: "Forte SEO™ Services",
    desc: "Get found by customers who are actively searching for what you sell. Comprehensive SEO that drives real results.",
    features: [
      "Local & national SEO optimization",
      "Content strategy & creation",
      "Technical SEO improvements", 
      "Monthly performance reports"
    ],
    pricing: "Starting at $300/month",
    linkText: "Dominate Google Now",
    href: "/services/seo",
    caseStudy: {
      client: "Local Law Firm",
      result: "Ranking #2 for main keywords",
      icon: "⚖️"
    }
  },
  {
    id: "ppc",
    title: "Forte PPC™ Advertising",
    desc: "Google Ads campaigns that bring qualified leads ready to buy. No wasted spend, just results.",
    features: [
      "Strategic campaign setup",
      "Landing page optimization",
      "Conversion tracking & analysis",
      "Continuous optimization"
    ],
    pricing: "Starting at $400/month",
    linkText: "Stop Wasting Ad Money",
    href: "/services/ads",
    caseStudy: {
      client: "Local Restaurant",
      result: "50% lower cost per customer",
      icon: "🍕"
    }
  },
  {
    id: "support",
    title: "Forte Care™ Support",
    desc: "24/7 monitoring, unlimited updates, and continuous optimization. Your website's personal bodyguard.",
    features: [
      "24/7 site monitoring",
      "Unlimited content updates",
      "Security & backup management",
      "Performance optimization"
    ],
    pricing: "Included with websites",
    linkText: "Protect My Investment",
    href: "/forte-care",
    caseStudy: {
      client: "Bella's Boutique", 
      result: "Zero downtime for 18 months",
      icon: "👗"
    }
  }
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState('websites');

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">Complete Digital Solutions</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
                Everything You Need to Grow Online
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                From lightning-fast websites to powerful SEO and PPC campaigns, we provide everything you need to dominate your market online. No juggling multiple vendors - one team, complete solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
              {coreServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === service.id
                      ? 'bg-white dark:bg-gray-700 text-primary-700 dark:text-primary-300 shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                  }`}
                >
                  {service.title.split('™')[0]}™
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            {coreServices.map((service) => (
              activeTab === service.id && (
                <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Service Details */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 border border-primary-200 dark:border-primary-800">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                          {service.pricing}
                        </span>
                        <span className="text-sm text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-800 px-3 py-1 rounded-full">
                          No setup fees
                        </span>
                      </div>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full justify-center"
                      >
                        {service.linkText}
                        <Icon name="rightarrow" alt="right arrow icon" className="w-2 h-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Case Study & Visual */}
                  <div className="space-y-6">
                    {/* Case Study */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                      <div className="text-center mb-6">
                        <div className="text-6xl mb-4">{service.caseStudy.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Real Results
                        </h3>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
                        <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                          {service.caseStudy.client}
                        </div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {service.caseStudy.result}
                        </div>
                      </div>
                    </div>

                    {/* Service Benefits */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Why Choose Forte™?
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">Direct access to the developer</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">All services work together seamlessly</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">Same-day response guarantee</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">100% satisfaction guarantee</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Specialized solutions for unique business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">📱</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Social Media Management
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Content that builds relationships and drives sales, not just vanity metrics.
                </p>
                <Link href="/services/socialMedia" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🔍</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Free Website Audit
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Discover exactly what's costing you customers with our comprehensive site analysis.
                </p>
                <Link href="/solutions/seotool" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Get Free Audit →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
