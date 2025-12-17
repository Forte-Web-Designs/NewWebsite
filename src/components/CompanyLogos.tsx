import React from 'react';

interface LogoProps {
  className?: string;
}

// HVAC Company Logos - Designed for authenticity and variety
export const EliteClimateControlLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text wordmark (like Ford, IBM) */}
    <text x="32" y="24" textAnchor="middle" className="fill-blue-600 text-[9px] font-black">ELITE</text>
    <text x="32" y="34" textAnchor="middle" className="fill-gray-600 text-[5px] font-medium">CLIMATE CONTROL</text>
    <rect x="20" y="38" width="24" height="2" fill="#2563EB"/>
  </svg>
);

export const AllSeasonHVACLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon-only logo (like Shell, BP) */}
    <rect x="16" y="16" width="32" height="32" fill="#10B981" rx="16"/>
    <circle cx="32" cy="32" r="12" fill="white"/>
    <text x="32" y="37" textAnchor="middle" className="fill-green-600 text-[8px] font-black">AS</text>
  </svg>
);

export const ComfortZoneHVACLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/emblem style (like Harley Davidson) */}
    <circle cx="32" cy="32" r="26" fill="#F59E0B" stroke="#D97706" strokeWidth="3"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="28" textAnchor="middle" className="fill-orange-600 text-[6px] font-bold">COMFORT</text>
    <text x="32" y="36" textAnchor="middle" className="fill-orange-600 text-[6px] font-bold">ZONE</text>
  </svg>
);

export const PremierHeatingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like Walmart, Best Buy) */}
    <rect x="8" y="24" width="48" height="16" fill="#7C3AED" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[7px] font-black">PREMIER HEATING</text>
  </svg>
);

export const EmergencyClimateProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like Target, Mastercard) */}
    <circle cx="32" cy="32" r="24" fill="#DC2626"/>
    <circle cx="32" cy="32" r="16" fill="white"/>
    <text x="32" y="36" textAnchor="middle" className="fill-red-600 text-[6px] font-black">24/7</text>
  </svg>
);

// Restaurant Company Logos - Designed for authenticity and variety  
export const RedOakSmokehouseLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vintage script text (like Coca-Cola, Kellogg's) */}
    <text x="32" y="28" textAnchor="middle" className="fill-amber-800 text-[8px] font-bold italic">Red Oak</text>
    <text x="32" y="38" textAnchor="middle" className="fill-amber-600 text-[5px] font-medium">SMOKEHOUSE</text>
  </svg>
);

export const BellaVistaItalianLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle monogram (like Starbucks, BMW) */}
    <circle cx="32" cy="32" r="24" fill="#059669" stroke="#047857" strokeWidth="2"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="37" textAnchor="middle" className="fill-green-600 text-[12px] font-bold">BV</text>
  </svg>
);

export const MetroSushiBarLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Minimal text only (like IKEA, MUJI) */}
    <text x="32" y="30" textAnchor="middle" className="fill-gray-800 text-[7px] font-bold">METRO</text>
    <text x="32" y="38" textAnchor="middle" className="fill-red-600 text-[7px] font-bold">SUSHI</text>
  </svg>
);

export const FarmTableBistroLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House/badge shape (like Whole Foods) */}
    <polygon points="32,12 50,28 50,50 14,50 14,28" fill="#16A34A"/>
    <polygon points="32,18 44,30 44,44 20,44 20,30" fill="white"/>
    <text x="32" y="32" textAnchor="middle" className="fill-green-600 text-[4px] font-bold">FARM</text>
    <text x="32" y="38" textAnchor="middle" className="fill-green-600 text-[4px] font-bold">TABLE</text>
  </svg>
);

export const TacoLibreKitchenLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple rectangular logo (like Subway) */}
    <rect x="12" y="20" width="40" height="24" fill="#EA580C" rx="4"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-black">TACO LIBRE</text>
  </svg>
);

// Landscaping Company Logos - Designed for authenticity and variety
export const SandiaLandscapingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text with underline (like John Deere) */}
    <text x="32" y="30" textAnchor="middle" className="fill-green-700 text-[8px] font-black">SANDIA</text>
    <text x="32" y="38" textAnchor="middle" className="fill-green-600 text-[5px] font-medium">LANDSCAPING</text>
    <rect x="18" y="42" width="28" height="2" fill="#16A34A"/>
  </svg>
);

export const DesertBloomLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle with initials (like GE, HP) */}
    <circle cx="32" cy="32" r="24" fill="#F59E0B"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="37" textAnchor="middle" className="fill-orange-600 text-[10px] font-black">DB</text>
  </svg>
);

