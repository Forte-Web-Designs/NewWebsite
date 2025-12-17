import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata: Metadata = {
  title: 'Business Growth & AI Automation Blog | Forte Web Designs',
  description: 'Expert insights on AI automation, web design, business growth strategies, and digital marketing. Learn how to build systems that scale your business.',
  keywords: 'business automation blog, AI strategies, web design tips, business growth, digital marketing, automation systems',
};

// Blog posts data - In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'business-automation-roi-guide-2025',
    title: 'The Complete ROI Guide to Business Automation in 2025',
    excerpt: 'Real case studies showing $52K+ in annual savings, 1,040+ hours saved, and 340% first-year returns. Complete guide with calculations, implementation strategies, and proven results from enterprise automation systems.',
    author: 'Seth Forte',
    date: '2025-10-15',
    readTime: '12 min read',
    category: 'ROI & Analytics',
    tags: ['Business Automation', 'ROI Analysis', 'Cost Savings', 'Process Optimization'],
    featured: true,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 'ai-automation-myths-small-business-owners-believe',
    title: '5 AI Automation Myths Small Business Owners Believe (And Why They\'re Wrong)',
    excerpt: 'AI automation isn\'t just for Fortune 500 companies. Small businesses are using intelligent systems to save 15+ hours per week, reduce errors, and scale without hiring. Here\'s what most business owners get wrong about AI—and what it can actually do for you.',
    author: 'Seth Forte',
    date: '2025-10-10',
    readTime: '7 min read',
    category: 'AI Automation',
    tags: ['AI Automation', 'Small Business', 'Business Growth', 'Automation Myths'],
    featured: true,
    gradient: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'business-growth-2025-strategy-automation-beat-guesswork',
    title: 'Business Growth in 2025: Why Strategy and Automation Beat Guesswork',
    excerpt: 'In today\'s market, business growth isn\'t luck—it\'s a system. The small businesses winning in 2025 aren\'t just rolling the dice on ads or hoping their websites get noticed. They\'re using data, automation, and consistent systems to turn every click, call, and lead into measurable growth.',
    author: 'Seth Forte',
    date: '2025-09-26',
    readTime: '7 min read',
    category: 'Business Growth',
    tags: ['Business Growth', 'Automation', 'Strategy', 'Small Business'],
    featured: true,
    gradient: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'mobile-first-web-design-essential-2025-dfw',
    title: 'Mobile-First Web Design: Why It\'s Essential in 2025',
    excerpt: 'Over 60% of website traffic comes from mobile devices, and in DFW that number is even higher. If your website isn\'t built mobile-first, you\'re losing leads, customers, and revenue to competitors who prioritize mobile experience.',
    author: 'Seth Forte',
    date: '2025-08-22',
    readTime: '8 min read',
    category: 'Web Design',
    tags: ['Mobile-First Design', 'Web Design', 'User Experience', 'Local SEO'],
    featured: true,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 'dallas-web-design-building-site-stands-out-locally',
    title: 'Dallas Web Design: Building a Site That Stands Out Locally',
    excerpt: 'Want to dominate the Dallas and DFW digital landscape? Local web design isn\'t just about looking good—it\'s about connecting with your community, ranking in local searches, and building trust with neighbors who become customers.',
    author: 'Seth Forte',
    date: '2025-08-18',
    readTime: '9 min read',
    category: 'Local Business',
    tags: ['Dallas Web Design', 'Local SEO', 'DFW Business', 'Web Design'],
    featured: false,
    gradient: 'from-pink-600 to-red-600'
  },
  {
    id: 'website-mistakes-costing-dfw-businesses-customers',
    title: '5 Website Mistakes That Are Costing DFW Businesses Customers',
    excerpt: 'Are website mistakes silently driving away your Dallas-Fort Worth customers? From slow loading times to poor mobile design, these common errors could be costing your business thousands. Here\'s how to identify and fix them.',
    author: 'Seth Forte',
    date: '2025-08-15',
    readTime: '8 min read',
    category: 'Web Design',
    tags: ['Website Mistakes', 'DFW Business', 'Web Design', 'User Experience'],
    featured: false,
    gradient: 'from-red-600 to-orange-600'
  },
  {
    id: 'web-designers-near-me-how-to-choose-right-one-dfw',
    title: 'Web Designers Near Me: How to Choose the Right One in DFW',
    excerpt: 'If you\'ve searched "web designers near me" in the Dallas–Fort Worth area, you\'ve probably been flooded with options. Here\'s how to find the right web designer who understands your business, your audience, and your goals.',
    author: 'Seth Forte',
    date: '2025-08-11',
    readTime: '3 min read',
    category: 'Local Business',
    tags: ['DFW', 'Local Business', 'Web Design', 'Web Designer Selection'],
    featured: false,
    gradient: 'from-orange-600 to-yellow-600'
  },
  {
    id: '30-90-day-ai-playbook-small-service-businesses',
    title: 'The 30–90 Day AI Playbook for Small Service Businesses',
    excerpt: 'A practical, non-technical plan to cut response times, send quotes same-day, and reclaim 5–20 hours/week using light-touch automation and AI.',
    author: 'Seth Forte',
    date: '2025-09-30',
    readTime: '8 min read',
    category: 'AI Automation',
    tags: ['AI', 'Automation', 'Service Businesses', 'Business Growth'],
    featured: false,
    gradient: 'from-yellow-600 to-green-600'
  },
  {
    id: 'hand-coded-websites-seo-2025',
    title: '5 Reasons Hand-Coded Websites Outperform Templates for SEO in 2025',
    excerpt: 'In the race to the top of Google, your website\'s structure and speed matter more than ever. Discover why custom-coded websites are the secret weapon behind many top-ranking businesses.',
    author: 'Seth Forte',
    date: '2025-07-28',
    readTime: '6 min read',
    category: 'SEO',
    tags: ['SEO', 'Hand-Coded Websites', 'Web Performance', 'Custom Development'],
    featured: false,
    gradient: 'from-green-600 to-teal-600'
  },
  {
    id: 'ai-agents-vs-chatbots-what-small-businesses-actually-need',
    title: 'AI Agents vs. Chatbots: What Small Businesses Actually Need',
    excerpt: 'Choose the right AI tool for your business. Chatbots handle FAQ responses while AI agents manage complex workflows. Learn costs, benefits, and implementation without platform replacement.',
    author: 'Seth Forte',
    date: '2025-10-15',
    readTime: '9 min read',
    category: 'AI Automation',
    tags: ['AI Agents', 'Chatbots', 'Small Business AI', 'Business Automation'],
    featured: false,
    gradient: 'from-teal-600 to-cyan-600'
  },
];

const categories = ['All', 'AI Automation', 'Business Growth', 'Web Design', 'Local Business', 'SEO'];

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Icon name="star" className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Business Growth Insights</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Build Systems That Scale
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Expert insights on AI automation, web design, and business growth strategies that help you work smarter, not harder.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">Featured Articles</h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <SimpleScrollReveal key={post.id} direction="up" delay={index * 100}>
                  <Link href={`/blog/${post.id}`} className="block group">
                    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className={`relative h-48 bg-gradient-to-br ${post.gradient} p-6 flex flex-col justify-end`}>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:scale-105 transition-transform duration-300">
                          {post.title}
                        </h3>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                          Read Article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SimpleScrollReveal direction="up">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <SimpleScrollReveal direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">Latest Articles</h2>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <SimpleScrollReveal key={post.id} direction="up" delay={index * 50}>
                <Link href={`/blog/${post.id}`} className="block group">
                  <article className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className={`relative h-40 bg-gradient-to-br ${post.gradient} p-4 flex items-end`}>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        Read More
                        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Book a free strategy call. We'll show you exactly how automation and smart systems can help you scale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
              >
                Book Your Free Strategy Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
