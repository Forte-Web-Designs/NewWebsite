import { Metadata } from 'next';
import { useState } from 'react';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Forte Care™ — Always-On Upkeep for Your Website & Growth Systems',
  description: 'Keep your site fast and your automations reliable—so you get time back and stay focused on the work that makes money. Included with all monthly website plans.',
};

const websiteCareFeatures = [
  "Unlimited website edits (copy/images/pages within your current design)",
  "Hosting, SSL, uptime monitoring, backups & restores", 
  "Speed & Core Web Vitals tuning",
  "Broken link & form checks; security hardening",
  "Monthly health report with simple \"do next\" recommendations"
];

const systemCareFeatures = [
  "Workflow monitoring (n8n/Zapier/Make) + error alerts",
  "Prompt/assistant refreshes and RAG content updates",
  "Integration checks (CRM, calendar, phones, forms, email)", 
  "Dashboard maintenance (owner metrics stay accurate)",
  "Quarterly optimization sprint to remove bottlenecks"
];

const outcomes = [
  "Ops hours saved: ~5–20 hours/week reclaimed across the team",
  "Reliability: fewer manual fixes; fewer \"dropped balls\" between tools", 
  "Speed: faster first responses and same-day quotes keep revenue moving",
  "Clarity: one dashboard stays trustworthy (leads, quotes, stuck points)"
];

const monthlyTasks = [
  "Proactive checks: uptime, forms, speed, security, failed jobs, API keys",
  "Unlimited website edits: content updates, new sections, minor components",
  "Fix before it hurts: resolve automation errors and retry failed runs", 
  "Keep models sharp: refresh prompts, update knowledge sources, tune rules",
  "Report & recommend: concise monthly summary + 2–3 quick wins"
];

const faqs = [
  {
    question: "What's included in \"unlimited website edits\"?",
    answer: "All content changes and small layout tweaks inside your existing site (copy, images, sections, FAQs, service blocks). Large redesigns or net-new templates are quoted separately."
  },
  {
    question: "Do you maintain our automations and AI agents too?",
    answer: "Yes—add System Care. We monitor workflows, fix failures, refresh prompts/RAG content, and keep dashboards accurate."
  },
  {
    question: "Will we need to switch tools?",
    answer: "No. We connect to your current stack and keep it humming. If a swap would save time/money, we'll recommend it with plain-math ROI."
  },
  {
    question: "Is there a minimum term?",
    answer: "Website Care is included in monthly site plans (12-month minimum applies to the plan). Care as an add-on is billed monthly with 30-day notice to cancel."
  },
  {
    question: "How fast are updates?",
    answer: "Most website edits are done in 48–72 hours. Critical issues are addressed same-day; System Care priority tiers include faster SLAs."
  },
  {
    question: "Do you back up the site and restore if needed?",
    answer: "Yes. We run regular backups and can roll back quickly if anything breaks."
  }
];

export default function FortCarePage() {
  const [showRangeTooltip, setShowRangeTooltip] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Forte Care™ — Always-On Upkeep for Your Website & Growth Systems
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                We keep your site fast and your automations reliable—so you get time back and stay focused on the work that makes money.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/contact?service=ForteCare">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Start Forte Care™ →
                  </DarkButton>
                </Link>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  Book a Care Consult →
                </a>
              </div>
              
              {/* Note line */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Included with all monthly website plans. Available as an add-on for one-time builds and system clients.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12 sm:mb-16">
              What's Covered (outcomes first)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Website Care */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                  Website Care (foundation upkeep)
                </h3>
                <div className="space-y-4">
                  {websiteCareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleAnimatedCard>

            {/* System Care */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-6">
                  System Care (automation & AI upkeep)
                </h3>
                <div className="space-y-4">
                  {systemCareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Time & Money You Get Back */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Time & Money You Get Back (30–90 days)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center h-full flex flex-col justify-center">
                  <div className="flex items-start gap-3 text-left">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{outcome}</span>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Plans & Pricing */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12 sm:mb-16">
              Plans & Pricing
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            {/* Website Care Plan */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2">
                  Website Care
                </h3>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-4">$200/mo</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Best for: active sites that need professional upkeep and unlimited edits
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Includes everything in Website Care above
                </p>
                <Link href="/contact?service=WebsiteCare">
                  <DarkButton className="w-full py-3">
                    Start Website Care →
                  </DarkButton>
                </Link>
              </div>
            </SimpleAnimatedCard>

            {/* System Care Plan */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2">
                  System Care (Automation & AI)
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600">from $600–$1,200/mo</div>
                  <button
                    onMouseEnter={() => setShowRangeTooltip(true)}
                    onMouseLeave={() => setShowRangeTooltip(false)}
                    className="relative"
                  >
                    <Icon name="info" className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                    {showRangeTooltip && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
                        Varies by # of workflows, integrations, SLAs; sized in a short audit.
                      </div>
                    )}
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Best for: teams using automations, AI assistants, and owner dashboards
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Includes everything in System Care above
                </p>
                <Link href="/contact?service=SystemCare">
                  <DarkButton className="w-full py-3">
                    Start System Care →
                  </DarkButton>
                </Link>
              </div>
            </SimpleAnimatedCard>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Monthly website plans include Website Care. One-time website builds can add Website Care any time. System Care is scoped to your stack; we'll size it during a short audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?service=ForteCare">
                <DarkButton className="px-6 py-3">
                  Start Forte Care™ →
                </DarkButton>
              </Link>
              <Link href="/pricing" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold">
                See Pricing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Each Month */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What We Do Each Month
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {monthlyTasks.map((task, index) => (
              <div key={index} className="flex items-start gap-3">
                <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{task}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response & SLAs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Response & SLAs
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Standard</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Same-business-day acknowledgment; most web edits in 48–72 hrs
              </p>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 sm:p-8 shadow-lg border-2 border-primary-200 dark:border-primary-700">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">Priority (System Care ≥$1k/mo)</h3>
              <p className="text-gray-600 dark:text-gray-300">
                4-hour acknowledgment; next-business-day fixes for critical workflow issues
              </p>
            </div>
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
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8">
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-6">
              Ready for worry-free operations?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Keep your site fast and your systems reliable—without adding to your team's workload.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?service=ForteCare">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Start Forte Care™ →
                </button>
              </Link>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Book a Care Consult →
              </a>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
