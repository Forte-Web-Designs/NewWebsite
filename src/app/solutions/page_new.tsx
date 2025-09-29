"use client";

import { useState } from "react";
import Link from "next/link";
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';

export default function SolutionsPage() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Case study data
  const outcomes = [
    {
      business: "Riverside Clinic",
      outcome: "2.5× more inquiries",
      description: "2.5× more inquiries with faster replies"
    },
    {
      business: "ProHome Services", 
      outcome: "3-day → same-day",
      description: "Quotes cut from 3 days to same-day"
    },
    {
      business: "Elite Boutique",
      outcome: "$18k in 6 months",
      description: "$18k added revenue from follow-ups"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              {/* Trust Strip */}
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <Icon name="star" className="w-4 h-4 text-yellow-400 fill-current" />
                <span>Complete Business Growth System</span>
              </div>

              {/* Headline */}
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 dark:text-white mb-6">
                Business Growth Isn't Luck.{" "}
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  It's a System.
                </span>
              </h1>

              {/* Subheadline */}
              <h2 className="text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Three growth systems that work together to capture more leads, close deals faster, and keep your pipeline clear.
              </h2>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'hero');
                    setShowGrowthSnapshotForm(true);
                  }}
                  className="px-8 py-4 text-lg"
                >
                  Get My Free Growth Snapshot
                </DarkButton>
                <LightButton 
                  href="/pricing"
                  onClick={() => handleCTAClick('secondary', 'hero')}
                  className="px-8 py-4 text-lg"
                >
                  See Pricing
                </LightButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* System Overview - 3 Pillars */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Lead Catcher™ */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                <Icon name="target" className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Lead Catcher™
                </h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  Turn missed calls into booked jobs.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Auto text-backs for missed calls & forms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Guides prospects to the next step</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Cuts missed-call loss by 50%+</span>
                  </li>
                </ul>
              </div>
            </SimpleAnimatedCard>

            {/* Quote Builder™ */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                <Icon name="file-text" className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Quote Builder™
                </h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  Send quotes same-day. Close more deals.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Pre-built quote templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Automated reminders until the deal closes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Improves close rate by 10–15%</span>
                  </li>
                </ul>
              </div>
            </SimpleAnimatedCard>

            {/* Owner's Console™ */}
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full text-center">
                <Icon name="monitor" className="w-16 h-16 text-primary-600 mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                  Owner's Console™
                </h3>
                <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  One view of your entire pipeline.
                </p>
                
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">See every lead, quote, and task in one place</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">Weekly scorecard emailed automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">No more wondering where opportunities are stuck</span>
                  </li>
                </ul>
              </div>
            </SimpleAnimatedCard>
          </div>

          {/* CTA */}
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link 
                href="#detailed-sections"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-lg font-semibold underline"
              >
                See How Each Works →
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center max-w-4xl mx-auto">
              {/* 3-Step Flow Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-12">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                    <Icon name="target" className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">Leads In</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-[150px]">
                    Capture every opportunity automatically
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <Icon name="arrow-right" className="w-8 h-8 text-primary-400" />
                </div>
                <div className="block md:hidden">
                  <Icon name="arrow-down" className="w-8 h-8 text-primary-400" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                    <Icon name="file-text" className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">Quotes Sent</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-[150px]">
                    Professional quotes delivered fast
                  </p>
                </div>
                
                <div className="hidden md:block">
                  <Icon name="arrow-right" className="w-8 h-8 text-primary-400" />
                </div>
                <div className="block md:hidden">
                  <Icon name="arrow-down" className="w-8 h-8 text-primary-400" />
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                    <Icon name="monitor" className="w-10 h-10 text-primary-600" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">Console Overview</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-[150px]">
                    Track everything in one place
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 italic max-w-2xl mx-auto">
                Each system is powerful on its own. Together, they prevent leaks and accelerate growth.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Detailed Sections */}
      <section id="detailed-sections" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 space-y-24">
          
          {/* Lead Catcher™ Detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="target" className="w-12 h-12 text-primary-600" />
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
                    Lead Catcher™
                  </h2>
                </div>
                <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  Turn missed calls into booked jobs.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Instant text-backs</strong> for every missed call and form submission
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Smart next-step guidance</strong> keeps prospects moving forward
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Works 24/7</strong> so you never miss another opportunity
                    </span>
                  </div>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-8">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    Cut missed-call loss by 50%+
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Most businesses lose 27% of leads to slow response times
                  </p>
                </div>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'lead-catcher-detail');
                    setShowGrowthSnapshotForm(true);
                  }}
                >
                  Get My Free Growth Snapshot
                </DarkButton>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Icon name="target" className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Lead Catcher™ Screenshot Placeholder</p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>

          {/* Quote Builder™ Detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-8 aspect-square flex items-center justify-center lg:order-1">
                <div className="text-center">
                  <Icon name="file-text" className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Quote Builder™ Screenshot Placeholder</p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right">
              <div className="lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="file-text" className="w-12 h-12 text-primary-600" />
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
                    Quote Builder™
                  </h2>
                </div>
                <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  Send quotes same-day. Close more deals.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Professional templates</strong> for every type of job
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Automated follow-ups</strong> until the client responds
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Digital signatures</strong> to close deals faster
                    </span>
                  </div>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-8">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    Improves close rate by 10–15%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Fast, professional quotes win more business
                  </p>
                </div>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'quote-builder-detail');
                    setShowGrowthSnapshotForm(true);
                  }}
                >
                  Get My Free Growth Snapshot
                </DarkButton>
              </div>
            </SimpleScrollReveal>
          </div>

          {/* Owner's Console™ Detail */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="monitor" className="w-12 h-12 text-primary-600" />
                  <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white">
                    Owner's Console™
                  </h2>
                </div>
                <p className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-6">
                  One view of your entire pipeline.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Real-time dashboard</strong> shows every lead and quote status
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Weekly scorecard</strong> delivered to your inbox automatically
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Spot stuck opportunities</strong> before they go cold
                    </span>
                  </div>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-8">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    Complete pipeline visibility
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Never wonder where your next job is coming from
                  </p>
                </div>

                <DarkButton 
                  onClick={() => {
                    handleCTAClick('primary', 'owners-console-detail');
                    setShowGrowthSnapshotForm(true);
                  }}
                >
                  Get My Free Growth Snapshot
                </DarkButton>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <Icon name="monitor" className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">Owner's Console™ Screenshot Placeholder</p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Designed for small business realities.
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <SimpleAnimatedCard>
              <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <Icon name="zap" className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                  Respond instantly
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  "Speed wins jobs."
                </p>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <Icon name="repeat" className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                  Stay consistent
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  "Follow-ups that never get forgotten."
                </p>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <Icon name="eye" className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                  Get clarity
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-semibold">
                  "See where every lead stands."
                </p>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Outcomes / Case Studies */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
                Real businesses, real results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See what happens when you stop losing opportunities
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {outcomes.map((outcome, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 rounded-xl p-8 text-center h-full">
                  <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {outcome.business}
                  </h3>
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                    {outcome.outcome}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {outcome.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <LightButton href="/results" className="px-8 py-3">
                See More Results →
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Growth Snapshot CTA */}
      <section className="py-16 lg:py-24 bg-primary-50 dark:bg-primary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-6">
                Curious where you're leaking opportunities?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get a <strong>1-page Growth Snapshot</strong>: missed calls, reply time, quote delays, and follow-up gaps.
              </p>

              <DarkButton 
                onClick={() => {
                  handleCTAClick('primary', 'snapshot-repeat');
                  setShowGrowthSnapshotForm(true);
                }}
                className="px-8 py-4 text-lg"
              >
                Get My Free Growth Snapshot
              </DarkButton>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Catch every opportunity. Respond faster. Win more jobs.
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Ready to stop losing leads to slow responses and missed follow-ups?
            </p>
            
            <button
              onClick={() => {
                handleCTAClick('primary', 'footer-cta');
                setShowGrowthSnapshotForm(true);
              }}
              className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start With a Free Growth Snapshot →
            </button>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Growth Snapshot Form Modal */}
      {showGrowthSnapshotForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                  Get Your Free Growth Snapshot
                </h3>
                <button
                  onClick={() => setShowGrowthSnapshotForm(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <Icon name="x" className="w-6 h-6" />
                </button>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We'll analyze your current setup and show you exactly where opportunities are slipping through the cracks.
              </p>
              
              {/* Simple form placeholder - would integrate with actual form component */}
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  Growth Snapshot Form Component
                  <br />
                  (Would integrate with existing GrowthSnapshotForm)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
