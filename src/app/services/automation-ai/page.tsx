"use client";

import { useState } from 'react';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

export default function AutomationAIPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  // What we build data (simplified to one-line feature + outcome)
  const automationServices = [
    {
      title: "Smart Intake & First Touch",
      description: "Instant text-back on missed calls and web form auto-replies.",
      result: "Response time down; booked calls up.",
      icon: "phone"
    },
    {
      title: "Quote & Sales Follow-Through", 
      description: "Guided templates and auto-nudges until answered.",
      result: "Same-day quotes; higher close rates.",
      icon: "dollar"
    },
    {
      title: "Retention & Review Loops",
      description: "No-show reminders and steady review requests that post.",
      result: "More repeat revenue; review engine that compounds.",
      icon: "star"
    },
    {
      title: "Owner Dashboards & Alerts",
      description: "One view of leads, quotes, and stuck points.",
      result: "Clarity and accountability without spreadsheets.",
      icon: "pricing"
    },
    {
      title: "Integrations & Clean Handoffs",
      description: "Connect your existing tools and remove duplicate data entry.",
      result: "Fewer manual steps; fewer dropped balls.",
      icon: "puzzle"
    },
    {
      title: "Secure, Managed Infrastructure",
      description: "Cloud-hosted, permissioned, and monitored.",
      result: "Reliable, safe, and future-proof.",
      icon: "clean"
    }
  ];

  // AI Agents data
  const aiAgents = [
    {
      name: "Ultimate Assistant",
      useCase: "Email, calendar, and task management across platforms",
      outcome: "15+ hours saved weekly; faster decisions"
    },
    {
      name: "Deep Research PDF Report",
      useCase: "Comprehensive market research and competitive analysis", 
      outcome: "Professional insights in minutes, not days"
    },
    {
      name: "Newsletter Creation",
      useCase: "Content generation from data sources and brand voice",
      outcome: "Consistent content; higher engagement rates"
    },
    {
      name: "RAG Pipeline",
      useCase: "Document search and knowledge base queries",
      outcome: "Instant answers from company knowledge"
    },
    {
      name: "Faceless Shorts",
      useCase: "Automated video content creation and publishing",
      outcome: "Consistent social presence; more visibility"
    }
  ];

  // Industry-specific data
  const industries = [
    {
      title: "Service Businesses",
      subtitle: "contractors, healthcare, real estate",
      description: "What we fix: missed calls, slow quotes, weak follow-ups",
      outcome: "More booked jobs with less chasing",
      icon: "services"
    },
    {
      title: "E-commerce & Retail", 
      subtitle: "online stores, retail shops",
      description: "What we fix: cart abandonment, slow checkouts, weak repeat-purchase flows",
      outcome: "More completed orders and higher repeat rate",
      icon: "bag"
    },
    {
      title: "Professional Services",
      subtitle: "legal, consulting, finance", 
      description: "What we fix: intake lag, scheduling gaps, unclear status",
      outcome: "Faster onboarding and better client retention",
      icon: "company"
    }
  ];

  // Process steps with measurable lifts
  const processSteps = [
    {
      step: "1",
      title: "Snapshot & Plan",
      subtitle: "(free)",
      description: "Identify 3–4 leaks + 2 quick fixes",
      lift: "Immediate visibility into lost opportunities"
    },
    {
      step: "2", 
      title: "Pilot & Prove",
      subtitle: "(2–4 weeks)",
      description: "Deploy focused pilot, measure lift",
      lift: "Faster response times; more booked consultations"
    },
    {
      step: "3",
      title: "Scale & Instrument", 
      subtitle: "(4–8 weeks)",
      description: "Expand across intake, quotes, retention, dashboards",
      lift: "Same-day quotes; clearer pipeline visibility"
    },
    {
      step: "4",
      title: "Operate & Improve",
      subtitle: "(ongoing)",
      description: "Forte Care™ keeps systems secure, tuned, and evolving",
      lift: "Continuous improvement; steady growth at scale"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      name: "Summit Gaming Lounge",
      project: "AI Concierge",
      challenge: "Managing reservations across multiple platforms manually",
      outcome: "Faster reservations, deeper engagement, no extra headcount."
    },
    {
      name: "DineEase",
      project: "Lead Discovery", 
      challenge: "Time-intensive restaurant partner sourcing and research",
      outcome: "Faster, higher-quality outreach; expansion into new cities."
    },
    {
      name: "Fetchly",
      project: "Exec Assistant in Slack",
      challenge: "Executive overwhelmed by email, calendar, and task management",
      outcome: "~15 hours/week saved; faster decisions, clearer days."
    },
    {
      name: "ClearFlow Water Systems",
      project: "Quotes & CRM",
      challenge: "Slow quote turnaround and disconnected pipeline tracking", 
      outcome: "Same-day quotes, cleaner pipeline, higher close rates."
    }
  ];

  // Technical components
  const technicalComponents = [
    {
      name: "Automations",
      description: "n8n/Zapier workflows for intake, routing, reminders, and follow-ups"
    },
    {
      name: "AI Assistants (when useful)",
      description: "retrieval-aware replies and task handling for common requests"
    },
    {
      name: "Data Layer", 
      description: "structured logs into Sheets/Airtable/DB for auditability and dashboards"
    },
    {
      name: "Dashboards",
      description: "owner-friendly metrics—response time, quote turnaround, follow-through, pipeline health"
    },
    {
      name: "Integrations",
      description: "your CRM, email, phone, calendar, invoicing, and forms (no rip-and-replace)"
    }
  ];

  // FAQs
  const faqs = [
    {
      question: "Do we need to switch tools?",
      answer: "No. We integrate your current CRM, phones, email, calendar, and billing. No rip-and-replace required."
    },
    {
      question: "What does \"AI\" actually do here?",
      answer: "It handles repeatable responses, drafting, routing, and memory—always with guardrails and human override."
    },
    {
      question: "How fast can we see results?", 
      answer: "Most pilots show measurable lift in 2–4 weeks (faster replies, more booked consults, quicker quotes)."
    },
    {
      question: "Who owns what?",
      answer: "Clients own systems after 12 months minimum. You always own your data and website."
    },
    {
      question: "Are unlimited site edits included?",
      answer: "Yes, with Forte Care™ you get unlimited site edits, monitoring, updates, and ongoing improvements."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero / Welcome Block */}
      <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Automation & AI — Systems That Save Time and Drive Revenue
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Most businesses don't lose deals because of skill. They lose them to slow replies, manual steps, and unclear handoffs. Our systems fix those failure points so you respond faster, follow up consistently, and keep your pipeline moving.
          </p>

          <DarkButton href="/growth-snapshot" className="inline-block px-6 py-3">
            Get My Free Growth Snapshot
          </DarkButton>
        </div>
      </section>

      {/* Outcomes Block */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What You Gain
          </h2>
          
          <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li>• Faster first-touch on every inquiry</li>
            <li>• Same-day quotes and fewer stalls</li>
            <li>• Higher show-up and reply rates</li>
            <li>• Clear pipeline visibility</li>
            <li>• Hours saved weekly across your team</li>
          </ul>
        </div>
      </section>

      {/* Core Capabilities Block */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What We Build (In Plain English)
          </h2>
          
          <div className="space-y-8">
            {automationServices.map((service, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {service.description}
                </p>
                <p className="text-primary-600 dark:text-primary-400 italic">
                  {service.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Block */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-6">
            <LightButton href="/services/automation-ai/technology-stack" className="px-6 py-3">
              Technology Stack
            </LightButton>
            <DarkButton href="/services/automation-ai/ai-agents" className="px-6 py-3">
              AI Agents
            </DarkButton>
          </div>
        </div>
      </section>

      {/* Industries Block */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Built For Your Kind of Business
          </h2>
          
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.title} <span className="text-gray-500 dark:text-gray-400 font-normal">({industry.subtitle})</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  {industry.description}
                </p>
                <p className="text-primary-600 dark:text-primary-400 italic">
                  → {industry.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Block */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            How It Works
          </h2>
          
          <ol className="space-y-6">
            {processSteps.map((step, index) => (
              <li key={index} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {step.title} <span className="text-gray-500 dark:text-gray-400 font-normal">{step.subtitle}</span>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>



      {/* Case Studies Block */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Proof in Practice
          </h2>
          
          <div className="space-y-6 mb-8">
            <div>
              <strong className="text-gray-900 dark:text-white">Summit Gaming Lounge</strong>
              <p className="text-gray-600 dark:text-gray-300">Managing reservations across multiple platforms manually → Faster reservations, deeper engagement, no extra headcount.</p>
            </div>
            
            <div>
              <strong className="text-gray-900 dark:text-white">Fetchly</strong>
              <p className="text-gray-600 dark:text-gray-300">Executive overwhelmed by email, calendar, and task management → 15+ hours/week saved, faster decisions, clearer days.</p>
            </div>
            
            <div>
              <strong className="text-gray-900 dark:text-white">ClearFlow Water Systems</strong>
              <p className="text-gray-600 dark:text-gray-300">Slow quote turnaround and disconnected pipeline tracking → Same-day quotes, cleaner pipeline, higher close rates.</p>
            </div>
          </div>
          
          <LightButton href="/work" className="inline-block px-6 py-3">
            View All Case Studies →
          </LightButton>
        </div>
      </section>

      {/* Pricing Preview Block */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Pricing & Engagement
          </h2>
          
          <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
            <li>• <strong className="text-gray-900 dark:text-white">Website Foundation:</strong> from $2,000+ build + $200/mo</li>
            <li>• <strong className="text-gray-900 dark:text-white">Automation & AI:</strong> scoped to outcomes (not per zap)</li>
            <li>• <strong className="text-gray-900 dark:text-white">Forte Care™:</strong> unlimited site edits, monitoring, updates</li>
          </ul>
          
          <LightButton href="/pricing" className="inline-block px-6 py-3">
            See Pricing →
          </LightButton>
        </div>
      </section>

      {/* FAQs Block */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full text-left flex items-center justify-between py-2 hover:text-primary-600 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span className="text-gray-400 ml-4">
                    {expandedFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {expandedFAQ === index && (
                  <div className="pt-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to stop losing opportunities?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start with a free Growth Snapshot. We'll show you where time and money are leaking — and what to fix first.
          </p>
          
          <DarkButton href="/growth-snapshot" className="inline-block px-6 py-3">
            Get My Free Growth Snapshot
          </DarkButton>
        </div>
      </section>
    </div>
  );
}