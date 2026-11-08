import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Translations } from '../types';

interface GalleryProps {
  t: Translations;
}

type MediaItem = {
  url: string;
  type: 'image' | 'video';
};

const imageNames = [
  'backgroundBoudoir.jpg', 'boudoir2027.png',
  'image1.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg',
  'image15.jpg', 'image16.jpg', 'image17.jpg', 'image18.jpg', 'image19.jpg', 'image2.jpg',
  'image21.jpg', 'image22.jpg', 'image23.jpg', 'image24.jpg', 'image27.jpg', 'image28.jpg',
  'image29.jpg', 'image3.jpg', 'image30.jpg', 'image31.jpg', 'image32.jpg', 'image33.jpg',
  'image34.JPG', 'image35.JPG', 'image36.JPG', 'image37.JPG', 'image38.JPG', 'image5.jpg',
  'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'IMG_5808.JPG', 'IMG_5809.JPG',
  'IMG_5810.JPG', 'IMG_5811.JPG', 'IMG_5812.JPG', 'IMG_5813.JPG', 'IMG_5814.JPG',
  'IMG_5816.JPG', 'IMG_5817.JPG', 'IMG_5818.JPG', 'IMG_5819.JPG', 'IMG_5821.JPG',
  'IMG_5822.JPG', 'IMG_5823.JPG', 'IMG_5824.JPG', 'IMG_5826.JPG', 'IMG_5827.JPG',
  'IMG_5829.JPG', 'IMG_5836.JPG', 'IMG_5837.JPG', 'IMG_5838.JPG', 'IMG_9834.jpg',
  'logoBoudior.png',
];

const mediaItems: MediaItem[] = [
  ...imageNames.map((name) => ({ url: `/images/${name}`, type: 'image' as const })),
  { url: '/images/MVI_2796.MP4', type: 'video' },
  { url: '/images/MVI_2856.MP4', type: 'video' },
  { url: '/images/MVI_2859.mov', type: 'video' },
  { url: '/images/wine.JPG', type: 'image' },
];

const featuredImageNames = [
  'image24.jpg', 'IMG_5811.JPG', 'image27.jpg', 'image21.jpg', 'image29.jpg', 'IMG_5813.JPG',
];
const displayedItems = featuredImageNames
  .map((name) => {
    const index = mediaItems.findIndex((item) => item.url === `/images/${name}`);
    return index < 0 ? null : { item: mediaItems[index], index };
  })
  .filter((entry): entry is { item: MediaItem; index: number } => entry !== null);

const DISPLAYED_ITEMS_COUNT = displayedItems.length;
const THUMB_WINDOW = 7;
const photoCount = mediaItems.filter((item) => item.type === 'image').length;
const videoCount = mediaItems.length - photoCount;

