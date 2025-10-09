"use client";

import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { Icon } from '@/components/images/Icon';

export default function AboutUs() {
  const coreValues = [
    {
      icon: "chart",
      title: "Built for Growth",
      description: "Every system we build is designed to scale with you—not hold you back."
    },
    {
      icon: "flash",
      title: "Speed Matters",
      description: "Fast websites, fast automation, fast results. We don't waste time."
    },
    {
      icon: "check",
      title: "Real ROI",
      description: "We measure success in hours saved, leads generated, and revenue grown."
    }
  ];

  const approach = [
    {
      number: "1",
      title: "We Listen First",
      description: "Most agencies pitch you a solution before understanding your problem. We start with discovery—learning how your business actually works, where you're stuck, and what you've already tried."
    },
    {
      number: "2",
      title: "We Build Custom, Not Templates",
      description: "You won't get a template WordPress site or a generic automation flow. Every line of code, every workflow, every integration is built specifically for your business."
    },
    {
      number: "3",
      title: "We Stay Until It Works",
      description: "Launch day isn't goodbye. We monitor, optimize, and support your systems long after deployment. If something breaks, we fix it. If something can improve, we improve it."
    }
  ];

  const whyUs = [
    {
      title: "We're Not Here to Sell You More",
      description: "If automation solves your problem better than a website, we'll tell you. If you don't need a Complete System, we won't push it. We recommend what actually makes sense for your business."
    },
    {
      title: "We Speak Human, Not Jargon",
      description: "No \"synergistic cloud-native solutions\" or \"AI-powered blockchain paradigms.\" We explain what we're building, why it matters, and how it helps—in plain English."
    },
    {
      title: "We're Building Alongside You",
      description: "Right now, we're growing our portfolio and proving our value. That means better pricing for you, more attention on your project, and a team that's genuinely invested in your success becoming our case study."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16 sm:pt-24 sm:pb-24">
        <SectionBackgroundAnimation className="opacity-30" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-black dark:text-white mb-6">
                We Build Systems That <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Actually Work</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                No nonsense. No gimmicks. Just intelligent automation, fast websites, and real results for businesses that want to grow without burning out.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm Seth
                </h2>
                <h3 className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                  Founder of Forte Web Designs
                </h3>
              </div>
            </SimpleScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <SimpleScrollReveal direction="left" delay={300}>
                <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I started this company because I was tired of watching smart business owners drown in manual work that technology should be handling.
                  </p>
                  <p>
                    Copying leads from forms into CRMs. Sending the same follow-up emails over and over. Building websites that look pretty but don't actually convert visitors into customers.
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    It doesn't have to be that way.
                  </p>
                  <p>
                    The right automation can save you 20+ hours a week. The right website can 3x your conversions. The right integrations can give you insights you never knew you were missing.
                  </p>
                  <p>
                    But here's the catch: it has to be built for <span className="italic">your</span> business. Not a template. Not a "one-size-fits-all" solution. Custom.
                  </p>
                  <p>
                    That's what we do. We learn how your business works, identify what's slowing you down, and build intelligent systems that handle the repetitive stuff so you can focus on what actually matters: growing your business.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="right" delay={300}>
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <div className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                            <OptimizedImage
                              src="/images/about/headshot.jpg"
                              alt="Seth, Founder of Forte Web Designs"
                              width={128}
                              height={128}
                              className="w-full h-full object-cover"
                              priority={true}
                              sizes="128px"
                            />
                          </div>
                          {/* Gradient border effect */}
                          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 -z-10"></div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">Seth</p>
                        <p className="text-gray-500 dark:text-gray-400">Founder & Lead Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                What We Stand For
              </h2>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon name={value.icon} className="w-8 h-8 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Our process is simple: understand, build, optimize.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            {approach.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="flex flex-col md:flex-row items-start gap-6 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Work With Us
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're honest, direct, and actually care about your results.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            {whyUs.map((reason, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={200 + (index * 100)}>
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {reason.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Let's Talk About What You Actually Need
              </h2>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                No sales pitch. No pressure. Just an honest conversation about your business, your challenges, and whether we can help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-12 py-4 rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Book Your Free Strategy Call
              </Link>
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
