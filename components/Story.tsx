import React, { useEffect, useState } from 'react';
import { Translations } from '../types';
import { scrollToId } from '../utils';

interface StoryProps {
  t: Translations;
}

const photos = [
  '/images/IMG_5808.JPG',
  '/images/IMG_5809.JPG',
  '/images/IMG_5810.JPG',
  '/images/IMG_5811.JPG',
  '/images/IMG_5812.JPG',
  '/images/IMG_5813.JPG',
  '/images/IMG_5814.JPG',
  '/images/IMG_5815.JPG',
  '/images/IMG_5816.JPG',
  '/images/IMG_5817.JPG',
  '/images/IMG_5818.JPG',
  '/images/IMG_5819.JPG',
];

export const Story: React.FC<StoryProps> = ({ t }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [nextPhotoIndex, setNextPhotoIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const fadeDuration = 1500;
    let currentIndex = 0;
    let isPreparingTransition = false;
    let isUnmounted = false;
    let transitionTimeout = 0;
    let firstFrame = 0;
    let secondFrame = 0;
    let pendingImage: HTMLImageElement | null = null;
    const interval = window.setInterval(() => {
      if (isPreparingTransition) return;
      isPreparingTransition = true;

      const offset = 1 + Math.floor(Math.random() * (photos.length - 1));
      const nextIndex = (currentIndex + offset) % photos.length;
      pendingImage = new Image();
      pendingImage.onload = () => {
        if (!pendingImage || isUnmounted) return;
        const beginFade = () => {
          if (isUnmounted) return;
          setNextPhotoIndex(nextIndex);
          firstFrame = window.requestAnimationFrame(() => {
            secondFrame = window.requestAnimationFrame(() => {
              setIsTransitioning(true);
              transitionTimeout = window.setTimeout(() => {
                currentIndex = nextIndex;
                setPhotoIndex(nextIndex);
                setIsTransitioning(false);
                setNextPhotoIndex(null);
                isPreparingTransition = false;
                pendingImage = null;
              }, fadeDuration);
            });
          });
        };

        if (typeof pendingImage.decode === 'function') {
          void pendingImage.decode().then(beginFade, beginFade);
        } else {
          beginFade();
        }
      };
      pendingImage.onerror = () => {
        pendingImage = null;
        isPreparingTransition = false;
      };
      pendingImage.src = photos[nextIndex];
    }, 10000);

    return () => {
      isUnmounted = true;
      window.clearInterval(interval);
      window.clearTimeout(transitionTimeout);
      if (pendingImage) {
        pendingImage.onload = null;
        pendingImage.onerror = null;
      }
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <section id="story" className="bg-[#f7f4ed] px-6 py-20 text-[#24231f] sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1080px] items-center gap-8 md:grid-cols-[.8fr_1.2fr] md:gap-[clamp(48px,8vw,90px)]">
        <div className="order-2 md:order-none">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9d7c3f]">{t.story.eyebrow}</p>
          <h2 className="my-3 font-serif text-[clamp(2.35rem,4vw,3.4rem)] font-medium leading-[1.12]">{t.story.title}</h2>
          <p className="mb-4 font-serif text-xl italic leading-relaxed text-[#5f5748]">{t.story.quote}</p>
          <p className="mb-5 text-sm leading-7 text-[#77746c]">{t.story.description}</p>
          <button
            type="button"
            onClick={() => scrollToId('contact')}
            className="border-b border-[#cdbb91] pb-1 text-[11px] font-semibold uppercase tracking-[.1em] text-[#7b6334] transition hover:text-[#24231f]"
          >
            {t.story.link} <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="order-1 relative h-[290px] w-full overflow-hidden md:order-none md:h-[370px]">
          <img
            src={photos[photoIndex]}
            alt={t.story.photoAlt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
            loading="eager"
            decoding="async"
          />
          {nextPhotoIndex !== null && (
            <img
              src={photos[nextPhotoIndex]}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
              decoding="async"
            />
          )}
        </div>
      </div>
    </section>
  );
};
