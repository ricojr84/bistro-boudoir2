import React, { useEffect, useMemo, useState } from 'react';
import { Translations } from '../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  t: Translations;
}

type MediaItem = {
  url: string;
  type: 'image' | 'video';
};

const skippedImages = new Set([4, 20, 25, 26]);

const mediaItems: MediaItem[] = [
  ...Array.from({ length: 33 }, (_, i) => i + 1)
    .filter((i) => !skippedImages.has(i))
    .map((i) => ({ url: `/images/image${i}.jpg`, type: 'image' as const })),
  ...[34, 35, 36, 37, 38].map((i) => ({ url: `/images/image${i}.JPG`, type: 'image' as const })),
  { url: '/images/MVI_2796.MP4', type: 'video' },
  { url: '/images/MVI_2856.MP4', type: 'video' },
  { url: '/images/MVI_2859.mov', type: 'video' },
];

const DISPLAYED_ITEMS_COUNT = 8;
const displayedItems = mediaItems.slice(0, DISPLAYED_ITEMS_COUNT);
const THUMB_WINDOW = 7;

const PlayIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg className={`${className} text-off-black ml-1`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentItem = mediaItems[currentIndex];

  const thumbnails = useMemo(() => {
    const half = Math.floor(THUMB_WINDOW / 2);
    let start = currentIndex - half;
    let end = currentIndex + half;

    if (start < 0) {
      end -= start;
      start = 0;
    }
    if (end >= mediaItems.length) {
      start -= end - (mediaItems.length - 1);
      end = mediaItems.length - 1;
    }

    start = Math.max(0, start);
    return mediaItems.slice(start, end + 1).map((item, i) => ({ item, index: start + i }));
  }, [currentIndex]);

  useEffect(() => {
    if (!isModalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen || !isAutoPlaying || currentItem.type === 'video') return;

    const timeout = window.setTimeout(() => {
      setCurrentIndex((index) => {
        let next = (index + 1) % mediaItems.length;
        let guard = 0;
        while (mediaItems[next].type === 'video' && guard < mediaItems.length) {
          next = (next + 1) % mediaItems.length;
          guard += 1;
        }
        return next;
      });
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [isModalOpen, isAutoPlaying, currentIndex, currentItem.type]);

  useEffect(() => {
    if (!isModalOpen) return;

    [1, -1].forEach((offset) => {
      const item = mediaItems[(currentIndex + offset + mediaItems.length) % mediaItems.length];
      if (item.type === 'image') {
        const preload = new Image();
        preload.src = item.url;
      }
    });
  }, [isModalOpen, currentIndex]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setIsAutoPlaying(false);
        setCurrentIndex((index) => (index - 1 + mediaItems.length) % mediaItems.length);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setIsAutoPlaying(false);
        setCurrentIndex((index) => (index + 1) % mediaItems.length);
      }
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    setIsAutoPlaying(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((index) => (index - 1 + mediaItems.length) % mediaItems.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((index) => (index + 1) % mediaItems.length);
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
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20"></span>
          </h2>
          <p className="font-sans text-light-gold text-lg uppercase tracking-[0.2em] mt-8">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {displayedItems.map((item, index) => (
            <button
              type="button"
              key={item.url}
              className="group relative aspect-square overflow-hidden cursor-pointer border-2 border-transparent hover:border-gold transition-colors duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={item.url}
                alt={`Bistro Boudoir ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-out transform-gpu group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
          <button
            type="button"
            className="group relative aspect-square overflow-hidden cursor-pointer border-2 border-gold bg-off-black flex items-center justify-center transition-colors duration-300 hover:bg-gold"
            onClick={() => openModal(DISPLAYED_ITEMS_COUNT)}
          >
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl text-gold uppercase tracking-widest font-bold mb-2 group-hover:text-off-black transition-colors">
                {t.gallery.more}
              </div>
              <div className="font-serif text-sm md:text-base text-gold/80 uppercase tracking-wider group-hover:text-off-black/80 transition-colors">
                {mediaItems.length - DISPLAYED_ITEMS_COUNT} {t.gallery.moreItems}
              </div>
            </div>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-7xl h-full max-h-[90vh] flex flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-colors duration-300 shadow-lg"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>

            <div className="relative flex-1 overflow-hidden rounded-lg shadow-2xl bg-black">
              {currentItem.type === 'image' ? (
                <img
                  src={currentItem.url}
                  alt={`Bistro Boudoir ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  src={currentItem.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  onEnded={goToNext}
                />
              )}

              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-colors duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gold p-3 rounded-full transition-colors duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-gold text-sm font-sans">
                {currentIndex + 1} / {mediaItems.length}
              </div>
            </div>

            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex gap-3 justify-center">
                {thumbnails.map(({ item, index }) => (
                  <button
                    type="button"
                    key={item.url}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-lg border-2 transition-transform duration-300 ${
                      index === currentIndex
                        ? 'border-gold scale-105'
                        : 'border-transparent hover:border-gold/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full bg-off-black flex items-center justify-center">
                        <div className="w-6 h-6 bg-gold/80 rounded-full flex items-center justify-center">
                          <PlayIcon className="w-3 h-3" />
                        </div>
                      </div>
                    )}
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
