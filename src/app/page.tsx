"use client";

import { useState, lazy, Suspense } from "react";
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

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Service lanes data (4 tiles matching Automaly structure)
  const serviceLanes = [
    {
      icon: "puzzle",
      title: "CRM Automation Consultants",
      subtitle: "Supercharge your CRM with AI-powered automations",
      description: "Turn your CRM into a revenue engine. We route leads instantly, keep data clean, and trigger follow-ups automatically—so your team focuses on high-value, revenue-driving work. Certified across Airtable and Pipedrive; skilled with HubSpot and all major CRMs.",
      link: "/services/crm-automation"
    },
    {
      icon: "flash",
      title: "AI & Process Automation Consultants", 
      subtitle: "Better results with AI & marketing automation",
      description: "Stop losing time to disconnected tools. We connect ads, forms, and email to your CRM and sales stack, add AI-assisted segmentation, and ship repeatable campaigns that lift ROI without manual overhead.",
      link: "/services/process-automation"
    },
    {
      icon: "dollar",
      title: "Increase Revenue with AI & Automation",
      subtitle: "Increase revenue with AI & sales automation", 
      description: "Reps spend too little time selling and too much time clicking. We automate replies, reminders, guided quotes, and scheduling—covering 90–100% of follow-up so your team can close more with less effort.",
      link: "/services/revenue-automation"
    },
    {
      icon: "services",
      title: "Software Integration & Automation",
      subtitle: "Software integration and automation",
      description: "Make, Zapier, n8n, and custom connectors—wired into a single, dependable system. We optimize your stack for clean handoffs, reliable data, and clear reporting, so tools never get in the way of growth.",
      link: "/services/integrations"
    }
  ];

  // 4-step process data
  const processSteps = [
    {
      number: "1",
      title: "Free Growth Snapshot",
      description: "We review one manual process, surface bottlenecks, and identify where AI & automation can boost productivity and reduce costs."
    },
    {
      number: "2", 
      title: "Personalized AI & Automation Roadmap",
      description: "You receive a tailored plan with recommended automations and estimated time/cost savings at every step—ready to implement."
    },
    {
      number: "3",
      title: "Implementation, Setup & Testing", 
      description: "Our engineers connect your tools, configure workflows, and validate edge cases so everything runs reliably in the real world."
    },
    {
      number: "4",
      title: "Ongoing Support & Updates (Forte Care™)",
      description: "We monitor, improve, and support your automations so they stay fast, secure, and aligned to your goals."
    }
  ];

  // Trust pillars data
  const trustPillars = [
    {
      icon: "star",
      title: "Unmatched Industry Expertise",
      description: "Our team spans growth, sales, marketing, and engineering. Recommendations are researched, tested, and practical."
    },
    {
      icon: "shield",
      title: "Control Your Business Growth", 
      description: "We simplify AI & automation so you can focus on high-value outcomes and full visibility. Take back control."
    },
    {
      icon: "support",
      title: "Ongoing Training & Support",
      description: "We enable your team with onboarding, documentation, and support. Forte Care™ keeps your systems fast and improving."
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
                {/* Proof Strip */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-full px-2">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="star" className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">Trusted by 25+ growing businesses</span>
                  </div>
                  <span className="text-gray-300 dark:text-gray-600">·</span>
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                    <Icon name="star" className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current flex-shrink-0" />
                    <span className="whitespace-nowrap text-xs sm:text-sm">4.9★ Google reviews</span>
                  </div>
                </div>

                {/* Hero Headline */}
                <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-gray-900 dark:text-white mb-4 sm:mb-6 px-2 max-w-full">
                  Business Growth Isn't Guesswork. It's <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">Results.</span>
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
                    Get My Free Growth Snapshot
                  </DarkButton>
                  <a 
                    href="#service-lanes"
                    onClick={() => handleCTAClick('secondary', 'hero')}
                    className="inline-flex items-center justify-center px-6 sm:px-6 lg:px-8 py-4 sm:py-4 text-sm sm:text-base lg:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto max-w-full min-w-0 min-h-[44px] text-center"
                  >
                    <span className="truncate text-center">See Use Cases</span>
                    <svg className="ml-2 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Positioning Block */}
        <section id="positioning" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  AI & Automation Consultants
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At Forte Web Designs, we help teams grow faster while spending less time on busywork. Our services cover automation consulting, digital transformation, and custom AI development.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  If you want clear next steps on where AI fits in your operations, request a <strong>Free Growth Snapshot</strong> and we'll show you where to start.
                </p>
                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'positioning');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-6 py-3 text-base"
                >
                  Get Started
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>



        {/* Partners Strip */}
        <section id="partners" className="py-8 sm:py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TrustedCompaniesCarousel />
          </div>
        </section>

        {/* Service Lanes */}
        <section id="service-lanes" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  How we grow your business with AI & Automation
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {serviceLanes.map((service, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <Icon name={service.icon} className="w-8 h-8 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                          {service.title}
                        </h3>
                        <h4 className="text-base font-semibold text-primary-600 dark:text-primary-400 mb-4">
                          {service.subtitle}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.link}
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors"
                    >
                      Learn more →
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
                  Your 4-Steps to AI & Automation Success
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Implementing AI and automation has never been easier with Forte Web Designs.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 h-full text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                      <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
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
                  Trusted AI & Automation Consultants
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Forte Web Designs is a trusted automation partner for growth-minded teams. We learn your goals and commit to a plan that moves the numbers that matter. Your success is our success.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {trustPillars.map((pillar, index) => (
                <SimpleAnimatedCard key={index}>
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8 text-center h-full">
                    <Icon name={pillar.icon} className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                    
                    <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              {resourcesPreview.map((resource, index) => (
                <SimpleAnimatedCard key={index}>
                  <Link href={resource.link}>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full group">
                      <div className="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-3">
                        {resource.type}
                      </div>
                      
                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {resource.title}
                      </h3>
                      
                      <div className="text-primary-600 dark:text-primary-400 font-semibold group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
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

        {/* Integrations */}
        <section id="integrations" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Connect your favorite business software
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  We connect the tools you already rely on so you get more from every license. Experts in n8n, Pipedrive, Airtable, HubSpot, Make, Salesforce, GA4, Sheets, and more.
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Integration logos */}
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {/* n8n */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/n8n.svg"
                    alt="n8n"
                    width={48}
                    height={48}
                    className="w-12 h-12 dark:invert"
                  />
                </div>

                {/* Pipedrive */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/pipedrive.svg"
                    alt="Pipedrive"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Airtable */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/airtable.svg"
                    alt="Airtable"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* HubSpot */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/hubspot.svg"
                    alt="HubSpot"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Make (formerly Integromat) */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/make.svg"
                    alt="Make"
                    width={48}
                    height={48}
                    className="w-12 h-12 dark:invert"
                  />
                </div>

                {/* Zapier */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/zapier.svg"
                    alt="Zapier"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Salesforce */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/salesforce.svg"
                    alt="Salesforce"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Google Analytics 4 */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googleanalytics.svg"
                    alt="Google Analytics"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>

                {/* Google Sheets */}
                <div className="flex items-center justify-center h-12 w-20 opacity-60 hover:opacity-100 transition-opacity">
                  <OptimizedImage
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v9/icons/googlesheets.svg"
                    alt="Google Sheets"
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Growth Snapshot Lead Magnet */}
        <section id="growth-snapshot" className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-8 sm:mb-12">
                <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-4">
                  Process Health Check 🚑
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                  Secure your <strong>Free Growth Snapshot</strong>
                </h2>
                
                <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-8">
                  <p>
                    Curious how AI and automation could streamline your operations? Claim a complimentary <strong>Free Growth Snapshot</strong> 🚑.
                  </p>
                  <p>
                    Our specialists will examine one of your current manual processes in detail.
                  </p>
                  <p>
                    We'll analyze existing costs, pinpoint improvements using AI & automation, and outline potential savings and productivity gains. Insights are delivered in a concise consultation so your team can clearly see the benefits.
                  </p>
                </div>

                <p className="text-red-600 dark:text-red-400 font-semibold mb-8">
                  Availability is limited — reserve now!
                </p>

                <div className="max-w-md mx-auto">
                  <DarkButton 
                    onClick={() => {
                      handleCTAClick('primary', 'growth-snapshot');
                      setShowGrowthSnapshotForm(true);
                    }}
                    className="w-full px-6 py-4 text-lg mb-4"
                  >
                    Reserve Your Slot Now
                  </DarkButton>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Growth Snapshot FAQ */}
        <section id="growth-snapshot-faq" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white">
                  Process Health Check FAQ's
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  What is it, and how can it benefit you?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our <strong>Free Growth Snapshot</strong> is a customized review designed to show the impact AI and automation can make in your business. We evaluate a specific process, highlight cost-saving and efficiency opportunities, and provide expert recommendations with projected savings and productivity gains.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  Who is the Free Growth Snapshot for?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Business owners, operations leaders, and revenue teams who want to streamline operational or sales processes, minimize manual tasks, and use data to make better decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  What do you need from us?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We'll start with a short call to confirm the process you'd like to optimize and schedule your consultation. This ensures our analysis is tailored and actionable for your team.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  How much does the Snapshot cost?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  It's free. If you'd like us to assess additional processes beyond the first, fees may apply.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  What's included in the Free Growth Snapshot?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A brief scoping call, expert analysis to map the process and find high-impact automation opportunities, and a focused session to share findings, savings potential, and recommended next steps.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                  How do I get started?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Book your intro call and reserve your slot using the link above. During the one-hour session, we'll dive into your process and outline improvements.
                </p>
              </div>
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center mt-12">
                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'faq-cta');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-4 text-lg"
                >
                  Reserve Your Free Growth Snapshot
                </DarkButton>
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
