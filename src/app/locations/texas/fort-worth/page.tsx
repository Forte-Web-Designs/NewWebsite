import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fort Worth Growth Systems & Web Design | Authentic Texas Solutions | Forte',
  description: 'Forte builds authentic Fort Worth growth systems — custom-coded websites, automation, and SEO that balance Cowtown tradition with modern performance.',
  keywords: 'Fort Worth growth systems, Fort Worth business automation, Cowtown web design, Fort Worth CRM, Fort Worth local SEO, authentic Texas business solutions',
  openGraph: {
    title: 'Fort Worth Growth Systems & Web Design | Authentic Texas Solutions | Forte',
    description: 'Forte builds authentic Fort Worth growth systems — custom-coded websites, automation, and SEO that balance Cowtown tradition with modern performance.',
    url: 'https://fortewebdesigns.com/locations/texas/fort-worth',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/texas/fort-worth',
  },
};

const fortWorthStats = {
  population: '950K+',
  businesses: '32,000+',
  medianincome: '$54,000',
  touristVisitors: '9M+',
  keyDistricts: ['Downtown Fort Worth', 'Sundance Square', 'Cultural District', 'Stockyards', 'West 7th'],
};

const fortWorthChallenges = [
  {
    challenge: 'Overshadowed by Dallas',
    problem: 'Dallas competition overshadows Fort Worth businesses.',
    solution: 'Local SEO + faster websites + automation to capture leads.',
    impact: 'Win local "Fort Worth [service]" searches with measurable leads.'
  },
  {
    challenge: 'Balancing Tradition with Innovation',
    problem: 'Need to honor Fort Worth character while staying modern.',
    solution: 'Custom-coded design + CRM + booking systems.',
    impact: 'Keep authentic identity while providing modern digital experiences.'
  },
  {
    challenge: 'Tourist vs. Local Customer Appeal',
    problem: '9M+ annual tourists vs. loyal local customers.',
    solution: 'Dual-focused messaging + automated follow-ups.',
    impact: 'Capture both tourist spending and long-term local loyalty.'
  },
  {
    challenge: 'Generic Corporate Look',
    problem: 'Many local sites look like Dallas suburb businesses.',
    solution: 'Industry-specific branding + authentic Fort Worth visuals.',
    impact: 'Stand out as Fort Worth-first, not just another template.'
  }
];

const fortWorthSuccessStories = [
  {
    business: 'Historic Stockyards Restaurant',
    industry: 'Tourism & Dining',
    challenge: 'Competing with chain restaurants for both tourist and local customers',
    solution: 'Growth Systems implementation: Online reservations + automated follow-up doubled repeat customers',
    results: ['55% increase in online reservations', '40% more local repeat customers', 'Automated follow-up system for loyalty'],
    timeframe: '4 months'
  },
  {
    business: 'Fort Worth Construction Company',
    industry: 'Construction',
    challenge: 'Generic website looked like every other contractor, no local connection',
    solution: 'Growth Systems approach: CRM + project gallery drove 35% more local project inquiries',
    results: ['35% increase in local project inquiries', '60% higher conversion rate', 'Automated lead tracking and follow-up'],
    timeframe: '6 months'
  }
];

const fortWorthIndustries = [
  'Tourism & Hospitality',
  'Construction & Contractors',
  'Healthcare & Medical',
  'Professional Services',
  'Retail & Local Business',
  'Arts & Entertainment',
  'Real Estate',
  'Automotive Services'
];

export default function FortWorthPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="location" className="w-5 h-5 text-orange-600" />
                <span className="text-orange-600 font-medium">Fort Worth, Texas</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Fort Worth Growth Systems That Honor Cowtown Character
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We help Fort Worth businesses grow with <strong>custom websites, smart automation, and integrated systems</strong> — all while capturing the authentic Cowtown character customers love.
              </p>
            </div>
            
            {/* Fort Worth Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-orange-600 dark:text-orange-400">{fortWorthStats.population}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-green-600 dark:text-green-400">{fortWorthStats.businesses}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{fortWorthStats.touristVisitors}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Annual Visitors</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{fortWorthStats.medianincome}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Median Income</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Key Districts:</strong> {fortWorthStats.keyDistricts.join(' • ')}
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mt-8 max-w-3xl mx-auto">
                <p className="text-orange-900 dark:text-orange-200 font-medium">
                  From the Stockyards to Sundance Square, Fort Worth customers value authenticity and results. Our Growth Systems combine local branding, automation, and SEO to help your business compete with Dallas neighbors while keeping your authentic identity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fort Worth Business Challenges */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Fort Worth Growth System Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cowtown businesses face unique challenges that require authentic Growth Systems, not generic templates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fortWorthChallenges.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.challenge}
                  </h3>
                  
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">Problem:</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">{item.problem}</p>
                  </div>
                  
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-900 dark:text-green-400 mb-1">Solution:</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">{item.solution}</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-400 mb-1">Measurable Impact:</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{item.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fort Worth Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Fort Worth Growth Systems Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real Fort Worth businesses using authentic Growth Systems to compete and win in both local and tourist markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fortWorthSuccessStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{story.business.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {story.business}
                      </h3>
                      <p className="text-orange-600 dark:text-orange-400 text-sm">{story.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{story.solution}</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Results ({story.timeframe})</h4>
                    <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fort Worth Industries We Serve */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Fort Worth Industries We Build Growth Systems For
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From Stockyards tourism to Cultural District arts, we build Growth Systems for Fort Worth's diverse business landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {fortWorthIndustries.map((industry, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Forte for Fort Worth */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Fort Worth Businesses Choose Forte Growth Systems
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We understand Cowtown culture and build Growth Systems that honor Fort Worth's authentic character while delivering modern performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🤠</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Authentic Fort Worth Character
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We highlight your local culture while delivering modern growth systems. Your business feels genuinely Fort Worth, not generic corporate.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  District Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From the Stockyards to West 7th, we know how to position your business across Fort Worth with targeted Growth Systems.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tourist + Local Revenue
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites, automation, and SEO built to serve both tourists and locals with measurable ROI and automated systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Grow Your Fort Worth Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Fort Worth Growth Snapshot and discover how authentic Growth Systems can scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=fort_worth_page&utm_medium=growth_audit"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Fort Worth Growth Snapshot
                </Link>
                <Link
                  href="/contact?utm_source=fort_worth_page&utm_medium=market_analysis"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Book My Local Market Analysis
                </Link>
              </div>
              <p className="text-sm opacity-80 mt-4">
                Proudly serving all Fort Worth districts: Stockyards, Sundance Square, Cultural District, West 7th, and beyond
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
