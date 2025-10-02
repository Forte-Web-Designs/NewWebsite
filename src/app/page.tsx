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
        {/* Hero Section - Clean AI Landing Style */}
        <section id="hero" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-12">
              {/* Main Headline - Simplified */}
              <div className="space-y-6">
                <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-gray-900 dark:text-white tracking-tight">
                  Business Growth Isn't Guesswork.
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    It's{" "}
                    <span 
                      className={`transition-opacity duration-300 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                  Catch every opportunity. Respond faster. Win more jobs.
                </p>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <button 
                  onClick={() => {
                    handleCTAClick('primary', 'hero');
                    window.location.href = '/growth-audit';
                  }}
                  className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get My Free Growth Snapshot
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div>
                  <a 
                    href="#how-it-works"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors underline underline-offset-4 decoration-1 hover:decoration-2"
                  >
                    See How It Works
                  </a>
                </div>
              </div>

              {/* Social Proof - Minimal */}
              <div className="pt-8 space-y-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Trusted by 25+ growing businesses • 4.9★ Google reviews
                </p>
                <div className="flex justify-center items-center gap-6 text-xs text-gray-400">
                  <span>DFW-based</span>
                  <span>•</span>
                  <span>24-hr response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies - Clean Minimal */}
        <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <TrustedCompaniesCarousel />
          </div>
        </section>

        {/* Outcomes + Services - Clean Card Design */}
        <section id="outcomes-pillars" className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
            {/* Outcomes Stats */}
            <div className="text-center mb-20">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8 tracking-tight">
                Your Outcomes in 30-90 Days
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed">
                Reclaim 5–20 hours per week, respond in minutes not days, get 90–100% follow-up coverage without manual chasing, and maintain complete visibility into your business pipeline through one owner-friendly dashboard.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3">5–20</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Hours reclaimed weekly</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3">Minutes</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Response time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3">90–100%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Follow-up coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-3">One</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Dashboard</div>
                </div>
              </div>
            </div>
            

            {/* Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whatWeBuild.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 h-full border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/20">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Link 
                      href={item.link}
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Snapshot - Minimal Form */}
        <section id="snapshot-form" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
            <div className="text-center space-y-12">
              {/* Header */}
              <div className="space-y-6">
                <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight">
                  Get a Free Growth Snapshot
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  We find the 3–4 biggest leaks costing you time and money, then give you two quick wins you can implement now—no meeting required.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Industry-specific checkup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>1-page summary + Loom walkthrough</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Works with your current tools</span>
                  </div>
                </div>
              </div>

              {/* Clean Form */}
              <div className="max-w-lg mx-auto">
                <form className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl shadow-gray-100 dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700" action="/growth-audit" method="GET">
                  <div className="space-y-6">
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                      placeholder="Your name"
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                      placeholder="your@email.com"
                    />
                    <input
                      type="url"
                      name="website"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all"
                      placeholder="https://yoursite.com (optional)"
                    />
                    <button 
                      type="submit"
                      onClick={() => handleCTAClick('primary', 'snapshot-form')}
                      className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Get my Free Growth Snapshot
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      No meeting required • Takes 2 minutes
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies - Clean Minimal */}
        <section id="case-studies" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-16">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight">
                Success Stories
              </h2>
              
              {/* Clean Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {caseStudies.map((study, index) => (
                  <div key={index} className="group">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 dark:hover:shadow-gray-900/20 h-full">
                      <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {study.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <Link 
                  href="/case-studies"
                  className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                >
                  See all case studies →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Minimal Steps */}
        <section id="how-it-works" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
            <div className="text-center space-y-16">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight">
                How It Works
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-xl font-semibold">1</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Snapshot</h3>
                    <p className="text-gray-600 dark:text-gray-300">Free analysis of your current systems and growth opportunities</p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-xl font-semibold">2</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Quick Wins</h3>
                    <p className="text-gray-600 dark:text-gray-300">Implement immediate improvements while planning bigger systems</p>
                  </div>
                </div>
                
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mx-auto">
                    <span className="text-xl font-semibold">3</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white">Build & Measure</h3>
                    <p className="text-gray-600 dark:text-gray-300">Deploy complete growth systems and track your ROI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Clean & Minimal */}
        <section id="final-cta" className="py-20 sm:py-24 bg-gray-900 dark:bg-gray-800">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl text-center">
            <div className="space-y-8">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight">
                Ready to accelerate your growth?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get your free growth snapshot and see exactly where to focus first.
              </p>
              <button 
                onClick={() => {
                  handleCTAClick('primary', 'final-cta');
                  window.location.href = '/growth-audit';
                }}
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get My Free Growth Snapshot
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
