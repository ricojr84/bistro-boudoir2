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
            style={{ border: 0 }}
             loading="lazy" 
             allowFullScreen 
             referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!4v1764275419468!6m8!1m7!1svqc3IKj7aoNSD-V1tsR6Jg!2m2!1d51.34588307525023!2d3.288148095280725!3f275.71082!4f0!5f0.7820865974627469">
           </iframe>
        </div>
      </div>
    </section>
  );
};