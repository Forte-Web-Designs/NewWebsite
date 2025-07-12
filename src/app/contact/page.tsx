import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Need any kind of services contact us.',
};

export default function Pricing() {
  return (
    <section className="my-20">
      <span className="lg:flex  sm:text-2xl text-xs font-normal font-roboto hidden items-center sm:gap-2 gap-1 text-primary-1000 justify-center mb-6">
        <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
        Contact Us
      </span>
      <ContactForm />
    </section>
  );
}
