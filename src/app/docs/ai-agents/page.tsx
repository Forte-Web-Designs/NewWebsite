import type { Metadata } from "next";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import { Icon } from "@/components/images/Icon";
import Link from "next/link";
import DarkButton from "@/components/DarkButton";

export const metadata: Metadata = {
  title: "AI Agents & Custom AI Assistants | Forte",
  description: "Custom AI agents, RAG pipelines, and intelligent assistants that integrate with your business processes. Learn how AI agents can automate complex workflows.",
  keywords: [
    "AI agents", "custom AI assistants", "RAG pipelines", "AI chatbots", "business AI agents",
    "intelligent automation", "AI workflow automation", "custom AI solutions", 
    "conversational AI", "AI integration", "smart AI assistants"
  ],
  openGraph: {
    title: "AI Agents & Custom AI Assistants | Forte",
    description: "Custom AI agents, RAG pipelines, and intelligent assistants that integrate with your business processes. Learn how AI agents can automate complex workflows.",
    url: "https://fortewebdesigns.com/docs/ai-agents/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/docs/ai-agents/"
  }
};

export default function AIAgentsPage() {
  const agentTypes = [
    {
      name: "Customer Service Agent",
      description: "Handles common customer inquiries, schedules appointments, and escalates complex issues to human staff.",
      capabilities: [
        "Answer frequently asked questions 24/7",
        "Schedule appointments in real-time",
        "Process basic service requests",
        "Escalate complex issues with context"
      ],
      ideal: "Service businesses with high inquiry volume",
      icon: "services"
    },
    {
      name: "Sales Qualification Agent",
      description: "Qualifies leads, gathers project requirements, and routes high-quality prospects to your sales team.",
      capabilities: [
        "Qualify leads with smart questions",
        "Gather project scope and budget",
        "Route qualified leads immediately",
        "Follow up on incomplete submissions"
      ],
      ideal: "B2B services and high-ticket sales",
      icon: "dollar"
    },
    {
      name: "Project Coordination Agent",
      description: "Manages project updates, sends status reports, and coordinates between team members and clients.",
      capabilities: [
        "Send automated project updates",
        "Coordinate team schedules",
        "Track project milestones",
        "Handle client communication"
      ],
      ideal: "Project-based businesses and agencies",
      icon: "puzzle"
    },
    {
      name: "Review & Feedback Agent",
      description: "Automates review requests, processes feedback, and manages online reputation proactively.",
      capabilities: [
        "Request reviews at optimal times",
        "Process and categorize feedback",
        "Alert on negative reviews",
        "Generate satisfaction reports"
      ],
      ideal: "Service businesses focused on reputation",
      icon: "star"
    }
  ];

  const ragCapabilities = [
    {
      title: "Document Intelligence",
      description: "AI agents that can read, understand, and process your business documents, contracts, and knowledge base.",
      examples: ["Contract analysis", "Policy lookup", "FAQ automation", "Document classification"]
    },
    {
      title: "Contextual Conversations",
      description: "Agents that remember conversation history and understand context for more natural interactions.",
      examples: ["Multi-turn conversations", "Reference previous interactions", "Maintain conversation context", "Personalized responses"]
    },
    {
      title: "Knowledge Base Integration",
      description: "Connect agents to your existing knowledge base, manuals, and documentation for accurate responses.",
      examples: ["Company policy lookup", "Product information", "Technical documentation", "Training materials"]
    },
    {
      title: "Real-Time Learning",
      description: "Agents that learn from interactions and improve responses over time with human feedback.",
      examples: ["Response quality improvement", "New topic learning", "Accuracy refinement", "Performance optimization"]
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Business Analysis",
      description: "We analyze your current processes to identify where AI agents can add the most value.",
      timeline: "Week 1-2"
    },
    {
      step: "2", 
      title: "Agent Design",
      description: "Design conversation flows, integration points, and escalation rules for your specific use case.",
      timeline: "Week 2-3"
    },
    {
      step: "3",
      title: "Development & Training",
      description: "Build and train the AI agent using your business data and requirements.",
      timeline: "Week 3-5"
    },
    {
      step: "4",
      title: "Testing & Refinement",
      description: "Test with real scenarios, refine responses, and ensure proper integration.",
      timeline: "Week 5-6"
    },
    {
      step: "5",
      title: "Deployment & Monitoring",
      description: "Deploy to production with monitoring, analytics, and continuous improvement.",
      timeline: "Week 6+"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <SimpleScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              AI Agents & Custom Assistants
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Intelligent AI agents that handle routine tasks, answer questions, and streamline operations—
              built specifically for your business processes and integrated with your existing tools.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">Not Just Chatbots</h3>
              <p className="text-blue-800 dark:text-blue-200">
                Our AI agents integrate deeply with your business systems. They can schedule appointments, 
                process orders, update CRM records, and handle complex multi-step workflows—not just answer questions.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Agent Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Types of AI Agents We Build
            </h2>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agentTypes.map((agent, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Icon name={agent.icon} className="w-10 h-10 text-primary-600" />
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                      {agent.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {agent.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <li key={capIndex} className="flex items-start gap-2">
                          <Icon name="check" className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ideal For:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {agent.ideal}
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* RAG Capabilities */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Advanced AI Capabilities (RAG)
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Retrieval-Augmented Generation (RAG) enables AI agents to access and use your specific business 
              information for more accurate and contextual responses.
            </p>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ragCapabilities.map((capability, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Examples:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {capability.examples.map((example, exIndex) => (
                        <div key={exIndex} className="bg-white dark:bg-gray-700 rounded-lg p-3 text-sm">
                          <span className="text-gray-600 dark:text-gray-300">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Implementation Process
            </h2>
          </SimpleScrollReveal>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 flex items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {step.description}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      Timeline: {step.timeline}
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              AI Agent Investment
            </h2>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Setup & Training</h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">$3,000-$8,000</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">One-time development cost</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Monthly Management</h3>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">$300-$800</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Hosting, monitoring, improvements</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">ROI Timeline</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">2-4 months</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Typical payback period</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Investment varies based on complexity and integration requirements. 
              Most clients see ROI within 2-4 months through time savings and improved customer response.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to build your AI agent?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's analyze your workflows and design an AI agent that fits your specific business needs.
            </p>
            <Link href="/growth-audit">
              <DarkButton className="bg-white text-primary-600 hover:bg-gray-50">
                Get Your Free Growth Analysis →
              </DarkButton>
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}