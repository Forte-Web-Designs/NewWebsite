"use client";

import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

const DIFFERENTIATORS = [
  {
    title: "We Tell You When You Shouldn't Automate",
    body: "If fixing your process makes more sense than building something new, we'll tell you — even when it costs us revenue.",
  },
  {
    title: 'We Think Long-Term, Even on One-Off Projects',
    body: "Even on one-off projects, we're thinking about where your business is headed. What sets you up for scale.",
  },
  {
    title: 'You Work Directly With Seth',
    body: 'No account managers. No junior developers. No bait-and-switch. You work directly with Seth.',
  },
  {
    title: 'We Lead With Generosity',
    body: 'Every proposal includes a complete project plan: gotchas, hidden costs, clear scope. For complex projects, we prove the approach works before you commit.',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              About
            </p>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              About Forte Web Designs
            </h1>
            <h2 className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 dark:text-gray-400 sm:text-2xl">
              What You're Actually Paying For When You Hire Us
            </h2>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

          {/* Headshot */}
          <SimpleScrollReveal direction="up">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-10 flex items-center justify-center">
              <div className="text-center">
                <div className="relative mx-auto mb-5 h-48 w-48">
                  <div className="h-full w-full overflow-hidden rounded-full shadow-xl ring-4 ring-blue-200 dark:ring-blue-800">
                    <OptimizedImage
                      src="/images/about/headshot-6.jpg"
                      alt="Seth Forte, Founder of Forte Web Designs"
                      width={192}
                      height={192}
                      className="h-full w-full object-cover"
                      priority
                      sizes="192px"
                    />
                  </div>
                </div>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Seth Forte</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Founder and Lead Developer</p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Philosophy */}
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              <p>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  What are you actually paying for when you hire a consultant?
                </strong>{' '}
                Most people think it's the technical work. But the technical build is the easy part.
              </p>
              <p>
                The value is understanding your business. Spotting the opportunities you're missing. Building for where you're headed, not just what you think you need today.
              </p>
              <p>
                Every proposal we send includes a full project plan: gotchas, hidden costs, solution outline. It's free. No contract required. Because the hard part isn't building. It's understanding.
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-900/50 dark:bg-blue-950/30">
                <p className="text-base text-gray-800 dark:text-gray-200 font-medium">
                  If you want someone who thinks about your business like it's their own, we should talk.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

        </div>
      </section>

      {/* ── VIDEO ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              2-minute intro
            </p>
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
              Prefer video? Here's the short version.
            </h2>
            <div className="overflow-hidden rounded-2xl bg-gray-900 shadow-xl">
              <video controls className="w-full">
                <source
                  src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── BACKGROUND ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Background
            </p>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Our Background
            </h2>
          </SimpleScrollReveal>
          <div className="space-y-5 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            <SimpleScrollReveal direction="up" delay={80}>
              <p>
                5+ years building enterprise systems: the kind that handle millions of transactions and can't afford to break. Featured in Voyage Dallas, BUiLT, and Orbie.
              </p>
            </SimpleScrollReveal>
            <SimpleScrollReveal direction="up" delay={140}>
              <p className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                We don't just build things and disappear. We care whether your systems work six months from now.
              </p>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHY WE STARTED ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Origin
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why We Started Forte
            </h2>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              We kept seeing businesses outgrow their systems while consultants treated every project like a transaction. We started Forte to do it differently.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ───────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">

          <SimpleScrollReveal direction="up">
            <div className="mb-14 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Our approach
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                What Makes Us Different
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d, i) => (
              <SimpleScrollReveal key={d.title} direction="up" delay={i * 70}>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
                    {d.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {d.body}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Get in touch
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Let's Talk
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              Book a call and tell us what's not working.
            </p>
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
                View Our Work
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SimpleScrollReveal direction="up">
            <ContactForm />
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
