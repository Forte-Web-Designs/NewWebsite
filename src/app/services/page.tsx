"use client";

import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { useState } from 'react';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

const growthSystems = [
  {
    id: "foundation",
    title: "Foundation: Custom Website Design",
    desc: "Your digital storefront where the growth system starts. Hand-coded websites built for speed, SEO, and conversions - not just pretty pictures, but lead-generating machines that work 24/7 to capture customers while you sleep.",
    features: [
      "Custom-coded for lightning-fast loading and SEO dominance",
      "Mobile-first design optimized for local search and conversions", 
      "Built-in lead capture systems and appointment booking integration",
      "Strategic user experience designed to turn visitors into customers"
    ],
    pricing: "Starting at $200/month",
    linkText: "Build My Growth Foundation",
    href: "/services/webDesign",
    caseStudy: {
      client: "Mike's HVAC",
      result: "2x more service calls in 60 days",
      icon: "🏗️"
    }
  },
  {
    id: "growth",
    title: "Growth Layer: Smart Automation",
    desc: "Your growth system doesn't stop at a website. With smart automation systems, every lead is followed up instantly and booked without human effort.",
    features: [
      "Smart reception system to qualify leads 24/7",
      "Automated text & email follow-up sequences",
      "Instant calendar booking integration",
      "Smart reminders to reduce no-shows"
    ],
    pricing: "Starting at $1,500 setup + $300/month",
    linkText: "Automate My Lead Capture",
    href: "/services/seo",
    caseStudy: {
      client: "Local Law Firm",
      result: "85% of leads now book consultations automatically",
      icon: "🤖"
    }
  },
  {
    id: "scaling",
    title: "Scaling Layer: Business Systems Integration",
    desc: "A growth system only works if all your tools work together. We connect your website, CRM, booking, and reporting into one seamless operating system.",
    features: [
      "CRM setup and pipeline automation",
      "Lead tracking dashboards and reporting",
      "Integration with booking + payment systems",
      "Custom workflows to prevent lost leads"
    ],
    pricing: "Starting at $2,500 setup + $500/month",
    linkText: "Scale My Growth System",
    href: "/services/ads",
    caseStudy: {
      client: "Local Restaurant",
      result: "Increased table bookings by 200% with automated system",
      icon: "📊"
    }
  },
  {
    id: "optimization",
    title: "Ongoing Forte Care™",
    desc: "Growth systems need ongoing optimization to keep generating results. Forte Care™ isn't just maintenance — it's proactive growth support.",
    features: [
      "24/7 system monitoring and support",
      "System optimization and A/B testing for conversions",
      "Monthly optimization of automations & flows",
      "Growth insights and reporting delivered monthly"
    ],
    pricing: "Starting at $300/month",
    linkText: "Learn About Forte Care™",
    href: "/services/socialMedia",
    caseStudy: {
      client: "Local Fitness Studio",
      result: "Consistent 15% month-over-month growth",
      icon: "🛡️"
    }
  },
  {
    id: "partnerships",
    title: "Agency Partnership Program",
    desc: "Power your agency with Forte-built growth systems under your brand. We handle the technical complexity while you focus on client relationships. Perfect for marketing agencies ready to offer complete solutions.",
    features: [
      "White-label growth systems delivered under your agency brand",
      "100% U.S.-based development team with direct communication",
      "Flexible workflow integration and client handoff protocols",
      "Ongoing training and support to help you sell and deliver systems"
    ],
    pricing: "Partner Pricing Available",
    linkText: "Partner With Forte",
    href: "/services/white-label",
    caseStudy: {
      client: "Blueprint Creative Co.",
      result: "Expanded service offering, 3x revenue growth",
      icon: "🤝"
    }
  },
  {
    id: "audit",
    title: "Free Growth System Audit",
    desc: "Discover exactly what's costing you leads and customers. Get a detailed analysis of your current digital presence and a custom roadmap for building a growth system that actually drives results.",
    features: [
      "Complete lead generation system analysis",
      "Conversion optimization opportunities assessment",
      "Mobile and local search performance review",
      "Custom growth system roadmap and implementation plan"
    ],
    pricing: "100% Free",
    linkText: "Get My Free Growth Audit",
    href: "/checkup",
    caseStudy: {
      client: "Local Contractor",
      result: "Identified $50k in missed revenue opportunities",
      icon: "🔍"
    }
  }
];

export default function ServicePage() {
  const [activeTab, setActiveTab] = useState('foundation');

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
                <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">Business Growth Systems Partner</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
                Growth Systems That Actually Drive Clients
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
                Stop throwing money at marketing that doesn't work. Get a complete growth system engineered to generate leads, book appointments, and drive revenue. Four integrated layers that work together to turn your website into a client-generating machine.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Services Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-100 dark:bg-gray-800 rounded-xl p-2">
              {growthSystems.map((service) => (
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
            {growthSystems.map((service) => (
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
                        Your Growth Systems Partner
                      </h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">Systems engineered for measurable results</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">All layers integrate seamlessly for maximum ROI</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">Continuous optimization via Forte Care™</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                          <span className="text-gray-600 dark:text-gray-400">Lead generation & revenue growth guarantee</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Growth System Extensions */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Growth System Extensions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Advanced solutions that supercharge your growth system performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🛡️</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Forte Care™ Optimization
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  24/7 growth system monitoring, A/B testing, and continuous optimization to maximize leads and conversions.
                </p>
                <Link href="/forte-care" className="text-primary-600 dark:text-primary-400 hover:underline font-medium">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">🏢</span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Enterprise Growth Systems
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Custom multi-location growth systems for franchises and large organizations with complex lead routing needs.
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
          formName="Growth System Strategy Session"
          mobileCtaText="Ready to build your growth system?"
          mobileBgGradient="bg-gradient-to-r from-blue-600 to-purple-600"
          title="Let's Engineer Your Growth System"
          subtitle="Get a custom growth system roadmap designed to generate leads, book appointments, and drive measurable revenue growth."
        />
      </div>
    </div>
  );
}
