'use client';

import { ReactNode, useState, useCallback } from 'react';
import IndustryContactModal from '@/components/IndustryContactModal';

interface IndustryPageWrapperProps {
  children: ReactNode;
  industry: string;
  businessType?: string;
}

export default function IndustryPageWrapper({ children, industry, businessType }: IndustryPageWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Add the openModal function to any button with data-open-modal attribute
  const handleClick = (e: any) => {
    if (e.target.dataset.openModal !== undefined) {
      openModal();
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
      <IndustryContactModal 
        isOpen={isOpen}
        onClose={closeModal}
        industry={industry}
        businessType={businessType}
      />
    </div>
  );
}
