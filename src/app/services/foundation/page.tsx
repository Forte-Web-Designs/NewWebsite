import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Foundation | Forte Web Designs',
  description:
    'CRM, payment processing, email deliverability, booking, and tracking. Get your infrastructure connected before you start spending on growth.',
};

const COST_OF_NOTHING = [
  'Every lead that hits a broken form or dead inbox is revenue you already paid for and lost.',
  "Every email that lands in spam burns the sender reputation you'll need later.",
  "Every week without tracking is a week you're spending money blind.",
  'Every manual follow-up you forget is a customer your competitor gets instead.',
];

const DELIVERABLES = [
  {
    title: 'Lead Capture',
    description:
      "Your first lead source connected and producing. Whether that's a Meta ad, a website form, or a landing page opt-in - leads flow directly into your CRM, tagged by source, with an instant auto-response and team notification.",
  },
  {
    title: 'CRM and Pipeline',
    description:
      'Sales pipeline with stages that match how you actually sell. Contact tags, custom fields, and segmentation so you can find anyone and know exactly where they are.',
  },
  {
    title: 'Payment Processing',
    description:
      'Stripe or your processor connected. Products configured. Receipts and confirmations automated. You can take money on day one.',
  },
  {
    title: 'Email Infrastructure',
    description:
      'Domain authentication (SPF, DKIM, DMARC) configured and tested. Business email connected to your CRM. Deliverability validated so your messages land in inboxes, not spam.',
  },
  {
    title: 'Booking and Intake',
    description:
      'Calendar connected for scheduling. Intake forms or applications built and routed. No more back-and-forth emails to book a call.',
  },
  {
    title: 'Tracking',
    description:
      "Google Analytics or Meta Pixel installed. Basic conversion events configured. You'll know where traffic is coming from and what it's doing.",
  },
  {
    title: 'Integrations',
    description:
      '1–2 core integrations connecting your most important tools. Calendar, forms, payment processor - whatever needs to talk to the CRM.',
  },
  {
    title: 'Documentation and Training',
    description:
      "System overview document, credentials, a Loom walkthrough of everything, and post-handoff support so you're not lost after delivery.",
  },
];

const SOUND_FAMILIAR = [
  'Contacts in spreadsheets, no pipeline',
  'Paying for a CRM nobody configured',
  "Tracking is broken - can't tell what works",
  'Emails landing in spam',
  'Running everything on manual follow-up',
  'Built a CRM but have zero leads in it',
  'Just hired marketing with no system to work in',
  'Need a system AND traffic, not just the system',
];

export default function FoundationPage() {
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
              Stage 01 · Foundation
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Everything you're building is leaking.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Leads fall through cracks. Emails land in spam. Nobody knows what's converting. Foundation fixes the infrastructure so the rest of it actually works.
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

      {/* ── COST OF DOING NOTHING ─────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              The cost of doing nothing
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Every week without this is expensive.
            </h2>
          </SimpleScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {COST_OF_NOTHING.map((item, i) => (
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

      {/* ── WHAT YOU WALK AWAY WITH ───────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              Deliverables
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What you walk away with
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
              Foundation is for you if...
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

      {/* ── TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              Timeline
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What to expect
            </h2>
          </SimpleScrollReveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { label: 'Discovery to Handoff', sub: '1–2 weeks end to end', icon: '01' },
              { label: 'Full Ownership', sub: 'Everything documented - you own it all', icon: '02' },
              { label: 'Post-Delivery Support', sub: '7–14 days included after handoff', icon: '03' },
            ].map((item, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 70}>
                <div className="rounded-2xl border border-gray-200 bg-white p-7 text-center dark:border-gray-800 dark:bg-gray-950">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-md shadow-blue-500/20">
                    {item.icon}
                  </div>
                  <p className="mb-1.5 text-base font-bold text-gray-900 dark:text-white">{item.label}</p>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{item.sub}</p>
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
                Once your system is live, the next step is Launch.
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Traffic, funnels, follow-up sequences, and the lead flow that turns your infrastructure into revenue.
              </p>
              <Link
                href="/services/launch"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                See what Launch looks like
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
              Not sure if Foundation is where you start?
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
