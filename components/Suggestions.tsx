import React, { useState } from 'react';
import { Translations } from '../types';
import { X } from 'lucide-react';

interface SuggestionsProps {
  t: Translations;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const openPdfModal = () => {
    setIsPdfModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closePdfModal = () => {
    setIsPdfModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
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

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Frame 1 */}
          <div className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img 
              src="/images/kerstmenuNL.PNG" 
              alt="Kerstmenu Nederlands"
              className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Frame 2 */}
          <div className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <img 
              src="/images/kerstmenuFR.PNG" 
              alt="Menu de Noël Français"
              className="w-full h-full object-cover aspect-square transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Frame 3 - Wine Bottle with PDF Modal */}
          <div 
            className="flex-1 bg-white shadow-xl border-t-4 border-gold overflow-hidden relative aspect-square transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            onClick={openPdfModal}
          >
            <img 
              src="/images/image26.jpg" 
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

      {/* PDF Modal */}
      {isPdfModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closePdfModal}
        >
          <div 
            className="relative bg-white w-full max-w-6xl h-[90vh] rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePdfModal}
              className="absolute top-4 right-4 z-10 bg-gold text-off-black p-2 rounded-full hover:bg-light-gold transition-colors duration-300 shadow-lg"
              aria-label="Close PDF"
            >
              <X size={24} />
            </button>

            {/* PDF Viewer */}
            <iframe
              src={`/images/${encodeURIComponent('BistroBoudoir-wijnkaart-2024 2.pdf')}#toolbar=0`}
              className="w-full h-full border-0"
              title="Wijnkaart PDF"
            />
          </div>
        </div>
      )}
    </section>
  );
};

