"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
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
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Automation & AI — Systems that Save Time and Drive Revenue
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
                Most businesses don't lose deals because of skill. They lose them to slow replies, manual steps, and unclear handoffs. Our systems fix those failure points so you respond faster, follow up consistently, and keep your pipeline moving.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <DarkButton href="/growth-snapshot" className="px-8 py-4 text-lg">
                  Free Growth Snapshot →
                </DarkButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Expected outcomes (quick wins)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Faster first-touch on every inquiry</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Same-day quotes and fewer stalls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Higher show-up and reply rates</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Clear pipeline visibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">Hours saved weekly across your team</span>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                What we build (plain English, with results)
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                  <Icon name={service.icon} className="w-12 h-12 text-primary-600 mb-6" />
                  
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {index + 1}) {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      Result: <strong>{service.result}</strong>
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Deep Dive Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Technology deep dive (optional)
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                Curious about the technical details? Explore our technology stack and AI agent capabilities.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center h-full">
                <Icon name="puzzle" className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Technology Stack
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Infrastructure (AWS, Supabase, Postgres, vector DBs), programming tools (Python, JS, n8n/Zapier), AI model-agnostic approach (RAG, embeddings, agent frameworks, evaluation).
                </p>
                
                <LightButton href="/services/automation-ai/technology-stack" className="px-6 py-3">
                  Explore Technology Stack →
                </LightButton>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 text-center h-full">
                <Icon name="star" className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  AI Agents
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Autonomous yet collaborative, context-aware, secure, and scalable. Available templates: Ultimate Assistant, Research Agent, Newsletter, RAG Pipeline, Faceless Shorts.
                </p>
                
                <DarkButton href="/services/automation-ai/ai-agents" className="px-6 py-3">
                  Request Agent Demo →
                </DarkButton>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Built for Your Business Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Built for your kind of business
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {industries.map((industry, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center h-full">
                  <Icon name={industry.icon} className="w-12 h-12 text-primary-600 mx-auto mb-6" />
                  
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {industry.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {industry.description}
                  </p>
                  
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    Outcome: <strong>{industry.outcome}</strong>
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                We adapt to your workflows and tools.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                How it works (phases)
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {step.step}
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {step.subtitle}
                  </p>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {step.description}
                  </p>
                  
                  <p className="text-xs font-semibold text-primary-600 dark:text-primary-400">
                    Lift: {step.lift}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Curious about the technical details?
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                Our technology stack includes modern infrastructure, AI frameworks, and integration tools designed for reliability and scale.
              </p>
              
              <LightButton href="/services/automation-ai/technology-stack" className="px-8 py-4 text-lg">
                Explore Technology Stack →
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Case study highlights (proof in practice)
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {study.name}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{study.challenge}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">Solution:</span>
                      <span className="text-gray-600 dark:text-gray-300 ml-2">{study.project}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-primary-600 dark:text-primary-400">Outcome:</span>
                      <span className="text-gray-700 dark:text-gray-300 ml-2">{study.outcome}</span>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                <strong>Summit Gaming Lounge</strong> — Faster reservations, deeper engagement, no extra staff<br />
                <strong>DineEase</strong> — Faster outreach, higher-quality leads, scalable expansion<br />
                <strong>Fetchly</strong> — 15+ hours/week saved, faster decisions, streamlined productivity<br />
                <strong>ClearFlow Water Systems</strong> — Same-day quotes, cleaner pipeline, higher close rates
              </p>
              <LightButton href="/work" className="px-6 py-3">
                View All Case Studies →
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Pricing & engagement
              </h2>
              
              <div className="max-w-3xl mx-auto text-left space-y-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Website Foundation:</strong>
                        <span className="text-gray-600 dark:text-gray-300"> from </span>
                        <strong className="text-primary-600 dark:text-primary-400">$2,000+</strong>
                        <span className="text-gray-600 dark:text-gray-300"> build (</span>
                        <strong className="text-primary-600 dark:text-primary-400">$200/mo</strong>
                        <span className="text-gray-600 dark:text-gray-300"> Forte Care™). Note: e-commerce higher.</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Automation & AI:</strong>
                        <span className="text-gray-600 dark:text-gray-300"> scoped to outcomes, priced by system scope and milestones—not # of zaps.</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-900 dark:text-white">Forte Care™:</strong>
                        <span className="text-gray-600 dark:text-gray-300"> ongoing support, unlimited site edits, monitoring, updates.</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <LightButton href="/pricing" className="px-8 py-4 text-lg">
                    See Pricing →
                  </LightButton>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                FAQs (short & clear)
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <Icon 
                    name={expandedFAQ === index ? "up" : "down"} 
                    className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4"
                  />
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-4">
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

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-8">
              Ready to stop losing opportunities?
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Start with the free Growth Snapshot. We'll show you exactly where time and money are leaking—and what to fix first.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DarkButton 
                href="/growth-snapshot"
                className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 text-lg"
              >
                Get My Free Growth Snapshot →
              </DarkButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}