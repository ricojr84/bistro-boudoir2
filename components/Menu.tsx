import React, { KeyboardEvent, useState } from 'react';
import { Language, Translations } from '../types';

interface MenuProps {
  t: Translations;
  lang: Language;
}

const MenuItemRow: React.FC<{ name: string; description?: string; price: string; extra?: string }> = ({
  name,
  description,
  price,
  extra,
}) => (
  <article className="flex items-start justify-between gap-4 border-b border-[#d9cec3] py-2 last:border-b-0">
    <div className="min-w-0">
      <h3 className="font-serif text-[17px] font-normal leading-snug text-[#211c1a] sm:text-xl">{name}</h3>
      {description && <p className="mt-0.5 whitespace-pre-line text-xs leading-snug text-[#514944] sm:text-[13px]">{description}</p>}
      {extra && <p className="mt-1 text-xs font-semibold text-[#681522]">{extra}</p>}
    </div>
    {price && <span className="shrink-0 pt-1 text-sm text-[#211c1a] sm:text-[17px]">{price}</span>}
  </article>
);

export const Menu: React.FC<MenuProps> = ({ t, lang }) => {
  const categories = t.menu.categories;
  const tabs = [
    ['bites', categories.bites],
    ['starters', categories.starters],
    ['mains', categories.mains],
    ['warmDrinks', categories.warmDrinks],
    ['desserts', categories.desserts],
    ['drinks', categories.drinks],
  ] as const;
  const [activeId, setActiveId] = useState<(typeof tabs)[number][0]>('mains');
  const activeCategory = tabs.find(([id]) => id === activeId)?.[1] ?? categories.mains;
  const fullMenuPdf = lang === 'fr'
    ? '/images/boudoir_26-menuwinter-FR.pdf'
    : '/images/boudoir_26-menuwinter-NL.pdf';

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const currentIndex = tabs.findIndex(([id]) => id === activeId);
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + step + tabs.length) % tabs.length;
    const [nextId] = tabs[nextIndex];
    setActiveId(nextId);
    document.getElementById(`menu-tab-${nextId}`)?.focus();
  };

  return (
    <section id="menu" className="bg-[#faf6f0] px-5 py-8 text-[#211c1a] sm:px-8 sm:py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-4 text-center">
          <h2 className="font-serif text-4xl font-normal italic text-[#D4AF37] sm:text-5xl md:text-[56px]">{t.menu.title}</h2>
          <span aria-hidden="true" className="mx-auto my-1.5 block h-px w-[42px] bg-[#D4AF37]" />
          <p className="text-[13px] sm:text-sm md:text-base">{t.menu.subtitle}</p>
        </header>

        <div
          className="-mx-5 mb-3 flex snap-x items-center justify-start overflow-x-auto border-b border-[#d9cec3] px-5 sm:mx-0 sm:justify-center sm:gap-1 sm:px-0"
          role="tablist"
          aria-label={t.menu.title}
        >
          {tabs.map(([id, category]) => {
            const isActive = id === activeId;
            return (
              <button
                key={id}
                id={`menu-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="menu-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(id)}
                onKeyDown={handleTabKeyDown}
                className={`min-h-10 shrink-0 snap-start border-b-[3px] px-3 font-serif text-sm transition-colors sm:px-4 sm:text-base ${
                  isActive
                    ? 'border-[#D4AF37] font-bold text-[#D4AF37]'
                    : 'border-transparent text-[#211c1a] hover:text-[#D4AF37]'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          className="mx-auto max-w-[900px] px-2 sm:px-5"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeId}`}
          aria-live="polite"
        >
          {activeCategory.note && <p className="mb-2 text-center text-sm italic text-[#514944]">{activeCategory.note}</p>}
          {activeCategory.items.map((item) => (
            <MenuItemRow key={`${item.name}-${item.price}`} {...item} />
          ))}
          {activeId === 'mains' && (
            <p className="mt-3 text-center text-xs italic text-[#514944]">{t.menu.childrenNote}</p>
          )}
        </div>
        <div className="mt-5 text-center">
          <a
            href={fullMenuPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center border border-[#D4AF37] px-6 py-2 text-sm text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-[#211c1a]"
          >
            {lang === 'fr' ? 'Voir le menu complet' : lang === 'en' ? 'See full menu' : 'Bekijk de volledige menukaart'} →
          </a>
        </div>
      </div>
    </section>
  );
};
