import React from 'react';
import { Translations } from '../types';

interface FooterProps {
  t: Translations;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gold/30">
      <div className="container mx-auto text-center px-4">
        <h2 className="font-serif text-2xl text-gold mb-6 tracking-widest">Bistro Boudoir</h2>
        <p className="font-serif italic text-lg mb-4">{t.footer.tagline}</p>
        <p className="text-sm font-sans tracking-wider opacity-60">{t.footer.copyright}</p>
        <p className="text-xs font-sans tracking-wider opacity-60 mt-6">
          Made by RICO
        </p>
      </div>
    </footer>
  );
};