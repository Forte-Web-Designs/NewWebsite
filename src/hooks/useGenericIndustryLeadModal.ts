import { useState, useCallback, useEffect } from 'react';

export function useGenericIndustryLeadModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trigger, setTrigger] = useState<string>('button');
  const [hasTriggeredScroll, setHasTriggeredScroll] = useState(false);

  const openModal = useCallback((triggerType: string = 'button') => {
    setTrigger(triggerType);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Scroll trigger logic (desktop only, 60% scroll depth)
  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggeredScroll || isModalOpen) return;
      
      // Only trigger on desktop
      if (window.innerWidth < 768) return;
      
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = scrollTop / (documentHeight - windowHeight);
      
      if (scrollPercent >= 0.6) {
        setHasTriggeredScroll(true);
        openModal('scroll');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasTriggeredScroll, isModalOpen, openModal]);

  return {
    isModalOpen,
    trigger,
    openModal,
    closeModal
  };
}
