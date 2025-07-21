import React from 'react';

interface LogoProps {
  className?: string;
}

// HVAC Company Logos
export const EliteClimateControlLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2"/>
    <path d="M32 12v8M32 44v8M12 32h8M44 32h8" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="8" fill="#DC2626"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
    <text x="32" y="56" textAnchor="middle" className="fill-gray-700 text-[6px] font-bold">ELITE AC</text>
  </svg>
);

export const AllSeasonHVACLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="32" rx="6" fill="#10B981" stroke="#059669" strokeWidth="2"/>
    <rect x="12" y="20" width="8" height="24" fill="white" opacity="0.8"/>
    <rect x="22" y="20" width="8" height="24" fill="white" opacity="0.6"/>
    <rect x="32" y="20" width="8" height="24" fill="white" opacity="0.4"/>
    <rect x="42" y="20" width="8" height="24" fill="white" opacity="0.2"/>
    <text x="32" y="56" textAnchor="middle" className="fill-green-700 text-[5px] font-bold">ALL SEASON</text>
  </svg>
);

export const ComfortZoneHVACLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
    <path d="M20 32h24M32 20v24" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" fill="#EF4444"/>
    <circle cx="40" cy="24" r="3" fill="#3B82F6"/>
    <text x="32" y="56" textAnchor="middle" className="fill-amber-700 text-[5px] font-bold">COMFORT</text>
  </svg>
);

export const PremierHeatingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 48,24 48,48 16,48 16,24" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2"/>
    <rect x="20" y="28" width="24" height="16" rx="2" fill="white"/>
    <rect x="24" y="32" width="4" height="8" fill="#7C3AED"/>
    <rect x="30" y="32" width="4" height="8" fill="#7C3AED"/>
    <rect x="36" y="32" width="4" height="8" fill="#7C3AED"/>
    <text x="32" y="58" textAnchor="middle" className="fill-purple-700 text-[5px] font-bold">PREMIER</text>
  </svg>
);

export const EmergencyClimateProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
    <polygon points="32,12 40,28 24,28" fill="white"/>
    <rect x="28" y="28" width="8" height="16" fill="white"/>
    <rect x="24" y="44" width="16" height="4" rx="2" fill="white"/>
    <text x="32" y="58" textAnchor="middle" className="fill-red-700 text-[4px] font-bold">EMERGENCY</text>
  </svg>
);

// Restaurant Company Logos
export const RedOakSmokehouseLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="20" width="48" height="28" rx="4" fill="#92400E" stroke="#78350F" strokeWidth="2"/>
    <rect x="12" y="24" width="40" height="20" rx="2" fill="#FDE68A"/>
    <path d="M16 28h32M16 32h32M16 36h32M16 40h32" stroke="#92400E" strokeWidth="1"/>
    <circle cx="48" cy="16" r="4" fill="#6B7280" opacity="0.7"/>
    <circle cx="44" cy="12" r="2" fill="#6B7280" opacity="0.5"/>
    <circle cx="52" cy="12" r="2" fill="#6B7280" opacity="0.3"/>
    <text x="32" y="56" textAnchor="middle" className="fill-amber-800 text-[4px] font-bold">RED OAK BBQ</text>
  </svg>
);

export const BellaVistaItalianLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="28" rx="24" ry="20" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <path d="M20 20c4-8 16-8 20 0s16 8 20 0" stroke="white" strokeWidth="3" fill="none"/>
    <circle cx="26" cy="32" r="3" fill="#DC2626"/>
    <circle cx="32" cy="30" r="3" fill="#DC2626"/>
    <circle cx="38" cy="32" r="3" fill="#DC2626"/>
    <path d="M24 38h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <text x="32" y="56" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">BELLA VISTA</text>
  </svg>
);

export const MetroSushiBarLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <circle cx="32" cy="32" r="12" fill="#EF4444"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
    <rect x="16" y="30" width="32" height="4" fill="#374151"/>
    <text x="32" y="56" textAnchor="middle" className="fill-gray-700 text-[4px] font-bold">METRO SUSHI</text>
  </svg>
);

