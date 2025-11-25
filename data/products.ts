import type { Product, ProductCategory } from "@/lib/types"

export const products: Product[] = [
  // TISSUS
  {
    id: "coton_bio_1",
    name: "Coton Bio Premium",
    price: 15,
    category: "tissus",
    icon: "🧵",
    description: "Tissu 100% coton biologique certifié GOTS, parfait pour vêtements et accessoires. Toucher doux et respirant.",
    featured: true,
  },
  {
    id: "lin_naturel_1",
    name: "Lin Naturel Lavé",
    price: 22,
    category: "tissus",
    icon: "🌿",
    description: "Lin de qualité supérieure pré-lavé, respirant et élégant. Idéal pour l'été.",
  },
  {
    id: "jersey_stretch_1",
    name: "Jersey Stretch Uni",
    price: 18,
    category: "tissus",
    icon: "🧶",
    description: "Jersey extensible très confortable, idéal pour t-shirts, robes et vêtements casual.",
    featured: true,
  },
  {
    id: "velours_cotele_1",
    name: "Velours Côtelé",
    price: 25,
    category: "tissus",
    icon: "✨",
    description: "Velours doux et tendance avec fines côtes, parfait pour vestes et pantalons automne-hiver.",
  },
  {
    id: "popeline_coton_1",
    name: "Popeline de Coton",
    price: 14,
    category: "tissus",
    icon: "👔",
    description: "Tissu léger et fluide, idéal pour chemises, blouses et doublures. Facile à coudre.",
  },
  {
    id: "gabardine_1",
    name: "Gabardine Stretch",
    price: 20,
    category: "tissus",
    icon: "👖",
    description: "Tissu sergé robuste avec élasthanne pour confort optimal. Parfait pour pantalons et jupes.",
  },
  {
    id: "satin_duchesse_1",
    name: "Satin Duchesse",
    price: 28,
    category: "tissus",
    icon: "💎",
    description: "Satin luxueux au toucher soyeux et brillant. Pour robes de soirée et créations élégantes.",
    featured: true,
  },
  {
    id: "double_gaze_1",
    name: "Double Gaze Coton",
    price: 16,
    category: "tissus",
    icon: "☁️",
    description: "Tissu aérien et ultra-doux, parfait pour vêtements bébé et blouses légères.",
  },

  // ACCESSOIRES
  {
    id: "boutons_nacre_1",
    name: "Boutons Nacre Naturelle",
    price: 12,
    category: "accessoires",
    icon: "🔘",
    description: "Lot de 20 boutons en nacre véritable, différentes tailles. Élégance naturelle.",
  },
  {
    id: "boutons_colores_1",
    name: "Set Boutons Colorés",
    price: 8,
    category: "accessoires",
    icon: "🌈",
    description: "Assortiment de 50 boutons multicolores en résine de qualité. Toutes tailles.",
  },
  {
    id: "fils_coudre_1",
    name: "Coffret Fils à Coudre",
    price: 24,
    category: "accessoires",
    icon: "🎨",
    description: "36 bobines de fil polyester haute qualité, toutes les couleurs essentielles incluses.",
    featured: true,
  },
  {
    id: "ciseaux_pro_1",
    name: "Ciseaux Couture Pro",
    price: 35,
    category: "accessoires",
    icon: "✂️",
    description: "Ciseaux professionnels 25cm en acier inoxydable japonais. Coupe précise et durable.",
  },
  {
    id: "epingles_tete_1",
    name: "Épingles Tête Verre",
    price: 6,
    category: "accessoires",
    icon: "📍",
    description: "Boîte de 100 épingles extra-fines à tête en verre coloré. Résistantes au fer.",
  },
  {
    id: "metre_ruban_1",
    name: "Mètre Ruban Pro",
    price: 5,
    category: "accessoires",
    icon: "📏",
    description: "Mètre ruban souple 150cm, double graduation cm/pouces. Indispensable !",
  },
  {
    id: "fermeture_invisible_1",
    name: "Lot Fermetures Invisibles",
    price: 15,
    category: "accessoires",
    icon: "🔗",
    description: "Pack de 10 fermetures éclair invisibles, coloris assortis. Longueur 20cm.",
  },
  {
    id: "aiguilles_machine_1",
    name: "Aiguilles Machine Universelles",
    price: 8,
    category: "accessoires",
    icon: "🪡",
    description: "Lot de 20 aiguilles universelles, tailles 70 à 100. Compatible toutes machines.",
  },

  // MACHINES
  {
    id: "machine_debutant_1",
    name: "Machine Débutant",
    price: 180,
    category: "machines",
    icon: "🪡",
    description: "Machine à coudre compacte avec 12 points, parfaite pour débuter. Simple et fiable.",
  },
  {
    id: "machine_electronique_1",
    name: "Machine Électronique",
    price: 350,
    category: "machines",
    icon: "💻",
    description: "Machine électronique 60 points avec écran LCD. Enfile-aiguille automatique.",
    featured: true,
  },
  {
    id: "surjeteuse_4fils_1",
    name: "Surjeteuse 4 Fils",
    price: 320,
    category: "machines",
    icon: "⚙️",
    description: "Surjeteuse professionnelle pour finitions impeccables. Coupe et surfile en un passage.",
    featured: true,
  },
  {
    id: "fer_vapeur_1",
    name: "Fer à Repasser Vapeur",
    price: 85,
    category: "machines",
    icon: "♨️",
    description: "Fer vapeur professionnel avec semelle céramique. Réservoir XL 400ml.",
  },
  {
    id: "mannequin_couture_1",
    name: "Mannequin Réglable",
    price: 120,
    category: "machines",
    icon: "👤",
    description: "Mannequin de couture ajustable taille 36-44. Hauteur réglable sur trépied.",
  },

  // PATRONS
  {
    id: "patron_robe_ete_1",
    name: "Patron Robe d'Été",
    price: 12,
    category: "patrons",
    icon: "👗",
    description: "Patron PDF tailles 36-46, niveau intermédiaire. Robe fluide avec dos nu.",
  },
  {
    id: "patron_blouse_1",
    name: "Patron Blouse Bohème",
    price: 10,
    category: "patrons",
    icon: "🌸",
    description: "Patron PDF tailles 34-48. Blouse ample avec manches volantées. Niveau débutant.",
    featured: true,
  },
  {
    id: "patron_pantalon_1",
    name: "Patron Pantalon Large",
    price: 14,
    category: "patrons",
    icon: "👖",
    description: "Patron PDF tailles 36-50. Pantalon palazzo fluide, taille élastiquée.",
  },
  {
    id: "patron_sac_1",
    name: "Patron Sac Cabas",
    price: 8,
    category: "patrons",
    icon: "👜",
    description: "Patron facile pour créer un cabas personnalisé avec poches intérieures.",
  },
  {
    id: "patron_trousse_1",
    name: "Patron Trousse Zippée",
    price: 6,
    category: "patrons",
    icon: "💄",
    description: "Patron PDF débutant. 3 tailles de trousses avec fermeture éclair.",
  },
  {
    id: "patron_jupe_1",
    name: "Patron Jupe Portefeuille",
    price: 11,
    category: "patrons",
    icon: "💃",
    description: "Patron PDF tailles 36-46. Jupe midi portefeuille, niveau intermédiaire.",
  },

  // KITS
  {
    id: "kit_debutant_1",
    name: "Kit Débutant Complet",
    price: 65,
    category: "kits",
    icon: "🎁",
    description: "Tout le nécessaire pour commencer : fils, aiguilles, ciseaux, mètre, épingles et plus encore.",
    featured: true,
  },
  {
    id: "kit_couture_voyage_1",
    name: "Kit Couture Voyage",
    price: 25,
    category: "kits",
    icon: "✈️",
    description: "Trousse compacte avec mini-ciseaux, aiguilles, fils essentiels et dé à coudre.",
  },
  {
    id: "kit_customisation_1",
    name: "Kit Customisation",
    price: 35,
    category: "kits",
    icon: "🎨",
    description: "Patchs thermocollants, perles, sequins et colle textile pour personnaliser vos créations.",
  },
  {
    id: "kit_reparation_1",
    name: "Kit Réparation Express",
    price: 18,
    category: "kits",
    icon: "🔧",
    description: "Fils assortis, boutons basiques, aiguilles et rustines pour réparations rapides.",
  },
  {
    id: "kit_broderie_1",
    name: "Kit Initiation Broderie",
    price: 42,
    category: "kits",
    icon: "🪻",
    description: "Tambour, fils moulinés, toile et guide illustré pour débuter la broderie.",
    featured: true,
  },
]

export const categoryLabels: Record<ProductCategory, string> = {
  tissus: "Tissus & Textiles",
  accessoires: "Accessoires de Couture",
  machines: "Machines & Outils",
  patrons: "Patrons & Modèles",
  kits: "Kits Complets",
}

export const categoryDescriptions: Record<ProductCategory, string> = {
  tissus: "Cotons, lins, jerseys et bien plus pour toutes vos créations",
  accessoires: "Fils, boutons, fermetures et tous les indispensables",
  machines: "Machines à coudre, surjeteuses et équipements",
  patrons: "Modèles PDF à télécharger pour tous niveaux",
  kits: "Ensembles complets pour démarrer vos projets",
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
      p.category.toLowerCase().includes(lowerQuery)
  )
}