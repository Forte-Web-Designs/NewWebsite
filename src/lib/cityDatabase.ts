// City Database for Programmatic SEO Pages

export interface CityData {
  name: string;
  state: string;
  population: string;
  zipCodes: string[];
  neighborhoods: string[];
  phoneNumber: string;
  serviceArea: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutText: string;
  serviceBenefits: string[];
  localLandmarks: string[];
}

const cityDatabase: Record<string, CityData> = {
  seattle: {
    name: "Seattle",
    state: "WA",
    population: "750,000+",
    zipCodes: ["98101", "98102", "98103", "98104", "98105", "98106", "98107", "98108", "98109", "98110"],
    neighborhoods: ["Capitol Hill", "Belltown", "Queen Anne", "Fremont", "Ballard", "University District"],
    phoneNumber: "(206) 555-PIPE",
    serviceArea: "Greater Seattle Metropolitan Area",
    metaDescription: "Professional plumbing services in Seattle, WA. 24/7 emergency repairs, drain cleaning, water heater installation. Licensed & insured plumbers serving all Seattle neighborhoods.",
    heroHeadline: "Seattle's Most Trusted Plumbing Experts",
    heroSubtext: "Serving Capitol Hill, Belltown, Queen Anne, and all Seattle neighborhoods with professional plumbing services since 2010.",
    aboutText: "Our Seattle plumbing team understands the unique challenges of the Pacific Northwest climate and older building infrastructure. From Pike Place Market to the Space Needle area, we've been keeping Seattle's pipes flowing smoothly for over a decade.",
    serviceBenefits: [
      "Same-day service in most Seattle neighborhoods",
      "Familiar with Seattle building codes and permits",
      "Experience with vintage Seattle home plumbing",
      "24/7 emergency service throughout King County"
    ],
    localLandmarks: ["Space Needle", "Pike Place Market", "University of Washington", "Seattle Center"]
  },
  tacoma: {
    name: "Tacoma",
    state: "WA",
    population: "220,000+",
    zipCodes: ["98401", "98402", "98403", "98404", "98405", "98406", "98407", "98408", "98409", "98416"],
    neighborhoods: ["Downtown", "North End", "Hilltop", "Stadium District", "Proctor", "Old Town"],
    phoneNumber: "(253) 555-PIPE",
    serviceArea: "Tacoma and Pierce County",
    metaDescription: "Expert plumbing services in Tacoma, WA. Emergency repairs, pipe replacement, sewer line cleaning. Licensed plumbers serving downtown Tacoma and surrounding areas.",
    heroHeadline: "Tacoma's Premier Plumbing Service",
    heroSubtext: "Professional plumbing solutions for downtown Tacoma, North End, Hilltop, and all Pierce County communities.",
    aboutText: "Our Tacoma plumbing professionals know the City of Destiny inside and out. From historic homes in the Stadium District to modern developments, we provide reliable plumbing services throughout Pierce County.",
    serviceBenefits: [
      "Rapid response throughout Pierce County",
      "Expertise with Tacoma's diverse housing stock",
      "Licensed for all Tacoma municipal areas",
      "Honest pricing with upfront estimates"
    ],
    localLandmarks: ["Museum of Glass", "Point Defiance Park", "Tacoma Dome", "Wright Park"]
  },
  spokane: {
    name: "Spokane",
    state: "WA",
    population: "230,000+",
    zipCodes: ["99201", "99202", "99203", "99204", "99205", "99206", "99207", "99208", "99212", "99216"],
    neighborhoods: ["Downtown", "South Hill", "North Side", "West Central", "Browne's Addition", "Peaceful Valley"],
    phoneNumber: "(509) 555-PIPE",
    serviceArea: "Spokane County and Eastern Washington",
    metaDescription: "Reliable plumbing services in Spokane, WA. Drain cleaning, water heater repair, emergency plumbing. Serving downtown Spokane, South Hill, and Spokane County.",
    heroHeadline: "Eastern Washington's Plumbing Specialists",
    heroSubtext: "Trusted plumbing services for Spokane, South Hill, and the greater Inland Empire region.",
    aboutText: "Serving the Lilac City with pride, our Spokane plumbing team understands the unique needs of Eastern Washington homes and businesses. From the Spokane River to the South Hill, we're your local plumbing experts.",
    serviceBenefits: [
      "Local expertise in Eastern Washington plumbing",
      "Experience with seasonal freeze prevention",
      "Serving urban and rural Spokane County",
      "Family-owned business rooted in the community"
    ],
    localLandmarks: ["Riverfront Park", "Gonzaga University", "Manito Park", "Spokane Falls"]
  },
  bellevue: {
    name: "Bellevue",
    state: "WA", 
    population: "150,000+",
    zipCodes: ["98004", "98005", "98006", "98007", "98008", "98015"],
    neighborhoods: ["Downtown", "Crossroads", "Factoria", "Somerset", "Newport Hills", "Bridle Trails"],
    phoneNumber: "(425) 555-PIPE",
    serviceArea: "Bellevue and Eastside Communities",
    metaDescription: "Premium plumbing services in Bellevue, WA. High-end residential and commercial plumbing. Licensed plumbers serving downtown Bellevue and Eastside communities.",
    heroHeadline: "Bellevue's Premium Plumbing Service",
    heroSubtext: "Exceptional plumbing solutions for Bellevue's luxury homes, condos, and businesses throughout the Eastside.",
    aboutText: "Our Bellevue plumbing team specializes in high-end residential and commercial plumbing services. From downtown luxury condos to Somerset estates, we deliver white-glove service that Eastside clients expect.",
    serviceBenefits: [
      "Premium service for luxury properties",
      "Discreet and professional technicians",
      "Expertise with high-end fixtures and systems",
      "Concierge-level customer service"
    ],
    localLandmarks: ["Bellevue Square", "Meydenbauer Center", "Downtown Park", "Bellevue Botanical Garden"]
  },
  everett: {
    name: "Everett",
    state: "WA",
    population: "110,000+", 
    zipCodes: ["98201", "98203", "98204", "98208"],
    neighborhoods: ["Downtown", "Port Gardner", "Riverside", "Silver Lake", "North Everett", "Mukilteo"],
    phoneNumber: "(425) 555-PIPE",
    serviceArea: "Everett and Snohomish County",
    metaDescription: "Professional plumbing services in Everett, WA. Emergency repairs, drain cleaning, water heater service. Licensed plumbers serving Everett and Snohomish County.",
    heroHeadline: "Everett's Dependable Plumbing Experts",
    heroSubtext: "Quality plumbing services for Everett families and businesses throughout Snohomish County.",
    aboutText: "From Boeing's backyard to the beautiful Puget Sound waterfront, our Everett plumbing professionals keep the community flowing. We understand the industrial heritage and growing residential needs of Snohomish County.",
    serviceBenefits: [
      "Industrial and residential expertise",
      "Quick response throughout Snohomish County", 
      "Boeing contractor experience",
      "Competitive rates for working families"
    ],
    localLandmarks: ["Everett Marina", "Boeing Factory", "Legion Park", "Jetty Island"]
  }
};

export async function getCityData(citySlug: string): Promise<CityData | null> {
  const normalizedSlug = citySlug.toLowerCase().replace(/[^a-z]/g, '');
  return cityDatabase[normalizedSlug] || null;
}

export function getAllCities(): string[] {
  return Object.keys(cityDatabase);
}

export function getCityByName(cityName: string): CityData | null {
  const citySlug = cityName.toLowerCase().replace(/[^a-z]/g, '');
  return cityDatabase[citySlug] || null;
}
