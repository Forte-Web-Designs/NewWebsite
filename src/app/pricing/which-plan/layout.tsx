import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Which Plan Is Right for Your Business? | Forte Web Design',
  description: 'Take our quick business quiz to get personalized Forte™ plan recommendations based on your goals, budget, and business stage.',
};

interface LayoutProps {
  children: ReactNode;
}

export default function WhichPlanLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
