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
        <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-5xl mx-auto w-full">
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

                {/* Primary CTA */}
                <div className="mb-6 sm:mb-8">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'hero');
                      window.location.href = '/growth-audit';
                    }}
                    className="px-8 py-4 text-lg font-semibold"
                  >
                    Get My Free Growth Snapshot
                  </DarkButton>
                </div>

                {/* Secondary CTA */}
                <div className="mb-8">
                  <a 
                    href="#how-it-works"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    See How It Works
                  </a>
                </div>

                {/* Trust strip - single line */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1">
                    Trusted by 25+ growing businesses
                  </span>
                  <span className="mx-2">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Icon name="star" className="w-4 h-4 text-yellow-400 fill-current" />
                    4.9★ Google reviews
                  </span>
                </div>

                {/* Compact badges line */}
                <div className="flex justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mt-4">
                  <span className="flex items-center gap-1">
                    <Icon name="location" className="w-3 h-3 text-primary-600" />
                    DFW-based
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="flash" className="w-3 h-3 text-primary-600" />
                    24-hr response
                  </span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Outcomes + Four Pillars Combined */}
        <section id="outcomes-pillars" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Row A - Outcomes bullets */}
            <div className="outcomes mb-16">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                  Your Outcomes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5–20 hrs/week</div>
                    <div className="text-gray-600 dark:text-gray-300">Reclaimed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">Minutes</div>
                    <div className="text-gray-600 dark:text-gray-300">Response time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">90–100%</div>
                    <div className="text-gray-600 dark:text-gray-300">Follow-up coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">One</div>
                    <div className="text-gray-600 dark:text-gray-300">Owner-friendly dashboard</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row B - 4 equal feature cards */}
            <div className="pillars">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {whatWeBuild.map((item, index) => (
                  <SimpleAnimatedCard key={index}>
                    <article className="card bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full flex flex-col" id={`pillar-${index}`}>
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
                    </article>
                  </SimpleAnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free Growth Snapshot - lead capture block */}
        <section id="snapshot-form" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left column */}
                <div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                    Get a Free Growth Snapshot
                  </h2>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start gap-3">
                      <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">Industry-specific checkup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">1-page summary + Loom walkthrough</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">Works with your current tools</span>
                    </li>
                  </ul>
                </div>

                {/* Right column - inline mini form */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-6">Get Started Now</h3>
                  <form className="space-y-4" action="/growth-audit" method="GET">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="https://yoursite.com"
                      />
                    </div>
                    <DarkButton 
                      type="submit"
                      onClick={() => handleCTAClick('primary', 'snapshot-form')}
                      className="w-full py-3 text-lg font-semibold"
                    >
                      Get My Free Snapshot
                    </DarkButton>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      No meeting required.
                    </p>
                  </form>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Case Studies - tight */}
        <section id="case-studies" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-12">
              Success Stories
            </h2>
            
            {/* Desktop: 3 cards in row, Mobile: swipeable carousel */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
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
            
            {/* Mobile: Swipeable carousel */}
            <div className="md:hidden relative mb-8">
              <div className="flex space-x-4 overflow-x-auto snap-x snap-mandatory pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {caseStudies.map((study, index) => (
                  <div key={index} className="flex-none w-80 snap-center">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full">
                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Dot indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {caseStudies.map((_, index) => (
                  <div key={index} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                ))}
              </div>
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

        {/* (Optional) How It Works - 3 simple steps */}
        <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">1</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">Snapshot</h3>
                <p className="text-gray-600 dark:text-gray-300">Free analysis of your current systems and growth opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">2</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">Quick Wins</h3>
                <p className="text-gray-600 dark:text-gray-300">Implement immediate improvements while planning bigger systems</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</span>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">Build & Measure</h3>
                <p className="text-gray-600 dark:text-gray-300">Deploy complete growth systems and track your ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="final-cta" className="py-12 bg-primary-600 dark:bg-primary-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
              Ready to accelerate your growth?
            </h2>
            <p className="text-xl text-primary-100 mb-6">
              Get your free growth snapshot and see exactly where to focus first.
            </p>
            <DarkButton 
              href="/growth-audit"
              onClick={() => handleCTAClick('primary', 'final-cta')}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Get My Free Growth Snapshot
            </DarkButton>
          </div>
        </section>

      </div>
    </>
  );
}
