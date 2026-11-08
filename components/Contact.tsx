import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Translations } from '../types';

interface ContactProps {
  t: Translations;
}

const closedLabels = new Set(['Gesloten', 'Fermé', 'Closed']);

const detailLabel = 'mb-1 text-[10px] font-semibold uppercase tracking-[.2em] text-[#d1b56f]';

export const Contact: React.FC<ContactProps> = ({ t }) => {
  return (
    <section id="contact" className="bg-[#25231f] px-6 py-20 text-[#f7f4ed] sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1050px] items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#b49452]">{t.contact.subtitle}</p>
          <h2 className="my-3 font-serif text-[clamp(2.4rem,4vw,3.5rem)] font-medium leading-tight">{t.contact.headline}</h2>
          <p className="text-sm text-[#bdb8ac]">{t.footer.address}</p>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <p className={detailLabel}>{t.contact.phone}</p>
              <a className="text-sm transition hover:text-[#e2c982]" href="tel:+3250660323">+32 (0)50 66 03 23</a>
            </div>
            <div>
              <p className={detailLabel}>{t.contact.email}</p>
              <a className="text-sm transition hover:text-[#e2c982]" href="mailto:info@bistroboudoir.be">info@bistroboudoir.be</a>
            </div>
            <div>
              <p className={detailLabel}>{t.contact.address}</p>
              <p className="text-sm">Lippenslaan 141<br />8300 Knokke</p>
            </div>
            <div>
              <p className={detailLabel}>{t.contact.hours}</p>
              <div className="space-y-1.5 text-xs leading-relaxed text-[#c8c3b8]">
                {t.footer.openingHours.days.map((item) => (
                  <div key={item.day} className="flex justify-between gap-3 border-b border-white/10 pb-1">
                    <span className="font-medium text-white">{item.day}</span>
                    <span className={closedLabels.has(item.time) ? 'italic text-white/55' : ''}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div>
          <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden sm:min-h-[360px]">
            <img
              src="/images/logoBoudior.png"
              alt="Bistro Boudoir logo"
              className="h-[300px] w-full max-w-[300px] object-contain p-7 sm:h-[360px] sm:max-w-[360px] sm:p-8"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-6 text-[#f7f4ed] sm:justify-end">
            <a
              href="https://www.facebook.com/profile.php?id=100063110746117"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e2c982]"
              aria-label="Facebook"
            >
              <Facebook size={23} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/bistro_boudoir_knokke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#e2c982]"
              aria-label="Instagram"
            >
              <Instagram size={23} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
