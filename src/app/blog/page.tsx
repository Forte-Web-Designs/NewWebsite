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
    id: 'why-your-website-isnt-ranking-and-how-to-fix-it',
    title: 'Why Your Website Isn\'t Ranking (And How to Fix It)',
    excerpt: 'Your website might look great—but if it\'s buried on page 3 of Google, it\'s not doing its job. We work with small businesses across Grapevine and the DFW area who are frustrated by low visibility and missed opportunities.',
    content: `
      <p>Your website might look great—but if it's buried on page 3 of Google, it's not doing its job.</p>

      <p>At Forte Web Designs, we work with small businesses across Grapevine and the DFW area who are frustrated by low visibility and missed opportunities. The truth? Most websites fail to rank because of 3 simple issues—and the good news is, they're fixable.</p>

      <p>Here's what could be holding your site back—and how to turn things around fast.</p>

      <h2>1. Your Site Is Too Slow</h2>

      <p>Google loves fast websites. If your site takes more than 3 seconds to load, you're losing both rankings and customers.</p>

      <p>Most templated builders (Wix, Squarespace, WordPress themes) are bloated with unused code, plugins, and third-party scripts. We hand-code every site from scratch—so it loads fast, ranks faster, and keeps people engaged.</p>

      <h2>2. Your SEO Foundation Is Weak</h2>

      <p>Many small business sites miss the basics:</p>

      <ul>
        <li>No meta titles or descriptions</li>
        <li>No header structure (H1, H2, etc.)</li>
        <li>Missing alt text on images</li>
        <li>No schema or local markup</li>
      </ul>

      <p>Our custom builds include SEO baked in—not bolted on. That's why clients across DFW see gains in search rankings shortly after launch.</p>

      <h2>3. You're Missing Local Signals</h2>

      <p>If you want to rank for "web designer Grapevine" or "plumber in Southlake," your site needs local SEO cues. That means:</p>

      <ul>
        <li>Mentioning cities in content</li>
        <li>Embedding a Google Map</li>
        <li>Creating individual service-area pages</li>
        <li>Consistent Name/Address/Phone (NAP) across the web</li>
      </ul>

      <p>We optimize every site for Dallas–Fort Worth visibility—because if you're local, your SEO should be too.</p>

      <h2>How to Know Where You Stand</h2>

      <p>Don't guess. Get a free, no-pressure audit of your website and SEO. We'll show you what's working, what's broken, and what to fix first.</p>

      <p>👉 <a href="https://www.fortewebdesigns.com/solutions/seotool/" target="_blank" rel="noopener noreferrer">Claim Your Free SiteCheckup™</a></p>

      <h2>Final Word</h2>

      <p>Your website is an asset. But if it's invisible on search engines, it's just an expensive brochure.</p>

      <p>Let's change that.</p>

      <p>📍 Based in Grapevine. Helping small businesses grow across Keller, Southlake, and all of DFW.</p>
    `,
    author: 'Seth Forte',
    date: '2025-08-08',
    readTime: '5 min read',
    category: 'SEO',
    image: '/images/blog/website-ranking-seo.webp',
    tags: ['SEO', 'Website Rankings', 'Google', 'Local SEO', 'DFW'],
    featured: true
  },
  {
    id: 'what-makes-great-web-design-small-business-needs',
    title: 'What Makes a Great Web Design? 5 Things Every Small Business Website Needs',
    excerpt: 'A great website isn\'t just about good looks—it\'s about results. Here are the 5 must-haves for modern web design, especially for small businesses in the Dallas–Fort Worth area.',
    content: `
      <p>A great website isn't just about good looks—it's about results. Whether you're a service provider in Southlake or a retail shop in Grapevine, your site is often the <strong>first impression</strong> customers have of your business.</p>

      <p>At <strong>Forte Web Designs</strong>, we focus on building sites that don't just look good—they load fast, rank high, and convert visitors into customers.</p>

      <p>Here are the 5 must-haves for modern web design, especially for small businesses in the <strong>Dallas–Fort Worth area</strong>.</p>

      <h2>1. Speed & Performance</h2>

      <p>Slow websites kill conversions and SEO. Google favors sites that load quickly—and so do your customers.</p>

      <p>We hand-code every site from scratch, removing bloated code, unnecessary plugins, and anything that slows you down. Your site loads in seconds, even on mobile.</p>

      <h2>2. Mobile-First Design</h2>

      <p>Over 60% of web traffic happens on phones. If your site isn't mobile-friendly, you're losing customers.</p>

      <p>We build every page to be responsive, smooth, and intuitive—whether someone's browsing on a desktop or booking from their phone.</p>

      <h2>3. SEO-Ready Structure</h2>

      <p>Most sites look fine, but they're missing the backend essentials—like proper headings, alt tags, schema markup, and metadata.</p>

      <p>With Forte, <strong>SEO is built in from the ground up</strong>. Our sites are structured to help you rank better on Google in Grapevine, Keller, Southlake, and beyond.</p>

      <h2>4. Clear Call-to-Action</h2>

      <p>Great design should lead somewhere: a call, a booking, a sale.</p>

      <p>We map out your site to guide users step-by-step toward your business goals—whether that's filling out a form or clicking to call.</p>

      <h2>5. Local Focus</h2>

      <p>Your site should help local customers find you. That means local SEO strategies like:</p>

      <ul>
        <li>City-specific service pages</li>
        <li>Local keyword targeting</li>
        <li>Google Maps integration</li>
        <li>Schema that reinforces your <strong>DFW location</strong></li>
      </ul>

      <p>We've helped small businesses across Dallas–Fort Worth rise in search rankings by making their websites locally relevant.</p>

      <h2>Is Your Current Website Helping or Hurting You?</h2>

      <p>A lot of businesses have "decent" sites—but decent doesn't drive growth.</p>

      <p>If your site doesn't check all five boxes, we'll show you exactly what to fix.</p>

      <p>👉 <a href="https://www.fortewebdesigns.com/solutions/seotool/" target="_blank" rel="noopener noreferrer">Claim Your Free Website Audit Now</a></p>

      <p>📍 Proudly building custom websites for businesses in Grapevine, Southlake, Fort Worth, and across DFW.</p>
    `,
    author: 'Seth Forte',
    date: '2025-08-06',
    readTime: '4 min read',
    category: 'Web Design',
    image: '/images/blog/great-web-design-small-business.webp',
    tags: ['Web Design', 'Small Business', 'Performance', 'Mobile Design', 'Local SEO'],
    featured: true
  },
  {
    id: 'hand-coded-vs-page-builders-custom-websites-win',
    title: 'Hand-Coded vs. Page Builders: Why Custom Websites Win in the Long Run',
    excerpt: 'It\'s never been easier to build a website—but not all websites are created equal. Here\'s why small business owners across Grapevine and DFW are shifting back toward custom, hand-coded sites.',
    content: `
      <p>It's never been easier to build a website—but not all websites are created equal. If you've considered Wix, Squarespace, or WordPress themes to save money or time, you're not alone. But there's a reason small business owners across <strong>Grapevine and DFW</strong> are shifting back toward <strong>custom, hand-coded sites</strong>: performance, control, and long-term ROI.</p>

      <p>At <strong>Forte Web Designs</strong>, we hand-code every site from scratch—for good reason.</p>

      <h2>1. Speed That Google Rewards</h2>

      <p>Page builders come loaded with scripts, plugins, and bloated code that slows your site down. Even a beautiful theme can tank your load time—and speed is a direct SEO ranking factor.</p>

      <p>Hand-coded websites strip out the fluff. They're built lean and fast, with just what your business needs—and nothing it doesn't.</p>

      <h2>2. Security You Can Trust</h2>

      <p>The more plugins you use, the more vulnerable your site becomes. One outdated tool can break your layout or expose your data.</p>

      <p>Forte's custom builds rely on clean, minimal code—no plugins, no auto-updates, and no headaches.</p>

      <h2>3. Built Around Your Business Goals</h2>

      <p>Most templates force you to fit <em>your business</em> into <em>their layout.</em> We flip the script. Every custom site is tailored to how your customers actually behave—whether that's calling, booking, or buying.</p>

      <p>With a hand-coded site, the design starts with your goals—not generic blocks.</p>

      <h2>4. SEO That's Baked In, Not Bolted On</h2>

      <p>Template sites often need SEO plugins (Yoast, RankMath, etc.) to get basic functionality. We build every page with clean metadata, proper header structure, alt tags, schema, and optimized code from day one.</p>

      <p>That means your site starts strong—and stays strong in search.</p>

      <h2>5. Real Support from a Local Team</h2>

      <p>With most site builders, you're on your own. At Forte, you get direct access to a <strong>100% USA-based team</strong> that's here for updates, SEO help, or growth ideas. You're not just buying a website—you're getting a partner.</p>

      <h2>Let's Build a Site That's Built to Last</h2>

      <p>If you're ready to stop fighting your website and start growing with it, we're ready to help.</p>

      <p>📍 Serving Grapevine, Southlake, and businesses across Dallas–Fort Worth.</p>

      <p>👉 <a href="https://www.fortewebdesigns.com/solutions/seotool/" target="_blank" rel="noopener noreferrer">Request your free website audit</a> to see how your current site stacks up.</p>
    `,
    author: 'Seth Forte',
    date: '2025-08-02',
    readTime: '4 min read',
    category: 'Web Development',
    image: '/images/blog/hand-coded-vs-page-builders.webp',
    tags: ['Hand-Coded Websites', 'Page Builders', 'Web Development', 'Performance', 'SEO'],
    featured: true
  },
  {
    id: 'web-designers-near-me-why-dfw-needs-more-than-templates',
    title: 'Web Designers Near Me? Why DFW Small Businesses Need More Than Just a Template',
    excerpt: 'If you\'re a small business owner in Grapevine, Southlake, or anywhere across Dallas-Fort Worth, you\'ve probably Googled "web designers near me." Here\'s the truth: most results lead to generic agencies or cookie-cutter platforms.',
    content: `
      <p>If you're a small business owner in Grapevine, Southlake, or anywhere across Dallas-Fort Worth, you've probably Googled something like "web designers near me." But here's the truth: most results lead to generic agencies or cookie-cutter platforms that churn out one-size-fits-all sites.</p>

      <p>Your business isn't generic—and your website shouldn't be either.</p>

      <p>At Forte Web Designs, we work exclusively with small businesses across North Texas to build custom, hand-coded websites that reflect your brand, serve your audience, and actually help you grow.</p>

      <h2>Why Small Businesses Need Specialized Web Design</h2>

      <p>You don't have a Fortune 500 budget. You don't need a bloated site with features you'll never use. You need a website that's lean, fast, and built around your actual goals—whether that's booking appointments, generating calls, or driving foot traffic to your storefront.</p>

      <p>We start by understanding your niche, your customers, and what makes your business unique in Grapevine, DFW, or wherever you serve. From there, we hand-code a site that's tailored—not templated.</p>

      <h2>One-Size-Fits-All = Missed Opportunities</h2>

      <p>Template platforms like Wix, Squarespace, or even mass-agencies often build sites based on what's "easy to scale," not what's best for your business. That means:</p>

      <ul>
        <li>Bloated code that slows down your load time</li>
        <li>Weak SEO that buries you in search results</li>
        <li>Generic layouts that don't convert visitors</li>
        <li>No thought given to local traffic or DFW-specific visibility</li>
      </ul>

      <p>We've seen it happen too many times. Small businesses get a site that looks nice—but doesn't work.</p>

      <h2>Local Design. Real Results.</h2>

      <p>We're based in Grapevine, TX, and we work with small businesses all over the Dallas-Fort Worth area. That means we understand:</p>

      <ul>
        <li>How people in DFW search for services</li>
        <li>What matters to your audience</li>
        <li>How to create calls-to-action that convert in your specific industry</li>
      </ul>

      <p>Whether you're a home services pro in Southlake, a boutique in Fort Worth, or a startup in Frisco—we speak your small business language.</p>

      <h2>Custom Code = Custom Results</h2>

      <p>Every website we build is coded by hand. That means:</p>

      <ul>
        <li>Faster load times for better user experience and higher rankings</li>
        <li>Full SEO control from meta titles to structured data</li>
        <li>Better mobile responsiveness and local optimization</li>
        <li>Scalability as your business grows</li>
      </ul>

      <p>And you won't be left to manage it alone. Our Forte Care™ plans include SEO tuning, performance audits, and updates—so your site stays fresh and functional.</p>

      <h2>When You Search "Web Designers Near Me"—This is What You Actually Need</h2>

      <p>Not just a vendor. Not just a freelancer. A partner who's close by, responsive, and invested in your business growth.</p>

      <p>📍 We're located right here in Grapevine. We build for businesses across Keller, Colleyville, Southlake, Dallas, Fort Worth, and more.</p>

      <h2>Let's Make Your Website Work for You</h2>

      <p>If you're a small business owner looking to get more traffic, more leads, and more visibility in your local market, we're here for it.</p>

      <p>Start with a free 5-point website audit—we'll show you exactly what's holding your site back and how to fix it.</p>

      <p><a href="https://www.fortewebdesigns.com/solutions/seotool/" target="_blank" rel="noopener noreferrer">👉 Claim Your Free Audit Today</a></p>

      <p><em>Proudly built for small businesses. Proudly based in Grapevine. Serving all of DFW.</em></p>
    `,
    author: 'Seth Forte',
    date: '2025-08-01',
    readTime: '5 min read',
    category: 'Web Design',
    image: '/images/home/hero.jpg',
    tags: ['Web Design', 'Local Business', 'DFW', 'Small Business', 'Custom Development'],
    featured: true
  },
  {
    id: 'hand-coded-websites-seo-2025',
    title: '5 Reasons Hand-Coded Websites Outperform Templates for SEO in 2025',
    excerpt: 'In the race to the top of Google, your website\'s structure and speed matter more than ever. Discover why custom-coded websites are the secret weapon behind many top-ranking businesses.',
    content: `
      <p>In the race to the top of Google, your website's structure and speed matter more than ever. At Forte Web Designs, we don't just build sites that look beautiful. We craft high-performance digital engines, hand-coded for maximum SEO impact.</p>

      <p>So why does this approach matter for your rankings in 2025? Let's dive into five reasons custom-coded websites are the secret weapon behind many top-ranking businesses.</p>

      <h2>1. Lightning-Fast Load Speeds That Google Loves</h2>

      <p>Speed is no longer optional. Google's Core Web Vitals (like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS)) are official ranking factors. Hand-coded websites outperform templates because they strip out unnecessary bloat. No unused plugins. No bloated CSS. Just lean, clean code that loads lightning-fast on any device.</p>

      <p>Faster websites don't just please Google. They reduce bounce rates and increase conversions. It's performance that pays off.</p>

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

      <p>No plugin needed. No aftermarket SEO "fixes." Just smart architecture that helps you get found right out of the gate.</p>

      <h2>4. Flexibility to Grow (Without Sacrificing Speed)</h2>

      <p>Template sites often hit a wall when it's time to scale. Want to add e-commerce? Launch a blog? Integrate CRM tools? With custom code, we build exactly what you need without weighing down your site.</p>

      <p>That means your SEO doesn't suffer as your business grows. Instead, it improves over time.</p>

      <h2>5. Ongoing Optimization with Forte Care™</h2>

      <p>Google updates its algorithm hundreds of times per year. Most business owners never notice until their rankings drop.</p>

      <p>Our Forte Care™ plans include proactive SEO maintenance, monthly performance audits, meta updates, and speed tuning. So your site doesn't just launch fast. It stays fast, relevant, and visible.</p>

      <h2>Real Results. Local Impact.</h2>

      <p>We've helped small businesses rank #1 or #2 for high-intent keywords in competitive markets - without spending thousands on ads. Like a construction company that saw traffic jump by 1,300% and leads increase 3X in just a few months.</p>

      <p>Why? Because custom code gives us control - and that control powers results.</p>

      <h2>Ready to Get Found on Google?</h2>

      <p>If your current site isn't showing up where it should, don't guess. Get clarity with a <strong>free 5-point audit</strong> - we'll show you exactly where you stand on speed, SEO structure, mobile performance, and more.</p>

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
    excerpt: 'Clear communication isn\'t just good business - it\'s an act of kindness. Whether you\'re writing an email, designing a website, or having a conversation, clarity helps people understand, decide, and move forward without confusion.',
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
      <p>They should want to understand your business, your goals, and your local market. This isn't just about what you do - it's about who you serve and how you're different from your competition.</p>

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
      <p>Start with "web designer near me" or "web designer [your city]." Look at the top results and see who's ranking well - that's a good sign they understand SEO.</p>

      <h3>Step 2: Check Their Own Website</h3>
      <p>If their own website looks outdated or loads slowly, that's a red flag. Their website should be a showcase of their best work.</p>

      <h3>Step 3: Review Their Portfolio</h3>
      <p>Look for websites they've built for businesses in your industry or local area. Do they look professional? Are they mobile-friendly?</p>

      <h3>Step 4: Read Reviews</h3>
      <p>Check Google reviews, Yelp, and other platforms. Look for patterns - are they responsive? Do they deliver on time?</p>

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

const categories = ['All', 'SEO', 'Business', 'Local Business'];

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