export const FarmTableBistroLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="20" fill="#16A34A" stroke="#15803D" strokeWidth="2"/>
    <path d="M28 20v8h8v-8M32 28v12M24 40h16" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="20" cy="24" r="2" fill="#22C55E"/>
    <circle cx="44" cy="24" r="2" fill="#22C55E"/>
    <circle cx="20" cy="40" r="2" fill="#22C55E"/>
    <circle cx="44" cy="40" r="2" fill="#22C55E"/>
    <text x="32" y="58" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">FARM TABLE</text>
  </svg>
);

export const TacoLibreKitchenLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#EA580C" stroke="#C2410C" strokeWidth="2"/>
    <path d="M12 32c8-16 32-16 40 0c-8 16-32 16-40 0z" fill="#FED7AA"/>
    <ellipse cx="32" cy="28" rx="16" ry="4" fill="#92400E"/>
    <circle cx="24" cy="30" r="2" fill="#EF4444"/>
    <circle cx="32" cy="30" r="2" fill="#22C55E"/>
    <circle cx="40" cy="30" r="2" fill="#EAB308"/>
    <text x="32" y="56" textAnchor="middle" className="fill-orange-700 text-[4px] font-bold">TACO LIBRE</text>
  </svg>
);

// Landscaping Company Logos
export const SandiaLandscapingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 48,24 40,40 24,40 16,24" fill="#16A34A" stroke="#15803D" strokeWidth="2"/>
    <circle cx="28" cy="28" r="6" fill="#22C55E"/>
    <circle cx="36" cy="28" r="4" fill="#22C55E"/>
    <path d="M20 40c4-4 8-4 12 0s8 4 12 0" stroke="#15803D" strokeWidth="2" fill="none"/>
    <text x="32" y="56" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">SANDIA</text>
  </svg>
);

export const DesertBloomLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
    <path d="M32 16c-8 4-8 12 0 16c8-4 8-12 0-16z" fill="#DC2626"/>
    <path d="M24 24c-4 8 4 16 8 12c4-4-4-12-8-12z" fill="#DC2626"/>
    <path d="M40 24c4 8-4 16-8 12c-4-4 4-12 8-12z" fill="#DC2626"/>
    <circle cx="32" cy="36" r="3" fill="#22C55E"/>
    <text x="32" y="56" textAnchor="middle" className="fill-amber-700 text-[3px] font-bold">DESERT BLOOM</text>
  </svg>
);

export const MountainViewOutdoorLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="8,40 24,16 40,24 56,40 8,40" fill="#6B7280" stroke="#4B5563" strokeWidth="2"/>
    <polygon points="8,40 20,28 36,32 56,40 8,40" fill="#9CA3AF"/>
    <rect x="8" y="40" width="48" height="8" fill="#16A34A"/>
    <circle cx="16" cy="44" r="1" fill="#22C55E"/>
    <circle cx="24" cy="44" r="1" fill="#22C55E"/>
    <circle cx="32" cy="44" r="1" fill="#22C55E"/>
    <circle cx="40" cy="44" r="1" fill="#22C55E"/>
    <circle cx="48" cy="44" r="1" fill="#22C55E"/>
    <text x="32" y="58" textAnchor="middle" className="fill-gray-700 text-[3px] font-bold">MOUNTAIN VIEW</text>
  </svg>
);

export const RioGrandeLawnCareLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="48" height="24" rx="12" fill="#3B82F6" stroke="#2563EB" strokeWidth="2"/>
    <path d="M12 32c12-8 28-8 40 0" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M16 36c8-4 24-4 32 0" stroke="white" strokeWidth="1" fill="none"/>
    <rect x="8" y="36" width="48" height="12" fill="#16A34A"/>
    <path d="M12 40h4v4h-4zM20 40h4v4h-4zM28 40h4v4h-4zM36 40h4v4h-4zM44 40h4v4h-4z" fill="#22C55E"/>
    <text x="32" y="58" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">RIO GRANDE</text>
  </svg>
);

