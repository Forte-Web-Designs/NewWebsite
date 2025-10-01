"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from "@/components/DarkButton";

// Lazy load non-critical components for better performance
const GrowthSnapshotForm = lazy(() => import("@/components/GrowthSnapshotForm"));

export default function Home() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);
  
  // Rotating words for the hero - keeping the exact words as specified
  const rotatingWords = ["Data.", "Measurable.", "Repeatable."];

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

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Outcomes in 30-90 Days
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
            "description": "Business Growth Systems - We help growing businesses catch every opportunity, respond faster, and win more jobs.",
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-4xl mx-auto">
                {/* Main Headline */}
                <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                  <span className="block">Business Growth Isn't Guesswork.</span>{" "}
                  <span className="block">It's{" "}</span>
                  <span 
                    className={`inline-block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent transition-opacity duration-250 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    style={{ 
                      minWidth: '200px',
                      display: 'inline-block'
                    }}
                    aria-live="polite"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Catch every opportunity. Respond faster. Win more jobs.
                </p>

                {/* Primary CTA */}
                <div className="mb-6">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'hero');
                      // Navigate to checkup page instead of modal
                      window.location.href = '/checkup/';
                    }}
                    className="px-8 py-4 text-lg"
                  >
                    Get my Free Growth Snapshot
                  </DarkButton>
                </div>

                {/* Optional text link */}
                <div>
                  <Link 
                    href="/services/automation-ai"
                    className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                  >
                    How it works
                  </Link>
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
