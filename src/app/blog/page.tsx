import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata: Metadata = {
  title: 'Writing | Forte Web Designs',
  description: 'Insights on AI automation, business systems, and growth strategy.',
};

const blogPosts = [
  {
    id: 'ai-bubble-part-6-what-happens-when-bubble-pops',
    title: 'What Happens When The Bubble Pops',
    excerpt: 'Two scenarios for the AI crash. Neither are pretty. The loud pop vs. the slow deflation, and what it means for developers and businesses building with AI.',
    date: '2025-12-17',
    readTime: '8 min',
    category: 'AI Industry',
  },
  {
    id: 'ai-bubble-part-5-threat-from-below',
    title: 'The Threat From Below',
    excerpt: 'Local models are eating the market while OpenAI burns cash chasing AGI. The mega-model dilemma and why cheap, focused AI is winning.',
    date: '2025-12-16',
    readTime: '7 min',
    category: 'AI Industry',
  },
  {
    id: 'ai-bubble-part-4-agi-gamble',
    title: 'The AGI Gamble',
    excerpt: "OpenAI is betting everything on a breakthrough that probably isn't coming. Why the AGI timeline doesn't add up and what it means for the bubble.",
    date: '2025-12-15',
    readTime: '8 min',
    category: 'AI Industry',
  },
  {
    id: 'ai-bubble-part-3-math-doesnt-work',
    title: "The Math That Doesn't Work",
    excerpt: '$560 billion invested, $35 billion in revenue. That\'s a 16:1 ratio. The AI bubble by the numbers, and why the math is worse than most people realize.',
    date: '2025-12-14',
    readTime: '7 min',
    category: 'AI Industry',
  },
  {
    id: 'ai-bubble-part-2-what-happens-when-bubbles-pop',
    title: 'What Happens When Bubbles Pop',
    excerpt: "The dot-com crash shows us exactly what's coming for AI. 60% of companies failed, $5–7 trillion evaporated. But the survivors became Google, Amazon, and eBay.",
    date: '2025-12-13',
    readTime: '7 min',
    category: 'AI Industry',
  },
  {
    id: 'ai-bubble-part-1-what-is-a-bubble',
    title: 'The AI Bubble Is Real (And I Can Prove It With Netflix)',
    excerpt: "I've been thinking about the AI bubble for months. Not whether it exists. It definitely exists. But what happens when it pops.",
    date: '2025-12-12',
    readTime: '6 min',
    category: 'AI Industry',
  },
  {
    id: 'business-automation-roi-guide-2025',
    title: 'The Complete ROI Guide to Business Automation in 2025',
    excerpt: 'Real case studies showing $52K+ in annual savings, 1,040+ hours saved, and 340% first-year returns. Complete guide with calculations and proven results.',
    date: '2025-10-15',
    readTime: '12 min',
    category: 'ROI & Analytics',
  },
  {
    id: 'ai-automation-myths-small-business-owners-believe',
    title: "5 AI Automation Myths Small Business Owners Believe (And Why They're Wrong)",
    excerpt: "AI automation isn't just for Fortune 500 companies. Small businesses are using intelligent systems to save 15+ hours per week and scale without hiring.",
    date: '2025-10-10',
    readTime: '7 min',
    category: 'AI Automation',
  },
  {
    id: 'business-growth-2025-strategy-automation-beat-guesswork',
    title: 'Business Growth in 2025: Why Strategy and Automation Beat Guesswork',
    excerpt: "In today's market, business growth isn't luck - it's a system. The businesses winning in 2025 are using data, automation, and consistent systems.",
    date: '2025-09-26',
    readTime: '7 min',
    category: 'Business Growth',
  },
  {
    id: '30-90-day-ai-playbook-small-service-businesses',
    title: 'The 30–90 Day AI Playbook for Small Service Businesses',
    excerpt: 'A practical, non-technical plan to cut response times, send quotes same-day, and reclaim 5–20 hours/week using light-touch automation and AI.',
    date: '2025-09-30',
    readTime: '8 min',
    category: 'AI Automation',
  },
  {
    id: 'mobile-first-web-design-essential-2025-dfw',
    title: "Mobile-First Web Design: Why It's Essential in 2025",
    excerpt: 'Over 60% of website traffic comes from mobile devices. If your website isn\'t built mobile-first, you\'re losing leads and revenue to competitors who prioritize mobile.',
    date: '2025-08-22',
    readTime: '8 min',
    category: 'Web Design',
  },
  {
    id: 'dallas-web-design-building-site-stands-out-locally',
    title: 'Dallas Web Design: Building a Site That Stands Out Locally',
    excerpt: "Local web design isn't just about looking good - it's about connecting with your community, ranking in local searches, and building trust with neighbors who become customers.",
    date: '2025-08-18',
    readTime: '9 min',
    category: 'Web Design',
  },
  {
    id: 'website-mistakes-costing-dfw-businesses-customers',
    title: '5 Website Mistakes That Are Costing DFW Businesses Customers',
    excerpt: 'From slow loading times to poor mobile design, these common errors could be costing your business thousands. Here\'s how to identify and fix them.',
    date: '2025-08-15',
    readTime: '8 min',
    category: 'Web Design',
  },
  {
    id: 'web-designers-near-me-how-to-choose-right-one-dfw',
    title: 'Web Designers Near Me: How to Choose the Right One in DFW',
    excerpt: "If you've searched \"web designers near me\" in the Dallas–Fort Worth area, you've probably been flooded with options. Here's how to find the right one.",
    date: '2025-08-11',
    readTime: '3 min',
    category: 'Web Design',
  },
  {
    id: 'hand-coded-websites-seo-2025',
    title: '5 Reasons Hand-Coded Websites Outperform Templates for SEO in 2025',
    excerpt: "In the race to the top of Google, your website's structure and speed matter more than ever. Discover why custom-coded websites are the secret weapon.",
    date: '2025-07-28',
    readTime: '6 min',
    category: 'SEO',
  },
  {
    id: 'ai-agents-vs-chatbots-what-small-businesses-actually-need',
    title: 'AI Agents vs. Chatbots: What Small Businesses Actually Need',
    excerpt: 'Choose the right AI tool for your business. Chatbots handle FAQ responses while AI agents manage complex workflows. Learn the difference and the costs.',
    date: '2025-10-15',
    readTime: '9 min',
    category: 'AI Automation',
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function Blog() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <SimpleScrollReveal direction="up" delay={0}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Writing
            </p>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={80}>
            <h1 className="mb-6 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              Ideas worth thinking about.
            </h1>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up" delay={160}>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-500 dark:text-gray-400">
              AI, automation, business systems, and the decisions that separate businesses that scale from ones that stay stuck.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── POSTS GRID ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {blogPosts.map((post, i) => (
              <SimpleScrollReveal key={post.id} direction="up" delay={Math.min(i * 40, 300)} className="h-full">
                <Link href={`/blog/${post.id}`} className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-colors hover:border-blue-200 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-blue-900">
                  {/* Category */}
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    {post.category}
                  </p>
                  {/* Title */}
                  <h2 className="mb-3 flex-1 text-base font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-lg">
                    {post.title}
                  </h2>
                  {/* Excerpt */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Meta */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {post.readTime} read
                    </span>
                  </div>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Get in touch
            </p>
            <h2 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to build something?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
              Book a call and tell us what's not working. No pressure, no obligation.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Book a Call
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:hover:bg-gray-800"
              >
                See Our Services
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
