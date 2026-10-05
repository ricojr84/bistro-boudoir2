export const NAV_IDS = ['home', 'menu', 'gallery', 'suggesties', 'contact', 'egift', 'map'] as const;
export type NavId = (typeof NAV_IDS)[number];

export const RESERVATION_URL = 'https://bookings.zenchef.com/results?rid=366006&pid=1001';
export const EGIFT_URL = 'https://www.egift.be/handelaar/Bistro%20Boudoir/1632';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  if (id !== 'home') {
    history.replaceState(null, '', `#${id}`);
  } else if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }

  element.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block: 'start',
  });
};

export const openReservation = () => {
  const width = 800;
  const height = 700;
  const left = Math.max(0, window.screen.width / 2 - width / 2);
  const top = Math.max(0, window.screen.height / 2 - height / 2);
  window.open(
    RESERVATION_URL,
    'Reservation',
    `width=${width},height=${height},scrollbars=yes,resizable=yes,left=${left},top=${top}`
  );
};
