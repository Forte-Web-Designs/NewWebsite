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

      {/* Video Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up">
              <p className="text-xl sm:text-2xl text-center text-gray-700 dark:text-gray-300 mb-8">
                Prefer video? Here's the 2-minute version.
              </p>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  controls
                  className="w-full"
                >
                  <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SimpleScrollReveal>
          </div>
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
                              src="/images/about/headshot-6.jpg"
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
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-gray-900 dark:text-white">What are you actually paying for when you hire a consultant?</strong> Most people think it's the technical work. But the technical build is the easy part.
                  </p>
                  <p>
                    The value is understanding your business. Spotting the opportunities you're missing. Building for where you're headed, not just what you think you need today.
                  </p>
                  <p>
                    Every proposal I send includes a full project plan - gotchas, hidden costs, solution outline. Free, no contract required. Because the hard part isn't building. It's understanding.
                  </p>
                  <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                    <p className="text-gray-800 dark:text-gray-200">
                      <strong className="text-blue-600 dark:text-blue-400">If you're looking for the cheapest option, I'm not your person.</strong> But if you want someone who thinks about your business like it's their own, we should talk.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
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
                  5+ years building enterprise systems at Wells Fargo - the kind that handle millions of transactions and can't afford to break. Featured in Dallas Innovates, BUiLT, and Orbie.
                </p>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={250}>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  I don't just build things and disappear. I care whether your systems work six months from now.
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

            <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <SimpleScrollReveal direction="up" delay={200}>
                <p>
                  I kept seeing businesses outgrow their systems while consultants treated every project like a transaction. I started Forte to do it differently.
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
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What Makes Me Different
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-8">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="p-5 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  I Tell You When You Shouldn't Automate
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  If fixing your process makes more sense than building something new, I'll tell you - even when it costs me revenue.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={250}>
              <div className="p-5 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  I Think Long-Term, Even on One-Off Projects
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  Even on one-off projects, I'm thinking about where your business is headed. What sets you up for scale.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="p-5 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  You Work Directly With Me
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  No account managers. No junior developers. No bait-and-switch. You work directly with me.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={350}>
              <div className="p-5 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  I Lead With Generosity
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                  Every proposal includes a complete project plan - gotchas, hidden costs, clear scope. For complex projects, I prove the approach works before you commit.
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
                No pitch, no pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 sm:px-12 py-3 sm:py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg w-full sm:w-auto"
                >
                  Book Your Free Strategy Call
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 sm:px-12 py-3 sm:py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-base sm:text-lg w-full sm:w-auto"
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
