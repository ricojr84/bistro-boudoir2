import React, { useEffect, useState } from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Language, Translations } from '../types';
import { EGIFT_URL, openReservation, scrollToId } from '../utils';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const primaryLinks = ['menu', 'gallery', 'contact'] as const;
const moreLinks = ['suggesties', 'egift', 'map'] as const;

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
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
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleLang = () => {
    if (lang === 'nl') setLang('fr');
    else if (lang === 'fr') setLang('en');
    else setLang('nl');
  };

  const handleNavigation = (id: string) => {
    if (id === 'egift') window.open(EGIFT_URL, '_blank', 'noopener,noreferrer');
    else scrollToId(id);
    setIsOpen(false);
    setMoreOpen(false);
  };

  const linkClass = 'text-sm uppercase tracking-[0.14em] text-gray-300 hover:text-gold transition-colors';
  const mobileLinkClass = 'text-xl font-serif text-white hover:text-gold transition-colors uppercase tracking-widest';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-off-black/95 shadow-lg backdrop-blur-md py-3' : 'bg-gradient-to-b from-black/50 to-transparent py-5'}`}>
      <div className="container mx-auto px-5 md:px-8 flex justify-between items-center">
        <button type="button" className="z-50" onClick={() => handleNavigation('home')} aria-label="Bistro Boudoir home">
          <span className="font-serif text-lg md:text-xl text-gold tracking-[0.18em] uppercase">Bistro Boudoir</span>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {primaryLinks.map((item) => (
            <button type="button" key={item} onClick={() => handleNavigation(item)} className={linkClass}>
              {t.nav[item]}
            </button>
          ))}

          <div className="relative">
            <button type="button" onClick={() => setMoreOpen((open) => !open)} className={`${linkClass} inline-flex items-center gap-1.5`} aria-expanded={moreOpen} aria-haspopup="true">
              {lang === 'nl' ? 'Meer' : lang === 'fr' ? 'Plus' : 'More'}
              <ChevronDown size={14} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full mt-4 min-w-44 rounded-md border border-white/10 bg-off-black p-2 shadow-xl">
                {moreLinks.map((item) => (
                  <button key={item} type="button" onClick={() => handleNavigation(item)} className="block w-full rounded px-3 py-2.5 text-left text-sm text-gray-200 hover:bg-white/5 hover:text-gold transition-colors">
                    {t.nav[item]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button type="button" onClick={toggleLang} className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors" aria-label={`Change language. Current language: ${lang.toUpperCase()}`}>
            <Globe size={16} /><span className="text-xs tracking-widest">{lang.toUpperCase()}</span>
          </button>
          <button type="button" onClick={openReservation} className="rounded-sm bg-gold px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-off-black hover:bg-light-gold transition-colors">
            {t.contact.reservationButton}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3 z-50">
          <button type="button" onClick={toggleLang} className="flex items-center gap-1.5 rounded-full border border-white/20 px-2.5 py-1.5 text-xs text-gold" aria-label={`Change language. Current language: ${lang.toUpperCase()}`}>
            <Globe size={14} />{lang.toUpperCase()}
          </button>
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="text-gold p-1" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 bg-off-black/98 flex flex-col items-center justify-center gap-7 transition-transform duration-300 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`} aria-hidden={!isOpen}>
        {primaryLinks.map((item) => (
          <button type="button" key={item} onClick={() => handleNavigation(item)} className={mobileLinkClass} tabIndex={isOpen ? 0 : -1}>
            {t.nav[item]}
          </button>
        ))}
        <button type="button" onClick={() => setMoreOpen((open) => !open)} className={`${mobileLinkClass} inline-flex items-center gap-2 text-base`} aria-expanded={moreOpen} tabIndex={isOpen ? 0 : -1}>
          {lang === 'nl' ? 'Meer' : lang === 'fr' ? 'Plus' : 'More'}
          <ChevronDown size={17} className={`transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
        </button>
        {moreOpen && moreLinks.map((item) => (
          <button type="button" key={item} onClick={() => handleNavigation(item)} className="-mt-4 text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors" tabIndex={isOpen ? 0 : -1}>
            {t.nav[item]}
          </button>
        ))}
        <button type="button" onClick={() => { openReservation(); setIsOpen(false); }} className="mt-2 rounded-sm bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-off-black hover:bg-light-gold transition-colors" tabIndex={isOpen ? 0 : -1}>
          {t.contact.reservationButton}
        </button>
      </div>
    </nav>
  );
};
