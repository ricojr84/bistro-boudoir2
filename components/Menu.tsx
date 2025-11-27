import React from 'react';
import { Translations, MenuItem } from '../types';

interface MenuProps {
  t: Translations;
}

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex flex-col pb-6 border-b border-gray-200 hover:translate-x-2 transition-transform duration-300">
    <div className="flex justify-between items-baseline mb-2">
      <h4 className="font-serif text-xl text-off-black">{item.name}</h4>
      <span className="font-serif text-lg font-semibold text-off-black whitespace-nowrap ml-4">{item.price}</span>
    </div>
    {item.description && (
      <p className="font-serif text-gray-600 italic text-sm leading-relaxed whitespace-pre-line">
        {item.description}
      </p>
    )}
    {item.extra && (
      <p className="font-sans text-xs text-gold mt-2 font-bold tracking-wider">
        {item.extra}
      </p>
    )}
  </div>
);

export const Menu: React.FC<MenuProps> = ({ t }) => {
  const { categories } = t.menu;

  return (
    <section id="menu" className="py-20 bg-cream text-off-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.menu.title}
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
          <p className="font-sans text-gray-600 text-lg uppercase tracking-[0.2em] mt-8">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Main Layout: Left Column (Voorgerechten + Menu Gourmand) | Right Column (Hoofdgerechten + Specials + Warm Drinks) */}
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            {/* Left Column: Voorgerechten + Menu Gourmand + Desserts */}
            <div className="flex flex-col gap-5 lg:w-1/2">
              <div className="bg-white p-6 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-6 border-b border-gold pb-3">
                  {categories.starters.title}
                </h3>
                <div className="space-y-5">
                  {categories.starters.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 p-8 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-2 pb-4 border-b border-gold">
                  {categories.gourmand.title}
                </h3>
                <p className="text-center text-gray-600 italic text-sm mb-8">{categories.gourmand.note}</p>
                <div className="space-y-8">
                  {categories.gourmand.items.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <h4 className="font-serif text-xl text-off-black mb-2">{item.name}</h4>
                       {item.price && <span className="block text-2xl font-bold mb-2 text-off-black">{item.price}</span>}
                      {item.description && (
                        <p className="font-serif text-gray-600 text-sm whitespace-pre-line">{item.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-8 border-b border-gold pb-4">
                  {categories.desserts.title}
                </h3>
                <div className="space-y-2.5">
                  {categories.desserts.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Hoofdgerechten + Specials + Warm Drinks + Aperitief */}
            <div className="flex flex-col gap-5 lg:w-1/2">
              <div className="bg-white p-8 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-8 border-b border-gold pb-4">
                  {categories.mains.title}
                </h3>
                <div className="space-y-6">
                  {categories.mains.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
                <div className="mt-8 p-4 bg-gray-100 text-center italic text-sm text-gray-600">
                  {t.menu.childrenNote}
                </div>
              </div>

              <div className="bg-white p-6 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-6 border-b border-gold pb-3">
                  {categories.specials.title}
                </h3>
                <div className="space-y-5">
                  {categories.specials.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-6 border-b border-gold pb-3">
                  {categories.warmDrinks.title}
                </h3>
                <div className="space-y-5">
                  {categories.warmDrinks.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 shadow-xl border-t-4 border-gold">
                <h3 className="font-serif text-3xl text-center text-off-black mb-8 border-b border-gold pb-4">
                  {categories.drinks.title}
                </h3>
                <div className="space-y-2.5">
                  {categories.drinks.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};