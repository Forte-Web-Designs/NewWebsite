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
    id: 'clarity-is-kindness-life-online',
    title: 'Clarity Is Kindness (In Life and Online)',
    excerpt: 'Clear communication isn\'t just good business—it\'s an act of kindness. Whether you\'re writing an email, designing a website, or having a conversation, clarity helps people understand, decide, and move forward without confusion.',
    author: 'Seth Forte',
    date: '2025-07-25',
    readTime: '7 min read',
    category: 'Business',
    image: '/images/blog/clarity-is-kindness.webp',
    tags: ['Communication', 'Business', 'Web Design', 'Writing'],
    featured: true
  },
  {
    id: 'local-web-designer-near-me-guide',
    title: 'How to Find the Best Web Designer Near Me: A Local Business Guide',
    excerpt: 'Searching for "web designer near me"? Here\'s everything you need to know to find the perfect local web designer for your business in 2025.',
    content: `
      <p>When you search "web designer near me," you're not just looking for someone who can build a website. You're looking for someone who understands your local market, your customers, and what it takes to compete in your area.</p>

      <p>As a web designer serving the Dallas-Fort Worth metroplex, I've worked with dozens of local businesses, and I can tell you: location matters more than you think.</p>

      <h2>Why Choose a Local Web Designer?</h2>

      <p>Sure, you could hire someone from anywhere in the world. But here's why going local makes sense:</p>

      <ul>
        <li><strong>Local Market Knowledge:</strong> They understand your competition, your customers, and what works in your area</li>
        <li><strong>Face-to-Face Meetings:</strong> Sometimes you need to sit down and talk through your vision in person</li>
        <li><strong>Same Timezone:</strong> No more waiting 12 hours for a response to an urgent question</li>
        <li><strong>Local SEO Expertise:</strong> They know how to help you rank for "near me" searches</li>
        <li><strong>Ongoing Support:</strong> When you need updates, they're just a phone call away</li>
      </ul>

      <h2>Red Flags to Avoid When Hiring a Local Web Designer</h2>

      <p>Not all "local" web designers are created equal. Watch out for these warning signs:</p>

      <h3>1. No Local Portfolio</h3>
      <p>If they can't show you websites they've built for businesses in your area, that's a problem. Ask to see examples of their work with local businesses.</p>

      <h3>2. Template-Only Approach</h3>
      <p>Your business is unique. If they're pushing you toward a template without understanding your specific needs, keep looking.</p>

      <h3>3. No Local SEO Knowledge</h3>
      <p>A local web designer should understand Google My Business, local citations, and how to optimize for "near me" searches.</p>

      <h3>4. Poor Communication</h3>
      <p>If they're hard to reach during the sales process, imagine how hard they'll be to reach when you need support.</p>

      <h2>Questions to Ask Your Local Web Designer</h2>

      <p>Here are the questions I recommend asking before hiring any local web designer:</p>

      <h3>About Their Experience</h3>
      <ul>
        <li>"Can you show me websites you've built for businesses like mine?"</li>
        <li>"How long have you been serving businesses in this area?"</li>
        <li>"What's your typical project timeline?"</li>
      </ul>

      <h3>About Local SEO</h3>
      <ul>
        <li>"How will you help my website rank for local searches?"</li>
        <li>"Do you optimize Google My Business profiles?"</li>
        <li>"How do you handle local citations and directory listings?"</li>
      </ul>

      <h3>About Ongoing Support</h3>
      <ul>
        <li>"What happens after my website launches?"</li>
        <li>"How do you handle updates and maintenance?"</li>
        <li>"What's your response time for urgent issues?"</li>
      </ul>

      <h2>What to Expect from a Professional Local Web Designer</h2>

      <p>When you work with a quality local web designer, here's what the process should look like:</p>

      <h3>Discovery Phase</h3>
      <p>They should want to understand your business, your goals, and your local market. This isn't just about what you do—it's about who you serve and how you're different from your competition.</p>

      <h3>Strategy Development</h3>
      <p>Before they start designing, they should present a clear strategy for how your website will help you achieve your business goals.</p>

      <h3>Design and Development</h3>
      <p>You should see mockups and prototypes before they start building. No surprises when it comes to how your website will look and function.</p>

      <h3>Testing and Launch</h3>
      <p>A professional will test your website thoroughly before launch and provide training on how to use it.</p>

      <h3>Ongoing Support</h3>
      <p>Your website isn't "set it and forget it." You need ongoing updates, security patches, and optimization.</p>

      <h2>Local Web Design Pricing: What to Expect</h2>

      <p>Web design pricing varies by location and complexity, but here's what you can typically expect:</p>

      <ul>
        <li><strong>Small Business Website:</strong> $2,000 - $10,000</li>
        <li><strong>E-commerce Website:</strong> $5,000 - $20,000</li>
        <li><strong>Custom Business Website:</strong> $10,000 - $50,000</li>
        <li><strong>Monthly Maintenance:</strong> $100 - $500</li>
      </ul>

      <p>Remember: the cheapest option isn't always the best value. You want someone who will build a website that actually grows your business.</p>

      <h2>How to Research Local Web Designers</h2>

      <p>Here's my step-by-step process for finding the right local web designer:</p>

      <h3>Step 1: Search Locally</h3>
      <p>Start with "web designer near me" or "web designer [your city]." Look at the top results and see who's ranking well—that's a good sign they understand SEO.</p>

      <h3>Step 2: Check Their Own Website</h3>
      <p>If their own website looks outdated or loads slowly, that's a red flag. Their website should be a showcase of their best work.</p>

      <h3>Step 3: Review Their Portfolio</h3>
      <p>Look for websites they've built for businesses in your industry or local area. Do they look professional? Are they mobile-friendly?</p>

      <h3>Step 4: Read Reviews</h3>
      <p>Check Google reviews, Yelp, and other platforms. Look for patterns—are they responsive? Do they deliver on time?</p>

      <h3>Step 5: Schedule Consultations</h3>
      <p>Talk to 2-3 designers before making a decision. The right one will ask good questions and provide clear answers.</p>

      <h2>Working with a Local Web Designer: Best Practices</h2>

      <p>Once you've chosen your local web designer, here's how to ensure a successful project:</p>

      <h3>Be Clear About Your Goals</h3>
      <p>Don't just say "I need a website." Explain what you want the website to accomplish for your business.</p>

      <h3>Provide Content Early</h3>
      <p>The biggest delays in web design projects come from waiting for content. Get your text, images, and other materials ready upfront.</p>

      <h3>Give Timely Feedback</h3>
      <p>When your designer shows you mockups or drafts, respond quickly with specific feedback. This keeps the project moving.</p>

      <h3>Trust Their Expertise</h3>
      <p>You hired them for their expertise. If they recommend something for user experience or SEO reasons, consider their advice seriously.</p>

      <h2>The Bottom Line: Local Web Design Matters</h2>

      <p>When you search "web designer near me," you're making a smart choice. A local web designer who understands your market, your customers, and your competition will build you a website that actually works for your business.</p>

      <p>Take your time, ask the right questions, and choose someone who sees your success as their success. Your website is too important to leave to chance.</p>

      <p>Ready to find your perfect local web designer? Start with these questions, and don't settle for anything less than exactly what your business needs.</p>
    `,
    author: 'Seth Forte',
    date: '2025-01-18',
    readTime: '8 min read',
    category: 'Local Business',
    image: '/images/blog/local-web-designer-guide.webp',
    tags: ['Local Business', 'Web Design', 'SEO', 'Small Business'],
    featured: true
  },
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

const categories = ['All', 'Business', 'Local Business'];

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
            <p className="text-lg sm:text-xl md:text-2xl font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
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
