import type { Metadata } from "next";
import KeepAndGrowClient from './KeepAndGrowClient';

export const metadata: Metadata = {
  title: "Keep and Grow | Forte Web Designs",
  description: "Your past customers are the cheapest sale you'll ever make. Review requests, referral systems, reactivation campaigns, and repeat revenue automation.",
  openGraph: {
    title: "Keep and Grow | Forte Web Designs",
    description: "Your past customers are the cheapest sale you'll ever make. Review requests, referral systems, reactivation campaigns, and repeat revenue automation.",
    url: "https://fortewebdesigns.com/services/keep-and-grow/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/keep-and-grow/"
  }
};

export default function KeepAndGrowPage() {
  return <KeepAndGrowClient />;
}
