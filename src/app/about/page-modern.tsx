"use client";

import Link from "next/link";
import Head from "next/head";
import { Suspense, lazy } from 'react';
import ContactForm from "@/components/ContactForm";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';

// Lazy load CalendlyWidget for better performance
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));

export default function AboutUs() {
  const values = [
    {
      title: "100% USA-Based",
      description: "Local DFW team serving businesses nationwide with direct communication"
    },
    {
      title: "Custom Code",
      description: "Hand-built for speed, SEO, and performanceno templates"
    },
    {
      title: "Customer First",
      description: "Your business success drives every decision we make"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Strategic Discovery",
      description: "We analyze your market, competitors, and customer journey to identify high-impact opportunities."
    },
    {
      number: "02",
      title: "Custom Architecture",
      description: "We design a complete growth ecosystemwebsite, automation, and intelligence layers working together."
    },
    {
      number: "03",
      title: "Continuous Growth",
      description: "Monthly reviews, optimization, and strategic improvements that compound over time."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>About Forte Web Designs | AI & Automation Experts</title>
        <meta name="description" content="DFW-based AI & automation consultants building growth systems for businesses nationwide. 100% custom code, USA-based team." />
        <link rel="canonical" href="https://fortewebdesigns.com/about" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 dark:text-white mb-8">
                Business growth built on
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">systems, not luck</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                We transform websites into complete growth enginescapturing leads, automating follow-up, and providing the clarity you need to scale.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                Business growth isn't luckit's a system. We build websites that convert, automation that works 24/7, and dashboards that give you complete clarity and control.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
                Strategic partnership that combines your expertise with our systematic approach
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {process.map((step, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="relative">
                  <div className="text-6xl font-bold text-blue-600/10 dark:text-blue-400/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Get a free growth snapshot and discover how AI & automation can streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/growth-audit"
                className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-50 rounded-lg font-semibold text-lg transition-all shadow-xl"
              >
                Get Your Free Growth Snapshot
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold text-lg transition-all"
              >
                Schedule a Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
