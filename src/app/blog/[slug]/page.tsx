import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import NewsletterSignup from '@/components/NewsletterSignup';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Blog posts data - In a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'why-every-small-business-needs-online-presence',
    title: 'Why Every Small Business Needs an Online Presence (And How to Start Right)',
    excerpt: 'When was the last time you cracked open a phone book? Walked around town hoping the perfect business would magically appear? Here\'s the truth: if your business isn\'t online, to most people, it doesn\'t exist.',
    content: `
      <p>Let me ask you this. When was the last time you cracked open a phone book? Walked around town hoping the perfect business would magically appear? When was the last time you called a business without a solid looking website and felt confident someone would answer?</p>

      <p>Exactly. That world is gone.</p>

      <p>And yet, some business owners still believe the digital world is optional. "My customers know me." "I've got word of mouth."</p>

      <p>Here's the truth: if your business isn't online, to most people, it doesn't exist. And in 2025, being invisible is the fastest way to fall behind.</p>

      <h2>Do I really need an online presence?</h2>

      <p>Flip the question. When you search for a business, what are you hoping to find?</p>

      <ul>
        <li>Someone real</li>
        <li>Someone credible</li>
        <li>Someone who makes it easy to say "yes"</li>
      </ul>

      <p>Now ask yourself: are you showing up that way?</p>

      <p>Your website, for example, isn't just digital real estate. It's your handshake. Your storefront. Your best pitch... always ready 24/7.</p>

      <h2>So what actually counts as an "online presence"?</h2>

      <p>Think of it like your business's digital footprint:</p>

      <ul>
        <li>A website that works (fast, mobile-friendly, clear)</li>
        <li>A Google Business profile that's accurate and active</li>
        <li>Reviews that build trust</li>
        <li>Local listings that help people find you</li>
        <li>Social media, if you've got something to say</li>
      </ul>

      <p>Together, they answer the customer's silent question: "Can I trust this business?"</p>

      <h2>Four reasons your online presence matters (more than you think):</h2>

      <h3>1. Trust</h3>
      <p>People trust what they can see. And 56% say they won't trust you if you don't have a website. That's not a maybe. That's a dealbreaker.</p>

      <h3>2. Control</h3>
      <p>If people are searching your name, they're going to find something. Make sure it's the right story and not a dead link, outdated listing, or a blank result.</p>

      <h3>3. Experience</h3>
      <p>Your site is your best employee. It should answer questions, show your work, and make it easy to reach you, no follow-ups needed.</p>

      <h3>4. Growth</h3>
      <p>Even the most old-school businesses are scaling faster with a sharp online presence. Because the game isn't just local anymore, it's digital.</p>

      <h2>Where to start (and not get overwhelmed)</h2>

      <h3>Step 1: Know your story</h3>
      <p>Forget all the buzzwords and stories. Just be clear.</p>

      <ul>
        <li>What problem do you solve?</li>
        <li>Why do people come back?</li>
        <li>What do your best customers love about working with you?</li>
      </ul>

      <p>That's your story. Build everything else around that.</p>

      <h3>Step 2: Own your name</h3>
      <p>Secure your domain. Set up your Google profile. Lock in your business info across the web.</p>

      <p>It's the modern version of putting a sign on your building. If people can't find you, you don't exist.</p>

      <h3>Step 3: Build the kind of website that actually helps</h3>
      <p>And this is the most important part. The colors of your website matter far less than the accessibility of your website.</p>

      <p>You need a site that:</p>

      <ul>
        <li>Loads quickly</li>
        <li>Looks clean and professional</li>
        <li>Explains what you do in plain English</li>
        <li>Makes it easy to book, call, or ask a question</li>
      </ul>

      <p>If your site confuses people, you're losing them.</p>

      <h3>Step 4: Get visible where it matters</h3>
      <p>You want to be the business that pops up when someone in your town types "best [your service] near me."</p>

      <p>How?</p>

      <ul>
        <li>Keep your Google Business profile up to date</li>
        <li>Ask your happy customers to leave reviews</li>
        <li>Get listed in places where people already search</li>
      </ul>

      <p>You don't have to have a masters in marketing degree to do this.</p>

      <p>You started your business to do what you're great at, so don't try to master everything. Just:</p>

      <ul>
        <li>Show up where your customers look</li>
        <li>Make it easy for them to say "yes"</li>
        <li>Be consistent</li>
      </ul>

      <p>That's it. That's the whole play.</p>

      <h2>The cost of hiding in plain sight</h2>

      <p>Every time someone searches and doesn't find you, you're handing business to your competitors.</p>

      <p>And no, it's not about chasing trends or posting on TikTok. It's about showing up, clearly, confidently, and consistently.</p>

      <h2>TL;DR: Start here</h2>

      <ul>
        <li>Get a domain</li>
        <li>Launch a clean website</li>
        <li>Set up your Google profile</li>
        <li>Ask for reviews</li>
      </ul>

      <p>You don't need to be flashy. You just need to be present.</p>

      <p>And if you want help building a site that actually works? That's what we do at Forte Web Designs.</p>

      <p>Let's build something that earns trust, and turns clicks into customers.</p>
    `,
    author: 'Seth Forte',
    date: '2025-07-18',
    readTime: '6 min read',
    category: 'Business',
    image: '/images/blog/online-presence-business.webp',
    tags: ['Online Presence', 'Small Business', 'Digital Marketing', 'Website'],
    featured: true
  }
];

// Generate static params for all blog posts (required for static export)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | Forte Web Designs Blog`,
    description: post.excerpt,
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

// Main blog post component
export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);
  
  if (!post) {
    notFound();
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      {/* Article Header */}
      <section className="pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900 dark:text-white">{post.title}</span>
          </nav>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(tag => (
                <span key={tag} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <span>{post.author}</span>
              </div>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-semibold prose-headings:mb-8 prose-headings:mt-12
                prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-4
                prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-12 prose-h3:font-semibold
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:mb-8 prose-p:leading-relaxed prose-p:text-lg
                prose-ul:mb-8 prose-ul:mt-6 prose-li:mb-3 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:leading-relaxed prose-li:text-lg
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:font-medium
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                [&>p:first-child]:mt-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <article key={relatedPost.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {relatedPost.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{relatedPost.readTime}</span>
                    <Link 
                      href={`/blog/${relatedPost.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
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
