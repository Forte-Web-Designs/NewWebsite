"use client";

import { Metadata } from 'next';
import Link from 'next/link';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import DarkButton from '@/components/DarkButton';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

export default function WhiteLabelPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-2xl">🧩</span>
                  <span className="text-[#8D9DFF] text-sm md:text-base lg:text-lg font-normal">White Label Partnerships</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
                  Scale Your Agency with Forte Web Designs
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Custom-built websites, blazing performance, and hands-off fulfillment - all under your brand.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-4xl mx-auto">
                  At Forte Web Designs, we don't just build websites - we build partnerships. We work behind the scenes to deliver premium websites for your clients while you take the credit. Whether you need a reliable white-label partner to boost your agency's capacity or just want to outsource the dev work you hate - we've got your back.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Why Partner with Forte Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  💡 Why Partner with Forte?
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SimpleScrollReveal direction="up" delay={400}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">🧰</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Built for Agencies
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    You bring the brand and strategy - we bring the code, speed, and clean execution.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={500}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">⚡</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Lightning-Fast Performance
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    We hand-code every site from scratch for elite speed, SEO, and conversion performance.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={600}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">💬</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Flexible Workflow
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Work how you want - send us the brief, loop us in with your client, or let us stay invisible.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={700}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl">🇺🇸</span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      100% USA-Based
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    You'll work directly with Seth (the founder) and a tight-knit U.S.-based team that actually cares.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  🔄 How It Works
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SimpleScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Discovery Form
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You fill out a short intake form - business goals, target audience, tone, etc.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={400}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Design Review
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We build a homepage mockup and review it together before going full dev mode.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={500}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Custom Development
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We hand-code the full site - no templates, no bloat, just beautiful fast code.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={600}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Launch & Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    You choose: host and manage it yourself or let us handle everything via Forte Care™.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* White Label Perks Table */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  🎁 White Label Perks
                </h2>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-primary-50 dark:bg-primary-900/50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">What You Get</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          ✅ Custom-Coded Design
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Clean, lightweight builds tailored to your strategy
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          ✅ Seamless White Label
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Keep it branded under your agency or stay hands-off
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          ✅ Direct Slack/Email Access
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          Fast feedback loops, no waiting in support queues
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          ✅ Forte Care™ Optional
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                          We handle edits, backups, monitoring, and support
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  🧠 What Our Partners Say
                </h2>
              </div>
            </SimpleScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={300}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                      "Seth is the type of partner you hope to find but rarely do. His team builds incredibly clean, fast websites that make our SEO results look even better. But more than that, he just *gets it*. Communication is quick, deadlines are hit, and the work speaks for itself."
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="font-semibold text-gray-900 dark:text-white">Emily Tran</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Blueprint Creative Co.</div>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={400}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                      "We've tried a few white-label developers over the years - none of them matched the quality and consistency we've gotten from Forte Web Designs. The fact that I can hand things off without micromanaging is a lifesaver."
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="font-semibold text-gray-900 dark:text-white">Carlos R.</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">RankGrower Agency</div>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={500}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400 italic mb-4">
                      "Seth's attention to detail is rare in this space. He treats every project like it's for his own brand. Our agency's reputation has only gotten stronger since partnering with Forte."
                    </p>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="font-semibold text-gray-900 dark:text-white">Jordan M.</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Revv Digital</div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary-50 dark:bg-primary-900/20">
          <div className="container mx-auto max-w-4xl">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  📞 Let's Build Something Strong - Together
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  Book a call with Seth or request more info. We'll walk you through how white label with Forte works and see if we're a fit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <DarkButton href="/contact" className="inline-flex items-center justify-center">
                    Book Discovery Call →
                  </DarkButton>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-200"
                  >
                    Request Info Packet →
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Industry Lead CTA */}
        <IndustryLeadCTA 
          industry="white-label"
          formName="White Label Partnership Inquiry"
          mobileCtaText="Ready to partner with us?"
          mobileBgGradient="bg-gradient-to-r from-purple-600 to-blue-600"
          title="Ready to Scale Your Agency?"
          subtitle="Get started with a white label partnership designed to grow your business with our proven development expertise."
        />
      </div>
    </div>
  );
}
