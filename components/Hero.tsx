import React from 'react';
import { Translations } from '../types';
import { openReservation, scrollToId } from '../utils';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  const finalSpace = t.home.headline.lastIndexOf(' ');
  const headlineStart = finalSpace > 0 ? t.home.headline.slice(0, finalSpace) : t.home.headline;
  const headlineEnd = finalSpace > 0 ? t.home.headline.slice(finalSpace + 1) : '';

  return (
    <section
      id="home"
      className="relative grid min-h-[690px] h-[min(86svh,850px)] place-items-center overflow-hidden px-6 pb-20 pt-36 text-center text-white"
      style={{
        backgroundImage: "linear-gradient(180deg, rgba(23,21,18,.38), rgba(23,21,18,.62)), url('/images/backgroundBoudoir.jpg')",
        backgroundPosition: 'center 54%',
        backgroundSize: 'cover',
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-[14px] border border-white/25 md:inset-[18px]" />
      <div className="relative z-10 mx-auto max-w-[780px] animate-fade-in-up">
        <img
          src="/images/logoBoudior.png"
          alt="Bistro Boudoir"
          className="mx-auto mb-5 h-auto w-[clamp(150px,18vw,230px)]"
          decoding="async"
        />
        <h1 className="mx-auto my-5 max-w-4xl font-serif text-[clamp(3.25rem,8vw,6rem)] font-medium leading-[1.04] tracking-[-.035em]">
          {headlineStart} {headlineEnd && <><br /><em className="font-normal">{headlineEnd}</em></>}
        </h1>
        <p className="mx-auto max-w-[520px] text-sm leading-7 text-white/85 sm:text-base">{t.home.heroDescription}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={openReservation}
            className="inline-flex min-h-12 items-center justify-center bg-[#b49452] px-6 py-3 text-[11px] font-semibold uppercase tracking-[.1em] text-[#201d17] transition hover:-translate-y-0.5 hover:bg-[#d1b46d]"
          >
            {t.contact.reservationButton}
          </button>
          <button
            type="button"
            onClick={() => scrollToId('menu')}
            className="inline-flex min-h-12 items-center justify-center border border-white/70 bg-transparent px-6 py-3 text-[11px] font-semibold uppercase tracking-[.1em] text-white transition hover:bg-white/10"
          >
            {t.home.button}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => scrollToId('story')}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[.2em] text-white/75 transition hover:text-white"
      >
        {t.home.scrollNote} <span aria-hidden="true">↓</span>
      </button>
    </section>
  );
};
