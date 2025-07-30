'use client';

import { useEffect, useState } from 'react';

export default function LandscapingLanding() {
  const [iframeSrc, setIframeSrc] = useState('/landscaping-template/forte-landscaping-parameterized.html');

  useEffect(() => {
    // Get current URL parameters and pass them to the iframe
    const urlParams = new URLSearchParams(window.location.search);
    const iframeUrl = new URL('/landscaping-template/forte-landscaping-parameterized.html', window.location.origin);
    
    // Copy all parameters to the iframe URL
    urlParams.forEach((value, key) => {
      iframeUrl.searchParams.set(key, value);
    });

    setIframeSrc(iframeUrl.pathname + iframeUrl.search);
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe 
        src={iframeSrc}
        style={{ 
          width: '100%', 
          height: '100%', 
          border: 'none',
          display: 'block'
        }}
        title="Forte Landscaping - Professional Landscaping Services"
      />
    </div>
  );
}
