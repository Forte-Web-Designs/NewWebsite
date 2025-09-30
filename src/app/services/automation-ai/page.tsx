'use client';

import type { Metadata } from "next";
import Link from 'next/link';
import { useState } from 'react';

export const metadata: Metadata = {
  title: "AI Automation Services & Systems Integration | Forte",
  description: "Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.",
  keywords: [
    "AI automation services", "business process automation", "AI implementation partner", 
    "AI agents", "automation pipelines", "owner dashboards", "AI systems integration",
    "business automation Dallas", "AI consulting DFW", "automation consulting",
    "AI technology stack", "custom AI assistants", "RAG pipelines", "n8n automations"
  ],
  openGraph: {
    title: "AI Automation Services & Systems Integration | Forte",
    description: "Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.",
    url: "https://fortewebdesigns.com/services/automation-ai/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/automation-ai/"
  }
};

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
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Automation & AI — Time Back. Revenue Up.
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We don't sell bots. We remove bottlenecks. Respond faster, follow up automatically, and keep your pipeline moving—without changing all your tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <DarkButton href="#growth-snapshot" className="px-6 py-3">
              Get My Free Growth Snapshot →
            </DarkButton>
            <LightButton href="/pricing" className="px-6 py-3">
              See Pricing →
            </LightButton>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section id="what-to-expect" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What you can expect in 30–90 days
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Response latency</strong>
                  <p className="text-gray-600 dark:text-gray-300">Hours → minutes across calls, forms, chat, and email.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Cycle time for key work</strong>
                  <p className="text-gray-600 dark:text-gray-300">Proposals/approvals/fulfillment shortened by <strong>30–60%</strong> (fewer stalls, clearer next steps).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Follow-through reliability</strong>
                  <p className="text-gray-600 dark:text-gray-300">Ad-hoc → <strong>90–100%</strong> of required follow-ups completed on time (with light human oversight).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Owner/ops visibility</strong>
                  <p className="text-gray-600 dark:text-gray-300"><strong>One dashboard</strong> for pipeline and operations + alerts for stuck items—no spreadsheet chasing.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Manual work removed</strong>
                  <p className="text-gray-600 dark:text-gray-300"><strong>30–70%</strong> of repetitive tasks automated (routing, reminders, data entry, status updates).</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Time savings</strong>
                  <p className="text-gray-600 dark:text-gray-300"><strong>~5–20 hours/week</strong> reclaimed across the team for higher-value work.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Fewer handoff errors</strong>
                  <p className="text-gray-600 dark:text-gray-300">Duplicate entry and misrouted items reduced with cleaner, permissioned handoffs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900 dark:text-white">Quality & consistency</strong>
                  <p className="text-gray-600 dark:text-gray-300">More consistent customer and internal communications; fewer do-overs and "just checking in" messages.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <LightButton href="#growth-snapshot" className="inline-block px-6 py-3">
              Get My Free Growth Snapshot →
            </LightButton>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What We Build (in plain English)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Smart Intake & First Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Instant text-back on missed calls, web form auto-replies, and channel handoff (SMS/Email/Chat).
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Response time down; booked calls up.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Quote & Sales Follow-Through
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Guided quote templates, auto-nudges until answered, and "next best step" reminders.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Same-day quotes; higher close rates.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Retention & Review Loops
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                No-show reminders, win-back campaigns, and steady review requests that actually post.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: More repeat revenue; a review engine that compounds.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Owner Dashboards & Alerts
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                One view of leads, quotes, and stuck points with weekly scorecards.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Clarity and accountability without spreadsheets.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Integrations & Clean Handoffs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Connect the tools you already use (CRM, invoicing, phones, calendars) and eliminate duplicate entry.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Fewer manual steps; fewer dropped balls.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Secure, Managed Infrastructure
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Cloud-hosted, permissioned, monitored, and built to scale.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Reliable, safe, and future-proof.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Team Enablement & SOPs
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Light training, quick-start playbooks, and adoption check-ins so the system sticks.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Faster ramp-up, fewer mistakes, and consistent use across the team.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-bold">8</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Custom Workflows & Special Cases
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We tailor automations and AI agents around your unique processes, data, and approvals—no forced tool changes.
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-semibold">
                Result: Your way of working, but faster—measurable ROI without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Resources */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                How we integrate with your tools and scale safely.
              </p>
              <div className="text-center">
                <LightButton href="/services/automation-ai/technology-stack" className="px-6 py-3 inline-flex items-center justify-center gap-2">
                  View Stack
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LightButton>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI Agents
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Patterns and templates we customize to your workflows.
              </p>
              <div className="text-center">
                <DarkButton href="/services/automation-ai/ai-agents" className="px-6 py-3 inline-flex items-center justify-center gap-2">
                  Explore Agents
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </DarkButton>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Guides, checklists, and field notes to make adoption easier.
              </p>
              <div className="text-center">
                <LightButton href="/resources" className="px-6 py-3 inline-flex items-center justify-center gap-2">
                  Browse Resources
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LightButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="our-process" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Our Process — practical, measurable, built to compound
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                1) Initial Discovery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Map workflows, decision points, and friction so we target the highest-leverage fixes first.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                2) Strategic Roadmapping (critical)
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                Balance speed to ROI with durable foundations. We answer:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1 ml-4">
                <li>• What ships now for <strong>ROI in &lt; 90 days</strong>?</li>
                <li>• What foundations set us up to scale?</li>
                <li>• Where will automation/AI move the needle most?</li>
                <li>• How do we ensure permissions, auditability, and interoperability from day one?</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                3) Security & Compliance by Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Role-based access, data handling, and audit logs aligned to your needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                4) Pilot & Prove (2–4 weeks)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Focused pilot (e.g., instant replies + follow-ups) with baseline, target, and weekly demos.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                5) Scale & Instrument (4–8 weeks)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Extend across intake, quotes, retention, dashboards with modular architecture.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                6) Quality Assurance & Deployment
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Accuracy, safety, retrieval quality, staging→prod pipelines, monitoring, alerts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                7) Operate & Improve (Forte Care™)
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Live monitoring, scheduled QA cycles, iterative improvements, documentation.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <LightButton href="/work" className="inline-block px-6 py-3">
              See examples in our Case Studies →
            </LightButton>
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



      {/* Case Studies Strip */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Proof in Practice
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Summit Gaming Lounge — AI Concierge
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Outcome: Faster reservations, deeper engagement, no extra headcount.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                DineEase — Lead Discovery
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Outcome: Faster, higher-quality outreach; expansion into new cities.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Fetchly — Executive Assistant in Slack
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Outcome: ~15 hours/week saved; faster decisions, clearer days.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ClearFlow Water Systems — Quotes & CRM
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Outcome: Same-day quotes, cleaner pipeline, higher close rates.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <LightButton href="/work" className="inline-block px-6 py-3">
              View all case studies →
            </LightButton>
          </div>
        </div>
      </section>

      {/* Serving Dallas–Fort Worth */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Serving Dallas–Fort Worth
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
            Local AI automation and business growth systems for the DFW market
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/dfw/ai-consulting" className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">AI Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Practical AI systems that return time and increase throughput for Dallas-Fort Worth businesses</p>
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Learn more →</span>
            </Link>
            
            <Link href="/dfw/automation-consulting" className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Automation Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Done-for-you systems that remove manual work and unlock capacity across DFW</p>
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Learn more →</span>
            </Link>
            
            <Link href="/dfw/business-growth-systems" className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Business Growth Systems</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">Complete growth systems—websites, AI automation, and dashboards for DFW companies</p>
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Learn more →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing & Engagement */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Pricing & engagement
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We price by scope and outcomes, not by the number of zaps or bots.
          </p>
          
          <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8">
            <li>• <strong className="text-gray-900 dark:text-white">Website Foundation:</strong> from <strong className="text-primary-600 dark:text-primary-400">$2,000+</strong> build (e-commerce higher), <strong className="text-primary-600 dark:text-primary-400">$200/mo</strong> Forte Care™.</li>
            <li>• <strong className="text-gray-900 dark:text-white">Automation & AI Systems:</strong> scoped to measurable lifts (response time, quote turnaround, follow-up rate, owner visibility) with clear milestones and reporting.</li>
            <li>• <strong className="text-gray-900 dark:text-white">Forte Care™:</strong> monitoring, updates, unlimited website edits, iterative improvements.</li>
          </ul>
          
          <LightButton href="/pricing" className="inline-block px-6 py-3">
            See Pricing →
          </LightButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === 0 ? null : 0)}
                className="w-full text-left flex items-center justify-between py-2 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Do we need to switch tools?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 0 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 0 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    No. We integrate with what you use and only recommend changes with clear ROI.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === 1 ? null : 1)}
                className="w-full text-left flex items-center justify-between py-2 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  How fast can we see results?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 1 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 1 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Most pilots show lift in <strong>2–4 weeks</strong>; fuller instrumentation typically <strong>60–90 days</strong>.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === 2 ? null : 2)}
                className="w-full text-left flex items-center justify-between py-2 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Who owns what?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 2 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 2 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    You own your website and automations after the <strong>12-month minimum</strong>; we document and hand off cleanly.
                  </p>
                </div>
              )}
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === 3 ? null : 3)}
                className="w-full text-left flex items-center justify-between py-2 hover:text-primary-600 transition-colors"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  How technical do we need to be?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 3 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 3 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Not at all. We handle the stack; you focus on results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Snapshot Section */}
      <section id="growth-snapshot" className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to get time—and revenue—back?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start with the free Growth Snapshot. We'll show you exactly where time and money are leaking—and what to fix first.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <DarkButton href="/growth-snapshot" className="px-8 py-4">
              Get My Free Growth Snapshot →
            </DarkButton>
            <LightButton href="/contact" className="px-8 py-4">
              Talk to Us →
            </LightButton>
          </div>
        </div>
      </section>
    </div>
  );
}