export const MountainViewOutdoorLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple rectangular corporate (like REI) */}
    <rect x="10" y="22" width="44" height="20" fill="#6B7280" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-bold">MOUNTAIN VIEW</text>
  </svg>
);

export const RioGrandeLawnCareLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/emblem style (like National Park Service) */}
    <circle cx="32" cy="32" r="26" fill="#3B82F6" stroke="#2563EB" strokeWidth="2"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="28" textAnchor="middle" className="fill-blue-600 text-[5px] font-bold">RIO</text>
    <text x="32" y="36" textAnchor="middle" className="fill-blue-600 text-[5px] font-bold">GRANDE</text>
  </svg>
);

export const SouthwestGardenLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Text wordmark only (like Home Depot) */}
    <text x="32" y="26" textAnchor="middle" className="fill-cyan-600 text-[7px] font-black">SOUTHWEST</text>
    <text x="32" y="36" textAnchor="middle" className="fill-cyan-500 text-[6px] font-medium">GARDEN</text>
    <rect x="16" y="40" width="32" height="2" fill="#0891B2"/>
  </svg>
);

// Handyman Company Logos - Designed for authenticity and variety
export const RedRiverHandymanLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like Ace Hardware) */}
    <rect x="16" y="16" width="32" height="32" fill="#DC2626" rx="6"/>
    <rect x="22" y="22" width="20" height="20" fill="white" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-red-600 text-[6px] font-black">RR</text>
  </svg>
);

export const AllFixHomeServicesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Text wordmark (like Lowe's) */}
    <text x="32" y="28" textAnchor="middle" className="fill-blue-600 text-[8px] font-black">ALL-FIX</text>
    <text x="32" y="36" textAnchor="middle" className="fill-blue-500 text-[5px] font-medium">HOME SERVICES</text>
  </svg>
);

export const ReliableRepairsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Circle monogram (like GE) */}
    <circle cx="32" cy="32" r="24" fill="#059669"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="37" textAnchor="middle" className="fill-green-600 text-[10px] font-bold">✓</text>
  </svg>
);

export const QuickFixSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like Best Buy) */}
    <rect x="10" y="24" width="44" height="16" fill="#F59E0B" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-black">QUICK FIX</text>
  </svg>
);

export const HomeHelperProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/shield style (like Better Business Bureau) */}
    <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="#7C3AED"/>
    <polygon points="32,14 42,24 42,42 32,50 22,42 22,24" fill="white"/>
    <text x="32" y="30" textAnchor="middle" className="fill-purple-600 text-[5px] font-bold">HOME</text>
    <text x="32" y="36" textAnchor="middle" className="fill-purple-600 text-[5px] font-bold">HELPER</text>
  </svg>
);

// Painters Company Logos - Designed for authenticity and variety
export const PrecisionPaintCoLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text wordmark (like Ford, IBM) */}
    <text x="32" y="26" textAnchor="middle" className="fill-blue-600 text-[10px] font-black">PRECISION</text>
    <text x="32" y="38" textAnchor="middle" className="fill-gray-600 text-[6px] font-medium">PAINT CO</text>
    <rect x="18" y="42" width="28" height="2" fill="#2563EB"/>
  </svg>
);

export const EliteInteriorPaintingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon-only monogram (like Nike, BMW) */}
    <circle cx="32" cy="32" r="24" fill="#7C3AED"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="38" textAnchor="middle" className="fill-purple-600 text-[12px] font-black">E</text>
  </svg>
);

export const ProExteriorSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/shield style (like Harley Davidson) */}
    <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="#059669"/>
    <polygon points="32,14 42,24 42,42 32,50 22,42 22,24" fill="white"/>
    <text x="32" y="30" textAnchor="middle" className="fill-green-600 text-[5px] font-bold">PRO</text>
    <text x="32" y="36" textAnchor="middle" className="fill-green-600 text-[5px] font-bold">EXTERIOR</text>
  </svg>
);

export const ColorCraftPaintersLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like Microsoft, Walmart) */}
    <rect x="8" y="24" width="48" height="16" fill="#F59E0B" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[7px] font-black">COLOR CRAFT</text>
  </svg>
);

export const PremierPaintWorksLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like Target, AT&T) */}
    <rect x="16" y="16" width="32" height="32" fill="#0891B2" rx="16"/>
    <circle cx="32" cy="32" r="12" fill="white"/>
    <circle cx="32" cy="32" r="8" fill="#0891B2"/>
    <circle cx="32" cy="32" r="4" fill="white"/>
  </svg>
);

