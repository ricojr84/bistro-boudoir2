import React, { useState, useEffect } from 'react';
import { Translations } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface SuggestionsProps {
  t: Translations;
}

const suggestionItems = [
  { url: '/images/valentijnNL.JPG', alt: 'Valentijn Menu Nederlands', type: 'image' },
  { url: '/images/valentijnFR.jpg', alt: 'Menu de Saint-Valentin Français', type: 'image' },
  { url: '/images/suggestieNL.pdf', alt: 'Suggesties Nederlands', type: 'pdf' },
  { url: '/images/suggestieFR.pdf', alt: 'Suggestions Français', type: 'pdf' }
];

export const Suggestions: React.FC<SuggestionsProps> = ({ t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [suggestionImageError, setSuggestionImageError] = useState(false);

  const openPdfInNewWindow = () => {
    const pdfUrl = `/images/${encodeURIComponent('BistroBoudoir-wijnkaart-2024 2.pdf')}`;
    window.open(pdfUrl, '_blank', 'width=1200,height=800');
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + suggestionItems.length) % suggestionItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestionItems.length);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + suggestionItems.length) % suggestionItems.length);
      }
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % suggestionItems.length);
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

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
          {/* Valentine Card (merged) */}
          <div 
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '300px', height: '300px' }}
            onClick={() => openModal(0)}
          >
            <img 
              src="/images/valentijnNL.JPG" 
              alt="Valentijn Menu"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Suggestion PDF Card */}
          <div 
            className="bg-white shadow-xl border-t-4 border-gold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            style={{ width: '300px', height: '300px' }}
            onClick={() => openModal(2)}
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
                <div className="font-serif text-3xl md:text-4xl text-gold uppercase tracking-widest font-bold">
                  {t.suggestions.wijnkaart}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Suggestions */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X size={28} />
            </button>

            {/* Main Display */}
            <div className="relative flex-1 overflow-hidden rounded-lg shadow-2xl bg-black">
              {suggestionItems[currentIndex].type === 'image' ? (
                <img 
                  src={suggestionItems[currentIndex].url} 
                  alt={suggestionItems[currentIndex].alt}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  key={currentIndex}
                />
              ) : (
                <iframe 
                  src={`${suggestionItems[currentIndex].url}#toolbar=1`}
                  className="w-full h-full"
                  title={suggestionItems[currentIndex].alt}
                  key={currentIndex}
                />
              )}
              
              {/* Navigation Arrows */}
              {suggestionItems.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                    aria-label="Next"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-gold text-sm font-sans backdrop-blur-sm">
                {currentIndex + 1} / {suggestionItems.length}
              </div>
            </div>

            {/* Dot Indicators */}
            {suggestionItems.length > 1 && (
              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {suggestionItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gold w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

