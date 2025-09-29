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
      icon: "pricing",
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
                    <Icon name="location" className="w-4 h-4 text-primary-600" />
                    <span>DFW-based</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="flash" className="w-4 h-4 text-primary-600" />
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

        {/* Everything You Need In One Place - 6 Core Features */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Everything You Need In One Place
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Powerful systems designed to help your business grow seamlessly.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={feature.link}>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
                      <Icon name={feature.icon} className="w-12 h-12 text-primary-600 mb-6 group-hover:scale-110 transition-transform" />
                      
                      <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {feature.subtitle}
                      </p>
                      
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

        {/* Trusted Companies Carousel */}
        <TrustedCompaniesCarousel />

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
                    Get a <strong>1-page Growth Snapshot</strong>: we identify the 3–4 biggest gaps holding your business back, then show two quick fixes you can apply immediately.
                  </p>

                  <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-6">
                    What we check depends on your industry:
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                      <Icon name="services" className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Service Businesses</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Contractors, healthcare, real estate</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Missed calls, quote delays, follow-up gaps, review flow</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                      <Icon name="bag" className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">E-commerce & Retail</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Online stores, retail shops</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Cart abandonment, checkout speed, repeat purchases, ad ROI</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
                      <Icon name="company" className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Professional Services</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Legal, consulting, finance</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Intake speed, scheduling gaps, client retention</p>
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-4">
                    📊 Results you'll get:
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">Clear view of where money/time is leaking</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">Two quick fixes to start closing the gap</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">Confidence in what to prioritize next</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 pt-6 space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Icon name="check" className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">100% free. No meeting required.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="download" className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Delivered as a 1-page PDF + short Loom video.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="puzzle" className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Works with your current tools — no rip-and-replace.</span>
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
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                    Ready to see your gaps?
                  </h3>
                  
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-lg p-8 mb-6">
                    <div className="text-4xl mb-4">📊</div>
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                      Your Growth Snapshot
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      We analyze your current systems and identify the 3-4 biggest opportunities for growth.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ✓ Industry-specific analysis<br/>
                      ✓ Actionable recommendations<br/>
                      ✓ Quick-win implementation guide
                    </div>
                  </div>

                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'snapshot-preview');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="w-full px-6 py-3"
                  >
                    Get My Free Growth Snapshot →
                  </DarkButton>
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
                  Real Businesses. Real Results.
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  See how our growth systems deliver measurable outcomes across industries.
                </p>
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
                  <Icon name="services" className="w-12 h-12 text-primary-600 mx-auto mb-6" />
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
                  <Icon name="clean" className="w-12 h-12 text-primary-600 mx-auto mb-6" />
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
                    <Icon name="check" className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Starter, Growth, Partner tiers (setup + monthly)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="check" className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">Cancel anytime; no surprise bills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="check" className="w-6 h-6 text-primary-500 flex-shrink-0" />
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
