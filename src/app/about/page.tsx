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

  const differentiators = [
    {
      icon: "⚡",
      title: "Built for Speed & SEO",
      description: "Faster websites don't just load better - they rank higher in search results, convert more visitors, and reduce advertising costs through better user experience."
    },
    {
      icon: "🔐", 
      title: "Stable and Secure",
      description: "No WordPress plugins to manage, no surprise security issues. Just clean, hand-coded websites built to run reliably and securely for years."
    },
    {
      icon: "🧭",
      title: "Designed for Your Industry", 
      description: "Whether you're a Dallas plumber, Fort Worth pediatrician, or any business nationwide, we build with your target audience in mind - not a generic template approach."
    },
    {
      icon: "🎯",
      title: "Focused on Business Results",
      description: "Every website is mapped to real business goals - phone calls, online bookings, sales inquiries. Not just traffic and vanity metrics."
    }
  ];

  const methodSteps = [
    {
      step: "1",
      title: "Business Foundation Analysis",
      description: "We learn about your business, your customers, your local market, and your competitors before we ever write a line of code or design a single page.",
      example: "Mike's HVAC discovered key competitor gaps we used to shape his messaging and service positioning."
    },
    {
      step: "2", 
      title: "Strategic Content Outline",
      description: "We map out content strategy, site structure, and user experience flows to match your business goals and customer behavior patterns.",
      example: "Bella's Boutique restructured her homepage navigation to boost online sales conversions by 40%."
    },
    {
      step: "3",
      title: "Design & Development Review", 
      description: "You review a live homepage design and we fine-tune the entire website together during collaborative video calls until it's perfect.",
      example: "A local tech firm dropped page load times by 80% after moving away from their previous WordPress setup."
    },
    {
      step: "4",
      title: "Custom Code Implementation",
      description: "We hand-code every page and feature - optimized for mobile responsiveness, page speed, search engine optimization, and smooth user experience.",
      example: "Sunrise Veterinary went live with a fully mobile-optimized site and built-in appointment booking system."
    },
    {
      step: "5",
      title: "Launch & Growth Optimization",
      description: "After launch, we track website performance and evolve your site as your business grows, adding new features and optimizations.", 
      example: "A local law firm expanded their practice area pages after strong SEO gains in the first 3 months brought 5x more leads."
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
                Websites That Actually <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fit Your Business</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                We don't build generic sites for "everyone." Forte Web Designs specializes in crafting websites with purpose - tailored to your specific industry, your customers, and your growth goals.
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
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  About Forte Web Designs
                </h2>
                <h3 className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                  Hi, I'm Seth - founder of Forte Web Designs.
                </h3>
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
                What Makes Us Different
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Forte Method Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                The Forte Method™
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-5xl mx-auto space-y-12">
            {methodSteps.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="flex flex-col md:flex-row items-start gap-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-blue-800 dark:text-blue-200 font-medium text-sm">
                        <span className="font-semibold">Example:</span> {step.example}
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
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
                Let's Build You a Website That Works Like It Should
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                We'll audit your current site or map out what's possible from scratch - no pressure, just honest advice.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-12 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                <span>📞</span>
                Schedule a Free Strategy Call
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
