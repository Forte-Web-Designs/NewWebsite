"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);

  const rotatingWords = ["A System", "The Right Data", "A Framework", "A Process", "Execution"];

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

  const tiers = [
    {
      step: "01",
      name: "Foundation",
      tagline: "Get your system built and everything connected.",
      timeline: "1–2 weeks",
      description: "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected so you're not starting with an empty system.",
      href: "/services/foundation"
    },
    {
      step: "02",
      name: "Launch",
      tagline: "Get people into the system. Start generating revenue.",
      timeline: "1–3 weeks",
      description: "Foundation gave you the platform. Launch gives you the campaigns. Ad strategy, sales funnels, nurture sequences, and booking automation that turn strangers into leads and leads into customers, automatically.",
      href: "/services/launch"
    },
    {
      step: "03",
      name: "Growth",
      tagline: "Add channels. Convert more. Handle the volume.",
      timeline: "2–3 weeks",
      description: "One channel is working. Now multiply it. Add more lead sources, agents for after-hours response, outbound prospecting, review automation, and the integrations that let you run more without hiring more.",
      href: "/services/growth"
    },
    {
      step: "04",
      name: "Scale",
      tagline: "Optimize what's working. Grow without adding headcount.",
      timeline: "3–4 weeks",
      description: "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. Agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine.",
      href: "/services/scale"
    }
  ];

  const stats = [
    { value: "$52K", label: "Saved per year", sub: "CR Deals Cincinnati" },
    { value: "20hrs", label: "Returned per week", sub: "Hollow Bamboo Films" },
    { value: "$4M", label: "Opportunity identified", sub: "Revolut" },
    { value: "23+", label: "Completed projects", sub: "All 5-star rated" },
  ];

  const reviews = [
    {
      quote: "Seth is my go-to for all of my automation projects now. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout the process.",
      name: "Shopify / Xero Client",
      project: "Product Sync Automation"
    },
    {
      quote: "Extremely knowledgeable and patient. He thought outside the box to offer us solutions we did not consider. Highly recommend and we will use him in the future.",
      name: "Power Apps Client",
      project: "Review System Development"
    },
    {
      quote: "Delivered an exceptional automation that transformed a key aspect of our daily operations. Professional, incredibly responsive, and has tons of ideas. Highly recommend.",
      name: "Legal Tech Client",
      project: "Court Records Automation"
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Forte Web Designs",
            "url": "https://fortewebdesigns.com",
            "description": "Automation systems, CRM integration, and custom software for growing businesses",
            "email": "seth@fortewebdesigns.com",
            "address": { "@type": "PostalAddress", "addressLocality": "Grapevine", "addressRegion": "TX", "addressCountry": "US" },
            "areaServed": "United States",
            "serviceType": ["Business Automation", "CRM Integration", "Custom Software Development", "Reporting Dashboards"],
            "founder": { "@type": "Person", "name": "Seth Forte" }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-950">

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-14 px-6 sm:pt-32 sm:pb-16">
          <div className="max-w-3xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900 dark:text-white mb-5">
                Growth isn't luck.<br />
                It's{" "}
                <span
                  className={`bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent transition-opacity duration-200 ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                  aria-live="polite"
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                We build the automation systems, pipelines, and infrastructure that make it repeatable.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 text-center text-sm sm:text-base"
                >
                  Book a Call
                </Link>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-200 text-center text-sm sm:text-base"
                >
                  See Our Work
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── SOCIAL PROOF STRIP ───────────────────────────────────────── */}
        <section className="border-y border-gray-100 dark:border-gray-800 py-4 px-6">
          <div className="max-w-3xl mx-auto flex flex-wrap items-center gap-x-6 gap-y-2">
            {["Revolut", "Modern Bungalow", "Eden Medical", "Kingfisher Ads", "CR Deals", "Hollow Bamboo"].map((name) => (
              <span key={name} className="text-xs font-medium text-gray-300 dark:text-gray-600">{name}</span>
            ))}
            <a
              href="https://voyagedallas.com/interview/community-highlights-meet-seth-forte-of-forte-web-designs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-auto"
            >
              Featured in Voyage Dallas ↗
            </a>
          </div>
        </section>

        {/* ─── STATS ────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-6 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 75}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-0.5">{stat.label}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{stat.sub}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── WHAT WE BUILD ────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-2">
                Four stages. One complete system.
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-10">
                Most businesses are missing one of these. The review tells you which.
              </p>
            </SimpleScrollReveal>

            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {tiers.map((tier, index) => (
                <SimpleScrollReveal key={tier.name} direction="up" delay={index * 60}>
                  <Link href={tier.href} className="group flex gap-5 py-6 hover:opacity-80 transition-opacity">
                    <div className="flex-shrink-0 w-7 pt-0.5">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest">{tier.step}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {tier.name}
                        </h3>
                        <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider flex-shrink-0">{tier.timeline}</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 text-xs font-medium mb-2">{tier.tagline}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tier.description}</p>
                    </div>
                    <div className="flex-shrink-0 flex items-start pt-1.5">
                      <svg className="w-4 h-4 text-gray-300 dark:text-gray-700 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Every system is scoped, documented, tested, and handed off. You own everything.
                </p>
                <Link
                  href="/services/infrastructure-review"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap"
                >
                  Not sure where to start? Book a Review
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── RESULTS ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-6 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-10">
                The numbers speak.
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-0">
              {[
                { metric: "$52K/yr saved", client: "CR Deals Cincinnati", description: "Automated product listings across marketplaces", href: "/case-studies/fast-track-auction" },
                { metric: "20 hrs/wk back", client: "Hollow Bamboo", description: "Equipment tracking across 6 film locations", href: "/case-studies/hollow-bamboo" },
                { metric: "$4M found", client: "Revolut", description: "Transaction analysis that used to take weeks", href: "/case-studies/revolut" },
                { metric: "15 hrs/mo back", client: "Modern Bungalow", description: "Customer email automation across 9 order scenarios", href: "/case-studies/modern-bungalow" },
              ].map((result, i) => (
                <SimpleScrollReveal key={result.client} direction="up" delay={i * 60}>
                  <Link
                    href={result.href}
                    className="group flex items-center justify-between py-5 border-b border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                  >
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {result.metric}
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{result.client} — {result.description}</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-700 group-hover:text-blue-500 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="mt-8">
                <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  See all case studies
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── REVIEWS ──────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-8">
                What clients say.
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {reviews.map((review, i) => (
                <SimpleScrollReveal key={i} direction="up" delay={i * 75}>
                  <div className="bg-white dark:bg-gray-950 rounded-xl p-5 h-full flex flex-col border border-gray-100 dark:border-gray-800">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed flex-1 mb-4">
                      "{review.quote}"
                    </p>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-3">
                      <p className="font-semibold text-gray-900 dark:text-white text-xs">{review.name}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{review.project}</p>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                See all 15 reviews
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── ABOUT ────────────────────────────────────────────────────── */}
        <section className="py-14 sm:py-20 px-6 bg-white dark:bg-gray-950">
          <div className="max-w-3xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <SimpleScrollReveal direction="up">
              <div className="w-12 h-12 mb-6 rounded-full overflow-hidden ring-2 ring-gray-100 dark:ring-gray-800">
                <OptimizedImage
                  src="/images/about/headshot-6.jpg"
                  alt="Seth Forte"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  sizes="48px"
                />
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                About Forte
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                Seth spent 5 years building enterprise systems at Wells Fargo where downtime costs six figures an hour. Now we solve the same class of problems for growing businesses — automation, integrations, custom software, and the infrastructure that holds it all together.
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                We start every project by figuring out what the problem is actually costing you. If the math works, we build it. If it doesn't, we'll tell you.
              </p>
              <Link href="/about" className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Our story
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="rounded-xl overflow-hidden bg-gray-900 shadow-lg">
                <video controls className="w-full">
                  <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 text-center tracking-wide">2-MINUTE INTRO</p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── CONTACT ──────────────────────────────────────────────────── */}
        <section id="contact" className="py-14 sm:py-20 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="mb-10">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-3">
                  Tell us what's broken.
                </h2>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  Book a free call. No pitch, no pressure — just figuring out if we can help.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="650"
                  frameBorder="0"
                  title="Schedule a call with Forte"
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
