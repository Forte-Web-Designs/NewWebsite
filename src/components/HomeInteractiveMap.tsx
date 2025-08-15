"use client";

interface HomeInteractiveMapProps {
  className?: string;
}

export default function HomeInteractiveMap({ className = "" }: HomeInteractiveMapProps) {
  const handleStreetViewClick = () => {
    // Open Google Maps with Street View layer enabled for easy access
    window.open('https://www.google.com/maps/place/129+S+Main+St+%23260,+Grapevine,+TX+76051/@32.9343,-97.0778,18z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

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
      
      {/* Address overlay */}
      <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">🚀 Serving from Grapevine, TX</div>
        <div className="text-xs text-gray-700 dark:text-gray-300">
          <div>📍 129 S Main St #260</div>
          <div>Grapevine, TX 76051</div>
        </div>
      </div>
      
      {/* Tech overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      
      {/* Street View Button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={handleStreetViewClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-lg transition-colors flex items-center gap-2 text-sm font-medium"
          title="Open in Google Maps - Click the yellow Pegman for Street View"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Street View
        </button>
      </div>
      

    </div>
  );
}
