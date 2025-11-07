"use client";

interface InteractiveMapProps {
  className?: string;
}

export default function InteractiveMap({ className = "" }: InteractiveMapProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 ${className}`} style={{height: '300px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.5!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e97d85d33f001%3A0x987654321fedcba!2s5473%20Blair%20Rd%20Ste%20100%2C%20Dallas%2C%20TX%2075231!5e0!3m2!1sen!2sus!4v1700000000001!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Forte Web Designs - 5473 Blair Rd Ste 100, Dallas, TX"
      ></iframe>
      
      {/* Tech overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
    </div>
  );
}
