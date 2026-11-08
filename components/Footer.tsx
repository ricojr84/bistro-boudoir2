import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="border-t border-[#e9e3d7] bg-[#f7f4ed] px-6 py-6 text-[#827e73] sm:px-8">
      <div className="mx-auto flex max-w-[1380px] flex-col items-center justify-between gap-3 text-center text-[11px] md:flex-row md:text-left">
        <a href="#home" className="font-serif text-sm font-semibold tracking-[.17em] text-[#24231f]">BISTRO BOUDOIR</a>
        <span>{t.footer.tagline} <span className="px-1 opacity-50">·</span> {t.footer.copyright}</span>
        <span>{t.footer.address}</span>
      </div>
      <p className="mt-4 text-center text-[10px] tracking-wide text-[#827e73]/70">Made by RICO</p>
    </footer>
  );
};
