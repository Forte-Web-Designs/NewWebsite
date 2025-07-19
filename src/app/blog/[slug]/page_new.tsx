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
    excerpt: 'Think you can survive without a website? Think your customers will just find you? In today\'s world, being invisible online means being invisible to your customers. Here\'s why that matters and what you can do about it.',
    content: `
      <p>Let me ask you something: when was the last time you looked for a business in the phone book? When did you last drive around town hoping to stumble upon exactly what you needed? Right. That's not how the world works anymore.</p>

      <p>Yet somehow, there are still business owners who think they can thrive without an online presence. "My customers know where to find me," they say. "Word of mouth is enough." "I don't need all that complicated internet stuff."</p>

      <p>Here's the uncomfortable truth: if your business isn't online, you're invisible to most of your potential customers. And in 2025, being invisible is a choice that could cost you everything.</p>

      <h2>The Real Question Isn't Whether You Need to Be Online</h2>

      <p>The question is: do you want to control how people find you and what they think when they do?</p>

      <p>Because here's what happens when you don't have an online presence:</p>

      <ul>
        <li>Someone searches for your type of business, and your competitors show up instead</li>
        <li>A potential customer tries to find your hours, and they can't</li>
        <li>People want to see your work before they call, but there's nothing to see</li>
        <li>Your competitors tell the story of your industry, and you're not part of it</li>
      </ul>

      <p>But when you do have a proper online presence, something different happens. You become the obvious choice. You're there when people are looking. You're ready with answers when they have questions.</p>

      <h2>What Does "Online Presence" Actually Mean?</h2>

      <p>It's not just having a website. It's being findable, trustworthy, and helpful in the digital spaces where your customers spend their time.</p>

      <p>Think of it this way: if your business were a person, your online presence would be its reputation, its ability to hold a conversation, and its way of showing up consistently in your community.</p>

      <h3>The Foundation: A Website That Works</h3>

      <p>Your website isn't a brochure. It's not a business card. It's your hardest-working employee.</p>

      <p>A good website does three things:</p>
      <ul>
        <li><strong>Answers questions</strong> before people have to ask them</li>
        <li><strong>Builds trust</strong> through social proof and professionalism</li>
        <li><strong>Makes it easy</strong> for people to take the next step</li>
      </ul>

      <p>What does this look like in practice? It means when someone finds your site, they immediately understand what you do, why you're good at it, and how to get started with you.</p>

      <h3>Local Visibility: Being Found When It Matters</h3>

      <p>Most small businesses serve local customers. So when someone in your area searches for what you do, you want to be the first thing they see.</p>

      <p>This isn't about gaming the system. It's about being genuinely helpful and available when people need you.</p>

      <p>Local visibility means:</p>
      <ul>
        <li>Showing up in Google Maps when people search nearby</li>
        <li>Having accurate information everywhere your business is mentioned</li>
        <li>Being part of the conversation in your community</li>
      </ul>

      <h3>Social Proof: Letting Others Tell Your Story</h3>

      <p>People don't just want to know that you exist. They want to know that you're good at what you do.</p>

      <p>Social proof isn't about bragging. It's about showing, not telling. It's customer reviews, project photos, and testimonials that speak for themselves.</p>

      <p>When someone can see that others have worked with you and had a good experience, the decision to choose you becomes easier.</p>

      <h2>But I Don't Have Time for All That Digital Stuff</h2>

      <p>I get it. You're busy running your business. You got into this to do the work you love, not to become a marketing expert.</p>

      <p>But here's the thing: building an online presence isn't about becoming a digital marketing guru. It's about making smart decisions that work for your specific business and your specific customers.</p>

      <p>You don't need to be on every platform. You don't need to post every day. You don't need to understand every algorithm.</p>

      <p>You need to be where your customers are, when they're looking for you, with the information they need to choose you.</p>

      <h2>Starting Right: The Foundation First</h2>

      <p>If you're starting from scratch, don't try to do everything at once. Build a solid foundation first.</p>

      <h3>Step 1: Get Your Story Straight</h3>

      <p>Before you build anything, you need to be clear about what you do and why it matters.</p>

      <p>Ask yourself:</p>
      <ul>
        <li>What problem do I solve for my customers?</li>
        <li>What makes me different from my competitors?</li>
        <li>What do my best customers have in common?</li>
      </ul>

      <p>Your online presence should tell this story clearly and consistently everywhere it appears.</p>

      <h3>Step 2: Claim Your Digital Real Estate</h3>

      <p>Get your domain name. Set up your Google My Business profile. Make sure your business information is consistent across all platforms.</p>

      <p>This isn't glamorous work, but it's essential. It's like putting up a sign for your business—people need to know where to find you.</p>

      <h3>Step 3: Build a Website That Works</h3>

      <p>Your website should do three things well:</p>
      <ul>
        <li><strong>Explain what you do</strong> clearly and simply</li>
        <li><strong>Show that you're good at it</strong> through examples and testimonials</li>
        <li><strong>Make it easy to get started</strong> with clear contact information and calls to action</li>
      </ul>

      <p>Don't overcomplicate this. A simple, professional website that loads quickly and works on phones is infinitely better than a fancy site that confuses people.</p>

      <h3>Step 4: Get Found Locally</h3>

      <p>Make sure your business shows up when people search for your services in your area.</p>

      <p>This means:</p>
      <ul>
        <li>Optimizing your Google My Business profile</li>
        <li>Getting listed in relevant local directories</li>
        <li>Encouraging satisfied customers to leave reviews</li>
      </ul>

      <h2>The Cost of Not Acting</h2>

      <p>Every day you wait is a day your competitors are building relationships with your potential customers.</p>

      <p>Think about it: someone needs your services right now. They're searching online, reading reviews, comparing options. If you're not part of that conversation, you've already lost.</p>

      <p>But it's not just about the customers you're losing today. It's about the compound effect of being invisible while your competitors become the obvious choice in your market.</p>

      <h2>What's Your Next Step?</h2>

      <p>You don't have to transform your entire business overnight. But you do need to start.</p>

      <p>Pick one thing and do it well. Maybe it's finally getting a professional website. Maybe it's cleaning up your Google My Business profile. Maybe it's asking your best customers to leave reviews.</p>

      <p>The key is to start with something that matters to your customers and makes it easier for them to choose you.</p>

      <p>Because at the end of the day, that's what an online presence is really about: being there when your customers need you, with the information they need to make a confident decision.</p>

      <p>Your business deserves to be found. Your customers deserve to find you easily. And you deserve to control how your story is told.</p>

      <p>The question isn't whether you need an online presence. The question is: what are you going to do about it?</p>
    `,
    author: 'Seth Forte',
    date: '2025-07-18',
    readTime: '8 min read',
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
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-white"
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
