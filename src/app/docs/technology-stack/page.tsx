import type { Metadata } from "next";
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import { Icon } from "@/components/images/Icon";
import Link from "next/link";
import DarkButton from "@/components/DarkButton";

export const metadata: Metadata = {
  title: "AI Technology Stack & Infrastructure | Forte",
  description: "Learn about our AI technology stack: n8n automations, AWS AI infrastructure, custom integrations, and secure cloud hosting for business automation.",
  keywords: [
    "AI technology stack", "AI infrastructure", "n8n automations", "AWS AI stack",
    "business automation infrastructure", "AI integration platform", "automation technology",
    "AI systems architecture", "cloud AI infrastructure", "automation stack"
  ],
  openGraph: {
    title: "AI Technology Stack & Infrastructure | Forte",
    description: "Learn about our AI technology stack: n8n automations, AWS AI infrastructure, custom integrations, and secure cloud hosting for business automation.",
    url: "https://fortewebdesigns.com/docs/technology-stack/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/docs/technology-stack/"
  }
};

export default function TechnologyStackPage() {
  const techStack = [
    {
      category: "Automation Platform",
      tool: "n8n",
      description: "Open-source workflow automation that connects your existing tools without vendor lock-in.",
      use: "Building custom automation pipelines between CRM, scheduling, invoicing, and communication tools.",
      icon: "flash"
    },
    {
      category: "AI Infrastructure",
      tool: "AWS AI Services",
      description: "Enterprise-grade AI services for natural language processing, document analysis, and intelligent routing.",
      use: "Processing forms, extracting data from documents, and understanding customer intent.",
      icon: "clean"
    },
    {
      category: "Database & Storage",
      tool: "PostgreSQL + AWS S3",
      description: "Reliable data storage with automated backups and enterprise-level security.",
      use: "Storing customer data, automation history, and performance analytics securely.",
      icon: "services"
    },
    {
      category: "API Integration",
      tool: "REST + Webhooks",
      description: "Standard integrations that work with 99% of business software including CRMs, scheduling, and payment tools.",
      use: "Connecting your existing tools without replacing them or forcing migrations.",
      icon: "puzzle"
    },
    {
      category: "Hosting & Security",
      tool: "AWS Cloud + SSL",
      description: "Auto-scaling infrastructure with 99.9% uptime, encrypted data, and compliance-ready security.",
      use: "Ensuring your automation systems are always available and your data stays protected.",
      icon: "clean"
    },
    {
      category: "Monitoring & Analytics",
      tool: "Custom Dashboards",
      description: "Real-time monitoring of automation performance, error detection, and business metrics.",
      use: "Tracking ROI, identifying bottlenecks, and ensuring smooth operation of all automated processes.",
      icon: "pricing"
    }
  ];

  const integrations = [
    { name: "CRM Systems", tools: ["Salesforce", "HubSpot", "Pipedrive", "Zoho", "Monday.com"] },
    { name: "Scheduling", tools: ["Calendly", "Acuity", "TimeTrade", "Appointlet", "Square Appointments"] },
    { name: "Communication", tools: ["Gmail", "Outlook", "Slack", "Microsoft Teams", "SMS/Twilio"] },
    { name: "Payments", tools: ["Stripe", "PayPal", "Square", "QuickBooks", "FreshBooks"] },
    { name: "Marketing", tools: ["Mailchimp", "ActiveCampaign", "ConvertKit", "Google Ads", "Facebook Ads"] },
    { name: "Project Management", tools: ["Asana", "Trello", "Notion", "ClickUp", "Monday.com"] }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <SimpleScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Technology Stack & Infrastructure
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Enterprise-grade tools and infrastructure that power reliable, secure, and scalable business automation systems.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-2">Why This Stack?</h3>
              <p className="text-blue-800 dark:text-blue-200">
                We use proven, enterprise-grade technologies that integrate with your existing tools. No vendor lock-in, 
                no proprietary platforms—just reliable infrastructure that grows with your business.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Core Technologies
            </h2>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techStack.map((tech, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-8 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon name={tech.icon} className="w-8 h-8 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                        {tech.tool}
                      </h3>
                      <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {tech.category}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How We Use It:</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {tech.use}
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Integration Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              We connect with the tools you already use. No forced migrations or platform switches required.
            </p>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((category, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Security & Compliance
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Data Security</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Automated daily backups with 30-day retention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Role-based access controls and permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>SOC 2 Type II compliant hosting infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-8">
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Performance & Reliability</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>99.9% uptime SLA with auto-scaling infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>24/7 monitoring and automatic error detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Load balancing for high-traffic automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Disaster recovery with sub-5-minute failover</span>
                  </li>
                </ul>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to see how this works for your business?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a free analysis of your current systems and see where automation could save you time and money.
            </p>
            <Link href="/growth-audit">
              <DarkButton className="bg-white text-primary-600 hover:bg-gray-50">
                Get Your Free Growth Snapshot →
              </DarkButton>
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}