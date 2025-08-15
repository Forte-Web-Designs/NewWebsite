import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import { getCompanyLogo } from '@/components/CompanyLogos';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import ScrollToTop from '@/components/ScrollToTop';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

export const metadata: Metadata = {
  title: 'Construction Websites Built to Win Bids and Build Trust | Nationwide from DFW | Forte Web Designs',
  description: 'Construction websites that act like your best foreman: organized, authoritative, and ready to close the deal. DFW-based team serving construction companies nationwide with custom-coded sites that turn browsers into buyers and estimates into jobs.',
  keywords: 'construction website design, contractor websites, construction company websites, mobile construction quotes, construction bid optimization nationwide',
  openGraph: {
    title: 'Construction Websites Built to Win Bids and Build Trust | Nationwide from DFW',
    description: 'Construction websites that act like your best foreman: organized, authoritative, and ready to close the deal. DFW-based team serving construction companies nationwide.',
    type: 'website',
  },
};

export default function ConstructionPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "SouthCore Contracting", location: "Albuquerque" },
    { name: "Premier Construction Group", location: "Dallas" },
    { name: "Solid Foundation Builders", location: "Houston" },
    { name: "Metro Commercial Contractors", location: "Austin" },
    { name: "Elite Building Solutions", location: "Fort Worth" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Built for Construction",
      typical: false,
      forte: true
    },
    {
      feature: "Hand-Coded (No Builders)",
      typical: false,
      forte: true
    },
    {
      feature: "Mobile Quote Tools",
      typical: false,
      forte: true
    },
    {
      feature: "Project Portfolios Included",
      typical: false,
      forte: true
    },
    {
      feature: "Local SEO Strategy",
      typical: false,
      forte: true
    },
    {
      feature: "Emergency Edits/Support",
      typical: false,
      forte: true
    },
    {
      feature: "Industry Experience",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How fast can you launch my site?",
      answer: "We typically launch construction websites in 2–4 weeks depending on size and content prep. Rush services available."
    },
    {
      question: "Can you help with project photos or copy?",
      answer: "Yes. We can assist with writing, structure, and even AI-enhanced formatting for case studies and job highlights."
    },
    {
      question: "Do I own the website?",
      answer: "With one-time payment plans, you own your website 100%. We also offer monthly options with support included."
    },
    {
      question: "Can I add more service areas or specialties later?",
      answer: "Absolutely. We design flexible sites that grow with your business."
    }
  ];

  const constructionChallenges = [
    {
      icon: "🏗️",
      title: "Project Confidence",
      problem: "Most contractor websites lack social proof and authority",
      solution: "Showcase high-value project galleries, licenses, insurance, reviews, and local awards"
    },
    {
      icon: "📱",
      title: "Mobile Estimates On-the-Go", 
      problem: "Homeowners and property managers search on mobile",
      solution: "One-tap call buttons, quick quote forms, and responsive design"
    },
    {
      icon: "📍",
      title: "Local SEO for Regional Projects",
      problem: "Competing with dozens of firms in your service area",
      solution: "Geo-targeted SEO, Google Business integration, city-based landing pages"
    },
    {
      icon: "📆",
      title: "Close More Bids",
      problem: "Clunky websites slow down lead generation",
      solution: "Clear CTAs, downloadable capability statements, and fast-loading project galleries"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-gray-700 to-slate-800 text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-slate-600/50 text-slate-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🏗️ Industry Expertise: Construction
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Construction Websites Built to <span className="text-slate-300">Win Bids</span> and <span className="text-slate-300">Build Trust</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  In construction, reputation and clarity win projects. Your website should act like your best foreman: organized, authoritative, and ready to close the deal. At Forte, we design custom-coded sites for construction companies that turn browsers into buyers-and estimates into jobs.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                  <Link 
                    href="/contact?industry=construction"
                    className="bg-white text-slate-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
                  >
                    Get My Construction Website Quote
                  </Link>
                  <Link 
                    href="/contact?industry=construction"
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-700 transition-colors text-center"
                  >
                    Schedule Free Consultation
                  </Link>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✅</span>
                      <span>Mobile-Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">🛠️</span>
                      <span>Quote-Ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-300">📍</span>
                      <span>Local SEO-Enhanced</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-slate-100 max-w-lg mx-auto">
                  {/* Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl text-white">
                    <span className="text-2xl sm:text-3xl">🏗️</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white text-lg sm:text-xl font-bold truncate">PREMIER CONSTRUCTION</h3>
                      <p className="text-slate-100 text-xs sm:text-sm font-semibold">🏆 Building Excellence Since 1995 🏆</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏠 <span className="truncate">Custom Homes</span>
                      </span>
                      <span className="font-bold text-blue-600 text-base sm:text-lg whitespace-nowrap">$350K+</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏢 <span className="truncate">Commercial Build</span>
                      </span>
                      <span className="font-bold text-green-600 text-base sm:text-lg whitespace-nowrap">$500K+</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🛁 <span className="truncate">Renovations</span>
                      </span>
                      <span className="font-bold text-purple-600 text-base sm:text-lg whitespace-nowrap">$75K+</span>
                    </div>
                  </div>

                  {/* Portfolio Preview */}
                  <div className="mb-3 sm:mb-4 bg-gradient-to-r from-slate-100 to-gray-100 p-3 sm:p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-slate-200 rounded h-12 sm:h-16 flex items-center justify-center text-slate-700 font-bold text-xs">
                        🏘️ Recent Projects
                      </div>
                      <div className="bg-gray-200 rounded h-12 sm:h-16 flex items-center justify-center text-gray-700 font-bold text-xs">
                        📋 Testimonials
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <div className="bg-gradient-to-r from-slate-500 to-slate-600 text-white text-center py-3 sm:py-4 rounded-xl mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">📞</span>
                      <div>
                        <div className="font-bold text-base sm:text-lg">Call (555) BUILD-IT</div>
                        <div className="text-slate-100 text-xs sm:text-sm">Free Project Estimate!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-lg sm:text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm sm:text-base">4.9/5 Stars</div>
                    <div className="text-gray-600 text-xs sm:text-sm">(89 Google Reviews)</div>
                    <div className="text-slate-600 text-xs sm:text-sm font-medium mt-1">🏗️ Licensed & Bonded</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-slate-500 to-slate-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                  ✅ 28+ Years Experience
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  🛡️ 2-Year Warranty
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What's Included in Every Construction Website
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                All Forte construction websites come standard with:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Fast, mobile-first responsive design
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built for property managers and homeowners who browse on mobile
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Project portfolio with before/after galleries
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Showcase your best work organized by project category
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Embedded review widgets (Google, Angi, etc.)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build trust with real customer testimonials and ratings
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    "Request a Bid" or "Get a Quote" callouts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clear CTAs that turn visitors into leads
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Service area map with coverage zones
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Show exactly where you work and response times
                  </p>
                </div>
              </SimpleAnimatedCard>

              <SimpleAnimatedCard>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-green-500 text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Trust indicators: license #, insurance, years in business
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Display credentials that build confidence for major projects
                  </p>
                </div>
              </SimpleAnimatedCard>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Optional Add-ons:</h4>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full">OSHA certifications</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full">Team bios</span>
                  <span className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full">Trade partner logos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Real Results: New Mexico Commercial Builder Sees 2.6x Lead Growth
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how SouthCore Contracting transformed their business with a professionally designed website.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🏗️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">SouthCore Contracting</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-semibold">Albuquerque, NM • Commercial Builder</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "After redesigning their outdated site, SouthCore experienced significant growth in commercial bid requests and secured major new projects in their first 90 days."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-600 dark:text-slate-400 mb-2">2.6x</div>
                    <div className="text-gray-600 dark:text-gray-400">More Commercial Bid Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">#1</div>
                    <div className="text-gray-600 dark:text-gray-400">Ranking for "commercial contractors in Albuquerque"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1.3s</div>
                    <div className="text-gray-600 dark:text-gray-400">Average site load speed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$47K+</div>
                    <div className="text-gray-600 dark:text-gray-400">New project revenue (first 90 days)</div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-slate-500">🏗️</span>
                    What We Did:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-700 dark:text-gray-300">SEO-optimized city pages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-700 dark:text-gray-300">Portfolio by project category</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-gray-700 dark:text-gray-300">Live form integration for RFQs</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Construction Industry Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Construction Companies Need Industry-Specific Websites
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Unlike generic web design agencies, we <strong>understand what actually matters</strong> to contractors and construction firms:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {challenge.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        📉 <em>Problem:</em> {challenge.problem}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                        ✅ <em>Our Solution:</em> {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Forte Over Generic Agencies?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                You deserve more than a cookie-cutter site. You deserve a system built to showcase your craftsmanship and win projects.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 p-6 bg-gray-100 dark:bg-gray-700">
                  <div className="font-semibold text-gray-900 dark:text-white">Feature</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-center">Template Site Builders</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-center">Local Marketing Agency</div>
                  <div className="font-semibold text-slate-600 dark:text-slate-400 text-center">Forte Web Designs</div>
                </div>
                
                {comparisonFeatures.map((item, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 p-6 border-t border-gray-200 dark:border-gray-600">
                    <div className="text-gray-900 dark:text-white font-medium">{item.feature}</div>
                    <div className="text-center flex justify-center">
                      <span className="text-red-500 text-xl">❌</span>
                    </div>
                    <div className="text-center flex justify-center">
                      {item.feature === "Mobile Quote Tools" || item.feature === "Project Portfolios Included" ? (
                        <span className="text-yellow-500 text-sm">✅ (sometimes extra)</span>
                      ) : (
                        <span className="text-red-500 text-xl">❌</span>
                      )}
                    </div>
                    <div className="text-center flex justify-center">
                      {item.forte ? (
                        item.feature === "Industry Experience" ? (
                          <span className="text-green-500 text-sm">✅ (10+ contractors served)</span>
                        ) : item.feature === "Project Portfolios Included" ? (
                          <span className="text-green-500 text-sm">✅ (always)</span>
                        ) : (
                          <span className="text-green-500 text-xl">✅</span>
                        )
                      ) : (
                        <span className="text-red-500 text-xl">❌</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Leading Construction Companies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful construction companies already winning more bids with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-900/20 transition-colors">
                  <div className="flex justify-center mb-3">
                    {getCompanyLogo(company.name, 'construction', "w-12 h-12")}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {company.name}
                  </h3>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Like Foundation Inspections for Your Digital Presence
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You wouldn't skip foundation inspections on a building project, right? Your website needs the same attention to structural integrity. Forte Care™ provides ongoing "digital inspections" – security monitoring, performance checks, and technical maintenance – ensuring your online foundation stays solid and continues bringing in quality leads.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Inspect Your Digital Foundation</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Common Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Everything you need to know about construction website development
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-white dark:bg-gray-700 rounded-lg shadow-md group">
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-600 to-gray-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Online Presence?
              </h2>
              <p className="text-xl mb-8 text-slate-100">
                Join the contractors, remodelers, and builders who trust Forte to deliver websites that convert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?industry=construction"
                  className="bg-white text-slate-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Get My Construction Website Quote
                </Link>
                <Link 
                  href="tel:8178736655"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-slate-600 transition-colors text-lg"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              
              <p className="text-sm text-slate-200 mt-4">
                💡 Free consultation • Live in 7-10 days
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Industry-specific CTA functionality */}
      <IndustryLeadCTA 
        industry="construction"
        formName="Construction Inquiry"
        title="Let's Build Your Construction Website Right"
        subtitle="Tell us about your construction business and we'll get back to you within 1 business day. No pressure - just real help from a team that understands your industry."
        mobileCtaText="Ready to build more leads?"
        mobileCtaSubtext="Get your construction website today"
        mobileBgGradient="bg-gradient-to-r from-orange-600 to-amber-600"
      />
    </div>
  );
}