// Construction Company Logos - Designed for authenticity and variety
export const SouthCoreContractingLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text wordmark (like John Deere, Ford) */}
    <text x="32" y="22" textAnchor="middle" className="fill-gray-700 text-[9px] font-black">SOUTHCORE</text>
    <text x="32" y="34" textAnchor="middle" className="fill-gray-600 text-[6px] font-medium">CONTRACTING</text>
    <rect x="16" y="38" width="32" height="3" fill="#1F2937"/>
    <rect x="20" y="42" width="24" height="1" fill="#6B7280"/>
  </svg>
);

export const PremierConstructionLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon-only monogram (like GE, HP) */}
    <circle cx="32" cy="32" r="24" fill="#2563EB"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="38" textAnchor="middle" className="fill-blue-600 text-[12px] font-black">P</text>
  </svg>
);

export const SolidFoundationLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like Microsoft, Best Buy) */}
    <rect x="8" y="24" width="48" height="16" fill="#78716C" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-black">SOLID FOUNDATION</text>
  </svg>
);

export const MetroCommercialLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/shield style (like fire dept) */}
    <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="#0891B2"/>
    <polygon points="32,14 42,24 42,42 32,50 22,42 22,24" fill="white"/>
    <text x="32" y="28" textAnchor="middle" className="fill-cyan-600 text-[5px] font-bold">METRO</text>
    <text x="32" y="34" textAnchor="middle" className="fill-cyan-600 text-[5px] font-bold">COMMERCIAL</text>
  </svg>
);

export const EliteBuildingSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like Chase, AT&T) */}
    <rect x="16" y="16" width="32" height="32" fill="#7C3AED" rx="6"/>
    <rect x="20" y="20" width="24" height="24" fill="white" rx="2"/>
    <rect x="24" y="24" width="16" height="16" fill="#7C3AED" rx="1"/>
    <rect x="28" y="28" width="8" height="8" fill="white"/>
  </svg>
);

// Healthcare Company Logos - Designed for authenticity and variety
export const RioVerdePediatricsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text wordmark (like Kaiser, Mayo Clinic) */}
    <text x="32" y="24" textAnchor="middle" className="fill-cyan-600 text-[8px] font-black">RIO VERDE</text>
    <text x="32" y="34" textAnchor="middle" className="fill-cyan-500 text-[6px] font-medium">PEDIATRICS</text>
    <rect x="20" y="38" width="24" height="2" fill="#06B6D4"/>
  </svg>
);

export const SouthwestFamilyMedicineLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon-only monogram (like Cleveland Clinic) */}
    <circle cx="32" cy="32" r="24" fill="#059669"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="38" textAnchor="middle" className="fill-green-600 text-[10px] font-black">SF</text>
  </svg>
);

export const DesertDentalAssociatesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like United Health) */}
    <rect x="8" y="24" width="48" height="16" fill="#2563EB" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-black">DESERT DENTAL</text>
  </svg>
);

export const MountainViewCardiologyLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/shield style (like medical cross) */}
    <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="#DC2626"/>
    <polygon points="32,14 42,24 42,42 32,50 22,42 22,24" fill="white"/>
    <path d="M32 20v24M20 32h24" stroke="#DC2626" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const CentralPlainsOrthopedicsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like modern medical logos) */}
    <rect x="16" y="16" width="32" height="32" fill="#0891B2" rx="16"/>
    <circle cx="32" cy="32" r="14" fill="white"/>
    <circle cx="32" cy="32" r="10" fill="#0891B2"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
    <circle cx="32" cy="32" r="2" fill="#0891B2"/>
  </svg>
);

// Electrician Company Logos - Designed for authenticity and variety
export const PrecisionPowerTechsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text wordmark (like Westinghouse, GE) */}
    <text x="32" y="24" textAnchor="middle" className="fill-amber-600 text-[8px] font-black">PRECISION</text>
    <text x="32" y="34" textAnchor="middle" className="fill-amber-600 text-[6px] font-medium">POWER TECHS</text>
    <rect x="18" y="38" width="28" height="2" fill="#F59E0B"/>
  </svg>
);

export const ReliableElectricSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Icon-only monogram (like Tesla, Siemens) */}
    <circle cx="32" cy="32" r="24" fill="#2563EB"/>
    <circle cx="32" cy="32" r="18" fill="white"/>
    <text x="32" y="38" textAnchor="middle" className="fill-blue-600 text-[12px] font-black">R</text>
  </svg>
);

