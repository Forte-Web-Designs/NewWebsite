import { Metadata } from 'next';
import { getCityData, getAllCities, CityData } from '@/lib/cityDatabase';
import PlumbingTemplate from '@/components/PlumbingTemplate';

// Required for static export - generates all city pages at build time
export async function generateStaticParams() {
  const cities = getAllCities();
  
  return cities.map((citySlug: string) => ({
    city: citySlug,
  }));
}

// Generate dynamic metadata for each city page
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityData = await getCityData(city);

  if (!cityData) {
    return {
      title: 'City Not Found | Forte Plumbing Services',
      description: 'Professional plumbing services. Contact us to see if we serve your area.',
    };
  }

  return {
    title: `Professional Plumbing Services in ${cityData.name}, ${cityData.state} | Forte Web Designs`,
    description: cityData.metaDescription,
    keywords: `plumbing, ${cityData.name}, ${cityData.state}, emergency plumbing, drain cleaning, water heater, pipe repair`,
    openGraph: {
      title: `Professional Plumbing Services in ${cityData.name}, ${cityData.state}`,
      description: cityData.metaDescription,
      type: 'website',
    },
  };
}

interface PlumbingCityPageProps {
  params: Promise<{ city: string }>;
}

export default async function PlumbingCityPage({ params }: PlumbingCityPageProps) {
  const { city } = await params;
  const cityData = await getCityData(city);

  if (!cityData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We don't currently serve the requested area.
          </p>
          <a 
            href="/plumbing/seattle" 
            className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            View Seattle Services
          </a>
        </div>
      </div>
    );
  }

  return <PlumbingTemplate cityData={cityData} />;
}
