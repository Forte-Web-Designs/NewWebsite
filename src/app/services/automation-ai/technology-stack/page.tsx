"use client";

import Link from 'next/link';
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";

export default function TechnologyStackPage() {

  // Infrastructure components
  const infrastructure = [
    {
      category: "Cloud Infrastructure",
      items: [
        { name: "AWS/Azure/GCP", description: "Scalable cloud hosting with global reach and 99.9% uptime" },
        { name: "Supabase", description: "Real-time database with built-in authentication and API generation" },
        { name: "PostgreSQL", description: "Robust relational database for structured data and complex queries" },
        { name: "Vector Databases", description: "Specialized storage for AI embeddings and semantic search" }
      ],
      icon: "clean"
    },
    {
      category: "Programming & Automation",
      items: [
        { name: "Python", description: "AI/ML workflows, data processing, and backend automation" },
        { name: "JavaScript/TypeScript", description: "Web interfaces, real-time interactions, and API integrations" },
        { name: "n8n/Zapier", description: "Visual workflow automation connecting your existing tools" },
        { name: "REST/GraphQL APIs", description: "Seamless integration with your current software stack" }
      ],
      icon: "puzzle"
    },
    {
      category: "AI & Intelligence",
      items: [
        { name: "Model-Agnostic Approach", description: "Works with OpenAI, Anthropic, local models - we choose the best fit" },
        { name: "RAG (Retrieval-Augmented Generation)", description: "AI that knows your specific business context and data" },
        { name: "Embeddings & Semantic Search", description: "Intelligent document and knowledge base searching" },
        { name: "Agent Frameworks", description: "Structured AI workflows with human oversight and control" }
      ],
      icon: "star"
    },
    {
      category: "Security & Monitoring",
      items: [
        { name: "End-to-End Encryption", description: "Your data stays secure in transit and at rest" },
        { name: "Role-Based Permissions", description: "Granular access control for different team members" },
        { name: "Audit Logging", description: "Complete tracking of all system actions and decisions" },
        { name: "Performance Monitoring", description: "Proactive alerts and optimization for reliability" }
      ],
      icon: "user"
    }
  ];

  // Integration capabilities
  const integrations = [
    { name: "CRM Systems", tools: "Salesforce, HubSpot, Pipedrive, Airtable", icon: "company" },
    { name: "Communication", tools: "Gmail, Outlook, Slack, Teams, SMS/Twilio", icon: "services" },
    { name: "Scheduling", tools: "Calendly, Acuity, Google Calendar, Outlook", icon: "pricing" },
    { name: "E-commerce", tools: "Shopify, WooCommerce, Stripe, PayPal", icon: "bag" },
    { name: "Analytics", tools: "Google Analytics, Mixpanel, custom dashboards", icon: "search" },
    { name: "Files & Documents", tools: "Google Drive, Dropbox, SharePoint, S3", icon: "clean" }
  ];

  // Development approach
  const developmentPrinciples = [
    {
      title: "Reliability First",
      description: "Built for 24/7 operation with graceful fallbacks and human oversight",
      details: [
        "Redundant systems and failover mechanisms",
        "Human-in-the-loop workflows for critical decisions", 
        "Comprehensive error handling and recovery",
        "Regular automated health checks and monitoring"
      ]
    },
    {
      title: "Security by Design", 
      description: "Enterprise-grade security from day one, not bolted on later",
      details: [
        "Zero-trust architecture with minimal permissions",
        "Regular security audits and vulnerability scanning",
        "Encrypted data at rest and in transit",
        "Compliance with GDPR, CCPA, and industry standards"
      ]
    },
    {
      title: "Scalable Architecture",
      description: "Grows with your business without performance degradation",
      details: [
        "Microservices architecture for independent scaling",
        "Load balancing and auto-scaling capabilities", 
        "Efficient database indexing and query optimization",
        "CDN integration for global performance"
      ]
    },
    {
      title: "Maintainable Code",
      description: "Clean, documented code that your team can understand and extend",
      details: [
        "Comprehensive documentation and code comments",
        "Automated testing and quality assurance",
        "Version control and deployment pipelines",
        "Knowledge transfer and training included"
      ]
    }
  ];

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
            <span className="text-gray-900 dark:text-white">Technology Stack</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Technology Stack — Built for reliability and scale
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Modern infrastructure, proven frameworks, and enterprise-grade security. Our technology choices prioritize your business continuity and growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <DarkButton href="/growth-snapshot" className="px-8 py-4 text-lg">
                  Get Technical Assessment →
                </DarkButton>
                <LightButton href="/services/automation-ai" className="px-8 py-4 text-lg">
                  ← Back to Automation & AI
                </LightButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                What powers your systems
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Enterprise-grade components selected for performance, security, and long-term maintainability.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-16">
            {infrastructure.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <SimpleAnimatedCard>
                  <div className="text-center mb-12">
                    <Icon name={category.icon} className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>
                </SimpleAnimatedCard>

                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <SimpleAnimatedCard key={itemIndex}>
                      <div className="bg-white dark:bg-gray-700 rounded-xl p-6">
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </SimpleAnimatedCard>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Integrates with your existing tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                No rip-and-replace required. We connect with the software you're already using.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center">
                  <Icon name={integration.icon} className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {integration.tools}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center mt-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Don't see your tool? We integrate with 1000+ applications via API.
              </p>
              <LightButton href="/contact" className="px-6 py-3">
                Ask about your specific tools →
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Our development philosophy
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Every system is built with these core principles to ensure your long-term success.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {developmentPrinciples.map((principle, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {principle.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {principle.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* AI Approach Deep Dive */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                AI that works for your business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI approach prioritizes practical results over flashy demos. Context-aware, secure, and always under your control.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleAnimatedCard>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Model-Agnostic Architecture
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    We don't lock you into a single AI provider. Our systems work with OpenAI, Anthropic, Google, and even local models.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    This approach gives you flexibility, cost optimization, and protection against vendor lock-in as AI technology evolves.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Choose the best model for each specific task</li>
                      <li>• Switch providers without rebuilding systems</li>
                      <li>• Optimize costs across different model pricing</li>
                      <li>• Future-proof against technology changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div>
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  RAG & Knowledge Management
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    Retrieval-Augmented Generation (RAG) means your AI knows your business context - policies, procedures, customer history, product details.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Instead of generic responses, you get accurate, business-specific answers that sound like they come from your team.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Capabilities:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li>• Search across all company documents</li>
                      <li>• Provide context-aware responses</li>
                      <li>• Cite sources for transparency</li>
                      <li>• Update knowledge in real-time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Performance & Reliability */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                  Built for business continuity
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <SimpleAnimatedCard>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">99.9%</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Uptime SLA</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enterprise-grade hosting with redundancy and failover
                    </p>
                  </div>
                </SimpleAnimatedCard>

                <SimpleAnimatedCard>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">&lt;2s</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Optimized for fast user interactions and real-time updates
                    </p>
                  </div>
                </SimpleAnimatedCard>

                <SimpleAnimatedCard>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary-600">24/7</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Monitoring</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Proactive alerts and automated recovery procedures
                    </p>
                  </div>
                </SimpleAnimatedCard>

                <SimpleAnimatedCard>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="clean" className="w-8 h-8 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure by Default</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Encryption, access controls, and compliance built-in
                    </p>
                  </div>
                </SimpleAnimatedCard>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-8">
              Ready to build something reliable?
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your technical requirements and design a system that scales with your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Technical Review →
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
    </div>
  );
}