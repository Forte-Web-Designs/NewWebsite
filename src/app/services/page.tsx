import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';

export const metadata: Metadata = {
  title: 'Services | Forte Web Designs',
  description: 'Four stages of systems built for where your business is right now. Automation, CRM, reporting, web design, and the infrastructure to grow.',
};

const TIERS = [
  {
    step: '01',
    name: 'Foundation',
    timeline: '1-2 weeks',
    tagline: 'Get your system built and everything connected.',
    description:
      "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected so you're not starting with an empty system.",
    includes: [
      'CRM setup with sales pipeline',
      'Payment processing',
      'Email deliverability',
      'Booking and intake forms',
      'Lead source tracking',
      'First lead channel connected',
    ],
    href: '/services/foundation',
  },
  {
    step: '02',
    name: 'Launch',
    timeline: '1-3 weeks',
    tagline: 'Get people into the system. Start generating revenue.',
    description:
      'Foundation gave you the platform. Launch gives you the campaigns. Ad strategy, sales funnels, nurture sequences, and booking automation that turn strangers into leads and leads into customers, automatically.',
    includes: [
      'Ad strategy and traffic',
      'Sales funnels',
      'Email and SMS nurture sequences',
      'Instant lead response',
      'Booking automation',
      'Inbound lead capture',
    ],
    href: '/services/launch',
  },
  {
    step: '03',
    name: 'Growth',
    timeline: '2-3 weeks',
    tagline: 'Add channels. Convert more. Handle the volume.',
    description:
      'One channel is working. Now multiply it. More lead sources, agents for after-hours response, outbound prospecting, review automation, and the integrations that let you run more without hiring more.',
    includes: [
      'Multi-channel lead capture',
      'Outbound cold email',
      'After-hours agents',
      'Review automation',
      'Advanced integrations',
      'Outbound prospecting',
    ],
    href: '/services/growth',
  },
  {
    step: '04',
    name: 'Scale',
    timeline: '3-4 weeks',
    tagline: "Optimize what's working. Grow without adding headcount.",
    description:
      "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. Agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine.",
    includes: [
      'Reporting dashboards',
      'Outbound prospecting systems',
      'Voice and chat agents',
      'Content engine',
      'Monthly management',
      'Multi-channel expansion',
    ],
    href: '/services/scale',
  },
];

const CAPABILITIES = [
  {
    title: 'Automation',
    description: 'Workflows that replace the manual work eating your week.',
  },
  {
    title: 'Custom Software',
    description: "When off-the-shelf tools don't fit how you actually work.",
  },
  {
    title: 'Integrations and APIs',
    description: 'Connecting the tools you already use so data moves once.',
  },
  {
    title: 'Web Design and Funnels',
    description: 'Click funnels, landing pages, and websites built to capture and convert leads.',
  },
];

