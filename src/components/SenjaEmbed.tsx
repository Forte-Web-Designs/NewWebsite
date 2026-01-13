'use client';

import { useEffect } from 'react';

export default function SenjaEmbed() {
  useEffect(() => {
    // Load the Senja widget script
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/74461d3c-0665-4a4d-893f-dc39fbe22006/platform.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://widget.senja.io/widget/74461d3c-0665-4a4d-893f-dc39fbe22006/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div
        className="senja-embed"
        data-id="74461d3c-0665-4a4d-893f-dc39fbe22006"
        data-mode="shadow"
        data-lazyload="false"
        style={{ display: 'block', width: '100%' }}
      />
    </div>
  );
}
