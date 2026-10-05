import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Translations } from '../types';
import { openReservation } from '../utils';

interface ContactProps {
  t: Translations;
}

const closedLabels = new Set(['Gesloten', 'Fermé', 'Closed']);

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-off-black uppercase tracking-widest mb-4 relative inline-block">
            {t.contact.title}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gold"></span>
          </h2>
          <p className="font-sans text-gray-600 text-lg uppercase tracking-[0.2em] mt-8">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-6 p-[5px] bg-white shadow-lg border-l-4 border-gold">
              <MapPin className="text-gold w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-off-black mb-2 uppercase">{t.contact.address}</h3>
                <p className="font-sans text-gray-600">Lippenslaan 141, 8300 Knokke</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-[5px] bg-white shadow-lg border-l-4 border-gold">
              <Phone className="text-gold w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-off-black mb-2 uppercase">{t.contact.phone}</h3>
                <p className="font-sans text-gray-600">+32 (0)50 66 03 23</p>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-[5px] bg-white shadow-lg border-l-4 border-gold">
              <Mail className="text-gold w-8 h-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-off-black mb-2 uppercase">{t.contact.email}</h3>
                <a href="mailto:info@bistroboudoir.be" className="font-sans text-gray-600 hover:text-gold transition-colors">
                  info@bistroboudoir.be
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-6 p-[5px] bg-white shadow-lg border-l-4 border-gold">
              <Clock className="text-gold w-8 h-8 mt-1 flex-shrink-0" />
              <div className="w-full">
                <h3 className="font-serif text-xl text-off-black mb-4 uppercase">{t.contact.hours}</h3>
                <div className="font-sans text-gray-600 space-y-2">
                  {t.footer.openingHours.days.map((item) => (
                    <div key={item.day} className="flex justify-between items-center border-b border-gray-200 pb-1">
                      <span className="font-semibold text-off-black">{item.day}</span>
                      <span className={`text-sm ${closedLabels.has(item.time) ? 'text-gray-500 italic' : 'text-gray-700'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 shadow-2xl flex flex-col items-center justify-center space-y-12 min-h-[600px]">
            <div className="flex-shrink-0">
              <img
                src="/images/visitekaartlogo.png"
                alt="Bistro Boudoir"
                className="w-48 md:w-64 lg:w-72 mx-auto drop-shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            <button
              type="button"
              onClick={openReservation}
              className="px-10 py-4 bg-gold border-2 border-gold text-off-black font-serif text-sm tracking-widest uppercase hover:bg-light-gold hover:border-light-gold transition-colors duration-300 shadow-lg cursor-pointer"
            >
              {t.contact.reservationButton}
            </button>

            <div className="flex items-center space-x-8 mt-auto">
              <a
                href="https://www.facebook.com/profile.php?id=100063110746117"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-black hover:text-gold transition-colors duration-300 relative"
                aria-label="Facebook"
              >
                <Facebook size={35} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse-new-post">
                  <span className="absolute inset-0 bg-gold rounded-full animate-ping-new-post opacity-75"></span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/bistro_boudoir_knokke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-black hover:text-gold transition-colors duration-300 relative"
                aria-label="Instagram"
              >
                <Instagram size={35} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse-new-post">
                  <span className="absolute inset-0 bg-gold rounded-full animate-ping-new-post opacity-75"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
