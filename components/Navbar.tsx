import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, Translations } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'nl' ? 'fr' : 'nl');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-off-black shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="z-50 cursor-pointer" onClick={() => scrollToSection('home')}>
           {/* Logo Text - resized as requested */}
           <h1 className="font-serif text-lg md:text-xl text-gold tracking-widest uppercase border-b-2 border-transparent hover:border-gold transition-all duration-300">
             Bistro Boudoir
           </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['home', 'menu', 'gallery', 'contact', 'map'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors relative group"
            >
              {t.nav[item as keyof typeof t.nav]}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          <button 
            onClick={toggleLang}
            className="flex items-center space-x-2 px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-off-black transition-all duration-300 text-sm tracking-widest uppercase"
          >
            <Globe size={16} />
            <span>{lang === 'nl' ? 'NL' : 'FR'}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleLang} className="mr-4 text-gold font-bold border border-gold px-2 py-1 text-xs">
             {lang.toUpperCase()}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gold focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-off-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {['home', 'menu', 'gallery', 'contact', 'map'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-2xl font-serif text-white hover:text-gold transition-colors uppercase tracking-widest"
            >
              {t.nav[item as keyof typeof t.nav]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};