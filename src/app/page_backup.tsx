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
const LazySliderCSS = lazy(() => import("@/components/performance/LazySliderCSS"));

export default function Home() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);
  
  // Rotating words for the hero
  const rotatingWords = ["Data.", "Measurable.", "A System.", "Results."];

  // Rotating words animation with fade effect
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

  // Schema for SEO
  const organizationSchema = {
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    }
  };

  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Product",
        "name": "Lead Catcher™",
        "description": "Turns forms, chat, and missed calls into fast text-backs with a next step",
        "url": "https://fortewebdesigns.com/solutions/lead-catcher"
      },
      {
        "@type": "Product",
        "name": "Quote Builder™",
        "description": "Send clear, trackable quotes with smart follow-ups",
        "url": "https://fortewebdesigns.com/solutions/quote-builder"
      },
      {
        "@type": "Product",
        "name": "Owner's Console™",
        "description": "One view of leads, quotes, tasks, and stuck points—with a weekly scorecard",
        "url": "https://fortewebdesigns.com/solutions/owners-console"
      }
    ]
  };

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    // Track CTA clicks
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Handle Growth Snapshot form submission
  const handleGrowthSnapshotSubmit = (formData: any) => {
    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit', {
        form_type: 'growth_snapshot_home'
      });
    }
    
    // Here you would typically send the data to your backend
    console.log('Growth Snapshot Form Data:', formData);
    
    // Show success message or redirect
    alert('Thank you! We\'ll prepare your Growth Snapshot and send it within 24 hours.');
    setShowGrowthSnapshotForm(false);
  };

  // Trusted businesses data
  const trustedBusinesses = [
    {
      name: "Sarah M.",
      business: "HVAC Services",
      review: "Response time went from hours to minutes. More calls are turning into jobs.",
      rating: 5
    },
    {
      name: "Mike R.",
      business: "Home Renovation", 
      review: "Quote turnaround dropped from 3 days to same-day. Close rate is up 12%.",
      rating: 5
    },
    {
      name: "Dr. Lisa K.",
      business: "Medical Practice",
      review: "Patient inquiries increased 2.5x with faster replies and clearer booking.",
      rating: 5
    },
    {
      name: "Carlos D.",
      business: "Landscaping",
      review: "The dashboard shows me exactly where leads are getting stuck. Game changer.",
      rating: 5
    },
    {
      name: "Jennifer T.",
      business: "Retail Boutique",
      review: "Follow-ups are automatic now. Added $18k in first 6 months.",
      rating: 5
    },
    {
      name: "Tom B.",
      business: "Contracting",
      review: "Finally have one place to see everything - leads, quotes, next steps.",
      rating: 5
    }
  ];

  // Recent outcomes data
  const recentOutcomes = [
    {
      business: "Riverside Clinic",
      outcome: "2.5× more inquiries",
      details: "from ~8 to 20+/mo after faster replies + clearer booking path",
      metric: "2.5x increase"
    },
    {
      business: "ProHome Services", 
      outcome: "Quote turnaround: 3 days → same-day",
      details: "and +12% close rate with Quote Builder™",
      metric: "+12% close rate"
    },
    {
      business: "Elite Boutique",
      outcome: "$18k in first 6 months",
      details: "from site + follow-ups that brought buyers back",
      metric: "$18k revenue"
    }
  ];

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 pt-20 pb-16 lg:pt-32 lg:pb-24">
            <div className="text-center max-w-5xl mx-auto">
              <SimpleScrollReveal direction="up" delay={0}>
                {/* Trust Strip */}
                <div className="inline-flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
                  <span className="flex items-center gap-1">
                    <Icon name="map-pin" className="w-4 h-4" />
                    DFW-based
                  </span>
                  <span>•</span>
                  <span>24-hr response</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Icon name="star" className="w-4 h-4 text-yellow-400 fill-current" />
                    5★ Google reviews
                  </span>
                </div>

                {/* H1 - Rotating Headline */}
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6 text-center">
                  Business Growth Isn't Luck. It's{" "}
                  <span className="inline-block text-left">
                    <span 
                      key={currentWordIndex}
                      className={`bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-opacity duration-500 ${
                        fadeInOut ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        animation: 'fadeInOut 2.5s ease-in-out infinite',
                        animationDelay: '0s'
                      }}
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </span>
                </h1>

                {/* H2 - Subheadline */}
                <h2 className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-800 dark:text-gray-100 mb-8">
                  Catch every opportunity. Respond faster. Win more jobs.
                </h2>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'hero');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-8 py-4 text-lg"
                  >
                    Get My Free Growth Snapshot
                  </DarkButton>
                  <LightButton 
                    href="#proof"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="px-8 py-4 text-lg"
                  >
                    See How It Works
                  </LightButton>
                </div>
              </SimpleScrollReveal>

              {/* Hero Visual */}
              <SimpleScrollReveal direction="up" delay={200}>
                <div className="mt-16">
                  <div className="relative max-w-4xl mx-auto">
                    <OptimizedImage
                      src="/images/home/hero.jpg"
                      alt="Business Growth Systems Dashboard - Lead Catcher, Quote Builder, Owner's Console"
                      width={800}
                      height={500}
                      className="rounded-xl shadow-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Systems Overview */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Three systems that grow your business
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
                  Each system solves a specific growth bottleneck. Use all three together for maximum impact.
                </p>

                {/* 3-Step Flow Diagram */}
                <div className="flex items-center justify-center gap-4 md:gap-8 mb-16">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-2">
                      <Icon name="target" className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Leads In</span>
                  </div>
                  
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-primary-500 max-w-[100px]"></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-2">
                      <Icon name="file-text" className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quotes Out</span>
                  </div>
                  
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-300 to-primary-500 max-w-[100px]"></div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-2">
                      <Icon name="monitor" className="w-8 h-8 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Performance</span>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Lead Catcher™ */}
              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                  <Icon name="target" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Lead Catcher™
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                    Turn missed calls into booked jobs.
                  </p>
                  <Link 
                    href="/solutions/lead-catcher"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              </SimpleAnimatedCard>

              {/* Quote Builder™ */}
              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                  <Icon name="file-text" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Quote Builder™
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                    Send quotes same-day. Close more deals.
                  </p>
                  <Link 
                    href="/solutions/quote-builder"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              </SimpleAnimatedCard>

              {/* Owner's Console™ */}
              <SimpleAnimatedCard>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                  <Icon name="monitor" className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Owner's Console™
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                    One view of your pipeline and performance.
                  </p>
                  <Link 
                    href="/solutions/owners-console"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-semibold"
                  >
                    Learn more →
                  </Link>
                </div>
              </SimpleAnimatedCard>
            </div>

            {/* Mini CTA */}
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'systems');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-3"
                >
                  Get a Free Growth Snapshot
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Trust & Proof Section */}
        <section id="proof" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                  Trusted by 25+ Growing Businesses Nationwide
                </h2>
                
                {/* Business Logos Placeholder */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center mb-16 opacity-60">
                  {/* Placeholder logos - replace with actual client logos */}
                  {[1,2,3,4,5,6].map((logo) => (
                    <div key={logo} className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 w-24 h-16 flex items-center justify-center">
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">LOGO</span>
                    </div>
                  ))}
                </div>

                {/* Google Rating */}
                <div className="flex items-center justify-center gap-2 text-yellow-500 mb-12">
                  <div className="flex">
                    {[1,2,3,4,5].map((star) => (
                      <Icon key={star} name="star" className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    4.9 ★ on Google • Verified Reviews
                  </span>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Short Testimonials - 4-6 cards, 1-2 sentences each */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Response time went from hours to minutes. More calls are turning into jobs."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Sarah M.</strong> • HVAC Services
                  </div>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Quote turnaround dropped from 3 days to same-day. Close rate is up 12%."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Mike R.</strong> • Home Renovation
                  </div>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Patient inquiries increased 2.5x with faster replies."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Dr. Lisa K.</strong> • Medical Practice
                  </div>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "The dashboard shows me exactly where leads are getting stuck."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Carlos D.</strong> • Landscaping
                  </div>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Follow-ups are automatic now. Added $18k in first 6 months."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Jennifer T.</strong> • Retail Boutique
                  </div>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Finally have one place to see everything - leads, quotes, next steps."
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Tom B.</strong> • Contracting
                  </div>
                </div>
              </SimpleAnimatedCard>
            </div>
          </div>
        </section>

        {/* Growth Snapshot Promo */}
        <section className="py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <SimpleScrollReveal direction="up">
                <div className="text-center mb-12">
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                    Curious where you're leaking opportunities?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Get a <strong>1-page Growth Snapshot</strong>: we check missed calls, reply time, quote delays, and follow-up gaps—then show two quick fixes.
                  </p>
                </div>

                {/* Two Column Layout: Preview + Benefits */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                  {/* Mockup Preview */}
                  <div className="relative">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md mx-auto">
                      <div className="text-center mb-6">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="bar-chart" className="w-6 h-6 text-primary-600" />
                        </div>
                        <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
                          Growth Snapshot Preview
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">ProHome Services</p>
                      </div>
                      
                      {/* Mock metrics */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Response Time</span>
                          <span className="text-red-500 font-semibold">4.2 hrs</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Quote Turnaround</span>
                          <span className="text-yellow-500 font-semibold">3.1 days</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Follow-up Rate</span>
                          <span className="text-red-500 font-semibold">23%</span>
                        </div>
                        <div className="border-t pt-4 mt-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Fixes:</h4>
                          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                            <li>• Auto-reply setup (30min)</li>
                            <li>• Quote template (1hr)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="check-circle" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>100% free.</strong> No meeting required.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="file-text" className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>1-page PDF + 2-min Loom.</strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="settings" className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <strong>Works with your tools</strong> (no rip-and-replace).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Growth Snapshot Form */}
                {!showGrowthSnapshotForm ? (
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'growth-snapshot');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-8 py-4 text-lg"
                  >
                    Get my Free Growth Snapshot
                  </DarkButton>
                ) : (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto">
                    <GrowthSnapshotForm onSubmit={handleGrowthSnapshotSubmit} />
                  </div>
                )}

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  We'll only use your info to prepare your snapshot. No spam.
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Results Preview */}
        <section id="results" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Recent outcomes
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Real results from businesses using our growth systems
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <SimpleAnimatedCard>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center h-full">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Riverside Clinic
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    2.5× more inquiries
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    2.5× more patient inquiries after faster replies.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center h-full">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    ProHome Services
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    3-day → same-day
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    3-day quotes → same-day; +12% close rate.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center h-full">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    Elite Boutique
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    $18k in 6 months
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    $18k in first 6 months from follow-ups.
                  </p>
                </div>
              </SimpleAnimatedCard>
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

        {/* Supporting Services */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-4">
                  These keep your system humming
                </h3>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <SimpleAnimatedCard>
                <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6">
                  <Icon name="globe" className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                  <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Web Design (Foundation)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    Give customers something to say yes to.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6">
                  <Icon name="search" className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                  <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    SEO (Demand)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    Win searches that bring real jobs.
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="text-center bg-white dark:bg-gray-700 rounded-xl p-6">
                  <Icon name="shield-check" className="w-10 h-10 text-primary-600 mx-auto mb-4" />
                  <h4 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    Forte Care™ (Upkeep)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 font-semibold">
                    Stay updated, secure, and competitive.
                  </p>
                </div>
              </SimpleAnimatedCard>
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <LightButton href="/pricing" className="px-6 py-2">
                  See Pricing
                </LightButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Simple, transparent pricing
              </h2>
              
              <div className="max-w-2xl mx-auto">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Starter, Growth, Partner</strong> tiers (setup + monthly)
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Cancel anytime; no surprise bills
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Plain-math ROI shown on your weekly scorecard
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <LightButton href="/pricing" className="px-8 py-3">
                    See Pricing
                  </LightButton>
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'pricing-teaser');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="px-8 py-3"
                  >
                    Get a Free Growth Snapshot
                  </DarkButton>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="container mx-auto px-4 text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
                Ready to catch every opportunity?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Start with a free Growth Snapshot—no meeting required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    handleCTAClick('primary', 'final-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Get a Free Growth Snapshot
                </button>
                <Link
                  href="/contact"
                  onClick={() => handleCTAClick('secondary', 'final-cta')}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  Talk to Us
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Growth Snapshot Form Modal */}
        {showGrowthSnapshotForm && (
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
                  >
                    <Icon name="x" className="w-6 h-6" />
                  </button>
                </div>
                
                <Suspense fallback={<div>Loading form...</div>}>
                  <GrowthSnapshotForm onSubmit={handleGrowthSnapshotSubmit} />
                </Suspense>
              </div>
            </div>
          </div>
        )}

        {/* Lazy load CSS */}
        <Suspense fallback={null}>
          <LazySliderCSS>
            <></>
          </LazySliderCSS>
        </Suspense>
      </div>
    </>
  );
}