const RESULTS = [
  { client: 'CR Deals Cincinnati', metric: '$52K/year saved', href: '/case-studies/fast-track-auction' },
  { client: 'Modern Bungalow', metric: '15 hrs/month back', href: '/case-studies/modern-bungalow' },
  { client: 'Revolut', metric: '$4M opportunity found', href: '/case-studies/revolut' },
  { client: 'Hollow Bamboo', metric: '20 hrs/week back', href: '/case-studies/hollow-bamboo' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <SimpleScrollReveal direction="up" delay={0}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Services
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              What We Build
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Most businesses that come to us are dealing with one of three things: no systems at all, systems that don't talk to each other, or systems they've outgrown that are starting to break. The fix depends on where you are.
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={240}>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a Call
              </Link>
              <Link
                href="/services/infrastructure-review"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:hover:bg-gray-800"
              >
                Not sure? Book a Review
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── TIERS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">

          <SimpleScrollReveal direction="up">
            <div className="mb-10 max-w-xl mx-auto text-center sm:mx-0 sm:text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                The System
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Four stages. One complete system.
              </h2>
              <p className="mt-4 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                Each stage builds on the last. Most businesses are missing at least one.
              </p>
            </div>
          </SimpleScrollReveal>

          {/* Timeline progress bar */}
          <SimpleScrollReveal direction="up" delay={80}>
            <div className="mb-10 flex items-center">
              {TIERS.map((tier, i) => (
                <div key={tier.step} className="flex flex-1 items-center">
                  <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                      {tier.step}
                    </div>
                    <span className="hidden text-xs font-medium text-gray-500 dark:text-gray-400 sm:block whitespace-nowrap">
                      {tier.name}
                    </span>
                  </div>
                  {i < TIERS.length - 1 && (
                    <div className="mx-2 flex flex-1 items-center gap-1">
                      <div className="h-px flex-1 bg-gradient-to-r from-blue-400 to-indigo-400 dark:from-blue-600 dark:to-indigo-600" />
                      <svg className="h-3 w-3 flex-shrink-0 text-indigo-400 dark:text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SimpleScrollReveal>

          {/* Stage cards with gradient borders */}
          <div className="grid gap-5 sm:grid-cols-2">
            {TIERS.map((tier, i) => (
              <SimpleScrollReveal key={tier.name} direction="up" delay={i * 80}>
                {/* Gradient border wrapper */}
                <div className="h-full rounded-2xl p-px bg-gradient-to-br from-blue-500/60 via-indigo-500/30 to-transparent dark:from-blue-500/50 dark:via-indigo-500/20">
                  <div className="flex h-full flex-col rounded-2xl bg-white p-8 dark:bg-gray-950">
                    <div className="mb-6">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-sm shadow-blue-500/30">
                        {tier.step}
                      </div>
                    </div>
                    <h3 className="mb-1.5 text-xl font-bold text-gray-900 dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {tier.tagline}
                    </p>
                    <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {tier.description}
                    </p>
                    <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 flex-1">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tier.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Learn more
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <p className="mt-10 text-center text-sm text-gray-400 dark:text-gray-500">
              Every system is scoped, documented, tested, and handed off with training. You own everything we build.
            </p>
          </SimpleScrollReveal>

        </div>
      </section>

      {/* ── HOW WE BUILD IT ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">

          <SimpleScrollReveal direction="up">
            <div className="mb-14 text-center max-w-xl mx-auto">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Capabilities
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                How We Build It
              </h2>
              <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                These systems get built using whatever the job needs. These are the tools in the toolbox.
              </p>
            </div>
          </SimpleScrollReveal>

          {/* Equal-height capability cards via grid + h-full */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {CAPABILITIES.map((cap, i) => (
              <SimpleScrollReveal key={cap.title} direction="up" delay={i * 70}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-7 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-base font-bold text-gray-900 dark:text-white">
                    {cap.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {cap.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ── INFRASTRUCTURE REVIEW CTA ─────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Not sure where to start?
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Book an Infrastructure Review
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              We look at your current setup, identify the biggest opportunities, and hand you a prioritized roadmap with ROI estimates. If you move forward with a build, the review fee applies as credit.
            </p>
            <Link
              href="/services/infrastructure-review"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Book a Review
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-6xl">

          <SimpleScrollReveal direction="up">
            <div className="mb-14 max-w-xl mx-auto text-center sm:mx-0 sm:text-left">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Results
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Real projects. Real outcomes.
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="mb-10 divide-y divide-gray-100 dark:divide-gray-800">
            {RESULTS.map((r, i) => (
              <SimpleScrollReveal key={r.client} direction="up" delay={i * 60}>
                <Link
                  href={r.href}
                  className="group flex items-center justify-between py-5 transition-colors"
                >
                  <span className="text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {r.client}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-bold text-gray-700 dark:text-gray-300">
                      {r.metric}
                    </span>
                    <svg className="h-4 w-4 text-gray-300 transition-colors group-hover:text-blue-500 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <Link href="/case-studies" className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              See all case studies →
            </Link>
          </SimpleScrollReveal>

        </div>
      </section>

      {/* ── BOOK A CALL ───────────────────────────────────────────── */}
      <section id="book-a-call" className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
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
              Get in touch
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Got a problem?
            </h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              Book a call. Just tell us what's not working.
            </p>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={100}>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
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
  );
}
