
import { Metadata } from 'next';
import { PricingPage } from "@/components/pricing";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our transparent pricing options and packages designed to fit businesses of all sizes.',
};

export default function Pricing() {
  return (
    <>
      <div className="text-center mt-10">
        <h2 className="font-roboto font-medium text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] tracking-[-1.24px] text-center align-middle">
          Flexible Pricing Options
        </h2>
      </div>
      <PricingPage />
    </>

  );
}
