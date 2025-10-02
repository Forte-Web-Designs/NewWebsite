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
  title: 'Free Growth Snapshot | Forte Web Designs',
  description: 'Get a customized review showing how AI and automation can streamline your operations. Free expert analysis with projected savings and productivity gains.',
};

const checksWePerform = [
  {
    title: "Manual Data Processing",
    description: "Repetitive tasks that can be automated with AI and smart workflows",
    icon: "flash"
  },
  {
    title: "Customer Communication", 
    description: "24/7 response capabilities using AI chatbots and automated systems",
    icon: "check"
  },
  {
    title: "System Integration",
    description: "Connecting tools to eliminate duplicate entry and streamline workflows",
    icon: "puzzle"
  },
  {
    title: "Process Efficiency",
    description: "Time-consuming workflows that can be optimized with automation", 
    icon: "clock"
  },
  {
    title: "Decision Support",
    description: "AI-powered analytics and reporting for better business insights",
    icon: "chart"
  }
];

const deliverables = [
  "Brief scoping call to understand your process",
  "Expert analysis mapping automation opportunities",
  "Focused consultation sharing findings and savings potential",
  "Recommended next steps with projected ROI"
];

const sampleMetrics = [
  { label: "Manual data entry", before: "5-8 hours/week", after: "Automated via AI" },
  { label: "Customer responses", before: "Business hours only", after: "24/7 AI assistance" },
  { label: "Lead follow-up", before: "Manual tracking", after: "Automated sequences" },
  { label: "Process efficiency", before: "Multiple disconnected tools", after: "Integrated automation" },
  { label: "Cost savings", before: "Current overhead", after: "20-40% reduction projected" }
];

const quickWins = [
  "Immediate automation opportunities identified",
  "Projected savings and efficiency gains calculated"
];

const workflowSteps = [
  {
    step: "1",
    title: "Book Your Call",
    description: "Reserve your slot and confirm which process you'd like to optimize for maximum impact."
  },
  {
    step: "2", 
    title: "Process Analysis",
    description: "Our specialists analyze your current workflow to identify the highest-impact automation opportunities."
  },
  {
    step: "3",
    title: "Get Your Insights",
    description: "Receive expert recommendations with projected savings, efficiency gains, and next steps for implementation."
  }
];

const whatWeNeed = [
  "Overview of your current manual processes and tools",
  "Specific challenges you'd like to streamline with automation", 
  "Brief walkthrough of your workflow for accurate analysis"
];

const commonQuickWins = [
  "AI chatbots for 24/7 customer service and lead capture",
  "Automated data entry and CRM integration workflows",
  "Smart email sequences for follow-up and nurturing",
  "Process automation to eliminate repetitive manual tasks",
  "Intelligent dashboards for real-time business insights"
];

const expectedResults = [
  { metric: "Time Savings", change: "5-20 hours/week" },
  { metric: "Cost Reduction", change: "20-40% operational costs" },
  { metric: "Response Time", change: "24/7 automated support" },
  { metric: "Accuracy", change: "Eliminate human error" },
  { metric: "Scalability", change: "Handle growth without hiring" }
];

const faqs = [
  {
    question: "What is it, and how can it benefit you?",
    answer: "Our Free Growth Snapshot is a customized review designed to show the impact AI and automation can make in your business. We evaluate a specific process, highlight cost-saving and efficiency opportunities, and provide expert recommendations with projected savings and productivity gains."
  },
  {
    question: "Who is the Free Growth Snapshot for?",
    answer: "Business owners, operations leaders, and revenue teams who want to streamline operational or sales processes, minimize manual tasks, and use data to make better decisions."
  },
  {
    question: "What do you need from us?",
    answer: "We'll start with a short call to confirm the process you'd like to optimize and schedule your consultation. This ensures our analysis is tailored and actionable for your team."
  },
  {
    question: "How much does the Snapshot cost?",
    answer: "It's free. If you'd like us to assess additional processes beyond the first, fees may apply."
  },
  {
    question: "What's included in the Free Growth Snapshot?",
    answer: "A brief scoping call, expert analysis to map the process and find high-impact automation opportunities, and a focused session to share findings, savings potential, and recommended next steps."
  },
  {
    question: "How do I get started?",
    answer: "Book your intro call and reserve your slot using the form below. During the one-hour session, we'll dive into your process and outline improvements."
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
                Free Growth Snapshot
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                Curious how AI and automation could streamline your operations? Our specialists will examine one of your current manual processes in detail. We'll analyze existing costs, pinpoint improvements using AI & automation, and outline potential savings and productivity gains.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact?type=snapshot">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Get My Free Growth Snapshot →
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
                What We Analyze (AI & Automation Opportunities)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                We examine your current manual processes to identify where AI and automation can deliver the biggest impact on efficiency and cost savings.
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
                We customize our analysis to your specific business processes and existing tools.
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
                <span className="font-semibold">Timeline:</span> One focused session to dive into your process and outline improvements.
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
              What Your Growth Snapshot Reveals
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sample Metrics */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                  Before Automation → After AI Implementation
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
                  Insights Delivered:
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
              What We Need From You
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
                Your information is kept confidential and used only for analysis.
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
              Common Automation Opportunities We Identify
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
              Potential Benefits You Could Achieve
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
              Ready to see how AI & automation can transform your business?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?type=snapshot">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Get My Free Growth Snapshot →
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