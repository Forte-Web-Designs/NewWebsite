"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);

  // Rotating words for the hero
  const rotatingWords = ["A System", "Using The Right Data", "A Framework", "A Process", "Execution"];

  // Rotating words animation with fade effect
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

  const stats = [
    { value: "5+", sublabel: "ENTERPRISE SYSTEMS" },
    { value: "100+", sublabel: "HRS/MONTH RETURNED" },
    { value: "Worldwide", sublabel: "CLIENTS SERVED" },
    { value: "$4M+", sublabel: "CLIENT VALUE IDENTIFIED" }
  ];

  const clientLogos = [
    "Revolut", "Modern Bungalow", "Eden Medical", "Kingfisher Ads",
    "CR Deals Cincinnati", "Hollow Bamboo", "UDI Group"
  ];

  const tiers = [
    {
      name: "Foundation",
      tagline: "Get your system built and your first leads flowing.",
      timeline: "1-2 WEEKS",
      description: "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected and producing, because nobody should walk away with an empty system.",
      href: "/services/foundation"
    },
    {
      name: "Growth",
      tagline: "Turn leads into revenue. Know what's working.",
      timeline: "2-3 WEEKS",
      description: "Leads mean nothing if you don't know where they came from, can't follow up fast enough, or have no way to tell what's actually converting. Growth adds automated follow-up sequences, sales funnels, booking systems, SMS, and the tracking and attribution that shows you exactly which channels produce revenue and which ones waste money.",
      href: "/services/growth"
    },
    {
      name: "Scale",
      tagline: "Optimize what's working. Grow without adding headcount.",
      timeline: "3-4 WEEKS",
      description: "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. AI agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine. Built for businesses that already have leads and want to multiply what's working.",
      href: "/services/scale"
    }
  ];

  const results = [
    { client: "CR Deals Cincinnati", metric: "$52K/yr saved", description: "AI-powered product listings across marketplaces", href: "/case-studies/fast-track-auction" },
    { client: "Hollow Bamboo", metric: "20 hrs/wk back", description: "Equipment tracking across 6 film locations", href: "/case-studies/hollow-bamboo" },
    { client: "Revolut", metric: "$4M found", description: "Transaction analysis that used to take weeks", href: "/case-studies/revolut" }
  ];


  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Seth Forte",
            "alternateName": "Forte Web Designs",
            "url": "https://fortewebdesigns.com",
            "logo": "https://fortewebdesigns.com/images/home/LaunchForteLogo.png",
            "description": "Systems architecture and automation consulting for growing businesses",
            "email": "seth@fortewebdesigns.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Grapevine",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "areaServed": "United States",
            "serviceType": ["Business Automation", "CRM Integration", "Custom Software Development", "Reporting Dashboards"],
            "founder": {
              "@type": "Person",
              "name": "Seth Forte",
              "jobTitle": "Systems Architect & Automation Consultant"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 dark:text-white mb-6">
                  <span className="block sm:inline">Business Growth Isn't Luck.</span>
                  <span className="block sm:inline"> It's{" "}</span>
                  <span
                    className={`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-250 inline-block min-w-[140px] sm:min-w-[180px] ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                    aria-live="polite"
                  >
                    {rotatingWords[currentWordIndex]}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                  Automation, CRM pipelines, reporting dashboards, lead generation, funnels, websites, and the infrastructure that holds it all together.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200"
                  >
                    See My Work
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                  <div>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                      {stat.sublabel}
                    </p>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-10 sm:py-12 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-4">
                {clientLogos.map((logo) => (
                  <span key={logo} className="text-sm sm:text-base font-medium text-gray-400 dark:text-gray-500">
                    {logo}
                  </span>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 italic">
                As Featured in{' '}
                <a href="https://voyagedallas.com/interview/community-highlights-meet-seth-forte-of-forte-web-designs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline">
                  Voyage Dallas Magazine
                </a>
              </p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* WHAT I BUILD */}
        <section id="services" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6 text-center uppercase tracking-wide">
                What I Build
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-16 max-w-3xl mx-auto">
                Most businesses that come to me are dealing with one of three things: they have no systems at all, they have systems that don't talk to each other, or they've outgrown what they built and it's starting to break.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 text-center mb-16">
                The fix depends on where you are.
              </p>
            </SimpleScrollReveal>

            <div className="space-y-8">
              {tiers.map((tier, index) => (
                <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          {tier.name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                          {tier.tagline}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                        {tier.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {tier.description}
                    </p>
                    <Link
                      href={tier.href}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <p className="text-center text-gray-600 dark:text-gray-400 mt-12 text-sm">
                Every system is scoped, documented, tested, and handed off with training. You own everything I build.
              </p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Web Design - subtle mention */}
        <section className="py-12 sm:py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              I also build websites, click funnels, and landing pages designed to capture and convert leads.{' '}
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Ask me about it.
              </Link>
            </p>
          </div>
        </section>

        {/* Infrastructure Review CTA */}
        <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                  Not sure where to start?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Most people aren't. That's what the Infrastructure Review is for.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                  I review your current setup, identify the biggest opportunities, and give you a prioritized roadmap with ROI estimates. If you decide to move forward with a build, the review fee applies as credit toward the project.
                </p>
                <Link
                  href="/services/infrastructure-review"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Review
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* RESULTS */}
        <section className="py-24 sm:py-32 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-16 text-center uppercase tracking-wide">
                Results
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-0 border-t border-gray-200 dark:border-gray-700">
              {results.map((result, index) => (
                <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                  <Link
                    href={result.href}
                    className="flex items-center justify-between py-5 border-b border-gray-200 dark:border-gray-700 group hover:bg-gray-50 dark:hover:bg-gray-800/50 -mx-4 px-4 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {result.metric}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{result.client}</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500">{result.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="text-center mt-8">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  See all results
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Headshot & Brief */}
              <SimpleScrollReveal direction="up">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                    <OptimizedImage
                      src="/images/about/headshot-6.jpg"
                      alt="Seth Forte"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                    I'm Seth.
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    I build the system your business runs on. The part that connects your tools, automates the manual work, and shows you what's actually working.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    More about me
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>

              {/* Right - Video */}
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
                  <video
                    controls
                    className="w-full"
                  >
                    <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  2-minute intro
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section with Calendly */}
        <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                  Let's Talk
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Book a call and tell me what's not working.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a call with Seth"
                  className="w-full"
                />
              </div>
            </SimpleScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
