"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { products, categoryLabels } from "@/data/products"
import { useCart } from "@/lib/cart-context"
import { 
  ArrowLeft, 
  Heart, 
  ShoppingBag, 
  Check, 
  Truck, 
  Shield, 
  RotateCcw,
  Sparkles,
  ChevronRight,
  Star,
  Scissors,
  Droplets,
  MapPin
} from "lucide-react"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find(p => p.id === productId)
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem, isInCart } = useCart()

  if (!product) {
    notFound()
  }

  const alreadyInCart = isInCart(product.id)

  const handleAddToCart = () => {
    if (alreadyInCart) return
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      {/* Breadcrumb */}
     

      {/* Product Section */}
      <section className="py-6 mt-30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
            
            {/* Images */}
            <div className="lg:sticky lg:top-24 space-y-2">
              {/* Main Image */}
              <div className="relative aspect-[4/5] max-h-[520px] rounded-xl overflow-hidden bg-slate-100 shadow-md">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                
                <div className="absolute top-2 left-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
                  ✨ Pièce Unique
                </div>

                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-rose-50 transition-colors group">
                  <Heart className="h-4 w-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                </button>

                <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full shadow text-xs font-bold text-slate-900">
                  Taille {product.size}
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-1.5">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-12 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-rose-500 ring-1 ring-rose-200' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Vue ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              {/* Category Badge */}
              <div className="flex items-center gap-1.5">
                <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-full">
                  {categoryLabels[product.category]}
                </span>
                {product.featured && (
                  <span className="bg-amber-100 text-amber-700 text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <Star className="h-2.5 w-2.5 fill-amber-500" />
                    Coup de cœur
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-display text-lg md:text-xl font-bold text-slate-900 leading-tight">
                {product.name}
              </h1>

              {/* Short Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Price & Stock */}
              <div className="flex items-center justify-between py-3 border-y border-slate-200">
                <div>
                  <span className="text-2xl font-black text-slate-900">{product.price}€</span>
                  <p className="text-[10px] text-slate-500">Livraison offerte dès 50€</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-1 rounded-full">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-emerald-700">En stock</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-2">
                <Button
                  onClick={handleAddToCart}
                  disabled={isAdded || alreadyInCart}
                  size="sm"
                  className={`flex-1 py-4 text-sm font-semibold rounded-lg transition-all ${
                    isAdded || alreadyInCart
                      ? 'bg-emerald-500 hover:bg-emerald-500' 
                      : 'bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600'
                  } text-white shadow`}
                >
                  {alreadyInCart ? (
                    <>
                      <Check className="h-4 w-4 mr-1.5" />
                      Déjà dans le panier
                    </>
                  ) : isAdded ? (
                    <>
                      <Check className="h-4 w-4 mr-1.5" />
                      Ajouté !
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4 mr-1.5" />
                      Ajouter au panier
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-10 p-0 rounded-lg border border-slate-200 hover:border-rose-300 hover:bg-rose-50"
                >
                  <Heart className="h-4 w-4 text-slate-400" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg text-[10px]">
                <div className="flex items-center gap-1 text-slate-600">
                  <Truck className="h-3 w-3 text-blue-500" />
                  <span>Livraison 48h</span>
                </div>
                <div className="w-px h-3 bg-slate-300" />
                <div className="flex items-center gap-1 text-slate-600">
                  <Shield className="h-3 w-3 text-emerald-500" />
                  <span>Paiement sécurisé</span>
                </div>
                <div className="w-px h-3 bg-slate-300" />
                <div className="flex items-center gap-1 text-slate-600">
                  <RotateCcw className="h-3 w-3 text-orange-500" />
                  <span>Retour 30j</span>
                </div>
              </div>

              {/* Faces */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-lg p-3 border border-rose-100">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-5 h-5 bg-gradient-to-br from-rose-500 to-orange-500 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">1</span>
                    </div>
                    <h3 className="font-bold text-xs text-slate-900 truncate">{product.details.face1.name}</h3>
                  </div>
                  <p className="text-[10px] text-slate-500">{product.details.face1.composition}</p>
                  <p className="text-[10px] text-slate-600 mt-1 line-clamp-2">{product.details.face1.description}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-100">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">2</span>
                    </div>
                    <h3 className="font-bold text-xs text-slate-900 truncate">{product.details.face2.name}</h3>
                  </div>
                  <p className="text-[10px] text-slate-500">{product.details.face2.composition}</p>
                  <p className="text-[10px] text-slate-600 mt-1 line-clamp-2">{product.details.face2.description}</p>
                </div>
              </div>

              {/* Caractéristiques */}
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <h3 className="font-bold text-xs text-slate-900 mb-2 flex items-center gap-1.5">
                  <Scissors className="h-3 w-3 text-slate-500" />
                  Caractéristiques
                </h3>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
                  <div className="flex items-center gap-1">
                    <Check className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-600 truncate"><strong>Coupe :</strong> {product.details.coupe}</span>
                  </div>
                  {product.details.manches && (
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 truncate"><strong>Manches :</strong> {product.details.manches}</span>
                    </div>
                  )}
                  {product.details.col && (
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 truncate"><strong>Col :</strong> {product.details.col}</span>
                    </div>
                  )}
                  {product.details.fermeture && (
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 truncate"><strong>Fermeture :</strong> {product.details.fermeture}</span>
                    </div>
                  )}
                  {product.details.poches && (
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-600 truncate"><strong>Poches :</strong> {product.details.poches}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Entretien & Confection */}
              <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 rounded-lg p-2.5 border border-blue-100">
                  <div className="flex items-center gap-1 mb-1">
                    <Droplets className="h-3 w-3 text-blue-600" />
                    <h3 className="font-bold text-[10px] text-slate-900">Entretien</h3>
                  </div>
                  <p className="text-[10px] text-slate-600 line-clamp-2">{product.details.entretien}</p>
                  <Link 
                    href="/entretien" 
                    className="inline-flex items-center text-[10px] text-blue-600 font-medium mt-1 hover:underline"
                  >
                    Guide complet
                    <ChevronRight className="h-2.5 w-2.5" />
                  </Link>
                </div>

                <div className="flex-1 bg-emerald-50 rounded-lg p-2.5 border border-emerald-100">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="h-3 w-3 text-emerald-600" />
                    <h3 className="font-bold text-[10px] text-slate-900">Confection</h3>
                  </div>
                  <p className="text-[10px] text-slate-600 line-clamp-2">{product.details.confection}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-base font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-rose-500" />
              À propos de cette pièce
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </section>

      {/* Style Tips */}
      <section className="py-6 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-base font-bold text-slate-900 mb-4 flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-500" />
              Comment porter cette pièce ?
            </h2>

            <div className="grid sm:grid-cols-2 gap-2">
              {product.styleTips.map((tip, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-3 border border-slate-200 hover:border-rose-200 transition-all"
                >
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 bg-gradient-to-br from-rose-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-bold">{index + 1}</span>
                    </span>
                    <p className="text-xs text-slate-600">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-sm font-bold text-white text-center mb-3">
              Pourquoi craquer ?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {product.highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white/15 backdrop-blur-sm rounded-lg p-2 border border-white/20 text-center"
                >
                  <p className="text-[11px] font-medium text-white">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-base font-bold text-slate-900">
                  Vous aimerez aussi
                </h2>
                <Link 
                  href={`/shop?category=${product.category}`}
                  className="text-rose-600 text-xs font-medium hover:underline flex items-center"
                >
                  Voir tout
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {similarProducts.map((item) => (
                  <Link 
                    key={item.id}
                    href={`/shop/${item.id}`}
                    className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md hover:border-rose-200 transition-all"
                  >
                    <div className="relative aspect-[3/4]">
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-1.5 right-1.5 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                        {item.size}
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="font-medium text-xs text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-sm font-bold text-slate-900 mt-1">{item.price}€</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Shop */}
      <section className="py-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <Link 
            href="/shop"
            className="inline-flex items-center gap-1.5 text-slate-600 hover:text-rose-600 transition-colors font-medium text-xs"
          >
            <ArrowLeft className="h-3 w-3" />
            Retour à la boutique
          </Link>
        </div>
      </section>
    </main>
  )
}