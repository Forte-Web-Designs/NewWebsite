import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dallas Growth Systems Partner | Business Growth Services | Forte Web Designs',
  description: 'Dallas Business Growth Systems Partner specializing in automated lead generation, CRM systems, and growth strategies. Transform your Dallas business with proven systems that work.',
  keywords: 'Dallas business growth, Dallas CRM systems, Dallas lead generation, Dallas marketing automation, business growth systems Dallas, Dallas business consultant',
  openGraph: {
    title: 'Dallas Growth Systems Partner | Business Growth Services | Forte Web Designs',
    description: 'Dallas Business Growth Systems Partner specializing in automated systems that generate leads and grow your business.',
    url: 'https://fortewebdesigns.com/locations/texas/dallas',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/texas/dallas',
  },
};

const dallasStats = {
  population: '1.3M+',
  businesses: '45,000+',
  medianincome: '$58,000',
  majorIndustries: ['Technology', 'Healthcare', 'Finance', 'Real Estate', 'Professional Services'],
  keyDistricts: ['Downtown Dallas', 'Deep Ellum', 'Uptown', 'Oak Lawn', 'Bishop Arts District'],
};

const dallasChallenges = [
  {
    challenge: 'Lead Generation Inconsistency',
    description: 'Dallas businesses struggle with unpredictable lead flow, making growth planning impossible',
    solution: 'Automated lead generation systems that deliver consistent, qualified prospects daily',
    impact: 'Predictable revenue growth with automated prospect pipeline'
  },
  {
    challenge: 'Manual Follow-up Inefficiency',
    description: 'Busy Dallas entrepreneurs lose potential customers due to slow or missed follow-ups',
    solution: 'CRM automation that instantly responds to leads and nurtures them until they buy',
    impact: 'Convert 40% more leads through automated follow-up sequences'
  },
  {
    challenge: 'High Customer Acquisition Costs',
    description: 'Dallas advertising costs are 3x higher, making paid marketing unsustainable',
    solution: 'Growth Systems that generate organic leads through SEO and automated referrals',
    impact: 'Reduce customer acquisition costs by 60% through systematic growth'
  },
  {
    challenge: 'Scaling Without Systems',
    description: 'Dallas businesses hit growth plateaus because everything depends on the owner',
    solution: 'Automated business systems that handle leads, sales, and customer management',
    impact: 'Scale revenue without working more hours or hiring more staff'
  }
];

const dallasSuccessStories = [
  {
    business: 'Dallas HVAC Company',
    industry: 'Home Services',
    challenge: 'Inconsistent lead flow made it impossible to plan for seasonal demand',
    solution: 'Automated lead generation system with CRM integration and follow-up sequences',
    results: ['300% increase in qualified leads', 'Consistent $50K monthly revenue', 'Automated appointment booking'],
    timeframe: '4 months'
  },
  {
    business: 'Dallas Professional Services',
    industry: 'Business Consulting',
    challenge: 'Spent 60% of time on manual follow-up instead of serving clients',
    solution: 'Complete Growth Systems implementation with automated client onboarding',
    results: ['80% time savings on admin tasks', '150% revenue increase', 'Automated client management'],
    timeframe: '6 months'
  }
];

export default function DallasPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Icon name="location" className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-medium">Dallas, Texas</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Dallas Business Growth Systems Partner
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-4xl mx-auto">
                In a city of 45,000+ businesses, you need more than a website - you need systems that generate leads, nurture prospects, and close deals automatically. We build Growth Systems that dominate Dallas's competitive market.
              </p>
            </div>
            
            {/* Dallas Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{dallasStats.population}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Population</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-green-600 dark:text-green-400">{dallasStats.businesses}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Businesses</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{dallasStats.medianincome}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Median Income</div>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-xl font-bold text-orange-600 dark:text-orange-400">#4</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">US Metro</div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                <strong>Key Districts:</strong> {dallasStats.keyDistricts.join(' • ')}
              </p>
            </div>
          </div>
        </section>

        {/* Dallas-Specific Challenges */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Dallas Business Growth Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Big D means big competition. Every growth challenge requires custom systems that automated solutions simply can't provide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dallasChallenges.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.challenge}
                  </h3>
                  
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">The Problem:</h4>
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

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Dallas Growth Systems Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real Dallas businesses, real results. See how Growth Systems help local companies scale and dominate their markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {dallasSuccessStories.map((story, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{story.business.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {story.business}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 text-sm">{story.industry}</p>
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

        {/* Why Choose Forte for Dallas */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Dallas Businesses Choose Forte Growth Systems
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We understand Dallas market dynamics and build Growth Systems that scale in Big D's competitive environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dallas Market Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We know Dallas business districts, customer behavior, and competitive landscape. Your Growth Systems strategy reflects local market realities.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Automated Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dallas businesses need systems that work 24/7. Our automated lead generation and CRM systems never sleep, never miss follow-ups.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Local Growth Domination
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dominate Dallas searches and convert visitors into customers. Our Growth Systems generate qualified Dallas leads that become paying customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-red-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Dominate Dallas With Growth Systems?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Growth Systems audit and discover how to scale your Dallas business automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=dallas_page&utm_medium=cta_button&utm_campaign=dallas_growth_systems"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Growth Systems Audit
                </Link>
                <Link
                  href="tel:8178736655"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              <p className="text-sm opacity-80 mt-4">
                Serving all Dallas districts: Downtown, Deep Ellum, Uptown, Oak Lawn, Bishop Arts, and beyond
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
