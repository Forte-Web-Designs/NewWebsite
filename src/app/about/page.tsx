"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
        <SectionBackgroundAnimation className="opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-black dark:text-white mb-6">
                About Forte Web Designs
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                What You're Actually Paying For When You Hire Us
              </h2>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <SimpleScrollReveal direction="left" delay={200}>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="relative w-48 h-48 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                            <OptimizedImage
                              src="/images/about/headshot.jpg"
                              alt="Seth, Founder of Forte Web Designs"
                              width={192}
                              height={192}
                              className="w-full h-full object-cover"
                              priority={true}
                              sizes="192px"
                            />
                          </div>
                          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 -z-10"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Seth Forte</p>
                        <p className="text-gray-500 dark:text-gray-400">Founder & Lead Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="right" delay={200}>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    Hi, I'm Seth Forte, founder of Forte Web Designs.
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I want to ask you something: <strong className="text-gray-900 dark:text-white">What are you actually paying for when you hire a consultant?</strong>
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <div className="space-y-8 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <SimpleScrollReveal direction="up" delay={350}>
                <p>
                  Most people think they're paying for expertise. For the solution. For someone who knows how to build the thing.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={400}>
                <p>
                  But the truth is: Most consultants have it backwards.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={450}>
                <p>
                  They're trying to squeeze every dollar out of a single project. They think you're paying them for the technical work: for building things, for clicking buttons. They're optimizing for the transaction, not the relationship.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={500}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  That's not what this should be.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={550}>
                <p>
                  Even if we're only working together on a one-off project, I'm thinking strategically: what actually makes sense for where your business is headed, what sets you up for success long-term, not just what checks a box today. And if we work together multiple times? That's when the real compounding value happens.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={600}>
                <p>
                  I'm always taking the time to understand how your business actually works. I'm spotting the opportunities you're missing because you're too deep in the day-to-day. I'm invested in your actual success, not just completing a task and moving on.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={650}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  The technical solution isn't the value. Understanding your business is.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={700}>
                <p>
                  That's the value. Pinpointing the actual ROI. Understanding the pain points that are costing you time and money every single day. Understanding where you're actually trying to go, not just what you think you need built.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={750}>
                <p>
                  That's exactly why every proposal I send includes a full project plan: the gotchas, the inevitable forks in the road we could face, the hidden costs, the things you probably haven't considered, a complete solution outline. All free, no contract required.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={800}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Because that's not the hard part.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={850}>
                <p>
                  The value is the partnership. The consistency. The long-term thinking. Someone who shows up and actually cares if the solution works after they're gone.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={900}>
                <p>
                  It really comes down to this: You don't build a business on transactions. You build it on relationships. And relationships? They're built on transparency, trust, and being genuinely invested in someone else's success.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={950}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  That's what Forte Web Designs is all about. That's what every project and every conversation reflects. It's not a philosophy. It's just how I work.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={1000}>
                <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-700 mt-8">
                  <p className="text-lg text-gray-800 dark:text-gray-200">
                    <strong className="text-blue-600 dark:text-blue-400">If you're looking for the cheapest option, I'm not your person.</strong> But if you're looking for someone who thinks about your business like it's their own, who leads with generosity, who's building something that lasts, then we should talk.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                My Background
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <SimpleScrollReveal direction="up" delay={200}>
                <p>
                  I've spent 5+ years building automation systems at Wells Fargo. The kind that handle millions of transactions, save hundreds of thousands annually, and can't afford to break. I've combined that enterprise reliability with the agility and personal attention of a consulting practice.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={250}>
                <p>
                  I've been featured in Dallas Innovates, BUiLT, and Orbie publications for my work in automation and custom software development.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <p>
                  More importantly, I've helped businesses like yours save thousands of hours annually, eliminate bottlenecks that were costing real money, and build systems that actually scale with growth.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={350}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  But here's what matters most: I don't just build things and disappear. I'm here for the long term. I care about whether your systems work six months from now. I care about whether you're actually seeing ROI. I care about your success.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={400}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  That's the difference.
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Started Forte Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Why I Started Forte
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <SimpleScrollReveal direction="up" delay={200}>
                <p>
                  I kept seeing the same problem: businesses outgrowing their systems. Manual processes bottlenecking growth. Template solutions breaking under pressure. Teams wasting hours on work that technology should handle.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={250}>
                <p>
                  And I kept seeing consultants who treated every project like a transaction. Build it, bill it, move on. No strategic thinking. No long-term investment in the client's success.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  I started Forte to do it differently.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={350}>
                <p>
                  To build systems that don't break. To be honest when automation isn't the answer. To actually care whether clients succeed after I'm gone.
                </p>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Makes Me Different
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-5xl mx-auto space-y-8">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  I Tell You When You Shouldn't Automate
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  If fixing your process makes more sense than automating a broken one, I'll tell you. If you don't need a full system rebuild, I'll tell you. I turn down projects that don't make sense, even when it costs me revenue.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={250}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  I Think Long-Term, Even on One-Off Projects
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Even if we only work together once, I'm thinking about where your business is headed. What sets you up for scale. What creates compounding value. The relationship matters more than the transaction.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  You Work Directly With Me
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  No account managers. No junior developers. No bait-and-switch. You work directly with me: the person who understands your business, builds your systems, and cares about your results.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={350}>
              <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  I Lead With Generosity
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Every proposal includes a complete project plan: gotchas, hidden costs, solution outline. Free, no contract required. I prove value before asking for commitment.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's Talk
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                If this resonates with you, let's have a conversation. No sales pitch. No pressure. Just an honest discussion about your business, your challenges, and whether we're the right fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-12 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  Book Your Free Strategy Call
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-12 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
