'use client';

import { useState } from 'react';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

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
  "Custom-coded websites (no WordPress) that load fast & convert",
  "AI agents & automation pipelines (intake, quotes, follow-ups, reviews)",
  "Owner dashboards & data aggregation from multiple tools",
  "CRM/tool integration & data migration", 
  "SEO & conversion optimization ongoing",
  "Technical documentation & training for your team"
];

const partnershipModels = [
  {
    title: "White Label",
    description: "We work invisibly under your brand. Your client never knows we exist.",
    features: [
      "All work done under your company name",
      "Your branding on all deliverables", 
      "Direct client communication through you",
      "You set pricing and manage relationship"
    ],
    icon: "eye-off"
  },
  {
    title: "Co-Branded", 
    description: "We're introduced as your technical partner. Shared expertise.",
    features: [
      "Joint discovery calls and presentations",
      "Shared project management",
      "Technical expertise under our name",
      "Strategy and account management under yours"
    ],
    icon: "handshake"
  },
  {
    title: "Referral Only",
    description: "You refer, we handle, you get paid. Hands-off revenue.",
    features: [
      "25% of project value as referral fee",
      "We handle all technical aspects",
      "You maintain the client relationship", 
      "Ongoing MRR sharing available"
    ],
    icon: "share"
  }
];

const processSteps = [
  {
    title: "Partner Call",
    description: "We discuss your needs, client types, and partnership model",
    duration: "30 min"
  },
  {
    title: "Trial Project", 
    description: "Start with one client project to test our collaboration",
    duration: "2-4 weeks"
  },
  {
    title: "Partnership Agreement",
    description: "Formalize pricing, processes, and communication protocols", 
    duration: "1 week"
  },
  {
    title: "Ongoing Collaboration",
    description: "Regular project flow with dedicated partner support",
    duration: "Ongoing"
  }
];

export default function AgencyPartnershipClient() {
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
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {model.description}
                  </p>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Icon name="check" className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              How Partnership Works
            </h2>
          </SimpleScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-6">
                    {index + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {step.description}
                  </p>
                  <span className="text-sm text-primary-600 font-semibold">
                    {step.duration}
                  </span>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-4">
              Partner Pricing Structure
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
              Transparent, scalable pricing that grows with your partnership
            </p>
          </SimpleScrollReveal>

          <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                  White Label & Co-Branded
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Partner Rate:</strong> 15-25% below our standard pricing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Volume Discounts:</strong> Additional 5-10% for 3+ projects/month
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Payment Terms:</strong> Net 15 (vs. standard Net 30)
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                  Referral Only
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Project Referrals:</strong> 25% of total project value
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Ongoing MRR:</strong> 15% monthly recurring revenue share
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Payment:</strong> Within 30 days of project completion
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Tooltip */}
            <div className="mt-8 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg relative">
              <button
                onClick={() => setShowPricingTooltip(!showPricingTooltip)}
                className="flex items-center gap-2 text-primary-700 dark:text-primary-300 font-semibold"
              >
                <Icon name="info" className="w-5 h-5" />
                See Sample Project Pricing →
              </button>
              
              {showPricingTooltip && (
                <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-primary-200 dark:border-primary-700">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Custom Website (5-page):</span>
                      <span className="font-semibold">Your Cost: $3,000 | Typical Client Price: $4,000-5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Automation Setup:</span>
                      <span className="font-semibold">Your Cost: $2,250 | Typical Client Price: $3,000-4,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Agent Implementation:</span>
                      <span className="font-semibold">Your Cost: $3,750 | Typical Client Price: $5,000-6,000</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white text-center mb-12">
              Why Partner With Forte?
            </h2>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="clock" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Reliable Delivery
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We deliver on time, every time. No missed deadlines or scope creep surprises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="shield" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Hand-coded sites, thoroughly tested automations, documented processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="users" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Direct access to our team. No outsourcing, no language barriers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="trending-up" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Scalable Partnership
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    From 1 project to 20+/month. We scale capacity with your growth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="book" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Knowledge Transfer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We document everything and train your team on what we build.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Icon name="dollar-sign" className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No hidden fees, clear timelines, predictable costs you can quote confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                Let's discuss how we can help you deliver more value to your clients while growing your MRR.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact?type=partner">
                  <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Schedule Partnership Call →
                  </button>
                </Link>
                <a 
                  href="mailto:hello@fortewebdesigns.com?subject=Partnership Inquiry"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us Directly →
                </a>
              </div>

              <p className="mt-8 text-sm text-primary-200">
                <Icon name="map-pin" className="inline w-4 h-4 mr-2" />
                Based in Grapevine, TX • Serving partners nationwide
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}