import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata: Metadata = {
  title: 'Case Studies | Real Results from Automation Projects | Forte Web Designs',
  description: 'Real projects with real outcomes. See how we\'ve saved clients 1,000+ hours annually, $52K in costs, and built systems that run autonomously.',
};

const caseStudies = [
  {
    id: 'fast-track-auction',
    title: 'CR Deals Cincinnati',
    tags: ['E-commerce', 'AI Automation'],
    metric: '$52K saved annually',
    problem: 'Leading Cincinnati auction house was drowning in manual product listing work. Every item needed photography analysis, descriptions written, and posting across multiple sales channels. The manual process was eating 80+ hours a month and couldn\'t keep up with 1,500–3,000 products coming through each month.',
    solution: 'An AI system that handles the entire product pipeline. Analyzes photography automatically, generates listing content, and distributes to all sales channels. Runs around the clock without anyone touching it.',
    results: [
      '1,040+ hours saved annually',
      '$52K annual cost savings',
      '3,000 products processed monthly',
      'Paid for itself in the first month',
    ],
    quote: null,
    quoteAuthor: null,
  },
  {
    id: 'modern-bungalow',
    title: 'Modern Bungalow',
    tags: ['E-commerce', 'Shopify'],
    metric: '15 hrs/month back',
    problem: 'Denver furniture retailer was manually sending 30–40 customer emails every day - 15+ hours a month just on customer communication. Order confirmations, production updates, delivery coordination. Someone had to remember to send the right email at the right time, and things were falling through the cracks.',
    solution: 'A system that monitors Shopify orders and automatically sends the right email based on order status. Handles 9 different scenarios based on product type and delivery partner. Prevents duplicates and logs everything.',
    results: [
      '15+ hours saved monthly',
      '9 email scenarios automated',
      'Zero missed communications',
      'ROI in under 8 weeks',
    ],
    quote: 'Very good at thinking through the logic of how to best automate a process, and then executing on that vision. Definitely will work with him again.',
    quoteAuthor: 'Modern Bungalow',
  },
  {
    id: 'hollow-bamboo',
    title: 'Hollow Bamboo Film Productions',
    tags: ['Operations', 'Inventory'],
    metric: '20 hrs/week back',
    problem: 'Film production company tracking hundreds of equipment items across multiple locations with paper lists and memory. 20+ hours a week wasted on texting to track things down, no visibility into what was where, and equipment getting lost between shoots.',
    solution: 'A custom inventory system using Google Sheets with QR code mobile access. Crew members scan equipment in and out from their phones. Real-time sync across all locations. Partial quantity tracking for consumables.',
    results: [
      '20+ hours saved weekly',
      '6 locations synced in real-time',
      '100% equipment visibility',
      'Fully mobile accessible',
    ],
    quote: 'Extremely attentive and responsive. Gave us an accurate timeline and met it. Highly recommend.',
    quoteAuthor: 'Hollow Bamboo Film Productions',
  },
  {
    id: 'revolut',
    title: 'Revolut',
    tags: ['Fintech', 'AI Analytics'],
    metric: '£4M opportunity found',
    problem: 'Needed to analyze 200,000+ transactions across 90 days to identify what was actually driving profitability. The manual approach was taking weeks and couldn\'t keep up with the volume of data.',
    solution: 'An AI system that automated the entire analysis pipeline. Data cleaning, pattern recognition, and executive reporting. What used to take weeks now takes hours.',
    results: [
      '£4M growth opportunity identified',
      '200,000+ transactions analyzed',
      '90% reduction in analysis time',
    ],
    quote: null,
    quoteAuthor: null,
  },
  {
    id: 'prediction-market-trader',
    title: 'Prediction Market Trader',
    tags: ['AI', 'Data Automation'],
    metric: 'Hundreds of markets daily',
    problem: 'Prediction market trader was manually researching earnings call outcomes for hundreds of markets. Reading analyst reports, checking historical data, making forecasts one at a time. The research bottleneck limited how many opportunities he could evaluate.',
    solution: 'An n8n pipeline that pulls active markets from Kalshi\'s API, enriches each with company data, sends batches to GPT-4o for probability forecasting, and outputs everything to a Google Sheet with confidence scores and reasoning.',
    results: [
      'Hundreds of markets analyzed daily',
      'Manual research eliminated',
      'AI-powered probability forecasting',
      'Decision-ready output',
    ],
    quote: 'Figured it out quickly and got everything working smoothly. Very responsive throughout.',
    quoteAuthor: 'Prediction Market Trader',
  },
  {
    id: 'marketing-agency-reporting',
    title: 'Kingfisher Ads',
    tags: ['Agency', 'Reporting'],
    metric: '2–4 hrs → 15 min monthly',
    problem: 'Agency owner was spending 2–4 hours every month manually pulling spend data from Meta and Google Ads, organizing it in spreadsheets, and calculating fees. With a growing client roster, the process was becoming a bottleneck that scaled with every new client.',
    solution: 'An automated system that pulls spend data from both platforms via API, aggregates by client, calculates fees based on each billing structure (flat, percentage, or hybrid), and outputs an invoice-ready report.',
    results: [
      '2–4 hours reduced to 15 minutes monthly',
      'Runs automatically on the 1st',
      'Handles multiple fee structures',
      'ROI in under 6 weeks',
    ],
    quote: null,
    quoteAuthor: null,
  },
  {
    id: 'german-marketing-agency',
    title: 'KlnBros Agency',
    tags: ['Emergency Recovery'],
    metric: 'Full recovery in 2 hours',
    problem: 'Client\'s VPS hit 100% disk full. Docker crashed. Their entire n8n automation infrastructure was down, and they couldn\'t even SSH in to diagnose. Their business operations depended on those workflows running.',
    solution: 'Diagnosed the issue remotely (83GB SQLite database bloat from execution logs), used RAM as temporary backup space, extracted all 43 workflows and 16 credentials, reset the database, restored everything, and configured auto-pruning to prevent recurrence.',
    results: [
      '83GB disk space recovered',
      '43 workflows restored',
      '16 credentials preserved',
      'Led to ongoing development contract',
    ],
    quote: 'Communication was 10/10. I felt very safe throughout the entire project knowing Seth was handling it.',
    quoteAuthor: 'Yves Klein, Germany',
  },
];

