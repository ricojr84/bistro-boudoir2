import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Map } from './components/Map';
import { Footer } from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  // Initialize language from localStorage or default to 'nl'
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'fr' || saved === 'nl') ? saved : 'nl';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('language', newLang);
  };

  // Get current translations
  const t = CONTENT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Menu t={t} />
      <Gallery t={t} />
      <Contact t={t} />
      <Map t={t} />
      <Footer t={t} />
    </div>
  );
};

export default App;