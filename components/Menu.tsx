import React from 'react';
import { Translations, MenuItem } from '../types';

interface MenuProps {
  t: Translations;
}

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex flex-col pb-4 md:pb-6 border-b border-gray-200 hover:translate-x-2 transition-transform duration-300">
    <div className="flex justify-between items-baseline mb-1 md:mb-2">
      <h4 className="font-serif text-base md:text-xl text-off-black">{item.name}</h4>
      <span className="font-serif text-sm md:text-lg font-semibold text-off-black whitespace-nowrap ml-2 md:ml-4">{item.price}</span>
    </div>
    {item.description && (
      <p className="font-serif text-gray-600 italic text-xs md:text-sm leading-relaxed whitespace-pre-line">
        {item.description}
      </p>
    )}
    {item.extra && (
      <p className="font-sans text-xs text-gold mt-1 md:mt-2 font-bold tracking-wider">
        {item.extra}
      </p>
    )}
  </div>
);

export const Menu: React.FC<MenuProps> = ({ t }) => {
  const { categories } = t.menu;

  return (
    <section id="menu" className="py-12 md:py-20 bg-cream text-off-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.menu.title}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
          <p className="font-sans text-gray-600 text-sm md:text-lg uppercase tracking-[0.2em] mt-8">
            {t.menu.subtitle}
          </p>
          <div className="mt-6 md:mt-8 p-3 md:p-4 bg-gold/10 border-l-4 border-gold inline-block max-w-2xl">
            <p className="text-xs md:text-sm italic text-gray-700">{t.menu.allergenNotice}</p>
          </div>
        </div>

        {/* Row 1: Starters and Mains side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-12">
          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.starters.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.starters.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.mains.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.mains.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
            <div className="mt-4 md:mt-8 p-3 md:p-4 bg-gray-100 text-center italic text-xs md:text-sm text-gray-600">
              {t.menu.childrenNote}
            </div>
          </div>
        </div>

        {/* Row 2: Menu Gourmand - Full Width Center */}
        <div className="mb-6 md:mb-12 max-w-4xl mx-auto">
          <div className="bg-off-black text-cream p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-gold mb-2 pb-3 md:pb-4 border-b border-gray-700">
              {categories.gourmand.title}
            </h3>
            <p className="text-center text-gray-400 italic text-xs md:text-sm mb-4 md:mb-8">{categories.gourmand.note}</p>
            <div className="space-y-4 md:space-y-8">
              {categories.gourmand.items.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h4 className="font-serif text-lg md:text-xl text-gold mb-1 md:mb-2">{item.name}</h4>
                  {item.price && <span className="block text-xl md:text-2xl font-bold mb-1 md:mb-2">{item.price}</span>}
                  {item.description && (
                    <p className="font-serif text-gray-300 text-xs md:text-sm whitespace-pre-line">{item.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Specials - Full Width Center */}
        <div className="mb-6 md:mb-12 max-w-4xl mx-auto">
          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.specials.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.specials.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Desserts and Aperitief side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-12">
          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.desserts.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.desserts.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          </div>

          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.drinks.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.drinks.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 5: Warm Drinks - Full Width */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-4 md:p-8 shadow-xl border-t-4 border-gold">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-4 md:mb-8 border-b border-gold pb-3 md:pb-4">
              {categories.warmDrinks.title}
            </h3>
            <div className="space-y-4 md:space-y-6">
              {categories.warmDrinks.items.map((item, idx) => (
                <MenuItemCard key={idx} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};