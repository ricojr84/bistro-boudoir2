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
        bites: {
          title: 'Bites',
          note: 'vanaf 15 u tot 21 u',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Fijn gesneden Ibérico-ham', price: '€ 24' },
            { name: 'Steak Bites', description: 'Malse rundsbites in look-rozemarijnboter • geserveerd met toast', price: '€ 22' },
            { name: 'Assortiment Apero-Balletjes', description: 'Selder-truffelcrème • gefrituurde peterselie • citroen', price: '€ 18' },
            { name: 'Oesters Natuur', description: 'Peper & citroen (3-6 stuks)', price: '€ 14 - € 24' },
            { name: 'Burrata', description: 'Romige burrata • geserveerd met truffeltoast', price: '€ 19' },
            { name: 'Gambas', description: '4 easy peel gamba\'s • olijfolie • witte wijn • look • limoen', price: '€ 21' },
            { name: '200 gr Noordzeegarnalen', description: 'Om zelf te pellen', price: '€ 14' }
          ]
        },
        starters: {
          title: 'Voorgerechten',
          items: [
            { name: 'Gravlax', description: 'Huisgemarineerde zalm • zachte crème van ansjovis-roomkaas • zalmkaviaar', price: '€ 24' },
            { name: 'Handgepelde Grijze Garnalen van de Noordzee', description: 'Trio van tomaat • handgepelde garnalen • fijne mayonaise', price: '€ 26' },
            { name: 'Burrata & Zomerse Garnituur', description: 'Variatie van kerstomaat • romige burrata • aardbei', price: '€ 21' },
            { name: 'Rundscarpaccio', description: 'Dun gesneden rundvlees • truffelmayonaise • Parmezaan kaas • rucola', price: '€ 23' },
            { name: 'Garnaalkroketten', description: 'Handgepelde Zeebrugse garnalen • licht-pikante crème van de Noordzee • citroen (1-2 stuks)', price: '€ 15 - € 23' }
          ]
        },
        salads: {
          title: 'Salades',
          items: [
            { name: 'Warme Thaise Rundsalade', description: 'Warme rundreepjes • koriander • rode ui • chili • sesamzaadjes', price: '€ 29' },
            { name: 'Salade met Gravlax', description: 'Gravlax van zalm • mosterd-limoendressing • rode biet • courgette', price: '€ 27' }
          ]
        },
        mains: {
          title: 'Hoofdgerechten',
          items: [
            { name: 'Rund', description: 'Filet pur • frieten • keuze uit Roquefort-, champignon- of pepersaus', price: '€ 39' },
            { name: 'Eendenborst', description: 'Kersensaus • gekarameliseerde perzik • frieten', price: '€ 36' },
            { name: 'Entrecote ±500g', description: 'Gebroken zwarte peper • peperroomsaus • frieten', price: '€ 45' },
            { name: 'Vol au Vent Klassiek', description: 'Hoevekip • bladerdeeg • gehaktballen • champignons • frieten', price: '€ 29' },
            { name: 'Zeetong Meunière', description: 'Beurre noisette • kappertjes • citroen • frieten', price: '€ 49' },
            { name: 'Kabeljauw', description: 'Haasje • garnalenbisque • handgepelde Zeebrugse garnalen • zalmkaviaar • puree', price: '€ 41' },
            { name: 'Noordzee Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Zeebaars', description: 'Filet • beurre blanc • limoen • seizoengroenten', price: '€ 34' }
          ]
        },

        drinks: {
          title: 'Aperitief',
          items: [
            { name: 'Coupe Champagne', price: '€ 14' },
            { name: 'Glaasje Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kirr witte wijn', price: '€ 10' },
            { name: 'Kirr royal (Champagne)', price: '€ 15' },
            { name: 'Porto \'10 years\' rood', price: '€ 11' },
            { name: 'Martini wit/rood', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 9' },
            { name: 'Picon witte wijn', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari met vers fruitsap', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrickx • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 17', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • koffielikeur • espresso) € 16\nPornstar Martini (Vodka • passievruchtlikeur • cava on the side) € 16\nLazy Red Cheeks (Vodka • framboos • violetsiroop • cranberry • limoen) € 15\nMojito (witte rum • limoen • munt • bruiswater) € 15\nNegroni (Campari • rode Martini • Gin) € 15\nNegroni Royal (Campari • rode martini • champagne) € 16\nPiña Colada (Rum • kokos • ananas) € 16\nApérol Spritz (Apérol • cava • bruiswater) € 14\nLimoncello Spritz (Limoncello • cava • bruiswater) € 14\nWitte Sangria Maison (Witte wijn • vers fruit • citrus • munt) € 14\nRode Sangria Maison (Rode wijn • rood fruit • sinaasappel • kaneeltoets) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Mocktail (Gemberbeer • veenbes • sinaasappel) € 12\nMojito 0% (Limoen • munt • bruiswater) € 12\nBoudoir Sunset (Passievrucht • limoen • vanille • bruiswater) € 13\nGarden Tonic 0% (Grapefruit • rozemarijn • premium tonic) € 13', price: '' },
            { name: 'Alcoholvrije Wijnen', description: 'Witte wijn 0% - Licht House Sauvignon Blanc € 8\nRosé wijn 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bier op Fles', description: 'Stella Artois € 4,5\nLeffe blond € 5,5\nDuvel € 6\nRochefort € 6\nStella 0,0% € 4,5\nSportzot 0,4% € 5,5', price: '' }
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
      comingSoon: 'Binnenkort',
      wijnkaart: 'Wijnkaart'
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
          { day: 'Zondag', time: '12:00 -15:00  | 18:00 - 21:00' }
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
        bites: {
          title: 'Bites',
          note: 'de 15 h à 21 h',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Jambon ibérique finement tranché', price: '€ 24' },
            { name: 'Steak Bites', description: 'Bouchées de bœuf tendres au beurre à l\'ail et au romarin • servies avec du toast', price: '€ 22' },
            { name: 'Assortiment de Bouchées Apéritives', description: 'Crème de céleri à la truffe • persil frit • citron', price: '€ 18' },
            { name: 'Huîtres Nature', description: 'Poivre & citron (3-6 pièces)', price: '€ 14 - € 24' },
            { name: 'Burrata', description: 'Burrata onctueuse • servie avec des toasts à la truffe', price: '€ 19' },
            { name: 'Gambas', description: '4 gambas faciles à décortiquer • huile d\'olive • vin blanc • ail • citron vert', price: '€ 21' },
            { name: '200 g de Crevettes de la Mer du Nord', description: 'À décortiquer soi-même', price: '€ 14' }
          ]
        },
        starters: {
          title: 'Entrées',
          items: [
            { name: 'Gravlax', description: 'Saumon mariné maison • crème onctueuse au fromage frais et aux anchois • caviar de saumon', price: '€ 24' },
            { name: 'Crevettes Grises de la Mer du Nord', description: 'Trio de tomates • crevettes décortiquées à la main • mayonnaise fine', price: '€ 26' },
            { name: 'Burrata & Garniture Estivale', description: 'Assortiment de tomates cerises • burrata crémeuse • fraise', price: '€ 21' },
            { name: 'Carpaccio de Bœuf', description: 'Fines tranches de bœuf • mayonnaise à la truffe • parmesan • roquette', price: '€ 23' },
            { name: 'Croquettes de Crevettes', description: 'Crevettes de Zeebrugge décortiquées à la main • crème légèrement épicée de la Mer du Nord • citron (1-2 pièces)', price: '€ 15 - € 23' }
          ]
        },
        salads: {
          title: 'Salades',
          items: [
            { name: 'Salade Thaïlandaise Tiède au Bœuf', description: 'Lanières de bœuf tièdes • coriandre • oignon rouge • piment • graines de sésame', price: '€ 29' },
            { name: 'Salade au Gravlax', description: 'Gravlax de saumon • vinaigrette à la moutarde et au citron vert • betterave rouge • courgette', price: '€ 27' }
          ]
        },
        mains: {
          title: 'Plats Principaux',
          items: [
            { name: 'Bœuf', description: 'Filet pur • frites • au choix : sauce au roquefort, aux champignons ou au poivre', price: '€ 39' },
            { name: 'Magret de Canard', description: 'Sauce aux cerises • pêches caramélisées • frites', price: '€ 36' },
            { name: 'Entrecôte ±500g', description: 'Poivre noir concassé • sauce à la crème au poivre • frites', price: '€ 45' },
            { name: 'Vol au Vent Classique', description: 'Poulet fermier • pâte feuilletée • boulettes de viande • champignons • frites', price: '€ 29' },
            { name: 'Sole Meunière', description: 'Beurre noisette • câpres • citron • frites', price: '€ 49' },
            { name: 'Cabillaud', description: 'Filet • bisque de crevettes • crevettes de Zeebrugge décortiquées à la main • caviar de saumon • purée', price: '€ 41' },
            { name: 'Bouillabaisse de la Mer du Nord', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Bar', description: 'Filet • beurre blanc • citron vert • légumes de saison', price: '€ 34' }
          ]
        },

        drinks: {
          title: 'Apéritif',
          items: [
            { name: 'Coupe de Champagne', price: '€ 14' },
            { name: 'Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kirr vin blanc', price: '€ 10' },
            { name: 'Kirr royal (Champagne)', price: '€ 15' },
            { name: 'Porto \'10 years\' rouge', price: '€ 11' },
            { name: 'Martini blanc/rouge', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 9' },
            { name: 'Picon vin blanc', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari avec jus d\'orange press��', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrickx • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 17', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • liqueur de café • espresso) € 16\nPornstar Martini (Vodka • liqueur de fruit de la passion • cava on the side) € 16\nLazy Red Cheeks (Vodka • framboise • sirop de violette • canneberge • citron vert) € 15\nMojito (Rhum blanc • citron vert • menthe • eau gazeuse) € 15\nNegroni (Campari • Martini rouge • Gin) € 15\nNegroni Royal (Campari • Martini rouge • champagne) € 16\nPiña Colada (Rum • kokos • ananas) € 16\nApérol Spritz (Apérol • cava • eau gazeuse) € 14\nLimoncello spritz (Limoncello • cava • eau gazeuse) € 14\nWitte Sangria Maison (Vin blanc • fruits frais • citrus • menthe) € 14\nRode Sangria Maison (Vin rouge • fruits rouges • orange • note de cannelle) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Mocktail (Bière au gingembre • canneberge • orange) € 12\nMojito 0% (Citron vert • menthe • eau gazeuse) € 12\nBoudoir Sunset (Fruit de la passion • citron vert • vanille • eau gazeuse) € 13\nGarden Tonic 0% (Pamplemousse • romarin • tonic premium) € 13', price: '' },
            { name: 'Vins Sans Alcool', description: 'Vin blanc 0% - Licht House Sauvignon Blanc € 8\nVin rosé 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bière en Bouteille', description: 'Stella Artois € 4,5\nLeffe blond € 5,5\nDuvel € 6\nRochefort € 6\nStella 0,0% € 4,5\nSportzot 0,4% € 5,5', price: '' }
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
      comingSoon: 'Bientôt',
      wijnkaart: 'Carte des Vins'
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
          { day: 'Dimanche', time: '12:00 -15:00  | 18:00 - 21:00' }
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
        bites: {
          title: 'Bites',
          note: 'from 3 PM to 9 PM',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Thinly sliced Ibérico ham', price: '€ 24' },
            { name: 'Steak Bites', description: 'Tender beef bites in garlic-rosemary butter • served with toast', price: '€ 22' },
            { name: 'Aperitif Ball Assortment', description: 'Celery-truffle cream • fried parsley • lemon', price: '€ 18' },
            { name: 'Oysters Natural', description: 'Pepper & lemon (3-6 pieces)', price: '€ 14 - € 24' },
            { name: 'Burrata', description: 'Creamy burrata • served with truffle toast', price: '€ 19' },
            { name: 'Gambas', description: '4 easy peel gambas • olive oil • white wine • garlic • lime', price: '€ 21' },
            { name: '200 g North Sea Shrimp', description: 'To peel yourself', price: '€ 14' }
          ]
        },
        starters: {
          title: 'Starters',
          items: [
            { name: 'Gravlax', description: 'House-marinated salmon • soft anchovy cream cheese cream • salmon caviar', price: '€ 24' },
            { name: 'Hand-peeled Grey North Sea Shrimp', description: 'Trio of tomatoes • hand-peeled shrimp • fine mayonnaise', price: '€ 26' },
            { name: 'Burrata & Summer Garnish', description: 'Cherry tomato variation • creamy burrata • strawberry', price: '€ 21' },
            { name: 'Beef Carpaccio', description: 'Thinly sliced beef • truffle mayonnaise • Parmesan cheese • arugula', price: '€ 23' },
            { name: 'Shrimp Croquettes', description: 'Hand-peeled Zeebrugge shrimp • lightly spiced North Sea cream • lemon (1-2 pieces)', price: '€ 15 - € 23' }
          ]
        },
        salads: {
          title: 'Salads',
          items: [
            { name: 'Warm Thai Beef Salad', description: 'Warm beef strips • coriander • red onion • chili • sesame seeds', price: '€ 29' },
            { name: 'Gravlax Salad', description: 'Salmon gravlax • mustard-lime dressing • red beet • zucchini', price: '€ 27' }
          ]
        },
        mains: {
          title: 'Main Courses',
          items: [
            { name: 'Beef', description: 'Pure fillet • fries • choice of Roquefort, mushroom or pepper sauce', price: '€ 39' },
            { name: 'Duck Breast', description: 'Cherry sauce • caramelized peaches • fries', price: '€ 36' },
            { name: 'Entrecote ±500g', description: 'Crushed black pepper • pepper cream sauce • fries', price: '€ 45' },
            { name: 'Classic Vol au Vent', description: 'Farm chicken • puff pastry • meatballs • mushrooms • fries', price: '€ 29' },
            { name: 'Sole Meunière', description: 'Beurre noisette • capers • lemon • fries', price: '€ 49' },
            { name: 'Cod', description: 'Fillet • shrimp bisque • hand-peeled Zeebrugge shrimp • salmon caviar • purée', price: '€ 41' },
            { name: 'North Sea Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 38' },
            { name: 'Sea Bass', description: 'Fillet • beurre blanc • lime • seasonal vegetables', price: '€ 34' }
          ]
        },

        drinks: {
          title: 'Aperitif',
          items: [
            { name: 'Champagne Glass', price: '€ 14' },
            { name: 'Cava "Pont de Ferro"', price: '€ 9' },
            { name: 'Kir white wine', price: '€ 10' },
            { name: 'Kir royal (Champagne)', price: '€ 15' },
            { name: 'Porto \'10 years\' red', price: '€ 11' },
            { name: 'Martini white/red', price: '€ 9' },
            { name: 'Pineau des Charentes', price: '€ 9' },
            { name: 'Picon white wine', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari with fresh orange juice', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrickx • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 17', price: '' },
            { name: 'Cocktails', description: 'Espresso Martini (Vodka • coffee liqueur • espresso) € 16\nPornstar Martini (Vodka • passion fruit liqueur • cava on the side) € 16\nLazy Red Cheeks (Vodka • raspberry • violet syrup • cranberry • lime) € 15\nMojito (White rum • lime • mint • sparkling water) € 15\nNegroni (Campari • red Martini • Gin) € 15\nNegroni Royal (Campari • red martini • champagne) € 16\nPiña Colada (Rum • coconut • pineapple) € 16\nApérol Spritz (Apérol • cava • sparkling water) € 14\nLimoncello Spritz (Limoncello • cava • sparkling water) € 14\nWhite Sangria Maison (White wine • fresh fruits • citrus • mint) € 14\nRed Sangria Maison (Red wine • red fruits • orange • cinnamon notes) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Mocktail (Ginger beer • cranberry • orange) € 12\nMojito 0% (Lime • mint • sparkling water) € 12\nBoudoir Sunset (Passion fruit • lime • vanilla • sparkling water) € 13\nGarden Tonic 0% (Grapefruit • rosemary • premium tonic) € 13', price: '' },
            { name: 'Non-Alcoholic Wines', description: 'White wine 0% - Licht House Sauvignon Blanc € 8\nRosé wine 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bottled Beer', description: 'Stella Artois € 4.5\nLeffe blond € 5.5\nDuvel € 6\nRochefort € 6\nStella 0.0% € 4.5\nSportzot 0.4% € 5.5', price: '' }
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
      comingSoon: 'Coming Soon',
      wijnkaart: 'Wine List'
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
          { day: 'Sunday', time: '12:00 -15:00  | 18:00 - 21:00' }
        ]
      },
      address: 'Lippenslaan 141, 8300 Knokke',
      phone: '+32 (0)50 66 03 23',
      reservationButton: 'RESERVE A TABLE',
      experience: 'EXPERIENCE EXCELLENT DINING AT BOUDIOR'
    }
  }
};
