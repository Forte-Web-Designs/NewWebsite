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
    id: 'hand-coded-websites-seo-2025',
    title: '5 Reasons Hand-Coded Websites Outperform Templates for SEO in 2025',
    excerpt: 'In the race to the top of Google, your website\'s structure and speed matter more than ever. Discover why custom-coded websites are the secret weapon behind many top-ranking businesses.',
    content: `
      <p>In the race to the top of Google, your website's structure and speed matter more than ever. At Forte Web Designs, we don't just build sites that look beautiful—we craft high-performance digital engines, hand-coded for maximum SEO impact.</p>

      <p>So why does this approach matter for your rankings in 2025? Let's dive into five reasons custom-coded websites are the secret weapon behind many top-ranking businesses.</p>

      <h2>1. Lightning-Fast Load Speeds That Google Loves</h2>

      <p>Speed is no longer optional. Google's Core Web Vitals—like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)—are official ranking factors. Hand-coded websites outperform templates because they strip out unnecessary bloat. No unused plugins. No bloated CSS. Just lean, clean code that loads lightning-fast on any device.</p>

      <p>Faster websites don't just please Google—they reduce bounce rates and increase conversions. It's performance that pays off.</p>

      <h2>2. Clean Code = Better Crawlability</h2>

      <p>Think of Google's bots like librarians. The cleaner and more organized your "book" is, the easier it is to catalogue. Hand-coded websites allow us to structure headers logically (H1, H2, H3), simplify navigation, and create sitemap and robots.txt files tailored to your site's needs.</p>

      <p>Unlike page builders that hide messy code behind slick visuals, our sites are optimized for search engines <em>and</em> humans.</p>

      <h2>3. Built-In SEO From Day One</h2>

      <p>Every Forte site is designed with SEO in its DNA. That means:</p>

      <ul>
        <li>Custom meta titles and descriptions on every page</li>
        <li>Keyword-friendly URLs</li>
        <li>ALT text on all images</li>
        <li>Schema markup for local business, reviews, and services</li>
        <li>Canonical tags to avoid duplicate content issues</li>
      </ul>

      <p>No plugin needed. No aftermarket SEO "fixes." Just smart architecture that helps you get found—right out of the gate.</p>

      <h2>4. Flexibility to Grow (Without Sacrificing Speed)</h2>

      <p>Template sites often hit a wall when it's time to scale. Want to add e-commerce? Launch a blog? Integrate CRM tools? With custom code, we build exactly what you need—without weighing down your site.</p>

      <p>That means your SEO doesn't suffer as your business grows. Instead, it improves over time.</p>

      <h2>5. Ongoing Optimization with Forte Care™</h2>

      <p>Google updates its algorithm hundreds of times per year. Most business owners never notice—until their rankings drop.</p>

      <p>Our Forte Care™ plans include proactive SEO maintenance, monthly performance audits, meta updates, and speed tuning. So your site doesn't just launch fast—it stays fast, relevant, and visible.</p>

      <h2>Real Results. Local Impact.</h2>

      <p>We've helped small businesses rank #1 or #2 for high-intent keywords in competitive markets—without spending thousands on ads. Like a construction company that saw traffic jump by 1,300% and leads increase 3X in just a few months.</p>

      <p>Why? Because custom code gives us control—and that control powers results.</p>

      <h2>Ready to Get Found on Google?</h2>

      <p>If your current site isn't showing up where it should, don't guess. Get clarity with a <strong>free 5-point audit</strong>—we'll show you exactly where you stand on speed, SEO structure, mobile performance, and more.</p>

      <p><a href="https://www.fortewebdesigns.com/?utm_source=blog&campaign=seo-post" target="_blank" rel="noopener noreferrer">👉 Request your free SEO audit here</a></p>

      <p>And when you're ready to build a site that actually works <em>for</em> your business, we're here.</p>
    `,
    author: 'Seth Forte',
    date: '2025-07-28',
    readTime: '6 min read',
    category: 'SEO',
    image: '/images/home/hero.jpg',
    tags: ['SEO', 'Hand-Coded Websites', 'Web Performance', 'Custom Development', 'Google Rankings'],
    featured: true
  },
  {
    id: 'clarity-is-kindness-life-online',
    title: 'Clarity Is Kindness (In Life and Online)',
    excerpt: 'Clear communication isn\'t just good business—it\'s an act of kindness. Whether you\'re writing an email, designing a website, or having a conversation, clarity helps people understand, decide, and move forward without confusion.',
    content: `
      <p>Clarity is kindness.</p>

      <p>I learned this from a mentor years ago, and it's stuck with me ever since. Clear communication isn't just good business—it's an act of kindness.</p>

      <p>When you're clear, you help people understand. You help them make decisions. You help them move forward without confusion, second-guessing, or that nagging feeling that they're missing something important.</p>

      <p>And nowhere is this more important than online.</p>

      <h2>Why clarity matters more online</h2>

      <p>In person, we have context. Body language. Tone of voice. The ability to ask "wait, what did you mean by that?"</p>

      <p>Online? You get words on a screen. And if those words aren't clear, people make assumptions. Usually wrong ones.</p>

      <p>I see this everywhere:</p>

      <ul>
        <li>Websites that explain what they do in corporate speak nobody understands</li>
        <li>Emails that take three readings to figure out what someone actually wants</li>
        <li>Service descriptions that sound impressive but tell you nothing</li>
        <li>Contact forms that ask for everything except what they actually need</li>
      </ul>

      <p>Each unclear message is a small cruelty. You're making people work harder than they need to.</p>

      <h2>What clarity looks like in practice</h2>

      <h3>On your website</h3>
      <p>Instead of "We leverage synergistic solutions to optimize your digital presence," try "We build websites that help your business grow."</p>

      <p>Instead of burying your phone number in the footer, put it in the header where people expect to find it.</p>

      <p>Instead of making people guess what you do, tell them in the first sentence they read.</p>

      <h3>In your emails</h3>
      <p>Start with what you need. "Can you send me the final logo by Friday?" is better than three paragraphs that eventually get to the point.</p>

      <p>Use bullet points. People scan emails, they don't read them like novels.</p>

      <p>Be specific about deadlines, expectations, and next steps.</p>

      <h3>In your service descriptions</h3>
      <p>Tell people what they'll get, when they'll get it, and what it costs. Don't make them guess.</p>

      <p>Explain your process. People want to know what working with you actually looks like.</p>

      <p>Be honest about what you don't do. It saves everyone time.</p>

      <h2>The cost of confusion</h2>

      <p>When you're unclear, people don't just move on. They often assume the worst.</p>

      <p>A confusing website makes people think you're unprofessional.</p>

      <p>A vague email makes people think you don't know what you're doing.</p>

      <p>An unclear service description makes people think you're trying to hide something.</p>

      <p>And in every case, they're more likely to go somewhere else. Somewhere clearer.</p>

      <h2>How to be clearer (starting today)</h2>

      <h3>Use simple words</h3>
      <p>If there's a simpler way to say something, use it. "Help" instead of "facilitate." "Use" instead of "utilize." "Start" instead of "commence."</p>

      <p>Your goal isn't to sound smart. It's to be understood.</p>

      <h3>Cut the fluff</h3>
      <p>Every word should earn its place. If you can delete it without changing the meaning, delete it.</p>

      <p>"We are pleased to inform you that..." just say "You qualified for..."</p>

      <p>"In order to..." just say "To..."</p>

      <h3>Lead with the important stuff</h3>
      <p>Put the most important information first. Whether it's an email subject line, a website headline, or a service description.</p>

      <p>People decide in seconds whether to keep reading. Give them a reason.</p>

      <h3>Test your clarity</h3>
      <p>Read your writing out loud. If you stumble, others will too.</p>

      <p>Ask someone else to read it. Can they explain back to you what you meant?</p>

      <p>Better yet, ask them to complete the task your writing is asking for. Where do they get confused?</p>

      <h2>Clarity in web design</h2>

      <p>Clear communication isn't just about words. It's about design, navigation, and user experience.</p>

      <p>A clear website:</p>

      <ul>
        <li>Tells people what you do within seconds of landing on it</li>
        <li>Makes it obvious how to contact you</li>
        <li>Uses navigation labels people actually understand</li>
        <li>Loads fast enough that people don't leave while waiting</li>
        <li>Works on mobile without making people pinch and zoom</li>
      </ul>

      <p>Every design choice should make things clearer, not prettier. Pretty is nice. Clear is necessary.</p>

      <h2>When clarity feels like giving up personality</h2>

      <p>I get it. Clear can feel boring. Corporate. Like you're losing your voice.</p>

      <p>But here's the thing: you can be clear and still have personality. You can be simple and still be memorable.</p>

      <p>Look at the best brands. Apple doesn't say "revolutionary mobile communication device." They say "iPhone."</p>

      <p>Nike doesn't say "athletic footwear designed to optimize performance." They say "Just do it."</p>

      <p>Clear doesn't mean boring. It means your personality comes through in the way you say things, not in making people work to understand what you're saying.</p>

      <h2>The ripple effect of clarity</h2>

      <p>When you communicate clearly:</p>

      <ul>
        <li>People trust you more because they understand you</li>
        <li>Projects go smoother because everyone knows what's expected</li>
        <li>You waste less time explaining what you meant</li>
        <li>People are more likely to say yes because they know what they're saying yes to</li>
        <li>You build a reputation as someone who's easy to work with</li>
      </ul>

      <p>Clarity compounds. Every clear email, every clear website, every clear conversation builds trust and makes the next interaction easier.</p>

      <h2>Start where you are</h2>

      <p>You don't have to rewrite everything today. Start small:</p>

      <ul>
        <li>Next email you send: lead with what you need</li>
        <li>Next website update: cut one unnecessary word from every sentence</li>
        <li>Next conversation: ask "does that make sense?" and actually listen to the answer</li>
      </ul>

      <p>Clarity is a practice, not a destination. And every time you choose to be clearer, you're choosing to be kinder.</p>

      <p>Because when you help people understand, you help them succeed. And that's the best kind of kindness there is.</p>

      <h2>The bottom line</h2>

      <p>Clear communication is kind communication. It respects people's time, reduces their stress, and helps them make good decisions.</p>

      <p>Whether you're writing a website, sending an email, or having a conversation, ask yourself: "Am I being as clear as I can be?"</p>

      <p>Your audience will thank you. And your business will too.</p>
    `,
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
