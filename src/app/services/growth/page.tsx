import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Growth | Forte Web Designs',
  description:
    'More channels, AI engagement, outbound prospecting, and systems that let you scale without adding headcount. Growth multiplies what\'s already working.',
};

const PROBLEMS = [
  {
    title: 'More Leads',
    description:
      'You have one source working. Now add more: inbound capture from multiple channels, outbound cold email, or both running simultaneously.',
  },
  {
    title: 'Booked Appointments',
    description:
      'Traffic turns into booked calls on your calendar. Automatically. No manual scheduling, no missed follow-ups.',
  },
  {
    title: 'A Sales Funnel',
    description:
      'Landing page to opt-in to lead magnet to nurture sequence to offer. The whole path automated from first click to purchase.',
  },
  {
    title: 'Stop Losing Leads',
    description:
      'Every lead gets a response in under 60 seconds. Automated follow-up for weeks after. Nobody falls through the cracks.',
  },
];

const DELIVERABLES = [
  {
    title: 'Inbound Lead Capture System',
    description:
      'Multi-channel lead capture from forms, landing pages, and ad platforms. Every lead tagged by source and routed into your CRM pipeline automatically.',
  },
  {
    title: 'Meta Lead Ads to CRM Pipeline',
    description:
      'Facebook and Instagram lead ads connected directly to your CRM. Leads appear instantly, tagged by campaign, with automated follow-up triggered on arrival.',
  },
  {
    title: 'Outbound Cold Email System',
    description:
      'Find your ideal prospects, personalize outreach with AI, and route positive replies directly to your CRM. Proactive pipeline on top of inbound.',
  },
  {
    title: 'Email and SMS Nurture Sequences',
    description:
      'Automated follow-up sequences across email and SMS. Triggered by lead actions, timed for maximum conversion, running in the background 24/7.',
  },
  {
    title: 'Booking System with Tracking',
    description:
      'Calendar booking connected to your CRM with full attribution tracking. Know exactly which channel, campaign, and touchpoint produced each booked call.',
  },
  {
    title: 'Sales Funnel Automation',
    description:
      'Landing pages, lead magnets, nurture sequences, and offer pages connected end-to-end. One automated path from stranger to customer.',
  },
  {
    title: 'Review and Reputation Automation',
    description:
      'Automated review requests sent after service delivery. Route happy customers to Google, handle concerns privately before they go public.',
  },
];

export default function GrowthPage() {
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
              Stage 03 · Growth
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Leads don't pay bills. Customers do.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Launch got leads flowing. Growth multiplies what's working: more channels, AI engagement, outbound prospecting, and systems that let you scale without adding headcount.
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

      {/* ── WHAT YOU'RE TRYING TO SOLVE ───────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              What you're trying to solve
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Pick your outcome.
            </h2>
          </SimpleScrollReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {PROBLEMS.map((item, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={i * 60}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950">
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
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

      {/* ── THE MATH ──────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-8 text-center dark:border-blue-900/50 dark:bg-blue-950/30">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                The math
              </p>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
                If you're closing 10% of leads and your average customer is worth a few thousand dollars, even a small increase in lead volume or conversion rate compounds fast. Most Growth systems pay for themselves within the first 30–60 days.
              </p>
            </div>
          </SimpleScrollReveal>
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
                Once leads are flowing and converting, the next step is Scale.
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
                Reporting, optimization, and expansion - so you know what's working best and can do more of it without breaking what's already producing.
              </p>
              <Link
                href="/services/scale"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                See what Scale looks like
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
              Not sure which Growth systems you need?
            </p>
            <Link
              href="https://calendly.com/seth-fortewebdesigns/30min"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book an Infrastructure Review - it identifies your highest-ROI opportunities and credits toward any project.
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