export const SouthwestGardenLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="6" fill="#0891B2" stroke="#0E7490" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="#22C55E"/>
    <circle cx="40" cy="24" r="4" fill="#EAB308"/>
    <circle cx="24" cy="40" r="4" fill="#DC2626"/>
    <circle cx="40" cy="40" r="6" fill="#A855F7"/>
    <path d="M16 32h32" stroke="white" strokeWidth="2"/>
    <path d="M32 16v32" stroke="white" strokeWidth="2"/>
    <text x="32" y="58" textAnchor="middle" className="fill-cyan-700 text-[3px] font-bold">SOUTHWEST</text>
  </svg>
);

// Handyman Company Logos
export const RedRiverHandymanLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="32" rx="4" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
    <rect x="16" y="24" width="32" height="16" rx="2" fill="white"/>
    <path d="M24 32h16M28 28v8M36 28v8" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="44" cy="20" r="3" fill="#FCD34D"/>
    <text x="32" y="56" textAnchor="middle" className="fill-red-700 text-[4px] font-bold">RED RIVER</text>
  </svg>
);

export const AllFixHomeServicesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 52,28 52,48 12,48 12,28" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2"/>
    <rect x="20" y="32" width="24" height="16" rx="2" fill="white"/>
    <circle cx="24" cy="36" r="2" fill="#2563EB"/>
    <rect x="28" y="34" width="8" height="4" fill="#2563EB"/>
    <circle cx="40" cy="36" r="2" fill="#2563EB"/>
    <rect x="20" y="42" width="24" height="2" fill="#2563EB"/>
    <text x="32" y="58" textAnchor="middle" className="fill-blue-700 text-[4px] font-bold">ALL-FIX</text>
  </svg>
);

export const ReliableRepairsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <rect x="24" y="16" width="16" height="32" rx="2" fill="white"/>
    <path d="M28 24h8M28 28h8M28 32h8M28 36h8M28 40h8" stroke="#059669" strokeWidth="2"/>
    <circle cx="32" cy="20" r="2" fill="#059669"/>
    <text x="32" y="56" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">RELIABLE</text>
  </svg>
);

export const QuickFixSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
    <path d="M24 24l16 16M40 24L24 40" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
    <path d="M32 26v12M26 32h12" stroke="#F59E0B" strokeWidth="2"/>
    <text x="32" y="58" textAnchor="middle" className="fill-amber-700 text-[4px] font-bold">QUICK FIX</text>
  </svg>
);

export const HomeHelperProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 54,30 50,30 50,52 14,52 14,30 10,30" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2"/>
    <rect x="22" y="34" width="20" height="18" rx="2" fill="white"/>
    <rect x="26" y="38" width="4" height="8" fill="#7C3AED"/>
    <rect x="34" y="38" width="4" height="8" fill="#7C3AED"/>
    <rect x="26" y="46" width="12" height="6" rx="1" fill="#7C3AED"/>
    <text x="32" y="60" textAnchor="middle" className="fill-purple-700 text-[4px] font-bold">HOME HELPER</text>
  </svg>
);

// Painters Company Logos
export const PrecisionPaintCoLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="6" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
    <rect x="16" y="16" width="32" height="12" fill="#EF4444"/>
    <rect x="16" y="28" width="32" height="12" fill="white"/>
    <rect x="16" y="40" width="32" height="8" fill="#3B82F6"/>
    <circle cx="20" cy="22" r="2" fill="white"/>
    <circle cx="44" cy="22" r="2" fill="white"/>
    <text x="32" y="58" textAnchor="middle" className="fill-gray-700 text-[4px] font-bold">PRECISION</text>
  </svg>
);

export const EliteInteriorPaintingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2"/>
    <path d="M20 20h24v24H20z" fill="white"/>
    <path d="M24 24v16M28 24v16M32 24v16M36 24v16M40 24v16" stroke="#7C3AED" strokeWidth="2"/>
    <rect x="18" y="42" width="28" height="4" rx="2" fill="#FCD34D"/>
    <text x="32" y="58" textAnchor="middle" className="fill-purple-700 text-[4px] font-bold">ELITE PAINT</text>
  </svg>
);

