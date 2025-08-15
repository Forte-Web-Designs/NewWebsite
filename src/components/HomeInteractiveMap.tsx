"use client";

interface HomeInteractiveMapProps {
  className?: string;
}

export default function HomeInteractiveMap({ className = "" }: HomeInteractiveMapProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600 ${className}`} style={{height: '300px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2!2d-97.0778!3d32.9343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd749e80a6fff%3A0x123456789abcdef!2s129%20S%20Main%20St%20%23260%2C%20Grapevine%2C%20TX%2076051!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{border: 0}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Forte Web Designs - 129 S Main St #260, Grapevine, TX"
      ></iframe>
      
      {/* Tech overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
    </div>
  );
}
