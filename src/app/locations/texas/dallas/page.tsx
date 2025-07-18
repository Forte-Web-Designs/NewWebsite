import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dallas Web Design Services - Custom Websites That Dominate | Forte Web Designs',
  description: 'Professional web design services in Dallas, Texas. Custom-coded websites that outperform template competitors in Big D\'s competitive market. Local expertise since 2020.',
  keywords: 'Dallas web design, Dallas website development, Dallas web designer, Dallas SEO, Dallas digital marketing, custom websites Dallas',
  openGraph: {
    title: 'Dallas Web Design Services - Custom Websites That Dominate | Forte Web Designs',
    description: 'Professional web design services in Dallas, Texas. Custom-coded websites that outperform template competitors.',
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
    challenge: 'Corporate Giant Competition',
    description: 'Fortune 500 companies dominate search results with massive marketing budgets',
    solution: 'Custom-coded websites that load faster and rank higher than template competitors',
    impact: 'Outperform corporate websites in local search results'
  },
  {
    challenge: 'Template Website Saturation',
    description: 'Every Dallas business uses the same WordPress themes, creating a sea of sameness',
    solution: 'Unique custom development that makes your brand instantly recognizable',
    impact: 'Stand out from identical template websites'
  },
  {
    challenge: 'High Digital Advertising Costs',
    description: 'Google Ads and Facebook ads cost 3x more in Dallas than smaller markets',
    solution: 'SEO-optimized websites that generate organic traffic and reduce ad dependency',
    impact: 'Lower customer acquisition costs through organic search'
  },
  {
    challenge: 'Mobile-First Expectations',
    description: 'Dallas customers expect instant loading and perfect mobile experiences',
    solution: 'Mobile-optimized custom code that loads in under 2 seconds',
    impact: 'Higher conversion rates from mobile traffic'
  }
];

const dallasSuccessStories = [
  {
    business: 'Dallas Restaurant Group',
    industry: 'Restaurant',
    challenge: 'Lost customers to national chains with better online presence',
    solution: 'Custom website with online ordering and local SEO optimization',
    results: ['40% increase in online orders', '60% more reservations', '#1 ranking for "Dallas Italian restaurant"'],
    timeframe: '90 days'
  },
  {
    business: 'Professional Services Firm',
    industry: 'Legal',
    challenge: 'Competing with large law firms for high-value clients',
    solution: 'Professional website with case study showcase and client portal',
    results: ['25% increase in consultation requests', '50% higher client retention', 'Top 3 ranking for target keywords'],
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
                Dallas Web Design That Dominates Big D
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-4xl mx-auto">
                In a city of 45,000+ businesses, your website either dominates search results or gets buried on page 10. We build custom-coded websites that outperform template competitors in Dallas's most competitive market.
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
                Dallas Business Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Big D means big competition. Every challenge requires a custom solution that template websites simply can't provide.
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
                Dallas Success Stories
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real Dallas businesses, real results. See how custom web design helps local companies compete and win.
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
                Why Dallas Businesses Choose Forte
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We understand Dallas market dynamics and build websites that perform in Big D's competitive environment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🏙️</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Dallas Market Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We know Dallas business districts, customer behavior, and competitive landscape. Your website strategy reflects local market realities.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lightning-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Dallas customers expect instant results. Our custom code loads in under 2 seconds, dramatically outperforming WordPress templates.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Local SEO Domination
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rank #1 for "Dallas [your service]" searches. We optimize for local search terms that drive qualified Dallas customers to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Dominate Dallas Search Results?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get a free Dallas market analysis and discover how to outperform your competition online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=dallas_page&utm_medium=cta_button&utm_campaign=dallas_local_seo"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Free Dallas Market Analysis
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
