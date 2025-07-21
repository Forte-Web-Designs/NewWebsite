import React from 'react';

interface PlumbingLogoProps {
  className?: string;
}

export const ElitePlumbingLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="80" rx="8" fill="#1E40AF"/>
    <circle cx="25" cy="25" r="15" fill="#3B82F6"/>
    <rect x="21" y="18" width="8" height="14" rx="1" fill="white"/>
    <rect x="17" y="25" width="16" height="4" rx="2" fill="white"/>
    <circle cx="19" cy="27" r="1" fill="#1E40AF"/>
    <circle cx="31" cy="27" r="1" fill="#1E40AF"/>
    <text x="60" y="28" textAnchor="middle" className="text-xl font-bold" fill="white">ELITE</text>
    <text x="60" y="42" textAnchor="middle" className="text-sm" fill="#93C5FD">PLUMBING</text>
    <text x="60" y="55" textAnchor="middle" className="text-xs" fill="#DBEAFE">24/7 Emergency Service</text>
    <text x="60" y="68" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">(555) 123-ELITE</text>
  </svg>
);

export const RapidResponseLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="80" rx="8" fill="#DC2626"/>
    <path d="M15 22 L25 12 L35 22 L32 22 L32 32 L18 32 L18 22 Z" fill="#FCA5A5"/>
    <rect x="21" y="16" width="8" height="12" rx="1" fill="white"/>
    <circle cx="23" cy="20" r="1" fill="#DC2626"/>
    <circle cx="27" cy="20" r="1" fill="#DC2626"/>
    <rect x="10" y="36" width="30" height="3" rx="1.5" fill="white"/>
    <circle cx="18" cy="42" r="2" fill="white"/>
    <circle cx="32" cy="42" r="2" fill="white"/>
    <text x="75" y="22" textAnchor="middle" className="text-lg font-bold" fill="white">RAPID</text>
    <text x="75" y="35" textAnchor="middle" className="text-lg font-bold" fill="#FCA5A5">RESPONSE</text>
    <text x="75" y="48" textAnchor="middle" className="text-sm" fill="#FECACA">Plumbing Pros</text>
    <text x="75" y="61" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">CALL: (555) RAPID-1</text>
    <text x="75" y="72" textAnchor="middle" className="text-xs" fill="#FEE2E2">Same Day Service</text>
  </svg>
);

export const MetroDrainLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="120" height="80" rx="8" fill="#059669"/>
    <circle cx="25" cy="25" r="18" fill="#10B981"/>
    <circle cx="25" cy="25" r="14" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="25" cy="25" r="8" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="25" cy="25" r="3" fill="white"/>
    <path d="M25 10 L28 16 L22 16 Z" fill="white"/>
    <path d="M40 25 L34 22 L34 28 Z" fill="white"/>
    <path d="M25 40 L22 34 L28 34 Z" fill="white"/>
    <path d="M10 25 L16 28 L16 22 Z" fill="white"/>
    <text x="75" y="20" textAnchor="middle" className="text-lg font-bold" fill="white">METRO</text>
    <text x="75" y="33" textAnchor="middle" className="text-lg font-bold" fill="#6EE7B7">DRAIN</text>
    <text x="75" y="46" textAnchor="middle" className="text-sm" fill="#A7F3D0">Solutions Inc.</text>
    <text x="75" y="59" textAnchor="middle" className="text-xs" fill="#D1FAE5">Drain • Sewer • Rooter</text>
    <text x="75" y="70" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">(555) METRO-99</text>
  </svg>
);

export const EmergencyPipeLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#7C3AED"/>
    <rect x="24" y="16" width="16" height="32" rx="8" fill="#A855F7"/>
    <rect x="26" y="18" width="12" height="28" rx="6" fill="white"/>
    <circle cx="32" cy="26" r="3" fill="#7C3AED"/>
    <rect x="29" y="32" width="6" height="10" rx="1" fill="#7C3AED"/>
    <path d="M44 24 L52 16 L56 20 L48 28 Z" fill="#EF4444"/>
    <circle cx="50" cy="22" r="3" fill="#EF4444"/>
    <rect x="18" y="52" width="28" height="6" rx="3" fill="white"/>
    <text x="32" y="57" textAnchor="middle" className="text-xs font-bold" fill="#7C3AED">EMERGENCY</text>
  </svg>
);

export const AllHoursPlumbingLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="12" fill="#F59E0B"/>
    <circle cx="32" cy="32" r="22" fill="#FBBF24"/>
    <circle cx="32" cy="32" r="18" fill="none" stroke="white" strokeWidth="3"/>
    <circle cx="32" cy="32" r="3" fill="white"/>
    <path d="M32 14 L34 20 L30 20 Z" fill="white"/>
    <path d="M32 50 L30 44 L34 44 Z" fill="white"/>
    <path d="M50 32 L44 30 L44 34 Z" fill="white"/>
    <path d="M14 32 L20 34 L20 30 Z" fill="white"/>
    <rect x="31" y="20" width="2" height="8" fill="white"/>
    <rect x="31" y="24" width="8" height="2" fill="white"/>
    <rect x="20" y="52" width="24" height="6" rx="3" fill="white"/>
    <text x="32" y="56.5" textAnchor="middle" className="text-xs font-bold" fill="#F59E0B">24 HOURS</text>
  </svg>
);

export const getPlumbingCompanyLogo = (companyName: string, className?: string) => {
  switch (companyName) {
    case "Elite Plumbing Solutions":
      return <ElitePlumbingLogo className={className} />;
    case "Rapid Response Plumbers":
      return <RapidResponseLogo className={className} />;
    case "Metro Drain Solutions":
      return <MetroDrainLogo className={className} />;
    case "Emergency Pipe Pros":
      return <EmergencyPipeLogo className={className} />;
    case "All Hours Plumbing Co":
      return <AllHoursPlumbingLogo className={className} />;
    default:
      return <div className="text-2xl">🔧</div>; // Fallback to emoji
  }
};
