"use client"

import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, Star, Check } from "lucide-react"
import { addToCart } from "@/lib/cart"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: Product
  variant?: "default" | "compact"
}

// Mapping des couleurs par catégorie
const categoryGradients: Record<string, string> = {
  tissus: "from-rose-500 to-pink-500",
  accessoires: "from-orange-500 to-amber-500",
  machines: "from-slate-700 to-slate-900",
  patrons: "from-purple-500 to-violet-500",
  kits: "from-emerald-500 to-teal-500",
}

const categoryBgColors: Record<string, string> = {
  tissus: "from-rose-50 via-white to-pink-50",
  accessoires: "from-orange-50 via-white to-amber-50",
  machines: "from-slate-100 via-white to-slate-50",
  patrons: "from-purple-50 via-white to-violet-50",
  kits: "from-emerald-50 via-white to-teal-50",
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    window.dispatchEvent(new Event("cartUpdated"))
    setTimeout(() => setIsAdding(false), 1500)
  }

  const gradient = categoryGradients[product.category] || "from-rose-500 to-orange-500"
  const bgGradient = categoryBgColors[product.category] || "from-slate-50 via-white to-slate-100"

  // Générer un rating aléatoire mais constant basé sur l'ID
  const rating = 4.5 + (product.id.charCodeAt(0) % 5) * 0.1
  const reviews = 50 + (product.id.charCodeAt(1) % 200)

  return (
    <div className={cn(
      "group relative bg-white rounded-3xl border border-slate-200/80 overflow-hidden transition-all duration-500",
      "hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/50 hover:-translate-y-2",
      variant === "compact" && "rounded-2xl"
    )}>
      {/* Badge - Featured */}
      {product.featured && (
        <div className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${gradient} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
          ⭐ Populaire
        </div>
      )}
      
      {/* Wishlist button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className={cn(
          "absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300",
          isWishlisted 
            ? "bg-rose-500 scale-110" 
            : "bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 hover:bg-rose-50"
        )}
      >
        <Heart className={cn(
          "h-5 w-5 transition-colors",
          isWishlisted ? "text-white fill-white" : "text-slate-400 hover:text-rose-500"
        )} />
      </button>

      {/* Product visual area */}
      <div className={cn(
        "relative h-44 bg-gradient-to-br flex items-center justify-center overflow-hidden",
        bgGradient
      )}>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,113,133,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
        
        {/* Decorative circles */}
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
        
        {/* Product emoji/icon */}
        <span className="text-7xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg relative z-10">
          {product.icon}
        </span>
      </div>

      {/* Product info */}
      <div className="p-5 space-y-3">
        {/* Category tag */}
        <div className="flex items-center justify-between">
          <span className={cn(
            "text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r text-white",
            gradient
          )}>
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            <span className="text-xs font-semibold text-slate-700">{rating.toFixed(1)}</span>
            <span className="text-xs text-slate-400">({reviews})</span>
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-slate-500 text-sm mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-2xl font-black text-slate-900">{product.price}€</span>
          {product.featured && (
            <span className="text-sm text-slate-400 line-through">{Math.round(product.price * 1.2)}€</span>
          )}
        </div>

        {/* Add to cart button */}
        <Button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={cn(
            "w-full py-5 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2",
            isAdding 
              ? "bg-emerald-500 hover:bg-emerald-500 text-white" 
              : "bg-gradient-to-r from-slate-800 to-slate-900 hover:from-rose-500 hover:to-orange-500 text-white shadow-lg shadow-slate-900/10 hover:shadow-rose-500/25"
          )}
        >
          {isAdding ? (
            <>
              <Check className="h-5 w-5 animate-bounce" />
              Ajouté au panier !
            </>
          ) : (
            <>
              <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Ajouter au panier
            </>
          )}
        </Button>
      </div>
    </div>
  )
}