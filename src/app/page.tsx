"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import SimpleAnimatedCounter from '@/components/animations/SimpleAnimatedCounter';


// Lazy load non-critical components for better performance
const GrowthSnapshotForm = lazy(() => import("@/components/GrowthSnapshotForm"));
const ContactForm = lazy(() => import("@/components/ContactForm"));
const InteractiveMap = lazy(() => import("@/components/InteractiveMap"));
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export default function Home() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);
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
      }, 250); // Half-second fade out, then change word and fade in
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Service lanes data
  const serviceLanes = [
    {
      icon: "puzzle",
      title: "Automation",
      subtitle: "Get your team out of the weeds",
      description: "The repetitive work eating up your week - lead routing, follow-ups, data entry, reporting - handled automatically. We build with n8n, Make.com, and Zapier, or direct API integrations when off-the-shelf doesn't cut it.",
      link: "/services/automation-ai"
    },
    {
      icon: "flash",
      title: "CRM & Integrations",
      subtitle: "One source of truth instead of three conflicting ones",
      description: "Your CRM says one thing, your spreadsheet says another. We connect GoHighLevel, HubSpot, Salesforce, and your other tools so data flows automatically and you stop arguing about which number is right.",
      link: "/services/integrations"
    },
    {
      icon: "code",
      title: "Custom Software Development",
      subtitle: "Built for how your business actually works",
      description: "Custom dashboards, inventory systems, internal tools, and applications built from scratch. No generic templates. No platform limitations. Software that fits your operations, not the other way around.",
      link: "/services/custom-software"
    },
    {
      icon: "shield",
      title: "Security & Infrastructure",
      subtitle: "Enterprise security without enterprise pricing",
      description: "SSO and MFA implementation using FusionAuth, Keycloak, or the right tool for your stack. Identity management, access control, and the infrastructure you need to meet compliance requirements.",
      link: "/services/security"
    }
  ];

  // 4-step process data
  const processSteps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We talk about what's slowing you down and whether we can help. Honest assessment, no pitch."
    },
    {
      number: "2",
      title: "Custom Strategy",
      description: "You get a detailed proposal with scope, timeline, investment, and ROI calculation. For complex projects, we start with a paid discovery phase - we prove the approach works before you commit to the full build. No vague promises. No guessing."
    },
    {
      number: "3",
      title: "Build & Deploy",
      description: "We build, test, and deploy. Training and documentation included so you're not dependent on us."
    },
    {
      number: "4",
      title: "Ongoing Optimization",
      description: "Available if you want it. Not required if you don't. We're here when you need us."
    }
  ];

  // Trust pillars data
  const trustPillars = [
    {
      icon: "shield",
      title: "We Tell You When You Shouldn't Automate",
      description: "We turn down projects that don't make sense. If fixing your process is smarter than building something new, we'll tell you."
    },
    {
      icon: "flash",
      title: "Your ROI Is Measured in Weeks, Not Years",
      description: "Most projects pay for themselves in 4-8 weeks. Fast, measurable results."
    },
    {
      icon: "star",
      title: "You Work With Who You Hired",
      description: "No account managers. No junior developers. No bait-and-switch. You work directly with Seth."
    },
    {
      icon: "support",
      title: "We Lead With Generosity",
      description: "Every proposal includes a complete project plan with gotchas, hidden costs, and clear scope. For complex projects, we prove the approach works before you commit to the full build."
    }
  ];

  // Resources preview data
  const resourcesPreview = [
    {
      type: "BLOG POST",
      title: "Why Your Lead Routing Is Costing You $50K Annually (And How to Fix It)",
      link: "/blog/automated-lead-management"
    },
    {
      type: "BLOG POST",
      title: "The Sales Automation That Actually Closes Deals (Not Generic Zapier Workflows)",
      link: "/blog/sales-automation-guide"
    },
    {
      type: "BLOG POST",
      title: "Your Customers Are Leaving Because You're Not Following Up Fast Enough",
      link: "/blog/automate-customer-engagement"
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
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-5xl mx-auto w-full">
                {/* Proof Strip */}
                <div className="flex justify-center items-center mb-6 sm:mb-8">
                  <a
                    href="https://share.google/btyoifpiN3EEAGh1u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">5.0★ rated on Google</span>
                  </a>
                </div>

                {/* Hero Headline */}
                <h1
                  className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] text-gray-900 dark:text-white mb-4 sm:mb-6 px-1 sm:px-2"
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
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  We solve the technical problems that hold growing businesses back. Automation, integrations, custom software, and the infrastructure you need to scale.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                  <Link
                    href="/contact"
                    onClick={() => handleCTAClick('primary', 'hero')}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                  >
                    Talk to Our Team
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="#service-lanes"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base"
                  >
                    See How We Help
                    <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>


        {/* Service Lanes */}
        <section id="service-lanes" className="py-10 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                  What We Do
                </h2>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 text-left">
                    We start by understanding what the problem is costing you - hours, risk, missed opportunities. Once we know that, everything else follows, including exactly when you'll see your investment back. The technical build is the easy part.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 lg:auto-rows-fr">
              {serviceLanes.map((service, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full group flex flex-col min-h-0 sm:min-h-[280px] lg:min-h-[320px]">
                    <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon name={service.icon} className="w-5 h-5 sm:w-7 sm:h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <h4 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {service.subtitle}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6 flex-grow">
                      {service.description}
                    </p>

                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group-hover:gap-3 mt-auto text-sm sm:text-base"
                    >
                      Learn more
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section id="snapshot-process" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-3 sm:mb-4">
                  How We Work
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  A simple process that gets results
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 sm:auto-rows-fr">
              {processSteps.map((step, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full text-center flex flex-col sm:min-h-[240px] lg:min-h-[280px]">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3 sm:mb-4 mx-auto">
                      <span className="text-base sm:text-lg font-bold text-primary-600 dark:text-primary-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed flex-grow" style={{hyphens: 'none', wordBreak: 'normal'}}>
                      {step.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>



        {/* Trust Section */}
        <section id="trust" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Why Clients Choose Forte
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
                  We optimize for relationships, not transactions. Here's what that means.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 md:auto-rows-fr">
              {trustPillars.map((pillar, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-center h-full flex flex-col min-h-0 sm:min-h-[260px] lg:min-h-[280px]">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                      <Icon name={pillar.icon} className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg lg:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="py-10 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Real Results
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
                  See what we've built and the outcomes clients got.
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Featured Case Study: CR Deals */}
            <SimpleScrollReveal direction="up" delay={100}>
              <Link href="/case-studies/fast-track-auction" className="block group mb-6 sm:mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 border-2 border-blue-200 dark:border-blue-700 hover:shadow-2xl transition-all duration-300 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">E-commerce</span>
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">AI Automation</span>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        CR Deals Cincinnati
                      </h3>
                      <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-semibold mb-3 sm:mb-4">
                        $52K annual savings - product listings that generate themselves
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                        Auction house was drowning in manual product listing work. We built an AI system that handles photography analysis, content generation, and distribution across sales channels. Runs around the clock without anyone touching it.
                      </p>
                      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-blue-600 dark:text-blue-400">1,040+</div>
                          <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Hours saved annually</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">$52K</div>
                          <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Annual savings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">24/7</div>
                          <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Autonomous</div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4">
                        <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base">
                          Watch the walkthrough
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                        <span className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-semibold group-hover:text-blue-600 text-sm sm:text-base">
                          Read full case study
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SimpleScrollReveal>

            {/* Case Study Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {/* Modern Bungalow */}
              <SimpleScrollReveal direction="up" delay={150}>
                <Link href="/case-studies/modern-bungalow" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">E-commerce</span>
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">Shopify</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Modern Bungalow
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      Customer communication that runs itself - 15+ hours monthly back
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Denver furniture retailer manually sending 30-40 customer emails daily. We built a system that monitors Shopify orders and sends the right email automatically across 9 different scenarios.
                    </p>
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic">
                        "Very good at thinking through the logic of how to best automate a process."
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>

              {/* Hollow Bamboo */}
              <SimpleScrollReveal direction="up" delay={200}>
                <Link href="/case-studies/hollow-bamboo" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">Operations</span>
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300">Inventory</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Hollow Bamboo Film Productions
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      Complete equipment visibility - 20+ hours weekly back
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Film production company tracking hundreds of items across 6 locations with paper lists. We built a custom inventory system with QR code mobile access and real-time sync.
                    </p>
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic">
                        "Extremely attentive and responsive. Gave us an accurate timeline and met it."
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>

              {/* Revolut */}
              <SimpleScrollReveal direction="up" delay={250}>
                <Link href="/case-studies/revolut" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">Fintech</span>
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">AI Analytics</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Revolut
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      £4M growth opportunity uncovered in weeks instead of months
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Needed to analyze 200,000+ transactions to find profitability drivers. We built an AI system that automated the entire analysis. What took weeks now takes hours.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-3 sm:mb-4">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">200K+</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">Transactions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">90%</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">Faster</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>

              {/* Prediction Market Trader */}
              <SimpleScrollReveal direction="up" delay={300}>
                <Link href="/case-studies/prediction-market-trader" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300">AI</span>
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">Data Automation</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Prediction Market Trader
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      Hundreds of markets analyzed daily - research that runs while you sleep
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Trader manually researching earnings outcomes for hundreds of markets. We built a pipeline that pulls data, runs AI forecasting, and outputs decision-ready analysis automatically.
                    </p>
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic">
                        "Figured it out quickly and got everything working smoothly."
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>

              {/* Kingfisher Ads */}
              <SimpleScrollReveal direction="up" delay={350}>
                <Link href="/case-studies/marketing-agency-reporting" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300">Agency</span>
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300">Reporting</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Kingfisher Ads
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      Monthly reporting in 15 minutes instead of half a day
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Agency owner manually pulling ad spend from Meta and Google Ads every month. We built a system that pulls from both platforms, calculates fees per client, and outputs invoice-ready reports.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-3 sm:mb-4">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-green-600 dark:text-green-400">15 min</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">vs 2-4 hours</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">Auto</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">On the 1st</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>

              {/* KlnBros Agency */}
              <SimpleScrollReveal direction="up" delay={400}>
                <Link href="/case-studies/german-marketing-agency" className="block group h-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full flex flex-col">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300">Emergency Recovery</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      KlnBros Agency
                    </h3>
                    <p className="text-sm sm:text-base text-blue-600 dark:text-blue-400 font-semibold mb-2 sm:mb-3">
                      From 'everything is down' to fully operational in 2 hours
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow">
                      Client's server hit 100% disk full. Docker crashed. Entire automation infrastructure down. We diagnosed remotely, found a creative solution, and restored all 43 workflows in 2 hours.
                    </p>
                    <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm italic">
                        "Communication was 10/10. I felt very safe throughout the entire project."
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch video
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium group-hover:text-blue-600">
                        View case study
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>
            </div>

            {/* See More CTA */}
            <SimpleScrollReveal direction="up" delay={450}>
              <div className="text-center">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  See More Case Studies
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Resources Preview */}
        <section id="resources" className="py-10 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Learn & Grow
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 md:auto-rows-fr">
              {resourcesPreview.map((resource, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={resource.link} className="h-full block">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col group min-h-0 sm:min-h-[180px] lg:min-h-[200px]">
                      <div className="text-[10px] sm:text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">
                        {resource.type}
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-grow">
                        {resource.title}
                      </h3>

                      <div className="text-sm sm:text-base text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors mt-auto">
                        Read blog →
                      </div>
                    </div>
                  </Link>
                </SimpleAnimatedCard>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <Link
                  href="/blog"
                  className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                >
                  All articles →
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Contact Section with Form and Map */}
        <section id="contact-section" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                  Ready to Start?
                </h2>
                <div className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 space-y-4">
                  <p>
                    Got a technical problem holding your business back? Let's talk.
                  </p>
                  <p>
                    If we can help, you'll know exactly when you'll see your investment back. If we can't, we'll tell you.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              {/* Contact Form */}
              <div>
                <Suspense fallback={<div className="h-72 sm:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>}>
                  <ContactForm />
                </Suspense>
              </div>

              {/* Calendar Widget */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="flex items-start gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="star" className="w-5 h-5 sm:w-6 sm:h-6" style={{filter: 'brightness(0) saturate(100%) invert(38%) sepia(95%) saturate(2533%) hue-rotate(207deg) brightness(101%) contrast(101%)'}} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                      Schedule a Strategy Call
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Book a free 30-minute consultation to discuss your business goals and how we can help.
                    </p>
                  </div>
                </div>
                <Suspense fallback={<div className="h-72 sm:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>}>
                  <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
                </Suspense>
              </div>
            </div>

            {/* Map - Smaller and Below */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-[200px] sm:h-[250px] lg:h-[300px]">
                <Suspense fallback={<div className="h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>}>
                  <InteractiveMap />
                </Suspense>
              </div>
              <div className="text-center mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Serving businesses nationwide
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Snapshot Form Modal */}
        {showGrowthSnapshotForm && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-hidden">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 mx-auto">
                <div className="animate-spin w-6 sm:w-8 h-6 sm:h-8 border-4 border-primary-600 border-t-transparent rounded-full mx-auto"></div>
              </div>
            </div>
          }>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-hidden">
              <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-auto">
                <div className="p-4 sm:p-6 w-full">
                  <div className="flex justify-between items-start mb-4 sm:mb-6 w-full">
                    <h3 className="font-display font-bold text-lg sm:text-2xl text-gray-900 dark:text-white pr-4 flex-1 min-w-0">
                      Get Your Free Growth Snapshot
                    </h3>
                    <button
                      onClick={() => setShowGrowthSnapshotForm(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 flex-shrink-0 ml-2"
                      aria-label="Close modal"
                    >
                      <Icon name="x" className="w-5 sm:w-6 h-5 sm:h-6" />
                    </button>
                  </div>
                  
                  <GrowthSnapshotForm 
                    onSubmit={() => setShowGrowthSnapshotForm(false)}
                  />
                </div>
              </div>
            </div>
          </Suspense>
        )}
      </div>
    </>
  );
}
