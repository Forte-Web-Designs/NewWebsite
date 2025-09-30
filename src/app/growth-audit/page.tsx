'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import SimpleAnimatedCounter from '@/components/animations/SimpleAnimatedCounter';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

const metadata: Metadata = {
  title: 'Free Growth Audit (Snapshot) | Forte Web Designs',
  description: 'Identify where time and money are leaking. Get a free 1-page audit + two quick wins—no tool changes required.',
};

const checksWePerform = [
  {
    title: "Response Speed",
    description: "Missed calls & first-touch time across phone, web forms, chat, and email",
    icon: "flash"
  },
  {
    title: "Follow-Through Coverage", 
    description: "% of quotes, demos, or carts that receive timely nudges",
    icon: "check"
  },
  {
    title: "Handoffs & Duplicate Entry",
    description: "Where data is retyped or dropped between tools/teams",
    icon: "puzzle"
  },
  {
    title: "Quote/Checkout Speed",
    description: "Time from interest → price in hand / clean checkout", 
    icon: "clock"
  },
  {
    title: "Owner Visibility",
    description: "One place to see leads, quotes, stuck items, and aging tasks",
    icon: "chart"
  }
];

const deliverables = [
  "1-page PDF snapshot of bottlenecks and impact",
  "2 quick-win fixes (step-by-step, 30–90 minutes each)",
  "Short Loom walk-through explaining what to do next",
  "Optional checklist to prepare a pilot (if you want us to help)"
];

const sampleMetrics = [
  { label: "First response time", before: "~3h", after: "<10 min" },
  { label: "Quote turnaround", before: "2–3 days", after: "same-day" },
  { label: "Follow-up coverage", before: "28%", after: "90–100%" },
  { label: "Duplicate entry", before: "CRM + invoicing double-entry found", after: "remove with integration" },
  { label: "Owner view", before: "No single dashboard", after: "add lead/quote/stuck roll-up" }
];

const quickWins = [
  "Missed-call auto-text with booking link (30–45 min)",
  "Quote template + reminder cadence (60–90 min)"
];

const workflowSteps = [
  {
    step: "1",
    title: "Tell us your goals (2–3 minutes)",
    description: "Complete the form with your tools and a few examples (recent missed calls, quotes, or orders)."
  },
  {
    step: "2", 
    title: "Read-only access (lightweight)",
    description: "Grant limited access to phone/CRM/form inbox and calendar so we can measure actual delays."
  },
  {
    step: "3",
    title: "Get your snapshot",
    description: "We send a 1-page PDF + Loom walk-through with two quick wins. If you want, we'll scope a pilot."
  }
];

const whatWeNeed = [
  "Which tools you use (phones, CRM, forms, calendar, invoicing)",
  "3–5 recent examples (inquiries, quotes, or orders)", 
  "Read-only/shared access so we can verify timings (we'll send a checklist)"
];

const commonQuickWins = [
  "Missed-call → instant text-back with booking link",
  "Quote templates with auto-reminders until answered",
  "No-show reminder sequence for consults/demos",
  "Simple CRM rules to flag stuck items >48 hours",
  "Owner scorecard (weekly email) with response, quote, and follow-through metrics"
];

const expectedResults = [
  { metric: "Faster responses", change: "hours → minutes" },
  { metric: "Faster quotes/checkouts", change: "multi-day → same-day (or fewer steps)" },
  { metric: "Consistent follow-ups", change: "ad-hoc → 90–100% coverage" },
  { metric: "Team hours saved", change: "5–20 hrs/week via fewer manual steps" },
  { metric: "Clarity", change: "one dashboard for leads, quotes, stuck items, and aging" }
];

const faqs = [
  {
    question: "Is this really free?",
    answer: "Yes. The audit is free and comes with two actionable quick wins. If you want help implementing, we'll scope a pilot."
  },
  {
    question: "Do we need to switch tools?",
    answer: "No. We work with your current stack and only recommend changes when the ROI is obvious."
  },
  {
    question: "How long does it take?",
    answer: "Usually 2–4 business days after we receive light read-only access."
  },
  {
    question: "Will you implement the fixes for us?",
    answer: "We can. The audit includes DIY steps; a pilot is optional if you want us to handle setup."
  },
  {
    question: "Who owns the outputs?",
    answer: "You receive and own the PDF and Loom. If you later engage us for systems work, ownership follows your agreement terms (site/systems transfer after the 12-month minimum)."
  }
];

export default function GrowthAuditPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Free Growth Audit (Snapshot)
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                Get a clear, actionable view of where time and money are leaking—then fix the biggest issues first. We review your intake speed, follow-through, handoffs, and owner visibility, and give you two quick wins you can implement right away.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact?type=audit">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Get My Free Growth Audit →
                  </DarkButton>
                </Link>
                <a 
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  See How It Works →
                </a>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                What We Check (built to fit any business)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                We focus on the universal levers that move outcomes—across service, retail/e-commerce, and professional services.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {checksWePerform.map((check, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                  <Icon name={check.icon} className="w-10 h-10 text-primary-600 mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                    {check.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {check.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 sm:p-8 max-w-4xl mx-auto text-center">
              <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                We adapt these checks to your industry and stack—no rip-and-replace required.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What You Get (deliverables)
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4 mb-8">
            {deliverables.map((deliverable, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">{deliverable}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 sm:p-8 text-center">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Turnaround:</span> typically <strong>2–4 business days</strong> once we have access.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Sample Snapshot Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Sample Snapshot Preview (example)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sample Metrics */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                  Current State → Target
                </h3>
                <div className="space-y-4">
                  {sampleMetrics.map((metric, index) => (
                    <div key={index} className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0 last:pb-0">
                      <div className="font-semibold text-gray-900 dark:text-white mb-2">
                        {metric.label}:
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 dark:text-gray-400 line-through text-sm">
                          {metric.before}
                        </span>
                        <span className="text-gray-400">→</span>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold">
                          {metric.after}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleAnimatedCard>

            {/* Quick Wins */}
            <SimpleAnimatedCard>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                  Quick Wins Included:
                </h3>
                <div className="space-y-4">
                  {quickWins.map((win, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{win}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              How It Works
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need From You */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What We Need From You (minimal)
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4">
            {whatWeNeed.map((need, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <Icon name="lock" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">{need}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 text-center">
              <p className="text-gray-700 dark:text-gray-300 italic">
                <Icon name="lock" className="w-4 h-4 text-primary-600 inline mr-2" aria-hidden="true" />
                All access is read-only for verification purposes only.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Example Quick Wins */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Example Quick Wins We Commonly Ship
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {commonQuickWins.map((win, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Icon name="flash" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-800 dark:text-gray-200">{win}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Results You Can Expect */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Results You Can Expect (30–90 days)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {expectedResults.map((result, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center h-full shadow-lg">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    {result.metric}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-bold text-sm sm:text-base">
                    {result.change}
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              FAQs
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 sm:p-8 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    aria-expanded={expandedFaq === index}
                  >
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <Icon 
                      name="chevron-down" 
                      className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8">
              Ready to get time and money back—without new software?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?type=audit">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Get My Free Growth Audit →
                </button>
              </Link>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Talk to Us →
              </a>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}