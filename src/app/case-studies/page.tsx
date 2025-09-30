"use client";

import { useState } from 'react';
import { Metadata } from 'next';

// Note: Since this is now a client component, metadata should be moved to a layout or parent component
// export const metadata: Metadata = {
//   title: 'Customer Project Showcase | AI-Powered Business Solutions | Forte Web Designs',
//   description: 'Explore our successful AI-powered implementations across various industries. See how we\'ve helped businesses transform operations with custom automation, lead discovery systems, and intelligent assistants.',
// };

interface Phase {
  title: string;
  trigger: string;
  capabilities: string[];
  result?: string;
}

interface ROI {
  title: string;
  description: string;
  benefits: string[];
  result: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  readTime?: string;
  phases?: Phase[];
  roi?: ROI;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'summit-gaming-lounge',
    title: 'Summit Gaming Lounge',
    subtitle: 'AI-Powered Omnichannel Concierge System',
    description: 'We partnered with Summit Gaming Lounge, a modern gaming café and social venue, to design and deploy a custom AI automation system that transforms how they manage operations and customer experiences. This solution streamlines customer communications, reservation management, and group coordination—allowing the venue to focus on delivering exceptional experiences while scaling operations efficiently. The automation system is built in three modular phases: starting with intelligent user recognition across multiple platforms, advancing into sophisticated reservation and group-forming automation, and culminating in comprehensive memory management with personalized customer experiences across SMS, Discord, and Telegram.',
    readTime: '8 min read'
  },
  {
    id: 'metroeats',
    title: 'MetroEats',
    subtitle: 'AI-Powered Restaurant Partner Discovery System',
    description: 'We partnered with MetroEats, a fast-scaling Dallas–Fort Worth food delivery startup, to build an AI-powered partner discovery system that automates restaurant identification and onboarding. By integrating advanced web crawling, API-driven search, and a user-friendly dashboard, the solution provides a live pipeline of high-quality leads with actionable contact details—reducing restaurant partner research time from days to under 1 hour, providing contact info for over 85% of leads, and enabling a 40% increase in monthly restaurant sign-ups while scaling from Dallas to multi-city rollout within 6 months.',
    readTime: '6 min read'
  },
  {
    id: 'summit-supply-chain',
    title: 'Summit Supply Chain Partners',
    subtitle: 'AI-Powered Procurement Analytics',
    description: 'We partnered with Summit Supply Chain Partners to design and deploy SummitProcure™, an AI-powered procurement analytics system. The platform uses intelligent agents to identify revenue risks, streamline procurement data queries, and generate detailed supplier reports in minutes instead of days. By integrating with their existing SQL databases and external data sources, SummitProcure™ empowers procurement teams with real-time intelligence and dramatically reduces manual overhead—cutting query response time by 85%, reducing supplier risk assessment from days to under 30 minutes, and enabling 40% faster procurement decision-making across their entire supply chain network.',
    readTime: '8 min read'
  },
  {
    id: 'clearwater-systems',
    title: 'ClearWater Systems',
    subtitle: 'AI-Powered Quoting & CRM Automation',
    description: 'We partnered with ClearWater Systems, a growing water treatment supplier, to design and deploy an AI-driven quoting and CRM automation system. Their challenge was clear: too much time lost on repetitive email replies, manual quotes, and disorganized lead tracking. The system now automates customer communication, generates accurate quotes in minutes, and keeps the CRM clean and up to date—freeing the ClearWater team to focus on high-value client relationships instead of admin work. This automation system reduces manual quoting time by 80%, delivers same-day quotes that win more deals, and operates 24/7 while scaling seamlessly as new leads grow.',
    readTime: '8 min read'
  },
  {
    id: 'fetchly',
    title: 'Fetchly',
    subtitle: 'AI-Powered Executive Assistant in Slack',
    description: 'Fast-growing pet subscription brand with leadership team overwhelmed by repetitive admin tasks. We designed a custom AI executive assistant that operates entirely within Slack, seamlessly integrating with Gmail, Google Calendar, monday.com, and Google Contacts while matching their unique tone of voice.',
    readTime: '7 min read',
    phases: [
      {
        title: 'Phase 1: Slack-Based Personal Assistant',
        trigger: 'Activated by a Slack @mention',
        capabilities: [
          'Email Management: Drafts, labels, and summarizes inboxes — all in the client\'s unique style',
          'Calendar Integration: Checks availability, schedules, and updates meetings',
          'monday.com Integration: Creates and updates boards, tasks, and project items',
          'Contact Management: Dynamically updates Google Contacts with enriched lead details',
          'Tone Matching: Ensures all messages remain in the client\'s personal style'
        ]
      },
      {
        title: 'Phase 2: Inbox Management Automation',
        trigger: 'Continuous monitoring of incoming emails',
        capabilities: [
          'Auto-enriches contact details for new senders',
          'Summarizes billing emails and pushes them into Slack',
          'Flags VIP emails with automatic labeling',
          'Categorizes internal emails for streamlined review'
        ],
        result: 'Eliminated inbox clutter and accelerated response time'
      },
      {
        title: 'Phase 3: Daily Operational Summary',
        trigger: 'Automatically runs every weekday at 5:00 AM',
        capabilities: [
          'Pulls the day\'s meetings from Google Calendar',
          'Surfaces active/due tasks from monday.com',
          'Generates a concise, actionable summary directly in Slack'
        ],
        result: 'Gave the team daily visibility without logging into multiple platforms'
      }
    ],
    roi: {
      title: 'Return on Investment',
      description: 'By implementing this AI assistant, Fetchly effectively onboarded the equivalent of a full-time executive assistant that lives in Slack',
      benefits: [
        '24/7 availability, no training, no PTO',
        'Seamlessly integrated with existing tools',
        'Reduced administrative overhead by double-digit hours weekly',
        'Created a scalable, modular framework for future AI-driven workflows'
      ],
      result: 'Faster decision-making, less context-switching, and a deeply integrated AI layer that enhanced executive focus and team productivity'
    }
  }
];

