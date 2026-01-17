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
    menu: string;
    gallery: string;
    suggesties: string;
    contact: string;
    egift: string;
    map: string;
  };
  home: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  menu: {
    title: string;
    subtitle: string;
    childrenNote: string;
    categories: {
      starters: MenuCategory;
      mains: MenuCategory;
      gourmand: MenuCategory;
      specials: MenuCategory;
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
  };
  suggestions: {
    title: string;
    comingSoon: string;
  };
  contact: {
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