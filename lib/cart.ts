"use client"

import type { Product, Cart, CartItem } from "./types"

const CART_STORAGE_KEY = "dressing_colore_cart"
const CART_EXPIRATION_HOURS = 24

export const getCart = (): Cart => {
  if (typeof window === "undefined") return { items: [], total: 0 }

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (!stored) return { items: [], total: 0 }

    const { items, timestamp } = JSON.parse(stored)
    const now = Date.now()
    const expirationTime = CART_EXPIRATION_HOURS * 60 * 60 * 1000

    if (now - timestamp > expirationTime) {
      localStorage.removeItem(CART_STORAGE_KEY)
      return { items: [], total: 0 }
    }

    const total = items.reduce((sum: number, item: CartItem) => sum + item.product.price * item.quantity, 0)

    return { items, total }
  } catch {
    return { items: [], total: 0 }
  }
}

export const saveCart = (cart: Cart) => {
  if (typeof window === "undefined") return

  localStorage.setItem(
    CART_STORAGE_KEY,
    JSON.stringify({
      items: cart.items,
      timestamp: Date.now(),
    }),
  )
}

export const addToCart = (product: Product): Cart => {
  const cart = getCart()
  const existingItemIndex = cart.items.findIndex((item) => item.product.id === product.id)

  // Pour les pièces uniques, on ne permet pas d'ajouter plus d'un exemplaire
  if (existingItemIndex > -1) {
    // Le produit est déjà dans le panier, on ne l'ajoute pas à nouveau
    // car chaque pièce est unique (stock = 1)
    return cart
  } else {
    cart.items.push({ product, quantity: 1 })
  }

  cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  saveCart(cart)
  return cart
}

export const removeFromCart = (productId: string): Cart => {
  const cart = getCart()
  cart.items = cart.items.filter((item) => item.product.id !== productId)
  cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  saveCart(cart)
  return cart
}

export const updateQuantity = (productId: string, quantity: number): Cart => {
  const cart = getCart()
  const item = cart.items.find((item) => item.product.id === productId)

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId)
    }
    // Pour les pièces uniques, la quantité max est toujours 1
    item.quantity = Math.min(quantity, item.product.stock || 1)
    cart.total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    saveCart(cart)
  }

  return cart
}

export const clearCart = (): Cart => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_STORAGE_KEY)
  }
  return { items: [], total: 0 }
}

export const getCartItemCount = (): number => {
  const cart = getCart()
  return cart.items.reduce((count, item) => count + item.quantity, 0)
}

export const isProductInCart = (productId: string): boolean => {
  const cart = getCart()
  return cart.items.some((item) => item.product.id === productId)
}