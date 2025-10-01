"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import SimpleAnimatedCounter from '@/components/animations/SimpleAnimatedCounter';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import TrustedCompaniesCarousel from "@/components/TrustedCompaniesCarousel";

// Lazy load non-critical components for better performance
const GrowthSnapshotForm = lazy(() => import("@/components/GrowthSnapshotForm"));

export default function Home() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);
  
  // Rotating words for the hero
  const rotatingWords = ["Data.", "Measurable.", "A System.", "Results."];

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

  // Core features data
  const coreFeatures = [
    {
      icon: "code",
      title: "Custom AI & Automation Engineering",
      subtitle: "We design, deploy, and maintain automations and AI assistants specifically tailored to your business growth goals.",
      link: "/services/ai-automation"
    },
    {
      icon: "flash",
      title: "Fully Managed Automation Pipelines",
      subtitle: "Robust workflows that connect your CRM, scheduling, invoicing, and communication tools into one system that saves you hours every week.",
      link: "/services/automation-pipelines"
    },
    {
      icon: "dollar",
      title: "Performance & Analytics Dashboards",
      subtitle: "Track ROI, conversion rates, and pipeline metrics in a clear, owner-friendly dashboard — no spreadsheets required.",
      link: "/services/analytics-dashboards"
    },
    {
      icon: "services",
      title: "Web Design (Foundation Layer)",
      subtitle: "Custom-coded websites (no WordPress) built for speed, clarity, and lead capture. A strong foundation for every growth system.",
      link: "/services/web-design"
    },
    {
      icon: "puzzle",
      title: "Integrations & Access Control",
      subtitle: "We connect the tools you already use and ensure smooth, secure handoffs between teams. Control access and permissions with confidence.",
      link: "/services/integrations"
    },
    {
      icon: "clean",
      title: "Secure & Compliant Infrastructure",
      subtitle: "Your growth system is hosted in the cloud with best-practice security and compliance standards — built to scale as you grow.",
      link: "/services/infrastructure"
    }
  ];



  // Recent outcomes data
  const recentOutcomes = [
    {
      company: "Summit Gaming Lounge",
      subtitle: "AI-Powered Concierge System",
      challenge: "Manual game reservations and group coordination slowed operations.",
      solution: "Omnichannel AI concierge across SMS, Discord & Telegram.",
      outcome: "Faster reservations, deeper member engagement,",
      details: "and scalable growth without extra staff.",
      anchor: "summit-gaming-lounge"
    },
    {
      company: "MetroEats", 
      subtitle: "AI-Powered Lead Discovery",
      challenge: "Partner restaurant outreach was slow and manual.",
      solution: "Automated lead discovery + web crawl enrichment.",
      outcome: "Accelerated partner onboarding, higher-quality leads,",
      details: "and scalability into new cities.",
      anchor: "metroeats"
    },
    {
      company: "Fetchly",
      subtitle: "Executive Assistant in Slack", 
      challenge: "Leadership drowning in emails, scheduling, and project updates.",
      solution: "Slack-native AI assistant integrated with Gmail, Calendar, and monday.com.",
      outcome: "15+ hours/week saved, faster decisions,",
      details: "and streamlined team productivity.",
      anchor: "fetchly"
    },
    {
      company: "ClearWater Systems",
      subtitle: "AI-Driven Quoting & CRM Automation", 
      challenge: "Manual quotes caused long delays and lost deals.",
      solution: "Smart email agent, automated quoting, and CRM sync.",
      outcome: "Faster quotes, cleaner CRM data,",
      details: "and higher close rates.",
      anchor: "clearwater-systems"
    }
  ];

  // Outcomes data for the simplified section
  const outcomes = [
    {
      title: "Time back",
      description: "Reclaim hours each week across intake, quoting, and follow-up."
    },
    {
      title: "Faster response", 
      description: "Minutes, not days—across forms, calls, and chat."
    },
    {
      title: "Reliable follow-through",
      description: "Consistent nudges until conversations resolve."
    },
    {
      title: "Owner visibility",
      description: "One dashboard of leads, quotes, and stuck points."
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
            "@type": "Organization",
            "name": "Forte Web Designs",
            "url": "https://fortewebdesigns.com",
            "logo": "https://fortewebdesigns.com/images/forte-logo.png",
            "description": "DFW-based business growth systems company. We install Lead Catcher™, Quote Builder™, and Owner's Console™ systems.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Grapevine", 
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/forte-web-designs",
              "https://www.facebook.com/fortewebdesigns"
            ],
            "areaServed": ["US", "DFW", "Dallas", "Fort Worth"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "47"
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
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-5xl mx-auto w-full">
                {/* Badges Row */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-full px-2">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="location" className="w-3 sm:w-4 h-3 sm:h-4 text-primary-600 flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">DFW-based</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="flash" className="w-3 sm:w-4 h-3 sm:h-4 text-primary-600 flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">24-hr response</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="star" className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">4.9★ Google reviews</span>
                  </div>
                </div>

                {/* Rotating Headline */}
                <h1 
                  className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900 dark:text-white mb-4 sm:mb-6 px-2 max-w-full"
                  style={{ contain: 'layout', wordWrap: 'break-word' }}
                >
                  <span className="block sm:inline">Business Growth Isn't Guesswork.</span>{" "}
                  <span className="block sm:inline">It's{" "}</span>
                  <span 
                    className={`inline-block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-opacity duration-250 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      minWidth: '160px',
                      width: 'fit-content',
                      display: 'inline-block',
                      textAlign: 'center'
                    }}
                    aria-live="polite"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </h1>

                {/* Subheadline */}
                <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 max-w-full">
                  Catch every opportunity. Respond faster. Win more jobs.
                </h2>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 max-w-full">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'hero');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-6 sm:px-6 lg:px-8 py-4 sm:py-4 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-full min-w-0 text-center"
                  >
                    Get My Free Growth Snapshot →
                  </DarkButton>
                  <a 
                    href="#how-it-works"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="inline-flex items-center justify-center px-6 sm:px-6 lg:px-8 py-4 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto max-w-full min-w-0 min-h-[44px] text-center"
                  >
                    <span className="truncate text-center">See How It Works</span>
                    <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Everything You Need In One Place - 6 Core Features */}
        <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
                  Outcomes in 30–90 Days
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
                  Reclaim 5–20 hours per week, respond in minutes not days, and get 90–100% follow-up coverage without manual chasing.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-full">
              {coreFeatures.map((feature, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={feature.link}>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                      <Icon name={feature.icon} className="w-10 sm:w-12 h-10 sm:h-12 text-primary-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                      
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                        {feature.subtitle}
                      </p>
                      
                      <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 text-sm sm:text-base">
                        Learn more →
                      </div>
                    </div>
                  </Link>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>



        {/* Trusted Companies Carousel */}
        <TrustedCompaniesCarousel />

        {/* Growth Snapshot CTA */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <SimpleScrollReveal direction="left">
                <div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                    Get Your Growth Snapshot
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                    Your <strong>Growth Snapshot</strong> reveals the 3–4 biggest leaks in your business and gives you two quick fixes you can apply immediately.
                  </p>

                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                    What we check depends on your industry:
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 max-w-full">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 sm:p-6 text-center max-w-full">
                      <Icon name="services" className="w-6 sm:w-8 h-6 sm:h-8 text-primary-600 mx-auto mb-3 sm:mb-4" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2 sm:mb-3">Service Businesses</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Contractors, healthcare, real estate</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">We check missed calls, slow quotes, and weak follow-ups that cost you booked jobs.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 sm:p-6 text-center max-w-full">
                      <Icon name="bag" className="w-6 sm:w-8 h-6 sm:h-8 text-primary-600 mx-auto mb-3 sm:mb-4" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2 sm:mb-3">E-commerce & Retail</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Online stores, retail shops</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">We check cart abandonment, slow checkouts, and weak repeat-purchase systems that cost you sales.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1 max-w-full">
                      <Icon name="company" className="w-6 sm:w-8 h-6 sm:h-8 text-primary-600 mx-auto mb-3 sm:mb-4" />
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2 sm:mb-3">Professional Services</h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1 sm:mb-2">Legal, consulting, finance</p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">We check intake speed, scheduling gaps, and retention drops that cost you clients.</p>
                    </div>
                  </div>

                  <div className="text-center mb-6 sm:mb-8">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
                      We also work with gyms, education, nonprofits, and more — the Growth Snapshot adapts to any business model.
                    </p>
                  </div>

                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-3 sm:mb-4">
                    📊 Results You'll Get:
                  </h3>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Clear view of where money & time are leaking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Two quick fixes to start closing the gap</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Confidence in what to prioritize next</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4 sm:pt-6 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-start sm:items-center gap-3">
                      <Icon name="check" className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-1 sm:mt-0" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">100% free. No meeting required.</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-3">
                      <Icon name="download" className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-1 sm:mt-0" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Delivered as a 1-page PDF + short Loom video.</span>
                    </div>
                    <div className="flex items-start sm:items-center gap-3">
                      <Icon name="puzzle" className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-1 sm:mt-0" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Works with your current tools — no rip-and-replace.</span>
                    </div>
                  </div>

                  <div className="flex justify-center sm:justify-start">
                    <DarkButton 
                      onClick={() => {
                        handleCTAClick('primary', 'snapshot-section');
                        setShowGrowthSnapshotForm(true);
                      }}
                      className="px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg w-full sm:w-auto text-center"
                    >
                      Get my Free Growth Snapshot →
                    </DarkButton>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 text-center sm:text-left">
                    We'll only use your info to prepare your snapshot. No spam.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="right">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg text-center h-full flex flex-col justify-center mt-8 lg:mt-0">
                  <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-6 sm:mb-8">
                    Ready to see your gaps?
                  </h3>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 flex-grow flex flex-col justify-center">
                    <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">📊</div>
                    <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white mb-4 sm:mb-6">
                      Your Growth Snapshot
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                      We analyze your current systems and identify the 3-4 biggest opportunities for growth.
                    </p>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <span>Industry-specific analysis</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <span>Actionable recommendations</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                        <span>Quick-win implementation guide</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <DarkButton 
                      onClick={() => {
                        handleCTAClick('primary', 'snapshot-preview');
                        setShowGrowthSnapshotForm(true);
                      }}
                      className="w-full px-6 sm:px-8 py-4 sm:py-4 text-base sm:text-lg text-center"
                    >
                      Get My Free Growth Snapshot →
                    </DarkButton>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Recent Outcomes */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-3 sm:mb-4 px-2">
                  Proof in Practice
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 px-2 mb-6">
                  See how our growth systems deliver measurable outcomes across industries.
                </p>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors group"
                >
                  See Our Results
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 max-w-full">
              {recentOutcomes.map((outcome, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={`/results#${outcome.anchor}`}>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow group h-full text-left">
                      <div className="mb-4">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1">
                          {outcome.company}
                        </h3>
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {outcome.subtitle}
                        </p>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 italic">Challenge:</span>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">{outcome.challenge}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 italic">Solution:</span>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">{outcome.solution}</p>
                        </div>
                        
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300 italic">Outcome:</span>
                          <p className="text-gray-900 dark:text-white mt-1">
                            <span className="font-bold text-primary-600 dark:text-primary-400 group-hover:scale-105 transition-transform inline-block">
                              {outcome.outcome}
                            </span>{" "}
                            {outcome.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SimpleAnimatedCard>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="flex justify-center px-2">
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base min-h-[44px] text-center"
                >
                  View All Case Studies
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Core Systems That Power Your Growth */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6 sm:mb-8 px-2">
                  What We Build
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 text-center flex flex-col min-h-0">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🌐</div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Web Design<br /><span className="whitespace-nowrap">(Foundation)</span>
                  </h3>
                  <h4 className="font-semibold text-sm sm:text-base text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">
                    Give customers a reason to say yes.
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    Your site isn't just a brochure — it's the entry point of your growth system. A fast, custom-coded website builds trust instantly and converts clicks into calls.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    📈 <strong>Outcome:</strong> More inquiries, higher trust, stronger first impressions.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 text-center flex flex-col min-h-0">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🤖</div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Smart Automation<br /><span className="whitespace-nowrap">(Efficiency)</span>
                  </h3>
                  <h4 className="font-semibold text-sm sm:text-base text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">
                    Work smarter, not harder.
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    From instant replies to follow-up reminders, <Link href="/services/automation-ai" className="text-primary-600 dark:text-primary-400 hover:underline">AI automation</Link> ensures no lead slips through the cracks. <Link href="/docs/ai-agents" className="text-primary-600 dark:text-primary-400 hover:underline">AI systems</Link> handle the busywork so you can focus on growth.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    📈 <strong>Outcome:</strong> Faster responses, more booked jobs, hours of time saved every week.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 text-center flex flex-col min-h-0">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📊</div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Dashboards & Scaling<br /><span className="whitespace-nowrap">(Clarity)</span>
                  </h3>
                  <h4 className="font-semibold text-sm sm:text-base text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">
                    Know exactly what's working — and what's not.
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    One clear view of leads, quotes, and performance helps you scale without chaos. Our <Link href="/docs/technology-stack" className="text-primary-600 dark:text-primary-400 hover:underline">advanced technology stack</Link> spots bottlenecks and fixes them before they cost you money.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    📈 <strong>Outcome:</strong> Clearer decisions, accountability, and steady growth at scale.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 text-center flex flex-col min-h-0">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⚙️</div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2 sm:mb-3">
                    Forte Care™<br /><span className="whitespace-nowrap">(Upkeep)</span>
                  </h3>
                  <h4 className="font-semibold text-sm sm:text-base text-primary-600 dark:text-primary-400 mb-2 sm:mb-3">
                    Stay fast, secure, and ahead of competitors.
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    Your system doesn't stall — it compounds. With Forte Care™, we keep your site and automations optimized, secure, and updated so they continue driving revenue month after month.
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                    📈 <strong>Outcome:</strong> Zero downtime, steady improvements, and peace of mind while you grow.
                  </p>
                </div>
              </SimpleAnimatedCard>
            </div>

            <SimpleScrollReveal direction="up">
              <div className="flex justify-center px-2">
                <a 
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base min-h-[44px] text-center"
                >
                  See Pricing
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>



        {/* Closing CTA */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
            <SimpleScrollReveal direction="up">
              <p className="text-white/90 text-sm sm:text-base mb-4">
                Serving Dallas-Fort Worth with comprehensive <Link href="/dfw/business-growth-systems" className="text-white hover:underline font-semibold">business growth systems</Link>
              </p>
              <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 sm:mb-8 px-2 max-w-full">
                Ready to stop losing opportunities?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 max-w-full">
                <button
                  onClick={() => {
                    handleCTAClick('primary', 'closing-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-6 lg:px-8 py-4 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors w-full sm:w-auto max-w-full min-w-0 min-h-[44px] text-center"
                >
                  <span className="truncate text-center">Get a Free Growth Snapshot</span>
                </button>
                <a 
                  href="/contact"
                  onClick={() => handleCTAClick('secondary', 'closing-cta')}
                  className="inline-flex items-center justify-center px-6 sm:px-6 lg:px-8 py-4 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto max-w-full min-w-0 min-h-[44px] text-center"
                >
                  <span className="truncate text-center">Talk to Us</span>
                  <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </SimpleScrollReveal>
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
