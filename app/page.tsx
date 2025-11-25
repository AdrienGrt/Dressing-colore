"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Scissors, Sparkles, Heart, Star, Check, Package, Zap, ChevronDown, ShoppingBag } from "lucide-react"

export default function HomePage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFBF7]">
      {/* Hero Section - Clean & Impactful */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
        
        {/* Floating decorative elements - subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[10%] w-3 h-3 rounded-full bg-rose-400/60 animate-float-gentle" />
          <div className="absolute top-48 right-[15%] w-2 h-2 rounded-full bg-orange-400/60 animate-float-gentle-delayed" />
          <div className="absolute bottom-40 left-[20%] w-4 h-4 rounded-full bg-purple-400/40 animate-float-gentle" />
          <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-pink-400/50 animate-float-gentle-delayed" />
          
          {/* Decorative scissors */}
          <Scissors className="absolute top-28 left-[8%] h-8 w-8 text-rose-300/50 rotate-45 animate-float-gentle" />
          <Sparkles className="absolute bottom-32 right-[12%] h-6 w-6 text-orange-300/50 animate-pulse-soft" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-rose-200 rounded-full px-5 py-2 mb-8 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 animate-pulse" />
              <span className="text-sm font-semibold text-rose-700 tracking-wide">Mercerie & Tissus Premium</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
              <span className="block text-slate-900">Tissus</span>
              <span className="block bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Colorés
              </span>
              <span className="block text-slate-900">&amp; Créations</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-100">
              Votre boutique de couture en ligne : tissus éclatants, fils premium, 
              boutons uniques et tout pour créer avec style.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Stock disponible
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                <Zap className="h-3.5 w-3.5" />
                Livraison 48h
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                <Star className="h-3.5 w-3.5 fill-current" />
                4.9/5 • 2,400 avis
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Button size="lg" asChild className="group text-lg px-8 py-6 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white border-0 shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 rounded-full">
                <Link href="/shop">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-rose-300 rounded-full transition-all duration-300">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-20 animate-fade-in-up animation-delay-400">
              {[
                { value: "500+", label: "Produits", color: "rose" },
                { value: "10k+", label: "Créatrices", color: "orange" },
                { value: "4.9", label: "Note moyenne", color: "amber", icon: Star }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 bg-clip-text text-transparent flex items-center justify-center gap-1`}>
                    {stat.value}
                    {stat.icon && <stat.icon className="h-5 w-5 md:h-6 md:w-6 fill-amber-500 text-amber-500" />}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="h-6 w-6 text-slate-400" />
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-rose-50/50 via-white to-orange-50/30">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-lg shadow-rose-500/25">
                <Sparkles className="h-4 w-4" />
                Collection Printemps 2025
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                Des tissus qui racontent{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    votre histoire
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop stopColor="#f43f5e"/>
                        <stop offset="1" stopColor="#f97316"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Plongez dans un <span className="font-semibold text-rose-600">arc-en-ciel de possibilités</span> ! 
                Nos tissus premium sont sélectionnés pour leur qualité exceptionnelle et leurs couleurs vibrantes.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: "✓", text: "Tissus certifiés Oeko-Tex", subtext: "Standard 100", gradient: "from-emerald-400 to-teal-500" },
                  { icon: "🚚", text: "Livraison express", subtext: "48h en France", gradient: "from-blue-400 to-cyan-500" },
                  { icon: "💬", text: "Conseils d'expert", subtext: "Téléphone ou chat", gradient: "from-rose-400 to-pink-500" },
                  { icon: "↩️", text: "Satisfait ou remboursé", subtext: "30 jours", gradient: "from-orange-400 to-amber-500" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 cursor-default"
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-lg font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{item.text}</div>
                      <div className="text-sm text-slate-500">{item.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="group text-base px-8 py-6 bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full transition-all duration-300 shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30">
                <Link href="/about">
                  En savoir plus
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image composition */}
            <div className="relative order-1 lg:order-2">
              {/* Main image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-orange-500 rounded-[2rem] rotate-3 scale-[1.02] opacity-20" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="https://images.unsplash.com/photo-1622532470022-24107cac5ef3?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Tissus colorés de qualité premium"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Floating card - Colors */}
              <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-2xl p-5 animate-float-gentle border border-slate-100/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rose-500 via-purple-500 to-orange-500 flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-slate-900">+200</div>
                    <div className="text-sm text-slate-500 font-medium">coloris en stock</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card - Discount */}
              <div className="absolute -top-4 -right-4 md:-right-8 animate-float-gentle-delayed">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl shadow-xl p-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative text-center">
                      <div className="text-4xl font-black">-20%</div>
                      <div className="text-sm font-semibold opacity-90">1ère commande</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small floating elements */}
              <div className="absolute top-1/4 -left-4 w-8 h-8 bg-rose-500 rounded-lg rotate-12 opacity-80 animate-float-gentle" />
              <div className="absolute bottom-1/3 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-float-gentle-delayed" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-slate-600 tracking-wide">Nos Rayons</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Explorez nos{" "}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                catégories
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Un univers de couleurs et de créativité pour tous vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: "🧵",
                title: "Tissus",
                desc: "Coton, lin, jersey, soie...",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop",
                badge: "500+ références",
                gradient: "from-rose-500 to-pink-500"
              },
              {
                emoji: "✂️",
                title: "Accessoires",
                desc: "Fils, boutons, fermetures",
                image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=400&h=300&fit=crop",
                badge: "Toutes marques",
                gradient: "from-orange-500 to-amber-500"
              },
              {
                emoji: "🪡",
                title: "Machines",
                desc: "Machines et surjeteuses",
                image: "https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?w=400&h=300&fit=crop",
                badge: "Garantie 2 ans",
                gradient: "from-purple-500 to-violet-500"
              },
              {
                emoji: "👗",
                title: "Patrons",
                desc: "Du débutant à l'expert",
                image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop",
                badge: "PDF instantané",
                gradient: "from-blue-500 to-cyan-500"
              }
            ].map((cat, i) => (
              <Link 
                href="/shop"
                key={i} 
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                    {cat.badge}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 text-5xl group-hover:scale-110 transition-transform duration-300">
                    {cat.emoji}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-rose-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">{cat.desc}</p>
                  <div className="flex items-center text-sm font-semibold text-rose-600">
                    Découvrir
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Enhanced */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full px-5 py-2 mb-5 text-sm font-semibold shadow-lg shadow-orange-500/25">
                <Star className="h-4 w-4 fill-white" />
                Coups de cœur
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
                Nos{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    best-sellers
                  </span>
                  <Sparkles className="absolute -top-2 -right-6 h-6 w-6 text-amber-400 animate-pulse-soft" />
                </span>
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-xl">
                Les produits préférés de notre communauté créative
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="hidden lg:flex bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-rose-300 hover:bg-white rounded-full transition-all group shadow-sm">
              <Link href="/shop">
                Voir toute la collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Products Grid - Custom styled cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                emoji: "🧵",
                name: "Coton Bio Premium",
                description: "Tissu 100% coton biologique, parfait pour vêtements et accessoires",
                price: "15",
                originalPrice: "19",
                badge: "Bestseller",
                badgeColor: "from-rose-500 to-pink-500",
                rating: 4.9,
                reviews: 234,
                colors: ["#f43f5e", "#fb923c", "#a855f7", "#3b82f6", "#22c55e"]
              },
              {
                emoji: "🪢",
                name: "Jersey Stretch",
                description: "Jersey extensible confortable, idéal pour t-shirts et robes",
                price: "18",
                badge: "Nouveau",
                badgeColor: "from-blue-500 to-cyan-500",
                rating: 4.8,
                reviews: 156,
                colors: ["#1e293b", "#f8fafc", "#f43f5e", "#8b5cf6"]
              },
              {
                emoji: "🎨",
                name: "Coffret Fils à Coudre",
                description: "36 bobines de fil polyester haute qualité, toutes couleurs",
                price: "24",
                originalPrice: "32",
                badge: "-25%",
                badgeColor: "from-orange-500 to-amber-500",
                rating: 5.0,
                reviews: 89,
                colors: null
              },
              {
                emoji: "⚙️",
                name: "Surjeteuse 4 Fils",
                description: "Surjeteuse professionnelle pour finitions impeccables",
                price: "320",
                badge: "Pro",
                badgeColor: "from-slate-700 to-slate-900",
                rating: 4.9,
                reviews: 67,
                colors: null
              },
              {
                emoji: "🎁",
                name: "Kit Débutant Complet",
                description: "Tout le nécessaire pour commencer : fils, aiguilles, ciseaux, mètre",
                price: "65",
                badge: "Idée cadeau",
                badgeColor: "from-purple-500 to-pink-500",
                rating: 4.7,
                reviews: 312,
                colors: null
              },
              {
                emoji: "✨",
                name: "Lin Lavé Premium",
                description: "Lin naturel pré-lavé, texture douce et tombé élégant",
                price: "28",
                badge: "Tendance",
                badgeColor: "from-emerald-500 to-teal-500",
                rating: 4.8,
                reviews: 178,
                colors: ["#fef3c7", "#d6d3d1", "#fce7f3", "#dbeafe", "#dcfce7"]
              }
            ].map((product, i) => (
              <div 
                key={i} 
                className="group relative bg-white rounded-3xl border border-slate-200/80 hover:border-rose-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50 hover:-translate-y-2"
              >
                {/* Badge */}
                <div className={`absolute top-4 left-4 z-10 bg-gradient-to-r ${product.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                  {product.badge}
                </div>
                
                {/* Wishlist button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-rose-50">
                  <Heart className="h-5 w-5 text-slate-400 hover:text-rose-500 transition-colors" />
                </button>

                {/* Product visual area */}
                <div className="relative h-48 bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,113,133,0.1),transparent_70%)] group-hover:scale-150 transition-transform duration-700" />
                  <span className="text-7xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 drop-shadow-lg">
                    {product.emoji}
                  </span>
                </div>

                {/* Product info */}
                <div className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star 
                          key={j} 
                          className={`h-4 w-4 ${j < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{product.rating}</span>
                    <span className="text-sm text-slate-400">({product.reviews} avis)</span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  {/* Colors if available */}
                  {product.colors && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">Couleurs:</span>
                      <div className="flex gap-1.5">
                        {product.colors.map((color, j) => (
                          <div 
                            key={j}
                            className="w-5 h-5 rounded-full border-2 border-white shadow-sm hover:scale-125 transition-transform cursor-pointer"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                        {product.colors.length >= 5 && (
                          <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                            +
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-slate-900">{product.price}€</span>
                      {product.originalPrice && (
                        <span className="text-lg text-slate-400 line-through">{product.originalPrice}€</span>
                      )}
                    </div>
                  </div>

                  {/* Add to cart button */}
                  <button className="w-full py-3.5 px-6 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-rose-500 hover:to-orange-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 hover:shadow-rose-500/25 group/btn">
                    <ShoppingBag className="h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center lg:hidden">
            <Button variant="outline" size="lg" asChild className="bg-white border-2 border-slate-200 hover:border-rose-300 rounded-full">
              <Link href="/shop">
                Voir toute la collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Rejoignez l'aventure</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prête à colorer votre monde ?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Rejoignez notre communauté de{" "}
              <span className="font-bold">10 000+ créatrices</span>{" "}
              qui donnent vie à leurs rêves colorés chaque jour !
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group text-lg px-8 py-6 bg-white text-rose-600 hover:bg-white/95 shadow-xl rounded-full font-semibold transition-all">
                <Link href="/shop">
                  Commencer à créer
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 rounded-full font-semibold transition-all">
                <Link href="/contact">Nous écrire</Link>
              </Button>
            </div>

            {/* Trust elements */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { icon: Check, text: "Paiement sécurisé" },
                { icon: Package, text: "Livraison suivie" },
                { icon: Heart, text: "Service 7j/7" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <item.icon className="h-4 w-4" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-1.5 mb-6 text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Newsletter
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Restez{" "}
              <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                inspirée
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Nouveautés, tutoriels et{" "}
              <span className="font-bold text-orange-600">-10% sur votre prochaine commande</span> !
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-5 py-3.5 rounded-full border-2 border-slate-200 focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-100 text-base bg-white transition-all"
              />
              <Button size="lg" type="submit" className="px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 font-semibold shadow-lg shadow-rose-500/25">
                Je m'inscris
              </Button>
            </form>
            
            <p className="text-sm text-slate-500 mt-4 flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              Pas de spam • +15 000 abonnées
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-[#FFFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-2 rounded-xl">
                  <Scissors className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Le Dressing Coloré</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Votre partenaire créatif pour tous vos projets couture depuis 2020.
              </p>
              <div className="flex gap-2 pt-2">
                {["📷", "👍", "📌"].map((emoji, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-100 flex items-center justify-center transition-colors text-sm"
                  >
                    {emoji}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Navigation</h4>
              <ul className="space-y-2.5">
                {[
                  { href: "/shop", label: "Boutique" },
                  { href: "/about", label: "À propos" },
                  { href: "/contact", label: "Contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-slate-600 hover:text-rose-600 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Informations</h4>
              <ul className="space-y-2.5">
                {["Livraison & Retours", "Paiement sécurisé", "CGV"].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-slate-600 hover:text-rose-600 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Service Client</h4>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li>📞 01 23 45 67 89</li>
                <li>✉️ contact@dressing-colore.fr</li>
                <li>🕐 Lun-Ven • 9h-18h</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © 2025 Le Dressing Coloré • Fait avec <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" /> pour les passionnées
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">Mentions légales</a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">Confidentialité</a>
              <a href="#" className="text-slate-500 hover:text-slate-700 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Optimized animations - GPU accelerated, reduced complexity */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .font-display {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        
        /* Smooth, performant animations */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
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
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-soft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
        
        .animate-float-gentle-delayed {
          animation: float-gentle-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-pulse-soft {
          animation: pulse-soft 3s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Better text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Reduced motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  )
}