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
    headline: 'Product listings that generate themselves - $52K saved annually',
    tags: ['E-commerce', 'AI Automation'],
    problem: "Leading Cincinnati auction house was drowning in manual product listing work. Every item needed photography analysis, descriptions written, and posting across multiple sales channels. The manual process was eating 80+ hours a month and couldn't keep up with 1,500-3,000 products coming through each month.",
    solution: "An AI system that handles the entire product pipeline. Analyzes photography automatically, generates listing content, and distributes to all sales channels. Runs around the clock without anyone touching it.",
    results: [
      '1,040+ hours saved annually',
      '$52K annual cost savings',
      '3,000 products processed monthly',
      'Runs autonomously 24/7',
      'Paid for itself in the first month'
    ],
    quote: null,
    quoteAuthor: null,
    gradient: 'from-blue-600 to-indigo-600',
    hasVideo: true
  },
  {
    id: 'modern-bungalow',
    title: 'Modern Bungalow',
    headline: 'Customer communication that runs itself - 15+ hours monthly back',
    tags: ['E-commerce', 'Shopify'],
    problem: "Denver furniture retailer was manually sending 30-40 customer emails every day - 15+ hours a month just on customer communication. Order confirmations, production updates, delivery coordination. Someone had to remember to send the right email at the right time, and things were falling through the cracks.",
    solution: "A system that monitors Shopify orders and automatically sends the right email based on order status. Handles 9 different scenarios based on product type and delivery partner. Prevents duplicates and logs everything.",
    results: [
      '15+ hours saved monthly',
      '9 email scenarios automated',
      'Zero missed communications',
      'ROI in under 8 weeks'
    ],
    quote: "Very good at thinking through the logic of how to best automate a process, and then executing on that vision. Definitely will work with him again.",
    quoteAuthor: 'Modern Bungalow',
    gradient: 'from-emerald-600 to-teal-600',
    hasVideo: true
  },
  {
    id: 'hollow-bamboo',
    title: 'Hollow Bamboo Film Productions',
    headline: 'Complete equipment visibility across 6 locations - 20+ hours weekly back',
    tags: ['Operations', 'Inventory'],
    problem: "Film production company tracking hundreds of equipment items across multiple locations with paper lists and memory. 20+ hours a week wasted on texting to track things down, no visibility into what was where, and equipment getting lost between shoots.",
    solution: "A custom inventory system using Google Sheets with QR code mobile access. Crew members scan equipment in and out from their phones. Real-time sync across all locations. Partial quantity tracking for consumables.",
    results: [
      '20+ hours saved weekly',
      '6 locations synced in real-time',
      '100% equipment visibility',
      'Fully mobile accessible',
      'Paid for itself in the first month'
    ],
    quote: "Extremely attentive and responsive. Gave us an accurate timeline and met it. Highly recommend.",
    quoteAuthor: 'Hollow Bamboo Film Productions',
    gradient: 'from-green-600 to-emerald-600',
    hasVideo: true
  },
  {
    id: 'revolut',
    title: 'Revolut',
    headline: '£4M growth opportunity uncovered - analysis that took weeks now takes hours',
    tags: ['Fintech', 'AI Analytics'],
    problem: "Needed to analyze 200,000+ transactions across 90 days to identify what was actually driving profitability. The manual approach was taking weeks and couldn't keep up with the volume of data.",
    solution: "An AI system that automated the entire analysis pipeline. Data cleaning, pattern recognition, and executive reporting. What used to take weeks now takes hours.",
    results: [
      '£4M growth opportunity identified',
      '200,000+ transactions analyzed',
      '90% reduction in analysis time'
    ],
    quote: null,
    quoteAuthor: null,
    gradient: 'from-indigo-600 to-purple-600',
    hasVideo: true
  },
  {
    id: 'prediction-market-trader',
    title: 'Prediction Market Trader',
    headline: 'Research that runs while you sleep - hundreds of markets analyzed daily',
    tags: ['AI', 'Data Automation'],
    problem: "Prediction market trader was manually researching earnings call outcomes for hundreds of markets. Reading analyst reports, checking historical data, making forecasts one at a time. The research bottleneck limited how many opportunities he could evaluate.",
    solution: "An n8n pipeline that pulls active markets from Kalshi's API, enriches each with company data, sends batches to GPT-4o for probability forecasting, and outputs everything to a Google Sheet with confidence scores and reasoning.",
    results: [
      'Hundreds of markets analyzed daily',
      'Manual research eliminated',
      'AI-powered probability forecasting',
      'Decision-ready output'
    ],
    quote: "Figured it out quickly and got everything working smoothly. Very responsive throughout.",
    quoteAuthor: 'Prediction Market Trader',
    gradient: 'from-cyan-600 to-blue-600',
    hasVideo: true
  },
  {
    id: 'marketing-agency-reporting',
    title: 'Kingfisher Ads',
    headline: 'Monthly reporting in 15 minutes instead of half a day',
    tags: ['Agency', 'Reporting'],
    problem: "Agency owner was spending 2-4 hours every month manually logging into Meta and Google Ads, pulling spend data for each client, organizing it in spreadsheets, and calculating fees. With a growing client roster, the process was becoming a bottleneck that scaled with every new client.",
    solution: "An automated system that pulls spend data from both platforms via API, aggregates by client, calculates fees based on each client's billing structure (flat, percentage, or hybrid with caps), and outputs an invoice-ready report.",
    results: [
      '2-4 hours reduced to 15 minutes monthly',
      'Runs automatically on the 1st',
      'Handles multiple fee structures',
      'Scales with unlimited clients',
      'ROI in under 6 weeks'
    ],
    quote: null,
    quoteAuthor: null,
    gradient: 'from-orange-600 to-amber-600',
    hasVideo: true
  },
  {
    id: 'german-marketing-agency',
    title: 'KlnBros Agency',
    headline: "From 'everything is down' to fully operational in 2 hours",
    tags: ['Emergency Recovery'],
    problem: "Client's VPS hit 100% disk full. Docker crashed. Their entire n8n automation infrastructure was down, and they couldn't even SSH in to diagnose. Their business operations depended on those workflows running.",
    solution: "Diagnosed the issue remotely (83GB SQLite database bloat from execution logs), found a creative solution using RAM as temporary backup space (the only space available), extracted all 43 workflows and 16 credentials, reset the database, restored everything, and configured auto-pruning to prevent recurrence.",
    results: [
      '83GB disk space recovered',
      '43 workflows restored',
      '16 credentials preserved',
      '2 hours to full operation',
      'Led to ongoing development contract'
    ],
    quote: "Communication was 10/10. I felt very safe throughout the entire project knowing Seth was handling it.",
    quoteAuthor: 'Yves Klein, Germany',
    gradient: 'from-violet-600 to-fuchsia-600',
    hasVideo: true
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
                Results
              </h1>
              <div className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto space-y-4">
                <p>
                  Real projects. Real outcomes. Most of these systems paid for themselves in 4-8 weeks - then kept delivering month after month.
                </p>
                <p>
                  See what we've built, what it cost clients before we fixed it, and what changed after.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {caseStudies.map((study, index) => (
              <SimpleScrollReveal key={study.id} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Headline */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h2>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-6`}>
                    {study.headline}
                  </p>

                  {/* The Problem */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      The problem
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* What we built */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                      What we built
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6 flex-grow">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                      Results
                    </h3>
                    <ul className="space-y-3 text-left">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  {study.quote && (
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border-l-4 border-blue-600">
                      <p className="text-gray-600 dark:text-gray-300 text-sm italic mb-2">
                        "{study.quote}"
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                        {study.quoteAuthor}
                      </p>
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    {study.hasVideo && (
                      <Link
                        href={`/case-studies/${study.id}#video`}
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Watch the Walkthrough
                      </Link>
                    )}
                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium text-sm hover:text-gray-900 dark:hover:text-white"
                    >
                      Read Full Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to See Similar Results?
              </h2>
              <div className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto space-y-4">
                <p>
                  Book a free strategy call. We'll figure out what your manual work is actually costing you, identify the biggest opportunities, and show you exactly when you'd see your investment back.
                </p>
                <p>
                  If we can help, you'll have a clear path forward. If we can't, we'll tell you. No pressure, no obligation.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
              >
                Book Your Strategy Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
