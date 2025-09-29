"use client";

import Link from "next/link";
import Head from "next/head";
import { Suspense, lazy } from 'react';
import ContactForm from "@/components/ContactForm";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

// Lazy load CalendlyWidget for better performance
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export default function AboutUs() {
  const statCards = [
    {
      icon: "🇺🇸",
      title: "100% USA-Based Team",
      description: "Local DFW team serving businesses nationwide, direct communication, no outsourcing"
    },
    {
      icon: "💻",
      title: "100% Custom Code",
      description: "Hand-built websites for performance & SEO optimization"
    },
    {
      icon: "🙌",
      title: "100% Customer-First",
      description: "Your business success is our top priority"
    }
  ];

  const growthLayers = [
    {
      icon: "🏗️",
      title: "Foundation",
      subtitle: "Custom Website Design",
      description: "Your conversion-optimized website that captures leads and showcases your expertise."
    },
    {
      icon: "�", 
      title: "Growth Layer",
      subtitle: "Smart Automation & Follow-Up",
      description: "Automated systems that follow up instantly and nurture leads while you focus on your business."
    },
    {
      icon: "⚡",
      title: "Scaling Layer", 
      subtitle: "Business Systems Integration",
      description: "Advanced integrations and dashboards that give you complete visibility and control."
    },
    {
      icon: "🔧",
      title: "Ongoing Forte Care™",
      subtitle: "Continuous Optimization & Support",
      description: "Regular updates, performance monitoring, and strategic improvements to maximize results."
    }
  ];



  const industries = [
    {
      icon: "🏠",
      title: "Local Service Businesses",
      description: "Contractors, plumbers, electricians, HVAC technicians, real estate agents, and home service professionals throughout DFW"
    },
    {
      icon: "🧠",
      title: "Professional Services", 
      description: "Consultants, legal practices, financial advisors, healthcare providers, and medical practices across Dallas Fort Worth"
    },
    {
      icon: "🛍️",
      title: "Retail & Hospitality Businesses",
      description: "Restaurants, salons, boutiques, and specialty shops"
    },
    {
      icon: "🎓",
      title: "Education & Nonprofits",
      description: "Online training, schools, ministries, and community brands"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Head>
        <title>About Forte Web Designs | DFW-Based Web Design Team Serving Businesses Nationwide | Forte Web Designs</title>
        <meta name="description" content="Meet the DFW-based team behind Forte Web Designs. 100% USA-based, custom code specialists serving businesses nationwide with industry-specific websites designed for results, not just looks." />
        <meta name="keywords" content="about forte web designs, DFW web design team, custom web development team, USA-based web designers, professional web design company" />
        <link rel="canonical" href="https://fortewebdesigns.com/about" />
      </Head>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
        <SectionBackgroundAnimation className="opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-black dark:text-white mb-6">
                About Forte — Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business Growth Systems Partner</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Forte Web Designs started as a custom web design agency in Grapevine, Texas. Today, we've evolved into a Business Growth Systems Partner — helping service-based businesses nationwide capture more leads, book more appointments, and scale operations with predictable, measurable results.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                  We believe business growth isn't luck — it's a system. That's why we build more than websites. We create complete growth systems: websites that convert, automated follow-up that never sleeps, and integrated dashboards that give you clarity and control.
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About Forte Web Designs
                </h3>
                <h4 className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                  Hi, I'm Seth - founder of Forte Web Designs.
                </h4>
              </div>
            </SimpleScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SimpleScrollReveal direction="left" delay={300}>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I started this company because I kept seeing hardworking business owners get stuck with websites that didn't reflect who they are or what they do. They'd hire someone, get something that looked fine at first - but underneath, it didn't support their business, didn't attract the right customers, and wasn't built to last.
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    That's not good enough.
                  </p>
                  <p>
                    Your business is unique. Your website should be, too.
                  </p>
                  <p>
                    Forte Web Designs designs with intention. We take time to understand your market, your audience, and how people actually buy from businesses like yours. Then we hand-build a site that's fast, secure, easy to update, and built to perform - not just at launch, but for years to come.
                  </p>
                  <p>
                    You'll never be left guessing. You'll never feel like a number. And you'll always know your website was built with your success in mind.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="right" delay={300}>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                            <OptimizedImage
                              src="/images/about/headshot.jpg"
                              alt="Seth, Founder of Forte Web Designs"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                              priority={true}
                              sizes="128px"
                            />
                          </div>
                          {/* Gradient border effect */}
                          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 -z-10"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Seth, Founder</p>
                        <p className="text-gray-500 dark:text-gray-400">Forte Web Designs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Process
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  At Forte, we believe in strategic collaboration. We don't just execute your ideas — we become your growth partner, combining your industry expertise with our systematic approach to build solutions that deliver measurable results.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="space-y-16">
              {/* Step 1: Strategic Discovery & Analysis */}
              <SimpleScrollReveal direction="up" delay={300}>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div className="lg:col-span-10 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      01. Strategic Discovery & Analysis
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      We dive deep into your business ecosystem to understand not just what you want, but what your market demands and how your customers actually behave.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Market Intelligence</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Competitor landscape analysis
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Customer journey mapping
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Industry trend evaluation
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Business Audit</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Current system gaps identification
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Growth bottleneck analysis
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            ROI opportunity mapping
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-l-4 border-blue-500">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Strategic Outcome:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        A comprehensive growth strategy document that identifies your highest-impact opportunities and provides a clear roadmap for measurable results.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>

              {/* Step 2: Custom System Architecture */}
              <SimpleScrollReveal direction="up" delay={400}>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="lg:col-span-10 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      02. Custom System Architecture
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Based on our discovery insights, we architect a complete business growth ecosystem tailored specifically to your market position and growth objectives.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                          Foundation Layer
                        </h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Conversion-optimized website</li>
                          <li>• Brand positioning strategy</li>
                          <li>• SEO architecture</li>
                          <li>• Performance optimization</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                          Automation Layer
                        </h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Lead capture & nurturing</li>
                          <li>• Intelligent follow-up sequences</li>
                          <li>• Appointment booking systems</li>
                          <li>• Customer communication flows</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
                          Intelligence Layer
                        </h4>
                        <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                          <li>• Analytics & reporting dashboards</li>
                          <li>• Performance tracking systems</li>
                          <li>• Business intelligence tools</li>
                          <li>• Growth metrics monitoring</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border-l-4 border-emerald-500">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Implementation Outcome:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        A fully integrated growth system that works 24/7 to capture leads, nurture prospects, and provide actionable insights for continuous optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>

              {/* Step 3: Continuous Optimization & Strategic Growth */}
              <SimpleScrollReveal direction="up" delay={500}>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-2 flex justify-center lg:justify-start">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="lg:col-span-10 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      03. Continuous Optimization & Strategic Growth
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Growth systems require strategic attention and data-driven optimization. We provide ongoing partnership to ensure your system evolves with your business and market conditions.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Performance Monitoring</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Monthly Strategy Reviews</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">Data analysis and optimization recommendations</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Conversion Rate Optimization</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">A/B testing and performance improvements</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Market Adaptation</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">System adjustments based on market changes</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">Scaling Support</h4>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Growth Milestone Planning</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">Strategic roadmap for business expansion</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">System Enhancements</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">New features and capabilities as you grow</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-sm">Forte Care™ Maintenance</p>
                              <p className="text-gray-600 dark:text-gray-400 text-xs">Ongoing technical optimization and security</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-l-4 border-purple-500">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Long-term Partnership:</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        A growth system that compounds results over time, adapts to market changes, and scales with your business ambitions — giving you confidence in your growth trajectory.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>

            {/* Process CTA */}
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Experience Strategic Growth Partnership?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                  Our process isn't just about building solutions — it's about building a growth system that becomes a competitive advantage for your business.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Start Your Strategic Growth Journey
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Stat Cards Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {statCards.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We're Different
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Systems, Not Siloed Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We don't sell one-off campaigns. Every layer is designed to work together for predictable growth.
                </p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Outcome-Focused
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our promise is simple: more booked jobs, more appointments, more revenue.
                </p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🌎</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Local Roots, National Reach
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  DFW-based, serving clients across the country with same-day responses and U.S.-based support.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Growth System Layers Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                4 Growth System Layers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                Each layer builds on the last, giving you a clear path from launch to long-term growth. Start where you are and scale when you're ready.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {growthLayers.map((layer, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{layer.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {layer.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {layer.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Client Results That Matter
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Our clients don't just get new websites — they get measurable results. From doubling service calls in 60 days, to cutting lead response times by 40%, to eliminating no-shows with smart automation — we help small businesses grow with confidence.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Who We Help
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-6">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Ready to see how a growth system could transform your business? Book your free Growth Audit today and let's map out your path to measurable results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-12 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <span>�</span>
                Book My Free Growth Audit
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Book a free 15-minute strategy session to discuss your project goals and see how we can help your business grow.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white text-center">
                    Schedule Your Free Strategy Call
                  </h3>
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>No sales pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Custom strategy session</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Work directly with Seth</span>
                    </div>
                  </div>
                </div>
                <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                  <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
                </Suspense>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
