import React, { useEffect, useState } from 'react';
import { Translations } from '../types';
import { openReservation } from '../utils';

interface FloatingReservationButtonProps {
  t: Translations;
}

export const FloatingReservationButton: React.FC<FloatingReservationButtonProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const contactSection = document.getElementById('contact');
        let contactInViewport = false;

        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          contactInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        }

        setIsVisible(window.scrollY > 300 && !contactInViewport);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={openReservation}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`fixed bottom-8 right-8 z-40 px-6 py-4 bg-gold border-2 border-gold text-off-black font-serif text-sm tracking-widest uppercase hover:bg-light-gold hover:border-light-gold transition-[opacity,transform] duration-300 shadow-2xl cursor-pointer rounded-sm ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {t.contact.reservationButton}
    </button>
  );
};
