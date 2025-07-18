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
    id: 'why-every-small-business-needs-online-presence',
    title: 'Why Every Small Business Needs an Online Presence (And How to Start Right)',
    excerpt: 'When was the last time you cracked open a phone book? Walked around town hoping the perfect business would magically appear? Here\'s the truth: if your business isn\'t online, to most people, it doesn\'t exist.',
    author: 'Seth Forte',
    date: '2025-07-18',
    readTime: '6 min read',
    category: 'Business',
    image: '/images/blog/online-presence-business.webp',
    tags: ['Online Presence', 'Small Business', 'Digital Marketing', 'Website'],
    featured: true
  }
];

const categories = ['All', 'Business'];

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
