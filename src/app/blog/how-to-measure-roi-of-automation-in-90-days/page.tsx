import type { Metadata } from 'next'
import MeasureAutomationROIClient from './MeasureAutomationROIClient'

export const metadata: Metadata = {
  title: 'How to Measure the ROI of Automation in 90 Days',
  description: 'Track automation success with time saved, revenue impact, and cost reduction metrics. Get a simple 4-step framework for measuring automation ROI in your first 90 days.',
  keywords: ['automation ROI measurement', 'automation metrics', 'business automation tracking', 'ROI calculation', '90 day automation results', 'automation KPIs'],
  openGraph: {
    title: 'How to Measure the ROI of Automation in 90 Days',
    description: 'Track automation success with time saved, revenue impact, and cost reduction metrics. Get a simple 4-step framework for measuring automation ROI in your first 90 days.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/how-to-measure-roi-of-automation-in-90-days',
  },
}

export default function MeasureAutomationROIBlog() {
  return <MeasureAutomationROIClient />;
}