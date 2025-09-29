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

  // Outcome tiles data
  const outcomeTiles = [
    {
      icon: "target",
      title: "Lead & Intake",
      subtitle: "Fewer missed opportunities. Instant first touch.",
      kpis: ["Response time ↓", "Missed-lead loss ↓", "First-touch rate ↑"],
      link: "/services/lead-intake"
    },
    {
      icon: "file-text",
      title: "Faster Quotes & Sales Ops",
      subtitle: "Same-day quotes that get answered.",
      kpis: ["Quote turnaround ↓", "Reply rate ↑", "Close rate ↑"],
      link: "/services/quotes-sales"
    },
    {
      icon: "repeat",
      title: "Follow-Ups & Retention", 
      subtitle: "Win-backs, reminders, and steady reviews.",
      kpis: ["No-show rate ↓", "Win-back revenue ↑", "Review velocity ↑"],
      link: "/services/follow-ups"
    },
    {
      icon: "monitor",
      title: "Data & Owner Dashboards",
      subtitle: "One view of leads, quotes, and stuck points.",
      kpis: ["Time-to-next-step ↓", "Forecast clarity ↑", "Accountability ↑"],
      link: "/services/dashboards"
    },
    {
      icon: "search",
      title: "Marketing & SEO Automations",
      subtitle: "Local visibility that turns into jobs.",
      kpis: ["Service-keyword lift ↑", "Organic inquiries ↑", "CPL ↓"],
      link: "/services/marketing-seo"
    },
    {
      icon: "settings",
      title: "Integrations & Operations",
      subtitle: "Fewer manual steps. Cleaner handoffs.",
      kpis: ["Manual steps ↓", "Handoff delays ↓", "Data accuracy ↑"],
      link: "/services/ops-integrations"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Cut response time from 4 hours to 15 minutes",
      industry: "Home Services",
      company: "DFW Roofing"
    },
    {
      quote: "Same-day quotes increased our close rate 15%",
      industry: "HVAC",
      company: "Climate Pro"
    },
    {
      quote: "Finally see where every lead stands",
      industry: "Plumbing",
      company: "Lone Star Plumbing"
    },
    {
      quote: "Automated follow-ups recovered $18k in 6 months",
      industry: "Retail",
      company: "Elite Boutique"
    },
    {
      quote: "No more missed opportunities from busy phones",
      industry: "Healthcare",
      company: "Riverside Clinic"
    },
    {
      quote: "Our Google reviews finally started flowing",
      industry: "Home Services",
      company: "ProHome Services"
    }
  ];

  // Recent outcomes data
  const recentOutcomes = [
    {
      company: "Riverside Clinic",
      outcome: "2.5× more inquiries",
      description: "after faster replies",
      anchor: "riverside-clinic"
    },
    {
      company: "ProHome Services", 
      outcome: "3-day → same-day",
      description: "quotes; +12% close rate",
      anchor: "prohome-services"
    },
    {
      company: "Elite Boutique",
      outcome: "$18k in 6 months",
      description: "from follow-ups",
      anchor: "elite-boutique"
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
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-5xl mx-auto">
                {/* Badges Row */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
                  <div className="flex items-center gap-2">
                    <Icon name="map-pin" className="w-4 h-4 text-primary-600" />
                    <span>DFW-based</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="zap" className="w-4 h-4 text-primary-600" />
                    <span>24-hr response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="star" className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9★ Google reviews</span>
                  </div>
                </div>

                {/* Rotating Headline */}
                <h1 
                  className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6"
                  style={{ contain: 'layout' }}
                >
                  Business Growth Isn't Luck. It's{" "}
                  <span 
                    className={`inline-block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-opacity duration-250 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      minWidth: '180px',
                      display: 'inline-block',
                      textAlign: 'left'
                    }}
                    aria-live="polite"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </h1>

                {/* Subheadline */}
                <h2 className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                  Catch every opportunity. Respond faster. Win more jobs.
                </h2>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'hero');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-8 py-4 text-lg"
                  >
                    Get My Free Growth Snapshot →
                  </DarkButton>
                  <LightButton 
                    href="#how-it-works"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="px-8 py-4 text-lg"
                  >
                    See How It Works
                  </LightButton>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Where We Move The Needle - 6 Outcome Tiles */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Where we move the needle
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Six outcome areas where small changes create measurable growth
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outcomeTiles.map((tile, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={tile.link}>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                      <Icon name={tile.icon} className="w-12 h-12 text-primary-600 mb-6 group-hover:scale-110 transition-transform" />
                      
                      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                        {tile.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-4">
                        {tile.subtitle}
                      </p>
                      
                      <div className="mb-6">
                        {tile.kpis.map((kpi, kpiIndex) => (
                          <div key={kpiIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                            <span>{kpi}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300">
                        Learn more →
                      </div>
                    </div>
                  </Link>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Band */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
                  Trusted by 25+ Growing Businesses Nationwide
                </h2>
                <div className="flex items-center justify-center gap-4 text-yellow-400 mb-8">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-semibold">
                    4.9 ★ on Google • Verified Reviews
                  </span>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Rotating Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{testimonial.company}</span>
                      <span className="mx-2">•</span>
                      <span>{testimonial.industry}</span>
                    </div>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <LightButton href="/results" className="px-6 py-3">
                  See all reviews →
                </LightButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Growth Snapshot CTA */}
        <section className="py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SimpleScrollReveal direction="left">
                <div>
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                    Curious where you're leaking opportunities?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Get a 1-page Growth Snapshot: we check missed calls, reply time, quote delays, and follow-up gaps—then show two quick fixes.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Icon name="check-circle" className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">100% free. No meeting required.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="file-text" className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">1-page PDF + 2-min Loom.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="settings" className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Works with your tools (no rip-and-replace).</span>
                    </div>
                  </div>

                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'snapshot-section');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-8 py-4 text-lg"
                  >
                    Get my Free Growth Snapshot →
                  </DarkButton>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    We'll only use your info to prepare your snapshot. No spam.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="right">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6 text-center">
                    Snapshot Preview
                  </h3>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg p-6">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                      ProHome Services
                    </h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Response Time:</span>
                        <span className="font-semibold text-red-600">4.2 hrs</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Quote Turnaround:</span>
                        <span className="font-semibold text-red-600">3.1 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Follow-up Rate:</span>
                        <span className="font-semibold text-red-600">23%</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Fixes:</h5>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Auto-reply setup (30 min)</li>
                        <li>• Quote template (1 hr)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Recent Outcomes */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Recent outcomes
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {recentOutcomes.map((outcome, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={`/results#${outcome.anchor}`}>
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center hover:shadow-lg transition-shadow group h-full">
                      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                        {outcome.company}
                      </h3>
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-105 transition-transform">
                        {outcome.outcome}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {outcome.description}
                      </p>
                    </div>
                  </Link>
                </SimpleAnimatedCard>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <LightButton href="/results" className="px-8 py-3">
                  See All Results →
                </LightButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Support Layers */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                  These keep your system humming
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center">
                  <Icon name="globe" className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Web Design (Foundation)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Give customers something to say yes to.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center">
                  <Icon name="search" className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    SEO (Demand)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Win searches that bring real jobs.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center">
                  <Icon name="shield-check" className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Forte Care™ (Upkeep)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stay updated, secure, and competitive.
                  </p>
                </div>
              </SimpleAnimatedCard>
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <LightButton href="/pricing" className="px-8 py-3">
                  See Pricing →
                </LightButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <SimpleScrollReveal direction="up">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                  Simple, transparent pricing
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="flex items-center gap-3">
                    <Icon name="check-circle" className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Starter, Growth, Partner tiers (setup + monthly)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="check-circle" className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cancel anytime; no surprise bills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="check-circle" className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Plain-math ROI on your weekly scorecard</span>
                  </div>
                </div>

                <LightButton href="/pricing" className="px-8 py-4 text-lg">
                  See Pricing →
                </LightButton>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-8">
                Ready to stop losing opportunities?
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    handleCTAClick('primary', 'closing-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get a Free Growth Snapshot
                </button>
                <LightButton 
                  href="/contact"
                  onClick={() => handleCTAClick('secondary', 'closing-cta')}
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary-600"
                >
                  Talk to Us
                </LightButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Growth Snapshot Form Modal */}
        {showGrowthSnapshotForm && (
          <Suspense fallback={
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8">
                <div className="animate-spin w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full mx-auto"></div>
              </div>
            </div>
          }>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                      Get Your Free Growth Snapshot
                    </h3>
                    <button
                      onClick={() => setShowGrowthSnapshotForm(false)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                      aria-label="Close modal"
                    >
                      <Icon name="x" className="w-6 h-6" />
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
