import React, { useEffect, useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translations } from '../types';
import { EGIFT_URL, NAV_IDS, openReservation, scrollToId } from '../utils';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleLang = () => {
    if (lang === 'nl') setLang('fr');
    else if (lang === 'fr') setLang('en');
    else setLang('nl');
  };

  const handleNavigation = (id: string) => {
    if (id === 'egift') {
      window.open(EGIFT_URL, '_blank', 'noopener,noreferrer');
      setIsOpen(false);
      return;
    }

    scrollToId(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled || isOpen ? 'bg-off-black shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button type="button" className="z-50" onClick={() => handleNavigation('home')}>
          <h1 className="font-serif text-lg md:text-xl text-gold tracking-widest uppercase border-b-2 border-transparent hover:border-gold transition-colors duration-300">
            Bistro Boudoir
          </h1>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {NAV_IDS.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleNavigation(item)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors relative group"
            >
              {t.nav[item]}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          <button
            type="button"
            onClick={toggleLang}
            className="flex items-center space-x-2 px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-off-black transition-colors duration-300 text-sm tracking-widest uppercase"
          >
            <Globe size={16} />
            <span>{lang.toUpperCase()}</span>
          </button>
        </div>

        <div className="md:hidden flex items-center z-50">
          <button
            type="button"
            onClick={toggleLang}
            className="mr-4 text-gold font-bold border border-gold px-2 py-1 text-xs"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="text-gold focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-off-black/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {NAV_IDS.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => handleNavigation(item)}
            className="text-2xl font-serif text-white hover:text-gold transition-colors uppercase tracking-widest"
          >
            {t.nav[item]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => {
            openReservation();
            setIsOpen(false);
          }}
          className="mt-4 px-4 py-2 bg-gold border-2 border-gold text-off-black font-serif text-xs tracking-widest uppercase hover:bg-light-gold hover:border-light-gold transition-colors duration-300"
        >
          {t.contact.reservationButton}
        </button>
      </div>
    </nav>
  );
};
