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

      <div className="bg-white dark:bg-gray-950">

        {/* ─── HERO ─────────────────────────────────────────────────────── */}
        <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-gray-900 dark:text-white mb-6">
                Growth isn't luck.
                <br />
                It's{" "}
                <span
                  className={`bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent transition-opacity duration-200 ${fadeInOut ? "opacity-100" : "opacity-0"}`}
                  aria-live="polite"
                >
                  {rotatingWords[currentWordIndex]}
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We build the automation systems, pipelines, and infrastructure that eliminate manual work and make growth repeatable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-base transition-colors duration-200"
                >
                  Book a Call
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold text-base transition-colors duration-200"
                >
                  See Our Work
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── SOCIAL PROOF STRIP ───────────────────────────────────────── */}
        <div className="border-y border-gray-100 dark:border-gray-800 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {["Revolut", "Modern Bungalow", "Eden Medical", "Kingfisher Ads", "CR Deals", "Hollow Bamboo", "UDI Group"].map((name) => (
              <span key={name} className="text-sm font-medium text-gray-300 dark:text-gray-600">{name}</span>
            ))}
            <span className="hidden sm:block text-gray-200 dark:text-gray-700">·</span>
            <a
              href="https://voyagedallas.com/interview/community-highlights-meet-seth-forte-of-forte-web-designs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Featured in Voyage Dallas ↗
            </a>
          </div>
        </div>

        {/* ─── STATS ────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "$52K", label: "Saved per year", sub: "CR Deals Cincinnati" },
              { value: "20hrs", label: "Returned per week", sub: "Hollow Bamboo Films" },
              { value: "$4M", label: "Opportunity identified", sub: "Revolut" },
              { value: "23+", label: "Completed projects", sub: "All 5-star rated" },
            ].map((stat, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 75}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{stat.sub}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── SERVICES ─────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="mb-14">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
                  Four stages. One complete system.
                </h2>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl">
                  Most businesses are missing one of these. The review tells you which.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  step: "01", name: "Foundation", timeline: "1–2 weeks",
                  tagline: "Get your system built and everything connected.",
                  description: "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from.",
                  href: "/services/foundation"
                },
                {
                  step: "02", name: "Launch", timeline: "1–3 weeks",
                  tagline: "Get people into the system. Start generating revenue.",
                  description: "Ad strategy, sales funnels, nurture sequences, and booking automation that turn strangers into leads and leads into customers, automatically.",
                  href: "/services/launch"
                },
                {
                  step: "03", name: "Growth", timeline: "2–3 weeks",
                  tagline: "Add channels. Convert more. Handle the volume.",
                  description: "One channel is working. Now multiply it. More lead sources, agents for after-hours response, outbound prospecting, review automation, and deeper integrations.",
                  href: "/services/growth"
                },
                {
                  step: "04", name: "Scale", timeline: "3–4 weeks",
                  tagline: "Optimize what's working. Grow without adding headcount.",
                  description: "Reporting dashboards. Outbound prospecting systems. Agents that answer calls and chat 24/7. Content engines. Monthly management so someone's watching the machine.",
                  href: "/services/scale"
                },
              ].map((tier, index) => (
                <SimpleScrollReveal key={tier.name} direction="up" delay={index * 75}>
                  <Link
                    href={tier.href}
                    className="group flex flex-col h-full bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-widest">{tier.step}</span>
                      <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">{tier.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{tier.tagline}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{tier.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all duration-200">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Every system is scoped, documented, tested, and handed off. You own everything.
                </p>
                <Link
                  href="/services/infrastructure-review"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors whitespace-nowrap"
                >
                  Not sure where to start? Book a Review →
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── RESULTS ──────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="mb-14">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
                  Results that matter.
                </h2>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                  Real projects. Real outcomes.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { metric: "$52K/yr saved", client: "CR Deals Cincinnati", description: "Automated product listings across marketplaces", href: "/case-studies/fast-track-auction" },
                { metric: "20 hrs/wk back", client: "Hollow Bamboo Films", description: "Equipment tracking across 6 film locations", href: "/case-studies/hollow-bamboo" },
                { metric: "$4M identified", client: "Revolut", description: "Transaction analysis that used to take weeks", href: "/case-studies/revolut" },
                { metric: "15 hrs/mo back", client: "Modern Bungalow", description: "Customer email automation across 9 order scenarios", href: "/case-studies/modern-bungalow" },
              ].map((result, i) => (
                <SimpleScrollReveal key={result.client} direction="up" delay={i * 75}>
                  <Link
                    href={result.href}
                    className="group flex flex-col bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors duration-200 border border-transparent hover:border-blue-100 dark:hover:border-blue-900"
                  >
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
                      {result.metric}
                    </p>
                    <p className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">{result.client}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">{result.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all duration-200">
                      View case study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                See all case studies →
              </Link>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── REVIEWS ──────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="mb-14">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
                  What clients say.
                </h2>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                  15 reviews · All 5-star · From verified clients
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  quote: "Seth is my go-to for all of my automation projects now. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout.",
                  name: "Shopify / Xero Client",
                  project: "Product Sync Automation"
                },
                {
                  quote: "Extremely knowledgeable and patient. He thought outside the box to offer solutions we did not consider. Highly recommend — we will use him again in the future.",
                  name: "Power Apps Client",
                  project: "Review System Development"
                },
                {
                  quote: "Delivered an exceptional automation that transformed a key aspect of our daily operations. Professional, incredibly responsive, and has tons of ideas. Highly recommend.",
                  name: "Legal Tech Client",
                  project: "Court Records Automation"
                },
              ].map((review, i) => (
                <SimpleScrollReveal key={i} direction="up" delay={i * 75}>
                  <div className="bg-white dark:bg-gray-950 rounded-2xl p-7 h-full flex flex-col border border-gray-200 dark:border-gray-800">
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                      "{review.quote}"
                    </p>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-5">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-sm mt-0.5">{review.project}</p>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <Link href="/testimonials" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                See all 15 reviews →
              </Link>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── ABOUT ────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SimpleScrollReveal direction="up">
              <div className="w-16 h-16 mb-8 rounded-full overflow-hidden ring-2 ring-blue-100 dark:ring-blue-900">
                <OptimizedImage
                  src="/images/about/headshot-6.jpg"
                  alt="Seth Forte"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  sizes="64px"
                />
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-6">
                About Forte
              </h2>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                Seth spent 5 years building enterprise systems at Wells Fargo — where downtime costs six figures an hour. Now we solve the same class of problems for growing businesses: automation, integrations, custom software, and the infrastructure that holds it all together.
              </p>
              <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                We start every project by figuring out what the problem is actually costing you. If the math works, we build it. If it doesn't, we'll tell you.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                Our story →
              </Link>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                <video controls className="w-full">
                  <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-3 text-center uppercase tracking-widest">2-minute intro</p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* ─── CONTACT CTA ──────────────────────────────────────────────── */}
        <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
                  Tell us what's broken.
                </h2>
                <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                  Book a free call. No pitch, no pressure — just figuring out if we can help.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="700"
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
