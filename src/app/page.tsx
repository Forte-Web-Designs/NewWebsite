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

  // What We Build
  const whatWeBuild = [
    {
      title: "Website Foundation",
      description: "Fast, credible, built to convert.",
      link: "/services/web-design",
      linkText: "Learn more →"
    },
    {
      title: "Smart Automation",
      description: "Instant replies, guided quotes, automatic follow-ups.",
      link: "/services/automation-ai", 
      linkText: "Learn more →"
    },
    {
      title: "Dashboards",
      description: "Know what's working; fix what isn't.",
      link: "/solutions",
      linkText: "Learn more →"
    },
    {
      title: "Forte Care™",
      description: "Keep it secure, fast, and improving.",
      link: "/services/forte-care",
      linkText: "Learn more →"
    }
  ];

  // Case Studies
  const caseStudies = [
    {
      title: "Summit Gaming Lounge",
      description: "Faster reservations and deeper engagement without extra headcount."
    },
    {
      title: "MetroEats",
      description: "Faster, higher-quality partner outreach with scalable expansion."
    },
    {
      title: "Fetchly", 
      description: "~15 hours/week saved; cleaner days and faster decisions."
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

        {/* Trusted by strip */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Trusted by 25+ growing businesses
              </p>
              <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity">
                {/* Logo placeholders - these would be actual company logos */}
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-12 bg-gray-300 dark:bg-gray-600 rounded opacity-40 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes in 30-90 Days */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                
                <SimpleAnimatedCard key={index}>
                  <div className="text-center">
                    <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                      {outcome.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeBuild.map((item, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full flex flex-col">
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>
                    <Link 
                      href={item.link}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    >
                      {item.linkText}
                    </Link>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Snapshot */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Get a Free Growth Snapshot
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                We find the 3–4 biggest leaks costing you time and money, then give you two quick wins you can implement now—no meeting required.
              </p>
              
              <ul className="space-y-3 mb-8 text-left max-w-lg mx-auto">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Industry-specific checkup</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">1-page summary + Loom walkthrough</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">Works with your current tools</span>
                </li>
              </ul>

              <DarkButton 
                onClick={() => {
                  handleCTAClick('primary', 'snapshot-section');
                  window.location.href = '/checkup/';
                }}
                className="px-8 py-4 text-lg"
              >
                Get my Free Growth Snapshot
              </DarkButton>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {caseStudies.map((study, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full flex flex-col">
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {study.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                href="/case-studies"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
              >
                See all case studies →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
