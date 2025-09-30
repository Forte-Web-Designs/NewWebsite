import type { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Custom Website Design & Hand-Coded Websites | Forte (DFW)",
  description: "Custom-coded websites built for speed, clarity, and lead capture. No WordPress—just clean, fast sites that convert visitors into customers.",
  keywords: [
    "custom website design", "DFW web design", "hand-coded websites", "custom web development",
    "Dallas web designer", "Fort Worth web design", "responsive web design", "business website design",
    "professional website design", "SEO-optimized websites", "conversion-focused design"
  ],
  openGraph: {
    title: "Custom Website Design & Hand-Coded Websites | Forte (DFW)",
    description: "Custom-coded websites built for speed, clarity, and lead capture. No WordPress—just clean, fast sites that convert visitors into customers.",
    url: "https://fortewebdesigns.com/services/web-design/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/web-design/"
  }
};

"use client";
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
    type: "One-Time Plan",
    commitment: "Pay once and own outright",
    setupFee: "from $3,200+",
    setupNote: "Higher for eCommerce or complex projects",
    monthlyFee: "No monthly fees",
    includes: [
      "5–10 fully custom-coded pages",
      "Mobile responsive design", 
      "SEO-ready foundation",
      "Complete ownership of code",
      "Analytics setup",
      "Optional Forte Care™ available"
    ],
    popular: false,
    ctaText: "Start One-Time Project",
    ctaLink: "/contact"
  }
];

// Comparison table data
const comparisonFeatures = [
  {
    feature: "Speed",
    forte: "Lightning fast (90+ PageSpeed)",
    pageBuilders: "Slow due to bloated code"
  },
  {
    feature: "Security", 
    forte: "Custom code, minimal attack surface",
    pageBuilders: "Plugin vulnerabilities"
  },
  {
    feature: "SEO",
    forte: "Clean, optimized code structure",
    pageBuilders: "Heavy, cluttered markup"
  },
  {
    feature: "Customization",
    forte: "Unlimited, no template limits",
    pageBuilders: "Restricted by themes"
  },
  {
    feature: "Ownership",
    forte: "You own 100% of the code",
    pageBuilders: "Dependent on platform"
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "We went from invisible online to booked out within a month. Best investment we made.",
    author: "Maria Santos",
    company: "Santos Family Restaurant"
  },
  {
    quote: "Forte built a site that actually converts. We're seeing 2× the leads — and they update everything fast.",
    author: "Mike Chen", 
    company: "Elite Home Services"
  }
];

export default function WebDesignPage() {
  const [showCheckupForm, setShowCheckupForm] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Custom Website Design — Built for Speed, Security & Growth
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Hand-coded websites that outperform templates every time. No WordPress, no page builders — just clean, fast, secure websites built from scratch for real business growth.
              </p>

              <div className="flex justify-center">
                <DarkButton 
                  href="https://www.fortewebdesigns.com/checkup/"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Get Your Free Website Checkup →
                </DarkButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Why Forte Outperforms Templates
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See the difference custom development makes for your business
              </p>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-primary-600 dark:text-primary-400">Forte Website</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">Page Builders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-650 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{item.feature}</td>
                        <td className="px-6 py-4 text-sm text-primary-600 dark:text-primary-400 font-medium">
                          <div className="flex items-center gap-2">
                            <Icon name="check" className="w-4 h-4 text-green-500" />
                            {item.forte}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-2">
                            <Icon name="x" className="w-4 h-4 text-red-500" />
                            {item.pageBuilders}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Website Packages - Visual Pricing Table */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Website Packages
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose the solution that fits your business needs
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <SimpleAnimatedCard key={index}>
                <div className={`relative bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg h-full flex flex-col ${
                  pkg.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''
                }`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
                      {pkg.type}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {pkg.commitment}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                        {pkg.setupFee}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        Setup Fee ({pkg.setupNote})
                      </div>
                      <div className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                        {pkg.monthlyFee}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {pkg.includes.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <Icon name="check" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <DarkButton 
                      href={pkg.ctaLink}
                      className={`w-full text-center py-3 ${
                        pkg.popular 
                          ? 'bg-primary-600 hover:bg-primary-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                    >
                      {pkg.ctaText}
                    </DarkButton>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Ecosystem Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Part of the Forte Growth System™
              </h2>
              
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Your website is just the <strong>foundation</strong>. As your business grows, you can easily add automation (missed call handling, follow-ups, booking flows) and business systems (CRM, dashboards, workflows).
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  <strong>No rebuild required when scaling.</strong> Your website grows with you.
                </p>
              </div>

              <DarkButton 
                href="/ecosystem"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                See the Full Growth System →
              </DarkButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Free Website Checkup Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left">
              <div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Free Website Checkup
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Get a comprehensive <strong>5-point performance audit</strong> of your current website covering speed, SEO, security, conversion setup, and growth potential.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Clear scorecard with actionable insights</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Detailed action plan for improvements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Completely free with no obligations</span>
                  </div>
                </div>

                <DarkButton 
                  href="https://www.fortewebdesigns.com/checkup/"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Run My Free Website Checkup →
                </DarkButton>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl mb-6">🔍</div>
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    5-Point Website Analysis
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center justify-between">
                      <span>Speed Performance</span>
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SEO Foundation</span>
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Security Audit</span>
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Conversion Setup</span>
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Growth Potential</span>
                      <Icon name="check" className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                What Our Clients Say
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full">
                  <div className="text-2xl text-primary-500 mb-4">"</div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link 
                href="/case-studies"
                className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg transition-colors group"
              >
                See More Success Stories
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
              Ready to Build a Site That Actually Works?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We build more than websites — we build the foundation for your business growth system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => window.open('https://www.fortewebdesigns.com/checkup/', '_blank')}
                className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto"
              >
                Book My Free Website Checkup →
              </button>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Start My Website Project →
              </Link>
            </div>

            <div className="text-white/80">
              <p className="mb-2">📞 (817) 873-6655</p>
              <p>✉️ seth@fortewebdesigns.com</p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
