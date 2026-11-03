import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, Translations } from '../types';
import { EGIFT_URL, NAV_IDS, scrollToId } from '../utils';

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

  const languages: Language[] = ['nl', 'fr', 'en'];

  const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center uppercase tracking-[0.18em] ${mobile ? 'text-xs text-gold' : 'text-[13px] text-gray-300'}`} aria-label="Language">
      {languages.map((language, index) => (
        <React.Fragment key={language}>
          {index > 0 && <span className="px-1.5 opacity-60" aria-hidden="true">|</span>}
          <button
            type="button"
            onClick={() => setLang(language)}
            aria-current={lang === language ? 'true' : undefined}
            aria-label={`Switch language to ${language.toUpperCase()}`}
            className={`min-h-11 px-1 transition-colors hover:text-gold ${lang === language ? 'font-bold text-gold' : ''}`}
          >
            {language.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

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
      className={`fixed top-0 left-0 w-full z-50 pt-[calc(env(safe-area-inset-top)+0.75rem)] transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled || isOpen ? 'bg-off-black shadow-lg pb-3' : 'bg-transparent pb-5'
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

          <LanguageSelector />

        </div>

        <div className="md:hidden flex items-center z-50">
          <div className="mr-2"><LanguageSelector mobile /></div>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="min-h-11 min-w-11 flex items-center justify-center text-gold focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className="relative h-7 w-7" aria-hidden="true">
              <Menu
                size={28}
                strokeWidth={1.7}
                className={`absolute inset-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? 'rotate-90 scale-75 opacity-0' : 'rotate-0 scale-100 opacity-100'
                }`}
              />
              <X
                size={28}
                strokeWidth={1.7}
                className={`absolute inset-0 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-75 opacity-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 bg-off-black/95 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {NAV_IDS.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => handleNavigation(item)}
            className={`text-2xl font-serif text-white hover:text-gold transition-[color,opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] uppercase tracking-widest ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? `${NAV_IDS.indexOf(item) * 60 + 120}ms` : '0ms' }}
          >
            {t.nav[item]}
          </button>
        ))}
      </div>
    </nav>
  );
};