export const ProExteriorSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 54,30 54,52 10,52 10,30" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <rect x="18" y="32" width="28" height="20" rx="2" fill="white"/>
    <rect x="22" y="36" width="8" height="12" fill="#059669"/>
    <rect x="34" y="36" width="8" height="12" fill="#059669"/>
    <rect x="26" y="44" width="12" height="8" rx="1" fill="#059669"/>
    <text x="32" y="60" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">PRO EXTERIOR</text>
  </svg>
);

export const ColorCraftPaintersLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="24" fill="#F59E0B" stroke="#D97706" strokeWidth="2"/>
    <circle cx="24" cy="24" r="6" fill="#EF4444"/>
    <circle cx="40" cy="24" r="6" fill="#3B82F6"/>
    <circle cx="24" cy="40" r="6" fill="#22C55E"/>
    <circle cx="40" cy="40" r="6" fill="#A855F7"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
    <text x="32" y="60" textAnchor="middle" className="fill-amber-700 text-[4px] font-bold">COLOR CRAFT</text>
  </svg>
);

export const PremierPaintWorksLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="40" height="32" rx="4" fill="#0891B2" stroke="#0E7490" strokeWidth="2"/>
    <path d="M16 24l8 8l8-8l8 8l8-8v16H16V24z" fill="white"/>
    <rect x="28" y="20" width="8" height="24" fill="#0891B2"/>
    <circle cx="32" cy="28" r="3" fill="white"/>
    <text x="32" y="56" textAnchor="middle" className="fill-cyan-700 text-[4px] font-bold">PREMIER</text>
  </svg>
);

// Construction Company Logos  
export const SouthCoreContractingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="8" fill="#1F2937" stroke="#111827" strokeWidth="2"/>
    <rect x="16" y="16" width="32" height="24" fill="#F59E0B"/>
    <rect x="20" y="20" width="24" height="4" fill="white"/>
    <rect x="20" y="28" width="24" height="4" fill="white"/>
    <rect x="20" y="36" width="24" height="4" fill="white"/>
    <rect x="16" y="40" width="32" height="8" fill="#DC2626"/>
    <text x="32" y="60" textAnchor="middle" className="fill-gray-700 text-[3px] font-bold">SOUTHCORE</text>
  </svg>
);

export const PremierConstructionLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 56,32 32,56 8,32" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2"/>
    <rect x="24" y="24" width="16" height="16" rx="2" fill="white"/>
    <path d="M28 28h8M28 32h8M28 36h8" stroke="#2563EB" strokeWidth="2"/>
    <text x="32" y="60" textAnchor="middle" className="fill-blue-700 text-[4px] font-bold">PREMIER</text>
  </svg>
);

export const SolidFoundationLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="32" width="48" height="16" fill="#78716C" stroke="#57534E" strokeWidth="2"/>
    <polygon points="16,32 24,16 40,16 48,32" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <rect x="12" y="40" width="40" height="4" fill="#44403C"/>
    <rect x="28" y="20" width="8" height="12" fill="white"/>
    <text x="32" y="58" textAnchor="middle" className="fill-stone-700 text-[3px] font-bold">SOLID FOUND.</text>
  </svg>
);

export const MetroCommercialLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="4" fill="#0891B2" stroke="#0E7490" strokeWidth="2"/>
    <rect x="16" y="16" width="10" height="32" fill="white"/>
    <rect x="38" y="16" width="10" height="32" fill="white"/>
    <rect x="26" y="24" width="12" height="24" fill="white"/>
    <rect x="18" y="20" width="6" height="4" fill="#0891B2"/>
    <rect x="18" y="28" width="6" height="4" fill="#0891B2"/>
    <rect x="18" y="36" width="6" height="4" fill="#0891B2"/>
    <text x="32" y="58" textAnchor="middle" className="fill-cyan-700 text-[4px] font-bold">METRO</text>
  </svg>
);

