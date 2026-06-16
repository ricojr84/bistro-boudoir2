import React, { useState } from 'react';
import { Translations } from '../types';

interface SuggestionsProps {
  t: Translations;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
  const [suggestionImageError, setSuggestionImageError] = useState(false);

  const openSuggestionPdfInNewWindow = () => {
    const pdfUrl = `/images/${encodeURIComponent('mosselen 2026.pdf')}`;
    window.open(pdfUrl, '_blank', 'width=1200,height=800');
  };

  const openPdfInNewWindow = () => {
    const pdfUrl = `/images/${encodeURIComponent('BistroBoudoir-wijnkaart-2024 2.pdf')}`;
    window.open(pdfUrl, '_blank', 'width=1200,height=800');
  };

  return (
    <section id="suggesties" className="py-20 bg-cream text-off-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.suggestions.title}
          </h2>
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
          {/* Suggestion PDF Card */}
          <div 
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '300px', height: '300px' }}
            onClick={openSuggestionPdfInNewWindow}
          >
            {suggestionImageError ? (
              <div className="w-full h-full bg-gradient-to-br from-cream to-gold/30 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="font-serif text-3xl md:text-4xl text-off-black uppercase tracking-widest font-bold mb-2">
                    {t.suggestions.title}
                  </div>
                  <div className="font-serif text-lg md:text-xl text-off-black/70 uppercase tracking-wider">
                    PDF
                  </div>
                </div>
              </div>
            ) : (
              <img 
                src="/images/suggesties.png" 
                alt={t.suggestions.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                onError={() => setSuggestionImageError(true)}
              />
            )}
          </div>

          {/* Wine Bottle with PDF New Window */}
          <div 
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '300px', height: '300px' }}
            onClick={openPdfInNewWindow}
          >
            <img 
              src="/images/wine.JPG" 
              alt="Wijnkaart - Wine List"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* Overlay with wine bottle hint */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 hover:bg-black/30">
              <div className="text-center">
                <div className="font-serif text-[30px] text-gold uppercase tracking-widest px-[10px]">
                  {t.suggestions.wijnkaart}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

