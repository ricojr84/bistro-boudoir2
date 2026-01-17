import { Translations } from './types';

export const CONTENT: Record<string, Translations> = {
  nl: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      gallery: 'Galerij',
      suggesties: 'Suggesties',
      contact: 'Contact',
      egift: 'E-Gift',
      map: 'Kaart'
    },
    home: {
      title: 'Welkom in Bistro Boudoir',
      subtitle: 'Authentieke Franse Keuken in het Hart van Knokke',
      description: 'Welkom bij Bistro Boudoir, waar Franse elegantie en Belgische verfijning elkaar omarmen. Gelegen aan de stijlvolle Lippenslaan – het kloppende hart van Knokke – biedt deze culinaire parel een zintuiglijke belevenis vol charme en klasse. Gastvrouw Daniela Nistreanu verwelkomt je met een warme glimlach en feilloze finesse. Chef Ivan Chuhunnikov creëert verfijnde Frans-Belgische gerechten, geïnspireerd door de seizoenen. Bistro Boudoir is geen restaurant. Het is een ervaring.',
      button: 'Bekijk Ons Menu'
    },
    menu: {
      title: 'Ons Menu',
      subtitle: 'Een culinaire reis door Frankrijk',
      childrenNote: 'EEN FRISSE SALADE KAN STEEDS BESTELD WORDEN ALS SUPPLEMENT +3€',
      categories: {
        starters: {
          title: 'Voorgerechten',
          items: [
            { name: 'Trio van Huisgemaakte Paté', description: 'Rund, kip & eend • Luikse siroop • seizoensfruit • toast', price: '€ 22' },
            { name: 'Foie Gras', description: 'Gebakken • gemarineerde peren • brioche • demi-glacesaus', price: '€ 31', extra: 'aangepaste wijn: Château Simon – Sauternes – Bordeaux – Frankrijk € 9,50 per glas' },
            { name: 'Garnalenkroketten', description: 'Handgepelde Zeebrugse garnalen • crème van de Noordzee • citroen (1-2 stuks)', price: '€ 15-23' },
            { name: 'Handgepelde Zeebrugse Garnalen', description: 'Sappige tomaat op tomatencrumble • handgepelde garnalen • huisgemaakte cocktailsaus', price: '€ 26' },
            { name: 'Sint-Jakobsnoten', description: 'Gebakken • champagnesaus • zalmkaviaar', price: '€ 29' }
          ]
        },
        mains: {
          title: 'Hoofdgerechten',
          items: [
            { name: 'Rund', description: 'Filet pur • frietjes • keuze uit Roquefort-, champignon- of pepersaus', price: '€ 39' },
            { name: 'Eendenborst', description: 'Kersensaus • rode bieten-gelée • krokante parmezaan • pavé', price: '€ 36' },
            { name: 'Tarbot', description: 'Filet • champagnesaus • seizoensgroenten • krielaardappeltje', price: '€ 52', extra: '* extra handgepelde Zeebrugse garnalen + € 5 *' },
            { name: 'Zeetong', description: 'Gebakken • frietjes • tartaarsaus', price: '€ 49' },
            { name: 'Kabeljauw', description: 'Haasje • garnalenbisque • handgepelde Zeebrugse garnalen • zalmkaviaar • puree', price: '€ 41' },
            { name: 'Noordzee Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Vol au Vent Klassiek', description: 'Hoevekip • bladerdeeg • gehaktballetjes • champignons • frietjes', price: '€ 28' },
            { name: 'Kalf', description: 'Gebakken kalfszwezeriken • seizoensgroenten • honing-mosterdsaus • krielaardappelen', price: '€ 48' }
          ]
        },
        gourmand: {
          title: 'Menu Gourmand',
          note: 'DE MENU\'S WORDEN PER TAFEL GESERVEERD.',
          items: [
            { name: 'Voorgerecht', description: 'NOORDZEE BOUILLABAISE\nToast • rouille • gruyère\nof\nRUNDSTONG CARPACCIO\nRemouladesaus • kappertjes • olijfolie', price: '' },
            { name: 'Hoofdgerecht', description: 'ZEETONG\nGebakken • frietjes • tartaarsaus (+ € 12)\nof\nVARKENSWANGETJES\nGroenten • krieltjes • saus van donker kasteelbier', price: '' },
            { name: 'Dessert', description: 'Dame Blanche\nof\nIrish Coffee', price: '' },
            { name: 'Prijs', description: 'per persoon', price: '€ 58' }
          ]
        },
        specials: {
          title: 'Specials',
          items: [
            { name: 'Jamon Iberico de Bellota', description: 'Tapas bord van 50 gr voor 2 personen', price: '€ 20' },
            { name: 'Aperitief Assortiment', description: '3 soorten verfijnde apero-balletjes', price: '€ 15' }
          ]
        },
        drinks: {
          title: 'Aperitief',
          items: [
            { name: 'Coupe Champagne', price: '€ 14' },
            { name: 'Glaasje Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kirr witte wijn', price: '€ 9' },
            { name: 'Kirr royal (Champagne)', price: '€ 14' },
            { name: 'Porto \'10 years\' rood', price: '€ 10' },
            { name: 'Martini wit/rood', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 8' },
            { name: 'Picon witte wijn', price: '€ 11' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari met vers fruitsap', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Bombay • Fever Tree Mediterranean € 15\nHendrickx • Fever Tree Indian tonic € 16\nMonkey 47 • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 16', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • koffielikeur • espresso) € 15\nPornstar Martini (Vodka • passievruchtlikeur • Cava on the side) € 15\nMojito (witte rum • limoen • munt • soda water) € 15\nMoscow mule (Vodka • limoen • gingerbeer) € 15\nNegroni (Campari • rode Martini • Gin) € 14\nApérol Spritz (Apérol • Cava • bruiswater) € 13\nLimoncello spritz (Limoncello • Cava • bruiswater) € 13', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir (gingerbeer • veenbes • sinaas) € 11\nMojito 0% (limoen • munt • soda water) € 11\nGin boudoir 0% (Fever Tree raspberry & rhubarb) € 14', price: '' },
            { name: 'Bier op Fles', description: 'Stella € 4\nLeffe blond € 5\nDuvel € 5\nRochefort € 5\nStella 0% € 4', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Warme Dranken',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4,5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5,5\nLatte Macchiato € 6', price: '' },
            { name: 'THEE by Tea Coach Ken', description: 'Witte thee\n• White peach (perzik/appel/vlierbes) € 6\n\nGroene thee\n• Green peppermint (geserveerd met verse munt)\n• Fresh lemon (citroengras/citroen aroma)\n• Berry rose (Chinese sencha/framboos/rozenblaadjes)\n\nZwarte infusies\n• Superior Earl Grey (zwarte thee blend/natuurlijke bergamot)\n• Sexy goji (zeste van sinaasappel, gojibessen, aroma, wortelvlokken, gele rozenknopjes, saffloer)\n\nKruidenthee\n• Ginger orange (gember/kamille/peper/appelsien)\n• Ginger lemon (gember/zoethout/citroengras/citroenschillen/pepermunt/peperkorrels)\n• Relaxing Camomille (venkel/rozenbottelschil/kamillebloempjes/brandnetel/lavendelbloem)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Warme appeltaart', description: 'vanille-ijs', price: '€ 12' },
            { name: 'Dame blanche', price: '€ 10' },
            { name: 'Crème brulée', price: '€ 10' },
            { name: 'Sabayon', description: 'van kriekenbier of Champagne', price: '€ 12' },
            { name: 'Chocolade moelleux', price: '€ 12' },
            { name: 'Cheesecake huisgemaakt', description: 'frisse topping - smelt in de mond', price: '€ 14' },
            { name: 'POUSSE CAFÉ', description: 'Irish Coffee (whisky) € 12\nFrench Coffee (cognac) € 12\nItalian Coffee (Amaretto) € 12\nLimoncello € 10\nAmaretto € 10\nBaileys € 10\nGrand Marnier € 10\nCointreau € 10\nHasseltse Jenever € 8\nGrappa € 10\nSambuca € 10\nEau de vie Poire Williams € 12\nCalvados € 10\nCognac Hennessy € 10\nCuarenta Y Tres € 10\nJack Daniels € 16\nDon Papa rhum € 16\nLagavulin € 16', price: '' }
          ]
        }
      }
    },
    gallery: {
      title: 'Galerij',
      subtitle: 'Sfeerbeelden',
      more: 'Meer',
      moreItems: 'meer items'
    },
    suggestions: {
      title: 'Onze Suggesties',
      comingSoon: 'Binnenkort'
    },
    contact: {
      title: 'Contacteer Ons',
      subtitle: 'We horen graag van u',
      address: 'Adres',
      phone: 'Telefoon',
      email: 'E-mail',
      hours: 'Openingstijden',
      reservationButton: 'Reserveer een Tafel',
      form: {
        name: 'Uw Naam',
        email: 'Uw E-mail',
        phone: 'Uw Telefoon',
        message: 'Uw Bericht',
        submit: 'Verstuur Bericht',
        success: 'Bedankt! We hebben uw bericht ontvangen en nemen zo spoedig mogelijk contact met u op.',
        error: 'Vul alstublieft alle verplichte velden in.'
      }
    },
    footer: {
      copyright: '© 2025 Bistro Boudoir. Alle rechten voorbehouden.',
      tagline: 'Bon appétit!',
      openingHours: {
        title: 'OPENINGSTIJDEN',
        days: [
          { day: 'Maandag', time: 'Gesloten' },
          { day: 'Dinsdag', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Woensdag', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Donderdag', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Vrijdag', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Zaterdag', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Zondag', time: '12:00 - 15:00' }
        ]
      },
      address: 'Lippenslaan 141, 8300 Knokke',
      phone: '+32 (0)50 66 03 23',
      reservationButton: 'RESERVEER EEN TAFEL',
      experience: 'EXPERIENCE EXCELLENT DINING AT BOUDIOR'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      menu: 'Menu',
      gallery: 'Galerie',
      suggesties: 'Suggestions',
      contact: 'Contact',
      egift: 'E-Gift',
      map: 'Carte'
    },
    home: {
      title: 'Bienvenue au Bistro Boudoir',
      subtitle: 'Cuisine Française Authentique au Cœur de Knokke',
      description: 'Bienvenue au Bistro Boudoir, où l\'élégance française et le raffinement belge se rencontrent. Situé sur la prestigieuse Lippenslaan – le cœur battant de Knokke – cette perle culinaire offre une expérience sensorielle pleine de charme et de classe. L\'hôtesse Daniela Nistreanu vous accueille avec un sourire chaleureux et une finesse irréprochable. Le chef Ivan Chuhunnikov crée des plats raffinés franco-belges, inspirés par les saisons. Bistro Boudoir n\'est pas un restaurant. C\'est une expérience.',
      button: 'Voir Notre Menu'
    },
    menu: {
      title: 'Notre Menu',
      subtitle: 'Un voyage culinaire à travers la France',
      childrenNote: 'UNE SALADE FRAÎCHE PEUT TOUJOURS ÊTRE COMMANDÉE EN SUPPLÉMENT +3€',
      categories: {
        starters: {
          title: 'Entrées',
          items: [
            { name: 'Trio de Pâtés Maison', description: 'Bœuf, poulet & canard • sirop de Liège • fruits de saison • toast', price: '€ 22' },
            { name: 'Foie Gras', description: 'Poêlé • poires marinées • brioche • sauce demi-glace', price: '€ 31', extra: 'vin adapté: Château Simon – Sauternes – Bordeaux – France € 9,50 par verre' },
            { name: 'Croquettes de Crevettes', description: 'Crevettes de Zeebrugge épluchées à la main • crème de la Mer du Nord • citron (1-2 pièces)', price: '€ 15-23' },
            { name: 'Crevettes de Zeebrugge Épluchées à la Main', description: 'Tomate juteuse sur crumble de tomate • crevettes épluchées à la main • sauce cocktail maison', price: '€ 26' },
            { name: 'Coquilles Saint-Jacques', description: 'Poêlées • sauce champagne • caviar de saumon', price: '€ 29' }
          ]
        },
        mains: {
          title: 'Plats Principaux',
          items: [
            { name: 'Bœuf', description: 'Filet pur • frites • choix de sauce Roquefort, champignon ou poivre', price: '€ 39' },
            { name: 'Magret de Canard', description: 'Sauce aux cerises • gelée de betteraves rouges • parmesan croustillant • pavé', price: '€ 36' },
            { name: 'Turbot', description: 'Filet • sauce champagne • légumes de saison • pommes de terre nouvelles', price: '€ 52', extra: '* crevettes de Zeebrugge épluchées à la main supplémentaires + € 5 *' },
            { name: 'Sole', description: 'Poêlée • frites • sauce tartare', price: '€ 49' },
            { name: 'Cabillaud', description: 'Filet • bisque de crevettes • crevettes de Zeebrugge épluchées à la main • caviar de saumon • purée', price: '€ 41' },
            { name: 'Bouillabaisse de la Mer du Nord', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Vol au Vent Classique', description: 'Poulet de ferme • pâte feuilletée • boulettes de viande • champignons • frites', price: '€ 28' },
            { name: 'Veau', description: 'Ris de veau poêlés • légumes de saison • sauce miel-moutarde • pommes de terre nouvelles', price: '€ 48' }
          ]
        },
        gourmand: {
          title: 'Menu Gourmand',
          note: 'LES MENUS SONT SERVIS PAR TABLE.',
          items: [
            { name: 'Entrée', description: 'BOUILLABAISSE DE LA MER DU NORD\nToast • rouille • gruyère\nou\nCARPACCIO DE LANGUE DE BŒUF\nSauce rémoulade • câpres • huile d\'olive', price: '' },
            { name: 'Plat Principal', description: 'SOLE\nPoêlée • frites • sauce tartare (+ € 12)\nou\nJOUES DE PORC\nLégumes • pommes de terre nouvelles • sauce à la bière brune de château', price: '' },
            { name: 'Dessert', description: 'Dame Blanche\nou\nIrish Coffee', price: '' },
            { name: 'Prix', description: 'par personne', price: '€ 58' }
          ]
        },
        specials: {
          title: 'Spécialités',
          items: [
            { name: 'Jamon Iberico de Bellota', description: 'Assiette de tapas de 50 gr pour 2 personnes', price: '€ 20' },
            { name: 'Assortiment Apéritif', description: '3 sortes de boulettes apéritives raffinées', price: '€ 15' }
          ]
        },
        drinks: {
          title: 'Apéritif & Boissons',
          items: [
            { name: 'Coupe Champagne', price: '€ 14' },
            { name: 'Glaasje Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kirr witte wijn', price: '€ 9' },
            { name: 'Kirr royal (Champagne)', price: '€ 14' },
            { name: 'Porto \'10 ans\' rouge', price: '€ 10' },
            { name: 'Martini blanc/rouge', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 8' },
            { name: 'Picon vin blanc', price: '€ 11' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari avec jus de fruits frais', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Bombay • Fever Tree Mediterranean € 15\nHendrickx • Fever Tree Indian tonic € 16\nMonkey 47 • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 16', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • liqueur de café • espresso) € 15\nPornstar Martini (Vodka • liqueur de fruit de la passion • Cava à côté) € 15\nMojito (rhum blanc • citron vert • menthe • eau gazeuse) € 15\nMoscow mule (Vodka • citron vert • gingerbeer) € 15\nNegroni (Campari • Martini rouge • Gin) € 14\nApérol Spritz (Apérol • Cava • eau pétillante) € 13\nLimoncello spritz (Limoncello • Cava • eau pétillante) € 13', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir (gingerbeer • canneberge • orange) € 11\nMojito 0% (citron vert • menthe • eau gazeuse) € 11\nGin boudoir 0% (Fever Tree framboise & rhubarbe) € 14', price: '' },
            { name: 'Bière en Bouteille', description: 'Stella € 4\nLeffe blond € 5\nDuvel € 5\nRochefort € 5\nStella 0% € 4', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Boissons Chaudes',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4,5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5,5\nLatte Macchiato € 6', price: '' },
            { name: 'THÉ by Tea Coach Ken', description: 'Thé blanc\n• White peach (pêche/pomme/sureau) € 6\n\nThé vert\n• Green peppermint (servi avec menthe fraîche)\n• Fresh lemon (citronnelle/arôme citron)\n• Berry rose (sencha chinois/framboise/pétales de rose)\n\nInfusions noires\n• Superior Earl Grey (mélange de thé noir/bergamote naturelle)\n• Sexy goji (zeste d\'orange, baies de goji, arôme, flocons de carotte, boutons de rose jaunes, carthame)\n\nTisanes\n• Ginger orange (gingembre/camomille/poivre/orange)\n• Ginger lemon (gingembre/réglisse/citronnelle/écorces de citron/menthe poivrée/grains de poivre)\n• Relaxing Camomille (fenouil/écorce d\'églantier/fleurs de camomille/ortie/fleur de lavande)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Tarte aux pommes chaude', description: 'glace vanille', price: '€ 12' },
            { name: 'Dame blanche', price: '€ 10' },
            { name: 'Crème brûlée', price: '€ 10' },
            { name: 'Sabayon', description: 'à la bière de cerises ou Champagne', price: '€ 12' },
            { name: 'Moelleux au chocolat', price: '€ 12' },
            { name: 'Cheesecake maison', description: 'topping frais - fond dans la bouche', price: '€ 14' },
            { name: 'POUSSE CAFÉ', description: 'Irish Coffee (whisky) € 12\nFrench Coffee (cognac) € 12\nItalian Coffee (Amaretto) € 12\nLimoncello € 10\nAmaretto € 10\nBaileys € 10\nGrand Marnier € 10\nCointreau € 10\nGenièvre de Hasselt € 8\nGrappa € 10\nSambuca € 10\nEau de vie Poire Williams € 12\nCalvados € 10\nCognac Hennessy € 10\nCuarenta Y Tres € 10\nJack Daniels € 16\nDon Papa rhum € 16\nLagavulin € 16', price: '' }
          ]
        }
      }
    },
    gallery: {
      title: 'Galerie',
      subtitle: 'Ambiance',
      more: 'Plus',
      moreItems: 'éléments de plus'
    },
    suggestions: {
      title: 'Nos Suggestions',
      comingSoon: 'Bientôt'
    },
    contact: {
      title: 'Contactez-Nous',
      subtitle: 'Nous serions ravis d\'avoir de vos nouvelles',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'E-mail',
      hours: 'Heures d\'Ouverture',
      reservationButton: 'RÉSERVER UNE TABLE',
      form: {
        name: 'Votre Nom',
        email: 'Votre E-mail',
        phone: 'Votre Téléphone',
        message: 'Votre Message',
        submit: 'Envoyer le Message',
        success: 'Merci! Nous avons reçu votre message et vous contacterons dès que possible.',
        error: 'Veuillez remplir tous les champs obligatoires.'
      }
    },
    footer: {
      copyright: '© 2025 Bistro Boudoir. Tous droits réservés.',
      tagline: 'Bon appétit!',
      openingHours: {
        title: 'HEURES D\'OUVERTURE',
        days: [
          { day: 'Lundi', time: 'Fermé' },
          { day: 'Mardi', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Mercredi', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Jeudi', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Vendredi', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Samedi', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Dimanche', time: '12:00 - 15:00' }
        ]
      },
      address: 'Lippenslaan 141, 8300 Knokke',
      phone: '+32 (0)50 66 03 23',
      reservationButton: 'RÉSERVER UNE TABLE',
      experience: 'EXPERIENCE EXCELLENT DINING AT BOUDIOR'
    }
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      gallery: 'Gallery',
      suggesties: 'Suggestions',
      contact: 'Contact',
      egift: 'E-Gift',
      map: 'Map'
    },
    home: {
      title: 'Welcome to Bistro Boudoir',
      subtitle: 'Authentic French Cuisine in the Heart of Knokke',
      description: 'Welcome to Bistro Boudoir, where French elegance and Belgian refinement embrace each other. Located on the stylish Lippenslaan – the beating heart of Knokke – this culinary gem offers a sensory experience full of charm and class. Hostess Daniela Nistreanu welcomes you with a warm smile and impeccable finesse. Chef Ivan Chuhunnikov creates refined Franco-Belgian dishes, inspired by the seasons. Bistro Boudoir is not a restaurant. It is an experience.',
      button: 'View Our Menu'
    },
    menu: {
      title: 'Our Menu',
      subtitle: 'A culinary journey through France',
      childrenNote: 'A FRESH SALAD CAN ALWAYS BE ORDERED AS A SUPPLEMENT +3€',
      categories: {
        starters: {
          title: 'Starters',
          items: [
            { name: 'Trio of Homemade Paté', description: 'Beef, chicken & duck • Liège syrup • seasonal fruit • toast', price: '€ 22' },
            { name: 'Foie Gras', description: 'Pan-fried • marinated pears • brioche • demi-glace sauce', price: '€ 31', extra: 'matching wine: Château Simon – Sauternes – Bordeaux – France € 9.50 per glass' },
            { name: 'Shrimp Croquettes', description: 'Hand-peeled Zeebrugge shrimp • North Sea cream • lemon (1-2 pieces)', price: '€ 15-23' },
            { name: 'Hand-peeled Zeebrugge Shrimp', description: 'Juicy tomato on tomato crumble • hand-peeled shrimp • homemade cocktail sauce', price: '€ 26' },
            { name: 'Scallops', description: 'Pan-fried • champagne sauce • salmon caviar', price: '€ 29' }
          ]
        },
        mains: {
          title: 'Main Courses',
          items: [
            { name: 'Beef', description: 'Pure fillet • fries • choice of Roquefort, mushroom or pepper sauce', price: '€ 39' },
            { name: 'Duck Breast', description: 'Cherry sauce • red beet jelly • crispy parmesan • pavé', price: '€ 36' },
            { name: 'Turbot', description: 'Fillet • champagne sauce • seasonal vegetables • new potatoes', price: '€ 52', extra: '* extra hand-peeled Zeebrugge shrimp + € 5 *' },
            { name: 'Dover Sole', description: 'Pan-fried • fries • tartar sauce', price: '€ 49' },
            { name: 'Cod', description: 'Fillet • shrimp bisque • hand-peeled Zeebrugge shrimp • salmon caviar • purée', price: '€ 41' },
            { name: 'North Sea Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Classic Vol au Vent', description: 'Farm chicken • puff pastry • meatballs • mushrooms • fries', price: '€ 28' },
            { name: 'Veal', description: 'Pan-fried veal sweetbreads • seasonal vegetables • honey-mustard sauce • new potatoes', price: '€ 48' }
          ]
        },
        gourmand: {
          title: 'Gourmand Menu',
          note: 'THE MENUS ARE SERVED PER TABLE.',
          items: [
            { name: 'Starter', description: 'NORTH SEA BOUILLABAISSE\nToast • rouille • gruyère\nor\nBEEF TONGUE CARPACCIO\nRémoulade sauce • capers • olive oil', price: '' },
            { name: 'Main Course', description: 'DOVER SOLE\nPan-fried • fries • tartar sauce (+ € 12)\nor\nPORK CHEEKS\nVegetables • new potatoes • dark castle beer sauce', price: '' },
            { name: 'Dessert', description: 'Dame Blanche\nor\nIrish Coffee', price: '' },
            { name: 'Price', description: 'per person', price: '€ 58' }
          ]
        },
        specials: {
          title: 'Specials',
          items: [
            { name: 'Jamon Iberico de Bellota', description: 'Tapas plate of 50 gr for 2 people', price: '€ 20' },
            { name: 'Aperitif Assortment', description: '3 types of refined aperitif balls', price: '€ 15' }
          ]
        },
        drinks: {
          title: 'Aperitif & Drinks',
          items: [
            { name: 'Champagne Glass', price: '€ 14' },
            { name: 'Glass of Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kir white wine', price: '€ 9' },
            { name: 'Kir royal (Champagne)', price: '€ 14' },
            { name: 'Porto \'10 years\' red', price: '€ 10' },
            { name: 'Martini white/red', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 8' },
            { name: 'Picon white wine', price: '€ 11' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari with fresh fruit juice', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Bombay • Fever Tree Mediterranean € 15\nHendrickx • Fever Tree Indian tonic € 16\nMonkey 47 • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 16', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • coffee liqueur • espresso) € 15\nPornstar Martini (Vodka • passion fruit liqueur • Cava on the side) € 15\nMojito (white rum • lime • mint • soda water) € 15\nMoscow mule (Vodka • lime • gingerbeer) € 15\nNegroni (Campari • red Martini • Gin) € 14\nApérol Spritz (Apérol • Cava • sparkling water) € 13\nLimoncello spritz (Limoncello • Cava • sparkling water) € 13', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir (gingerbeer • cranberry • orange) € 11\nMojito 0% (lime • mint • soda water) € 11\nGin boudoir 0% (Fever Tree raspberry & rhubarb) € 14', price: '' },
            { name: 'Bottled Beer', description: 'Stella € 4\nLeffe blond € 5\nDuvel € 5\nRochefort € 5\nStella 0% € 4', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Hot Drinks',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4.5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5.5\nLatte Macchiato € 6', price: '' },
            { name: 'TEA by Tea Coach Ken', description: 'White tea\n• White peach (peach/apple/elderberry) € 6\n\nGreen tea\n• Green peppermint (served with fresh mint)\n• Fresh lemon (lemongrass/lemon aroma)\n• Berry rose (Chinese sencha/raspberry/rose petals)\n\nBlack infusions\n• Superior Earl Grey (black tea blend/natural bergamot)\n• Sexy goji (orange zest, goji berries, aroma, carrot flakes, yellow rose buds, safflower)\n\nHerbal tea\n• Ginger orange (ginger/chamomile/pepper/orange)\n• Ginger lemon (ginger/licorice/lemongrass/lemon peels/peppermint/peppercorns)\n• Relaxing Camomille (fennel/rosehip peel/chamomile flowers/nettle/lavender flower)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Warm apple pie', description: 'vanilla ice cream', price: '€ 12' },
            { name: 'Dame blanche', price: '€ 10' },
            { name: 'Crème brûlée', price: '€ 10' },
            { name: 'Sabayon', description: 'with cherry beer or Champagne', price: '€ 12' },
            { name: 'Chocolate moelleux', price: '€ 12' },
            { name: 'Homemade cheesecake', description: 'fresh topping - melts in the mouth', price: '€ 14' },
            { name: 'POUSSE CAFÉ', description: 'Irish Coffee (whisky) € 12\nFrench Coffee (cognac) € 12\nItalian Coffee (Amaretto) € 12\nLimoncello € 10\nAmaretto € 10\nBaileys € 10\nGrand Marnier € 10\nCointreau € 10\nHasselt Jenever € 8\nGrappa € 10\nSambuca € 10\nEau de vie Poire Williams € 12\nCalvados € 10\nCognac Hennessy € 10\nCuarenta Y Tres € 10\nJack Daniels € 16\nDon Papa rum € 16\nLagavulin € 16', price: '' }
          ]
        }
      }
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Atmosphere',
      more: 'More',
      moreItems: 'more items'
    },
    suggestions: {
      title: 'Our Suggestions',
      comingSoon: 'Coming Soon'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Opening Hours',
      reservationButton: 'Reserve a Table',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Thank you! We have received your message and will contact you as soon as possible.',
        error: 'Please fill in all required fields.'
      }
    },
    footer: {
      copyright: '© 2025 Bistro Boudoir. All rights reserved.',
      tagline: 'Bon appétit!',
      openingHours: {
        title: 'OPENING HOURS',
        days: [
          { day: 'Monday', time: 'Closed' },
          { day: 'Tuesday', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Wednesday', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Thursday', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Friday', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Saturday', time: '12:00 - 15:00 | 18:00 - 21:00' },
          { day: 'Sunday', time: '12:00 - 15:00' }
        ]
      },
      address: 'Lippenslaan 141, 8300 Knokke',
      phone: '+32 (0)50 66 03 23',
      reservationButton: 'RESERVE A TABLE',
      experience: 'EXPERIENCE EXCELLENT DINING AT BOUDIOR'
    }
  }
};