export default function CaseStudiesPage() {
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
              Case Studies
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Real projects. Real outcomes.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              Most of these systems paid for themselves in 4–8 weeks - then kept delivering month after month.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── CASE STUDIES GRID ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-5 md:grid-cols-2 items-stretch">
            {caseStudies.map((study, i) => (
              <SimpleScrollReveal key={study.id} direction="up" delay={i * 60} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950">

                  {/* Tags + metric */}
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex-shrink-0 rounded-full bg-blue-50 px-3 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-400">
                      {study.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-5 text-xl font-bold text-gray-900 dark:text-white">
                    {study.title}
                  </h2>

                  {/* Problem */}
                  <div className="mb-4">
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      The problem
                    </p>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                      What we built
                    </p>
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <ul className="mb-5 flex-1 space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>

                  {/* Quote */}
                  {study.quote && (
                    <div className="mb-5 rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
                      <p className="text-sm italic leading-relaxed text-gray-600 dark:text-gray-400">
                        "{study.quote}"
                      </p>
                      <p className="mt-2 text-xs font-medium text-gray-400 dark:text-gray-500">
                        - {study.quoteAuthor}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="flex gap-5 border-t border-gray-100 pt-5 dark:border-gray-800">
                    <Link
                      href={`/case-studies/${study.id}#video`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Walkthrough
                    </Link>
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      Full Case Study
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Get in touch
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to see similar results?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              Book a call. We'll figure out what your manual work is actually costing you, identify the biggest opportunities, and show you when you'd see your investment back.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a Call
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:hover:bg-gray-800"
              >
                See Our Services
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
