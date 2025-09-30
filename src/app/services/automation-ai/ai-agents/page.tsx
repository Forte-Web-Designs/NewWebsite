"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

export default function AIAgentsPage() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // Detailed AI Agents
  const aiAgents = [
    {
      id: "ultimate-assistant",
      name: "Ultimate Assistant",
      tagline: "Your digital chief of staff",
      description: "Manages email, calendar, tasks, and communications across all your platforms with context-aware decision making.",
      features: [
        "Email prioritization and draft responses",
        "Calendar scheduling with conflict resolution", 
        "Task management and deadline tracking",
        "Cross-platform integration (Gmail, Slack, Teams)",
        "Meeting preparation and follow-up automation"
      ],
      outcomes: [
        "15+ hours saved weekly on administrative tasks",
        "Faster response times to important communications", 
        "Reduced scheduling conflicts and missed meetings",
        "Clear daily priorities and action items"
      ],
      useCases: [
        "Executive assistants for busy owners",
        "Project managers coordinating teams",
        "Sales teams managing multiple prospects"
      ],
      icon: "user"
    },
    {
      id: "research-report",
      name: "Deep Research PDF Report",
      tagline: "Professional insights in minutes",
      description: "Comprehensive market research, competitive analysis, and industry reports generated from multiple data sources.",
      features: [
        "Multi-source data aggregation and analysis",
        "Professional PDF report generation",
        "Citations and source verification",
        "Custom templates for different research types",
        "Automated fact-checking and cross-referencing"
      ],
      outcomes: [
        "Professional research completed in minutes vs days",
        "Comprehensive market insights for decision-making",
        "Reduced research costs and faster time-to-market", 
        "Consistent report quality and formatting"
      ],
      useCases: [
        "Market entry and expansion planning",
        "Competitive landscape analysis",
        "Investment and acquisition research"
      ],
      icon: "search"
    },
    {
      id: "newsletter-creation",
      name: "Newsletter Creation",
      tagline: "Consistent content that engages",
      description: "Automated newsletter creation from your content sources, maintaining your brand voice and engagement patterns.",
      features: [
        "Content curation from multiple sources",
        "Brand voice consistency checking",
        "A/B testing for subject lines and content",
        "Automated scheduling and distribution",
        "Performance analytics and optimization"
      ],
      outcomes: [
        "Consistent weekly/monthly content delivery",
        "Higher open rates and engagement",
        "Reduced content creation time by 80%",
        "Professional newsletter design and formatting"
      ],
      useCases: [
        "Marketing teams maintaining regular communication",
        "Thought leaders building audience engagement",
        "Companies sharing updates and insights"
      ],
      icon: "services"
    },
    {
      id: "rag-pipeline",
      name: "RAG Pipeline",
      tagline: "Your company knowledge, instantly accessible",
      description: "Retrieval-Augmented Generation system that makes your company documents, policies, and knowledge searchable through natural language.",
      features: [
        "Document ingestion and vectorization",
        "Natural language query processing",
        "Context-aware answer generation",
        "Source citation and verification",
        "Permission-based access control"
      ],
      outcomes: [
        "Instant access to company knowledge",
        "Reduced time spent searching for information",
        "Consistent answers across team members",
        "Improved onboarding and training efficiency"
      ],
      useCases: [
        "Customer support knowledge bases",
        "Employee training and onboarding",
        "Policy and procedure queries"
      ],
      icon: "puzzle"
    },
    {
      id: "faceless-shorts",
      name: "Faceless Shorts",
      tagline: "Automated video content creation",
      description: "Automated creation and publishing of short-form video content for social media platforms using AI-generated visuals and voiceovers.",
      features: [
        "Script generation from content themes",
        "AI voiceover in multiple styles",
        "Automated video editing and effects",
        "Platform-specific formatting (TikTok, Reels, Shorts)",
        "Scheduled publishing across platforms"
      ],
      outcomes: [
        "Consistent daily/weekly video content",
        "Increased social media engagement",
        "Professional video quality without video skills",
        "More time for strategy vs content creation"
      ],
      useCases: [
        "Educational content and tutorials",
        "Product demonstrations and reviews",
        "Industry insights and commentary"
      ],
      icon: "star"
    }
  ];

  // Demo request form data
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    agent: '',
    useCase: '',
    message: ''
  });

  const handleDemoRequest = (agentName: string) => {
    setActiveDemo(agentName);
    setDemoForm(prev => ({ ...prev, agent: agentName }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Demo request submitted:', demoForm);
    setActiveDemo(null);
    setDemoForm({ name: '', email: '', company: '', agent: '', useCase: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="pt-20 pb-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/services" className="hover:text-primary-600">Services</Link>
            <span className="mx-2">›</span>
            <Link href="/services/automation-ai" className="hover:text-primary-600">Automation & AI</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-900 dark:text-white">AI Agents</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                AI Agents — Practical building blocks for real work
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Autonomous but guided, context-aware, secure, and scalable. Our AI agents handle specific workflows so your team can focus on growth and client relationships.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <DarkButton href="#request-demo" className="px-8 py-4 text-lg">
                  Request an Agent Demo →
                </DarkButton>
                <LightButton href="/services/automation-ai" className="px-8 py-4 text-lg">
                  ← Back to Automation & AI
                </LightButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* AI Agents Detailed Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Choose your AI workforce
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Each agent is designed for specific business functions with measurable outcomes.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-16">
            {aiAgents.map((agent, index) => (
              <div key={agent.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <SimpleAnimatedCard>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <Icon name={agent.icon} className="w-12 h-12 text-primary-600" />
                      <div>
                        <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                          {agent.name}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                          {agent.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      {agent.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {agent.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Outcomes:</h4>
                        <ul className="space-y-2">
                          {agent.outcomes.slice(0, 3).map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button
                        onClick={() => handleDemoRequest(agent.name)}
                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        Request {agent.name} Demo
                      </button>
                    </div>
                  </div>
                </SimpleAnimatedCard>

                <SimpleAnimatedCard>
                  <div className={`bg-white dark:bg-gray-700 rounded-xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Perfect for:</h4>
                    <div className="space-y-4">
                      {agent.useCases.map((useCase, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-600 rounded-lg p-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            {useCase}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Implementation Timeline:</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        2-4 weeks for initial deployment, with ongoing optimization through Forte Care™
                      </p>
                    </div>
                  </div>
                </SimpleAnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Request Section */}
      <section id="request-demo" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                See an AI Agent in action
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Request a personalized demo of any agent. We'll show you exactly how it works with your workflows and data.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-2xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={demoForm.name}
                        onChange={(e) => setDemoForm(prev => ({...prev, name: e.target.value}))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        value={demoForm.email}
                        onChange={(e) => setDemoForm(prev => ({...prev, email: e.target.value}))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={demoForm.company}
                      onChange={(e) => setDemoForm(prev => ({...prev, company: e.target.value}))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Which AI Agent interests you most? *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      value={demoForm.agent}
                      onChange={(e) => setDemoForm(prev => ({...prev, agent: e.target.value}))}
                    >
                      <option value="">Select an AI Agent</option>
                      {aiAgents.map(agent => (
                        <option key={agent.id} value={agent.name}>{agent.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Describe your use case
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What specific challenges are you trying to solve?"
                      value={demoForm.useCase}
                      onChange={(e) => setDemoForm(prev => ({...prev, useCase: e.target.value}))}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Request AI Agent Demo →
                  </button>
                </form>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Agents */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Why choose our AI agents?
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SimpleAnimatedCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="clean" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure & Compliant</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Enterprise-grade security with data encryption and compliance standards.
                </p>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="puzzle" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Easy Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Works with your existing tools and workflows. No rip-and-replace.
                </p>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="pricing" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Measurable Results</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Clear metrics and reporting on time saved and outcomes achieved.
                </p>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="services" className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ongoing Support</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Continuous optimization and updates through Forte Care™.
                </p>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-8">
              Ready to add AI agents to your team?
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Start with a demo of the agent that fits your biggest challenge. We'll show you exactly how it integrates with your workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Request Agent Demo →
              </button>
              <LightButton 
                href="/services/automation-ai"
                className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary-600"
              >
                ← Back to Automation & AI
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Demo Modal */}
      {activeDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Request {activeDemo} Demo
              </h3>
              <button
                onClick={() => setActiveDemo(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <Icon name="x" className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Scroll down to the demo request form to get started with {activeDemo}.
            </p>
            <button
              onClick={() => {
                setActiveDemo(null);
                document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Go to Demo Form
            </button>
          </div>
        </div>
      )}
    </div>
  );
}