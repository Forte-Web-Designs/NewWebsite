"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);

  // Rotating words for the hero
  const rotatingWords = ["A System", "Using The Right Data", "A Framework", "A Process", "Execution"];

  // Rotating words animation with fade effect and no layout shift
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeInOut(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setFadeInOut(true);
      }, 250);
    }, 2500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Service lanes data - minimal
  const services = [
    {
      icon: "search1",
      title: "Get Found",
      tagline: "SEO, ads, content, outreach.",
      href: "/services/get-found"
    },
    {
      icon: "cursor",
      title: "Capture It",
      tagline: "Funnels, landing pages, booking.",
      href: "/services/capture-it"
    },
    {
      icon: "flash",
      title: "Work the Lead",
      tagline: "CRM, pipeline, follow-up.",
      href: "/services/work-the-lead"
    },
    {
      icon: "puzzle",
      title: "Serve the Customer",
      tagline: "Invoicing, onboarding, operations.",
      href: "/services/serve-the-customer"
    },
    {
      icon: "star",
      title: "Keep and Grow",
      tagline: "Reviews, referrals, reactivation.",
      href: "/services/keep-and-grow"
    },
    {
      icon: "cube",
      title: "See Everything",
      tagline: "Reporting, dashboards, data.",
      href: "/services/see-everything"
    }
  ];

  // Results - minimal one-liners
  const results = [
    {
      client: "CR Deals Cincinnati",
      metric: "$52K/year saved",
      href: "/case-studies/fast-track-auction"
    },
    {
      client: "Modern Bungalow",
      metric: "15 hrs/month back",
      href: "/case-studies/modern-bungalow"
    },
    {
      client: "Revolut",
      metric: "$4M opportunity found",
      href: "/case-studies/revolut"
    },
    {
      client: "Hollow Bamboo",
      metric: "20 hrs/week back",
      href: "/case-studies/hollow-bamboo"
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Seth Forte",
            "alternateName": "Forte Web Designs",
            "url": "https://fortewebdesigns.com",
            "logo": "https://fortewebdesigns.com/images/forte-logo.png",
            "description": "Technical consulting for business automation, CRM integrations, custom software, and security infrastructure",
            "email": "seth@fortewebdesigns.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Grapevine",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "areaServed": [
              "Dallas",
              "Fort Worth",
              "Grapevine",
              "Plano",
              "Arlington",
              "United States"
            ],
            "serviceType": [
              "Business Automation",
              "n8n Consulting",
              "Make.com Consulting",
              "Zapier Consulting",
              "CRM Integration",
              "GoHighLevel Consulting",
              "API Integration",
              "Custom Software Development",
              "SSO Implementation",
              "MFA Implementation",
              "FusionAuth Consulting",
              "Inventory Management Systems"
            ],
            "priceRange": "$$$$",
            "founder": {
              "@type": "Person",
              "name": "Seth Forte",
              "jobTitle": "Technical Consultant"
            },
            "sameAs": [
              "https://www.linkedin.com/company/forte-web-designs",
              "https://www.facebook.com/fortewebdesigns"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "50"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://fortewebdesigns.com"
              }
            ]
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section - KEPT AS-IS */}
        <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                {/* Hero Headline */}
                <h1
                  className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 dark:text-white mb-6"
                >
                  <span className="block sm:inline">Business Growth Isn't Luck.</span>
                  <span className="block sm:inline"> It's{" "}</span>
                  <span
                    className={`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-250 inline-block min-w-[140px] sm:min-w-[180px] ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    aria-live="polite"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  I solve the technical problems that hold growing businesses back. Automation, integrations, custom software... and the infrastructure you need to scale.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Let's Talk
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    See What I Build
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* What I Build - Minimal */}
        <section id="services" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-16 text-center">
                The System Behind Your Business
              </h2>
            </SimpleScrollReveal>

            {/* Mobile/Tablet: 2x2 grid of centered boxes */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {services.map((service, index) => (
                <SimpleScrollReveal key={service.title} direction="up" delay={index * 100}>
                  <Link href={service.href} className="group block p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3">
                        <Icon name={service.icon} className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                      </div>
                      <h3 className="font-semibold text-base text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {service.tagline}
                      </p>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            {/* Desktop: 3-column grid layout */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
              {services.map((service, index) => (
                <SimpleScrollReveal key={service.title} direction="up" delay={index * 100} className="h-full">
                  <Link href={service.href} className="group block h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-5">
                        <Icon name={service.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {service.tagline}
                      </p>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results - Minimal */}
        <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-16 text-center">
                Results
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-6 mb-12">
              {results.map((result, index) => (
                <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                  <Link
                    href={result.href}
                    className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 group hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {result.client}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {result.metric}
                    </span>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <p className="text-center text-sm text-gray-500 dark:text-gray-500 mb-8">
                These systems are still running.
              </p>
              <div className="text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  See all
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Contact Section with Calendly */}
        <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                  Let's Talk
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Book a call and tell me what's not working.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a call with Seth"
                  className="w-full"
                />
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Headshot & Brief */}
              <SimpleScrollReveal direction="up">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                    <OptimizedImage
                      src="/images/about/headshot-6.jpg"
                      alt="Seth Forte"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                    I'm Seth.
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    I build the system your business runs on. The part that connects your tools, automates the manual work, and shows you what's actually working.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    More about me
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>

              {/* Right - Video */}
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
                  <video
                    controls
                    className="w-full"
                  >
                    <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  2-minute intro
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
