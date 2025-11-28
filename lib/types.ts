// Types pour les produits Le Dressing Coloré

export type ProductCategory = "manteaux" | "vestes" | "gilets" | "accessoires"

export type ProductSize = "XL" | "L" | "M" | "S"

export interface Product {
  id: string
  name: string
  price: number
  category: ProductCategory
  size: ProductSize
  images: string[]
  description: string
  shortDescription: string
  featured?: boolean
  
  // Détails techniques
  details: {
    face1: {
      name: string
      composition: string
      description: string
    }
    face2: {
      name: string
      composition: string
      description: string
    }
    coupe: string
    col?: string
    manches?: string
    fermeture?: string
    poches?: string
    entretien: string
    confection: string
  }
  
  // Conseils de style
  styleTips: string[]
  
  // Points forts
  highlights: string[]
  
  // Stock
  stock: number
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}