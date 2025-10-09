"use client";

import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export default function ForteCare() {
  const guaranteeFeatures = [
    {
      icon: "check",
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with our work, we'll make it right—or refund your money. No questions asked."
    },
    {
      icon: "shield",
      title: "24/7 Uptime Monitoring",
      description: "We monitor your site around the clock. If something breaks, we fix it before you even notice."
    },
    {
      icon: "flash",
      title: "Unlimited Revisions",
      description: "Need changes? Updates? Tweaks? Make as many requests as you want—all included in your plan."
    }
  ];

  const maintenanceFeatures = [
    {
      icon: "shield",
      title: "Security & Updates",
      items: [
        "Daily security scans",
        "Software updates & patches",
        "SSL certificate management",
        "Malware protection",
        "Firewall configuration"
      ]
    },
    {
      icon: "flash",
      title: "Performance Optimization",
      items: [
        "Speed optimization",
        "Image compression",
        "Database optimization",
        "Cache management",
        "CDN configuration"
      ]
    },
    {
      icon: "support",
      title: "Support & Backups",
      items: [
        "Priority email support",
        "Daily backups",
        "1-hour response time",
        "Monthly reports",
        "Uptime monitoring"
      ]
    }
  ];

  const growthFeatures = [
    {
      icon: "puzzle",
      title: "Everything in Maintenance, Plus:",
      items: [
        "5 hours of development per month",
        "Monthly optimization & improvements",
        "Conversion rate optimization",
        "A/B testing & analytics",
        "Strategic consulting calls"
      ]
    },
    {
      icon: "chart",
      title: "Growth-Focused Support",
      items: [
        "Unlimited content updates",
        "New page creation",
        "Feature additions",
        "Design refinements",
        "Priority phone support"
      ]
    },
    {
      icon: "dollar",
      title: "ROI Tracking",
      items: [
        "Monthly performance reports",
        "Conversion tracking setup",
        "Goal tracking & analytics",
        "Competitor analysis",
        "Growth recommendations"
      ]
    }
  ];

  const comparison = [
    { feature: "Security Updates", maintenance: true, growth: true },
    { feature: "Daily Backups", maintenance: true, growth: true },
    { feature: "Uptime Monitoring", maintenance: true, growth: true },
    { feature: "Email Support", maintenance: true, growth: true },
    { feature: "Monthly Reports", maintenance: true, growth: true },
    { feature: "Development Hours/Month", maintenance: "0", growth: "5" },
    { feature: "Unlimited Revisions", maintenance: false, growth: true },
    { feature: "Priority Phone Support", maintenance: false, growth: true },
    { feature: "Strategic Consulting", maintenance: false, growth: true },
    { feature: "ROI Tracking & Reports", maintenance: false, growth: true },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                ✨ 100% Satisfaction Guarantee
              </div>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Forte Care™
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-4">
                Your website shouldn't be a worry. We handle everything so you can focus on growing your business.
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Starting at $250/month — Unlimited revisions, 24/7 monitoring, and complete peace of mind.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started with Forte Care™
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* 100% Guarantee Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Our 100% Satisfaction Guarantee
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We're not happy unless you're thrilled. That's why every Forte Care™ plan comes with our ironclad guarantee.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {guaranteeFeatures.map((feature, index) => (
                <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                      <Icon name={feature.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Choose Your Forte Care™ Plan
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Both plans include our 100% satisfaction guarantee. Cancel anytime.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Maintenance Plan */}
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Maintenance
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">$250</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Perfect for businesses that want peace of mind without lifting a finger
                    </p>
                  </div>

                  <div className="flex-grow space-y-6 mb-8">
                    {maintenanceFeatures.map((category, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Icon name={category.icon} className="w-5 h-5 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                        </div>
                        <ul className="space-y-2 ml-12">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </SimpleScrollReveal>

              {/* Growth Partner Plan */}
              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border-2 border-blue-600 h-full flex flex-col relative shadow-xl">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Growth Partner
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">$750</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      For businesses serious about growth—includes unlimited revisions & ongoing optimization
                    </p>
                  </div>

                  <div className="flex-grow space-y-6 mb-8">
                    {growthFeatures.map((category, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                            <Icon name={category.icon} className="w-5 h-5 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                          </div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                        </div>
                        <ul className="space-y-2 ml-12">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="block text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Plan Comparison
              </h2>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Maintenance</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">Growth Partner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {comparison.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.maintenance === 'boolean' ? (
                            row.maintenance ? (
                              <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-400">{row.maintenance}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {typeof row.growth === 'boolean' ? (
                            row.growth ? (
                              <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            )
                          ) : (
                            <span className="text-sm text-gray-600 dark:text-gray-400">{row.growth}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready for Complete Peace of Mind?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join the businesses that never worry about their website. 100% satisfaction guaranteed or your money back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-200"
                >
                  View FAQ
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
