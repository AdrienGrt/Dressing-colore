"use client"

import { useState, useMemo } from "react"
import { products, categoryLabels } from "@/data/products"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
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
  ShieldCheck
} from "lucide-react"

type SortOption = "name" | "price-asc" | "price-desc" | "popular"
type ViewMode = "grid" | "large"

// Configuration des catégories avec couleurs et icônes
const categoryConfig: Record<ProductCategory | "all", { 
  label: string
  icon: string
  gradient: string
  count?: number 
}> = {
  all: { 
    label: "Tout voir", 
    icon: "✨", 
    gradient: "from-rose-500 to-orange-500" 
  },
  tissus: { 
    label: "Tissus & Textiles", 
    icon: "🧵", 
    gradient: "from-rose-500 to-pink-500" 
  },
  accessoires: { 
    label: "Accessoires", 
    icon: "✂️", 
    gradient: "from-orange-500 to-amber-500" 
  },
  machines: { 
    label: "Machines & Outils", 
    icon: "⚙️", 
    gradient: "from-slate-600 to-slate-800" 
  },
  patrons: { 
    label: "Patrons & Modèles", 
    icon: "👗", 
    gradient: "from-purple-500 to-violet-500" 
  },
  kits: { 
    label: "Kits Complets", 
    icon: "🎁", 
    gradient: "from-emerald-500 to-teal-500" 
  },
}

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | "all">("all")
  const [sortBy, setSortBy] = useState<SortOption>("popular")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Compter les produits par catégorie
  const categoryCounts = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [])

  // Filtrer et trier les produits
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
      })
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name)
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        if (sortBy === "popular") return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        return 0
      })
  }, [selectedCategory, sortBy, searchQuery])

  const categories = Object.entries(categoryConfig) as [ProductCategory | "all", typeof categoryConfig["all"]][]

  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      {/* Hero Header */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg shadow-rose-500/25">
              <Package className="h-4 w-4" />
              <span className="text-sm font-semibold">{products.length} produits disponibles</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
              Notre{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Boutique
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed mb-8">
              Découvrez notre sélection de tissus premium, accessoires de couture 
              et tout le nécessaire pour vos créations les plus colorées.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <Zap className="h-4 w-4 text-amber-500" />
                Livraison 48h
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Paiement sécurisé SumUp
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-700">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                4.9/5 (2400 avis)
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
                  {categories.map(([value, config]) => {
                    const count = value === "all" ? products.length : categoryCounts[value] || 0
                    const isActive = selectedCategory === value

                    return (
                      <button
                        key={value}
                        onClick={() => setSelectedCategory(value)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${
                          isActive 
                            ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg` 
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span className={`text-xl transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                          {config.icon}
                        </span>
                        <span className="flex-1 font-medium text-sm">{config.label}</span>
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

                {/* Promo Banner in Sidebar */}
                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="text-3xl mb-2">🎉</div>
                    <h3 className="font-bold text-lg mb-1">-20% 1ère commande</h3>
                    <p className="text-sm text-white/80">Code: BIENVENUE20</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Results count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-600">
                  <span className="font-bold text-slate-900">{filteredProducts.length}</span> produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
                </p>
                
                {selectedCategory !== "all" && (
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="text-sm font-medium text-rose-600 hover:text-rose-700 flex items-center gap-1"
                  >
                    Voir tout
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
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <ProductCard product={product} />
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
                      setSearchQuery("")
                    }}
                    className="bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-6"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}

              {/* Load More / Pagination placeholder */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <p className="text-slate-500 text-sm mb-4">
                    Vous avez vu {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
                  </p>
                  <div className="inline-flex items-center gap-2 text-rose-600 font-medium">
                    <Sparkles className="h-4 w-4" />
                    Tous les produits sont affichés
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Une question ? Besoin de conseils ?
              </h2>
              <p className="text-slate-300">
                Notre équipe est là pour vous accompagner dans vos projets créatifs
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 shadow-lg shadow-rose-500/25"
              >
                Nous contacter
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                FAQ
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