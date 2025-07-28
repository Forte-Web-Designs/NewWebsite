"use client";

import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { useState } from 'react';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

const coreServices = [
  {
    id: "websites",
    title: "Website Design",
    desc: "Hand-coded websites that work as hard as you do. No templates, no cookie-cutters - just custom-built digital powerhouses that turn visitors into paying customers while you sleep.",
    features: [
      "Custom coded for speed & SEO dominance",
      "Mobile-first responsive design", 
      "Forte Care™ support included",
      "Built for maximum conversions"
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
    title: "SEO Services",
    desc: "Get found by customers who are actively searching for what you sell. Our SEO doesn't just improve rankings - it drives qualified leads to your door every single day.",
    features: [
      "Local & national SEO dominance",
      "Content strategy that converts",
      "Technical SEO that Google loves", 
      "Monthly performance & ROI reports"
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
    title: "PPC Advertising",
    desc: "Google Ads campaigns that actually make you money. Stop throwing cash at keywords that don't convert - get campaigns optimized for your bottom line, not just clicks.",
    features: [
      "Strategic campaign setup & optimization",
      "Landing page conversion optimization",
      "Advanced conversion tracking & analysis",
      "Continuous ROI improvement"
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
    id: "social",
    title: "Social Media Management",
    desc: "Stop posting into the void. Our social media strategies build real relationships that convert followers into loyal customers. Every post, every story, every interaction designed to grow your bottom line.",
    features: [
      "Platform-specific content strategy",
      "Professional content creation & design",
      "Community management & engagement",
      "Performance analytics & optimization"
    ],
    pricing: "Starting at $500/month",
    linkText: "Build My Community",
    href: "/services/socialMedia",
    caseStudy: {
      client: "Local Fitness Studio",
      result: "3x more class bookings from social",
      icon: "💪"
    }
  },
  {
    id: "white-label",
    title: "White Label Partnerships",
    desc: "Power Your Agency with Custom, Blazing-Fast Websites - Built by Forte. We partner with marketing and SEO agencies to deliver high-performance websites under your brand. Custom-coded, lightning-fast, 100% U.S.-based.",
    features: [
      "Custom-coded websites under your brand",
      "100% U.S.-based development team",
      "Flexible workflow and communication",
      "Optional Forte Care™ support included"
    ],
    pricing: "Partner Pricing Available",
    linkText: "Learn More",
    href: "/services/white-label",
    caseStudy: {
      client: "Blueprint Creative Co.",
      result: "Seamless white-label partnership",
      icon: "🤝"
    }
  },
  {
    id: "audit",
    title: "Free Website Audit",
    desc: "Discover exactly what's costing you customers with our comprehensive website analysis. Get a detailed report showing every issue holding your site back from peak performance.",
    features: [
      "Complete SEO analysis",
      "Speed & performance testing",
      "Mobile responsiveness check",
      "Conversion optimization review"
    ],
    pricing: "100% Free",
    linkText: "Get My Free Audit",
    href: "/checkup",
    caseStudy: {
      client: "Local Contractor",
      result: "Found 12 critical issues costing leads",
      icon: "🔍"
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
                Complete Digital Marketing Solutions
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                From stunning websites to powerful SEO, strategic advertising to social media management - get everything you need to dominate your market. One team, comprehensive solutions, guaranteed results.
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
                  {service.title}
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
                  <span className="text-3xl">🛡️</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Forte Care™ Support
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  24/7 monitoring, unlimited updates, and continuous optimization. Your website's personal bodyguard.
                </p>
                <Link href="/forte-care" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🏢</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Enterprise Solutions
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Custom digital solutions for large businesses and organizations with complex needs.
                </p>
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Lead CTA */}
        <IndustryLeadCTA 
          industry="services"
          formName="Digital Marketing Services Inquiry"
          mobileCtaText="Ready to grow your business?"
          mobileBgGradient="bg-gradient-to-r from-blue-600 to-purple-600"
          title="Let's Build Your Digital Marketing Strategy"
          subtitle="Get a custom strategy designed to grow your business with our complete digital solutions."
        />
      </div>
    </div>
  );
}
