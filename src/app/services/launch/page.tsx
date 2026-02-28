import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Launch | Forte Web Designs',
  description:
    'Traffic, funnels, follow-up sequences, and lead flow. Launch gets people into your system and turns a good infrastructure into a working business.',
};

const PROBLEMS = [
  'Your CRM is set up perfectly. Zero contacts in it. A pipeline with no deals is just a pretty diagram.',
  'You post on social media when you remember. Maybe 5–10 leads a month trickle in. Not enough to build a business on.',
  "Someone fills out a form. You see the email three hours later. By then they've already called your competitor.",
  'No funnel. No nurture sequence. No way to turn a stranger into a customer without doing every step manually.',
];

const DELIVERABLES = [
  {
    title: 'Traffic System',
    description:
      'Your first real traffic source connected and producing. Meta ads, Google ads, or organic content strategy - whichever fits your business. Leads flow directly into your CRM, tagged by source, tracked from click to close.',
  },
  {
    title: 'Sales Funnel',
    description:
      'Landing page to opt-in to lead magnet to nurture sequence to offer. One automated path from stranger to customer. Every step measured so you know exactly where people drop off.',
  },
  {
    title: 'Email and SMS Nurture Sequences',
    description:
      'Automated follow-up that runs for weeks after someone enters your system. Email and SMS sequences timed for maximum conversion. Every lead gets the same consistent experience whether you\'re asleep or on a call.',
  },
  {
    title: 'Instant Lead Response',
    description:
      'Every new lead gets a response in under 60 seconds. Auto-text, auto-email, team notification. The speed-to-lead gap is where most businesses lose deals they already paid for.',
  },
  {
    title: 'Booking Automation',
    description:
      'Calendar booking embedded in your funnel and follow-up sequences. Leads self-schedule, get reminders, and show up. No manual back-and-forth to get someone on a call.',
  },
  {
    title: 'Inbound Capture',
    description:
      'Multi-channel lead capture from website forms, social media, and ad platforms. Every entry point connected to your CRM with proper tagging and routing. No leads lost between platforms.',
  },
];

const SOUND_FAMILIAR = [
  'CRM works but nobody\'s in it',
  'Posting on social with no strategy',
  'Leads come in but nobody follows up fast enough',
  'No funnel, no sequences, no automation',
  'Manually chasing every lead',
  'Paying for ads with no system to catch the leads',
  'Website traffic but no conversions',
  'Know you need leads but don\'t know where to start',
];

export default function LaunchPage() {
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
              Stage 02 · Launch
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              You built the system. Now it's empty.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Infrastructure doesn't generate revenue on its own. Launch gets people into it: traffic, funnels, follow-up sequences, and the lead flow that turns a good system into a working business.
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={240}>
            <a
                href="https://calendly.com/seth-fortewebdesigns/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a Review
              </a>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── THE PROBLEM ───────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              The problem
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A system with no leads is a liability.
            </h2>
          </SimpleScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {PROBLEMS.map((item, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 60}>
                <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-950/40">
                    <svg className="h-3 w-3 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT GETS BUILT ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              Deliverables
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What gets built
            </h2>
          </SimpleScrollReveal>
          <div className="divide-y divide-gray-100 dark:divide-gray-800 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 overflow-hidden">
            {DELIVERABLES.map((item, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 40}>
                <div className="p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-sm shadow-blue-500/20">
                      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-base font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOUND FAMILIAR ────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              Sound familiar?
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Launch is for you if...
            </h2>
          </SimpleScrollReveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {SOUND_FAMILIAR.map((item, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 40}>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 dark:border-gray-800 dark:bg-gray-950">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEXT STEP ─────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center dark:border-blue-900/50 dark:bg-blue-950/30">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                What comes next
              </p>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
                Once leads are flowing, the next step is Growth.
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Multi-channel expansion, AI engagement, and systems that multiply what's already producing - without adding headcount.
              </p>
              <Link
                href="/services/growth"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                See what Growth looks like
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── INFRASTRUCTURE REVIEW CTA ─────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
              Not sure if Launch is the right move?
            </p>
            <Link
              href="https://calendly.com/seth-fortewebdesigns/30min"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Infrastructure Review - it identifies exactly where you are and what to build first, and credits toward any project.
              <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
