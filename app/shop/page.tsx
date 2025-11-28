"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { products, categoryLabels, categoryIcons, sizeLabels } from "@/data/products"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import type { ProductCategory } from "@/lib/types"
import { 
  Filter, 
  ArrowUpDown, 
  Sparkles, 
  Grid3X3, 
  LayoutGrid,
  Search,
  SlidersHorizontal,
  Package,
  ChevronDown,
  Star,
  Zap,
  ShieldCheck,
  Heart,
  ShoppingBag,
  Eye
} from "lucide-react"

type SortOption = "name" | "price-asc" | "price-desc" | "popular"
type ViewMode = "grid" | "large"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")
  const [selectedSize, setSelectedSize] = useState<string | "all">("all")
  const [sortBy, setSortBy] = useState<SortOption>("popular")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [showFilters, setShowFilters] = useState(false)
  const { addItem } = useCart()

  // Compter les produits par catégorie
  const categoryCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [])

  // Compter les produits par taille
  const sizeCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.size] = (acc[product.size] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [])

  // Filtrer et trier les produits
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
        const matchesSize = selectedSize === "all" || product.size === selectedSize
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSize && matchesSearch
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name)
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        if (sortBy === "popular") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        return 0
      })
  }, [selectedCategory, selectedSize, sortBy, searchQuery])

  const categories: { value: ProductCategory | "all"; label: string; icon: string }[] = [
    { value: "all", label: "Tout voir", icon: "✨" },
    { value: "manteaux", label: "Manteaux", icon: "🧥" },
    { value: "vestes", label: "Vestes", icon: "🧥" },
    { value: "gilets", label: "Gilets", icon: "🦺" },
    { value: "accessoires", label: "Accessoires", icon: "✨" },
  ]

  const sizes = ["all", "XL", "L", "M", "S"]

  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg shadow-rose-500/25">
              <Package className="h-4 w-4" />
              <span className="text-sm font-semibold">{products.length} pièces uniques disponibles</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Collection
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
              Découvrez nos vêtements réversibles artisanaux, confectionnés à la main 
              dans le Sud-Ouest. Chaque pièce est unique et ne sera jamais reproduite.
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <Zap className="h-4 w-4 text-amber-500" />
                Livraison 48h
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Paiement sécurisé
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                Confection artisanale
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Shop Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          {/* Search & Filters Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 mb-8 sticky top-20 z-30">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-100 text-base transition-all"
                />
              </div>

              {/* Filter Toggle (Mobile) */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 rounded-xl border-slate-200"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filtres
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>

              {/* Sort & View (Desktop) */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Size Filter */}
                <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2">
                  <span className="text-sm text-slate-500">Taille:</span>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="all">Toutes</option>
                    {sizes.filter(s => s !== "all").map(size => (
                      <option key={size} value={size}>{size} ({sizeCounts[size] || 0})</option>
                    ))}
                  </select>
                </div>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2">
                  <ArrowUpDown className="h-4 w-4 text-slate-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="bg-transparent text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
                  >
                    <option value="popular">Populaires</option>
                    <option value="name">Nom A-Z</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center bg-slate-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-rose-600" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("large")}
                    className={`p-2 rounded-lg transition-all ${viewMode === "large" ? "bg-white shadow-sm text-rose-600" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="lg:hidden mt-4 pt-4 border-t border-slate-200 space-y-4">
                <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2">
                  <span className="text-sm text-slate-500">Taille:</span>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="flex-1 bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="all">Toutes</option>
                    {sizes.filter(s => s !== "all").map(size => (
                      <option key={size} value={size}>{size} ({sizeCounts[size] || 0})</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-4 py-2">
                  <ArrowUpDown className="h-4 w-4 text-slate-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="flex-1 bg-transparent text-sm font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="popular">Populaires</option>
                    <option value="name">Nom A-Z</option>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-40">
                <div className="flex items-center gap-2 mb-5">
                  <Filter className="h-5 w-5 text-rose-500" />
                  <h2 className="font-bold text-slate-900">Catégories</h2>
                </div>

                <div className="space-y-2">
                  {categories.map((cat) => {
                    const count = cat.value === "all" ? products.length : categoryCounts[cat.value] || 0
                    const isActive = selectedCategory === cat.value

                    return (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                          isActive 
                            ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg" 
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className={`text-xl transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                          {cat.icon}
                        </span>
                        <span className="flex-1 font-medium text-sm">{cat.label}</span>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          isActive 
                            ? "bg-white/20 text-white" 
                            : "bg-slate-100 text-slate-500"
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>

                {/* Sizes in Sidebar */}
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-4">Tailles</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => {
                      const count = size === "all" ? products.length : sizeCounts[size] || 0
                      const isActive = selectedSize === size
                      
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          {size === "all" ? "Toutes" : size}
                          <span className="ml-1 opacity-70">({count})</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Promo Banner */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">🎉</div>
                    <h3 className="font-bold text-lg mb-1">Pièces Uniques</h3>
                    <p className="text-sm text-white/80">Chaque création est l'unique exemplaire existant</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-600">
                  <span className="font-bold text-slate-900">{filteredProducts.length}</span> pièce{filteredProducts.length > 1 ? "s" : ""} trouvée{filteredProducts.length > 1 ? "s" : ""}
                </p>
                
                {(selectedCategory !== "all" || selectedSize !== "all") && (
                  <button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedSize("all")
                    }}
                    className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1"
                  >
                    Réinitialiser
                    <Sparkles className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Products */}
              {filteredProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1 sm:grid-cols-2"
                }`}>
                  {filteredProducts.map((product, index) => (
                    <div 
                      key={product.id}
                      className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-rose-200 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Image */}
                      <Link href={`/shop/${product.id}`} className="block relative aspect-[4/5] overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                            Pièce Unique
                          </span>
                          {product.featured && (
                            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                              ⭐ Coup de cœur
                            </span>
                          )}
                        </div>

                        {/* Size Badge */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-slate-700 shadow">
                          {product.size}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <Button
                            size="sm"
                            className="flex-1 bg-white/95 backdrop-blur-sm text-slate-900 hover:bg-white rounded-full shadow-lg"
                            asChild
                          >
                            <Link href={`/shop/${product.id}`}>
                              <Eye className="h-4 w-4 mr-1" />
                              Voir
                            </Link>
                          </Button>
                          <button className="w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-rose-50 transition-colors">
                            <Heart className="h-4 w-4 text-slate-600 hover:text-rose-500" />
                          </button>
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                            {categoryLabels[product.category]}
                          </span>
                        </div>

                        <Link href={`/shop/${product.id}`}>
                          <h3 className="font-bold text-lg text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2 mb-2">
                            {product.name}
                          </h3>
                        </Link>

                        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                          {product.shortDescription}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-black text-slate-900">{product.price}€</span>
                          <Button
                            onClick={() => addItem(product)}
                            size="sm"
                            className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full shadow"
                          >
                            <ShoppingBag className="h-4 w-4 mr-1" />
                            Ajouter
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Aucun produit trouvé</h3>
                  <p className="text-slate-500 mb-6">
                    Essayez de modifier vos critères de recherche
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSelectedSize("all")
                      setSearchQuery("")
                    }}
                    className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-6"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}

              {/* Results Info */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <p className="text-slate-500 text-sm mb-4">
                    Vous avez vu {filteredProducts.length} pièce{filteredProducts.length > 1 ? "s" : ""} unique{filteredProducts.length > 1 ? "s" : ""}
                  </p>
                  <div className="inline-flex items-center gap-2 text-rose-600 font-medium">
                    <Sparkles className="h-4 w-4" />
                    Toutes les pièces sont affichées
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Une question ? Besoin de conseils ?
              </h2>
              <p className="text-slate-300">
                Je suis là pour vous accompagner dans votre choix
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 shadow-lg shadow-rose-500/25"
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/entretien">Guide d'entretien</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  )
}