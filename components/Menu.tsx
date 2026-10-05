import React from 'react';
import { Translations, MenuCategory, MenuItem } from '../types';

interface MenuProps {
  t: Translations;
}

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex flex-col py-3 border-b border-gray-200/60 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200 px-1">
    <div className="flex justify-between items-start gap-3">
      <h4 className="font-serif text-lg md:text-xl text-off-black leading-tight">{item.name}</h4>
      <span className="font-serif text-base md:text-lg font-semibold text-off-black whitespace-nowrap shrink-0">{item.price}</span>
    </div>
    {item.description && (
      <p className="font-serif text-gray-600 italic text-sm leading-snug mt-1 whitespace-pre-line">
        {item.description}
      </p>
    )}
    {item.extra && (
      <p className="font-sans text-xs text-gold mt-1.5 font-bold tracking-wider">
        {item.extra}
      </p>
    )}
  </div>
);

const CategoryCard: React.FC<{
  category: MenuCategory;
  muted?: boolean;
  wide?: boolean;
  footer?: React.ReactNode;
}> = ({ category, muted, wide, footer }) => (
  <div className={`${muted ? 'bg-gray-100' : 'bg-white'} p-4 md:p-5 shadow-lg border-t-4 border-gold ${wide ? 'lg:col-span-2' : ''}`}>
    <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-1 pb-2 border-b border-gold">
      {category.title}
    </h3>
    {category.note && (
      <p className="text-center text-gray-600 italic text-xs md:text-sm mb-3">{category.note}</p>
    )}
    <div className="divide-y divide-gray-200/60">
      {category.items.map((item) => (
        <MenuItemCard key={`${item.name}-${item.price}`} item={item} />
      ))}
    </div>
    {footer}
  </div>
);

export const Menu: React.FC<MenuProps> = ({ t }) => {
  const { categories } = t.menu;
  const drinksMidpoint = Math.ceil(categories.drinks.items.length / 2);

  return (
    <section id="menu" className="py-12 md:py-16 bg-cream text-off-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-off-black uppercase tracking-widest mb-3 relative inline-block">
            {t.menu.title}
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-0.5 bg-gold"></span>
          </h2>
          <p className="font-sans text-gray-600 text-sm md:text-base uppercase tracking-[0.15em] mt-6">
            {t.menu.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2">
          <CategoryCard category={categories.bites} muted />
          <CategoryCard category={categories.starters} />
          <CategoryCard category={categories.salads} />
          <CategoryCard
            category={categories.mains}
            footer={
              <div className="mt-4 p-3 bg-gray-100 text-center italic text-xs md:text-sm text-gray-600 rounded">
                {t.menu.childrenNote}
              </div>
            }
          />
          <CategoryCard category={categories.warmDrinks} />
          <CategoryCard category={categories.desserts} />

          <div className="bg-white p-4 md:p-5 shadow-lg border-t-4 border-gold lg:col-span-2">
            <h3 className="font-serif text-2xl md:text-3xl text-center text-off-black mb-3 border-b border-gold pb-2">
              {categories.drinks.title}
            </h3>
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="divide-y divide-gray-200/60">
                {categories.drinks.items.slice(0, drinksMidpoint).map((item) => (
                  <MenuItemCard key={`${item.name}-${item.price}`} item={item} />
                ))}
              </div>
              <div className="divide-y divide-gray-200/60">
                {categories.drinks.items.slice(drinksMidpoint).map((item) => (
                  <MenuItemCard key={`${item.name}-${item.price}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
