import type { Product, ProductCategory } from "@/lib/types"

export const products: Product[] = [
  // ============================================
  // TAILLE XL - VESTES
  // ============================================
  {
    id: "sirius-veste-xl",
    name: "Sirius - Veste XL",
    price: 75,
    category: "vestes",
    size: "XL",
    images: [
      "/images/Sirius1.jpg",
      "/images/Sirius2.jpg",
      "/images/Sirius3.jpg",
      "/images/Sirius4.jpg",
      "/images/Sirius5.jpg",
      "/images/Sirius6.jpg"
    ],
    shortDescription: "Veste réversible wax floral violet et bouclette mauve - Pièce unique",
    description: "Craquez pour cette veste réversible femme créée par Le Dressing Coloré, une pièce unique qui marie élégance florale et douceur cosy pour sublimer votre garde-robe d'hiver. Ce vêtement réversible vous offre deux univers distincts : d'un côté, un wax en coton aux motifs floraux violets sur fond kaki doré qui évoque la nature et l'originalité. De l'autre, une bouclette mauve douce et chaleureuse, parfaite pour un style cocooning raffiné.",
    featured: true,
    details: {
      face1: {
        name: "Wax Floral",
        composition: "100% coton",
        description: "Motifs floraux violets sur fond kaki doré"
      },
      face2: {
        name: "Bouclette Mauve",
        composition: "80% polyester, 20% mohair",
        description: "Douce et chaleureuse"
      },
      coupe: "Sans fermeture, à porter ouverte",
      manches: "Longues",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Romantisme floral : Portez le côté wax avec un jean noir ou gris et un t-shirt uni pour faire ressortir les fleurs violettes éclatantes.",
      "Douceur mauve : Optez pour la bouclette mauve avec un pantalon beige ou écru et un pull blanc cassé pour un look cosy et sophistiqué.",
      "Casual nature : Associez le wax kaki avec des tons naturels (beige, marron, vert olive) pour des combinaisons harmonieuses et modernes.",
      "Élégance cocooning : La bouclette mauve se marie parfaitement avec une robe noire ou une jupe en jean pour un style urbain et confortable."
    ],
    highlights: [
      "Polyvalence florale : Une veste, deux ambiances !",
      "Chaleur et confort : Bouclette mauve enveloppante + wax en coton élégant",
      "Style affirmé : Sans fermeture, effet décontracté et moderne",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },
  {
    id: "antares-veste-xl",
    name: "Antarès - Veste XL",
    price: 75,
    category: "vestes",
    size: "XL",
    images: [
      "/images/Antares1.jpg",
      "/images/Antares2.jpg",
      "/images/Antares3.jpg",
      "/images/Antares4.jpg",
      "/images/Antares5.jpg",
      "/images/Antares6.jpg"
    ],
    shortDescription: "Veste courte réversible wax rouge géométrique et tissu uni - Pièce unique",
    description: "Succombez à l'élégance de cette veste courte réversible femme créée par Le Dressing Coloré, une pièce unique qui apporte caractère et sophistication à votre garde-robe d'hiver. Ce vêtement réversible vous offre deux styles distincts : d'un côté, un wax en coton rouge éclatant aux motifs géométriques étoilés jaunes, marron et bleus qui affirme votre personnalité avec audace. De l'autre, un tissu 100% polyester uni, chaud et confortable, parfait pour un style sobre et élégant.",
    featured: false,
    details: {
      face1: {
        name: "Wax Géométrique",
        composition: "100% coton",
        description: "Rouge éclatant aux motifs géométriques étoilés jaunes, marron et bleus"
      },
      face2: {
        name: "Tissu Uni",
        composition: "100% polyester",
        description: "Chaud et confortable"
      },
      coupe: "Courte, sans fermeture, à porter ouverte",
      manches: "Longues",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Éclat géométrique : Portez le côté wax rouge avec un jean brut et un t-shirt noir pour faire ressortir les motifs étoilés éclatants.",
      "Élégance sobre : Optez pour le côté polyester uni avec un pantalon beige ou gris et une chemise blanche pour un look épuré et sophistiqué.",
      "Audace colorée : Associez le wax rouge avec des couleurs neutres (noir, blanc, marine) pour laisser la veste briller en vedette.",
      "Casual chic : Le côté uni se marie parfaitement avec une robe ou une jupe pour un style urbain et féminin."
    ],
    highlights: [
      "Coupe moderne : Veste courte chic et décontractée",
      "Polyvalence éclatante : Une veste, deux ambiances !",
      "Chaleur et confort : Manches longues protectrices",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE XL - GILETS
  // ============================================
  {
    id: "maia-gilet-xl",
    name: "Maïa - Gilet XL",
    price: 75,
    category: "gilets",
    size: "XL",
    images: [
      "/images/Maia1.jpg",
      "/images/Maia2.jpg",
      "/images/Maia3.jpg",
      "/images/Maia4.jpg",
      "/images/Maia5.jpg",
      "/images/Maia6.jpg"
    ],
    shortDescription: "Gilet sans manches réversible wax jaune graphique et matelassé rouge - Pièce unique",
    description: "Osez l'audace avec ce gilet sans manches réversible femme signé Le Dressing Coloré, une création unique qui apporte énergie et caractère à votre garde-robe d'hiver. Ce vêtement réversible vous offre deux looks vibrants : d'un côté, un wax en coton jaune éclatant à motifs graphiques circulaires rouge, bleu et noir qui affirme votre personnalité avec force. De l'autre, un tissu matelassé rouge profond, chaud et élégant, parfait pour un style sophistiqué et intense.",
    featured: true,
    details: {
      face1: {
        name: "Wax Jaune Graphique",
        composition: "100% coton",
        description: "Jaune éclatant à motifs graphiques circulaires rouge, bleu et noir"
      },
      face2: {
        name: "Matelassé Rouge",
        composition: "100% polyester",
        description: "Rouge profond, chaud et élégant"
      },
      coupe: "Sans manches, sans fermeture, à porter ouvert",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Éclat jaune : Portez le côté wax jaune avec un jean brut et un t-shirt noir ou blanc pour faire ressortir les motifs éclatants.",
      "Passion rouge : Optez pour le côté rouge avec un pantalon beige ou gris et une chemise blanche pour un look sophistiqué et intense.",
      "Audace totale : Associez le wax jaune avec des couleurs neutres (noir, gris, marine) pour laisser le gilet briller en vedette.",
      "Layering chic : Ce gilet sans manches se porte parfaitement sur vos pulls à manches longues, chemises ou robes."
    ],
    highlights: [
      "Double audace : Un gilet, deux couleurs fortes !",
      "Chaleur sans manches : Se superpose facilement",
      "Style affirmé : Jaune solaire ou rouge passionné",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },
  {
    id: "merope-gilet-xl",
    name: "Mérope - Gilet XL",
    price: 45,
    category: "gilets",
    size: "XL",
    images: [
      "/images/Merope1.jpg",
      "/images/Merope2.jpg",
      "/images/Merope3.jpg"
    ],
    shortDescription: "Gilet sans manches réversible liberty rose floral et bouclette beige - Pièce unique",
    description: "Craquez pour ce gilet sans manches réversible, une pièce unique qui apporte douceur et élégance à votre garde-robe d'hiver. Ce vêtement réversible vous offre deux looks raffinés : d'un côté, un délicat tissu liberty rose à motifs floraux qui évoque la féminité et la douceur. De l'autre, une bouclette beige chaude et confortable, parfaite pour un style épuré et intemporel.",
    featured: false,
    details: {
      face1: {
        name: "Liberty Rose",
        composition: "100% coton",
        description: "Motifs floraux délicats"
      },
      face2: {
        name: "Bouclette Beige",
        composition: "80% polyester, 20% mohair",
        description: "Chaude et confortable"
      },
      coupe: "Sans manches, sans fermeture, à porter ouvert",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Romantique chic : Portez le côté liberty rose sur un pull blanc ou écru avec un jean brut pour un look doux et féminin.",
      "Élégance naturelle : Optez pour la bouclette beige avec une chemise blanche et un pantalon camel pour un style sophistiqué.",
      "Casual cosy : Superposez le liberty rose sur un t-shirt à manches longues noir et un jean pour un look décontracté.",
      "Layering réussi : Ce gilet sans manches se porte parfaitement en superposition sur vos pulls, chemises ou robes."
    ],
    highlights: [
      "Polyvalence chic : Un gilet, deux ambiances !",
      "Chaleur et légèreté : Se superpose facilement",
      "Style féminin : Liberty romantique ou bouclette épurée",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },
  {
    id: "capella-gilet-xl",
    name: "Capella - Gilet XL",
    price: 45,
    category: "gilets",
    size: "XL",
    images: [
      "/images/Capella1.jpg",
      "/images/Capella2.jpg",
      "/images/Capella3.jpg",
      "/images/Capella4.jpg",
      "/images/Capella5.jpg",
      "/images/Capella6.jpg",
      "/images/Capella7.jpg",
      "/images/Capella8.jpg"
    ],
    shortDescription: "Gilet réversible wax spirales bleues hypnotiques et fausse fourrure noire - Pièce unique",
    description: "Attention, ce gilet réversible femme risque de provoquer des vertiges... et une jalousie féroce chez vos amies ! Signé Le Dressing Coloré, cette création unique transforme instantanément votre look. Ce vêtement réversible vous offre deux univers contrastés : d'un côté, un wax spectaculaire aux grandes spirales bleues hypnotiques sur fond écru, rehaussé de motifs jaune moutarde et bordeaux. De l'autre, une fausse fourrure noire ultra douce et chaude qui vous enveloppe de confort durant tout l'hiver.",
    featured: true,
    details: {
      face1: {
        name: "Wax Spirales",
        composition: "Satin de coton",
        description: "Spirales bleues hypnotiques sur fond écru, motifs jaune moutarde et bordeaux"
      },
      face2: {
        name: "Fausse Fourrure Noire",
        composition: "100% polyester",
        description: "Ultra douce et chaude"
      },
      coupe: "Sans manches, ouvert (sans fermeture)",
      entretien: "Lavage à la main à froid recommandé, séchage à plat",
      confection: "Artisanale française"
    },
    styleTips: [
      "Look urbain affirmé : Portez le côté wax sur un t-shirt noir et un jean brut. Les spirales bleues deviennent le point focal de votre tenue.",
      "Style bohème chic : Associez le wax avec une robe longue unie (noire, moutarde ou bleue) et des bottines.",
      "Confort hivernal : Optez pour la face fausse fourrure noire sur un pull col roulé blanc ou écru et un pantalon large.",
      "Look festif : Le côté wax avec ses couleurs vives est parfait pour les occasions spéciales."
    ],
    highlights: [
      "Design graphique saisissant : Spirales bleues hypnotiques",
      "Douceur et chaleur maximales : Fausse fourrure moelleuse",
      "Polyvalence assumée : Deux looks totalement différents",
      "Pièce unique artisanale : Ne sera jamais reproduit"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE L - MANTEAUX
  // ============================================
  {
    id: "altair-manteau-l",
    name: "Altaïr - Manteau L",
    price: 130,
    category: "manteaux",
    size: "L",
    images: [
      "/images/Altair1.jpg",
      "/images/Altair2.jpg",
      "/images/Altair3.jpg",
      "/images/Altair4.jpg",
      "/images/Altair5.jpg",
      "/images/Altair6.jpg"
    ],
    shortDescription: "Manteau court réversible matelassé wax jaune géométrique et noir uni - Pièce unique",
    description: "Osez l'audace avec ce manteau court réversible femme signé Le Dressing Coloré, une création unique qui transforme votre hiver en déclaration de style affirmée. Ce manteau réversible vous propose deux univers contrastés : d'un côté, un wax en coton aux motifs géométriques solaires jaunes avec des rosaces circulaires noires, rouges et turquoise qui captivent le regard et célèbrent l'art textile africain. De l'autre, un tissu uni noir sobre et intemporel, parfait pour un minimalisme urbain sophistiqué. Matelassé avec une ouate épaisse, ce vêtement garantit confort thermique et protection contre le froid.",
    featured: true,
    details: {
      face1: {
        name: "Wax Géométrique Jaune",
        composition: "100% coton",
        description: "Motifs géométriques solaires jaunes avec rosaces noires, rouges et turquoise"
      },
      face2: {
        name: "Tissu Uni Noir",
        composition: "Coton",
        description: "Sobre et intemporel"
      },
      coupe: "Droite, non cintrée, longueur courte (hanches)",
      col: "Droit classique",
      manches: "Longues",
      fermeture: "Boutons jaunes assortis au wax sur les deux faces",
      poches: "4 poches au total (2 par face)",
      entretien: "Lavage à la main recommandé",
      confection: "Artisanale française, Sud-Ouest"
    },
    styleTips: [
      "Explosion jaune : Portez le côté wax avec un jean noir et un t-shirt blanc pour laisser les motifs géométriques dominer.",
      "Minimalisme noir : Optez pour le côté noir uni avec un pantalon gris et un pull écru pour une élégance urbaine épurée.",
      "Contraste chromatique : Associez le wax jaune avec des pièces dans les tons du motif (rouge, turquoise, noir).",
      "Style afro-contemporain : Célébrez l'héritage textile africain en portant le wax avec fierté."
    ],
    highlights: [
      "Pièce solaire : Wax jaune éclatant anti-morosité hivernale",
      "Versatilité jour/nuit maximale : Du bureau au dîner",
      "4 poches pratiques : Accessibles sur les deux faces",
      "Isolation thermique performante : Ouate épaisse matelassée"
    ],
    stock: 1
  },
  {
    id: "procyon-manteau-l",
    name: "Procyon - Manteau L",
    price: 130,
    category: "manteaux",
    size: "L",
    images: [
      "/images/Procyon1.jpg",
      "/images/Procyon2.jpg",
      "/images/Procyon3.jpg",
      "/images/Procyon4.jpg"
    ],
    shortDescription: "Manteau court réversible matelassé wax floral bleu turquoise et violet aubergine - Pièce unique",
    description: "Découvrez ce manteau court réversible femme créé par Le Dressing Coloré, une pièce unique qui révolutionne votre garde-robe d'hiver avec style et sophistication. Ce manteau réversible vous offre deux personnalités distinctes : d'un côté, un wax en coton bleu turquoise éclatant orné de majestueuses fleurs violettes et blanches qui célèbrent la nature et l'audace. De l'autre, un tissu uni violet aubergine élégant et intemporel, parfait pour un look raffiné et discret. Matelassé avec une ouate épaisse, ce vêtement vous garantit une chaleur optimale.",
    featured: true,
    details: {
      face1: {
        name: "Wax Floral Bleu",
        composition: "100% coton",
        description: "Bleu turquoise éclatant orné de fleurs violettes et blanches"
      },
      face2: {
        name: "Tissu Uni Violet Aubergine",
        composition: "Coton ou polyester",
        description: "Élégant et intemporel"
      },
      coupe: "Droite, non cintrée, longueur courte (hanches)",
      col: "Droit classique",
      manches: "Longues",
      fermeture: "Boutons assortis sur les deux faces",
      poches: "4 poches au total (2 par face)",
      entretien: "Lavage à la main recommandé",
      confection: "Artisanale française, Sud-Ouest"
    },
    styleTips: [
      "Élégance florale : Portez le côté wax bleu avec un jean noir et un pull blanc pour faire rayonner les fleurs violettes.",
      "Sophistication monochrome : Optez pour le côté violet uni avec un pantalon beige et une chemise écrue.",
      "Contraste coloré : Associez le wax turquoise avec des tons neutres (gris, blanc, noir).",
      "Layering maîtrisé : Ce manteau court se superpose idéalement sur pulls épais ou robes pull."
    ],
    highlights: [
      "Double fermeture boutonnée : Innovation ultime !",
      "Chaleur matelassée technique : Ouate épaisse de qualité",
      "4 poches ultra pratiques : Deux sur chaque face",
      "Coupe intemporelle structurée : Sublime toutes les morphologies"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE L - VESTES
  // ============================================
  {
    id: "electra-veste-l",
    name: "Electra - Veste L",
    price: 75,
    category: "vestes",
    size: "L",
    images: [
      "/images/Electra1.jpg",
      "/images/Electra2.jpg",
      "/images/Electra3.jpg",
      "/images/Electra4.jpg",
      "/images/Electra5.jpg",
      "/images/Electra6.jpg",
      "/images/Electra7.jpg"
    ],
    shortDescription: "Veste réversible wax multicolore graphique et bouclette vert canard - Pièce unique",
    description: "Osez l'audace avec cette veste réversible femme signée Le Dressing Coloré, une création unique qui apporte énergie et sophistication à votre garde-robe d'hiver. Ce vêtement réversible vous offre deux styles puissants : d'un côté, un wax en coton aux motifs géométriques multicolores (rouge, bleu turquoise, jaune, blanc, noir) qui affirme votre personnalité avec force et créativité. De l'autre, une bouclette vert canard élégante et chaleureuse, parfaite pour un style raffiné et moderne.",
    featured: false,
    details: {
      face1: {
        name: "Wax Multicolore",
        composition: "100% coton",
        description: "Motifs géométriques rouge, bleu turquoise, jaune, blanc, noir"
      },
      face2: {
        name: "Bouclette Vert Canard",
        composition: "100% polyester",
        description: "Élégante et chaleureuse"
      },
      coupe: "Sans fermeture, à porter ouverte",
      manches: "Longues",
      entretien: "Lavage délicat à 30°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Explosion de couleurs : Portez le côté wax multicolore avec un jean noir et un t-shirt blanc.",
      "Élégance canard : Optez pour la bouclette vert canard avec un pantalon beige ou gris et une chemise blanche.",
      "Audace totale : Associez le wax avec des pièces unies dans les tons présents dans les motifs.",
      "Chic minimaliste : La bouclette vert canard se marie parfaitement avec une robe noire."
    ],
    highlights: [
      "Double personnalité : Un wax audacieux, une bouclette élégante",
      "Chaleur et confort : Parfait pour l'hiver",
      "Style affirmé : Sans fermeture, effet décontracté",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE L - GILETS
  // ============================================
  {
    id: "taygeta-gilet-l",
    name: "Taygeta - Gilet L",
    price: 75,
    category: "gilets",
    size: "L",
    images: [
      "/images/Taygeta1.jpg",
      "/images/Taygeta2.jpg",
      "/images/Taygeta3.jpg",
      "/images/Taygeta4.jpg",
      "/images/Taygeta5.jpg"
    ],
    shortDescription: "Gilet sans manches réversible wax orange floral abstrait et bouclette gris anthracite - Pièce unique",
    description: "Osez l'audace avec ce gilet sans manches réversible femme signé Le Dressing Coloré, une création unique qui apporte énergie et sophistication à votre garde-robe d'hiver. Ce vêtement réversible vous offre deux looks contrastés : d'un côté, un wax en coton orange éclatant aux motifs floraux abstraits mêlant bordeaux, gris et touches de vert qui affirme votre personnalité avec force. De l'autre, une bouclette gris anthracite élégante et chaleureuse, parfaite pour un style sobre et raffiné.",
    featured: false,
    details: {
      face1: {
        name: "Wax Orange Floral",
        composition: "100% coton",
        description: "Orange éclatant aux motifs floraux abstraits bordeaux, gris et vert"
      },
      face2: {
        name: "Bouclette Gris Anthracite",
        composition: "100% polyester",
        description: "Élégante et chaleureuse"
      },
      coupe: "Sans manches, sans fermeture, à porter ouvert",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Énergie orange : Portez le côté wax orange avec un jean brut et un t-shirt noir ou blanc.",
      "Élégance anthracite : Optez pour la bouclette grise avec un pantalon beige et un pull écru.",
      "Audace colorée : Associez le wax orange avec du bordeaux, du gris ou du vert kaki.",
      "Layering chic : Ce gilet se porte parfaitement sur vos pulls à manches longues."
    ],
    highlights: [
      "Polyvalence stylée : Un gilet, deux ambiances !",
      "Chaleur et légèreté : Se superpose facilement",
      "Style affirmé : Orange vibrant ou anthracite minimaliste",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },
  {
    id: "vega-gilet-l",
    name: "Vega - Gilet L",
    price: 45,
    category: "gilets",
    size: "L",
    images: [
      "/images/Vega1.jpg",
      "/images/Vega2.jpg",
      "/images/Vega3.jpg",
      "/images/Vega4.jpg",
      "/images/Vega5.jpg",
      "/images/Vega6.jpg"
    ],
    shortDescription: "Gilet réversible wax feuilles noir blanc doré et bouclette rouge bordeaux - Pièce unique",
    description: "Attention, ce gilet réversible femme risque de devenir votre meilleur allié mode de l'hiver ! Créé par Le Dressing Coloré, cette pièce unique allie audace et confort avec un sens du style imparable. Ce vêtement réversible vous offre deux ambiances radicalement différentes : d'un côté, un wax spectaculaire avec des feuilles stylisées en noir, blanc et doré sur fond noir. De l'autre, une bouclette rouge profond ultra chaude et moelleuse qui vous enveloppe comme un câlin douillet.",
    featured: false,
    details: {
      face1: {
        name: "Wax Feuilles",
        composition: "100% coton",
        description: "Feuilles stylisées noir, blanc et doré sur fond noir"
      },
      face2: {
        name: "Bouclette Rouge",
        composition: "100% polyester",
        description: "Rouge bordeaux intense, ultra chaude"
      },
      coupe: "Sans manches, col en V profond, ouvert (sans fermeture)",
      entretien: "Lavage à 20°C conseillé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Contraste chic : Portez le côté wax sur un t-shirt blanc et un jean noir.",
      "Rouge sur noir : Optez pour la face bouclette rouge avec un total look noir.",
      "Style automnal : Associez le wax avec un pantalon camel ou beige et un pull noir.",
      "Look festif : Le côté rouge est parfait pour les fêtes de fin d'année."
    ],
    highlights: [
      "Rouge puissant et lumineux : Illumine instantanément votre teint",
      "Wax sophistiqué : Motifs de feuilles captivants",
      "Douceur maximale : Bouclette moelleuse",
      "Pièce unique artisanale : Ne sera jamais reproduit"
    ],
    stock: 1
  },
  {
    id: "arcturus-gilet-l",
    name: "Arcturus - Gilet L",
    price: 45,
    category: "gilets",
    size: "L",
    images: [
      "/images/Arcturus1.jpg",
      "/images/Arcturus2.jpg",
      "/images/Arcturus3.jpg",
      "/images/Arcturus4.jpg",
      "/images/Arcturus5.jpg",
      "/images/Arcturus6.jpg"
    ],
    shortDescription: "Gilet réversible wax bordeaux rose corail éventails et bouclette écrue mohair - Pièce unique",
    description: "Préparez-vous à collectionner les compliments ! Ce gilet réversible femme créé par Le Dressing Coloré est une explosion de féminité et d'élégance. Ce vêtement réversible vous offre deux univers raffinés : d'un côté, un wax somptueux dans des tons bordeaux, rose corail et noir. Les motifs en éventail pointillés créent un effet hypnotique et sophistiqué. De l'autre, une bouclette écrue ultra douce et chaude pour un look cocooning chic.",
    featured: false,
    details: {
      face1: {
        name: "Wax Éventails",
        composition: "Satin de coton",
        description: "Bordeaux, rose corail et noir, motifs éventail pointillés"
      },
      face2: {
        name: "Bouclette Écrue",
        composition: "80% polyester, 20% mohair",
        description: "Ultra douce et chaude"
      },
      coupe: "Sans manches, col châle élégant, ouvert (sans fermeture)",
      entretien: "Lavage à la main à froid pour préserver les couleurs",
      confection: "Artisanale française"
    },
    styleTips: [
      "Élégance féminine : Portez le côté wax bordeaux sur une robe noire ou un pantalon noir avec un top écru.",
      "Style automnal : Associez le wax avec un jean brut et un pull beige ou camel.",
      "Minimaliste texturé : Optez pour la face bouclette écrue avec un total look noir.",
      "Cocooning raffiné : La bouclette écrue se porte sur une robe pull grise."
    ],
    highlights: [
      "Palette de couleurs divine : Bordeaux, rose corail et noir",
      "Motifs captivants : Éventails pointillés hypnotiques",
      "Douceur hivernale : Bouclette mohair moelleuse",
      "Pièce unique : Vous serez la seule au monde à le posséder"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE M - VESTES
  // ============================================
  {
    id: "fomalhaut-veste-m",
    name: "Fomalhaut - Veste M",
    price: 75,
    category: "vestes",
    size: "M",
    images: [
      "/images/Fomalhaut1.jpg",
      "/images/Fomalhaut2.jpg",
      "/images/Fomalhaut3.jpg",
      "/images/Fomalhaut4.jpg",
      "/images/Fomalhaut5.jpg",
      "/images/Fomalhaut6.jpg",
      "/images/Fomalhaut7.jpg"
    ],
    shortDescription: "Veste courte réversible bouclette blanche immaculée et wax floral jaune bleu - Pièce unique",
    description: "Succombez au charme de cette veste courte réversible femme signée Le Dressing Coloré, une création unique qui apporte élégance et fantaisie à votre garde-robe d'hiver. Ce vêtement réversible vous propose deux styles distincts : d'un côté, une bouclette blanche immaculée au toucher doux et moelleux, parfaite pour un look épuré et sophistiqué. De l'autre, un wax en coton aux motifs floraux jaunes moutarde et bleus sur fond marine.",
    featured: false,
    details: {
      face1: {
        name: "Bouclette Blanche",
        composition: "80% polyester, 20% mohair",
        description: "Immaculée, douce et moelleuse"
      },
      face2: {
        name: "Wax Floral",
        composition: "100% coton",
        description: "Motifs floraux jaunes moutarde et bleus sur fond marine"
      },
      coupe: "Courte, sans fermeture, à porter ouverte",
      manches: "Longues",
      entretien: "Lavage délicat à 20°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Élégance pure : Portez le côté bouclette blanche avec un jean noir et un t-shirt gris.",
      "Audace colorée : Optez pour le wax jaune et bleu avec un pantalon beige ou marron.",
      "Casual chic : La bouclette blanche se marie parfaitement avec une robe noire.",
      "Look contrasté : Associez le wax avec du blanc cassé ou du bleu marine."
    ],
    highlights: [
      "Coupe moderne : Veste courte flatteuse",
      "Polyvalence stylée : Une veste, deux ambiances !",
      "Chaleur et confort : Manches longues protectrices",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },
  {
    id: "schedar-veste-m",
    name: "Schedar - Veste M",
    price: 75,
    category: "vestes",
    size: "M",
    images: [
      "/images/Schedar1.jpg",
      "/images/Schedar2.jpg",
      "/images/Schedar3.jpg",
      "/images/Schedar4.jpg",
      "/images/Schedar5.jpg",
      "/images/Schedar6.jpg"
    ],
    shortDescription: "Veste réversible bouclette kaki/taupe et wax jaune éclatant - Pièce unique",
    description: "Craquez pour cette veste réversible femme créée par Le Dressing Coloré, une pièce unique qui illumine votre garde-robe d'hiver avec style et originalité. Ce vêtement réversible vous offre deux looks en un : d'un côté, une élégante bouclette kaki/taupe chaude et confortable. De l'autre, un wax en coton aux motifs jaunes éclatants sur fond bleu marine.",
    featured: false,
    details: {
      face1: {
        name: "Bouclette Kaki/Taupe",
        composition: "80% polyester, 20% mohair",
        description: "Chaude et confortable"
      },
      face2: {
        name: "Wax Jaune",
        composition: "100% coton",
        description: "Motifs jaunes éclatants sur fond bleu marine"
      },
      coupe: "Sans fermeture, à porter ouverte",
      manches: "Longues",
      entretien: "Lavage délicat à 30°C recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Look lumineux : Portez le côté wax jaune avec un jean brut et un t-shirt blanc.",
      "Élégance naturelle : Optez pour la bouclette kaki avec un pantalon beige ou marron et un pull écru.",
      "Audace colorée : Associez le wax jaune avec du bleu marine, du gris ou même du bordeaux.",
      "Casual chic : La bouclette kaki se marie parfaitement avec une robe noire."
    ],
    highlights: [
      "Polyvalence absolue : Une veste, deux ambiances !",
      "Chaleur et confort : Bouclette enveloppante",
      "Style affirmé : Wax lumineux ou kaki élégant",
      "Pièce unique : L'unique exemplaire existant"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE M - GILETS
  // ============================================
  {
    id: "aldebaran-gilet-m",
    name: "Aldébaran - Gilet M",
    price: 45,
    category: "gilets",
    size: "M",
    images: [
      "/images/Albedaran1.jpg",
      "/images/Albedaran2.jpg",
      "/images/Albedaran3.jpg",
      "/images/Albedaran4.jpg",
      "/images/Albedaran5.jpg",
      "/images/Albedaran6.jpg"
    ],
    shortDescription: "Gilet réversible wax graphique noir blanc doré et bouclette noire - Pièce unique",
    description: "Attention, ce gilet réversible femme risque de faire tourner les têtes à 180 degrés ! Signé Le Dressing Coloré, cette création unique est l'alliance parfaite entre art graphique et confort absolu. Ce vêtement réversible vous offre deux univers contrastés : d'un côté, un wax graphique spectaculaire en noir et blanc avec des touches de doré. De l'autre, une bouclette noire ultra douce et chaude pour un look sophistiqué et cocooning.",
    featured: true,
    details: {
      face1: {
        name: "Wax Graphique",
        composition: "Satin de coton",
        description: "Noir et blanc avec touches dorées, lignes ondulées et motifs géométriques"
      },
      face2: {
        name: "Bouclette Noire",
        composition: "100% polyester",
        description: "Ultra douce et chaude"
      },
      coupe: "Sans manches, ouvert (sans fermeture)",
      entretien: "Lavage à la main à froid recommandé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Minimaliste chic : Portez le côté wax graphique sur un t-shirt blanc et un pantalon noir.",
      "Total look noir : Optez pour la face bouclette noire avec un jean noir. Ajoutez des bijoux dorés.",
      "Contraste audacieux : Associez le wax noir et blanc avec un jean clair ou un pantalon beige.",
      "Style rock chic : Le côté graphique se marie à merveille avec un cuir."
    ],
    highlights: [
      "Design graphique puissant : Ne passe JAMAIS inaperçu",
      "Intemporel et versatile : Le noir et blanc va avec tout",
      "Douceur maximale : Bouclette moelleuse",
      "Pièce unique artisanale : Une pièce de collection !"
    ],
    stock: 1
  },
  {
    id: "celaeno-gilet-m",
    name: "Célaéno - Gilet M",
    price: 45,
    category: "gilets",
    size: "M",
    images: [
      "/images/Celaeno1.jpg",
      "/images/Celaeno2.jpg",
      "/images/Celaeno3.jpg",
      "/images/Celaeno4.jpg",
      "/images/Celaeno5.jpg",
      "/images/Celaeno6.jpg"
    ],
    shortDescription: "Gilet réversible wax grandes fleurs noir blanc rose et bouclette bleu jean mohair - Pièce unique",
    description: "Préparez-vous à devenir LA personne qu'on arrête dans la rue pour lui demander 'Où as-tu trouvé ce gilet ?!' Créé par Le Dressing Coloré, ce gilet réversible femme est une véritable œuvre d'art portable. Ce vêtement réversible vous offre deux univers élégants : d'un côté, un wax majestueux avec de grandes fleurs graphiques en noir, blanc et touches rose sur fond noir. De l'autre, une bouclette bleu jean ultra douce et chaude.",
    featured: false,
    details: {
      face1: {
        name: "Wax Grandes Fleurs",
        composition: "Satin de coton",
        description: "Fleurs graphiques noir, blanc et touches rose sur fond noir"
      },
      face2: {
        name: "Bouclette Bleu Jean",
        composition: "80% polyester, 20% mohair",
        description: "Bleu denim chiné, ultra douce"
      },
      coupe: "Sans manches, ouvert (sans fermeture)",
      entretien: "Lavage à la main à froid pour préserver les motifs",
      confection: "Artisanale française"
    },
    styleTips: [
      "Statement piece : Portez le côté wax sur un total look noir. Le gilet devient la star de votre tenue.",
      "Minimaliste chic : Optez pour la face bouclette bleue avec un jean brut et un pull écru.",
      "Bohème urbain : Associez le wax avec une robe longue unie noire ou rose poudré et des boots.",
      "Casual confort : La bouclette bleue se marie parfaitement avec un pantalon beige."
    ],
    highlights: [
      "Motifs floraux spectaculaires : Grandes fleurs graphiques captivantes",
      "Bouclette bleu jean apaisante : Tendance et intemporelle",
      "Polyvalence hivernale : Deux styles, infinies possibilités",
      "Pièce unique : Vous serez littéralement la seule personne au monde à le porter"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE S - VESTES
  // ============================================
  {
    id: "alhena-veste-s",
    name: "Alhéna - Veste S",
    price: 75,
    category: "vestes",
    size: "S",
    images: [
      "/images/Alhena1.jpg",
      "/images/Alhena2.jpg",
      "/images/Alhena3.jpg",
      "/images/Alhena4.jpg"
    ],
    shortDescription: "Veste réversible wax noir géométrique rose violet et bouclette écrue mohair - Pièce unique",
    description: "Découvrez cette veste réversible femme exceptionnelle créée par Le Dressing Coloré ! Une pièce unique qui transforme instantanément votre style grâce à sa double face. Ce vêtement réversible vous offre deux looks distincts : d'un côté, un wax sophistiqué noir avec des motifs géométriques rose et violet. De l'autre, une matière bouclette écrue ultra chaude et confortable.",
    featured: false,
    details: {
      face1: {
        name: "Wax Géométrique",
        composition: "Satin de coton",
        description: "Noir avec motifs géométriques rose et violet"
      },
      face2: {
        name: "Bouclette Écrue",
        composition: "80% polyester, 20% mohair",
        description: "Ultra chaude et confortable"
      },
      coupe: "Droite, col rond",
      manches: "Longues",
      entretien: "Lavage à la main à froid conseillé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Chic urbain : Portez le côté wax sur un jean noir et un t-shirt blanc. La veste devient la pièce maîtresse.",
      "Cocooning élégant : Optez pour la face écrue bouclette sur une robe pull ou un ensemble tout noir.",
      "Casual chaud : Associez le côté wax avec un pantalon beige et des baskets.",
      "Superposition créative : Cette veste réversible se porte aussi bien seule que sous un long manteau."
    ],
    highlights: [
      "Polyvalence absolue : S'adapte à toutes les occasions",
      "Chaleur optimale pour l'hiver : Matière mohair enveloppante",
      "Création unique : Jamais reproduit",
      "Investissement malin : Une veste réversible, c'est deux vêtements en un"
    ],
    stock: 1
  },

  // ============================================
  // TAILLE S - GILETS
  // ============================================
  
  {
    id: "alcyone-gilet-s",
    name: "Alcyone - Gilet S",
    price: 45,
    category: "gilets",
    size: "S",
    images: [
      "/images/Alcyone1.jpg",
      "/images/Alcyone2.jpg",
      "/images/Alcyone3.jpg",
      "/images/Alcyone4.jpg",
      "/images/Alcyone5.jpg"
    ],
    shortDescription: "Gilet réversible wax géométrique turquoise rouge jaune et bouclette vert émeraude - Pièce unique",
    description: "Coup de cœur assuré pour ce gilet réversible femme signé Le Dressing Coloré ! Une création unique qui transforme votre style en un clin d'œil. Ce vêtement réversible vous offre deux univers distincts : d'un côté, un wax éclatant aux motifs géométriques turquoise, rouge, jaune et blanc sur fond noir. De l'autre, une matière bouclette vert émeraude ultra chaude.",
    featured: false,
    details: {
      face1: {
        name: "Wax Géométrique Multicolore",
        composition: "Satin de coton",
        description: "Motifs géométriques turquoise, rouge, jaune et blanc sur fond noir"
      },
      face2: {
        name: "Bouclette Vert Émeraude",
        composition: "100% polyester",
        description: "Ultra chaude"
      },
      coupe: "Sans manches",
      entretien: "Lavage à 20°C conseillé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Urbain chic : Portez le côté wax avec un jean brut et un col roulé noir. Ajoutez des baskets blanches.",
      "Cosy hivernal : Optez pour la face vert émeraude sur une robe longue noire ou une jupe midi avec des bottines.",
      "Audacieux : Mixez le wax avec des couleurs unies vives (rouge, jaune moutarde)."
    ],
    highlights: [
      "Deux styles, infinies possibilités",
      "Chaleur garantie : Face mohair enveloppante",
      "Exclusivité totale : Pièce unique jamais reproduite",
      "Écoresponsable et malin : Un gilet réversible, c'est deux vêtements en un"
    ],
    stock: 1
  },
  {
    id: "polaris-gilet-s",
    name: "Polaris - Gilet S",
    price: 45,
    category: "gilets",
    size: "S",
    images: [
      "/images/Polaris1.jpg",
      "/images/Polaris2.jpg",
      "/images/Polaris3.jpg",
      "/images/Polaris4.jpg",
      "/images/Polaris5.jpg",
      "/images/Polaris6.jpg"
    ],
    shortDescription: "Gilet réversible wax rouge vif graphique jaune et gris et bouclette noir anthracite - Pièce unique",
    description: "Laissez-vous séduire par ce gilet réversible femme audacieux signé Le Dressing Coloré ! Une création unique qui apporte une touche de caractère à votre garde-robe. Ce vêtement réversible offre deux ambiances radicalement différentes : d'un côté, un wax éclatant rouge vif aux motifs graphiques jaune et gris. De l'autre, une matière bouclette noir anthracite ultra chaude et douce.",
    featured: false,
    details: {
      face1: {
        name: "Wax Rouge Graphique",
        composition: "Satin de coton",
        description: "Rouge vif aux motifs graphiques jaune et gris"
      },
      face2: {
        name: "Bouclette Noir Anthracite",
        composition: "100% polyester",
        description: "Ultra chaude et douce"
      },
      coupe: "Sans manches, col rond",
      entretien: "Lavage à 20°C conseillé",
      confection: "Artisanale française"
    },
    styleTips: [
      "Total look noir et rouge : Portez le côté wax avec un pantalon noir ajusté et un col roulé noir.",
      "Élégance urbaine : Optez pour la face noire bouclette avec un jean brut et une chemise blanche.",
      "Mix & match : Associez le côté rouge avec une jupe midi kaki ou beige.",
      "Superposition hivernale : Ce vêtement réversible se porte parfaitement sur un pull fin."
    ],
    highlights: [
      "Double personnalité : Wax rouge audacieux ou bouclette noire sophistiquée",
      "Chaleur et confort : Parfait pour l'hiver",
      "Pièce exclusive : Création artisanale unique",
      "Mode responsable : Un gilet réversible, c'est deux vêtements pour le prix d'un"
    ],
    stock: 1
  },
]

export const categoryLabels: Record<ProductCategory, string> = {
  manteaux: "Manteaux",
  vestes: "Vestes",
  gilets: "Gilets",
  accessoires: "Accessoires",
}

export const categoryDescriptions: Record<ProductCategory, string> = {
  manteaux: "Manteaux réversibles matelassés, chauds et élégants",
  vestes: "Vestes réversibles avec manches longues",
  gilets: "Gilets sans manches réversibles pour le layering",
  accessoires: "Accessoires et petites pièces assorties",
}

export const categoryIcons: Record<ProductCategory, string> = {
  manteaux: "🧥",
  vestes: "🧥",
  gilets: "🦺",
  accessoires: "✨",
}

export const sizeLabels: Record<string, string> = {
  XL: "XL",
  L: "L",
  M: "M",
  S: "S",
}

export const getCategoriesWithCount = () => {
  const counts = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    },
    {} as Record<ProductCategory, number>,
  )
  return counts
}

export const getProductsByCategory = (category: ProductCategory) => {
  return products.filter((p) => p.category === category)
}

export const getProductsBySize = (size: string) => {
  return products.filter((p) => p.size === size)
}

export const getFeaturedProducts = () => {
  return products.filter((p) => p.featured)
}

export const getProductById = (id: string) => {
  return products.find((p) => p.id === id)
}

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.size.toLowerCase().includes(lowerQuery)
  )
}