"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Heart, Star, Check, Package, ChevronDown, ShoppingBag, Palette, Repeat, Award } from "lucide-react"
import { products, categoryLabels } from "@/data/products"

// Récupérer les produits featured ou les 3 premiers (côté module, pas dans le composant)
const featuredProducts = products.filter(p => p.featured).slice(0, 3)
const displayProducts = featuredProducts.length >= 3 ? featuredProducts : products.slice(0, 3)

export default function HomePage() {

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFFBF7]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        
        {/* Banner image - positioned at bottom third */}
        <div className="absolute top-10 left-0 right-0 h-2/3">
        <Image
            src="/baniere-accueil.jpeg"
            alt="Le Dressing Coloré - Collection Étoiles"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-32 left-[10%] w-3 h-3 rounded-full bg-rose-400/60 animate-float-gentle" />
          <div className="absolute top-48 right-[15%] w-2 h-2 rounded-full bg-blue-400/60 animate-float-gentle-delayed" />
          <div className="absolute bottom-[40%] left-[20%] w-4 h-4 rounded-full bg-amber-400/40 animate-float-gentle" />
          <div className="absolute top-1/3 right-[8%] w-2 h-2 rounded-full bg-pink-400/50 animate-float-gentle-delayed" />
          
          {/* Decorative stars */}
          <Star className="absolute top-28 left-[8%] h-6 w-6 text-amber-300/50 fill-amber-300/30 animate-float-gentle" />
          <Sparkles className="absolute bottom-[40%] right-[12%] h-6 w-6 text-rose-300/50 animate-pulse-soft" />
          <Star className="absolute top-1/2 left-[5%] h-4 w-4 text-blue-300/40 fill-blue-300/20 animate-float-gentle-delayed" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-5 py-2 mb-8 shadow-sm animate-fade-in">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-sm font-semibold text-amber-700 tracking-wide">Collection Étoiles 2025-2026</span>
            </div>

            {/* Main heading */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="block text-white drop-shadow-lg">Bienvenue dans</span>
                          <span className="block bg-gradient-to-r from-rose-500 via-blue-500 to-amber-500 bg-clip-text text-transparent">
                votre nouveau
              </span>
              <span className="block text-white drop-shadow-lg">Dressing Coloré!</span>
                          </h1>

                          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-100 drop-shadow-md">              Vêtements réversibles artisanaux qui célèbrent l'individualité par la couleur et l'unicité. 
              Chaque création associe wax africain 100% coton et bouclette dans un travail de confection exigeant.
            </p>

            {/* Key features badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-2 bg-rose-50 text-rose-700 px-4 py-2 rounded-full text-sm font-medium border border-rose-200">
                <Repeat className="h-3.5 w-3.5" />
                Réversible
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
                <Award className="h-3.5 w-3.5" />
                Artisanal
              </div>
              <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
                <Star className="h-3.5 w-3.5 fill-current" />
                Édition limitée
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Button size="lg" asChild className="group text-lg px-8 py-6 bg-gradient-to-r from-rose-500 via-blue-500 to-amber-500 hover:from-rose-600 hover:via-blue-600 hover:to-amber-600 text-white border-0 shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 transition-all duration-300 rounded-full">
                <Link href="/shop">
                  Voir les étoiles de la boutique
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
                { value: "3", label: "exemplaires max", color: "rose" },
                { value: "100%", label: "Coton & Wax", color: "blue" },
                { value: "Unique", label: "Chaque pièce", color: "amber", icon: Star }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 bg-clip-text text-transparent flex items-center justify-center gap-1`}>
                    {stat.value}
                    {stat.icon && <stat.icon className="h-4 w-4 md:h-5 md:w-5 fill-amber-500 text-amber-500" />}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-gentle z-20">
          <ChevronDown className="h-6 w-6 text-white" />
        </div>
      </section>

      {/* Collection Étoiles Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Decorative stars background - positions fixes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Star className="absolute h-2 w-2 text-white/20 fill-white/10 top-[10%] left-[5%]" />
          <Star className="absolute h-3 w-3 text-white/15 fill-white/10 top-[20%] left-[15%]" />
          <Star className="absolute h-2 w-2 text-white/25 fill-white/15 top-[15%] left-[30%]" />
          <Star className="absolute h-4 w-4 text-white/10 fill-white/5 top-[25%] left-[45%]" />
          <Star className="absolute h-2 w-2 text-white/20 fill-white/10 top-[10%] left-[60%]" />
          <Star className="absolute h-3 w-3 text-white/15 fill-white/10 top-[30%] left-[75%]" />
          <Star className="absolute h-2 w-2 text-white/25 fill-white/15 top-[20%] left-[90%]" />
          <Star className="absolute h-3 w-3 text-white/10 fill-white/5 top-[50%] left-[8%]" />
          <Star className="absolute h-2 w-2 text-white/20 fill-white/10 top-[60%] left-[20%]" />
          <Star className="absolute h-4 w-4 text-white/15 fill-white/10 top-[45%] left-[35%]" />
          <Star className="absolute h-2 w-2 text-white/25 fill-white/15 top-[55%] left-[50%]" />
          <Star className="absolute h-3 w-3 text-white/10 fill-white/5 top-[65%] left-[65%]" />
          <Star className="absolute h-2 w-2 text-white/20 fill-white/10 top-[40%] left-[80%]" />
          <Star className="absolute h-3 w-3 text-white/15 fill-white/10 top-[70%] left-[92%]" />
          <Star className="absolute h-2 w-2 text-white/25 fill-white/15 top-[80%] left-[12%]" />
          <Star className="absolute h-4 w-4 text-white/10 fill-white/5 top-[85%] left-[28%]" />
          <Star className="absolute h-2 w-2 text-white/20 fill-white/10 top-[75%] left-[42%]" />
          <Star className="absolute h-3 w-3 text-white/15 fill-white/10 top-[90%] left-[58%]" />
          <Star className="absolute h-2 w-2 text-white/25 fill-white/15 top-[82%] left-[72%]" />
          <Star className="absolute h-3 w-3 text-white/10 fill-white/5 top-[88%] left-[85%]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-rose-400 to-blue-400 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-lg">
                <Star className="h-4 w-4 fill-white" />
                Collection Étoiles 2025-2026
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Pièces uniques en{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-blue-400 bg-clip-text text-transparent">
                    édition limitée
                  </span>
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                La première collection thématique du Dressing Coloré : <span className="font-semibold text-amber-400">Décembre 2025 — Novembre 2026</span>. 
                Chaque création porte un nom d'étoile (Vega, Sirius, Antarès...) et n'existe qu'en 3 exemplaires maximum.
              </p>

              {/* Le concept */}
              <div className="space-y-6 pt-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  Le concept
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Au Dressing Coloré, chaque année explore un nouvel univers. En 2025, je célèbre les étoiles. 
                  Chaque création porte un nom d'étoile et n'existe qu'en <span className="font-semibold text-white">3 exemplaires maximum</span>.
                </p>
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: Palette, text: "Association unique", subtext: "Wax africain & bouclette", gradient: "from-rose-400 to-pink-500" },
                  { icon: Repeat, text: "100% Réversible", subtext: "2 looks en 1", gradient: "from-blue-400 to-cyan-500" },
                  { icon: Award, text: "Confection artisanale", subtext: "Finitions soignées", gradient: "from-amber-400 to-orange-500" },
                  { icon: Star, text: "Rareté garantie", subtext: "Max 3 exemplaires", gradient: "from-purple-400 to-violet-500" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-default"
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.text}</div>
                      <div className="text-sm text-slate-400">{item.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild className="group text-base px-8 py-6 bg-gradient-to-r from-amber-400 via-rose-400 to-blue-400 hover:from-amber-500 hover:via-rose-500 hover:to-blue-500 text-white rounded-full transition-all duration-300 shadow-lg">
                <Link href="/shop">
                  Découvrir la collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Image composition */}
            <div className="relative order-1 lg:order-2">
              {/* Main image placeholder - tu mettras ta vraie image ici */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 via-rose-400 to-blue-400 rounded-[2rem] rotate-3 scale-[1.02] opacity-30" />
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/accueil-photo.jpeg"
                    alt="Vêtement réversible de la Collection Étoiles"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Floating card - Rareté */}
              <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white rounded-2xl shadow-2xl p-5 animate-float-gentle border border-slate-100/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center">
                      <Star className="h-7 w-7 text-white fill-white" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-2xl text-slate-900">Rareté</div>
                    <div className="text-sm text-slate-500 font-medium">3 ex. maximum</div>
                  </div>
                </div>
              </div>
              
              {/* Floating card - 2026 */}
              <div className="absolute -top-4 -right-4 md:-right-8 animate-float-gentle-delayed">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50" />
                  <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-2xl shadow-xl p-5 overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative text-center">
                      <div className="text-sm font-semibold opacity-90">Nouveau thème</div>
                      <div className="text-3xl font-black">2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'unicité Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold text-slate-600 tracking-wide">Ce qui nous rend unique</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              L'unicité par{" "}
              <span className="bg-gradient-to-r from-rose-500 via-blue-500 to-amber-500 bg-clip-text text-transparent">
                l'association des tissus
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Chaque nom d'étoile correspond à un type de vêtement avec une association unique de tissus wax et bouclette. 
              Chaque exemplaire possède ses propres finitions (couleur de fil, détails de couture, position du motif) 
              qui le rendent unique. Ce sont des déclinaisons et non des copies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🌟",
                title: "Artisanal",
                desc: "Chaque pièce est confectionnée à la main avec un soin particulier apporté aux finitions et aux détails.",
                gradient: "from-amber-500 to-orange-500"
              },
              {
                icon: "🔄",
                title: "Réversible",
                desc: "Wax africain d'un côté, bouclette douce de l'autre. Deux looks, une seule pièce.",
                gradient: "from-rose-500 to-pink-500"
              },
              {
                icon: "✨",
                title: "Unique",
                desc: "Maximum 3 exemplaires par création. Une fois épuisés ou l'année écoulée, la création disparaît définitivement.",
                gradient: "from-blue-500 to-purple-500"
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 p-8 text-center"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Rareté garantie callout */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-full blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center shadow-2xl">
                    <Award className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Rareté garantie!</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Je choisis mes tissus en petites quantités. Une fois épuisés ou l'année écoulée, la création disparaît définitivement. 
                    Si les tissus sont terminés avant d'avoir créé 3 exemplaires, l'étoile s'éteint. 
                    Une nouvelle association de tissus portera un nouveau nom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-rose-50/30 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-rose-500 text-white rounded-full px-5 py-2 mb-5 text-sm font-semibold shadow-lg shadow-orange-500/25">
                <Star className="h-4 w-4 fill-white" />
                Les étoiles de la boutique
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">
                Nos{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-rose-500 via-blue-500 to-amber-500 bg-clip-text text-transparent">
                    créations
                  </span>
                  <Sparkles className="absolute -top-2 -right-6 h-6 w-6 text-amber-400 animate-pulse-soft" />
                </span>
              </h2>
              <p className="text-lg text-slate-600 mt-4 max-w-xl">
                Découvrez les pièces uniques de la Collection Étoiles
              </p>
            </div>
            <Button variant="outline" size="lg" asChild className="hidden lg:flex bg-white/80 backdrop-blur-sm border-2 border-slate-200 hover:border-rose-300 hover:bg-white rounded-full transition-all group shadow-sm">
              <Link href="/shop">
                Voir toute la collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Products Grid - Vrais produits de la boutique */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayProducts.map((product) => (
              <Link 
                key={product.id}
                href={`/shop/${product.id}`}
                className="group relative bg-white rounded-3xl border border-slate-200/80 hover:border-rose-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-rose-100/50 hover:-translate-y-2"
              >
                {/* Badge pièce unique */}
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-400 to-rose-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Star className="h-3 w-3 fill-white" />
                  Pièce Unique
                </div>
                
                {/* Wishlist button */}
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-rose-50"
                >
                  <Heart className="h-5 w-5 text-slate-400 hover:text-rose-500 transition-colors" />
                </button>

                {/* Product image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Size & Category indicator */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                      Taille {product.size}
                    </span>
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700">
                      {categoryLabels[product.category]}
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-bold text-xl text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Reversible indicator */}
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <Repeat className="h-4 w-4" />
                    <span className="font-medium">Réversible</span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-black text-slate-900">{product.price}€</span>
                    <div className="py-2.5 px-5 bg-gradient-to-r from-slate-800 to-slate-900 group-hover:from-rose-500 group-hover:to-amber-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 text-sm">
                      <ShoppingBag className="h-4 w-4" />
                      Découvrir
                    </div>
                  </div>
                </div>
              </Link>
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

      {/* 2026 Teaser Section */}
      <section className="py-16 bg-gradient-to-r from-slate-100 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 mb-6 shadow-sm border border-slate-200">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-semibold text-slate-600">À venir</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              En décembre 2026, une nouvelle collection naîtra.
            </h3>
            <p className="text-lg text-slate-600">
              Le thème changera, mais <span className="font-semibold text-slate-900">l'exigence restera : rareté, artisanal, unicité.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-blue-500 to-amber-500" />
        
        {/* Stars pattern overlay - positions fixes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <Star className="absolute h-4 w-4 text-white fill-white top-[5%] left-[3%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[12%] left-[18%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[8%] left-[33%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[15%] left-[48%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[6%] left-[63%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[18%] left-[78%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[10%] left-[93%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[35%] left-[7%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[42%] left-[22%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[38%] left-[52%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[45%] left-[67%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[32%] left-[82%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[55%] left-[12%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[62%] left-[27%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[58%] left-[42%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[68%] left-[57%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[52%] left-[72%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[65%] left-[87%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[78%] left-[5%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[85%] left-[20%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[82%] left-[35%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[88%] left-[50%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[75%] left-[65%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[92%] left-[80%]" />
          <Star className="absolute h-4 w-4 text-white fill-white top-[80%] left-[95%]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
              <Star className="h-4 w-4 fill-white" />
              <span className="text-sm font-semibold">Rejoignez l'aventure</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prête à porter une étoile ?
            </h2>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Découvrez des créations uniques qui célèbrent{" "}
              <span className="font-bold">l'individualité et la couleur</span>.{" "}
              Chaque pièce raconte une histoire, la vôtre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group text-lg px-8 py-6 bg-white text-rose-600 hover:bg-white/95 shadow-xl rounded-full font-semibold transition-all">
                <Link href="/shop">
                  Découvrir la collection
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
                { icon: Check, text: "Confection artisanale" },
                { icon: Package, text: "Livraison soignée" },
                { icon: Heart, text: "Pièces uniques" }
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

      {/* Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        .font-display {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        
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
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
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