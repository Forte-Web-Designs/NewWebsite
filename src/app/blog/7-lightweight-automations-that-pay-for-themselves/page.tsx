import type { Metadata } from 'next'
import LightweightAutomationsClient from './LightweightAutomationsClient'

export const metadata: Metadata = {
  title: '7 Lightweight Automations That Pay for Themselves',
  description: 'Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.',
  keywords: ['lightweight automation', 'business automation ROI', 'automation quick wins', 'small business automation', 'automation payback', 'workflow automation'],
  openGraph: {
    title: '7 Lightweight Automations That Pay for Themselves',
    description: 'Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/7-lightweight-automations-that-pay-for-themselves',
  },
}

export default function LightweightAutomationsBlog() {
  return <LightweightAutomationsClient />;
}