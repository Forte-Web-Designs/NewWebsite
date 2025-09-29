import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies | Real Small Business Success Stories | Forte Web Designs',
  description: 'Explore realistic case studies for restaurants, contractors, healthcare, professional services, retail, and automotive. See how Forte\'s custom Growth Systems deliver measurable results.',
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
