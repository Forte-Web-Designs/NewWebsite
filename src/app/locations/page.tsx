import type { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Web Design Solutions - Texas, Oklahoma, New Mexico | Forte Web Designs',
  description: 'Custom web design for specific Southwest markets. Dallas corporate competition, Fort Worth authenticity, Oklahoma energy sector, New Mexico cultural markets - we solve your local business challenges.',
  keywords: 'local web design Texas Oklahoma New Mexico, Dallas web designer near me, Fort Worth web design, Oklahoma City web designer, Albuquerque web design, Santa Fe web designer, custom websites Southwest, local SEO Texas Oklahoma New Mexico',
  openGraph: {
    title: 'Local Web Design Solutions - Texas, Oklahoma, New Mexico | Forte Web Designs',
    description: 'Custom web design for specific Southwest markets. Solutions for Dallas corporate competition, Fort Worth authenticity, Oklahoma energy sector, New Mexico cultural markets.',
    url: 'https://fortewebdesigns.com/locations',
    type: 'website',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations',
  },
};

const topLocations = [
  {
    city: 'Dallas',
    state: 'Texas',
    slug: 'texas/dallas',
    description: 'Big D means big competition. Every day, 45,000+ businesses fight for the same customers online. Your website either dominates search results or gets buried on page 10.',
    problem: 'Corporate giants with million-dollar marketing budgets push small businesses into digital obscurity.',
    solution: 'Custom-coded websites that load instantly and outrank template-based competitors in local searches.',
    challenges: ['Corporate giants dominating search', 'Template websites looking identical', 'High cost-per-click advertising'],
    solutions: ['Lightning-fast custom code', 'Local SEO that actually works', 'Authentic brand positioning'],
    population: '1.3M+',
    businesses: '45,000+',
    keyAreas: ['Downtown Dallas', 'Deep Ellum', 'Uptown', 'Oak Lawn'],
    marketInsight: 'Dallas customers scroll fast and decide faster. Your website has 3 seconds to win or lose.',
    featured: true,
  },
  {
    city: 'Fort Worth',
    state: 'Texas', 
    slug: 'texas/fort-worth',
    description: 'Cowtown is booming, but customers still value authenticity over corporate polish. Your website needs to feel local while competing with Big D neighbors.',
    problem: 'Generic web design makes Fort Worth businesses look like every other Dallas suburb.',
    solution: 'Websites that capture Fort Worth\'s unique character while delivering modern functionality.',
    challenges: ['Being overshadowed by Dallas', 'Balancing tradition with tech', 'Tourist vs. local customer needs'],
    solutions: ['Authentic Texas branding', 'Mobile-first local optimization', 'Cultural market positioning'],
    population: '950K+',
    businesses: '32,000+',
    keyAreas: ['Downtown Fort Worth', 'Sundance Square', 'Cultural District', 'Stockyards'],
    marketInsight: 'Fort Worth customers research thoroughly and choose businesses that feel genuinely local.',
    featured: false,
  },
  {
    city: 'Texas State',
    state: 'Texas',
    slug: 'texas', 
    description: 'Fourth-largest metro in America. Your customers could be in Plano, Frisco, Arlington, or any of 200+ cities. One website needs to work everywhere.',
    problem: 'Multi-location businesses struggle with websites that don\'t capture local market nuances.',
    solution: 'Metro-wide optimization that dominates local searches across all Texas markets.',
    challenges: ['13 counties, 200+ cities', 'Diverse customer bases', 'Complex local SEO'],
    solutions: ['Multi-location SEO mastery', 'Regional customization', 'Scalable architecture'],
    population: '7.8M+',
    businesses: '180,000+',
    keyAreas: ['Dallas County', 'Tarrant County', 'Collin County', 'Denton County'],
    marketInsight: 'Texas customers expect local expertise but demand big-city performance.',
    featured: false,
  },
  {
    city: 'Plano',
    state: 'Texas',
    slug: 'texas/plano',
    description: 'Corporate headquarters capital of Texas. Your website competes with Fortune 500 companies for the same affluent customers.',
    problem: 'Small businesses look amateur next to corporate giants with unlimited budgets.',
    solution: 'Enterprise-level custom development that makes you look like the established player.',
    challenges: ['Corporate competition', 'High customer expectations', 'Affluent market standards'],
    solutions: ['Enterprise-grade development', 'Premium user experience', 'Professional positioning'],
    population: '295K+',
    businesses: '15,000+',
    keyAreas: ['Legacy West', 'Plano East', 'West Plano', 'Downtown Plano'],
    marketInsight: 'Plano customers have high expectations - your website is your first impression.',
    featured: false,
  },
  {
    city: 'Frisco',
    state: 'Texas',
    slug: 'texas/frisco',
    description: 'Fastest-growing city in America. New businesses open daily, but only the ones with strong digital presence survive the competition.',
    problem: 'Rapid growth means instant competition - new businesses struggle to get noticed.',
    solution: 'Fast-launching websites optimized for immediate local search domination.',
    challenges: ['Rapid business growth', 'New competition daily', 'Young demographic'],
    solutions: ['Quick-launch optimization', 'Modern mobile design', 'Social integration'],
    population: '200K+',
    businesses: '12,000+',
    keyAreas: ['The Star', 'Frisco Square', 'Stonebriar', 'Legacy West'],
    marketInsight: 'Frisco customers are tech-savvy and mobile-first - your site must be flawless.',
    featured: false,
  },
  {
    city: 'Arlington',
    state: 'Texas',
    slug: 'texas/arlington',
    description: 'Sports capital of Texas. Your website needs to capture attention in a city where major events bring millions of visitors.',
    problem: 'Event-driven traffic spikes crash template websites and lose potential customers.',
    solution: 'High-performance architecture that handles traffic surges and converts visitors.',
    challenges: ['Event traffic spikes', 'Tourism vs. local focus', 'Competition with venues'],
    solutions: ['Scalable performance', 'Event-aware optimization', 'Conversion-focused design'],
    population: '395K+',
    businesses: '20,000+',
    keyAreas: ['Downtown Arlington', 'Entertainment District', 'Mansfield Highway', 'Cooper Street'],
    marketInsight: 'Arlington customers come from everywhere - your website is often their first local contact.',
    featured: false,
  },
  {
    city: 'Irving',
    state: 'Texas',
    slug: 'texas/irving',
    description: 'Corporate business hub with Las Colinas and DFW Airport. Your website needs to meet professional standards for business clients.',
    problem: 'Corporate environment means high expectations - amateur websites lose business.',
    solution: 'Professional websites that match Irving\'s corporate sophistication.',
    challenges: ['Corporate expectations', 'Business-focused market', 'Professional standards'],
    solutions: ['Corporate-grade design', 'Professional presentation', 'Business optimization'],
    population: '240K+',
    businesses: '18,000+',
    keyAreas: ['Las Colinas', 'DFW Airport', 'Irving Business District', 'Valley Ranch'],
    marketInsight: 'Irving customers expect Fortune 500 professionalism - your website is your business card.',
    featured: false,
  },
  // Oklahoma Locations
  {
    city: 'Oklahoma City',
    state: 'Oklahoma',
    slug: 'oklahoma/oklahoma-city',
    description: 'Energy capital of the Southwest. Your website competes with major energy companies while serving diverse local businesses from Bricktown to Midtown.',
    problem: 'Energy boom creates high competition - local businesses struggle to stand out against major corporations.',
    solution: 'Custom websites that balance professional credibility with local Oklahoma authenticity.',
    challenges: ['Energy industry competition', 'Diverse market segments', 'Professional vs. local balance'],
    solutions: ['Industry-specific optimization', 'Local market positioning', 'Professional branding'],
    population: '695K+',
    businesses: '35,000+',
    keyAreas: ['Bricktown', 'Midtown', 'Downtown OKC', 'Stockyards City'],
    marketInsight: 'Oklahoma City customers value both professional expertise and genuine local connection.',
    featured: true,
  },
  {
    city: 'Tulsa',
    state: 'Oklahoma',
    slug: 'oklahoma/tulsa',
    description: 'Oil capital with a thriving arts scene. Your website needs to appeal to both traditional energy businesses and the growing creative economy.',
    problem: 'Diverse economy means conflicting customer expectations - corporate vs. creative markets.',
    solution: 'Flexible websites that adapt messaging and design to different market segments.',
    challenges: ['Dual market appeal', 'Economic transition', 'Traditional vs. modern expectations'],
    solutions: ['Adaptive design systems', 'Market-specific landing pages', 'Cultural sensitivity'],
    population: '415K+',
    businesses: '22,000+',
    keyAreas: ['Downtown Tulsa', 'Arts District', 'Brookside', 'Cherry Street'],
    marketInsight: 'Tulsa customers appreciate both business acumen and creative authenticity.',
    featured: false,
  },
  {
    city: 'Norman',
    state: 'Oklahoma',
    slug: 'oklahoma/norman',
    description: 'University town with growing tech sector. Your website competes for educated customers who expect modern functionality and local relevance.',
    problem: 'High education levels mean sophisticated customers who quickly spot amateur web design.',
    solution: 'University-grade websites that demonstrate technical expertise while maintaining local appeal.',
    challenges: ['Educated customer base', 'Student vs. permanent residents', 'Seasonal fluctuations'],
    solutions: ['Technical excellence', 'Academic credibility', 'Year-round optimization'],
    population: '128K+',
    businesses: '8,500+',
    keyAreas: ['Campus Corner', 'Downtown Norman', 'Legacy Park', 'Riverwind Casino area'],
    marketInsight: 'Norman customers research thoroughly and expect both innovation and reliability.',
    featured: false,
  },
  // New Mexico Locations
  {
    city: 'Albuquerque',
    state: 'New Mexico',
    slug: 'new-mexico/albuquerque',
    description: 'Desert metropolis with unique Southwestern culture. Your website needs to reflect local character while competing with national chains.',
    problem: 'Generic corporate websites dominate search results, making local businesses invisible.',
    solution: 'Culturally-aware websites that showcase authentic New Mexico character while maintaining professional standards.',
    challenges: ['Cultural authenticity', 'Corporate competition', 'Tourist vs. local markets'],
    solutions: ['Southwest-inspired design', 'Cultural market positioning', 'Bilingual optimization'],
    population: '565K+',
    businesses: '28,000+',
    keyAreas: ['Old Town', 'Nob Hill', 'Westside', 'Northeast Heights'],
    marketInsight: 'Albuquerque customers value authentic local character alongside professional service.',
    featured: true,
  },
  {
    city: 'Santa Fe',
    state: 'New Mexico',
    slug: 'new-mexico/santa-fe',
    description: 'Arts capital with affluent tourism market. Your website must appeal to both discerning locals and high-end visitors.',
    problem: 'Tourist-focused businesses struggle with seasonal fluctuations and local authenticity.',
    solution: 'Dual-market websites that serve both tourist appeal and local community needs.',
    challenges: ['Seasonal tourism', 'Affluent expectations', 'Arts community standards'],
    solutions: ['Seasonal optimization', 'Premium positioning', 'Cultural sensitivity'],
    population: '87K+',
    businesses: '6,200+',
    keyAreas: ['Plaza District', 'Canyon Road', 'Railyard District', 'Midtown'],
    marketInsight: 'Santa Fe customers expect artistic sophistication and authentic cultural representation.',
    featured: false,
  },
  {
    city: 'Las Cruces',
    state: 'New Mexico',
    slug: 'new-mexico/las-cruces',
    description: 'Border city with growing university influence. Your website needs to serve diverse populations while maintaining professional credibility.',
    problem: 'Border location creates unique challenges - serving both local and cross-border markets.',
    solution: 'Bilingual-ready websites optimized for diverse customer bases and cross-border commerce.',
    challenges: ['Bilingual requirements', 'Cross-border commerce', 'University influence'],
    solutions: ['Multilingual optimization', 'Cultural adaptation', 'Academic partnerships'],
    population: '112K+',
    businesses: '7,800+',
    keyAreas: ['Downtown Las Cruces', 'NMSU area', 'Mesilla', 'East Mesa'],
    marketInsight: 'Las Cruces customers appreciate bilingual service and cultural understanding.',
    featured: false,
  },
];

