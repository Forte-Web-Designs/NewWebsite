'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Agency Partnership — Your Quiet Growth Systems Team',
  description: 'Win bigger projects, deliver faster, and keep clients longer. We handle the heavy lifting (web, automation, AI, integrations, dashboards) under your brand—or alongside your team.',
};

const targetAgencies = [
  {
    title: "Marketing Agencies",
    description: "Needing reliable fulfillment beyond ads & creative",
    icon: "chart"
  },
  {
    title: "Web Studios", 
    description: "That want automation/AI & dashboards without hiring a dev team",
    icon: "code"
  },
  {
    title: "Consultants/RevOps",
    description: "Who need a technical partner to implement their strategy", 
    icon: "puzzle"
  }
];

const services = [
  "Website Design (Foundation) — custom, fast, secure sites that convert",
  "Smart Automation — intake, follow-ups, scheduled nudges, quote ops", 
  "AI Assistants — practical agents that answer, route, and complete tasks",
  "Integrations & Handoffs — CRM, phones, forms, calendars, invoicing—no rip & replace",
  "Owner Dashboards — clear metrics: response time, quote turnaround, follow-through",
  "Forte Care™ — ongoing upkeep for websites + automations (unlimited site edits)"
];

const partnershipModels = [
  {
    title: "White-Label Fulfillment",
    description: "We deliver end-to-end under your brand, with your PM in the loop.",
    icon: "shield"
  },
  {
    title: "Co-Delivery", 
    description: "We join your team in client calls as your systems/AI lead.",
    icon: "users"
  },
  {
    title: "Referral",
    description: "Make the intro, we run it. You receive a referral commission.",
    icon: "handshake"
  }
];

const workflowSteps = [
  {
    step: "1",
    title: "Quick Fit Call (15 min)",
    description: "Scope, stack, timelines. Decide WL vs Co-Delivery vs Referral."
  },
  {
    step: "2", 
    title: "Discovery & Scope",
    description: "We review client goals, tools, and constraints; define 30–90-day outcomes."
  },
  {
    step: "3",
    title: "Build & Prove (2–6 weeks)", 
    description: "Website foundation, intake automation, follow-ups, and an owner dashboard."
  },
  {
    step: "4",
    title: "Operate & Improve (ongoing)",
    description: "Forte Care™ keeps it fast, secure, and reliable; quarterly optimization."
  }
];

const agencyBenefits = [
  "Faster time-to-value: pilot results in weeks, not quarters",
  "Stickier retainers: clients stay for systems + upkeep, not just ads", 
  "Sales enablement: scopes, pricing frames, proposal blocks, demo assets",
  "Delivery confidence: SLAs, status updates, and clean handoffs",
  "Margin friendly: predictable partner pricing and scoped add-ons"
];

const outcomes = [
  { metric: "First response time", from: "hours", to: "minutes" },
  { metric: "Quote turnaround", from: "2–3 days", to: "same-day" },
  { metric: "Follow-up coverage", from: "ad-hoc", to: "90–100%" },
  { metric: "Ops hours saved", from: "", to: "5–20 hrs/week" },
  { metric: "Owner visibility", from: "", to: "one dashboard (leads, quotes, stuck points)" }
];

const teamProvisions = [
  "Scoping templates & proposal language",
  "Statement-of-work templates with clear milestones",
  "Demo assets and before/after metrics frames", 
  "Shared Slack/ClickUp channel for delivery visibility",
  "Monthly client-ready reports (your brand or ours)"
];

const faqs = [
  {
    question: "Do you stay invisible (white-label)?",
    answer: "Yes. We can work fully under your brand and email, or as your technical partner."
  },
  {
    question: "Will my clients have to switch tools?",
    answer: "Not required. We integrate with their current stack and recommend changes only when ROI is clear."
  },
  {
    question: "Who owns the system?",
    answer: "Your client owns their site and systems after the 12-month minimum is fulfilled. Until then, we operate and support under the agreement."
  },
  {
    question: "How fast do you deliver?", 
    answer: "Pilots land in 2–6 weeks depending on scope. We prioritize tangible wins inside 30–90 days."
  },
  {
    question: "Can you train our team?",
    answer: "Yes—sales enablement for scoping/selling; delivery playbooks for PMs; light client training as needed."
  }
];

export default function AgencyPartnershipPage() {
  const [showPricingTooltip, setShowPricingTooltip] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Agency Partnership — Your Quiet Growth Systems Team
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                Win bigger projects, deliver faster, and keep clients longer. We handle the heavy lifting (web, automation, AI, integrations, dashboards) under your brand—or alongside your team.
              </p>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact?type=partner">
                  <DarkButton className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
                    Become a Partner →
                  </DarkButton>
                </Link>
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                >
                  Book a Partnership Call →
                </a>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-4">
              Who This Is For
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Outcome: you sell more confidently, deliver more value, and keep MRR.
            </p>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {targetAgencies.map((agency, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg text-center h-full">
                  <Icon name={agency.icon} className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {agency.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {agency.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do For Your Clients */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What We Do For Your Clients (white-label or co-branded)
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">{service}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Partnership Models
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipModels.map((model, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg h-full">
                  <Icon name={model.icon} className="w-12 h-12 text-primary-600 mb-6" />
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {model.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              How It Works
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Agency Gets */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What Your Agency Gets
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-4">
            {agencyBenefits.map((benefit, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-white dark:bg-gray-700 rounded-lg">
                  <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200 text-base sm:text-lg">{benefit}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Example Outcomes */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Example Outcomes (30–90 days)
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {outcomes.map((outcome, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 text-center h-full">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white mb-3">
                    {outcome.metric}
                  </h3>
                  <div className="space-y-2">
                    {outcome.from && (
                      <div className="text-gray-500 dark:text-gray-400 line-through text-sm">
                        {outcome.from}
                      </div>
                    )}
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-sm sm:text-base">
                      {outcome.to}
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Pricing */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Partner Pricing (typical ranges)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Your margins vary by model. We'll align pricing during onboarding.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                    Website Foundation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    from <span className="font-bold text-primary-600">$2,000</span> build (e-commerce higher) + <span className="font-bold text-primary-600">$200/mo</span> Forte Care™
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                    Automation & AI Systems
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    scoped by outcomes and integrations (partner rates provided)
                  </p>
                </div>
                <button
                  onMouseEnter={() => setShowPricingTooltip(true)}
                  onMouseLeave={() => setShowPricingTooltip(false)}
                  className="relative"
                >
                  <Icon name="info" className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                  {showPricingTooltip && (
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-10">
                      Scope varies by workflows, integrations, and SLAs; we size it during onboarding.
                    </div>
                  )}
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-display font-semibold text-lg sm:text-xl text-gray-900 dark:text-white mb-2">
                <Link href="/forte-care" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                  Forte Care™
                </Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                website upkeep included for monthly sites; System Care available for automation/AI clients
              </p>
            </div>
          </div>
          
          <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 max-w-4xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300 italic">
              We price by <strong>system scope and outcomes</strong>, not by number of zaps or bots.
            </p>
          </div>
        </div>
      </section>

      {/* What We Provide Your Team */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              What We Provide Your Team
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {teamProvisions.map((provision, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Icon name="check" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 dark:text-gray-200">{provision}</span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              FAQs
            </h2>
          </SimpleScrollReveal>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 sm:p-8 shadow-lg">
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
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-8">
              Ready to win bigger, deliver faster, and keep clients longer?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact?type=partner">
                <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors w-full sm:w-auto">
                  Become a Partner →
                </button>
              </Link>
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                Book a Partnership Call →
              </a>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}