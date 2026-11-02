import React from 'react';
import { Translations } from '../types';

interface HeroProps {
  t: Translations;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="home" className="relative min-h-screen min-h-[100svh] w-full flex items-center justify-center overflow-hidden parallax-bg">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto animate-fade-in-up w-full pt-24 pb-16 md:pt-[90px] md:pb-[120px]">
        <div className="mb-6 md:mb-8">
          <img
            src="/images/logoBoudior.png"
            alt="Bistro Boudoir"
            className="w-52 sm:w-64 md:w-80 lg:w-96 mx-auto drop-shadow-2xl"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <h2 className="font-sans text-light-gold text-sm sm:text-lg md:text-xl tracking-[0.18em] sm:tracking-[0.3em] uppercase mb-4 md:mb-6">
          {t.home.subtitle}
        </h2>

        <p className="font-serif text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-7 md:mb-10">
          {t.home.description}
        </p>

        <div className="mt-5 md:mt-[30px] flex justify-center">
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
