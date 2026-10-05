import React from 'react';
import { Translations } from '../types';
import { scrollToId } from '../utils';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden parallax-bg">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up w-full pt-[90px] pb-[120px]">
        <div className="mb-8">
          <img
            src="/images/logoBoudior.png"
            alt="Bistro Boudoir"
            className="w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <h2 className="font-sans text-light-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-6">
          {t.home.subtitle}
        </h2>

        <p className="font-serif text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          {t.home.description}
        </p>

        <button
          type="button"
          onClick={() => scrollToId('menu')}
          className="inline-block px-8 py-4 border-2 border-gold text-gold font-sans text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-off-black transition-colors duration-300"
        >
          {t.home.button}
        </button>

        <div className="mt-[30px] flex justify-center">
          <div className="mouse-scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div className="mouse-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
