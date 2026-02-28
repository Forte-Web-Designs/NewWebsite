"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import SimpleScrollReveal from "@/components/animations/SimpleScrollReveal";

const ROTATING_WORDS = ["A System", "The Right Data", "A Framework", "A Process", "Execution"];

const STATS = [
  { value: "$52K", label: "Saved per year", client: "CR Deals Cincinnati" },
  { value: "20 hrs", label: "Returned per week", client: "Hollow Bamboo Films" },
  { value: "$4M", label: "Opportunity found", client: "Revolut" },
];

const SERVICES = [
  {
    step: "01",
    name: "Foundation",
    timeline: "1-2 wks",
    tagline: "Get your system built and everything connected.",
    description:
      "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected so you're not starting with an empty system.",
    href: "/services/foundation",
  },
  {
    step: "02",
    name: "Launch",
    timeline: "1-3 wks",
    tagline: "Get people into the system. Start generating revenue.",
    description:
      "Foundation gave you the platform. Launch gives you the campaigns. Ad strategy, sales funnels, nurture sequences, and booking automation that turn strangers into leads and leads into customers, automatically.",
    href: "/services/launch",
  },
  {
    step: "03",
    name: "Growth",
    timeline: "2-3 wks",
    tagline: "Add channels. Convert more. Handle the volume.",
    description:
      "One channel is working. Now multiply it. More lead sources, agents for after-hours response, outbound prospecting, review automation, and the integrations that let you run more without hiring more.",
    href: "/services/growth",
  },
  {
    step: "04",
    name: "Scale",
    timeline: "3-4 wks",
    tagline: "Optimize what's working. Grow without adding headcount.",
    description:
      "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. Agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine.",
    href: "/services/scale",
  },
];

const RESULTS = [
  {
    metric: "$52K/yr saved",
    client: "CR Deals Cincinnati",
    detail: "Automated product listings across marketplaces",
    href: "/case-studies/fast-track-auction",
  },
  {
    metric: "20 hrs/wk back",
    client: "Hollow Bamboo Films",
    detail: "Equipment tracking across 6 film locations",
    href: "/case-studies/hollow-bamboo",
  },
  {
    metric: "$4M identified",
    client: "Revolut",
    detail: "Transaction analysis that used to take weeks",
    href: "/case-studies/revolut",
  },
  {
    metric: "15 hrs/mo back",
    client: "Modern Bungalow",
    detail: "Customer email automation across 9 order scenarios",
    href: "/case-studies/modern-bungalow",
  },
];

const REVIEWS = [
  {
    quote:
      "Seth is my go-to for all of my automation projects now. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout.",
    name: "Shopify / Xero Client",
    project: "Product Sync Automation",
  },
  {
    quote:
      "Extremely knowledgeable and patient. He thought outside the box to offer solutions we did not consider. Highly recommend and we will use him again in the future.",
    name: "Power Apps Client",
    project: "Review System Development",
  },
  {
    quote:
      "Delivered an exceptional automation that transformed a key aspect of our daily operations. Professional, incredibly responsive, and has tons of ideas. Highly recommend.",
    name: "Legal Tech Client",
    project: "Court Records Automation",
  },
];

