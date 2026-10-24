import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Suggestions } from './components/Suggestions';
import { Contact } from './components/Contact';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';
import { scrollToId } from './utils';

const App: React.FC = () => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return saved === 'fr' || saved === 'nl' || saved === 'en' ? saved : 'nl';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    const widgetConfig = document.getElementById('zenchef-widget-config');
    widgetConfig?.setAttribute('data-lang', lang);

    // Zenchef renders its floating control inside an iframe. Refresh its lang
    // query when the visitor changes language so the control and booking form
    // follow the same selection as the page.
    const widgetFrame = document.querySelector<HTMLIFrameElement>('iframe[class*="zc-iframe"]');
    if (widgetFrame?.src) {
      const frameUrl = new URL(widgetFrame.src);
      if (frameUrl.searchParams.get('lang') !== lang) {
        frameUrl.searchParams.set('lang', lang);
        widgetFrame.src = frameUrl.toString();
      }
    }
  }, [lang]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToId(hash), 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Menu t={t} />
      <Gallery t={t} />
      <Suggestions t={t} />
      <Contact t={t} />
      <Map t={t} />
      <Footer t={t} />
      <Analytics />
    </div>
  );
};

export default App;
