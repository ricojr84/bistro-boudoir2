import React, { useEffect, useRef, useState } from 'react';
import { Translations } from '../types';

interface MapProps {
  t: Translations;
}

const MAP_SRC =
  'https://maps.google.com/maps?q=Lippenslaan%20141%2C%208300%20Knokke-Heist%2C%20Belgium&z=15&output=embed';

export const Map: React.FC<MapProps> = ({ t }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '240px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="map" className="relative bg-[#f7f4ed] px-5 py-16 text-[#24231f] sm:px-8 md:py-20">
      <div className="relative z-10 mx-auto max-w-[1050px]">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-3 font-serif text-3xl font-medium sm:text-4xl">
            {t.nav.map}
          </h2>
          <div className="mx-auto h-px w-12 bg-[#b49452]"></div>
        </div>

        <div ref={containerRef} className="h-[320px] w-full bg-[#25231f] shadow-[0_18px_50px_rgba(36,35,31,.18)] sm:h-[400px] md:h-[440px]">
          {shouldLoad ? (
            <iframe
              title={t.nav.map}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={MAP_SRC}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gold/70 font-serif tracking-widest uppercase">
              {t.nav.map}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
