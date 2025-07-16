import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import EmailCapture from '@/components/EmailCapture';
import NewsletterSignup from '@/components/NewsletterSignup';

// Blog posts data - In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'local-seo-small-business-2025',
    title: 'Local SEO for Small Businesses: The Complete 2025 Guide',
    excerpt: 'Master local SEO to dominate "near me" searches and attract more local customers. Everything you need to know about Google My Business, local citations, and location-based optimization.',
    content: `
      <p>If you're a small business owner who wants more customers walking through your door or calling your phone, local SEO is your secret weapon. In 2025, local search is more important than ever, with over 76% of people who search for something nearby visiting a business within a day.</p>

      <h2>What is Local SEO and Why Does It Matter?</h2>
      <p>Local SEO is the practice of optimizing your online presence to attract more business from relevant local searches. When someone in your area searches for "plumber near me" or "best restaurant in Dallas," you want your business to show up at the top.</p>

      <p>Here's why local SEO is crucial for your business:</p>
      <ul>
        <li><strong>Immediate Intent:</strong> Local searchers are ready to buy or visit</li>
        <li><strong>High Conversion:</strong> "Near me" searches convert 28% higher than regular searches</li>
        <li><strong>Mobile Dominance:</strong> 60% of local searches happen on mobile devices</li>
        <li><strong>Competitive Advantage:</strong> Many local businesses still ignore SEO</li>
      </ul>

      <h2>Step 1: Optimize Your Google My Business Profile</h2>
      <p>Your Google My Business (GMB) profile is the foundation of local SEO. It's often the first thing potential customers see when they search for your business or services.</p>

      <h3>Essential GMB Optimization Tips:</h3>
      <ul>
        <li><strong>Complete Every Section:</strong> Fill out your business name, address, phone number, website, hours, and description</li>
        <li><strong>Choose the Right Categories:</strong> Select your primary category carefully - it significantly impacts your rankings</li>
        <li><strong>Add High-Quality Photos:</strong> Businesses with photos get 42% more requests for directions</li>
        <li><strong>Collect and Respond to Reviews:</strong> Aim for at least 10 fresh reviews per month</li>
        <li><strong>Post Regular Updates:</strong> Share news, offers, and events to keep your profile active</li>
      </ul>

      <h2>Step 2: Build Local Citations</h2>
      <p>Local citations are mentions of your business name, address, and phone number (NAP) on other websites. They act like votes of confidence for your business location.</p>

      <h3>Top Citation Sources for 2025:</h3>
      <ul>
        <li>Yelp</li>
        <li>Facebook Business</li>
        <li>Yellowpages.com</li>
        <li>Foursquare</li>
        <li>Industry-specific directories</li>
        <li>Local chamber of commerce</li>
      </ul>

      <p><strong>Pro Tip:</strong> Ensure your NAP information is identical across all platforms. Even small differences can hurt your rankings.</p>

      <h2>Step 3: Create Location-Specific Content</h2>
      <p>Content that mentions your city, neighborhood, or region helps Google understand where you're located and who you serve.</p>

      <h3>Local Content Ideas:</h3>
      <ul>
        <li>Local event sponsorships or participation</li>
        <li>Community involvement stories</li>
        <li>Local industry news and insights</li>
        <li>Customer spotlights from your area</li>
        <li>Location-specific service pages</li>
      </ul>

      <h2>Step 4: Get More Online Reviews</h2>
      <p>Reviews are a major ranking factor for local search. Businesses with more positive reviews rank higher and attract more customers.</p>

      <h3>Review Generation Strategy:</h3>
      <ul>
        <li><strong>Ask at the Right Time:</strong> Request reviews when customers are happiest</li>
        <li><strong>Make It Easy:</strong> Send direct links to your review profiles</li>
        <li><strong>Follow Up:</strong> Send review requests via email or text</li>
        <li><strong>Respond to All Reviews:</strong> Thank positive reviewers and address concerns professionally</li>
      </ul>

      <h2>Step 5: Optimize for Voice Search</h2>
      <p>With the rise of smartphones and smart speakers, voice search is becoming increasingly important for local businesses.</p>

      <h3>Voice Search Optimization Tips:</h3>
      <ul>
        <li>Focus on conversational, long-tail keywords</li>
        <li>Include FAQ sections on your website</li>
        <li>Optimize for "near me" searches</li>
        <li>Ensure your website loads quickly on mobile</li>
      </ul>

      <h2>Common Local SEO Mistakes to Avoid</h2>
      <ul>
        <li><strong>Inconsistent NAP Information:</strong> Different addresses or phone numbers across platforms</li>
        <li><strong>Ignoring Mobile Optimization:</strong> Your website must work perfectly on phones</li>
        <li><strong>Fake Reviews:</strong> Google can detect and penalize fake reviews</li>
        <li><strong>Keyword Stuffing:</strong> Overusing location keywords looks spammy</li>
        <li><strong>Neglecting Website Speed:</strong> Slow sites rank lower and convert worse</li>
      </ul>

      <h2>Measuring Your Local SEO Success</h2>
      <p>Track these key metrics to see how your local SEO efforts are paying off:</p>
      <ul>
        <li><strong>Google My Business Insights:</strong> Views, clicks, calls, and direction requests</li>
        <li><strong>Local Keyword Rankings:</strong> Where you rank for important local searches</li>
        <li><strong>Website Traffic from Local Sources:</strong> Visitors from your city or region</li>
        <li><strong>Phone Calls and Form Submissions:</strong> Actual business inquiries</li>
        <li><strong>Online Reviews:</strong> Number and average rating of reviews</li>
      </ul>

      <h2>Local SEO in 2025: What's New</h2>
      <p>Stay ahead of the competition with these emerging local SEO trends:</p>
      <ul>
        <li><strong>AI-Powered Local Search:</strong> Google's AI is getting better at understanding local intent</li>
        <li><strong>Video Content:</strong> Local businesses using video see 41% more web traffic</li>
        <li><strong>Sustainability Focus:</strong> Eco-friendly businesses are getting preference in some local searches</li>
        <li><strong>Hyper-Local Targeting:</strong> Neighborhood-specific optimization is becoming more important</li>
      </ul>

      <h2>Getting Professional Help</h2>
      <p>Local SEO can be complex and time-consuming. If you're feeling overwhelmed or not seeing results, consider working with a professional who specializes in local SEO for small businesses.</p>

      <p>A good local SEO partner will:</p>
      <ul>
        <li>Audit your current local presence</li>
        <li>Optimize your Google My Business profile</li>
        <li>Build high-quality local citations</li>
        <li>Create a review generation system</li>
        <li>Develop location-specific content</li>
        <li>Provide monthly reporting and optimization</li>
      </ul>

      <p>Remember, local SEO is a marathon, not a sprint. Consistent effort over time will help you dominate local search results and attract more customers to your business.</p>
    `,
    author: 'Seth Mitchell',
    date: '2025-01-15',
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
    content: `
      <p>Your website speed isn't just a technical detail—it's a revenue driver. Studies show that a 1-second delay in page load time can reduce conversions by 7%. For a business making $100,000 per year online, that's $7,000 lost annually from just one extra second of load time.</p>

      <h2>The Real Cost of Slow Websites</h2>
      <p>Let's talk numbers that matter to your bottom line:</p>
      <ul>
        <li><strong>Amazon found</strong> that every 100ms of latency cost them 1% in sales</li>
        <li><strong>Walmart discovered</strong> that for every 1-second improvement, conversions increased by 2%</li>
        <li><strong>Pinterest reduced</strong> wait times by 40% and saw a 15% increase in SEO traffic</li>
        <li><strong>BBC found</strong> they lost an additional 10% of users for every additional second their site took to load</li>
      </ul>

      <h2>Why Speed Matters More Than Ever in 2025</h2>
      <p>Several factors make website speed crucial for modern businesses:</p>
      
      <h3>1. Mobile-First World</h3>
      <p>Over 60% of web traffic comes from mobile devices, and mobile users are even less patient than desktop users. Mobile users expect pages to load in under 3 seconds, yet the average mobile page takes 15 seconds to load.</p>

      <h3>2. Google's Page Experience Update</h3>
      <p>Google now uses Core Web Vitals as a ranking factor. Slow websites don't just lose customers—they lose search visibility too.</p>

      <h3>3. Increased Competition</h3>
      <p>With more businesses online than ever, users have countless alternatives. If your site is slow, they'll simply go to a competitor.</p>

      <h2>How to Measure Your Website Speed</h2>
      <p>Before you can improve your speed, you need to know where you stand. Use these tools:</p>
      
      <ul>
        <li><strong>Google PageSpeed Insights:</strong> Free tool that shows mobile and desktop scores</li>
        <li><strong>GTmetrix:</strong> Detailed performance analysis with actionable recommendations</li>
        <li><strong>Pingdom:</strong> Real-world testing from multiple locations</li>
        <li><strong>WebPageTest:</strong> Advanced testing with waterfall charts</li>
      </ul>

      <h3>Key Metrics to Track:</h3>
      <ul>
        <li><strong>First Contentful Paint (FCP):</strong> When users see the first content (should be under 1.8 seconds)</li>
        <li><strong>Largest Contentful Paint (LCP):</strong> When the main content loads (should be under 2.5 seconds)</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> How much content moves around (should be under 0.1)</li>
        <li><strong>First Input Delay (FID):</strong> How quickly your site responds to user interactions (should be under 100ms)</li>
      </ul>

      <h2>12 Ways to Speed Up Your Website</h2>

      <h3>1. Optimize Images</h3>
      <p>Images often account for 60-70% of a page's total size. Here's how to optimize them:</p>
      <ul>
        <li>Use WebP format when possible (30% smaller than JPEG)</li>
        <li>Compress images before uploading</li>
        <li>Use appropriate dimensions (don't load 4K images for 300px spaces)</li>
        <li>Implement lazy loading for images below the fold</li>
      </ul>

      <h3>2. Choose Fast Web Hosting</h3>
      <p>Your hosting provider significantly impacts your site speed. Look for:</p>
      <ul>
        <li>SSD storage instead of traditional hard drives</li>
        <li>Content Delivery Network (CDN) integration</li>
        <li>Server locations near your target audience</li>
        <li>Good uptime track record (99.9% or better)</li>
      </ul>

      <h3>3. Minimize HTTP Requests</h3>
      <p>Every element on your page (images, scripts, stylesheets) requires a separate HTTP request. Reduce these by:</p>
      <ul>
        <li>Combining CSS and JavaScript files</li>
        <li>Using CSS sprites for small images</li>
        <li>Removing unnecessary plugins and widgets</li>
        <li>Inline small CSS and JavaScript</li>
      </ul>

      <h3>4. Enable Browser Caching</h3>
      <p>Browser caching stores static files locally so return visitors don't have to download them again. Set cache expiration times for:</p>
      <ul>
        <li>Images: 1 year</li>
        <li>CSS and JavaScript: 1 year</li>
        <li>HTML pages: 1 day to 1 week</li>
      </ul>

      <h3>5. Use a Content Delivery Network (CDN)</h3>
      <p>CDNs serve your content from servers closest to your users. Popular options include:</p>
      <ul>
        <li>Cloudflare (free tier available)</li>
        <li>Amazon CloudFront</li>
        <li>MaxCDN</li>
        <li>KeyCDN</li>
      </ul>

      <h3>6. Minimize and Compress Code</h3>
      <p>Remove unnecessary characters from your code:</p>
      <ul>
        <li>Minify CSS, JavaScript, and HTML</li>
        <li>Enable Gzip compression on your server</li>
        <li>Remove unused CSS and JavaScript</li>
        <li>Use modern compression like Brotli when possible</li>
      </ul>

      <h3>7. Optimize Your Database</h3>
      <p>For WordPress and other CMS sites:</p>
      <ul>
        <li>Regularly clean up spam comments and revisions</li>
        <li>Optimize database tables</li>
        <li>Remove unused plugins and themes</li>
        <li>Use database caching</li>
      </ul>

      <h3>8. Reduce Redirects</h3>
      <p>Each redirect adds extra HTTP requests and load time:</p>
      <ul>
        <li>Audit your site for unnecessary redirects</li>
        <li>Update internal links to point directly to final URLs</li>
        <li>Use 301 redirects instead of 302 when permanent</li>
      </ul>

      <h3>9. Optimize Above-the-Fold Content</h3>
      <p>Prioritize loading content that users see first:</p>
      <ul>
        <li>Inline critical CSS</li>
        <li>Defer non-critical JavaScript</li>
        <li>Prioritize above-the-fold images</li>
        <li>Use resource hints (preload, prefetch, preconnect)</li>
      </ul>

      <h3>10. Choose Efficient Plugins and Themes</h3>
      <p>Some plugins and themes are speed killers:</p>
      <ul>
        <li>Audit plugin performance with tools like Query Monitor</li>
        <li>Choose lightweight, well-coded themes</li>
        <li>Avoid page builders when possible</li>
        <li>Remove social sharing plugins (use native sharing instead)</li>
      </ul>

      <h3>11. Optimize Web Fonts</h3>
      <p>Web fonts can slow down your site significantly:</p>
      <ul>
        <li>Limit the number of font families and weights</li>
        <li>Use font-display: swap for better loading</li>
        <li>Preload important fonts</li>
        <li>Consider system fonts for better performance</li>
      </ul>

      <h3>12. Regular Performance Monitoring</h3>
      <p>Speed optimization is ongoing:</p>
      <ul>
        <li>Set up automated monitoring with tools like Google PageSpeed Insights API</li>
        <li>Test speed after adding new content or plugins</li>
        <li>Monitor Core Web Vitals in Google Search Console</li>
        <li>Conduct regular performance audits</li>
      </ul>

      <h2>The Business Impact of Speed Optimization</h2>
      <p>Here's what you can expect when you optimize your website speed:</p>

      <h3>Immediate Benefits:</h3>
      <ul>
        <li><strong>Higher Conversion Rates:</strong> Faster sites convert 2-3x better</li>
        <li><strong>Lower Bounce Rates:</strong> Users stay longer on fast-loading sites</li>
        <li><strong>Better SEO Rankings:</strong> Google favors fast websites</li>
        <li><strong>Improved User Experience:</strong> Happy users become customers</li>
      </ul>

      <h3>Long-term Benefits:</h3>
      <ul>
        <li><strong>Increased Revenue:</strong> Better conversions mean more sales</li>
        <li><strong>Reduced Server Costs:</strong> Optimized sites use fewer resources</li>
        <li><strong>Competitive Advantage:</strong> Most businesses ignore speed</li>
        <li><strong>Better Mobile Performance:</strong> Critical for mobile commerce</li>
      </ul>

      <h2>When to Get Professional Help</h2>
      <p>Consider hiring a speed optimization specialist if:</p>
      <ul>
        <li>Your PageSpeed scores are below 70</li>
        <li>Your site takes more than 3 seconds to load</li>
        <li>You've tried basic optimizations without success</li>
        <li>You don't have time to learn technical optimization</li>
        <li>You want to focus on running your business instead of technical details</li>
      </ul>

      <p>Remember: every second counts. A fast website isn't just a nice-to-have—it's essential for business success in 2025.</p>
    `,
    author: 'Seth Mitchell',
    date: '2025-01-12',
    readTime: '6 min read',
    category: 'Performance',
    image: '/images/blog/website-speed.webp',
    tags: ['Website Speed', 'Conversions', 'Performance', 'Revenue'],
    featured: true
  }
  // Add more blog posts here...
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Forte Web Designs Blog',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Forte Web Designs Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === params.slug);

  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      <article className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <li><Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><span className="text-gray-900 dark:text-gray-200">{post.title}</span></li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">SM</span>
                </div>
                <span>By {post.author}</span>
              </div>
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>{post.readTime}</span>
            </div>

            {/* Featured Image Placeholder */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-8">
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center px-6">{post.title}</h2>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Need Help Implementing These Strategies?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Don't have time to handle all the technical details? Our team at Forte Web Designs specializes in helping small businesses grow online. Let us handle the implementation while you focus on running your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Get a Free Consultation
                </Link>
                <Link 
                  href="/services"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-semibold px-8 py-3 rounded-lg border border-blue-600 dark:border-blue-400 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">SM</span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Seth Mitchell</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Seth is the founder of Forte Web Designs and has been helping small businesses grow online for over 10 years. 
                  He specializes in practical, results-driven strategies that actually work for real businesses. When he's not optimizing websites or analyzing SEO data, 
                  you can find him exploring Dallas with his family or working on his next business project.
                </p>
                <div className="mt-3">
                  <Link href="/about" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    Learn more about Seth →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900/50 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-40 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <span className="text-xs font-semibold text-gray-800">{relatedPost.category}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
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
      )}

      {/* Newsletter Signup */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
