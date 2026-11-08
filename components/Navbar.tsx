import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { Language, Translations } from '../types';
import { EGIFT_URL, NAV_IDS, openReservation, scrollToId } from '../utils';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const brandFontStyle: React.CSSProperties = { fontFamily: 'var(--font-serif)' };
const egiftLogoStyle: React.CSSProperties = {
  backgroundColor: '#555149',
  maskImage: "url('/images/egiftlogo.png')",
  WebkitMaskImage: "url('/images/egiftlogo.png')",
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  maskPosition: 'center',
  WebkitMaskPosition: 'center',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
};

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages: Language[] = ['nl', 'fr', 'en'];
  const desktopNavIds = NAV_IDS.filter((item) => item !== 'suggesties' && item !== 'egift');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const handleNavigation = (id: string) => {
    if (id === 'egift') {
      window.open(EGIFT_URL, '_blank', 'noopener,noreferrer');
    } else if (id === 'suggesties') {
      document.getElementById('menu-tab-menuAndSuggestions')?.click();
      scrollToId('menu');
    } else {
      scrollToId(id);
    }
    setIsOpen(false);
  };

  const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center uppercase tracking-[.16em] ${mobile ? 'text-sm text-[#77746c]' : 'text-[13px] text-[#77746c]'}`} aria-label="Language">
      {languages.map((language, index) => (
        <React.Fragment key={language}>
          {index > 0 && <span className="px-1 opacity-60" aria-hidden="true">/</span>}
          <button
            type="button"
            onClick={() => setLang(language)}
            aria-current={lang === language ? 'true' : undefined}
            aria-label={`Switch language to ${language.toUpperCase()}`}
            className={`min-h-10 px-1 transition-colors hover:text-[#9d7c3f] ${lang === language ? 'font-bold text-[#7b6334]' : ''}`}
          >
            {language.toUpperCase()}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#24231f]/[.06] bg-[#fffdf8]/95 pt-[env(safe-area-inset-top)] text-[#24231f] shadow-[0_1px_10px_rgba(36,35,31,.03)] backdrop-blur-sm">
        <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-2 px-3 sm:gap-3 sm:px-5 xl:px-[clamp(32px,6vw,96px)]">
          <button type="button" onClick={() => handleNavigation('home')} className="shrink-0 text-left">
            <span style={brandFontStyle} className="whitespace-nowrap font-serif text-[15px] font-semibold tracking-[.14em] text-[#555149] sm:text-[17px] xl:text-[20px]">BISTRO BOUDOIR</span>
          </button>

          <div className="hidden min-w-0 items-center gap-5 md:flex">
            <div className="flex items-center gap-2 xl:gap-4 2xl:gap-7">
              {desktopNavIds.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => handleNavigation(item)}
                  style={brandFontStyle}
                  className="group relative whitespace-nowrap py-2 font-serif text-[13px] font-medium uppercase tracking-[.08em] text-[#555149] transition-colors hover:text-[#9d7c3f] lg:text-sm 2xl:text-[15px]"
                >
                  {t.nav[item]}
                  <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#b49452] transition-transform group-hover:scale-x-100" />
                </button>
              ))}
              <a
                href={EGIFT_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Gift"
                title="E-Gift"
                className="flex h-10 w-10 shrink-0 items-center justify-center text-[#555149] transition-opacity hover:opacity-70"
              >
                <span aria-hidden="true" className="block h-9 w-9" style={egiftLogoStyle} />
              </a>
            </div>
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={EGIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E-Gift"
              title="E-Gift"
              className="flex h-8 w-8 shrink-0 items-center justify-center text-[#555149] transition-opacity hover:opacity-70"
            >
              <span aria-hidden="true" className="block h-7 w-7" style={egiftLogoStyle} />
            </a>
            <LanguageSelector mobile />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="relative z-[60] flex min-h-11 min-w-11 items-center justify-center text-[#24231f]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <CloseIcon size={25} strokeWidth={1.5} /> : <MenuIcon size={25} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        style={{ top: 'calc(72px + env(safe-area-inset-top))' }}
        className={`fixed inset-x-0 bottom-0 z-40 flex flex-col items-center justify-center gap-5 bg-[#fffdf8] px-8 transition-[opacity,visibility] duration-300 md:hidden ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        {NAV_IDS.map((item) => (
          <button
            type="button"
            key={item}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleNavigation(item)}
            className="font-serif text-[26px] text-[#24231f] transition-colors hover:text-[#9d7c3f]"
          >
            {t.nav[item]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => { openReservation(); setIsOpen(false); }}
          tabIndex={isOpen ? 0 : -1}
          className="mt-3 inline-flex min-h-12 items-center justify-center bg-[#b49452] px-6 text-[14px] font-semibold uppercase tracking-[.1em] text-[#201d17]"
        >
          {t.contact.reservationButton}
        </button>
      </div>
    </>
  );
};
