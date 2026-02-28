"use client";

import { useState, useEffect } from 'react';

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-600 px-4 py-3 flex items-center justify-center shadow-lg">
      <a
        href="https://calendly.com/seth-fortewebdesigns/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-white tracking-wide"
      >
        Book a Call →
      </a>
    </div>
  );
}
