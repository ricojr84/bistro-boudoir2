import React from 'react';
import { Translations } from '../types';

interface SuggestionsProps {
  t: Translations;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
  return (
    <section id="suggesties" className="py-20 bg-cream text-off-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.suggestions.title}
          </h2>
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Frame 1 */}
          <div className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden">
            <img 
              src="/images/kerstmenuNL.PNG" 
              alt="Kerstmenu Nederlands"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Frame 2 */}
          <div className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden">
            <img 
              src="/images/kerstmenuFR.PNG" 
              alt="Menu de Noël Français"
              className="w-full h-full object-cover aspect-square"
            />
          </div>

          {/* Frame 3 with Coming Soon */}
          <div className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden relative aspect-square">
            <img 
              src="/images/image26.jpg" 
              alt="Suggestie 3"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
              {/* Coming Soon Text - Diagonal from bottom left to top right */}
              <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-start pointer-events-none">
                <div 
                  className="font-serif text-[31px] md:text-[43px] text-gold uppercase tracking-widest font-bold mb-12 ml-8 opacity-50"
                  style={{
                    transform: 'rotate(-45deg)',
                    transformOrigin: 'bottom left',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {t.suggestions.comingSoon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

