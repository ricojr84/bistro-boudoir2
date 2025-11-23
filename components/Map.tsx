import React from 'react';
import { Translations } from '../types';

interface MapProps {
  t: Translations;
}

export const Map: React.FC<MapProps> = ({ t }) => {
  return (
    <section id="map" className="relative py-20 bg-off-black">
       <div className="container mx-auto px-4 z-10 relative">
         <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-white uppercase tracking-widest mb-4">
            {t.nav.map}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="w-full h-[500px] border-4 border-gold shadow-2xl">
           <iframe 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
             loading="lazy" 
             allowFullScreen 
             referrerPolicy="no-referrer-when-downgrade"
             src="https://www.google.com/maps?q=Lippenslaan+141,+8300+Knokke-Heist,+Belgium&output=embed">
           </iframe>
        </div>
      </div>
    </section>
  );
};