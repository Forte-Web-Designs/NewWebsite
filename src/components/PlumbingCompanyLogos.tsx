import React from 'react';

interface PlumbingLogoProps {
  className?: string;
}

export const ElitePlumbingLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background with gradient */}
    <rect width="140" height="90" rx="12" fill="url(#eliteGrad)"/>
    <defs>
      <linearGradient id="eliteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A8A"/>
        <stop offset="100%" stopColor="#3B82F6"/>
      </linearGradient>
    </defs>
    
    {/* Elite logo mark - stylized 'E' with wrench */}
    <rect x="15" y="20" width="25" height="4" fill="white" rx="2"/>
    <rect x="15" y="20" width="4" height="30" fill="white" rx="2"/>
    <rect x="15" y="32" width="20" height="4" fill="white" rx="2"/>
    <rect x="15" y="46" width="25" height="4" fill="white" rx="2"/>
    
    {/* Wrench accent */}
    <ellipse cx="46" cy="35" rx="3" ry="8" fill="#FCD34D" transform="rotate(25 46 35)"/>
    <rect x="44" y="28" width="4" height="6" fill="#FCD34D" rx="2" transform="rotate(25 46 31)"/>
    
    {/* Company text */}
    <text x="75" y="28" textAnchor="middle" className="text-lg font-bold" fill="white">ELITE</text>
    <text x="75" y="42" textAnchor="middle" className="text-sm font-semibold" fill="#93C5FD">PLUMBING</text>
    <text x="75" y="56" textAnchor="middle" className="text-xs" fill="#DBEAFE">Licensed & Bonded Since 1987</text>
    <text x="75" y="68" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">(214) 555-ELITE</text>
    <text x="75" y="78" textAnchor="middle" className="text-xs" fill="#BFDBFE">⭐⭐⭐⭐⭐ 5.0/5 Reviews</text>
  </svg>
);

export const RapidResponseLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="140" height="90" rx="12" fill="#DC2626"/>
    
    {/* Lightning bolt speed lines */}
    <path d="M20 25 L32 15 L28 30 L35 30 L23 45 L27 35 L20 35 Z" fill="#FCD34D"/>
    <rect x="12" y="35" width="6" height="2" fill="white" opacity="0.8"/>
    <rect x="14" y="40" width="4" height="2" fill="white" opacity="0.6"/>
    <rect x="16" y="30" width="8" height="2" fill="white" opacity="0.7"/>
    
    {/* Van silhouette */}
    <rect x="38" y="32" width="16" height="8" fill="white" rx="2"/>
    <rect x="36" y="36" width="4" height="4" fill="white" rx="2"/>
    <circle cx="40" cy="42" r="2" fill="#DC2626"/>
    <circle cx="50" cy="42" r="2" fill="#DC2626"/>
    
    {/* Company text */}
    <text x="85" y="22" textAnchor="middle" className="text-base font-black" fill="white">RAPID</text>
    <text x="85" y="35" textAnchor="middle" className="text-base font-black" fill="#FCA5A5">RESPONSE</text>
    <text x="85" y="47" textAnchor="middle" className="text-sm font-semibold" fill="#FECACA">PLUMBING</text>
    <text x="85" y="58" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">24/7 EMERGENCY</text>
    <text x="85" y="68" textAnchor="middle" className="text-xs font-bold" fill="white">(817) 555-FAST</text>
    <text x="85" y="78" textAnchor="middle" className="text-xs" fill="#FEE2E2">✓ 15 Min Response Time</text>
  </svg>
);

export const MetroDrainLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="140" height="90" rx="12" fill="#065F46"/>
    
    {/* Drain/pipe system */}
    <circle cx="30" cy="30" r="12" fill="none" stroke="#10B981" strokeWidth="3"/>
    <circle cx="30" cy="30" r="8" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="30" cy="30" r="3" fill="#10B981"/>
    
    {/* Flow arrows */}
    <path d="M15 45 Q30 50 45 45" stroke="#6EE7B7" strokeWidth="2" fill="none"/>
    <path d="M40 42 L45 45 L40 48" fill="#6EE7B7"/>
    <path d="M15 50 Q30 55 45 50" stroke="#6EE7B7" strokeWidth="2" fill="none"/>
    <path d="M40 47 L45 50 L40 53" fill="#6EE7B7"/>
    
    {/* Metro text styling */}
    <text x="85" y="23" textAnchor="middle" className="text-lg font-black" fill="white">METRO</text>
    <text x="85" y="37" textAnchor="middle" className="text-lg font-black" fill="#6EE7B7">DRAIN</text>
    <text x="85" y="49" textAnchor="middle" className="text-sm font-semibold" fill="#A7F3D0">SOLUTIONS</text>
    <text x="85" y="60" textAnchor="middle" className="text-xs" fill="#D1FAE5">Drain • Sewer • Rooter • Hydro Jetting</text>
    <text x="85" y="70" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">(469) 555-DRAIN</text>
    <text x="85" y="80" textAnchor="middle" className="text-xs" fill="#ECFDF5">Serving DFW Since 2003</text>
  </svg>
);

