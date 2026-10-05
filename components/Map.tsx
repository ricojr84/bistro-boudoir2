import React, { useEffect, useRef, useState } from 'react';
import { Translations } from '../types';

interface MapProps {
  t: Translations;
}

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!4v1764275419468!6m8!1m7!1svqc3IKj7aoNSD-V1tsR6Jg!2m2!1d51.34588307525023!2d3.288148095280725!3f275.71082!4f0!5f0.7820865974627469';

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
    <section id="map" className="relative py-20 bg-off-black">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-white uppercase tracking-widest mb-4">
            {t.nav.map}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div ref={containerRef} className="w-full h-[500px] border-4 border-gold shadow-2xl bg-off-black">
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
