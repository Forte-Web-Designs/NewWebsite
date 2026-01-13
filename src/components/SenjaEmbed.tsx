'use client';

import { useEffect } from 'react';

export default function SenjaEmbed() {
  useEffect(() => {
    // Load the iframeResizer script
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/js/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize iframeResizer after script loads
      if (typeof window !== 'undefined' && (window as any).iFrameResize) {
        (window as any).iFrameResize(
          { log: false, checkOrigin: false },
          '#senja-collector-iframe'
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://widget.senja.io/js/iframeResizer.min.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        id="senja-collector-iframe"
        src="https://senja.io/p/fortewebdesigns/r/BujDSc?mode=embed"
        allow="camera;microphone"
        title="Senja testimonials"
        frameBorder={0}
        scrolling="no"
        width="100%"
        height="700"
        className="w-full min-h-[700px]"
      />
    </div>
  );
}
