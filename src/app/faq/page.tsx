"use client";

import { useState } from 'react';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How fast can we get started?",
          a: "Most clients are onboarded within 48 hours of their initial call. We're currently booking discovery calls 2-3 weeks out, but once you're in—we move FAST. Strategy sessions happen within days, and we can start building within a week. If you need to move faster, we offer priority onboarding for clients ready to commit. Ready to lock in your spot before we book out further?"
        },
        {
          q: "Do I really need custom automation, or can I just use Zapier?",
          a: "Great question—and honestly, if Zapier solves your problem, we'll tell you to use Zapier. But here's where most businesses hit a wall: Zapier breaks when you need conditional logic, multi-step workflows, database operations, or AI-powered decision-making. We build intelligent automation that handles complex scenarios, integrates with your actual systems, and scales without the monthly \"Zap tax.\" If you're spending $200+/month on Zapier and still doing manual work—we should talk."
        },
        {
          q: "What if I'm not sure what I need yet?",
          a: "Perfect—that's exactly why we start with a FREE Growth Snapshot. We'll audit your current systems, identify what's slowing you down, and show you exactly what's possible. No pressure, no sales pitch. Just honest feedback on where automation and web design can make the biggest impact. Most clients walk away with at least 3 actionable ideas—even if they don't hire us. Want to see what we find?"
        }
      ]
    },
    {
      category: "Pricing & Investment",
      questions: [
        {
          q: "How much does a custom website cost?",
          a: "Our custom websites start at $3,000 for high-converting lead generation sites and go up to $15,000+ for complete systems with CRM integration, automation, and custom functionality. Here's the thing: our clients typically see 3-5x ROI in the first year because we build for conversions, not just looks. We've helped clients generate an extra $120K in revenue within 90 days of launch. The real question isn't \"how much does it cost?\"—it's \"how much revenue are you leaving on the table with your current site?\" Want to find out?"
        },
        {
          q: "What does AI automation cost?",
          a: "AI automation projects range from $5,000 for simple workflows (like automated lead routing and follow-ups) to $30,000+ for complete business systems. Most clients save 15-20 hours per week within the first month—that's $50K+ in reclaimed time annually if you value your time at $50/hour. Plus, automated systems work 24/7 without vacation, sick days, or training. We're currently booking 4 weeks out, but we have 2 priority slots open this month for clients ready to move. Interested?"
        },
        {
          q: "How much does custom software development cost?",
          a: "Custom software projects typically range from $5,000-$50,000+ depending on complexity and scope. Whether you need custom dashboards, internal tools, API integrations, or data processing systems—we provide detailed project estimates after our discovery call. All projects include source code ownership, comprehensive documentation, training, and ongoing support options. The investment pays for itself through improved efficiency, better data insights, and streamlined operations."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes! We offer flexible payment plans for projects over $5,000. Typical terms are 50% upfront, 50% at launch—or we can split it into 3-4 monthly installments. We also offer ongoing retainer plans ($497-$1,997/month) for maintenance, updates, and strategic support—with no long-term contracts required. Think of it as having a dedicated growth team without the full-time salary. Want to discuss options that work for your budget?"
        },
        {
          q: "Is there a money-back guarantee?",
          a: "We offer a 30-day satisfaction guarantee on all projects. If we don't deliver what we promised, you get a full refund—no questions asked. We've never had a client request this because we deliver. Period. We also include free revisions during the project and don't consider it \"done\" until you're thrilled with the results. Your success is our case study. Sound fair?"
        }
      ]
    },
    {
      category: "Services & Solutions",
      questions: [
        {
          q: "What exactly do you build?",
          a: "We build four core solutions: (1) Custom Websites that convert visitors into customers—hand-coded, fast, SEO-optimized, and built to showcase YOUR brand. (2) AI Automation that handles repetitive work—lead routing, email responses, CRM updates, data entry, and customer communications. (3) Custom Software Development including dashboards, internal tools, API integrations, and data processing systems. (4) Complete Business Systems that connect your website, CRM, email, calendar, and tools into one intelligent operation. Most clients come to us for one and end up wanting all four because they see the ROI. Which one sounds most valuable to you right now?"
        },
        {
          q: "Can you integrate with my existing tools?",
          a: "Absolutely. We integrate with virtually everything: HubSpot, Salesforce, ClickUp, Monday.com, Google Workspace, Slack, Shopify, Airtable, QuickBooks—you name it. If it has an API, we can connect it. If it doesn't, we'll find another way. Our clients love that we eliminate the \"context switching tax\" between platforms. Everything flows into one unified system. What tools are you currently using?"
        },
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes—through our retainer plans ($497-$1,997/month) with no long-term contracts required. Choose Essential Care for basic maintenance, Growth Partner for comprehensive support (most popular), or Priority Partner for hands-on strategic partnership. This includes hosting, security updates, performance monitoring, ongoing optimization, priority support, and continuous improvements based on data. Think of it as having a dedicated growth team that ensures your systems stay fast, secure, and improving. Launch day isn't goodbye—we stick around to make sure you win. Want to see what's included?"
        },
        {
          q: "How is this different from hiring a developer or VA?",
          a: "Great question. A developer builds what you tell them to build—but they won't strategize, optimize for conversions, or integrate marketing and sales systems. A VA handles tasks—but they can't code or build intelligent automation. We do BOTH. We're strategists, builders, and growth partners. You get the technical expertise of a dev team + the business insight of a consultant + the ongoing support of an in-house team. All USA-based, no outsourcing, no handoffs. Just results. See the difference?"
        }
      ]
    },
    {
      category: "Process & Timeline",
      questions: [
        {
          q: "How long does a project take?",
          a: "Most websites launch in 4-6 weeks. Automation projects take 6-8 weeks. Complete systems can take 8-12 weeks depending on complexity. Here's the key: we move fast, but we don't rush quality. We also don't disappear for weeks—you'll get weekly updates, live previews, and direct access to our team. And here's the best part: you start seeing ROI before we're even done. Partial launches, early automation wins, and quick optimizations mean you're not waiting months to see results. Sound good?"
        },
        {
          q: "What do you need from me to get started?",
          a: "Honestly? Not much. We handle 90% of the heavy lifting. All we need is: (1) A quick discovery call to understand your goals (30-45 min). (2) Access to your current tools/platforms if we're integrating. (3) Branding assets (logo, colors, fonts—or we can help create them). (4) Your input during key milestones. Most clients spend 2-3 hours total during the entire project. We're not here to create more work for you—we're here to eliminate it. Ready to get started?"
        },
        {
          q: "Can I see progress during the project?",
          a: "Absolutely. You'll get weekly check-ins, live staging links to preview the site as we build, and direct Slack/email access to our team. No black box, no \"we'll show you when it's done\" nonsense. We build in the open because transparency builds trust. Plus, your feedback makes the final product better. You're in the driver's seat the whole time. Like that approach?"
        }
      ]
    },
    {
      category: "Results & ROI",
      questions: [
        {
          q: "What kind of results can I expect?",
          a: "Our clients typically see: 40% increase in website conversions within 90 days. 15-20 hours saved per week with automation (that's $50K+ annually). 3-5x ROI in the first year. Faster sales cycles, better lead quality, and cleaner data across all systems. We've helped clients generate an extra $120K in revenue, save 20+ hours per week, and scale from 10 to 50 clients without hiring. Your results will depend on your business, but we only build solutions that deliver measurable ROI. Want to see what's possible for YOUR business?"
        },
        {
          q: "How do you measure success?",
          a: "We track what matters: Revenue generated, leads captured, time saved, conversion rates, and customer satisfaction. Before we start, we define clear success metrics together. Then we measure, optimize, and report. You'll never wonder \"is this working?\" because you'll see the data. Our goal isn't just to build cool tech—it's to make you more money and give you more time. That's how we define success. Does that align with your goals?"
        },
        {
          q: "What if it doesn't work?",
          a: "It will—but if for some reason you're not seeing results, we don't just walk away. We dig in, troubleshoot, and optimize until it works. That's included in our 30-day satisfaction guarantee and ongoing Forte Care™ support. We also provide training, documentation, and hands-on help to ensure your team knows how to use the systems. We're not \"ship it and forget it\" builders—we're partners in your growth. Your win is our win. Fair enough?"
        }
      ]
    },
    {
      category: "Technical & Security",
      questions: [
        {
          q: "Is my data secure?",
          a: "Absolutely. We follow industry-standard security protocols: SSL certificates, encrypted databases, secure API integrations, SOC 2 compliant hosting, and regular security audits. We also never store sensitive data unnecessarily and use OAuth 2.0 for all third-party integrations. Your business data is protected like it's our own. We also provide ongoing security monitoring through Forte Care™. Security isn't an afterthought—it's built in from day one."
        },
        {
          q: "What if my site goes down?",
          a: "It won't—but if it does, we're on it immediately. All Forte Care™ clients get 24/7 uptime monitoring with instant alerts and priority support. Average response time: under 2 hours. We also maintain automated backups, so worst-case scenario, we can restore your site within minutes. You'll never lose leads, revenue, or sleep over downtime. We've maintained 99.9%+ uptime for our clients. Sleep well knowing we've got your back."
        },
        {
          q: "Can I make updates myself, or do I need you?",
          a: "Both! We build systems that are easy for you to update (content, images, pricing, blog posts) without touching code. But for technical changes, integrations, or new features—we're here to help. Forte Care™ clients get priority support and can request updates anytime. Think of it this way: you control the day-to-day content, we handle the technical heavy lifting. Best of both worlds. Make sense?"
        }
      ]
    },
    {
      category: "Why Choose Forte",
      questions: [
        {
          q: "Why should I choose Forte over another agency?",
          a: "Because we're not like other agencies. We don't use templates, outsource work, or disappear after launch. We're 100% USA-based, hand-code every project, and stay invested in your success through ongoing support. We also combine web design + automation + strategy into ONE seamless solution—most agencies only do one piece. You get the full package without managing multiple vendors. Plus, our clients stick around for years because we deliver. We're building long-term partnerships, not one-off projects. Ready to join them?"
        },
        {
          q: "What makes you different from Upwork or Fiverr?",
          a: "Quality, accountability, and results. Upwork freelancers disappear after delivery. Fiverr gives you $200 templates that look like everyone else's. We build custom, strategic solutions and stick around to make sure they work. You get direct access to our team, ongoing support, and systems designed for YOUR business—not a generic template. We're also accountable for results, not just deliverables. Big difference. See why our clients choose us?"
        },
        {
          q: "Do you work with businesses outside of Dallas-Fort Worth?",
          a: "Absolutely! While we're proudly based in DFW, we work with clients nationwide. Everything happens remotely via Zoom, Slack, and email—so location doesn't matter. We've built systems for businesses in Texas, Oklahoma, New Mexico, and beyond. As long as you speak English and want to grow, we're here to help. Location is no barrier to great work. Where are you based?"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Everything you need to know about working with Forte—from pricing to process to results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Still Have Questions? Let's Talk
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <SimpleScrollReveal direction="up" delay={categoryIndex * 50}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-600">
                    {category.category}
                  </h2>
                </SimpleScrollReveal>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <SimpleScrollReveal key={faqIndex} direction="up" delay={categoryIndex * 50 + faqIndex * 25}>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                          >
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {faq.q}
                              </h3>
                            </div>
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            <div className="px-6 pb-6">
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SimpleScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to See What's Possible?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Book a free strategy call and get a custom growth plan for your business—no pressure, no sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Your Free Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-200"
                >
                  See Our Results
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
