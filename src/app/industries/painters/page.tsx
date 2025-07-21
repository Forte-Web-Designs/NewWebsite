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

export const metadata: Metadata = {
  title: 'Painter Website Design | Websites That Turn Brush Strokes Into Booked Jobs',
  description: 'Professional painter websites that are clean, professional, and optimized to convert. Mobile-first design with project galleries, local SEO, and instant quote CTAs.',
  keywords: 'painter website design, painter websites, painting contractor SEO, mobile painter sites, painting lead generation, project gallery websites',
  openGraph: {
    title: 'Painter Website Design | Websites That Turn Brush Strokes Into Booked Jobs',
    description: 'Professional painter websites that are clean, professional, and optimized to convert. Mobile-first design with project galleries, local SEO, and instant quote CTAs.',
    type: 'website',
  },
};

export default function PaintersPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Precision Paint Co" },
    { name: "Elite Interior Painting" },
    { name: "Pro Exterior Solutions" },
    { name: "Color Craft Painters" },
    { name: "Premier Paint Works" }
  ];

  // Comparison data - Forte vs Other Agencies
  const comparisonFeatures = [
    {
      feature: "Built for Painters",
      otherAgencies: false,
      forte: true
    },
    {
      feature: "Mobile-Optimized Quote CTA",
      otherAgencies: false,
      forte: true
    },
    {
      feature: "Local SEO for Painting Services",
      otherAgencies: false,
      forte: true
    },
    {
      feature: "Dynamic Project Portfolio",
      otherAgencies: false,
      forte: true
    },
    {
      feature: "Ongoing Updates & Edits Included",
      otherAgencies: false,
      forte: true
    },
    {
      feature: "Industry-Specific Trust Design",
      otherAgencies: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Can I show off specific project types (e.g. kitchen cabinets)?",
      answer: "Yes — we can build categorized galleries with image tags and filters for different project types like kitchens, exteriors, commercial spaces, and more."
    },
    {
      question: "Do I need to write all the content myself?",
      answer: "No — we handle that for you. Just send a few project details and services you offer, and we'll create professional content that converts."
    },
    {
      question: "What if I don't have before/after photos?",
      answer: "We'll build the structure and help you upload new photos as you get them. Our Forte Care™ plan covers ongoing updates so you can add projects over time."
    },
    {
      question: "How fast can the site be live?",
      answer: "3–4 weeks depending on content. Rush setup available for urgent needs."
    }
  ];

  const painterChallenges = [
    {
      icon: "📱",
      title: "Mobile-First Matters",
      problem: "70%+ of painting inquiries come from mobile search",
      solution: "Tap-to-call setup, lightning-fast loading, instant quote request on mobile"
    },
    {
      icon: "🌐",
      title: "Local Visibility is Everything",
      problem: "You're competing with dozens of painters in your area",
      solution: "Local SEO, zip targeting, and Google Business sync"
    },
    {
      icon: "🖌️",
      title: "Portfolios Sell Work",
      problem: "Most painting sites just list services",
      solution: "Before-and-after photos, filterable project galleries, review integration"
    },
    {
      icon: "💬",
      title: "Customers Want a Smooth Booking Experience",
      problem: "Hidden pricing or no way to contact = lost trust",
      solution: "Clear pricing info, CTA buttons, live form and email/text support"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-blue-600 to-purple-800 text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-purple-700/50 text-purple-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🎨 Industry Expertise: Painters
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Painter Websites That Turn <span className="text-purple-300">Brush Strokes Into Booked Jobs</span>
                </h1>
                <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Whether it's residential, commercial, or specialty painting — we build painter websites that are clean, professional, and optimized to convert.
                </p>
                
                <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                  <Link href="/contact?industry=painters" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto text-white font-bold py-4 px-8 rounded-lg transition-colors">
                    Get My Painter Website Quote
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-purple-200">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">📱</span>
                    Mobile-First Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">📍</span>
                    Local SEO
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400">🖼️</span>
                    Project Galleries That Build Trust
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-purple-100 max-w-lg mx-auto">
                  {/* Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white">
                    <span className="text-2xl sm:text-3xl">🎨</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white text-lg sm:text-xl font-bold truncate">PRECISION PAINT CO</h3>
                      <p className="text-purple-100 text-xs sm:text-sm font-semibold">🏠 Professional Painting</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏠 <span className="truncate">Interior Painting</span>
                      </span>
                      <span className="font-bold text-purple-600 text-base sm:text-lg whitespace-nowrap">$3.50/sq ft</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏘️ <span className="truncate">Exterior Painting</span>
                      </span>
                      <span className="font-bold text-blue-600 text-base sm:text-lg whitespace-nowrap">$4.25/sq ft</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏢 <span className="truncate">Commercial Paint</span>
                      </span>
                      <span className="font-bold text-green-600 text-base sm:text-lg whitespace-nowrap">$2.75/sq ft</span>
                    </div>
                  </div>

                  {/* Gallery Preview */}
                  <div className="mb-3 sm:mb-4 bg-gradient-to-r from-purple-100 to-blue-100 p-3 sm:p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-purple-200 rounded h-12 sm:h-16 flex items-center justify-center text-purple-700 font-bold text-xs">
                        📸 Before/After
                      </div>
                      <div className="bg-blue-200 rounded h-12 sm:h-16 flex items-center justify-center text-blue-700 font-bold text-xs">
                        🖼️ Portfolio
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-3 sm:py-4 rounded-xl mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">📞</span>
                      <div>
                        <div className="font-bold text-base sm:text-lg">Call (555) PAINT-PRO</div>
                        <div className="text-purple-100 text-xs sm:text-sm">Free Estimates!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-lg sm:text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm sm:text-base">4.8/5 Stars</div>
                    <div className="text-gray-600 text-xs sm:text-sm">(124 Google Reviews)</div>
                    <div className="text-purple-600 text-xs sm:text-sm font-medium mt-1">🎨 Licensed & Insured</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                  ✅ Free Color Consult
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  🎨 12+ Years Experience
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Professional Painters
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful painting businesses already growing with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {getCompanyLogo(company.name, 'painter', "w-16 h-16")}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose a Painter-Specific Website?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Your ideal customers are searching online for trustworthy, skilled painters — often comparing 3–5 businesses before deciding. A generic site won't make the cut. Forte builds industry-specific websites designed to win painting jobs.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {painterChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-600 font-medium">📉 Problem:</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{challenge.problem}</p>
                    </div>
                    <div>
                      <span className="text-green-600 font-medium">✅ Forte Solution:</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Features Built Specifically for <span className="text-purple-600">Painters</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                All Forte painter websites are built to convert inquiries into booked jobs
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🎯", title: "Service-Specific Landing Pages", desc: "Interior, exterior, commercial pages optimized for each service type" },
              { icon: "🖼️", title: "Dynamic Project Gallery with Tagging", desc: "Filterable galleries organized by room, project type, and style" },
              { icon: "📍", title: "Local SEO + Zip Code Targeting", desc: "Dominate local searches for 'painter near me' in your service areas" },
              { icon: "⭐", title: "Real Reviews & Trust Badges", desc: "Display Google reviews, insurance, certifications prominently" },
              { icon: "📞", title: "Click-to-Call, Email, and Instant Quote", desc: "Multiple contact methods optimized for mobile users" },
              { icon: "❓", title: "Project FAQs & Process Breakdowns", desc: "Explain your painting process to build trust and expertise" },
              { icon: "💳", title: "Financing or Referral Prompts", desc: "Highlight payment options and referral programs if applicable" },
              { icon: "⚡", title: "Mobile-First Responsiveness + Speed", desc: "Blazing fast loading optimized for mobile painting searches" }
            ].map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📊 Real Results Case Study
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Oklahoma Painter Doubles Project Revenue
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How Precision Paint Co transformed their business with a professional painter website
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      🎨 Precision Paint Co | Edmond, OK
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Before: Outdated site with no portfolio, no SEO, and no mobile CTA.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      After partnering with Forte:
                    </p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">143%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Organic Traffic Increase</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">#1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ranking for "residential painter Edmond OK"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">2.5x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Increase in Booked Estimates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$9,200</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Added Revenue First Quarter</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">11</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Inbound Leads per Week (avg)</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/case-studies" 
                    className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                  >
                    📈 Read Full Case Study →
                  </Link>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Forte vs. Generic Web Agencies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why professional painters choose Forte for their websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-600">
                <div></div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-300">Other Agencies</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-purple-600 dark:text-purple-400">Forte Web Designs</h3>
                </div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.feature}
                  </div>
                  <div className="text-center">
                    {item.otherAgencies ? 
                      <span className="text-green-500 text-xl">✓</span> : 
                      <span className="text-red-500 text-xl">✗</span>
                    }
                  </div>
                  <div className="text-center">
                    {item.forte ? 
                      <span className="text-green-500 text-xl">✓</span> : 
                      <span className="text-red-500 text-xl">✗</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🖌️</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Even the Best Paint Job Needs a Fresh Coat
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You know that even premium paint fades over time and needs touch-ups to stay looking fresh. Your website is the same way. Forte Care™ keeps your digital presence looking crisp – updating content, refreshing performance, and maintaining that professional appearance that attracts quality painting jobs.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Keep Your Website Looking Fresh</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                FAQs for Painting Businesses
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions from painting business owners
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                🎨 Let's Paint a Better Online Presence
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Don't blend into the competition. Get a painter website built to convert — tailored to your craft, optimized for growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?industry=painters"
                  className="bg-white text-purple-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Get My Painter Website Quote
                </Link>
                <Link 
                  href="tel:8178736655"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-colors text-lg"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              
              <p className="text-sm text-purple-200 mt-4">
                💡 Free consultation • Live in 3-4 weeks • Ongoing updates included
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