const PlayIcon: React.FC<{ className?: string }> = ({ className = 'h-8 w-8' }) => (
  <svg className={`${className} ml-1 text-[#24231f]`} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const mediaLabel = (item: MediaItem, index: number, t: Translations) =>
  `${item.type === 'video' ? t.gallery.videoAlt : t.gallery.photoAlt} ${index + 1}`;

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isGalleryClosing, setIsGalleryClosing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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
    if (!isGalleryOpen && !isModalOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isGalleryOpen, isModalOpen]);

  useEffect(() => {
    if (!isGalleryClosing) return;
    const timeout = window.setTimeout(() => {
      setIsGalleryOpen(false);
      setIsGalleryClosing(false);
    }, 320);
    return () => window.clearTimeout(timeout);
  }, [isGalleryClosing]);

  useEffect(() => {
    if (!isClosing) return;
    const timeout = window.setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 320);
    return () => window.clearTimeout(timeout);
  }, [isClosing]);

  useEffect(() => {
    if (!isGalleryOpen) return;
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsGalleryClosing(true);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGalleryOpen]);

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
      if (event.key === 'Escape') setIsClosing(true);
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsClosing(false);
    setIsGalleryOpen(false);
    setIsGalleryClosing(false);
    setIsModalOpen(true);
    setIsAutoPlaying(true);
  };

  const closeModal = () => setIsClosing(true);
  const closeGallery = () => setIsGalleryClosing(true);

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
    <section id="gallery" className="overflow-hidden bg-[#fffdf8] py-20 text-[#24231f] md:py-24">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-8 xl:px-12">
        <div className="mb-9 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9d7c3f]">{t.gallery.subtitle}</p>
          <h2 className="mt-2 font-serif text-[clamp(2.35rem,4vw,3.4rem)] font-medium leading-tight">{t.gallery.title}</h2>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-6">
          {displayedItems.map(({ item, index }) => (
            <button
              type="button"
              key={item.url}
              className="group relative aspect-square overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b49452]"
              onClick={() => openModal(index)}
              aria-label={mediaLabel(item, index, t)}
            >
              <img
                src={item.url}
                alt={t.gallery.photoAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        <div className="mt-7 text-center">
          <button
            type="button"
            onClick={() => { setIsGalleryClosing(false); setIsGalleryOpen(true); }}
            aria-haspopup="dialog"
            aria-controls="gallery-dialog"
            aria-label={`${t.gallery.more} (${mediaItems.length - DISPLAYED_ITEMS_COUNT} ${t.gallery.moreItems})`}
            className="inline-flex min-h-12 items-center gap-2 border border-[#d6c9aa] bg-[#eee8db] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.1em] text-[#6f5729] transition hover:bg-[#e4dac4]"
          >
            <span className="font-serif text-2xl font-normal leading-none text-[#b49452]" aria-hidden="true">+</span>
            {t.gallery.more}
          </button>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/80 p-4 backdrop-blur-sm ${isGalleryClosing ? 'animate-gallery-backdrop-out' : 'animate-gallery-backdrop-in'}`}
          onClick={closeGallery}
        >
          <div
            id="gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            className={`relative flex max-h-[90vh] w-full max-w-[1200px] flex-col bg-[#fffdf8] p-5 text-[#24231f] shadow-[0_24px_90px_rgba(0,0,0,.4)] sm:p-7 ${isGalleryClosing ? 'animate-gallery-panel-out' : 'animate-gallery-panel-in'}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-1 flex items-center justify-between gap-4">
              <h3 id="gallery-dialog-title" className="font-serif text-2xl font-medium sm:text-3xl">{t.gallery.title}</h3>
              <button
                type="button"
                onClick={closeGallery}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e9e3d7] text-[#24231f] transition hover:bg-[#f7f4ed]"
                aria-label={t.gallery.close}
                autoFocus
              >
                <X size={21} />
              </button>
            </div>
            <p className="mb-4 text-xs text-[#77746c]">{photoCount} {t.gallery.photos} · {videoCount} {t.gallery.videos}</p>
            <div className="grid max-h-[calc(90vh_-_145px)] grid-cols-2 gap-2.5 overflow-y-auto sm:gap-3 md:grid-cols-3 lg:grid-cols-5">
              {mediaItems.map((item, index) => (
                <figure key={item.url} className="m-0 min-w-0">
                  {item.type === 'video' ? (
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster="/images/backgroundBoudoir.jpg"
                      aria-label={mediaLabel(item, index, t)}
                      className="aspect-square w-full bg-[#171614] object-cover"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <source src={item.url} type={item.url.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
                    </video>
                  ) : (
                    <button
                      type="button"
                      className="group block aspect-square w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#b49452]"
                      onClick={() => openModal(index)}
                      aria-label={mediaLabel(item, index, t)}
                    >
                      <img
                        src={item.url}
                        alt={t.gallery.photoAlt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          className={`fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 ${isClosing ? 'animate-gallery-backdrop-out' : 'animate-gallery-backdrop-in'}`}
          onClick={closeModal}
        >
          <div
            className={`relative flex h-full max-h-[90vh] w-full max-w-7xl flex-col ${isClosing ? 'animate-gallery-panel-out' : 'animate-gallery-panel-in'}`}
            role="dialog"
            aria-modal="true"
            aria-label={t.gallery.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-3 text-[#e2c982] shadow-lg transition-colors duration-300 hover:bg-black/70"
              aria-label={t.gallery.close}
              autoFocus
            >
              <X size={25} />
            </button>

            <div className="relative flex-1 overflow-hidden rounded-sm bg-black shadow-2xl">
              {currentItem.type === 'image' ? (
                <img src={currentItem.url} alt={mediaLabel(currentItem, currentIndex, t)} className="h-full w-full object-contain" />
              ) : (
                <video
                  src={currentItem.url}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                  onEnded={goToNext}
                />
              )}

              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-[#e2c982] transition-colors duration-300 hover:bg-black/70"
                aria-label={t.gallery.previous}
              >
                <ChevronLeft size={30} />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-3 text-[#e2c982] transition-colors duration-300 hover:bg-black/70"
                aria-label={t.gallery.next}
              >
                <ChevronRight size={30} />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 font-sans text-sm text-[#e2c982]">
                {currentIndex + 1} / {mediaItems.length}
              </div>
            </div>

            <div className="mt-4 overflow-x-auto pb-2">
              <div className="flex justify-center gap-3">
                {thumbnails.map(({ item, index }) => (
                  <button
                    type="button"
                    key={item.url}
                    onClick={() => goToSlide(index)}
                    aria-label={mediaLabel(item, index, t)}
                    aria-current={index === currentIndex ? 'true' : undefined}
                    className={`h-16 w-16 shrink-0 overflow-hidden border-2 transition-transform duration-300 md:h-20 md:w-20 ${index === currentIndex ? 'scale-105 border-[#b49452]' : 'border-transparent opacity-70 hover:border-[#b49452]/50 hover:opacity-100'}`}
                  >
                    {item.type === 'image' ? (
                      <img src={item.url} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                      <span className="flex h-full w-full items-center justify-center bg-[#fffdf8]">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b49452]/80"><PlayIcon className="h-3 w-3" /></span>
                      </span>
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
