import React, { useState, useEffect } from 'react';
import { Translations } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  t: Translations;
}

// Generate image paths for all JPG images in the images folder
const generateImagePaths = () => {
  const imagePaths = [];
  // We have JPG images numbered from 1 to 33, skipping missing ones
  for (let i = 1; i <= 33; i++) {
    // Skip image4.jpg, image20.jpg, image25.jpg, and image26.jpg as they don't exist
    if (i !== 4 && i !== 20 && i !== 25 && i !== 26) {
      imagePaths.push({
        url: `/images/image${i}.jpg`
      });
    }
  }
  return imagePaths;
};

const images = generateImagePaths();

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slideshow when modal is open
  useEffect(() => {
    if (!isModalOpen || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isModalOpen, isAutoPlaying, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        setIsAutoPlaying(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="py-20 bg-off-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold uppercase tracking-widest mb-4 relative inline-block">
            {t.gallery.title}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/20"></span>
          </h2>
          <p className="font-sans text-light-gold text-lg uppercase tracking-[0.2em] mt-8">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden cursor-pointer border-2 border-transparent hover:border-gold transition-all duration-300"
              onClick={() => openModal(index)}
            >
              <img 
                src={img.url} 
                alt={`Bistro Boudoir ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Slideshow Modal */}
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
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>

            {/* Main Image Display */}
            <div className="relative flex-1 overflow-hidden rounded-lg shadow-2xl bg-black">
              <img 
                src={images[currentIndex].url} 
                alt={`Bistro Boudoir ${currentIndex + 1}`}
                className="w-full h-full object-contain transition-opacity duration-500"
                key={currentIndex}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-all duration-300 z-10 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-gold text-sm font-sans backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4 flex-wrap">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gold w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex gap-3 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      index === currentIndex
                        ? 'border-gold scale-110'
                        : 'border-transparent hover:border-gold/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img.url} 
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};