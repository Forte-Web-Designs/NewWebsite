import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Forte Care™ - Professional Website Maintenance & Support | Dallas Fort Worth | Forte Web Designs",
  description:
    "Like home maintenance, but for your website. Forte Care™ provides professional website maintenance, security monitoring, content updates, and performance optimization. Starting at $150/month.",
};

export default function ForteCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
