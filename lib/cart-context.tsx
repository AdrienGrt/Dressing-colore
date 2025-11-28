"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Product, Cart, CartItem } from "./types"

const CART_STORAGE_KEY = "dressing_colore_cart"
const CART_EXPIRATION_HOURS = 24

interface CartContextType {
  cart: Cart
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isInCart: (productId: string) => boolean
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const loadCart = () => {
      try {
        const stored = localStorage.getItem(CART_STORAGE_KEY)
        if (!stored) {
          setIsLoaded(true)
          return
        }

        const { items, timestamp } = JSON.parse(stored)
        const now = Date.now()
        const expirationTime = CART_EXPIRATION_HOURS * 60 * 60 * 1000

        // Vérifier si le panier a expiré
        if (now - timestamp > expirationTime) {
          localStorage.removeItem(CART_STORAGE_KEY)
          setIsLoaded(true)
          return
        }

        const total = items.reduce(
          (sum: number, item: CartItem) => sum + item.product.price * item.quantity,
          0
        )

        setCart({ items, total })
      } catch (error) {
        console.error("Erreur lors du chargement du panier:", error)
      } finally {
        setIsLoaded(true)
      }
    }

    loadCart()
  }, [])

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    if (!isLoaded) return

    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({
        items: cart.items,
        timestamp: Date.now(),
      })
    )
  }, [cart, isLoaded])

  const addItem = (product: Product) => {
    setCart((prevCart) => {
      // Vérifier si le produit est déjà dans le panier
      const existingItem = prevCart.items.find((item) => item.product.id === product.id)

      // Pour les pièces uniques, on ne permet pas d'ajouter plus d'un exemplaire
      if (existingItem) {
        return prevCart
      }

      const newItems = [...prevCart.items, { product, quantity: 1 }]
      const newTotal = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return { items: newItems, total: newTotal }
    })
  }

  const removeItem = (productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.product.id !== productId)
      const newTotal = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return { items: newItems, total: newTotal }
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => {
        if (item.product.id === productId) {
          // Pour les pièces uniques, la quantité max est toujours 1
          const maxQuantity = item.product.stock || 1
          return { ...item, quantity: Math.min(quantity, maxQuantity) }
        }
        return item
      })

      const newTotal = newItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

      return { items: newItems, total: newTotal }
    })
  }

  const clearCart = () => {
    setCart({ items: [], total: 0 })
    localStorage.removeItem(CART_STORAGE_KEY)
  }

  const isInCart = (productId: string): boolean => {
    return cart.items.some((item) => item.product.id === productId)
  }

  const itemCount = cart.items.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isInCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}