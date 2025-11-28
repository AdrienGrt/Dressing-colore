"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Truck,
  Gift,
  X
} from "lucide-react"
import { useCart } from "@/lib/cart-context"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CartSheet() {
  const { cart, updateQuantity, removeItem, itemCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [removingId, setRemovingId] = useState<string | null>(null)

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  const handleRemove = (productId: string) => {
    setRemovingId(productId)
    setTimeout(() => {
      removeItem(productId)
      setRemovingId(null)
    }, 300)
  }

  // Calculate if free shipping is reached (50€)
  const freeShippingThreshold = 50
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cart.total)
  const freeShippingProgress = Math.min(100, (cart.total / freeShippingThreshold) * 100)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="relative bg-white/80 backdrop-blur-sm border-slate-200 hover:border-rose-300 hover:bg-white transition-all duration-300 rounded-full px-4"
        >
          <ShoppingBag className="h-4 w-4 text-slate-700" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-bounce-once">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md p-0 bg-[#FFFBF7] border-l border-slate-200">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-5">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <div>
                  <SheetTitle className="text-xl font-bold text-slate-900">Mon Panier</SheetTitle>
                  <p className="text-sm text-slate-500">
                    {itemCount === 0
                      ? "Votre panier est vide"
                      : `${itemCount} article${itemCount > 1 ? "s" : ""}`}
                  </p>
                </div>
              </div>
            </div>
          </SheetHeader>

          {/* Free shipping progress */}
          {cart.items.length > 0 && (
            <div className="mt-4">
              {remainingForFreeShipping > 0 ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">
                      Plus que <span className="font-bold text-rose-600">{remainingForFreeShipping.toFixed(0)}€</span> pour la livraison gratuite
                    </span>
                    <Truck className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-rose-500 to-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-emerald-700">
                    Félicitations ! Livraison gratuite 🎉
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col h-[calc(100vh-200px)]">
          {cart.items.length === 0 ? (
            /* Empty State */
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-6">
                <ShoppingBag className="h-10 w-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Votre panier est vide</h3>
              <p className="text-slate-500 mb-8 max-w-xs">
                Découvrez nos pièces uniques réversibles confectionnées à la main
              </p>
              <Button 
                asChild 
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 py-6 shadow-lg shadow-rose-500/25"
              >
                <Link href="/shop">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Découvrir la boutique
                </Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                {cart.items.map((item) => (
                  <div 
                    key={item.product.id} 
                    className={cn(
                      "bg-white rounded-2xl border border-slate-200 p-4 transition-all duration-300",
                      removingId === item.product.id && "opacity-0 scale-95 -translate-x-4"
                    )}
                  >
                    <div className="flex gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                        {item.product.images && item.product.images[0] ? (
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ShoppingBag className="h-8 w-8 text-slate-300" />
                          </div>
                        )}
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-slate-900 text-sm line-clamp-2">
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => handleRemove(item.product.id)}
                            className="p-1.5 rounded-lg hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors flex-shrink-0"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                        
                        {/* Category & Size */}
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400 capitalize">{item.product.category}</span>
                          <span className="text-xs text-slate-300">•</span>
                          <span className="text-xs font-medium text-rose-600">Taille {item.product.size}</span>
                        </div>

                        {/* Badge Pièce Unique */}
                        <div className="mt-2">
                          <span className="inline-flex items-center text-xs bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 px-2 py-0.5 rounded-full font-medium">
                            ✨ Pièce unique
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity - Disabled for unique pieces */}
                          <div className="flex items-center gap-1 bg-slate-100 rounded-full p-1 opacity-50">
                            <button
                              disabled
                              className="w-7 h-7 rounded-full flex items-center justify-center cursor-not-allowed"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                            <button
                              disabled
                              className="w-7 h-7 rounded-full flex items-center justify-center cursor-not-allowed"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          
                          {/* Price */}
                          <div className="text-right">
                            <p className="font-bold text-slate-900">
                              {item.product.price}€
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Banner */}
                <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-4 border border-rose-200/50 mt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <Gift className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900">Code promo BIENVENUE10</p>
                      <p className="text-xs text-slate-500">-10% sur votre 1ère commande</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-slate-200 bg-white px-6 py-5 space-y-4">
                {/* Subtotal */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Sous-total</span>
                    <span className="text-slate-700">{cart.total.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Livraison</span>
                    <span className={remainingForFreeShipping <= 0 ? "text-emerald-600 font-medium" : "text-slate-700"}>
                      {remainingForFreeShipping <= 0 ? "Gratuite" : "Calculée à l'étape suivante"}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                    {cart.total.toFixed(2)}€
                  </span>
                </div>

                {/* Checkout Button */}
                <Button 
                  asChild 
                  className="w-full py-6 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-base shadow-lg shadow-rose-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/checkout" className="flex items-center justify-center gap-2">
                    Passer la commande
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Truck className="h-4 w-4 text-blue-500" />
                    <span>Livraison 48h</span>
                  </div>
                </div>

                {/* Continue shopping */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center text-sm text-slate-500 hover:text-rose-600 transition-colors py-2"
                >
                  ← Continuer mes achats
                </button>
              </div>
            </>
          )}
        </div>
      </SheetContent>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes bounce-once {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-bounce-once {
          animation: bounce-once 0.3s ease-out;
        }
      `}</style>
    </Sheet>
  )
}