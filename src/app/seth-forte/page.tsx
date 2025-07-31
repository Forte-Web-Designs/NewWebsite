import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Seth Forte – Web Designer for Small Businesses in Dallas–Fort Worth',
  description: 'Seth Forte is a custom web designer in Grapevine, TX serving small businesses across Dallas–Fort Worth. Founder of Forte Web Designs. Fast, SEO-ready sites.',
  keywords: 'Seth Forte, web designer Dallas, web designer Grapevine TX, custom web design DFW, small business web designer',
  alternates: {
    canonical: 'https://www.fortewebdesigns.com/seth-forte',
  },
  openGraph: {
    title: 'Seth Forte – Web Designer for Small Businesses in Dallas–Fort Worth',
    description: 'Seth Forte is a custom web designer in Grapevine, TX serving small businesses across Dallas–Fort Worth. Founder of Forte Web Designs.',
    url: 'https://www.fortewebdesigns.com/seth-forte',
    siteName: 'Forte Web Designs',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seth Forte – Web Designer for Small Businesses in Dallas–Fort Worth',
    description: 'Seth Forte is a custom web designer in Grapevine, TX serving small businesses across Dallas–Fort Worth. Founder of Forte Web Designs.',
  },
};

export default function SethFortePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Seth Forte",
            "jobTitle": "Web Designer & Founder",
            "worksFor": {
              "@type": "Organization",
              "name": "Forte Web Designs",
              "url": "https://www.fortewebdesigns.com"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Grapevine",
              "addressRegion": "TX",
              "addressCountry": "US"
            },
            "url": "https://www.fortewebdesigns.com/seth-forte",
            "sameAs": [
              "https://www.fortewebdesigns.com"
            ],
            "description": "Custom web designer serving small businesses across Dallas-Fort Worth with hand-coded websites that convert and rank."
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="mb-8">
              <OptimizedImage
                src="/images/about/headshot.jpg"
                alt="Seth Forte, custom web designer in Grapevine TX"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-blue-200 dark:border-blue-800"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-6">
              Seth Forte – Web Designer for Small Businesses in Dallas–Fort Worth
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                Custom Web Design That Actually Works
              </h2>
              <p>
                I'm Seth Forte—founder of Forte Web Designs, based in Grapevine, TX. I help small businesses across the Dallas–Fort Worth area grow through <strong>custom, hand-coded websites</strong> that are built to convert, rank, and scale.
              </p>
              <p className="mt-4">
                No templates. No bloated platforms. Just smart strategy and clean code tailored to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Mission Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              After years of seeing hardworking entrepreneurs struggle with generic, underperforming websites, I decided to build something better. Forte Web Designs exists to give small business owners exactly what they need:
            </p>
            <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Custom-built sites</strong> that reflect your brand</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>SEO foundations</strong> that actually get results</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="check" className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span><strong>Real support</strong> from a local partner—not a call center</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Hand-Code Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why I Code Every Site by Hand
          </h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I hand-code every site because it lets me control what matters:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold text-gray-900 dark:text-white">Speed</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold text-gray-900 dark:text-white">Search performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold text-gray-900 dark:text-white">User experience</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold text-gray-900 dark:text-white">Mobile responsiveness</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="font-semibold text-gray-900 dark:text-white">Long-term scalability</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              This approach delivers results fast—and keeps delivering over time. Most of my clients see SEO improvements, lead increases, and faster load speeds within weeks.
            </p>
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Who I Work With
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              From HVAC contractors in Keller to local boutiques in Fort Worth to new startups in Dallas—I design for:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="services" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Local service providers</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="star" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Medical and wellness professionals</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="bag" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Retail, hospitality & food businesses</span>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="users" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">Consultants, legal, and financial experts</span>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 text-center font-semibold">
              If you serve customers in North Texas, I know how to build a site that converts them.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Featured Insights
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Check out my latest strategies and SEO guides for small businesses:
            </p>
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <Link 
                  href="/blog/web-designers-near-me-why-dfw-needs-more-than-templates"
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Web Designers Near Me? Why DFW Small Businesses Need More Than Just a Template
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  The truth about template platforms and why custom code matters for local businesses.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <Link 
                  href="/blog/hand-coded-websites-seo-2025"
                  className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  5 Reasons Hand-Coded Websites Outperform Templates for SEO in 2025
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Why custom-coded websites are the secret weapon behind top-ranking businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Let's Talk
            </h2>
            <p className="text-xl mb-8 opacity-90">
              If you've been Googling "web designers near me" or just want a site that finally works <strong>for</strong> your business, I'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/solutions/seotool"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
              >
                👉 Book a Free Strategy Call
              </Link>
              <a
                href="mailto:seth@fortewebdesigns.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
              >
                📫 seth@fortewebdesigns.com
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-lg opacity-90">
              <span>📍</span>
              <span>Based in Grapevine, serving all of DFW</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
