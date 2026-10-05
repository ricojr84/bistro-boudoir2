import React, { useState } from 'react';
import { Translations } from '../types';

interface SuggestionsProps {
  t: Translations;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
  const [suggestionImageError, setSuggestionImageError] = useState(false);

  const openWineList = () => {
    const pdfUrl = `/images/${encodeURIComponent('BistroBoudoir-wijnkaart-2024 2.pdf')}`;
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="suggesties" className="py-20 bg-cream text-off-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.suggestions.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="bg-white shadow-xl border-t-4 border-gold overflow-hidden w-[300px] h-[300px]">
            {suggestionImageError ? (
              <div className="w-full h-full bg-gradient-to-br from-cream to-gold/30 flex items-center justify-center">
                <div className="font-serif text-3xl md:text-4xl text-off-black uppercase tracking-widest font-bold text-center p-6">
                  {t.suggestions.title}
                </div>
              </div>
            ) : (
              <img
                src="/images/suggesties.png"
                alt={t.suggestions.title}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
                onError={() => setSuggestionImageError(true)}
              />
            )}
          </div>

          <button
            type="button"
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden relative w-[300px] h-[300px] cursor-pointer transition-transform duration-300 ease-out transform-gpu hover:scale-[1.03] hover:shadow-2xl"
            onClick={openWineList}
            aria-label={t.suggestions.wijnkaart}
          >
            <img
              src="/images/wine.JPG"
              alt={t.suggestions.wijnkaart}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="font-serif text-[30px] text-gold uppercase tracking-widest px-[10px]">
                {t.suggestions.wijnkaart}
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
