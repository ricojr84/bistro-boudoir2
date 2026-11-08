export type Language = 'nl' | 'fr' | 'en';

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  extra?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

export interface Translations {
  nav: {
    home: string;
    story: string;
    menu: string;
    gallery: string;
    suggesties: string;
    contact: string;
    egift: string;
    map: string;
  };
  home: {
    title: string;
    eyebrow: string;
    headline: string;
    heroDescription: string;
    subtitle: string;
    description: string;
    button: string;
    scrollNote: string;
  };
  story: {
    eyebrow: string;
    title: string;
    quote: string;
    description: string;
    link: string;
    photoAlt: string;
  };
  menu: {
    eyebrow: string;
    title: string;
    subtitle: string;
    childrenNote: string;
    categories: {
      bites: MenuCategory;
      starters: MenuCategory;
      salads: MenuCategory;
      mains: MenuCategory;
      drinks: MenuCategory;
      warmDrinks: MenuCategory;
      desserts: MenuCategory;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    more: string;
    moreItems: string;
    photos: string;
    videos: string;
    close: string;
    previous: string;
    next: string;
    photoAlt: string;
    videoAlt: string;
  };
  suggestions: {
    title: string;
    comingSoon: string;
    wijnkaart: string;
  };
  contact: {
    headline: string;
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    reservationButton: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
    tagline: string;
    openingHours: {
      title: string;
      days: Array<{ day: string; time: string }>;
    };
    address: string;
    phone: string;
    reservationButton: string;
    experience: string;
  };
}
