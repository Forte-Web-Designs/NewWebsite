import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fort Worth Web Design Services - Authentic Texas Business Websites | Forte Web Designs',
  description: 'Professional web design services in Fort Worth, Texas. Custom websites that capture Cowtown charm while delivering modern functionality for local businesses.',
  keywords: 'Fort Worth web design, Fort Worth website development, Fort Worth web designer, Cowtown web design, Fort Worth SEO, Fort Worth digital marketing',
  openGraph: {
    title: 'Fort Worth Web Design Services - Authentic Texas Business Websites | Forte Web Designs',
    description: 'Professional web design services in Fort Worth, Texas. Custom websites that capture Cowtown charm while delivering modern functionality.',
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
    description: 'Fort Worth businesses struggle to compete with Dallas companies for online visibility',
    solution: 'Local SEO strategies that emphasize Fort Worth\'s unique character and authentic appeal',
    impact: 'Dominate "Fort Worth [service]" searches and attract customers who prefer local authenticity'
  },
  {
    challenge: 'Balancing Tradition with Innovation',
    description: 'Cowtown heritage vs. modern business expectations create brand positioning challenges',
    solution: 'Custom design that honors Fort Worth character while delivering cutting-edge functionality',
    impact: 'Authentic brand positioning that resonates with both locals and visitors'
  },
  {
    challenge: 'Tourist vs. Local Customer Appeal',
    description: 'Businesses need to attract both 9M+ annual tourists and loyal local customers',
    solution: 'Dual-focused content strategy that speaks to both visitor needs and local relationships',
    impact: 'Increased revenue from both tourist traffic and local customer retention'
  },
  {
    challenge: 'Generic Corporate Look',
    description: 'Many Fort Worth businesses use templates that make them look like Dallas suburbs',
    solution: 'Custom branding that captures Fort Worth\'s distinctive culture and community spirit',
    impact: 'Stand out from generic competitors with authentic Fort Worth personality'
  }
];

const fortWorthSuccessStories = [
  {
    business: 'Historic Stockyards Restaurant',
    industry: 'Tourism & Dining',
    challenge: 'Competing with chain restaurants for both tourist and local customers',
    solution: 'Custom website highlighting Fort Worth history with online reservations and local stories',
    results: ['55% increase in online reservations', '40% more local repeat customers', '#1 ranking for "Fort Worth authentic dining"'],
    timeframe: '4 months'
  },
  {
    business: 'Fort Worth Construction Company',
    industry: 'Construction',
    challenge: 'Generic website looked like every other contractor, no local connection',
    solution: 'Custom site showcasing Fort Worth projects with authentic Texas branding',
    results: ['35% increase in local project inquiries', '60% higher conversion rate', 'Top 3 ranking for target keywords'],
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
                Fort Worth Web Design That Honors Cowtown Character
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                Fort Worth customers value authenticity over corporate polish. We build websites that capture Cowtown's unique character while delivering modern functionality that competes with Big D neighbors.
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
            </div>
          </div>
        </section>

        {/* Fort Worth Business Challenges */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Fort Worth Business Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Cowtown businesses face unique challenges that require authentic solutions, not generic templates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {fortWorthChallenges.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.challenge}
                  </h3>
                  
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">The Challenge:</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">{item.description}</p>
                  </div>
                  
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-900 dark:text-green-400 mb-1">Our Solution:</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">{item.solution}</p>
                  </div>
                  
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-400 mb-1">The Impact:</h4>
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
                Fort Worth Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real Fort Worth businesses using authentic web design to compete and win in both local and tourist markets.
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
                Fort Worth Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                From Stockyards tourism to Cultural District arts, we understand Fort Worth's diverse business landscape.
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
                Why Fort Worth Businesses Choose Forte
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We understand Cowtown culture and build websites that honor Fort Worth's authentic character while delivering modern performance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🤠</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Authentic Fort Worth Character
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We capture Fort Worth's unique personality in every design. Your website feels genuinely local, not like a Dallas suburb.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Cultural District Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  From Stockyards to Sundance Square, we know Fort Worth's diverse districts and how to position your business in each market.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tourist & Local Appeal
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Websites that attract both 9M+ annual tourists and loyal local customers. Dual-focused strategies that maximize revenue.
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
                Ready to Show Fort Worth Your Authentic Brand?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Fort Worth market analysis and discover how authentic web design can grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=fort_worth_page&utm_medium=cta_button&utm_campaign=fort_worth_local_seo"
                  className="inline-flex items-center justify-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Fort Worth Market Analysis
                </Link>
                <Link
                  href="tel:8178736655"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-200"
                >
                  Call (817) 873-6655
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
