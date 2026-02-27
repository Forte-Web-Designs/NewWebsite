"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeInOut, setFadeInOut] = useState(true);

  const rotatingWords = ["A System", "Using The Right Data", "A Framework", "A Process", "Execution"];

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
      timeline: "1–2 WEEKS",
      description: "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected so you're not starting with an empty system.",
      href: "/services/foundation"
    },
    {
      step: "02",
      name: "Launch",
      tagline: "Get people into the system. Start generating revenue.",
      timeline: "1–3 WEEKS",
      description: "Foundation gave you the platform. Launch gives you the campaigns. Ad strategy, sales funnels, nurture sequences, and booking automation that turn strangers into leads and leads into customers, automatically.",
      href: "/services/launch"
    },
    {
      step: "03",
      name: "Growth",
      tagline: "Add channels. Convert more. Handle the volume.",
      timeline: "2–3 WEEKS",
      description: "One channel is working. Now multiply it. Add more lead sources, AI agents for after-hours response, outbound prospecting, review automation, and the integrations that let you run more without hiring more.",
      href: "/services/growth"
    },
    {
      step: "04",
      name: "Scale",
      tagline: "Optimize what's working. Grow without adding headcount.",
      timeline: "3–4 WEEKS",
      description: "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. AI agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine.",
      href: "/services/scale"
    }
  ];

  const results = [
    { client: "CR Deals Cincinnati", metric: "$52K/yr saved", description: "AI-powered product listings across marketplaces", href: "/case-studies/fast-track-auction" },
    { client: "Hollow Bamboo", metric: "20 hrs/wk back", description: "Equipment tracking across 6 film locations", href: "/case-studies/hollow-bamboo" },
    { client: "Revolut", metric: "$4M found", description: "Transaction analysis that used to take weeks", href: "/case-studies/revolut" }
  ];

  const reviews = [
    {
      quote: "Seth is my go-to for all of my automation projects now and he's making my business run so much more smoothly and efficiently. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout the process.",
      name: "Shopify / Xero Client",
      project: "Product Sync Automation"
    },
    {
      quote: "Seth was amazing. Extremely knowledgeable and patient. He thought outside the box to offer us solutions we did not consider. Highly recommend Seth and we will use him in the future.",
      name: "Power Apps Client",
      project: "Review System Development"
    },
    {
      quote: "Seth delivered an exceptional automation that transformed a key aspect of our daily operations. He not only built the system, but also guided us through it in real-time, ensuring we were fully comfortable. Professional, incredibly responsive, and has tons of ideas.",
      name: "Legal Tech Client",
      project: "Court Records Automation"
    },
    {
      quote: "I can just detail my process and pain points and he figures out how to streamline and then automate. He's communicative and forthcoming with all of the details along the way, and stays with it until we get the tech working perfectly.",
      name: "Small Business Client",
      project: "Workflow Automation"
    },
    {
      quote: "Seth is an amazing rare breed. He is not just focused on what is asked of him, he actually scopes the need to make sure the work meets your need to the maximum level. Brilliant Developer and the kind of man you wished was your neighbor.",
      name: "AWS Client",
      project: "Asset Management Platform"
    },
    {
      quote: "He figured out the problem immediately. Fixed it in 2 hours when he quoted 3-4. And the kicker? He did this while on vacation. Super easy to work with. Clearly knows his stuff. The workflow runs perfectly now and he added error handling so it won't break again.",
      name: "Developer Client",
      project: "n8n Workflow Fix"
    }
  ];

  return (
    <>
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

        {/* Hero */}
        <section id="hero" className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-6">
                  Systems Architect & Automation Consultant
                </p>
                <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-gray-900 dark:text-white mb-8">
                  <span className="block">Business growth</span>
                  <span className="block">isn't luck. It's{" "}
                    <span
                      className={`bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-opacity duration-250 inline-block ${fadeInOut ? 'opacity-100' : 'opacity-0'}`}
                      aria-live="polite"
                    >
                      {rotatingWords[currentWordIndex]}
                    </span>
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Automation, CRM pipelines, reporting dashboards, lead generation, funnels, and the infrastructure that holds it all together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 text-lg"
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center px-8 py-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-200 text-lg"
                  >
                    See My Work
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="py-8 border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 mb-3">
                {["Revolut", "Modern Bungalow", "Eden Medical", "Kingfisher Ads", "CR Deals Cincinnati", "Hollow Bamboo", "UDI Group"].map((logo) => (
                  <span key={logo} className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    {logo}
                  </span>
                ))}
              </div>
              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                As Featured in{' '}
                <a href="https://voyagedallas.com/interview/community-highlights-meet-seth-forte-of-forte-web-designs/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voyage Dallas Magazine
                </a>
                {' '}· 23 completed projects · All 5-star reviews
              </p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* What I Build */}
        <section id="services" className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <div className="mb-16">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                  What I Build
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">
                  Most businesses come to me with one of three problems: no systems, systems that don't talk to each other, or systems that can't handle the growth. The fix depends on where you are.
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="space-y-4">
              {tiers.map((tier, index) => (
                <SimpleScrollReveal key={tier.name} direction="up" delay={index * 75}>
                  <Link href={tier.href} className="block group">
                    <div className="bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-2xl p-7 sm:p-8 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tabular-nums flex-shrink-0 mt-1">
                          {tier.step}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {tier.name}
                            </h3>
                            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                              {tier.timeline}
                            </span>
                          </div>
                          <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                            {tier.tagline}
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                            {tier.description}
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-1 hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-8">
                Every system is scoped, documented, tested, and handed off with training. You own everything.
              </p>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Infrastructure Review CTA */}
        <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <SimpleScrollReveal direction="up">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    Not sure where to start?
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    The Infrastructure Review looks at your setup, identifies the biggest opportunities, and gives you a prioritized roadmap with ROI estimates. The fee credits toward any build.
                  </p>
                </div>
                <Link
                  href="/services/infrastructure-review"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 whitespace-nowrap text-sm flex-shrink-0"
                >
                  Book a Review
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Results */}
        <section className="py-24 sm:py-32 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-12">
                Results
              </h2>
            </SimpleScrollReveal>

            <div className="border-t border-gray-100 dark:border-gray-800">
              {results.map((result, index) => (
                <SimpleScrollReveal key={result.client} direction="up" delay={index * 75}>
                  <Link
                    href={result.href}
                    className="flex items-center justify-between py-6 border-b border-gray-100 dark:border-gray-800 group -mx-4 px-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors rounded-lg"
                  >
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {result.metric}
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-0.5">{result.client}</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500">{result.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="mt-8">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  See all results
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-12">
                What Clients Say
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {reviews.map((review, index) => (
                <SimpleScrollReveal key={index} direction="up" delay={index * 75}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                      "{review.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                      <p className="text-gray-400 dark:text-gray-500 text-xs">{review.project}</p>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <Link
                href="/testimonials"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                See all reviews
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* About */}
        <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <SimpleScrollReveal direction="up">
                <div>
                  <div className="w-20 h-20 mb-6 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-700">
                    <OptimizedImage
                      src="/images/about/headshot-6.jpg"
                      alt="Seth Forte"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-4">
                    I'm Seth.
                  </h2>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                    I build the system your business runs on — the part that connects your tools, automates the manual work, and shows you what's actually working. 5 years building enterprise systems at Wells Fargo. Now I solve the same problems for growing businesses.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    More about me
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-xl">
                  <video controls className="w-full">
                    <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-3 text-center">
                  2-minute intro
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                  Let's Talk
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Book a call and tell me what's not working.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
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
