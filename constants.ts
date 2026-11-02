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
      childrenNote: 'EEN FRISSE SALADE, PUREE OF FRIETEN KAN STEEDS BESTELD WORDEN ALS SUPPLEMENT +4€',
      categories: {
        bites: {
          title: 'Bites',
          note: 'vanaf 15 u tot 21 u',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Fijn gesneden Ibérico-ham', price: '€ 24' },
            { name: 'Assortiment Apero-Balletjes', description: 'Truffelcrème • gefrituurde peterselie • citroen', price: '€ 18' },
            { name: 'Oesters Natuur', description: 'Peper & citroen (3-6 stuks)', price: '€ 14 - € 26' },
            { name: 'Gambas', description: 'Easy peel gamba\'s • olijfolie • witte wijn • look • limoen', price: '€ 22' },
            { name: 'Brioche met Gerookte Paling', description: 'Geroosterde brioche • gekruide roomkaas • gerookte paling', price: '€ 17' }
          ]
        },
        starters: {
          title: 'Voorgerechten',
          items: [
            { name: 'Gegratineerde Oesters met Blauwe Kaas', description: '6 oesters • saus van blauwe kaas • honing', price: '€ 34' },
            { name: 'Handgepelde Grijze Noordzeegarnalen', description: 'Tartaar van tomaten • hardgekookt ei • cocktailsaus', price: '€ 29' },
            { name: 'Gebakken Sint-Jakobsvruchten', description: 'Champagnesaus • gekarameliseerd witloof • zalmeitjes', price: '€ 29' },
            { name: 'Foie Gras', description: 'Gebakken foie gras • geroosterde brioche • peer • krachtige jus', price: '€ 39', extra: 'Château Simon • Sauternes • Bordeaux • Frankrijk • € 9,50 per glas' },
            { name: 'Garnaalkroketten', description: 'Handgepelde Zeebrugse garnalen • licht-pikante crème van de Noordzee • citroen (1-2 stuks)', price: '€ 15 - € 24' }
          ]
        },
        salads: {
          title: 'Salades',
          items: []
        },
        mains: {
          title: 'Hoofdgerechten',
          items: [
            { name: 'Filet Pur', description: 'Frieten • keuze uit Roquefortsaus • truffel-champignonsaus • pepersaus', price: '€ 42' },
            { name: 'Kalfszwezeriken', description: 'Gebakken kalfszwezeriken • portojus • gekarameliseerd witloof • pastinaakcrème • krielaardappelen', price: '€ 41' },
            { name: 'Vol au Vent Klassiek', description: 'Hoevekip • bladerdeeg • gehaktballen • champignons • frieten', price: '€ 30' },
            { name: 'Zeetong Meunière', description: 'Gebakken zeetong • tartaarsaus • citroen • frietjes', price: '€ 51' },
            { name: 'Kabeljauwhaasje', description: 'Champagnesaus • handgepelde grijze garnalen • aardappelpuree • zalmeitjes', price: '€ 42' },
            { name: 'Zeebaars', description: 'Zeebaarsfilet • witte wijnsaus • seizoensgroenten', price: '€ 36' },
            { name: 'Noordzee Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 40' },
            { name: 'Pasta Ravioli met Rundvlees', description: 'Runderjus • romige champignonsaus', price: '€ 28' },
            { name: 'Ravioli met Ricotta', description: 'Romige bisquesaus • handgepelde grijze garnalen', price: '€ 32' },
            { name: 'Thaise Rundsalade', description: 'Reepjes filet pur • verse koriander • rode ui • chili • sesam', price: '€ 29' }
          ]
        },

        drinks: {
          title: 'Aperitief',
          items: [
            { name: 'Champagne per glas', price: '€ 14' },
            { name: 'Cava per glas', price: '€ 9' },
            { name: 'Witte wijn Kir', price: '€ 10' },
            { name: 'Kir Royal met champagne', price: '€ 15' },
            { name: 'Porto 10 Years rood', price: '€ 11' },
            { name: 'Picon witte wijn', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari met vers fruitsap', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrick’s Gin • Fever-Tree Indian Tonic € 16\nGin Mare • Fever-Tree Mediterranean Tonic € 17', price: '' },
            { name: 'Cocktails', description: 'Boudoir Rouge (Gin • cranberry • granaatappel • citroen • siroop) € 16\nRouge d’Hiver (Bourbon • appel • citroen • kaneel) € 16\nEspresso Martini (Vodka • koffielikeur • espresso) € 16\nPornstar Martini (Vodka • passievruchtlikeur • passievrucht • cava apart geserveerd) € 16\nNegroni (Campari • rode vermout • gin) € 15\nNegroni Royal (Campari • rode vermout • champagne) € 16\nAperol Spritz (Aperol • cava • bruiswater) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Rouge (Cranberry • granaatappel • citroen • ginger beer) € 13\nBoudoir Mocktail (Gemberbier • veenbes • sinaasappel) € 12\nBoudoir Sunset (Passievrucht • limoen • vanille • bruiswater) € 13', price: '' },
            { name: 'Alcoholvrije Wijnen', description: 'Witte wijn 0% - Licht House Sauvignon Blanc € 8\nRosé wijn 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bier op Fles', description: 'Stella Artois € 4,5\nLeffe blond € 5,5\nDuvel € 6\nRochefort € 6\nStella 0,0% € 4,5\nSportzot 0,4% € 5,5', price: '' },
            { name: 'Frisdranken', description: 'Chaudfontaine plat of bruisend 25 cl € 4,50 • 50 cl € 8,50\nCola / Cola Zero € 4,50\nIce Tea € 4,50\nFanta Orange € 4,50\nSchweppes Tonic € 4,50', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Warme Dranken',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4,5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5,5\nLatte Macchiato € 6', price: '' },
            { name: 'THEE by Tea Coach Ken • € 6', description: 'Witte thee\n• White Peach (perzik • appel • vlierbes)\n\nGroene thee\n• Green Peppermint (verse munt)\n• Fresh Lemon (citroengras • citroenaroma)\n\nZwarte thee\n• Superior Earl Grey (zwarte thee • natuurlijke bergamot)\n• Sexy Goji (sinaasappelzeste • gojibessen • wortelvlokken • rozenknopjes • saffloer)\n\nKruidenthee\n• Ginger Orange (gember • kamille • peper • appelsien)\n• Ginger Lemon (gember • zoethout • citroengras • citroenschillen • pepermunt • peperkorrels)\n• Relaxing Camomile (venkel • rozenbottelschil • kamillebloempjes • brandnetel • lavendelbloem)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Dame Blanche', description: 'Vanille-ijs • warme chocoladesaus • verse slagroom', price: '€ 11' },
            { name: 'Crêpe Suzette', description: 'Fijne flensjes • warme sinaasappelsaus • geflambeerd met Grand Marnier', price: '€ 17' },
            { name: 'Sabayon met Champagne', description: 'Luchtige champagne sabayon • vanille-ijs', price: '€ 14' },
            { name: 'Huisgemaakte Chocolademoelleux', description: 'Warme chocoladecake • smeuïge chocolade kern • vanille-ijs', price: '€ 15' },
            { name: 'Kaasbordje', description: 'Selectie van kazen • garnituur • brood', price: '€ 18' },
            { name: 'POUSSE CAFÉ', description: 'Irish / French / Italian Coffee € 14\nLimoncello € 11\nAmaretto € 11\nBaileys € 11\nGrand Marnier € 12\nCointreau € 11\nHasseltse jenever € 9\nGrappa € 11\nSambuca € 11\nEau de Vie Poire Williams € 13\nCalvados € 12\nCognac Hennessy € 13\nCuarenta y Tres € 11\nJack Daniel’s € 16\nDon Papa Rum € 17\nLagavulin € 18', price: '' }
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
      childrenNote: 'SALADE FRAÎCHE, PURÉE OU FRITES DISPONIBLES EN SUPPLÉMENT +4€',
      categories: {
        bites: {
          title: 'Bites',
          note: 'de 15 h à 21 h',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Jambon ibérique finement tranché', price: '€ 24' },
            { name: 'Assortiment de Bouchées Apéritives', description: 'Crème à la truffe • persil frit • citron', price: '€ 18' },
            { name: 'Huîtres Nature', description: 'Poivre & citron (3-6 pièces)', price: '€ 14 - € 26' },
            { name: 'Gambas', description: 'Gambas faciles à décortiquer • huile d’olive • vin blanc • ail • citron vert', price: '€ 22' },
            { name: 'Brioche à l’Anguille Fumée', description: 'Brioche grillée • fromage frais aux herbes • anguille fumée', price: '€ 17' }
          ]
        },
        starters: {
          title: 'Entrées',
          items: [
            { name: 'Huîtres Gratinées au Bleu', description: '6 huîtres • sauce au fromage bleu • miel', price: '€ 34' },
            { name: 'Crevettes Grises de la Mer du Nord', description: 'Tartare de tomates • œuf dur • sauce cocktail', price: '€ 29' },
            { name: 'Noix de Saint-Jacques Poêlées', description: 'Sauce au champagne • chicon caramélisé • œufs de saumon', price: '€ 29' },
            { name: 'Foie Gras', description: 'Foie gras poêlé • brioche grillée • poire • jus corsé', price: '€ 39', extra: 'Château Simon • Sauternes • Bordeaux • France • € 9,50 le verre' },
            { name: 'Croquettes de Crevettes', description: 'Crevettes de Zeebrugge décortiquées à la main • crème légèrement épicée de la Mer du Nord • citron (1-2 pièces)', price: '€ 15 - € 24' }
          ]
        },
        salads: {
          title: 'Salades',
          items: []
        },
        mains: {
          title: 'Plats Principaux',
          items: [
            { name: 'Filet Pur', description: 'Frites • choix de sauce roquefort • sauce truffe-champignons • sauce poivre', price: '€ 42' },
            { name: 'Ris de Veau', description: 'Ris de veau poêlés • jus au porto • chicon caramélisé • crème de panais • pommes grenailles', price: '€ 41' },
            { name: 'Vol au Vent Classique', description: 'Poulet fermier • pâte feuilletée • boulettes de viande • champignons • frites', price: '€ 30' },
            { name: 'Sole Meunière', description: 'Sole poêlée • sauce tartare • citron • frites', price: '€ 51' },
            { name: 'Pavé de Cabillaud', description: 'Sauce champagne • crevettes grises décortiquées à la main • purée • œufs de saumon', price: '€ 42' },
            { name: 'Bar', description: 'Filet de bar • sauce au vin blanc • légumes de saison', price: '€ 36' },
            { name: 'Bouillabaisse de la Mer du Nord', description: 'Toast • rouille • gruyère', price: '€ 40' },
            { name: 'Raviolis au Bœuf', description: 'Jus de bœuf • sauce crémeuse aux champignons', price: '€ 28' },
            { name: 'Raviolis à la Ricotta', description: 'Sauce bisque crémeuse • crevettes grises décortiquées à la main', price: '€ 32' },
            { name: 'Salade Thaï au Bœuf', description: 'Lamelles de filet pur • coriandre fraîche • oignon rouge • piment • sésame', price: '€ 29' }
          ]
        },

        drinks: {
          title: 'Apéritif',
          items: [
            { name: 'Champagne au verre', price: '€ 14' },
            { name: 'Cava au verre', price: '€ 9' },
            { name: 'Kir au vin blanc', price: '€ 10' },
            { name: 'Kir Royal au champagne', price: '€ 15' },
            { name: 'Porto 10 Years rouge', price: '€ 11' },
            { name: 'Picon vin blanc', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari avec jus d\'orange pressé', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrickx • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 17', price: '' },
            { name: 'Cocktails', description: 'Boudoir Rouge (Gin • cranberry • grenade • citron • sirop) € 16\nRouge d’Hiver (Bourbon • pomme • citron • cannelle) € 16\nEspresso Martini (Vodka • liqueur de café • espresso) € 16\nPornstar Martini (Vodka • liqueur de fruit de la passion • fruit de la passion • cava servi à part) € 16\nNegroni (Campari • vermouth rouge • gin) € 15\nNegroni Royal (Campari • vermouth rouge • champagne) € 16\nAperol Spritz (Aperol • cava • eau gazeuse) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Rouge (Cranberry • grenade • citron • ginger beer) € 13\nBoudoir Mocktail (Bière au gingembre • canneberge • orange) € 12\nBoudoir Sunset (Fruit de la passion • citron vert • vanille • eau gazeuse) € 13', price: '' },
            { name: 'Vins Sans Alcool', description: 'Vin blanc 0% - Licht House Sauvignon Blanc € 8\nVin rosé 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bière en Bouteille', description: 'Stella Artois € 4,5\nLeffe blond € 5,5\nDuvel € 6\nRochefort € 6\nStella 0,0% € 4,5\nSportzot 0,4% € 5,5', price: '' },
            { name: 'Boissons Fraîches', description: 'Chaudfontaine plate ou pétillante 25 cl € 4,50 • 50 cl € 8,50\nCola / Cola Zero € 4,50\nIce Tea € 4,50\nFanta Orange € 4,50\nSchweppes Tonic € 4,50', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Boissons Chaudes',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4,5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5,5\nLatte Macchiato € 6', price: '' },
            { name: 'THÉ by Tea Coach Ken • € 6', description: 'Thé blanc\n• White Peach (pêche • pomme • sureau)\n\nThé vert\n• Green Peppermint (menthe fraîche)\n• Fresh Lemon (citronnelle • arôme citron)\n\nThé noir\n• Superior Earl Grey (thé noir • bergamote naturelle)\n• Sexy Goji (zeste d’orange • baies de goji • flocons de carotte • boutons de rose • carthame)\n\nTisanes\n• Ginger Orange (gingembre • camomille • poivre • orange)\n• Ginger Lemon (gingembre • réglisse • citronnelle • écorces de citron • menthe poivrée • grains de poivre)\n• Relaxing Camomile (fenouil • écorce d’églantier • fleurs de camomille • ortie • lavande)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Dame Blanche', description: 'Glace vanille • sauce au chocolat chaud • crème fouettée', price: '€ 11' },
            { name: 'Crêpe Suzette', description: 'Fines crêpes • sauce chaude à l’orange • flambées au Grand Marnier', price: '€ 17' },
            { name: 'Sabayon au Champagne', description: 'Sabayon léger au champagne • glace vanille', price: '€ 14' },
            { name: 'Moelleux au Chocolat Maison', description: 'Gâteau au chocolat chaud • cœur fondant au chocolat • glace vanille', price: '€ 15' },
            { name: 'Assiette de Fromages', description: 'Sélection de fromages • garniture • pain', price: '€ 18' },
            { name: 'POUSSE CAFÉ', description: 'Irish / French / Italian Coffee € 14\nLimoncello € 11\nAmaretto € 11\nBaileys € 11\nGrand Marnier € 12\nCointreau € 11\nGenièvre de Hasselt € 9\nGrappa € 11\nSambuca € 11\nEau de Vie Poire Williams € 13\nCalvados € 12\nCognac Hennessy € 13\nCuarenta y Tres € 11\nJack Daniel’s € 16\nDon Papa Rum € 17\nLagavulin € 18', price: '' }
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
      childrenNote: 'FRESH SALAD, MASH OR FRIES AVAILABLE AS A SIDE FOR +€4',
      categories: {
        bites: {
          title: 'Bites',
          note: 'from 3 PM to 9 PM',
          items: [
            { name: 'Jamón Ibérico de Bellota', description: 'Thinly sliced Ibérico ham', price: '€ 24' },
            { name: 'Aperitif Bite Assortment', description: 'Truffle cream • fried parsley • lemon', price: '€ 18' },
            { name: 'Natural Oysters', description: 'Pepper & lemon (3-6 pieces)', price: '€ 14 - € 26' },
            { name: 'Gambas', description: 'Easy peel gambas • olive oil • white wine • garlic • lime', price: '€ 22' },
            { name: 'Brioche with Smoked Eel', description: 'Toasted brioche • seasoned cream cheese • smoked eel', price: '€ 17' }
          ]
        },
        starters: {
          title: 'Starters',
          items: [
            { name: 'Oysters au Gratin with Blue Cheese', description: '6 oysters • blue cheese sauce • honey', price: '€ 34' },
            { name: 'Hand-Peeled Grey North Sea Shrimp', description: 'Tomato tartare • hard-boiled egg • cocktail sauce', price: '€ 29' },
            { name: 'Pan-Fried Scallops', description: 'Champagne sauce • caramelised chicory • salmon roe', price: '€ 29' },
            { name: 'Foie Gras', description: 'Pan-fried foie gras • toasted brioche • pear • rich jus', price: '€ 39', extra: 'Château Simon • Sauternes • Bordeaux • France • € 9.50 per glass' },
            { name: 'Shrimp Croquettes', description: 'Hand-peeled Zeebrugge shrimp • lightly spiced North Sea cream • lemon (1-2 pieces)', price: '€ 15 - € 24' }
          ]
        },
        salads: {
          title: 'Salads',
          items: []
        },
        mains: {
          title: 'Main Courses',
          items: [
            { name: 'Beef Tenderloin', description: 'Fries • choice of Roquefort sauce • truffle-mushroom sauce • pepper sauce', price: '€ 42' },
            { name: 'Veal Sweetbreads', description: 'Pan-fried veal sweetbreads • port jus • caramelised chicory • parsnip cream • baby potatoes', price: '€ 41' },
            { name: 'Classic Vol au Vent', description: 'Farm chicken • puff pastry • meatballs • mushrooms • fries', price: '€ 30' },
            { name: 'Sole Meunière', description: 'Pan-fried sole • tartar sauce • lemon • fries', price: '€ 51' },
            { name: 'Cod Loin', description: 'Champagne sauce • hand-peeled grey shrimp • mashed potatoes • salmon roe', price: '€ 42' },
            { name: 'Sea Bass', description: 'Sea bass fillet • white wine sauce • seasonal vegetables', price: '€ 36' },
            { name: 'North Sea Bouillabaisse', description: 'Toast • rouille • gruyère', price: '€ 40' },
            { name: 'Beef Ravioli Pasta', description: 'Beef jus • creamy mushroom sauce', price: '€ 28' },
            { name: 'Ricotta Ravioli', description: 'Creamy bisque sauce • hand-peeled grey shrimp', price: '€ 32' },
            { name: 'Thai Beef Salad', description: 'Beef tenderloin strips • fresh coriander • red onion • chili • sesame', price: '€ 29' }
          ]
        },

        drinks: {
          title: 'Aperitif',
          items: [
            { name: 'Champagne by the Glass', price: '€ 14' },
            { name: 'Cava by the Glass', price: '€ 9' },
            { name: 'White Wine Kir', price: '€ 10' },
            { name: 'Kir Royal with Champagne', price: '€ 15' },
            { name: 'Porto 10 Years Red', price: '€ 11' },
            { name: 'Picon white wine', price: '€ 12' },
            { name: 'Ricard', price: '€ 9' },
            { name: 'Campari with fresh orange juice', price: '€ 14' },
            { name: 'Gin + Tonic', description: 'Hendrickx • Fever Tree Indian tonic € 16\nGin Mare • Fever Tree Mediterranean € 17', price: '' },
            { name: 'Cocktails', description: 'Boudoir Rouge (Gin • cranberry • pomegranate • lemon • syrup) € 16\nRouge d’Hiver (Bourbon • apple • lemon • cinnamon) € 16\nEspresso Martini (Vodka • coffee liqueur • espresso) € 16\nPornstar Martini (Vodka • passion fruit liqueur • passion fruit • cava served on the side) € 16\nNegroni (Campari • red vermouth • gin) € 15\nNegroni Royal (Campari • red vermouth • champagne) € 16\nAperol Spritz (Aperol • cava • sparkling water) € 14', price: '' },
            { name: 'Mocktails 0%', description: 'Boudoir Rouge (Cranberry • pomegranate • lemon • ginger beer) € 13\nBoudoir Mocktail (Ginger beer • cranberry • orange) € 12\nBoudoir Sunset (Passion fruit • lime • vanilla • sparkling water) € 13', price: '' },
            { name: 'Non-Alcoholic Wines', description: 'White wine 0% - Licht House Sauvignon Blanc € 8\nRosé wine 0% - Nephalia Rosé € 8', price: '' },
            { name: 'Bottled Beer', description: 'Stella Artois € 4.5\nLeffe blond € 5.5\nDuvel € 6\nRochefort € 6\nStella 0.0% € 4.5\nSportzot 0.4% € 5.5', price: '' },
            { name: 'Soft Drinks', description: 'Chaudfontaine still or sparkling 25 cl € 4.50 • 50 cl € 8.50\nCola / Cola Zero € 4.50\nIce Tea € 4.50\nFanta Orange € 4.50\nSchweppes Tonic € 4.50', price: '' }
          ]
        },
        warmDrinks: {
          title: 'Hot Drinks',
          items: [
            { name: 'by Nespresso', description: 'Lungo classic/ deca € 4.5\nEspresso € 4\nDouble espresso € 5\nCappuccino € 5.5\nLatte Macchiato € 6', price: '' },
            { name: 'TEA by Tea Coach Ken • € 6', description: 'White tea\n• White Peach (peach • apple • elderberry)\n\nGreen tea\n• Green Peppermint (fresh mint)\n• Fresh Lemon (lemongrass • lemon aroma)\n\nBlack tea\n• Superior Earl Grey (black tea • natural bergamot)\n• Sexy Goji (orange zest • goji berries • carrot flakes • rosebuds • safflower)\n\nHerbal tea\n• Ginger Orange (ginger • chamomile • pepper • orange)\n• Ginger Lemon (ginger • liquorice • lemongrass • lemon peels • peppermint • peppercorns)\n• Relaxing Camomile (fennel • rosehip peel • chamomile flowers • nettle • lavender)', price: '' }
          ]
        },
        desserts: {
          title: 'Desserts',
          items: [
            { name: 'Dame Blanche', description: 'Vanilla ice cream • warm chocolate sauce • whipped cream', price: '€ 11' },
            { name: 'Crêpe Suzette', description: 'Fine crêpes • warm orange sauce • flambéed with Grand Marnier', price: '€ 17' },
            { name: 'Sabayon with Champagne', description: 'Light champagne sabayon • vanilla ice cream', price: '€ 14' },
            { name: 'Homemade Chocolate Fondant', description: 'Warm chocolate cake • molten chocolate centre • vanilla ice cream', price: '€ 15' },
            { name: 'Cheese Board', description: 'Selection of cheeses • garnish • bread', price: '€ 18' },
            { name: 'POUSSE CAFÉ', description: 'Irish / French / Italian Coffee € 14\nLimoncello € 11\nAmaretto € 11\nBaileys € 11\nGrand Marnier € 12\nCointreau € 11\nHasselt Jenever € 9\nGrappa € 11\nSambuca € 11\nEau de Vie Poire Williams € 13\nCalvados € 12\nCognac Hennessy € 13\nCuarenta y Tres € 11\nJack Daniel’s € 16\nDon Papa Rum € 17\nLagavulin € 18', price: '' }
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