export default function Home() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 220);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Forte Web Designs",
            url: "https://fortewebdesigns.com",
            description:
              "Automation systems, CRM integration, and custom software for growing businesses",
            email: "seth@fortewebdesigns.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Grapevine",
              addressRegion: "TX",
              addressCountry: "US",
            },
            areaServed: "United States",
            serviceType: [
              "Business Automation",
              "CRM Integration",
              "Custom Software",
              "Web Design",
            ],
            founder: { "@type": "Person", name: "Seth Forte" },
          }),
        }}
      />

      <main className="bg-white dark:bg-gray-950 overflow-x-hidden">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-28 px-4 sm:px-6 lg:px-8">
          {/* Subtle hero gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
          />

          <div className="relative mx-auto max-w-4xl text-center">


            {/* Headline */}
            <SimpleScrollReveal direction="up" delay={100}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Growth isn't luck.
              <br />
              It's{" "}
              <span
                aria-live="polite"
                className={`text-blue-600 dark:text-blue-400 transition-opacity duration-200 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                {ROTATING_WORDS[wordIdx]}
              </span>
              .
            </h1>
            </SimpleScrollReveal>

            {/* Subheading */}
            <SimpleScrollReveal direction="up" delay={180}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              We build the automation systems, pipelines, and infrastructure
              that eliminate manual work and make growth repeatable.
            </p>
            </SimpleScrollReveal>

            {/* CTAs */}
            <SimpleScrollReveal direction="up" delay={260}>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a Call
              </Link>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:hover:bg-gray-800"
              >
                See Our Work
              </Link>
            </div>
            </SimpleScrollReveal>

          </div>
        </section>

        {/* ── CLIENT STRIP ─────────────────────────────────────────── */}
        <div className="border-y border-gray-100 py-5 px-4 sm:px-6 lg:px-8 dark:border-gray-800">
          <div className="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              "Revolut",
              "Modern Bungalow",
              "Eden Medical",
              "Kingfisher Ads",
              "CR Deals",
              "Hollow Bamboo",
              "UDI Group",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS ────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
          <div className="mx-auto max-w-5xl grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
            {STATS.map((s, i) => (
              <SimpleScrollReveal key={s.value} direction="up" delay={i * 80}>
                <div>
                  <p className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
                    {s.client}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">

            {/* Section header */}
            <SimpleScrollReveal direction="up">
              <div className="mb-14 max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Services
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Four stages. One complete system.
                </h2>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                  Most businesses are missing one of these. A review tells you which.
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Service cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {SERVICES.map((svc, i) => (
                <SimpleScrollReveal key={svc.name} direction="up" delay={i * 70}>
                  <Link
                    href={svc.href}
                    className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-blue-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-800"
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400">
                        {svc.step}
                      </span>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                        {svc.timeline}
                      </span>
                    </div>
                    <h3 className="mb-1.5 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                      {svc.name}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {svc.tagline}
                    </p>
                    <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {svc.description}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Learn more
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            {/* Web design callout */}
            <SimpleScrollReveal direction="up">
              <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-dashed border-gray-300 bg-white p-7 sm:flex-row sm:items-center sm:justify-between dark:border-gray-700 dark:bg-gray-950">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    Also available
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    Web Design, Landing Pages and Funnels
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Custom websites, click funnels, and lead capture pages built
                    to convert. Available standalone or alongside any stage.
                  </p>
                </div>
                <Link
                  href="/services/web-design"
                  className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                >
                  Learn more
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>

            {/* Footer note */}
            <SimpleScrollReveal direction="up">
              <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Every system is scoped, documented, tested, and handed off.
                  You own everything.
                </p>
                <Link
                  href="/services/infrastructure-review"
                  className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 whitespace-nowrap"
                >
                  Not sure where to start? Book a Review →
                </Link>
              </div>
            </SimpleScrollReveal>

          </div>
        </section>

        {/* ── RESULTS ──────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl">

            <SimpleScrollReveal direction="up">
              <div className="mb-14 max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Results
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Real projects. Real outcomes.
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {RESULTS.map((r, i) => (
                <SimpleScrollReveal key={r.client} direction="up" delay={i * 70}>
                  <Link
                    href={r.href}
                    className="group flex flex-col rounded-2xl bg-gray-50 p-8 transition-all duration-200 hover:bg-blue-50 border border-transparent hover:border-blue-100 dark:bg-gray-900 dark:hover:bg-blue-950/30 dark:hover:border-blue-900"
                  >
                    <p className="mb-3 text-3xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-4xl">
                      {r.metric}
                    </p>
                    <p className="mb-1 text-base font-semibold text-gray-700 dark:text-gray-300">
                      {r.client}
                    </p>
                    <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">
                      {r.detail}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400">
                      View case study
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <div className="mt-10">
                <Link
                  href="/case-studies"
                  className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  See all case studies →
                </Link>
              </div>
            </SimpleScrollReveal>

          </div>
        </section>

        {/* ── REVIEWS ──────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-6xl">

            <SimpleScrollReveal direction="up">
              <div className="mb-14 max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Reviews
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  What clients say.
                </h2>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  5-star reviews from verified clients
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid gap-5 md:grid-cols-3 mb-10">
              {REVIEWS.map((rev, i) => (
                <SimpleScrollReveal key={i} direction="up" delay={i * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950">
                    {/* Stars */}
                    <div className="mb-5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <svg
                          key={j}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote */}
                    <p className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                      "{rev.quote}"
                    </p>
                    {/* Attribution */}
                    <div className="border-t border-gray-100 pt-5 dark:border-gray-800">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {rev.name}
                      </p>
                      <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
                        {rev.project}
                      </p>
                    </div>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>

            <SimpleScrollReveal direction="up">
              <Link
                href="/testimonials"
                className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                See all 15 reviews →
              </Link>
            </SimpleScrollReveal>

          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
          <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

            <SimpleScrollReveal direction="up">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full ring-2 ring-blue-100 dark:ring-blue-900 mb-8">
                <OptimizedImage
                  src="/images/about/headshot-6.jpg"
                  alt="Seth Forte"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                  sizes="56px"
                />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                About
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                About Forte
              </h2>
              <p className="mb-5 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
                Seth spent 5 years building enterprise-grade systems where
                downtime costs six figures an hour. Now we solve the same class
                of problems for growing businesses: automation, integrations,
                custom software, and the infrastructure that holds it all
                together.
              </p>
              <p className="mb-8 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
                We start every project by figuring out what the problem is
                actually costing you. If the math works, we build it. If it
                doesn't, we'll tell you.
              </p>
              <Link
                href="/about"
                className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Our story →
              </Link>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
                <video controls className="w-full">
                  <source
                    src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                2-minute intro
              </p>
            </SimpleScrollReveal>

          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900"
        >
          <div className="mx-auto max-w-4xl">

            <SimpleScrollReveal direction="up">
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Get in touch
                </p>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Tell us what's broken.
                </h2>
                <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                  Book a free call. No pitch, no pressure. Just figuring out if
                  we can help.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
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

      </main>
    </>
  );
}