export const EliteBuildingSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 52,24 52,48 12,48 12,24" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2"/>
    <rect x="18" y="28" width="28" height="20" rx="2" fill="white"/>
    <rect x="22" y="32" width="6" height="8" fill="#7C3AED"/>
    <rect x="29" y="32" width="6" height="8" fill="#7C3AED"/>
    <rect x="36" y="32" width="6" height="8" fill="#7C3AED"/>
    <rect x="22" y="40" width="20" height="8" rx="1" fill="#7C3AED"/>
    <text x="32" y="60" textAnchor="middle" className="fill-purple-700 text-[4px] font-bold">ELITE BUILD</text>
  </svg>
);

// Healthcare Company Logos
export const RioVerdePediatricsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#06B6D4" stroke="#0891B2" strokeWidth="2"/>
    <path d="M32 16v32M16 32h32" stroke="white" strokeWidth="6" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="8" fill="white"/>
    <path d="M32 26v12M26 32h12" stroke="#06B6D4" strokeWidth="2"/>
    <text x="32" y="58" textAnchor="middle" className="fill-cyan-700 text-[4px] font-bold">RIO VERDE</text>
  </svg>
);

export const SouthwestFamilyMedicineLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="32" rx="16" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <circle cx="24" cy="28" r="4" fill="white"/>
    <circle cx="40" cy="28" r="4" fill="white"/>
    <path d="M24 36c2 4 6 4 8 4s6 0 8-4" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <text x="32" y="56" textAnchor="middle" className="fill-green-700 text-[3px] font-bold">SW FAMILY</text>
  </svg>
);

export const DesertDentalAssociatesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="32" rx="24" ry="26" fill="white" stroke="#2563EB" strokeWidth="3"/>
    <path d="M20 28c4-4 8-4 12 0s8 4 12 0" stroke="#2563EB" strokeWidth="2" fill="none"/>
    <rect x="22" y="32" width="4" height="8" rx="2" fill="#2563EB"/>
    <rect x="26" y="30" width="4" height="10" rx="2" fill="#2563EB"/>
    <rect x="30" y="28" width="4" height="12" rx="2" fill="#2563EB"/>
    <rect x="34" y="30" width="4" height="10" rx="2" fill="#2563EB"/>
    <rect x="38" y="32" width="4" height="8" rx="2" fill="#2563EB"/>
    <text x="32" y="60" textAnchor="middle" className="fill-blue-700 text-[3px] font-bold">DESERT DENTAL</text>
  </svg>
);

export const MountainViewCardiologyLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 12c-6 0-12 4-12 10c0 12 12 24 12 30c0-6 12-18 12-30c0-6-6-10-12-10z" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
    <circle cx="32" cy="22" r="6" fill="white"/>
    <path d="M32 18v8M28 22h8" stroke="#DC2626" strokeWidth="2"/>
    <path d="M16 40c8-4 16-4 32 0c-8 8-24 8-32 0z" fill="#6B7280"/>
    <text x="32" y="58" textAnchor="middle" className="fill-red-700 text-[3px] font-bold">MTN VIEW</text>
  </svg>
);

export const CentralPlainsOrthopedicsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#0891B2" stroke="#0E7490" strokeWidth="2"/>
    <ellipse cx="32" cy="28" rx="12" ry="8" fill="white"/>
    <rect x="28" y="28" width="8" height="16" rx="2" fill="white"/>
    <circle cx="32" cy="44" r="4" fill="white"/>
    <path d="M24 32h16M24 36h16" stroke="#0891B2" strokeWidth="1"/>
    <text x="32" y="60" textAnchor="middle" className="fill-cyan-700 text-[3px] font-bold">CENTRAL PLAINS</text>
  </svg>
);

// Electrician Company Logos
export const PrecisionPowerTechsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#FCD34D" stroke="#F59E0B" strokeWidth="2"/>
    <polygon points="32,12 40,28 24,28" fill="#1F2937"/>
    <rect x="28" y="28" width="8" height="16" fill="#1F2937"/>
    <rect x="24" y="44" width="16" height="4" rx="2" fill="#1F2937"/>
    <circle cx="20" cy="20" r="2" fill="#EF4444"/>
    <circle cx="44" cy="20" r="2" fill="#EF4444"/>
    <text x="32" y="58" textAnchor="middle" className="fill-amber-700 text-[4px] font-bold">PRECISION</text>
  </svg>
);

