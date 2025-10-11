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
      title: "AI Automation",
      subtitle: "Intelligent workflows that work 24/7",
      description: "Automate repetitive tasks, route leads instantly, trigger follow-ups automatically. Your team closes deals. The system handles everything else.",
      link: "/services/automation-ai"
    },
    {
      icon: "services",
      title: "Custom Web Design",
      subtitle: "High-converting websites built for growth",
      description: "Hand-coded websites engineered to convert. Fast loading, SEO-optimized, built to showcase your brand and drive measurable results.",
      link: "/services#web-design"
    },
    {
      icon: "flash",
      title: "CRM & Integrations",
      subtitle: "Connect your entire business stack",
      description: "Integrate your CRM, email, forms, and tools into one unified system. Clean data, automated handoffs, real-time insights across your operation.",
      link: "/services#integrations"
    },
    {
      icon: "dollar",
      title: "Revenue Operations",
      subtitle: "Systems that scale your growth",
      description: "End-to-end revenue systems: automated lead capture, nurture sequences, and sales workflows. Measure what matters, optimize for maximum ROI.",
      link: "/services/automation-ai"
    }
  ];

  // 4-step process data
  const processSteps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We analyze your current workflows, identify bottlenecks, and map out opportunities for automation and optimization."
    },
    {
      number: "2",
      title: "Custom Strategy",
      description: "Receive a tailored roadmap with clear timelines, expected ROI, and recommended solutions designed specifically for your business."
    },
    {
      number: "3",
      title: "Build & Deploy",
      description: "Our team builds, tests, and deploys your solution. From automation workflows to custom websites—delivered on time and on spec."
    },
    {
      number: "4",
      title: "Ongoing Optimization",
      description: "Continuous monitoring, updates, and improvements. We ensure your systems stay fast, secure, and aligned with your growth."
    }
  ];

  // Trust pillars data
  const trustPillars = [
    {
      icon: "star",
      title: "Cross-Functional Expertise",
      description: "Our team spans engineering, automation, and growth strategy. Every recommendation is researched, tested, and built for measurable outcomes."
    },
    {
      icon: "shield",
      title: "Built for Scale",
      description: "Custom systems designed to handle growth without breaking. No templates, no limitations—just intelligent architecture that evolves with your business."
    },
    {
      icon: "support",
      title: "Ongoing Optimization",
      description: "Complete training, documentation, and support. Forte Care™ ensures your systems stay fast, secure, and continuously improving."
    }
  ];

  // Resources preview data
  const resourcesPreview = [
    {
      type: "BLOG POST",
      title: "Automated Lead Management: What It Is and Why It Matters",
      link: "/blog/automated-lead-management"
    },
    {
      type: "BLOG POST", 
      title: "Sales Automation: The Essential Guide",
      link: "/blog/sales-automation-guide"
    },
    {
      type: "BLOG POST",
      title: "How to Automate Customer Engagement to Reduce Churn", 
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
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-full px-2">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="star" className="w-3 sm:w-4 h-3 sm:h-4 text-amber-500 fill-current flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">Trusted by growing businesses across DFW and nationwide</span>
                  </div>
                  <span className="text-gray-300 dark:text-gray-600">·</span>
                  <a
                    href="https://share.google/btyoifpiN3EEAGh1u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-2 min-w-0 hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="whitespace-nowrap text-xs sm:text-sm">5.0★ rated on Google</span>
                  </a>
                </div>

                {/* Hero Headline */}
                <h1
                  className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 dark:text-white mb-6 px-2"
                >
                  Intelligent Systems That<br />
                  <span
                    className={`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-250 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    aria-live="polite"
                  >
                    Scale With Your Business
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  AI automation and custom web design for companies ready to eliminate manual work and accelerate growth.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    onClick={() => handleCTAClick('primary', 'hero')}
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Talk to Our Team
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="#service-lanes"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    See How We Help
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>


        {/* Service Lanes */}
        <section id="service-lanes" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  What We Do
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We combine AI automation with premium web design to help ambitious businesses scale faster
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:auto-rows-fr">
              {serviceLanes.map((service, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 h-full group flex flex-col min-h-[320px]">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon name={service.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <h4 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                          {service.subtitle}
                        </h4>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group-hover:gap-3 mt-auto"
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
        <section id="snapshot-process" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  How We Work
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  A proven process that delivers results
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:auto-rows-fr">
              {processSteps.map((step, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 h-full text-center flex flex-col min-h-[280px]">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4 mx-auto">
                      <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow" style={{hyphens: 'none', wordBreak: 'normal'}}>
                      {step.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>



        {/* Trust Section */}
        <section id="trust" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Why Choose Forte
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Strategic partners who build systems designed for scale, not just launch day.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:auto-rows-fr">
              {trustPillars.map((pillar, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 text-center h-full flex flex-col min-h-[280px]">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon name={pillar.icon} className="w-8 h-8 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow">
                      {pillar.description}
                    </p>
                  </div>
                </SimpleAnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Preview */}
        <section id="resources" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Learn & Grow
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 md:auto-rows-fr">
              {resourcesPreview.map((resource, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={resource.link} className="h-full block">
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col group min-h-[200px]">
                      <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3">
                        {resource.type}
                      </div>

                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors flex-grow">
                        {resource.title}
                      </h3>

                      <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors mt-auto">
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
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                >
                  All articles →
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>





        {/* Contact Section */}
        <section id="contact-section" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Ready to Streamline Your Operations?
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Let's discuss how AI and automation can help your business grow. Our team will analyze your processes and recommend practical solutions.
                </p>

                <Link
                  href="/contact"
                  onClick={() => handleCTAClick('primary', 'contact-section')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Schedule a Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>



        {/* Closing CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
                Let's Build Something Great Together
              </h2>

              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Serving Dallas-Fort Worth and businesses nationwide
              </p>

              <Link
                href="/contact"
                onClick={() => handleCTAClick('primary', 'closing-cta')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-200"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
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
