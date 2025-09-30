"use client";

import { useState } from 'react';
import Link from 'next/link';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

export default function TechnologyStackPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="pt-20 pb-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/services" className="hover:text-primary-600">Services</Link>
            <span className="mx-2">›</span>
            <Link href="/services/automation-ai" className="hover:text-primary-600">Automation & AI</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 dark:text-white">Technology Stack</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white dark:bg-gray-900 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Technology Stack
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Our stack is built to launch fast, integrate with your tools, and scale safely. We're AWS-first and multi-cloud capable, with battle-tested components for data, automations, and AI—so you get results without infrastructure drama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <DarkButton href="/contact" className="px-6 py-3">
              Talk to Us
            </DarkButton>
            <LightButton href="/services/automation-ai" className="px-6 py-3">
              Back to Automation & AI
            </LightButton>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Fast to Deploy
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Prebuilt patterns and integrations cut time-to-value.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Secure by Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Role-based access, audit trails, and scoped API keys.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Built to Grow
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modular components swap in/out as needs change.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-500 dark:text-gray-400 italic">
            Technical details below are optional—your results are not.
          </p>
        </div>
      </section>

      {/* Architecture Snapshot */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 mb-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded">Sources</div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded">Integration Layer</div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded">Data Layer</div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded">AI/Agents</div>
              <div className="text-gray-400">→</div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded">Dashboards/Apps</div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 italic">
            Each block is modular. We integrate with what you have and only add components that improve outcomes.
          </p>
        </div>
      </section>

      {/* Stack Details */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Stack Details
          </h2>
          
          <div className="space-y-8">
            {/* Infrastructure */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Infrastructure
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We run on modern cloud infrastructure that's reliable, secure, and easy to scale. Most projects ship on AWS; we also support Azure, GCP, or DigitalOcean when the situation calls for it.
              </p>
              
              <button
                onClick={() => toggleSection('infrastructure')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'infrastructure' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'infrastructure' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Cloud:</strong> AWS-first; multi-cloud capable.</li>
                    <li><strong>Auth & Realtime:</strong> Supabase for secure auth and realtime features.</li>
                    <li><strong>Databases:</strong> PostgreSQL for structured data.</li>
                    <li><strong>Vector stores:</strong> Pinecone / Weaviate / Qdrant for semantic search.</li>
                    <li><strong>API keys:</strong> Per-project keys with scoped permissions.</li>
                    <li><strong>Internal tooling:</strong> GitHub + ClickUp automations, secure CLI utilities.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Integration & Workflow Layer */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Integration & Workflow Layer
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your systems don't need to change. We connect CRMs, phones, calendars, forms, and billing so data moves cleanly and follow-ups just happen.
              </p>
              
              <button
                onClick={() => toggleSection('integration')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'integration' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'integration' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Orchestration:</strong> n8n (primary), Zapier/Make as needed.</li>
                    <li><strong>Integrations:</strong> 850+ prebuilt connectors; custom webhooks & REST.</li>
                    <li><strong>Patterns:</strong> intake routing, reminders, status sync, error handling & retries.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Data & Observability */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Data & Observability
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We track the right metrics—response time, quote turnaround, follow-through—so you can see what's working and fix what's not.
              </p>
              
              <button
                onClick={() => toggleSection('data')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'data' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'data' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Storage:</strong> PostgreSQL + object storage for logs/artifacts.</li>
                    <li><strong>Analytics:</strong> Owner dashboards (Looker Studio/Airtable Interfaces/React).</li>
                    <li><strong>Monitoring:</strong> Run health, latency, failure alerts; audit logs for changes.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* AI & Agents */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                AI & Agents
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We use AI where it clearly saves time or increases revenue—never just for buzzwords. Models are chosen per task: speed, accuracy, or cost.
              </p>
              
              <button
                onClick={() => toggleSection('ai')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'ai' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'ai' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Model strategy:</strong> Model-agnostic; route per task (quality, latency, cost).</li>
                    <li><strong>RAG:</strong> Retrieval-augmented answers from your approved sources.</li>
                    <li><strong>Embeddings:</strong> Benchmarked per use case before rollout.</li>
                    <li><strong>Agents:</strong> Modular tools for search, summarize, route, update records, and trigger workflows.</li>
                    <li><strong>Evaluation:</strong> LLM-as-judge scoring, prompt/version control, regression checks.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Interfaces & Apps */}
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interfaces & Apps
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your team can work in the tools they already use—Slack, email, web apps, or dashboards—with simple, guided interfaces.
              </p>
              
              <button
                onClick={() => toggleSection('interfaces')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'interfaces' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'interfaces' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Frontend:</strong> TypeScript/React.</li>
                    <li><strong>Channels:</strong> Slack, SMS/Email, Web widgets.</li>
                    <li><strong>Access:</strong> Role-based permissions and granular scopes.</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Voice & Communications */}
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Voice & Communications
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For phone or voice use cases, we can enable natural, responsive voice agents when appropriate.
              </p>
              
              <button
                onClick={() => toggleSection('voice')}
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium"
              >
                Technical detail
                <span>{expandedSection === 'voice' ? '−' : '+'}</span>
              </button>
              
              {expandedSection === 'voice' && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li><strong>Voice:</strong> ElevenLabs primary; alternatives as needed.</li>
                    <li><strong>Telephony:</strong> Twilio/JustCall integrations.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Stack Matters */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Why this stack matters
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Fewer delays:</strong>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Prebuilt patterns + deep integrations = faster launches.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Lower risk:</strong>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Role-based access, logs, and fallbacks keep systems safe.</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-white">Measurable lift:</strong>
                <span className="text-gray-600 dark:text-gray-300 ml-2">Dashboards track response time, quoting speed, and follow-through so we can prove ROI.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-FAQ */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
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
                  Do we have to move to AWS?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 0 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 0 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    No. We're AWS-first but can deploy to Azure, GCP, or your preferred environment when it's the right fit.
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
                  Will this replace our CRM or phones?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 1 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 1 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Usually not. We integrate with your systems and only recommend changes with clear, provable ROI.
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
                  How do you choose AI models?
                </h3>
                <span className="text-gray-400 ml-4">
                  {expandedFAQ === 2 ? '−' : '+'}
                </span>
              </button>
              
              {expandedFAQ === 2 && (
                <div className="pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    We benchmark for your use case (accuracy, speed, cost, language) and route requests to the best option.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LightButton href="/services/automation-ai/ai-agents" className="px-8 py-4">
              Explore AI Agents
            </LightButton>
            <DarkButton href="/contact" className="px-8 py-4">
              Talk to Us
            </DarkButton>
          </div>
        </div>
      </section>
    </div>
  );
}