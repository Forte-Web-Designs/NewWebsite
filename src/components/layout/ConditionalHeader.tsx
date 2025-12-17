'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function ConditionalHeader() {
  const pathname = usePathname();
  
  // Hide header on landing pages
  const isLandingPage = pathname && (
    pathname.includes('-landing') || 
    pathname === '/plumbing-landing'
  );
  
  if (isLandingPage) {
    return null;
  }
  
  return <Header />;
}