export const EmergencyPipeLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="100" height="80" rx="10" fill="#7C3AED"/>
    
    {/* Emergency badge/shield */}
    <path d="M20 15 L35 15 L35 25 L27.5 35 L20 25 Z" fill="#A855F7"/>
    <path d="M22 18 L33 18 L33 23 L27.5 30 L22 23 Z" fill="white"/>
    <text x="27.5" y="25" textAnchor="middle" className="text-xs font-bold" fill="#7C3AED">911</text>
    
    {/* Pipe wrench */}
    <rect x="37" y="22" width="3" height="15" fill="white" rx="1"/>
    <ellipse cx="38.5" cy="20" rx="2" ry="3" fill="#FCD34D"/>
    <ellipse cx="38.5" cy="39" rx="2" ry="3" fill="#FCD34D"/>
    
    {/* Company text */}
    <text x="50" y="20" textAnchor="middle" className="text-sm font-black" fill="white">EMERGENCY</text>
    <text x="50" y="32" textAnchor="middle" className="text-sm font-black" fill="#C084FC">PIPE PROS</text>
    <text x="50" y="44" textAnchor="middle" className="text-xs font-semibold" fill="#E9D5FF">Licensed Master Plumbers</text>
    <text x="50" y="54" textAnchor="middle" className="text-xs font-bold" fill="#FCD34D">(972) 555-PIPE</text>
    <text x="50" y="64" textAnchor="middle" className="text-xs" fill="#F3E8FF">Available 24/7/365</text>
    <text x="50" y="73" textAnchor="middle" className="text-xs" fill="#DDD6FE">⚡ Same Day Service</text>
  </svg>
);

export const AllHoursPlumbingLogo: React.FC<PlumbingLogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background with orange gradient */}
    <rect width="120" height="80" rx="10" fill="url(#orangeGrad)"/>
    <defs>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EA580C"/>
        <stop offset="100%" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
    
    {/* Clock face */}
    <circle cx="25" cy="25" r="15" fill="white"/>
    <circle cx="25" cy="25" r="12" fill="none" stroke="#F59E0B" strokeWidth="2"/>
    <circle cx="25" cy="25" r="2" fill="#F59E0B"/>
    
    {/* Clock hands showing 24/7 */}
    <rect x="24" y="16" width="2" height="7" fill="#F59E0B" rx="1"/>
    <rect x="21" y="24" width="6" height="2" fill="#F59E0B" rx="1"/>
    
    {/* Clock numbers (12, 3, 6, 9) */}
    <text x="25" y="17" textAnchor="middle" className="text-xs font-bold" fill="#F59E0B">12</text>
    <text x="32" y="27" textAnchor="middle" className="text-xs font-bold" fill="#F59E0B">3</text>
    <text x="25" y="35" textAnchor="middle" className="text-xs font-bold" fill="#F59E0B">6</text>
    <text x="18" y="27" textAnchor="middle" className="text-xs font-bold" fill="#F59E0B">9</text>
    
    {/* Wrench accent */}
    <rect x="15" y="45" width="20" height="3" fill="white" rx="1"/>
    <circle cx="18" cy="46.5" r="2" fill="white"/>
    <circle cx="32" cy="46.5" r="2" fill="white"/>
    
    {/* Company text */}
    <text x="70" y="18" textAnchor="middle" className="text-sm font-black" fill="white">ALL HOURS</text>
    <text x="70" y="30" textAnchor="middle" className="text-sm font-black" fill="#FEF3C7">PLUMBING</text>
    <text x="70" y="42" textAnchor="middle" className="text-xs font-semibold" fill="#FDE68A">& DRAIN SERVICE</text>
    <text x="70" y="52" textAnchor="middle" className="text-xs" fill="white">Never an Overtime Charge!</text>
    <text x="70" y="62" textAnchor="middle" className="text-xs font-bold" fill="white">(214) 555-24HR</text>
    <text x="70" y="72" textAnchor="middle" className="text-xs" fill="#FEF3C7">Family Owned & Operated</text>
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
