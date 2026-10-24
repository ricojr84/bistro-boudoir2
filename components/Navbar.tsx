import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronLeft, Globe, Menu, X } from 'lucide-react';
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
          <button type="button" onClick={() => { setMoreOpen(false); setIsOpen((open) => !open); }} className="text-gold p-1" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
            {isOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 overflow-y-auto bg-off-black/98 flex flex-col items-center justify-center gap-7 px-6 py-24 transition-transform duration-300 ease-out md:hidden ${isOpen && !moreOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`} aria-hidden={!isOpen || moreOpen}>
        {primaryLinks.map((item) => (
          <button type="button" key={item} onClick={() => handleNavigation(item)} className={mobileLinkClass} tabIndex={isOpen && !moreOpen ? 0 : -1}>
            {t.nav[item]}
          </button>
        ))}
        <button type="button" onClick={() => setMoreOpen(true)} className="inline-flex items-center gap-2 border-y border-white/15 px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold/50" tabIndex={isOpen && !moreOpen ? 0 : -1}>
          {lang === 'nl' ? 'Meer' : lang === 'fr' ? 'Plus' : 'More'}
          <ChevronDown size={16} />
        </button>
        <button type="button" onClick={() => { openReservation(); setIsOpen(false); }} className="mt-1 rounded-sm bg-gold px-6 py-3 text-sm font-bold uppercase tracking-widest text-off-black hover:bg-light-gold transition-colors" tabIndex={isOpen && !moreOpen ? 0 : -1}>
          {t.contact.reservationButton}
        </button>
      </div>

      {isOpen && moreOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-off-black px-6 pb-10 pt-8 md:hidden" role="dialog" aria-modal="true" aria-label={lang === 'nl' ? 'Meer navigatieopties' : lang === 'fr' ? 'Plus d’options de navigation' : 'More navigation options'}>
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setMoreOpen(false)} className="inline-flex items-center gap-1 py-2 pr-3 text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors">
              <ChevronLeft size={20} />
              {lang === 'nl' ? 'Terug' : lang === 'fr' ? 'Retour' : 'Back'}
            </button>
            <button type="button" onClick={() => { setMoreOpen(false); setIsOpen(false); }} className="rounded-full p-2 text-gold hover:bg-white/10 transition-colors" aria-label={lang === 'nl' ? 'Menu sluiten' : lang === 'fr' ? 'Fermer le menu' : 'Close menu'}>
              <X size={24} />
            </button>
          </div>

          <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-10">
            <h2 className="mb-8 text-center font-serif text-3xl uppercase tracking-[0.18em] text-gold">
              {lang === 'nl' ? 'Meer' : lang === 'fr' ? 'Plus' : 'More'}
            </h2>
            <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
              {moreLinks.map((item) => (
                <button key={item} type="button" onClick={() => handleNavigation(item)} className="py-5 text-center font-serif text-xl uppercase tracking-widest text-white transition-colors hover:text-gold">
                  {t.nav[item]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
