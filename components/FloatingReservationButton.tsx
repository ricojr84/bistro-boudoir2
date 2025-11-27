import React, { useState, useEffect } from 'react';
import { Translations } from '../types';

interface FloatingReservationButtonProps {
  t: Translations;
}

export const FloatingReservationButton: React.FC<FloatingReservationButtonProps> = ({ t }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      let contactInViewport = false;
      
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Check if contact section is in viewport (top of section is above bottom of screen)
        contactInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // Show button after scrolling down a bit, but hide if in contact section
      if (window.scrollY > 300 && !contactInViewport) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReservationClick = () => {
    window.open(
      'https://bookings.zenchef.com/results?rid=366006&pid=1001',
      'Reservation',
      'width=800,height=700,scrollbars=yes,resizable=yes,left=' + 
      (window.screen.width / 2 - 400) + ',top=' + (window.screen.height / 2 - 350)
    );
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleReservationClick}
      className="fixed bottom-8 right-8 z-40 px-6 py-4 bg-gold border-2 border-gold text-off-black font-serif text-sm tracking-widest uppercase hover:bg-light-gold hover:border-light-gold transition-all duration-300 shadow-2xl cursor-pointer rounded-sm animate-fade-in"
      style={{
        animation: 'fadeIn 0.6s ease-in-out'
      }}
    >
      {t.contact.reservationButton}
    </button>
  );
};