const whyCustomDevelopment = [
  {
    icon: '🏆',
    title: 'Beyond Templates',
    description: 'While others use the same WordPress templates for every client, we custom code every website to match your specific market needs.',
  },
  {
    icon: '⚡',
    title: 'Performance That Wins',
    description: 'Custom-coded sites load instantly and rank better in search results. No bloated WordPress templates slowing you down.',
  },
  {
    icon: '🔒',
    title: 'Built to Last',
    description: 'No security vulnerabilities, no constant updates eating into your time. Just pure performance that helps you compete and win.',
  },
];

export default function LocationsPage() {
  // Schema markup for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Forte Web Designs",
    "description": "Professional web design services throughout Texas, Oklahoma, and New Mexico specializing in Dallas, Fort Worth, Oklahoma City, and Albuquerque metro areas",
    "url": "https://fortewebdesigns.com",
    "logo": "https://fortewebdesigns.com/images/home/logo2.png",
    "image": "https://fortewebdesigns.com/images/home/logo2.png",
    "telephone": "(817) 873-6655",
    "email": "info@fortewebdesigns.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grapevine",
      "addressLocality": "Grapevine",
      "addressRegion": "TX",
      "postalCode": "76051",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.9342919",
      "longitude": "-97.0780654"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Dallas",
        "sameAs": "https://en.wikipedia.org/wiki/Dallas"
      },
      {
        "@type": "City", 
        "name": "Fort Worth",
        "sameAs": "https://en.wikipedia.org/wiki/Fort_Worth,_Texas"
      },
      {
        "@type": "City",
        "name": "Oklahoma City",
        "sameAs": "https://en.wikipedia.org/wiki/Oklahoma_City"
      },
      {
        "@type": "City",
        "name": "Albuquerque",
        "sameAs": "https://en.wikipedia.org/wiki/Albuquerque,_New_Mexico"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Dallas-Fort Worth Metroplex",
        "sameAs": "https://en.wikipedia.org/wiki/Dallas%E2%80%93Fort_Worth_metroplex"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Texas",
        "sameAs": "https://en.wikipedia.org/wiki/Texas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Oklahoma",
        "sameAs": "https://en.wikipedia.org/wiki/Oklahoma"
      },
      {
        "@type": "AdministrativeArea",
        "name": "New Mexico",
        "sameAs": "https://en.wikipedia.org/wiki/New_Mexico"
      }
    ],
    "serviceType": [
      "Web Design",
      "SEO Services", 
      "Website Development",
      "Digital Marketing",
      "Local SEO"
    ],
    "priceRange": "$200-$1200",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Fr 09:00-17:00",
    "sameAs": [
      "https://www.facebook.com/fortewebdesigns",
      "https://www.linkedin.com/company/forte-web-designs"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="relative">
      {/* Schema markup for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <SectionBackgroundAnimation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
                <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                Top Locations
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
                Your Local Market, Your Custom Solution
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Dallas businesses face corporate giants. Oklahoma City competes with energy companies. Albuquerque needs authentic Southwest character. We build websites that win in your specific market – not generic solutions that work nowhere.
              </p>
            </div>
          </div>
        </section>

        {/* Top Locations Overview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Local Challenges, Custom Solutions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every Southwest market has unique challenges that template websites can't solve. We build custom solutions that address your specific local business problems across Texas, Oklahoma, and New Mexico.
              </p>
            </div>

            {/* Featured Locations */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {topLocations.filter(location => location.featured).map((location) => (
                <div key={location.slug} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {location.city}
                      </h3>
                      <span className="inline-block bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
                        {location.population} people
                      </span>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 text-sm px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {location.description}
                  </p>
                  
                  <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-400 mb-1">The Problem:</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">{location.problem}</p>
                  </div>
                  
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-900 dark:text-green-400 mb-1">Our Solution:</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">{location.solution}</p>
                  </div>
                  
                  <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-400 mb-1">Market Insight:</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{location.marketInsight}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{location.businesses} businesses</span>
                    <span>Local expertise</span>
                  </div>
                  
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center justify-center w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 group-hover:shadow-md"
                  >
                    See {location.city} Solutions
                  </Link>
                </div>
              ))}
            </div>

            {/* Additional Locations */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Additional Service Areas
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {topLocations.filter(location => !location.featured).map((location) => (
                  <div key={location.slug} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {location.city}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {location.population} • {location.businesses} businesses
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {location.description}
                    </p>
                    
                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-3">
                      {location.marketInsight}
                    </div>
                    
                    <Link
                      href={`/locations/${location.slug}`}
                      className="inline-flex items-center justify-center w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom Development */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Beyond Templates: Southwest-Level Performance
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Competing across Texas, Oklahoma, and New Mexico means your website needs to be as tough as you are. No WordPress vulnerabilities, no bloated templates, no security headaches.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyCustomDevelopment.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="text-4xl mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Southwest Market Coverage */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Built for Southwest Business
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                      From Local to Multi-State
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Whether you're a single-location business or expanding across Texas, Oklahoma, and New Mexico, our custom-coded websites scale with your ambitions. No generic solutions – just websites built for your specific Southwest market.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Local SEO domination</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Mobile-first design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Lightning-fast performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Security built-in</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>No WordPress headaches</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Custom functionality</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Ongoing support</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span>
                          <span>Growth-ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                      <span className="text-4xl">🏆</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Custom-coded websites that win in competitive Southwest markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Stop Losing to Template Websites
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Your competitors are using the same WordPress templates. Stand out with custom-coded solutions that actually work in your local market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact?utm_source=locations_page&utm_medium=cta_button"
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Get Local Market Analysis
                </Link>
                <Link
                  href="tel:8178736655"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Call (817) 873-6655
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
