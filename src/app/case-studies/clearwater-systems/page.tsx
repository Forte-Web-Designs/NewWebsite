import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ClearWater Systems Case Study | AI-Driven Quoting & CRM Automation System | Forte Web Designs',
  description: 'Discover how we built a 3-phase AI automation system for ClearWater Systems featuring vector knowledge base, smart email agents, and real-time CRM integration with live shipping data.',
};

export default function ClearWaterSystemsCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">ClearWater Systems</span>
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
                ClearWater Systems: AI-Driven Quoting & CRM Automation System
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                How we designed and deployed a custom AI automation system for quoting and sales workflows, allowing ClearWater to focus on scaling while eliminating repetitive administrative tasks.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 12 weeks</div>
                <div>💧 <strong>Industry:</strong> Water Treatment Solutions</div>
                <div>⚡ <strong>Result:</strong> 3-phase AI system</div>
              </div>
            </div>

            {/* Hero Image - AI System Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="text-5xl sm:text-6xl mb-4">💧</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI Automation System</h3>
                  <p className="text-gray-600 dark:text-gray-400">Three-phase modular system for quoting, CRM & customer communications</p>
                </div>
                
                {/* AI System Flow Visual */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">🗃️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Vector Knowledge Base</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">RAG retrieval system</p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">📧</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Smart Email Agent</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Quote automation</p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">🔗</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">CRM Integration</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Real-time finalization</p>
                  </div>
                </div>
                
                {/* Automation Flow Visualization */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI System Architecture Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              AI Automation System Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              The system integrates vector knowledge bases, intelligent email processing, and real-time CRM automation 
              through a sophisticated n8n workflow architecture.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Vector Knowledge Base & Processing */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Vector Knowledge Base Processing
                </h3>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4">
                  <img 
                    src="/images/case-studies/Screenshot 2025-09-30 122730.png"
                    alt="ClearWater Systems Vector Knowledge Base Architecture with n8n and Supabase"
                    className="w-full h-auto mx-auto"
                    style={{ minWidth: '600px' }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  n8n native node architecture processing files through AWS EC2, aggregating data, and storing 
                  in Supabase Vector Knowledge Store for intelligent retrieval.
                </p>
              </div>

              {/* Central Agent System */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Central Agent & Quote Automation
                </h3>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4">
                  <img 
                    src="/images/case-studies/tabletop (1).webp"
                    alt="ClearWater Systems Central Agent with LLM Text Classifier and Quote Generation"
                    className="w-full h-auto mx-auto"
                    style={{ minWidth: '600px' }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Central Agent system with LLM Text Classifier routing emails to specialized quote generation, 
                  CRM integration, and automated customer communications.
                </p>
              </div>
            </div>

            {/* System Integration Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Vector Knowledge Store
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  RAG-enabled retrieval system with Supabase vector storage for intelligent product and pricing information access
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Intelligent Classification
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  LLM-powered email classification automatically routes inquiries to appropriate response workflows
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Real-Time CRM Integration
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Automated quote generation with live shipping data integration and CRM record creation and updates
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
                We partnered with <strong>ClearWater Systems</strong>, a leading provider of water treatment and containment solutions, to design and deploy a <strong>custom AI automation system</strong> for their quoting and sales workflows.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                This solution streamlines customer communications, quote generation, and lead management—allowing the ClearWater team to focus on scaling their business instead of getting bogged down in repetitive administrative tasks.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">System Architecture:</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Phase 1:</strong> Vector Knowledge Base with RAG Retrieval</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Phase 2:</strong> Smart Email Agent & Quote Automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Phase 3:</strong> CRM Integration & Real-Time Finalization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technical Integration:</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Airtable database for lead verification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Google Sheets API for quote generation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>ClickUp CRM for pipeline management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Live shipping API integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-base text-gray-600 dark:text-gray-400 italic">
                  The automation system is built in three modular phases: starting with a smart, searchable knowledge base, advancing into email-based quote automation, and culminating in CRM integration with real-time shipping data for instant quote finalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">AI Automation System Implementation</h2>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Vector Knowledge Base with RAG Retrieval
                    </h3>
                    <p className="text-cyan-700 dark:text-cyan-300 font-medium mb-4">
                      Activated by internal queries or inbound customer inquiries
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Vectorized document storage for technical documentation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Scalable database with continuous updates capability
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Retrieval-Augmented Generation (RAG) for context-aware responses
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Fast semantic search across pricing tables and historical emails
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🗃️</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        "Instant access to the right information"
                      </p>
                      <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                        ✅ Result: Improved response times and consistency
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
                      Smart Email Agent & Quote Automation
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      Activated by the arrival of new customer or lead emails
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Automation Functionality:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Lead verification via Airtable with automatic record creation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Quote generation engine with real-time Google Sheets updates
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Automated PDF delivery directly from email thread
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Lead engagement tracking and sales team escalation
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">📧</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Email Automation Flow:</p>
                    </div>
                    
                    {/* Simple Email Workflow */}
                    <div className="flex flex-col space-y-2 text-xs">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded px-2 py-1 text-center">
                        <span className="text-emerald-700 dark:text-emerald-300">Gmail Trigger</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/50 rounded px-2 py-1 text-center">
                        <span className="text-blue-700 dark:text-blue-300">Airtable Check</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/50 rounded px-2 py-1 text-center">
                        <span className="text-purple-700 dark:text-purple-300">Quote Generation</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-center">
                        <span className="text-gray-700 dark:text-gray-300">PDF Delivery</span>
                      </div>
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
                      CRM Integration & Real-Time Quote Finalization
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      Initiated once all required quote data is gathered
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Integration Features:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        ClickUp CRM integration with automated record management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Live shipping API integration for real-time cost calculations
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Complete PDF generation with pricing and shipping estimates
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Human-in-the-loop workflow for final review and oversight
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🔗</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        "Real-time quotes with team alignment"
                      </p>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                        ✅ Result: Faster, accurate quotes with transparency
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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-12">Return on Investment</h2>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-xl text-white/90 leading-relaxed mb-6">
                This AI-powered automation system acts as an <strong>intelligent teammate</strong> for ClearWater Systems—one that understands and references proprietary documentation dynamically, automates and personalizes the entire quoting process, and operates 24/7 while scaling seamlessly as lead volume grows.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                With this modular AI system in place, <strong>ClearWater Systems can operate faster, leaner, and smarter—unlocking growth without adding complexity.</strong>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-white/80 text-sm">Modular Phases</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Operation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Automated Quotes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">Live</div>
                <div className="text-white/80 text-sm">Shipping Data</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Operational Benefits:</h3>
                <ul className="space-y-3 text-left text-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Understands and references proprietary documentation dynamically</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Automates and personalizes the entire quoting process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Retrieves live shipping data for accurate, real-time quotes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Keeps the CRM clean, current, and aligned with sales activity</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Strategic Outcomes:</h3>
                <ul className="space-y-3 text-left text-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Notifies the team when human input or decisions are required</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Operates 24/7 and scales seamlessly as lead volume grows</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Eliminates repetitive administrative tasks completely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Creates scalable foundation for business growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Team Testimonial</h3>
                <p className="text-white/90 italic leading-relaxed">
                  "This AI system has completely transformed how we handle customer inquiries and quoting. What used to take hours of back-and-forth now happens automatically, with real shipping costs included. Our team can focus on building relationships and closing deals instead of administrative work."
                </p>
                <p className="text-white/70 text-sm mt-3">— ClearWater Systems Sales Team</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-lg font-semibold text-white mb-2">🚀 The Transformation:</p>
                <p className="text-white/80">
                  ClearWater Systems now operates as an <strong>intelligent, automated organization</strong> that can scale rapidly while maintaining personalized customer service and accurate, real-time quoting capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Automate Your Business Operations?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Build an AI-powered system that handles your repetitive tasks while you focus on growing your business.
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
