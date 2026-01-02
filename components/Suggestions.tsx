import React from 'react';
import { Translations } from '../types';

interface SuggestionsProps {
  t: Translations;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
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

        <div className="flex justify-center items-center">
          {/* Frame 3 - Wine Bottle with PDF New Window */}
          <div 
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '200px', height: '200px' }}
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
                <div className="font-serif text-3xl md:text-4xl text-gold uppercase tracking-widest font-bold mb-2">
                  Wijnkaart
                </div>
                <div className="font-serif text-lg md:text-xl text-gold/80 uppercase tracking-wider">
                  Wine List
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

