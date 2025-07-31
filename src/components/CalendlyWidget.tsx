'use client';
import { useEffect } from 'react';

interface CalendlyWidgetProps {
  url: string;
}

export default function CalendlyWidget({ url }: CalendlyWidgetProps) {
  useEffect(() => {
    // Check if Calendly script is already loaded
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url={url}
      style={{minWidth: '320px', height: '700px'}}
    />
  );
}
