import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Summit Gaming Lounge Case Study | AI-Powered Omnichannel Concierge System | Forte Web Designs',
  description: 'Discover how we partnered with Summit Gaming Lounge to build a custom AI automation system that streamlines member communications, reservation management, and group coordination across SMS, Discord, and Telegram.',
};

export default function SummitGamingLoungeCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-primary-600 dark:hover:text-primary-400">Case Studies</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Summit Gaming Lounge</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide mb-4 block">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Summit Gaming Lounge | AI-Powered Omnichannel Concierge System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We partnered with Summit Gaming Lounge to design and deploy a custom AI automation system for their community-focused gaming business. This solution streamlines member communications, reservation management, and group coordination—allowing the lounge to focus on creating memorable experiences instead of getting bogged down in repetitive administrative workflows.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 12 weeks</div>
                <div>🎮 <strong>Industry:</strong> Entertainment/Gaming</div>
                <div>⚡ <strong>Result:</strong> Omnichannel AI concierge</div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-12 text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Summit Gaming Lounge</h3>
                <p className="text-gray-600 dark:text-gray-400">AI-Powered Omnichannel Concierge System</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Omnichannel Message Processing Architecture */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Omnichannel Message Processing Flow
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              The system processes messages from SMS, Discord, and Telegram through intelligent routing, 
              user recognition, and automated response generation with full conversation context.
            </p>

            {/* Main Flow Diagram */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-12">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <img 
                  src="/images/case-studies/summit-gaming-omnichannel-flow.png"
                  alt="Summit Gaming Lounge TableTop AI Concierge - Complete Omnichannel Message Processing Flow"
                  className="w-full h-auto mx-auto"
                  style={{ minWidth: '1200px' }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-6">
                Complete message processing pipeline from multi-platform input through intelligent routing, 
                MCP database operations, and contextual response generation.
              </p>
            </div>

            {/* Flow Components */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Multi-Platform Intake
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Unified processing of SMS, Discord, and Telegram messages with platform-specific optimizations and formatting
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Intelligent User Recognition
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  AI-powered identification of existing members vs. new users with cross-platform profile linking and routing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  MCP-Powered Operations
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Dynamic database operations through Model Context Protocol with real-time reservations and group coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Project Overview</h2>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                The automation system was built in <strong>three modular phases</strong>: starting with intelligent user recognition across multiple platforms, advancing into smart reservation and group-forming automation, and culminating in comprehensive memory management with personalized member experiences across SMS, Discord, and Telegram.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Recognition</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Omnichannel identity management and unified member profiles
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Automation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MCP-powered reservation engine and group formation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personalization</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Conversational memory and adaptive member services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Our 3-Phase Solution</h2>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Omnichannel User Recognition & Identity Management
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-4">
                      <strong>Trigger:</strong> Activated by incoming messages across SMS (Twilio), Discord, or Telegram platforms.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Universal Member Identification</div>
                        <p className="text-sm ml-4">Links phone numbers, Discord usernames, and Telegram handles into unified member profiles stored in Airtable. Performs instant cross-platform lookup to determine member status and route conversations appropriately.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Dynamic Conversation Routing</div>
                        <p className="text-sm ml-4">Existing members connect to the full-service User Agent with complete access to reservations, preferences, and lounge history. New visitors are guided through the specialized Non-User Agent for streamlined profile creation.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔗</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        "Platform-optimized onboarding flows leverage each channel's unique capabilities"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      MCP-Powered Reservation & Group Formation Engine
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      <strong>Trigger:</strong> Activated when members request assistance with bookings, game matching, or lounge services.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Functionality:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Model Context Protocol Integration</div>
                        <p className="text-sm ml-4">Custom MCP server enables AI agents to dynamically select and execute database operations in real time. Context-aware tool selection where agents autonomously choose optimal actions based on conversation flow.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Intelligent Table & Game Matching</div>
                        <p className="text-sm ml-4">Analyzes game size requirements and automatically pairs them with optimal table configurations. Handles complex scenarios requiring multiple table combinations for large groups.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Looking For Group (LFG) Coordination</div>
                        <p className="text-sm ml-4">Smart member matching based on gaming preferences, skill levels, and availability patterns. Privacy-protected outreach campaigns coordinate group formation without revealing identities until confirmation.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Dynamic Operations:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        AI agents autonomously choose optimal database actions using $fromAI() expressions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Conversational Memory & Personalized Member Services
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      <strong>Trigger:</strong> Operates continuously to maintain context and deliver increasingly personalized experiences.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Functionality:</h4>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Cross-Platform Memory Architecture</div>
                        <p className="text-sm ml-4">PostgreSQL conversation storage maintains complete interaction history across all platforms with unified member identification. Google Gemini vector embeddings create semantic understanding that enables context-aware responses regardless of communication channel.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Comprehensive Service Automation</div>
                        <p className="text-sm ml-4">24/7 natural language interface for reservations, cancellations, preference updates, and game library management. Platform-specific optimizations leverage Discord rich embeds, Telegram interactive buttons, and SMS concise responses.</p>
                      </li>
                      <li>
                        <div className="font-medium text-gray-900 dark:text-white mb-1">• Adaptive Member Experience</div>
                        <p className="text-sm ml-4">Learning system adapts to individual communication preferences and platform usage patterns. Smart notification routing delivers updates via members' preferred channels.</p>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🧠</div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Conversation Continuity:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Members can switch platforms mid-interaction while maintaining full context
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return on Investment Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Return on Investment</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg text-white/95 leading-relaxed text-center mb-8">
                This AI-powered omnichannel system acts as an intelligent <strong>community manager</strong> for Summit Gaming Lounge—one that:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Understands member preferences and social patterns across all communication platforms.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Automates complex reservation workflows from initial inquiry to confirmed table assignments.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Facilitates organic group formation through intelligent matching and privacy-protected coordination.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Maintains comprehensive member relationship data for increasingly personalized service delivery.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Operates around the clock and scales effortlessly as the lounge community grows.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/90">Eliminates administrative overhead while enhancing the personal touch that makes Summit Gaming Lounge unique.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <p className="text-lg text-white/95 leading-relaxed">
                The <strong>modular architecture</strong> ensures Summit Gaming Lounge can expand features—adding tournament management, event coordination, or additional communication channels—as their community evolves. The result is <strong>faster service delivery, deeper member engagement, and a scalable foundation</strong> that supports unlimited growth without sacrificing the personal connections that make the gaming experience special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Build Your AI-Powered Community Manager?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Create an intelligent omnichannel system that manages member communications, automates complex workflows, and delivers personalized experiences that scale with your growing community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your AI Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-primary-600 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300 hover:scale-105"
              >
                View More Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
