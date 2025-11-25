export type ProductCategory = "tissus" | "accessoires" | "machines" | "patrons" | "kits"

export interface Product {
  id: string
  name: string
  price: number
  category: ProductCategory
  icon: string
  description: string
  image?: string
  featured?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}

export interface CheckoutFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  date?: string
  message?: string
}
