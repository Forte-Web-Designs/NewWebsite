"use client";

import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 px-4 py-3 flex items-center justify-center shadow-lg">
      <Link
        href="/contact"
        className="text-sm font-semibold text-white tracking-wide"
      >
        Book a Call →
      </Link>
    </div>
  );
}
