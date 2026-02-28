import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Scale | Forte Web Designs',
  description:
    'Reporting, outbound prospecting, AI agents, content engines, and monthly management. Scale multiplies what\'s already working without adding headcount.',
};

const SYSTEMS = [
  {
    title: 'Reporting and Dashboards',
    description:
      'One place to see what\'s working. Ad spend, lead sources, pipeline, revenue — pulled together automatically so you\'re never guessing.',
  },
  {
    title: 'Outbound Prospecting',
    description:
      'Cold email that finds prospects, personalizes with AI, and routes positive replies directly to your CRM. Proactive pipeline running in the background.',
  },
  {
    title: 'AI Voice and Chat Agents',
    description:
      'AI that answers your phone 24/7, qualifies callers, and books appointments directly on your calendar — without a human in the loop.',
  },
  {
    title: 'Content Engine',
    description:
      'Turn one video or post into 10–15 pieces of content. AI writes, automation distributes. Stay visible without doing it all manually.',
  },
  {
    title: 'Monthly Management',
    description:
      'We run the system so you don\'t have to. Monitoring, optimization, reporting, and support on an ongoing basis.',
  },
  {
    title: 'Multi-Channel Expansion',
    description:
      'Add SMS, WhatsApp, new ad platforms, or outbound channels on top of what\'s already working — without rebuilding from scratch.',
  },
];

export default function ScalePage() {
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
              Stage 04 · Scale
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              You've proven what works. Now multiply it.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto mb-10 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Better data, smarter systems, and growth without adding headcount.
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
                Start with a Review
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── SYSTEMS ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 text-center">
              What I build at this stage
            </p>
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Systems built for scale
            </h2>
          </SimpleScrollReveal>
          <div className="divide-y divide-gray-100 dark:divide-gray-800 rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 overflow-hidden">
            {SYSTEMS.map((item, i) => (
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

      {/* ── WHO THIS IS FOR ───────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Who this is for
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Already generating leads and revenue.
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              You know what's working but need better visibility, more channels, or someone to manage the machine. If you're still building your foundation,{' '}
              <Link href="/services/foundation" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                start with Foundation
              </Link>{' '}
              or{' '}
              <Link href="/services/growth" className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                Growth
              </Link>{' '}
              first.
            </p>
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
                Start with a Review
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Get in touch
              </p>
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Ready to scale what's working?
              </h2>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Tell us where you are and what you're trying to multiply. We'll take it from there.
              </p>
            </div>
            <ContactForm />
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
