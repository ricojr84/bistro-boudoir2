import React from 'react';
import { Translations } from '../types';

interface GalleryProps {
  t: Translations;
}

// Generate image paths for all JPG images in the images folder
const generateImagePaths = () => {
  const imagePaths = [];
  // We have JPG images numbered from 1 to 31 (image20.jpg is missing)
  for (let i = 1; i <= 31; i++) {
    // Skip image20.jpg as it doesn't exist
    if (i !== 20) {
      imagePaths.push({
        url: `/images/image${i}.jpg`
      });
    }
  }
  return imagePaths;
};

const images = generateImagePaths();

export const Gallery: React.FC<GalleryProps> = ({ t }) => {
  return (
    <section id="gallery" className="py-20 bg-off-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-gold uppercase tracking-widest mb-4 relative inline-block">
            {t.gallery.title}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white/20"></span>
          </h2>
          <p className="font-sans text-light-gold text-lg uppercase tracking-[0.2em] mt-8">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {images.map((img, index) => (
            <div key={index} className="group relative aspect-square overflow-hidden cursor-pointer border-2 border-transparent hover:border-gold transition-all duration-300">
              <img 
                src={img.url} 
                alt={`Bistro Boudoir ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};