export const MasterVoltSpecialistsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular (like Schneider Electric) */}
    <rect x="8" y="24" width="48" height="16" fill="#7C3AED" rx="2"/>
    <text x="32" y="34" textAnchor="middle" className="fill-white text-[6px] font-black">MASTER VOLT</text>
  </svg>
);

export const EmergencyPowerProLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge/shield style (like electrical safety logos) */}
    <polygon points="32,8 48,20 48,44 32,56 16,44 16,20" fill="#DC2626"/>
    <polygon points="32,14 42,24 42,42 32,50 22,42 22,24" fill="white"/>
    <polygon points="32,18 36,28 28,28 32,38 36,28" fill="#DC2626"/>
  </svg>
);

export const EliteElectricalServicesLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric (like power company logos) */}
    <rect x="16" y="16" width="32" height="32" fill="#059669" rx="16"/>
    <circle cx="32" cy="32" r="14" fill="white"/>
    <circle cx="32" cy="32" r="10" fill="#059669"/>
    <circle cx="32" cy="32" r="6" fill="white"/>
    <polygon points="32,26 34,32 30,32" fill="#059669"/>
    <polygon points="32,38 30,32 34,32" fill="#059669"/>
  </svg>
);

// Plumbing Company Logos - Designed for authenticity and variety
export const ElitePlumbingSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple text-only wordmark logo (like IBM, Google) */}
    <text x="32" y="22" textAnchor="middle" className="fill-blue-600 text-[8px] font-black">ELITE</text>
    <text x="32" y="32" textAnchor="middle" className="fill-gray-700 text-[6px] font-medium">Plumbing</text>
    <text x="32" y="42" textAnchor="middle" className="fill-gray-700 text-[6px] font-medium">Solutions</text>
    <rect x="16" y="46" width="32" height="1" fill="#2563EB"/>
  </svg>
);

export const RapidResponsePlumbersLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple icon-only logo (like Nike swoosh, Apple) */}
    <circle cx="32" cy="32" r="24" fill="#DC2626"/>
    <circle cx="32" cy="32" r="20" fill="white"/>
    <circle cx="32" cy="32" r="16" fill="#DC2626"/>
    {/* Simple "RR" monogram */}
    <text x="32" y="38" textAnchor="middle" className="fill-white text-[14px] font-black">RR</text>
  </svg>
);

export const MetroDrainSolutionsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Corporate rectangular logo (like Microsoft, IBM) */}
    <rect x="8" y="20" width="48" height="24" fill="#059669" rx="2"/>
    <rect x="12" y="24" width="40" height="16" fill="white" rx="1"/>
    <text x="32" y="34" textAnchor="middle" className="fill-green-600 text-[7px] font-bold">METRO DRAIN</text>
    <rect x="28" y="36" width="8" height="1" fill="#059669"/>
  </svg>
);

export const EmergencyPipeProsLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Badge-style logo (like fire dept, police) */}
    <path d="M32 8 L44 16 L44 40 L32 52 L20 40 L20 16 Z" fill="#1F2937" stroke="#374151" strokeWidth="2"/>
    <path d="M32 12 L40 18 L40 38 L32 46 L24 38 L24 18 Z" fill="white"/>
    <text x="32" y="26" textAnchor="middle" className="fill-gray-800 text-[5px] font-black">EMERGENCY</text>
    <text x="32" y="32" textAnchor="middle" className="fill-gray-800 text-[5px] font-black">PIPE</text>
    <text x="32" y="38" textAnchor="middle" className="fill-gray-800 text-[5px] font-black">PROS</text>
  </svg>
);

export const AllHoursPlumbingCoLogo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simple geometric logo (like Chase bank, AT&T) */}
    <rect x="16" y="16" width="32" height="32" fill="#F59E0B" rx="4"/>
    <circle cx="32" cy="32" r="10" fill="white"/>
    <text x="32" y="36" textAnchor="middle" className="fill-orange-500 text-[6px] font-black">24</text>
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

  // Plumbing Companies (integrated from PlumbingCompanyLogos)
  if (companyName.includes("Elite Plumbing")) {
    return <ElitePlumbingSolutionsLogo className={className} />;
  }
  if (companyName.includes("Rapid Response")) {
    return <RapidResponsePlumbersLogo className={className} />;
  }
  if (companyName.includes("Metro Drain")) {
    return <MetroDrainSolutionsLogo className={className} />;
  }
  if (companyName.includes("Emergency Pipe")) {
    return <EmergencyPipeProsLogo className={className} />;
  }
  if (companyName.includes("All Hours Plumbing") || companyName.includes("All Hours")) {
    return <AllHoursPlumbingCoLogo className={className} />;
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
