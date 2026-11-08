import React, { useEffect, useState } from 'react';
import { Translations } from '../types';
import { scrollToId } from '../utils';

interface StoryProps {
  t: Translations;
}

const photos = [
  '/images/IMG_5809.JPG',
  '/images/IMG_5812.JPG',
  '/images/IMG_5814.JPG',
  '/images/IMG_5817.JPG',
  '/images/IMG_5818.JPG',
  '/images/IMG_5819.JPG',
];

export const Story: React.FC<StoryProps> = ({ t }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    photos.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let transitionTimeout = 0;
    const interval = window.setInterval(() => {
      setIsChanging(true);
      transitionTimeout = window.setTimeout(() => {
        setPhotoIndex((current) => {
          const offset = 1 + Math.floor(Math.random() * (photos.length - 1));
          return (current + offset) % photos.length;
        });
        setIsChanging(false);
      }, 350);
    }, 10000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(transitionTimeout);
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
        <img
          src={photos[photoIndex]}
          alt={t.story.photoAlt}
          className={`order-1 h-[290px] w-full object-cover transition-opacity duration-700 md:order-none md:h-[370px] ${isChanging ? 'opacity-30' : 'opacity-100'}`}
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};
