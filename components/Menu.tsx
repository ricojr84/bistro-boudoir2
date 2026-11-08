import React, { KeyboardEvent, useState } from 'react';
import { Language, MenuCategory, Translations } from '../types';

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
  const menuAndSuggestions: MenuCategory = {
    title: lang === 'nl' ? 'Menu & Suggestie' : 'Menu & Suggestions',
    items: [],
  };
  const wineList: MenuCategory = {
    title: lang === 'nl' ? 'Wijn list' : lang === 'fr' ? 'Carte des vins' : 'Wine list',
    items: [],
  };
  const warmDrinksAndDesserts: MenuCategory = {
    title: `${categories.warmDrinks.title} & ${categories.desserts.title}`,
    items: [...categories.warmDrinks.items, ...categories.desserts.items],
  };
  const tabs = [
    ['menuAndSuggestions', menuAndSuggestions],
    ['bites', categories.bites],
    ['starters', categories.starters],
    ['mains', categories.mains],
    ['warmDrinksAndDesserts', warmDrinksAndDesserts],
    ['drinks', categories.drinks],
    ['wineList', wineList],
  ] as const;
  const [activeId, setActiveId] = useState<(typeof tabs)[number][0]>('mains');
  const activeCategory = tabs.find(([id]) => id === activeId)?.[1] ?? categories.mains;
  const fullMenuPdf = lang === 'fr'
    ? '/images/boudoir_26-menuwinter-FR.pdf'
    : lang === 'en'
      ? '/images/Bistro_Boudoir_English_Menu.pdf'
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
    <section id="menu" className="bg-[#fffdf8] px-5 py-20 text-[#24231f] sm:px-8 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-9 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#9d7c3f]">{t.menu.eyebrow}</p>
          <h2 className="mt-2 font-serif text-[clamp(2.35rem,4vw,3.4rem)] font-medium leading-tight">{t.menu.title}</h2>
          <p className="mt-2 text-sm text-[#77746c]">{t.menu.subtitle}</p>
        </header>

        <div
          className="-mx-5 mb-4 flex snap-x items-center justify-start gap-2 overflow-x-auto border-b border-[#e9e3d7] px-5 pb-5 sm:mx-0 sm:justify-center sm:gap-2 sm:px-0"
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
                className={`min-h-10 shrink-0 snap-start border px-3 font-sans text-xs transition-colors sm:px-4 ${
                  isActive
                    ? 'border-[#d9c89f] bg-[#fbf8f0] font-semibold text-[#6f5729]'
                    : 'border-transparent text-[#77746c] hover:text-[#24231f]'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div
          id="menu-panel"
          className="mx-auto max-w-[950px] px-2 sm:px-5"
          role="tabpanel"
          aria-labelledby={`menu-tab-${activeId}`}
          aria-live="polite"
        >
          {activeId === 'wineList' ? (
            <div className="mx-auto w-full max-w-[760px] border border-[#e9e3d7] bg-white">
              <iframe
                src="/images/Bistro_Boudoir_Wine_List_3_Sheets_Final_NL_FR.pdf#page=1&view=FitH"
                title={lang === 'fr' ? 'Carte des vins' : lang === 'en' ? 'Wine list' : 'Wijn list'}
                className="block h-[80vh] min-h-[480px] max-h-[1000px] w-full bg-white"
                loading="eager"
                scrolling="yes"
              >
                <a href="/images/Bistro_Boudoir_Wine_List_3_Sheets_Final_NL_FR.pdf" target="_blank" rel="noopener noreferrer">
                  {lang === 'fr' ? 'Ouvrir la carte des vins' : lang === 'en' ? 'Open the wine list' : 'Open de wijnlijst'}
                </a>
              </iframe>
            </div>
          ) : activeId === 'menuAndSuggestions' ? (
            <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-5 md:grid-cols-3">
              <img
                src="/images/setMenu.PNG"
                alt={lang === 'en' ? 'Gourmet menu' : 'Menu gourmand'}
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/winterSuggestie.PNG"
                alt={lang === 'nl' ? 'Wintersuggesties' : lang === 'fr' ? 'Suggestions d’hiver' : 'Winter suggestions'}
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
              <div className="min-w-0 border border-[#e9e3d7] bg-white">
                <iframe
                  src="/images/menu2027.pdf#page=1&view=FitH"
                  title={lang === 'fr' ? 'Menu 2027' : lang === 'en' ? '2027 menu' : 'Menu 2027'}
                  className="block h-[80vh] min-h-[480px] max-h-[1000px] w-full bg-white"
                  loading="eager"
                  scrolling="yes"
                >
                  <a href="/images/menu2027.pdf" target="_blank" rel="noopener noreferrer">
                    {lang === 'fr' ? 'Ouvrir le menu 2027' : lang === 'en' ? 'Open the 2027 menu' : 'Open menu 2027'}
                  </a>
                </iframe>
              </div>
            </div>
          ) : (
            <>
              {activeCategory.note && <p className="mb-2 text-center text-sm italic text-[#514944]">{activeCategory.note}</p>}
              <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
                {activeCategory.items.map((item) => (
                  <MenuItemRow key={`${item.name}-${item.price}`} {...item} />
                ))}
              </div>
              {activeId === 'mains' && (
                <p className="mt-3 text-center text-xs italic text-[#514944]">{t.menu.childrenNote}</p>
              )}
            </>
          )}
        </div>
        {activeId !== 'menuAndSuggestions' && activeId !== 'wineList' && (
          <div className="mt-5 text-center">
            <a
              href={fullMenuPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center border border-[#cdbb91] px-6 py-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#7b6334] transition-colors hover:bg-[#b49452] hover:text-[#201d17]"
            >
              {lang === 'fr' ? 'Voir le menu complet' : lang === 'en' ? 'See full menu' : 'Bekijk de volledige menukaart'} →
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
