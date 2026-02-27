import type { Metadata } from "next";
import SeeEverythingClient from './SeeEverythingClient';

export const metadata: Metadata = {
  title: "See Everything | Forte Web Designs",
  description: "You can't grow what you can't measure. Lead reporting, pipeline visibility, channel attribution, and custom dashboards.",
  openGraph: {
    title: "See Everything | Forte Web Designs",
    description: "You can't grow what you can't measure. Lead reporting, pipeline visibility, channel attribution, and custom dashboards.",
    url: "https://fortewebdesigns.com/services/see-everything/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/see-everything/"
  }
};

export default function SeeEverythingPage() {
  return <SeeEverythingClient />;
}