export const ReliableElectricSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="40" rx="6" fill="#2563EB" stroke="#1D4ED8" strokeWidth="2"/>
    <circle cx="32" cy="32" r="16" fill="white"/>
    <path d="M24 24l16 16M40 24L24 40" stroke="#2563EB" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="6" fill="#2563EB"/>
    <circle cx="32" cy="32" r="2" fill="white"/>
    <text x="32" y="58" textAnchor="middle" className="fill-blue-700 text-[4px] font-bold">RELIABLE</text>
  </svg>
);

export const MasterVoltSpecialistsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 56,32 32,56 8,32" fill="#7C3AED" stroke="#6D28D9" strokeWidth="2"/>
    <polygon points="32,16 44,32 32,48 20,32" fill="white"/>
    <polygon points="32,20 36,32 32,44 28,32" fill="#7C3AED"/>
    <path d="M16 16l8 8M48 16l-8 8M16 48l8-8M48 48l-8-8" stroke="#FCD34D" strokeWidth="2"/>
    <text x="32" y="60" textAnchor="middle" className="fill-purple-700 text-[4px] font-bold">MASTER VOLT</text>
  </svg>
);

export const EmergencyPowerProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
    <polygon points="32,12 40,28 28,28 36,44 24,44 32,12" fill="white"/>
    <circle cx="16" cy="16" r="3" fill="#FCD34D" opacity="0.8"/>
    <circle cx="48" cy="16" r="3" fill="#FCD34D" opacity="0.8"/>
    <circle cx="16" cy="48" r="3" fill="#FCD34D" opacity="0.8"/>
    <circle cx="48" cy="48" r="3" fill="#FCD34D" opacity="0.8"/>
    <text x="32" y="58" textAnchor="middle" className="fill-red-700 text-[3px] font-bold">EMERGENCY</text>
  </svg>
);

export const EliteElectricalServicesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <circle cx="32" cy="32" r="14" fill="white"/>
    <path d="M32 20v6M32 38v6M20 32h6M38 32h6" stroke="#059669" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="4" fill="#059669"/>
    <text x="32" y="58" textAnchor="middle" className="fill-green-700 text-[4px] font-bold">ELITE ELECTRIC</text>
  </svg>
);

