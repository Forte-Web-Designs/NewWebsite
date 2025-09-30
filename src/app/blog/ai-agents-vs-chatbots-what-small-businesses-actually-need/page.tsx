import type { Metadata } from 'next'
import AIAgentsVsChatbotsClient from './AIAgentsVsChatbotsClient'

export const metadata: Metadata = {
  title: 'AI Agents vs. Chatbots: What Small Businesses Actually Need',
  description: 'Choose the right AI tool for your business. Chatbots handle FAQ responses while AI agents manage complex workflows. Learn costs, benefits, and implementation without platform replacement.',
  keywords: ['AI agents vs chatbots', 'small business AI', 'business automation comparison', 'AI implementation', 'workflow automation', 'customer service automation'],
  openGraph: {
    title: 'AI Agents vs. Chatbots: What Small Businesses Actually Need',
    description: 'Choose the right AI tool for your business. Chatbots handle FAQ responses while AI agents manage complex workflows. Learn costs, benefits, and implementation without platform replacement.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/ai-agents-vs-chatbots-what-small-businesses-actually-need',
  },
}

export default function AIAgentsVsChatbotsBlog() {
  return <AIAgentsVsChatbotsClient />;
}