export default function CaseStudiesPage() {
  const [expandedStudies, setExpandedStudies] = useState<Record<string, boolean>>({});

  const toggleExpanded = (studyId: string) => {
    setExpandedStudies(prev => ({
      ...prev,
      [studyId]: !prev[studyId]
    }));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white mb-6">
              Customer Project Showcase
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our successful implementations and see how we've helped businesses transform their operations with AI-powered solutions. Each case study details the challenges faced, our approach, and the measurable results achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => {
              const isExpanded = expandedStudies[study.id];
              
              return (
                <div key={study.id} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                          Case Study {String(index + 1).padStart(2, '0')}
                        </span>
                        {study.readTime && (
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {study.readTime}
                          </span>
                        )}
                      </div>
                      <h2 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {study.title}
                      </h2>
                      <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-4">
                        {study.subtitle}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow mb-6">
                      {study.description}
                    </p>

                    {/* Expanded Content */}
                    {isExpanded && study.phases && (
                      <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
                        <div className="space-y-6">
                          {study.phases.map((phase, phaseIndex) => (
                            <div key={phaseIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                {phase.title}
                              </h4>
                              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                                <strong>Trigger:</strong> {phase.trigger}
                              </p>
                              <div className="mb-3">
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Capabilities:</p>
                                <ul className="space-y-1">
                                  {phase.capabilities.map((capability, capIndex) => (
                                    <li key={capIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                      {capability}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {phase.result && (
                                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                  <strong>Result:</strong> {phase.result}
                                </p>
                              )}
                            </div>
                          ))}

                          {/* ROI Section */}
                          {study.roi && (
                            <div className="border border-primary-200 dark:border-primary-700 rounded-lg p-4 bg-primary-50 dark:bg-primary-900/20">
                              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                                {study.roi.title}
                              </h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                {study.roi.description}:
                              </p>
                              <ul className="space-y-1 mb-3">
                                {study.roi.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                                <strong>The result was:</strong> {study.roi.result}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => toggleExpanded(study.id)}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                      >
                        {isExpanded ? 'Hide Details' : 'Read Case Study'}
                        <svg 
                          className={`ml-2 w-5 h-5 transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Technology Tags */}
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI-Powered</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              See how our AI-powered solutions can streamline your operations and drive measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
