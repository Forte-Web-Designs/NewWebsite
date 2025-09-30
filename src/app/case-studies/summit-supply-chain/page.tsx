import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Summit Supply Case Study | AI-Enabled Procurement Analytics Platform EP2 | Forte Web Designs',
  description: 'Discover how we built EP2, an AI-enabled procurement analytics platform with three specialized agents: Revenue at Risk, Database Chat, and Company Report agents for comprehensive supplier intelligence.',
};

export default function SummitSupplyChainCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">Summit Supply Chain</span>
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
                Summit Supply: AI-Enabled Procurement Analytics Platform (EP2)
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                How we built EP2, an intelligent procurement analytics platform powered by three specialized AI agents that deliver real-time insights, automate complex queries, and generate comprehensive supplier reports.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div>📅 <strong>Timeline:</strong> 12 weeks</div>
                <div>🏭 <strong>Industry:</strong> Industrial Distribution</div>
                <div>⚡ <strong>Result:</strong> 3 AI agents deployed</div>
              </div>
            </div>

            {/* Hero Image - AI Agents Visual */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-16">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="text-5xl sm:text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">EP2 Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400">Three specialized AI agents for comprehensive procurement intelligence</p>
                </div>
                
                {/* AI Agents Visual */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">⚠️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Revenue at Risk Agent</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Critical escalation monitoring</p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">💬</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Database Chat Agent</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Natural language queries</p>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">📊</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Company Report Agent</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Automated supplier reports</p>
                  </div>
                </div>
                
                {/* Data Flow Visualization */}
                <div className="mt-8 flex items-center justify-center">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-lg flex items-center justify-center">
                      <span className="text-xs">SQL</span>
                    </div>
                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EP2 Platform Architecture Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              EP2 Platform Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              The AI-Enabled Procurement Analytics Platform consists of three specialized agents working together to provide comprehensive supplier intelligence and risk management.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Revenue at Risk Agent */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Revenue at Risk Agent
                </h3>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4">
                  <img 
                    src="/images/case-studies/ph1.png"
                    alt="EP2 Revenue at Risk Agent Architecture"
                    className="w-full h-auto mx-auto"
                    style={{ minWidth: '400px' }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Monitors critical supplier metrics and automatically escalates revenue-threatening issues to stakeholders.
                </p>
              </div>

              {/* Database Chat Agent */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Database Chat Agent
                </h3>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4">
                  <img 
                    src="/images/case-studies/ph2.png"
                    alt="EP2 Database Chat Agent Architecture"
                    className="w-full h-auto mx-auto"
                    style={{ minWidth: '400px' }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Enables natural language queries against procurement databases with intelligent SQL generation and result interpretation.
                </p>
              </div>

              {/* Company Report Agent */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Company Report Agent
                </h3>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 overflow-x-auto mb-4">
                  <img 
                    src="/images/case-studies/ph3.png"
                    alt="EP2 Company Report Agent Architecture"
                    className="w-full h-auto mx-auto"
                    style={{ minWidth: '400px' }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                  Generates comprehensive supplier performance reports with automated analysis and actionable recommendations.
                </p>
              </div>
            </div>

            {/* Integration Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Proactive Monitoring
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Continuous supplier risk assessment with automated alerts and escalation protocols
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Natural Language Interface
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Query complex procurement data using conversational language instead of technical SQL commands
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 002-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Intelligent Reporting
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Automated generation of comprehensive supplier reports with predictive insights and recommendations
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
                We partnered with <strong>Summit Supply</strong>, a nationwide distributor of industrial equipment and materials, to develop <strong>EP2</strong>, an AI-enabled procurement analytics platform powered by three specialized AI agents: a Revenue at Risk Agent, a Database Chat Agent, and a Company Report Agent.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                These agents integrate seamlessly with Summit Supply's existing Microsoft SQL database and external data sources to deliver real-time insights, automate complex procurement queries, and generate comprehensive supplier reports. The platform empowers procurement professionals with actionable intelligence, streamlining decision-making and reducing manual overhead.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Core AI Agents:</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Revenue at Risk Agent</strong> - Critical escalation monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Database Chat Agent</strong> - Natural language SQL querying</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Company Report Agent</strong> - Automated supplier intelligence</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Technical Integration:</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Microsoft SQL Server native integration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>NLP-to-SQL query processing engine</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>RAG vector database with 8,000+ query pairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>QuickChart API for automated visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Phases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">EP2 Platform Implementation</h2>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Revenue at Risk Agent
                    </h3>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-4">
                      Activated when users query regarding escalations or revenue risks in the procurement interface
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Capabilities:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Critical escalations retrieval above revenue thresholds
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        NLP-to-SQL querying for dynamic database access
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Supplier contact and stakeholder identification
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Actionable next steps and contact recommendations
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">⚠️</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-2">
                        "What critical escalations are currently active, and who do I contact?"
                      </p>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        Result: Faster resolution of high-impact issues
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
                      Database Chat Agent
                    </h3>
                    <p className="text-emerald-700 dark:text-emerald-300 font-medium mb-4">
                      Real-time engagement with user queries, routing between knowledge base and database access
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Functionality:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Query decision layer for optimal routing
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Schema awareness for accurate SQL generation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        RAG vector search from 8,000+ validated question-SQL pairs
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        SOP integration for compliance-assured responses
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">🤖</div>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Query Processing Flow:</p>
                    </div>
                    
                    {/* Simple Flowchart */}
                    <div className="flex flex-col space-y-2 text-xs">
                      <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded px-2 py-1 text-center">
                        <span className="text-emerald-700 dark:text-emerald-300">User Query</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/50 rounded px-2 py-1 text-center">
                        <span className="text-blue-700 dark:text-blue-300">NLP Processing</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-purple-100 dark:bg-purple-900/50 rounded px-2 py-1 text-center">
                        <span className="text-purple-700 dark:text-purple-300">SQL Generation</span>
                      </div>
                      <div className="flex justify-center">
                        <div className="w-0.5 h-3 bg-emerald-400"></div>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 rounded px-2 py-1 text-center">
                        <span className="text-gray-700 dark:text-gray-300">Response</span>
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
                      Company Report Agent
                    </h3>
                    <p className="text-purple-700 dark:text-purple-300 font-medium mb-4">
                      Launched when users request comprehensive supplier or company intelligence reports
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Report Generation:</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Deep research on financials, leadership, and business models
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Automated graph generation via NLP-to-QuickChart integration
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        AI image analysis for chart validation
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Executive-ready markdown reports with embedded visuals
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-3xl mb-2">📊</div>
                      <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">Outcome:</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Faster, comprehensive supplier due diligence with minimal manual research
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
                By deploying the <strong>EP2 platform</strong>, Summit Supply gained a transformative procurement solution that works natively with their existing Microsoft SQL infrastructure, providing real-time insights into risks, procurement activity, and supplier profiles.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                The modular architecture ensures Summit Supply can continue to add new agents, integrations, and analytics features as their business needs evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-white/80 text-sm">AI Agents Deployed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">8,000+</div>
                <div className="text-white/80 text-sm">Query Pairs Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Availability</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">0</div>
                <div className="text-white/80 text-sm">Training Required</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Operational Benefits:</h3>
                <ul className="space-y-3 text-left text-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Automated complex queries and report generation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reduced manual effort by cutting hours of analysis work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Real-time insights into risks and procurement activity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Seamless integration with existing Microsoft SQL infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Strategic Outcomes:</h3>
                <ul className="space-y-3 text-left text-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Faster decision-making with actionable intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Scalable framework for future AI workflows and expansion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Enhanced procurement efficiency and strategic focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reduced operational overhead with intelligent automation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Platform Impact Summary</h3>
                <p className="text-white/90 italic leading-relaxed">
                  "The EP2 platform has transformed how we approach procurement analytics. What used to take our team days of manual research and data analysis now happens in real-time through natural language queries. We can identify revenue risks, generate comprehensive supplier reports, and make strategic decisions faster than ever before."
                </p>
                <p className="text-white/70 text-sm mt-3">— Summit Supply Procurement Team</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <p className="text-lg font-semibold text-white mb-2">🚀 The Outcome:</p>
                <p className="text-white/80">
                  <strong>Faster decision-making, reduced operational overhead, and a powerful AI-driven platform</strong> that enhances both procurement efficiency and strategic focus while maintaining full scalability for future growth.
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
              Ready to Transform Your Procurement Intelligence?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Build an AI-powered analytics system that delivers real-time insights and accelerates your procurement decisions.
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
