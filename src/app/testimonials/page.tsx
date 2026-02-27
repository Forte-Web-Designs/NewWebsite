import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata: Metadata = {
  title: 'Testimonials | Client Reviews | Forte Web Designs',
  description: 'Read what clients say about working with Forte Web Designs. Real feedback from real projects.',
};

const reviews = [
  {
    quote: "Seth is my go-to for all of my automation projects now and he's making my business run so much more smoothly and efficiently. His work is top-notch and he sticks with it until I'm happy with how things are running. His process in defining the project scope ahead of time ensures that I get everything I need and we're on the same page throughout the process.",
    name: "Shopify / Xero Client",
    project: "Product Sync Automation",
    tags: ["Collaborative", "Committed to Quality", "Clear Communicator", "Accountable for Outcomes"]
  },
  {
    quote: "Seth was amazing. Extremely knowledgeable and patient. He thought outside the box to offer us solutions we did not consider. Highly recommend Seth and we will use him in the future.",
    name: "Power Apps Client",
    project: "Review System Development",
    tags: ["Committed to Quality", "Solution Oriented", "Detail Oriented", "Accountable for Outcomes"]
  },
  {
    quote: "The support and consultancy he provided were thoughtful, practical, and immediately helpful. Communication was always clear and timely, and it was easy to schedule calls and stay aligned. He mapped out the project scope in a way that was structured, realistic, and very easy to follow. The cost estimates were also transparent and well organized, which made decision-making straightforward on our end.",
    name: "Enterprise Client",
    project: "Automation Consulting",
    tags: ["Solution Oriented", "Clear Communicator", "Detail Oriented", "Professional"]
  },
  {
    quote: "Seth delivered an exceptional automation that transformed a key aspect of our daily operations, increasing efficiency and accuracy. He not only built the system, but also guided us through it in real-time, ensuring we were fully comfortable. Professional, incredibly responsive, and has tons of ideas. I highly recommend him and look forward to collaborating again!",
    name: "Legal Tech Client",
    project: "Court Records Automation",
    tags: ["Committed to Quality", "Solution Oriented", "Clear Communicator"]
  },
  {
    quote: "Seth is skillful and creative in all the work we've done so far. I can just detail my process and pain points and he figures out how to streamline and then automate. He's communicative and forthcoming with all of the details along the way, and stays with it until we get the tech working perfectly. Highly recommend.",
    name: "Small Business Client",
    project: "Workflow Automation",
    tags: ["Committed to Quality", "Clear Communicator", "Accountable for Outcomes"]
  },
  {
    quote: "It was a great experience working with Seth. He is professional, organised, talented and friendly. It is enjoyable to work with him, he is proficient at analysing AI workflows and API issues. I intend on working with Seth again.",
    name: "SaaS Client",
    project: "Voiceflow + API Integration",
    tags: ["Collaborative", "Committed to Quality", "Professional"]
  },
  {
    quote: "Seth is an amazing rare breed. He is not just focused on what is asked of him, he actually scopes the need to make sure the work meets your need to the maximum level. Brilliant Developer and the kind of man you wished was your neighbor.",
    name: "Enterprise Client",
    project: "AWS Asset Management Platform",
    tags: ["Committed to Quality", "Solution Oriented", "Accountable for Outcomes"]
  },
  {
    quote: "If you are looking for an expert in Copilot and Power Automate troubleshooting, Seth is the person to call. After I spent hours struggling with various foundation models to fix my agent, Seth resolved the issue in just 30 minutes. I highly recommend his services; should our current proposal succeed, we fully intend to bring him on for larger engagements and organizational training.",
    name: "Enterprise Client",
    project: "Copilot Studio Agent",
    tags: ["Reliable", "Solution Oriented"]
  },
  {
    quote: "Seth is incredible to work with. Not only does Seth do great work, he completes projects on time or early and he is excellent at communicating progress.",
    name: "Marketing Agency Client",
    project: "ActiveCampaign & CRM Optimization",
    tags: ["Reliable", "Collaborative", "Committed to Quality", "Solution Oriented", "Clear Communicator"]
  },
  {
    quote: "He figured out the problem immediately — it was a structured output configuration issue that I didn't even know was a thing. Fixed it in 2 hours when he quoted 3-4. And the kicker? He did this while on vacation. Super easy to work with. Explained things in a way that actually made sense instead of throwing jargon at me. The workflow runs perfectly now and he added error handling so it won't break again. Fair price, fast turnaround, went above and beyond.",
    name: "Developer Client",
    project: "n8n Workflow Fix",
    tags: ["Solution Oriented", "Reliable", "Accountable for Outcomes", "Clear Communicator", "Collaborative"]
  },
  {
    quote: "Seth is very knowledgeable and detail oriented. If your looking for someone who is trustworthy, smart and upfront then look no further. He wont continue a project unless you are satisfied with the work. Highly recommend.",
    name: "Data Client",
    project: "Custom Inventory Tracking",
    tags: ["Detail Oriented"]
  },
  {
    quote: "Seth was extremely attentive and responsive. He worked quickly while providing accurate turnaround estimates. Nothing ever felt rushed or overlooked. Everything that was agreed upon was delivered exactly as promised. He clearly takes pride in his work, communicates clearly, and makes sure his clients feel supported every step of the way.",
    name: "Operations Client",
    project: "Google Sheets Inventory System",
    tags: ["Reliable", "Collaborative", "Committed to Quality", "Clear Communicator", "Detail Oriented"]
  },
  {
    quote: "Seth went above and beyond for me and my business. He helped me setup my meta pixel and meta conversion API through Acuity Scheduling. So basically now my leads get booked directly on my schedule on my website and the lead gets recorded in Meta's algorithm. Also anyone that views my website now gets retargeted, which really helps bring in more leads. Seth is honest and has integrity in his work.",
    name: "Local Business Client",
    project: "Squarespace + Acuity + Meta Integration",
    tags: ["Clear Communicator", "Accountable for Outcomes", "Detail Oriented", "Professional"]
  },
  {
    quote: "Great experience working with Seth. Communication is 10/10 and I have felt very safe throughout the project. Looking forward to many more collaborations.",
    name: "DevOps Client",
    project: "n8n Server Maintenance",
    tags: ["Collaborative", "Committed to Quality", "Solution Oriented", "Clear Communicator"]
  },
  {
    quote: "If you need an automation specialist, stop looking right now and hire Seth. He will blow your mind with his knowledge and his ability to take your idea and not only build it, but improve upon it.",
    name: "Agency Client",
    project: "Ad Agency Automation",
    tags: ["Solution Oriented", "Clear Communicator", "Detail Oriented"]
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-8 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-4">
                Testimonials
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-2">
                What clients say about working together.
              </p>
              <p className="text-gray-500 dark:text-gray-500">
                {reviews.length} reviews · All 5-star · From Upwork
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 50}>
                <div className="break-inside-avoid bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    "{review.quote}"
                  </p>
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mb-3">{review.project}</p>
                    <div className="flex flex-wrap gap-1">
                      {review.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a call and tell me what's not working. No pressure, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Call
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