// Helper function to get appropriate logo by company name and industry
export const getCompanyLogo = (companyName: string, industry?: string, className?: string) => {
  // HVAC Companies
  if (companyName.includes("Elite Climate") || companyName.includes("High Desert Comfort")) {
    return <EliteClimateControlLogo className={className} />;
  }
  if (companyName.includes("All Season") || companyName.includes("All Season Climate")) {
    return <AllSeasonHVACLogo className={className} />;
  }
  if (companyName.includes("Comfort") || companyName.includes("Elite HVAC")) {
    return <ComfortZoneHVACLogo className={className} />;
  }
  if (companyName.includes("Premier Heating") || companyName.includes("Premier Heating & Cooling")) {
    return <PremierHeatingLogo className={className} />;
  }
  if (companyName.includes("Emergency Comfort") || companyName.includes("Emergency")) {
    return <EmergencyClimateProLogo className={className} />;
  }

  // Restaurant Companies
  if (companyName.includes("Red Oak") || companyName.includes("Smokehouse")) {
    return <RedOakSmokehouseLogo className={className} />;
  }
  if (companyName.includes("Bella Vista")) {
    return <BellaVistaItalianLogo className={className} />;
  }
  if (companyName.includes("Metro Sushi") || companyName.includes("Sushi")) {
    return <MetroSushiBarLogo className={className} />;
  }
  if (companyName.includes("Farm Table") || companyName.includes("Bistro")) {
    return <FarmTableBistroLogo className={className} />;
  }
  if (companyName.includes("Taco Libre") || companyName.includes("Taco")) {
    return <TacoLibreKitchenLogo className={className} />;
  }

  // Landscaping Companies
  if (companyName.includes("Sandia")) {
    return <SandiaLandscapingLogo className={className} />;
  }
  if (companyName.includes("Desert Bloom")) {
    return <DesertBloomLogo className={className} />;
  }
  if (companyName.includes("Mountain View") && companyName.includes("Outdoor")) {
    return <MountainViewOutdoorLogo className={className} />;
  }
  if (companyName.includes("Rio Grande")) {
    return <RioGrandeLawnCareLogo className={className} />;
  }
  if (companyName.includes("Southwest Garden")) {
    return <SouthwestGardenLogo className={className} />;
  }

  // Handyman Companies
  if (companyName.includes("Red River")) {
    return <RedRiverHandymanLogo className={className} />;
  }
  if (companyName.includes("All-Fix") || companyName.includes("All Fix")) {
    return <AllFixHomeServicesLogo className={className} />;
  }
  if (companyName.includes("Reliable Repairs")) {
    return <ReliableRepairsLogo className={className} />;
  }
  if (companyName.includes("Quick Fix")) {
    return <QuickFixSolutionsLogo className={className} />;
  }
  if (companyName.includes("Home Helper")) {
    return <HomeHelperProLogo className={className} />;
  }

  // Painter Companies
  if (companyName.includes("Precision Paint")) {
    return <PrecisionPaintCoLogo className={className} />;
  }
  if (companyName.includes("Elite Interior")) {
    return <EliteInteriorPaintingLogo className={className} />;
  }
  if (companyName.includes("Pro Exterior")) {
    return <ProExteriorSolutionsLogo className={className} />;
  }
  if (companyName.includes("Color Craft")) {
    return <ColorCraftPaintersLogo className={className} />;
  }
  if (companyName.includes("Premier Paint")) {
    return <PremierPaintWorksLogo className={className} />;
  }

  // Construction Companies
  if (companyName.includes("SouthCore") || companyName.includes("Southcore")) {
    return <SouthCoreContractingLogo className={className} />;
  }
  if (companyName.includes("Premier Construction")) {
    return <PremierConstructionLogo className={className} />;
  }
  if (companyName.includes("Solid Foundation")) {
    return <SolidFoundationLogo className={className} />;
  }
  if (companyName.includes("Metro Commercial")) {
    return <MetroCommercialLogo className={className} />;
  }
  if (companyName.includes("Elite Building")) {
    return <EliteBuildingSolutionsLogo className={className} />;
  }

  // Healthcare Companies
  if (companyName.includes("Rio Verde")) {
    return <RioVerdePediatricsLogo className={className} />;
  }
  if (companyName.includes("Southwest Family")) {
    return <SouthwestFamilyMedicineLogo className={className} />;
  }
  if (companyName.includes("Desert Dental")) {
    return <DesertDentalAssociatesLogo className={className} />;
  }
  if (companyName.includes("Mountain View") && companyName.includes("Cardiology")) {
    return <MountainViewCardiologyLogo className={className} />;
  }
  if (companyName.includes("Central Plains")) {
    return <CentralPlainsOrthopedicsLogo className={className} />;
  }

  // Electrician Companies
  if (companyName.includes("Precision Power")) {
    return <PrecisionPowerTechsLogo className={className} />;
  }
  if (companyName.includes("Reliable Electric")) {
    return <ReliableElectricSolutionsLogo className={className} />;
  }
  if (companyName.includes("Master Volt")) {
    return <MasterVoltSpecialistsLogo className={className} />;
  }
  if (companyName.includes("Emergency Power")) {
    return <EmergencyPowerProLogo className={className} />;
  }
  if (companyName.includes("Elite Electrical")) {
    return <EliteElectricalServicesLogo className={className} />;
  }

  // Plumbing Companies (from existing PlumbingCompanyLogos)
  if (companyName.includes("Elite Plumbing")) {
    // Import from existing plumbing component
    return <EliteClimateControlLogo className={className} />; // Temporary fallback
  }

  // Default fallback - simple geometric logo
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="12" width="40" height="40" rx="6" fill="#6B7280" stroke="#4B5563" strokeWidth="2"/>
      <circle cx="32" cy="32" r="12" fill="white"/>
      <text x="32" y="58" textAnchor="middle" className="fill-gray-700 text-[4px] font-bold">COMPANY</text>
    </svg>
  );
};
