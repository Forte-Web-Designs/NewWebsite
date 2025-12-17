'use client';

import React from 'react';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import { getCompanyLogo } from '@/components/CompanyLogos';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import ScrollToTop from '@/components/ScrollToTop';
import PlumberLeadModal from '@/components/PlumberLeadModal';
import { usePlumberLeadModal } from '@/hooks/usePlumberLeadModal';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

export default function PlumberPageClient() {
  const { isModalOpen, trigger, openModal, closeModal } = usePlumberLeadModal();

  // Client companies for social proof
  const clientCompanies = [
    { name: "Elite Plumbing Solutions" },
    { name: "Rapid Response Plumbers" },
    { name: "Metro Drain Solutions" },
    { name: "Emergency Pipe Pros" },
    { name: "All Hours Plumbing Co" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first plumbing focus",
      typical: false,
      forte: true
    },
    {
      feature: "Built-in SEO",
      typical: false,
      forte: true
    },
    {
      feature: "Emergency conversion features",
      typical: false,
      forte: true
    },
    {
      feature: "Local search optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Plumbing-specific copywriting",
      typical: false,
      forte: true
    },
    {
      feature: "Fast loading + call buttons",
      typical: false,
      forte: true
    },
    {
      feature: "Unlimited edits included",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you launch my plumber website?",
      answer: "Most plumber websites are live within 7-10 business days. We prioritize emergency-ready features first, so your site starts converting calls immediately."
    },
    {
      question: "Do you understand the plumbing industry?",
      answer: "Absolutely. We've built websites for dozens of plumbing companies and understand emergency call patterns, local SEO for plumbers, and what builds trust with homeowners in crisis situations."
    },
    {
      question: "Will I show up in Google Maps/local search?",
      answer: "Yes! Every plumber website includes local SEO optimization, Google Business Profile setup, and local directory submissions to help you dominate local search results."
    },
    {
      question: "What happens after the website goes live?",
      answer: "We provide ongoing support, updates, and maintenance. Plus, we monitor your site's performance and make improvements to increase your emergency call conversion rates."
    },
    {
      question: "Can you also manage SEO and Ads?",
      answer: "Absolutely! We offer complete digital marketing services including SEO, Google Ads, and social media management specifically designed for plumbing companies."
    },
    {
      question: "Do you offer ongoing updates?",
      answer: "Yes! All plumber websites include unlimited content updates, security monitoring, and technical maintenance. No additional fees for adding new services or updating pricing."
    }
  ];

  const plumberChallenges = [
    {
      icon: "📱",
      title: "Emergency Mobile Searches",
      problem: "73% of plumbing searches happen on mobile",
      solution: "We optimize for thumb-tap calling & load in <2 seconds"
    },
    {
      icon: "🛑",
      title: "Lack of Trust",
      problem: "Users bounce from sites with unclear pricing or licensing",
      solution: "We highlight trust factors (reviews, insurance, transparent pricing)"
    },
    {
      icon: "🗺️",
      title: "Local SEO Competition",
      problem: "You're competing with 50+ plumbers in Google Maps",
      solution: "We rank you locally with SEO, Google Business, and content strategy"
    },
    {
      icon: "🔗",
      title: "Disconnected Vendors",
      problem: "Website guy doesn't talk to SEO guy",
      solution: "With Forte, one team handles everything (site, SEO, support, updates)"
    }
  ];

  const plumberFeatures = [
    {
      icon: "🚨",
      title: "Emergency Call Button",
      description: "Visible on every page with one-tap calling functionality"
    },
    {
      icon: "⭐",
      title: "Google Review Integration",
      description: "Instantly builds trust with prominently displayed reviews"
    },
    {
      icon: "💵",
      title: "Transparent Service Pricing Tables",
      description: "Clear pricing builds trust and reduces price objections"
    },
    {
      icon: "🗺️",
      title: "Local Service Area Map",
      description: "ZIP coverage map showing your service territory"
    },
    {
      icon: "📅",
      title: "Online Booking Form",
      description: "Schedule non-emergency appointments 24/7"
    },
    {
      icon: "🛠️",
      title: "Before/After Service Showcases",
      description: "Photo galleries that demonstrate your quality work"
    },
    {
      icon: "🔐",
      title: "Licensing & Insurance Badges",
      description: "Professional credentials prominently displayed"
    },
    {
      icon: "📱",
      title: "Mobile-Optimized Everything",
      description: "Perfect experience on all devices and screen sizes"
    }
  ];

  const successMetrics = [
    {
      metric: "43%",
      description: "Average increase in emergency calls",
      icon: "📞"
    },
    {
      metric: "67%",
      description: "More qualified leads from mobile",
      icon: "📱"
    },
    {
      metric: "2.3x",
      description: "Higher local search rankings",
      icon: "🎯"
    },
    {
      metric: "89%",
      description: "Client retention rate",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600/50 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🔧 Plumbing Growth Systems
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-cyan-300">More Booked Jobs. Fewer Missed Calls.</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  From 24/7 smart reception to automated follow-ups and easy scheduling, our plumbing growth systems keep jobs flowing while you're still in the field. Track every call, lead, and job in one dashboard.
                </p>
                <div className="bg-blue-800/30 rounded-lg p-4 mb-8">
                  <p className="text-blue-100 font-semibold">
                    <span className="text-yellow-300">✨ Result Highlight:</span> Cut response times by ~40% and book up to 2–3× more jobs in 90 days.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={() => openModal('hero-primary')}
                    className="bg-white text-cyan-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg cursor-pointer"
                  >
                    Book My Free Growth Snapshot
                  </button>
                  <button 
                    onClick={() => openModal('hero-secondary')}
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-700 transition-colors text-center cursor-pointer"
                  >
                    Start My Plumbing System
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📱</span>
                    Mobile-First Emergency Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🤝</span>
                    Smart Reception System
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✉️</span>
                    Automated Follow-Ups
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📅</span>
                    Online Booking + Reminders
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📍</span>
                    Local SEO + Map Pack
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📊</span>
                    Lead Dashboard & CRM
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="text-center">
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    💡 How We Showcase Emergency Services
                  </h3>
                  <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto mb-8">
                    Here's how we'd design your emergency section to stand out, build trust, and capture urgent calls:
                  </p>
                </div>
                
                {/* Static Visual Preview Block */}
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                    {/* Sample Emergency Section */}
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          🚨
                        </div>
                        <div className="text-left">
                          <h4 className="text-gray-800 text-xl font-bold leading-tight">RAPID PLUMBING PROS</h4>
                          <p className="text-red-600 text-sm font-semibold">💧 24/7 Emergency Service</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Services List */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">🛠️</span>
                          <span className="text-gray-800 font-medium">Drain Cleaning</span>
                        </div>
                        <span className="text-blue-600 font-bold">$89+</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-center gap-2">
                          <span className="text-orange-600">🔥</span>
                          <span className="text-gray-800 font-medium">Water Heater</span>
                        </div>
                        <span className="text-orange-600 font-bold">$150+</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center gap-2">
                          <span className="text-red-600">🆘</span>
                          <span className="text-red-600 font-semibold">Emergency</span>
                        </div>
                        <span className="text-red-600 font-bold">CALL NOW!</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="text-center">
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg cursor-default">
                        <span>📞</span>
                        <span>TAP TO CALL NOW →</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Disclaimer */}
                  <p className="text-blue-300 text-sm text-center mt-4 italic">
                    This is a sample layout to demonstrate how your emergency services could be presented.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6">
              Trusted by Local Plumbing Companies:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-start">
              {clientCompanies.map((company, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow h-24 flex flex-col justify-center">
                  <div className="flex justify-center mb-2 flex-1 items-center">
                    {getCompanyLogo(company.name, "plumbing", "w-12 h-12")}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs leading-tight">
                    {company.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Plumbing Website Experts Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Forte &gt; <span className="text-cyan-600">Typical Designers</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Most agencies design for everyone. We design for you. Our plumbing clients convert 2–3x more local leads because their website speaks directly to plumbing customers.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plumberChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-red-600 mb-1">🛑 Problem:</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{challenge.problem}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-green-600 mb-1">✅ Solution:</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{challenge.solution}</div>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Proven Results for Plumbing Companies</h3>
              <p className="text-cyan-100">Real metrics from our plumbing clients in the first 6 months</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-3xl font-bold mb-1">{metric.metric}</div>
                  <div className="text-sm text-cyan-100">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Forte vs Other Designers Comparison */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Forte vs. <span className="text-cyan-600">Other Web Designers</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Most web designers build pretty websites. We build websites that book more plumbing jobs.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-[2fr_1fr_1fr] gap-0">
                {/* Header */}
                <div className="p-6 bg-gray-100 dark:bg-gray-700 border-r border-gray-200 dark:border-gray-600">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">Feature</h3>
                </div>
                <div className="p-6 bg-red-50 dark:bg-red-900/20 border-r border-gray-200 dark:border-gray-600">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white text-center">Typical Designer</h3>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white text-center">Forte Web Design</h3>
                </div>

                {/* Feature Rows */}
                {comparisonFeatures.map((item, index) => (
                  <SimpleAnimatedCard key={index} className="contents">
                    <div className="p-4 border-t border-r border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">{item.feature}</span>
                    </div>
                    <div className="p-4 border-t border-r border-gray-200 dark:border-gray-600 text-center bg-red-25 dark:bg-red-900/10">
                      <span className="text-3xl">{item.typical ? '✅' : '❌'}</span>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600 text-center bg-green-25 dark:bg-green-900/10">
                      <span className="text-3xl">{item.forte ? '✅' : '❌'}</span>
                    </div>
                  </SimpleAnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plumber-Specific Features */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Essential Features for <span className="text-cyan-600">Plumber Websites</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every plumbing website we build includes these conversion-focused features designed specifically for the plumbing industry.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plumberFeatures.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  📈 High Desert Plumbing - Albuquerque
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  67% More Calls in 90 Days
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  One of our New Mexico-based clients came to us with a slow, outdated site. Within 3 months of launching a Forte site, they saw dramatic results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Ranked #1 for "emergency plumber Albuquerque"</div>
                      <div className="text-gray-700 dark:text-gray-300">Dominating local search results</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">67% increase in emergency and weekend calls</div>
                      <div className="text-gray-700 dark:text-gray-300">More customers reaching out during peak revenue hours</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">$7,800/month additional revenue</div>
                      <div className="text-gray-700 dark:text-gray-300">Website paid for itself in the first month</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">30% faster mobile load time</div>
                      <div className="text-gray-700 dark:text-gray-300">Emergency customers get help faster</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-6">
                  <p className="text-gray-800 dark:text-gray-200 italic text-lg">
                    "I didn't realize how many calls we were missing until we launched the new site. It paid for itself in the first month."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    - Owner, High Desert Plumbing Co.
                  </p>
                </div>
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold">
                  View Full Case Study
                  <span>→</span>
                </Link>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Plumbing Results Snapshot</h3>
                  <p className="text-gray-600 dark:text-gray-400">Average across dozens of plumber websites</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-1">43%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">More emergency calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">67%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Increase in mobile leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">2.3x</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Higher local rankings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">89%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Client retention rate</div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Like a Preventative Plumbing Plan, But For Your Website
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You recommend regular maintenance to prevent costly plumbing emergencies, right? Your website needs the same care. Forte Care™ handles ongoing updates, security monitoring, and performance optimization so your digital presence stays reliable and keeps generating emergency calls 24/7.
              </p>
              <button
                onClick={() => openModal('forte-care')}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
              >
                <span>Maintain Your Digital Landscape</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked <span className="text-cyan-600">Questions</span>
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Common questions from plumbing companies about our website services.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="group bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-cyan-600 group-open:rotate-180 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Local Plumbing Search?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join dozens of plumbers who've doubled their emergency call volume with a website tailored for your industry - not some generic template.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => openModal('final-cta-primary')}
                className="bg-white text-cyan-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg cursor-pointer"
              >
                Start My Plumber Website
              </button>
              <button 
                onClick={() => openModal('final-cta-secondary')}
                className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-cyan-700 transition-colors text-center cursor-pointer"
              >
                Get Free Plumbing Website Audit
              </button>
            </div>

            <div className="grid sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                100% Satisfaction Guarantee
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                Mobile-Optimized Design
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                Local SEO Included
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                Based in the USA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <PlumberLeadModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        trigger={trigger}
      />

      {/* Industry-specific CTA functionality */}
      <IndustryLeadCTA 
        industry="plumbers"
        formName="Plumber Inquiry"
        title="Let's Build Your Plumber Website Right"
        subtitle="Tell us about your plumbing business and we'll get back to you within 1 business day. No pressure - just real help from a team that understands your industry."
        mobileCtaText="Ready to fix more leads?"
        mobileCtaSubtext="Get your plumber website today"
        mobileBgGradient="bg-gradient-to-r from-blue-600 to-teal-600"
      />
    </div>
  );
}
