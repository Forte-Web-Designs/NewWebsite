import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import NewsletterSignup from '@/components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | Forte Web Designs | SEO & Web Design Tips',
  description: 'Get expert insights on web design, SEO, digital marketing, and growing your business online. Practical tips from the Forte Web Designs team.',
  keywords: 'web design blog, SEO tips, digital marketing, small business marketing, website optimization, online marketing strategies',
};

// Blog posts data - In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'local-seo-small-business-2025',
    title: 'Local SEO for Small Businesses: The Complete 2025 Guide',
    excerpt: 'Master local SEO to dominate "near me" searches and attract more local customers. Everything you need to know about Google My Business, local citations, and location-based optimization.',
    author: 'Seth Mitchell',
    date: '2025-07-14',
    readTime: '8 min read',
    category: 'SEO',
    image: '/images/blog/local-seo-guide.webp',
    tags: ['Local SEO', 'Google My Business', 'Small Business', 'Marketing'],
    featured: true
  },
  {
    id: 'website-speed-conversion-rates',
    title: 'How Website Speed Impacts Your Conversion Rates (And Revenue)',
    excerpt: 'A 1-second delay can cost you 7% of conversions. Learn how to optimize your website speed and turn more visitors into customers.',
    author: 'Seth Mitchell',
    date: '2025-07-12',
    readTime: '6 min read',
    category: 'Performance',
    image: '/images/blog/website-speed.webp',
    tags: ['Website Speed', 'Conversions', 'Performance', 'Revenue'],
    featured: true
  },
  {
    id: 'mobile-first-design-2025',
    title: 'Mobile-First Design: Why Your Website Must Work Perfectly on Phones',
    excerpt: 'Over 60% of searches happen on mobile. Discover why mobile-first design is critical for your business success and how to implement it.',
    author: 'Seth Mitchell',
    date: '2025-07-10',
    readTime: '7 min read',
    category: 'Design',
    image: '/images/blog/mobile-first-design.webp',
    tags: ['Mobile Design', 'User Experience', 'Responsive Design'],
    featured: false
  },
  {
    id: 'google-ads-vs-seo-small-business',
    title: 'Google Ads vs SEO: Which Should Small Businesses Choose in 2025?',
    excerpt: 'Confused about whether to invest in Google Ads or SEO? We break down the pros, cons, and costs to help you make the right decision for your business.',
    author: 'Seth Mitchell',
    date: '2025-07-08',
    readTime: '9 min read',
    category: 'Marketing',
    image: '/images/blog/ads-vs-seo.webp',
    tags: ['Google Ads', 'SEO', 'Marketing Strategy', 'ROI'],
    featured: false
  },
  {
    id: 'content-marketing-local-business',
    title: 'Content Marketing That Actually Works for Local Businesses',
    excerpt: 'Skip the fluff. Learn practical content marketing strategies that help local businesses attract customers and build authority in their communities.',
    author: 'Seth Mitchell',
    date: '2025-07-05',
    readTime: '10 min read',
    category: 'Content',
    image: '/images/blog/content-marketing.webp',
    tags: ['Content Marketing', 'Local Business', 'Brand Authority'],
    featured: false
  },
  {
    id: 'web-design-trends-2025',
    title: '2025 Web Design Trends That Actually Convert Visitors',
    excerpt: 'Forget trendy designs that look pretty but don\'t convert. These web design trends for 2025 are proven to turn more visitors into customers.',
    author: 'Seth Mitchell',
    date: '2025-07-03',
    readTime: '8 min read',
    category: 'Design',
    image: '/images/blog/design-trends-2025.webp',
    tags: ['Web Design', 'Trends', 'Conversions', 'User Experience'],
    featured: false
  },
  {
    id: 'small-business-website-mistakes',
    title: '10 Website Mistakes That Are Costing Small Businesses Customers',
    excerpt: 'These common website mistakes are turning potential customers away. Learn what to fix first to start getting more leads and sales from your website.',
    author: 'Seth Mitchell',
    date: '2025-07-01',
    readTime: '12 min read',
    category: 'Design',
    image: '/images/blog/website-mistakes.webp',
    tags: ['Website Optimization', 'Small Business', 'Conversions', 'UX'],
    featured: false
  },
  {
    id: 'social-media-marketing-local-business',
    title: 'Social Media Marketing for Local Businesses: What Actually Works',
    excerpt: 'Cut through the social media noise. Discover which platforms and strategies actually drive customers to local businesses in 2025.',
    author: 'Seth Mitchell',
    date: '2025-06-28',
    readTime: '9 min read',
    category: 'Marketing',
    image: '/images/blog/social-media-local.webp',
    tags: ['Social Media', 'Local Marketing', 'Facebook', 'Instagram'],
    featured: false
  },
  {
    id: 'google-my-business-optimization',
    title: 'Google My Business Optimization: The Complete 2025 Checklist',
    excerpt: 'Master your Google My Business profile to dominate local search results. A step-by-step guide to getting more customers through Google.',
    author: 'Seth Mitchell',
    date: '2025-06-25',
    readTime: '11 min read',
    category: 'SEO',
    image: '/images/blog/google-my-business.webp',
    tags: ['Google My Business', 'Local SEO', 'Google Maps', 'Reviews'],
    featured: false
  },
  {
    id: 'website-security-small-business',
    title: 'Website Security for Small Businesses: Protect Your Online Presence',
    excerpt: 'Don\'t let hackers destroy your business. Learn essential website security practices that every small business owner needs to know.',
    author: 'Seth Mitchell',
    date: '2025-06-22',
    readTime: '8 min read',
    category: 'Security',
    image: '/images/blog/website-security.webp',
    tags: ['Website Security', 'SSL', 'Backups', 'Small Business'],
    featured: false
  }
];

const categories = ['All', 'SEO', 'Design', 'Marketing', 'Performance', 'Content', 'Security'];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-2 text-primary-1000 mb-4 sm:mb-6">
              <Icon name="star" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              Digital Marketing Insights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
              Grow Your Business Online
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-3xl mx-auto">
              Practical tips, proven strategies, and expert insights to help your business succeed online
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{post.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read Full Article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-8 pb-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read More
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
