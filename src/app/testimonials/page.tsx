import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata: Metadata = {
  title: 'Reviews | Client Testimonials | Forte Web Designs',
  description: 'Read what clients say about working with Forte Web Designs. Real feedback from real projects.',
};

const reviews = [
  {
    quote:
      "Seth is my go-to for all of my automation projects now and he's making my business run so much more smoothly and efficiently. His work is top-notch and he sticks with it until I'm happy with how things are running. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout the process.",
    name: 'Shopify / Xero Client',
    project: 'Product Sync Automation',
    tags: ['Collaborative', 'Committed to Quality', 'Clear Communicator'],
  },
  {
    quote:
      "Seth was amazing. Extremely knowledgeable and patient. He thought outside the box to offer us solutions we did not consider. Highly recommend Seth and we will use him in the future.",
    name: 'Power Apps Client',
    project: 'Review System Development',
    tags: ['Committed to Quality', 'Solution Oriented', 'Detail Oriented'],
  },
  {
    quote:
      "The support and consultancy he provided were thoughtful, practical, and immediately helpful. Communication was always clear and timely, and it was easy to schedule calls and stay aligned. He mapped out the project scope in a way that was structured, realistic, and very easy to follow. The cost estimates were also transparent and well organized, which made decision-making straightforward on our end.",
    name: 'Enterprise Client',
    project: 'Automation Consulting',
    tags: ['Solution Oriented', 'Clear Communicator', 'Professional'],
  },
  {
    quote:
      "Seth delivered an exceptional automation that transformed a key aspect of our daily operations, increasing efficiency and accuracy. He not only built the system, but also guided us through it in real-time, ensuring we were fully comfortable. Professional, incredibly responsive, and has tons of ideas. I highly recommend him and look forward to collaborating again!",
    name: 'Legal Tech Client',
    project: 'Court Records Automation',
    tags: ['Committed to Quality', 'Solution Oriented', 'Clear Communicator'],
  },
  {
    quote:
      "Seth is skillful and creative in all the work we've done so far. I can just detail my process and pain points and he figures out how to streamline and then automate. He's communicative and forthcoming with all of the details along the way, and stays with it until we get the tech working perfectly. Highly recommend.",
    name: 'Small Business Client',
    project: 'Workflow Automation',
    tags: ['Committed to Quality', 'Clear Communicator', 'Accountable for Outcomes'],
  },
  {
    quote:
      "It was a great experience working with Seth. He is professional, organised, talented and friendly. It is enjoyable to work with him, he is proficient at analysing workflows and API issues. I intend on working with Seth again.",
    name: 'SaaS Client',
    project: 'Voiceflow + API Integration',
    tags: ['Collaborative', 'Committed to Quality', 'Professional'],
  },
  {
    quote:
      "Seth is an amazing rare breed. He is not just focused on what is asked of him, he actually scopes the need to make sure the work meets your need to the maximum level. Brilliant Developer and the kind of man you wished was your neighbor.",
    name: 'Enterprise Client',
    project: 'AWS Asset Management Platform',
    tags: ['Committed to Quality', 'Solution Oriented', 'Accountable for Outcomes'],
  },
  {
    quote:
      "If you are looking for an expert in Copilot and Power Automate troubleshooting, Seth is the person to call. After I spent hours struggling with various foundation models to fix my agent, Seth resolved the issue in just 30 minutes. I highly recommend his services; should our current proposal succeed, we fully intend to bring him on for larger engagements and organizational training.",
    name: 'Enterprise Client',
    project: 'Copilot Studio Agent',
    tags: ['Reliable', 'Solution Oriented'],
  },
  {
    quote:
      "Seth is incredible to work with. Not only does Seth do great work, he completes projects on time or early and he is excellent at communicating progress.",
    name: 'Marketing Agency Client',
    project: 'ActiveCampaign and CRM Optimization',
    tags: ['Reliable', 'Collaborative', 'Clear Communicator'],
  },
  {
    quote:
      "He figured out the problem immediately. Fixed it in 2 hours when he quoted 3-4. And the kicker? He did this while on vacation. Super easy to work with. Explained things in a way that actually made sense instead of throwing jargon at me. The workflow runs perfectly now and he added error handling so it won't break again. Fair price, fast turnaround, went above and beyond.",
    name: 'Developer Client',
    project: 'n8n Workflow Fix',
    tags: ['Solution Oriented', 'Reliable', 'Accountable for Outcomes'],
  },
  {
    quote:
      "Seth is very knowledgeable and detail oriented. If your looking for someone who is trustworthy, smart and upfront then look no further. He wont continue a project unless you are satisfied with the work. Highly recommend.",
    name: 'Data Client',
    project: 'Custom Inventory Tracking',
    tags: ['Detail Oriented', 'Accountable for Outcomes'],
  },
  {
    quote:
      "Seth was extremely attentive and responsive. He worked quickly while providing accurate turnaround estimates. Nothing ever felt rushed or overlooked. Everything that was agreed upon was delivered exactly as promised. He clearly takes pride in his work, communicates clearly, and makes sure his clients feel supported every step of the way.",
    name: 'Operations Client',
    project: 'Google Sheets Inventory System',
    tags: ['Reliable', 'Committed to Quality', 'Clear Communicator'],
  },
  {
    quote:
      "Seth went above and beyond for me and my business. He helped me setup my meta pixel and meta conversion API through Acuity Scheduling. Now my leads get booked directly on my schedule and the lead gets recorded in Meta's algorithm. Also anyone that views my website now gets retargeted, which really helps bring in more leads. Seth is honest and has integrity in his work.",
    name: 'Local Business Client',
    project: 'Squarespace + Acuity + Meta Integration',
    tags: ['Clear Communicator', 'Accountable for Outcomes', 'Professional'],
  },
  {
    quote:
      "Great experience working with Seth. Communication is 10/10 and I have felt very safe throughout the project. Looking forward to many more collaborations.",
    name: 'DevOps Client',
    project: 'n8n Server Maintenance',
    tags: ['Collaborative', 'Committed to Quality', 'Clear Communicator'],
  },
  {
    quote:
      "If you need an automation specialist, stop looking right now and hire Seth. He will blow your mind with his knowledge and his ability to take your idea and not only build it, but improve upon it.",
    name: 'Agency Client',
    project: 'Ad Agency Automation',
    tags: ['Solution Oriented', 'Clear Communicator', 'Detail Oriented'],
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-white dark:bg-gray-950">

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              Reviews
            </p>
            <h1 className="mb-5 font-bold tracking-tight text-gray-900 dark:text-white text-5xl sm:text-6xl md:text-7xl leading-[1.06]">
              What clients say.
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
              {reviews.length} five-star reviews from verified clients
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="https://voyagedallas.com/interview/community-highlights-meet-seth-forte-of-forte-web-designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm transition-all hover:border-blue-300 hover:shadow dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300 dark:hover:border-blue-700"
              >
                <svg className="h-3.5 w-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3 1h10v1H5V6zm0 3h10v1H5V9zm0 3h6v1H5v-1z" />
                </svg>
                Featured in Voyage Dallas Magazine
              </a>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* ── REVIEWS GRID ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 sm:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {reviews.map((review, i) => (
              <SimpleScrollReveal key={i} direction="up" delay={Math.min(i * 40, 300)} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-950">
                  {/* Stars */}
                  <div className="mb-5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    "{review.quote}"
                  </p>
                  {/* Attribution */}
                  <div className="border-t border-gray-100 pt-5 dark:border-gray-800">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500 mb-3">
                      {review.project}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {review.tags.slice(0, 2).map((tag, t) => (
                        <span
                          key={t}
                          className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
              Ready to work together?
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
                href="/case-studies"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white dark:hover:bg-gray-800"
              >
                View Case Studies
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

    </div>
  );
}
