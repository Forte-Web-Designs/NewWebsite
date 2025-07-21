import { Metadata } from 'next';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import ScrollToTop from '@/components/ScrollToTop';
import IndustryPageWrapper from '@/components/IndustryPageWrapper';

export const metadata: Metadata = {
  title: 'Landscaping Website Design | Visual Websites That Turn Visitors Into Local Leads',
  description: 'Stunning, SEO-optimized landscaping websites that showcase your work, rank on Google, and bring in new clients every week. Visual design, local SEO, mobile booking ready.',
  keywords: 'landscaping website design, landscaper websites, lawn care websites, landscape design websites, visual portfolio, local SEO, landscaping leads',
  openGraph: {
    title: 'Landscaping Website Design | Visual Websites That Turn Visitors Into Local Leads',
    description: 'Stunning, SEO-optimized landscaping websites that showcase your work, rank on Google, and bring in new clients every week. Visual design, local SEO, mobile booking ready.',
    type: 'website',
  },
};

export default function LandscapersPage() {
  return (
    <IndustryPageWrapper industry="landscapers" businessType="landscaping business">
      <LandscapersContent />
    </IndustryPageWrapper>
  );
}

function LandscapersContent() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Sandia Landscaping Pros" },
    { name: "Desert Bloom Landscapes" },
    { name: "Mountain View Outdoor Design" },
    { name: "Rio Grande Lawn Care" },
    { name: "Southwest Garden Solutions" }
  ];

  // Comparison data - Forte vs Template Sites vs Local Ad Agencies
  const comparisonFeatures = [
    {
      feature: "Built for Landscapers",
      templateSites: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Before/After Gallery Layouts",
      templateSites: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Local SEO Optimization",
      templateSites: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Service Area Mapping",
      templateSites: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Mobile Tap-to-Call",
      templateSites: false,
      localAgencies: true,
      forte: true
    },
    {
      feature: "Portfolio & Project Filtering",
      templateSites: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Google Reviews Integration",
      templateSites: false,
      localAgencies: true,
      forte: true
    },
    {
      feature: "Edits & Updates Included",
      templateSites: false,
      localAgencies: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do you build sites for lawn care and hardscaping companies too?",
      answer: "Yes! We've worked with landscaping, hardscaping, irrigation, sod, and general yard maintenance businesses."
    },
    {
      question: "How long does it take to launch?",
      answer: "Most sites go live in 2–4 weeks, depending on your portfolio and revisions."
    },
    {
      question: "Can I show off specific projects?",
      answer: "Absolutely — we build gallery sections and organize projects by service or season."
    },
    {
      question: "Do I need to write the content?",
      answer: "Nope — we write the content for you. You just send us the list of services, any testimonials, and photos."
    }
  ];

  const landscapingChallenges = [
    {
      icon: "📱",
      title: "Mobile Leads First",
      problem: "71% of landscaping clients find a company from their phone",
      solution: "Tap-to-call buttons, mobile-optimized galleries, and fast load times"
    },
    {
      icon: "📍",
      title: "Local Search Domination",
      problem: "You're competing with 20+ local landscaping companies online",
      solution: "Local SEO strategy, Google Business integration, and area-specific service pages"
    },
    {
      icon: "📷",
      title: "Visual Trust + Portfolio",
      problem: "Homeowners want proof your work is high quality",
      solution: "Organized before/after galleries, project categories, and real customer photos"
    },
    {
      icon: "💬",
      title: "Reviews + Contact Simplicity",
      problem: "No reviews shown or buried contact info kills trust",
      solution: "5-star Google reviews displayed + easy inquiry forms with response time expectations"
    }
  ];

  const landscapingIncludes = [
    {
      icon: "📱",
      title: "Mobile-first, fast-loading structure",
      description: "Optimized for customers browsing on phones"
    },
    {
      icon: "📸",
      title: "Before/After image galleries",
      description: "Showcase your transformations professionally"
    },
    {
      icon: "📞",
      title: "Tap-to-call & contact form CTAs",
      description: "Make it easy for customers to reach you"
    },
    {
      icon: "🎯",
      title: "Local SEO keyword targeting",
      description: "Rank higher in local search results"
    },
    {
      icon: "⭐",
      title: "Google Reviews prominently displayed",
      description: "Build trust with social proof"
    },
    {
      icon: "🗺️",
      title: "Project showcase and service area map",
      description: "Show your work and coverage area"
    },
    {
      icon: "📅",
      title: "Seasonal offers or booking lead times (optional)",
      description: "Manage expectations and seasonal demand"
    },
    {
      icon: "📈",
      title: "Site built to grow with you",
      description: "Can add booking, SEO, PPC anytime"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <SimpleScrollReveal>
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-green-600/50 rounded-full text-green-200 text-sm font-medium border border-green-400/20">
                  🌿 Industry Expertise: Landscaping
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Landscaping Websites That Turn Visitors Into Local Leads
                </h1>

                {/* Subheading */}
                <p className="text-xl text-green-100 leading-relaxed">
                  Your landscaping work is visual — your website should be too. At Forte, we build stunning, SEO-optimized websites that showcase your work, rank on Google, and bring in new clients every week.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">📷</span>
                    <span className="text-green-200">Visual Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">📍</span>
                    <span className="text-green-200">Local SEO</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">📱</span>
                    <span className="text-green-200">Mobile Booking</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button data-open-modal className="bg-white text-green-700 hover:text-green-700 font-semibold px-8 py-4 rounded-lg text-center transition-colors cursor-pointer border-none">
                    Get My Landscaping Website Quote →
                  </button>
                  <button data-open-modal className="border-white text-white hover:bg-white hover:text-green-700 font-semibold px-8 py-4 rounded-lg border-2 text-center transition-colors cursor-pointer bg-transparent">
                    Free Website Audit for Landscapers →
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 text-green-200 text-sm pt-4">
                  <span>⚡ 2-4 week launches</span>
                  <span>📷 Visual galleries</span>
                  <span>📞 Same-day response</span>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Right Column - Website Mockup */}
            <SimpleScrollReveal delay={200}>
              <div className="relative">
                {/* Main mockup container */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 border-b border-green-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-white">SANDIA LANDSCAPING PROS</h3>
                        <p className="text-sm text-green-100">🌿 Transforming Albuquerque Yards Since 2018 🌱</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-green-100">Call Now</p>
                        <p className="font-semibold text-white">(505) LANDSCAPE</p>
                      </div>
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="px-6 py-8 bg-gradient-to-br from-green-50 to-emerald-50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Award-Winning Landscaping in Albuquerque
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Free estimates • Licensed & insured • 2-year warranty
                    </p>
                    
                    {/* Before/After showcase */}
                    <div className="bg-white p-4 rounded-lg mb-4 shadow-md">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center">
                          <div className="h-16 bg-gradient-to-br from-red-100 to-yellow-100 rounded mb-1"></div>
                          <span className="text-xs text-gray-600">Before</span>
                        </div>
                        <div className="text-center">
                          <div className="h-16 bg-gradient-to-br from-green-200 to-emerald-300 rounded mb-1"></div>
                          <span className="text-xs text-gray-600">After</span>
                        </div>
                      </div>
                      <p className="text-center text-sm text-green-700 mt-2 font-semibold">
                        Complete Yard Transformation
                      </p>
                    </div>

                    {/* Quick quote button */}
                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold mb-4 hover:bg-green-700 transition-colors">
                      📞 Get Free Quote Now
                    </button>
                  </div>

                  {/* Services grid */}
                  <div className="px-6 py-4 grid grid-cols-3 gap-2 bg-white border-t">
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">🌿</div>
                      <div className="text-xs text-gray-600">Landscaping</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">🌱</div>
                      <div className="text-xs text-gray-600">Lawn Care</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">🧱</div>
                      <div className="text-xs text-gray-600">Hardscaping</div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="px-6 py-4 bg-green-50 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="font-semibold text-green-700">4.9/5</span>
                      </div>
                      <div className="text-green-600 text-xs">
                        Licensed • Insured • 2-Year Warranty
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating indicators */}
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                  📍 Local SEO Ready
                </div>
                <div className="absolute -bottom-3 -left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-bounce">
                  📷 Visual Galleries
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Landscapers Need a Tailored Website */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🌱 Why Landscapers Need a Tailored Website (Not a Generic One)
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Most agencies just slap your name on a template. We build landscaping websites that actually convert — because we know your customers, your services, and how they search.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landscapingChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {challenge.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-red-500 text-sm">📉 Problem:</span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm ml-6">
                            {challenge.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-green-500 text-sm">✅ Solution:</span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm ml-6">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Landscaping Website Includes */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🌼 What Every Landscaping Website from Forte Includes
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                All Forte landscaping websites are conversion-ready with:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscapingIncludes.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/40 rounded-full text-green-800 dark:text-green-200 text-sm font-medium mb-6">
                🌳 Real Results: Albuquerque Landscapes Grew 54% in Leads in 90 Days
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                📍 Sandia Landscaping Pros | Albuquerque, NM
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                Before Forte: Slow DIY website, no galleries, no clear calls to action.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SimpleAnimatedCard>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">54%</div>
                      <div className="text-gray-700 dark:text-gray-300">increase in form inquiries</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">2.7x</div>
                      <div className="text-gray-700 dark:text-gray-300">higher Google visibility</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">#1</div>
                      <div className="text-gray-700 dark:text-gray-300">Ranked for "landscaping Albuquerque" within 90 days</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600">+18%</div>
                      <div className="text-gray-700 dark:text-gray-300">Average job size grew due to improved visual trust</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button data-open-modal className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white border-2 font-semibold py-3 px-6 rounded-lg inline-block transition-colors cursor-pointer bg-transparent">
                    📈 Read Full Case Study →
                  </button>
                </div>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🌿</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Sandia Landscaping Pros
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>📍 Albuquerque, New Mexico</p>
                    <p>🌿 Full-Service Landscaping</p>
                    <p>⏱️ 90-Day Results</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Before</div>
                        <div className="text-red-600">Slow DIY site</div>
                        <div className="text-red-600">No galleries</div>
                        <div className="text-red-600">No clear CTAs</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">After</div>
                        <div className="text-green-600">Professional design</div>
                        <div className="text-green-600">Visual galleries</div>
                        <div className="text-green-600">Clear conversions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🍃 Why Forte vs. Other Agencies or DIY Builders?
              </h2>
            </div>
          </SimpleScrollReveal>

          <SimpleAnimatedCard>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Template Sites</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Local Ad Agencies</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-green-600 dark:text-green-400">Forte Web Designs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-t border-gray-200 dark:border-gray-600">
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {item.templateSites ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.localAgencies ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.forte ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SimpleAnimatedCard>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌿</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Like Regular Yard Maintenance Services
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You know that beautiful landscapes require ongoing care – regular watering, pruning, and seasonal adjustments. Your website needs the same attention. Forte Care™ provides the "digital yard maintenance" – fresh content updates, security pruning, and seasonal optimization – keeping your online presence lush and attracting new clients year-round.
              </p>
              <button
                data-open-modal
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer border-none"
              >
                <span>Maintain Your Digital Landscape</span>
                <span className="text-sm">→</span>
              </button>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🌿 Frequently Asked Questions
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-white dark:bg-gray-900 rounded-lg p-6 group shadow-lg">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-open:mb-4">
                    {faq.question}
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🧱 Ready to Get More Landscaping Clients?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join landscapers who trust Forte to turn their work into a lead-generating machine. Let's build a site that showcases your talent and drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button data-open-modal className="bg-white text-green-600 hover:text-green-600 font-semibold px-8 py-4 rounded-lg text-center transition-colors cursor-pointer border-none">
                Get My Landscaping Website Quote →
              </button>
              <button data-open-modal className="border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg border-2 text-center transition-colors cursor-pointer bg-transparent">
                Free Site Audit for Landscapers →
              </button>
            </div>
            <p className="mt-6 text-green-200">
              📞 (817) 873-6655 • Same day response guaranteed
            </p>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
