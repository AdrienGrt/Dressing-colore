"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  ArrowRight, 
  Droplets,
  ThermometerSun,
  Wind,
  Shirt,
  CheckCircle2,
  Scissors,
  Heart
} from "lucide-react"

export default function EntretienPage() {
  const careSymbols = [
    { symbol: "20°", label: "Lavage à 20°C maximum" },
    { symbol: "〰️", label: "Programme délicat", isIcon: true, iconType: "delicate" },
    { symbol: "⊘", label: "Pas de sèche-linge", isIcon: true, iconType: "no-dryer" },
    { symbol: "▨", label: "Séchage à l'ombre", isIcon: true, iconType: "shade" },
    { symbol: "⎸", label: "Séchage suspendu sur cintre", isIcon: true, iconType: "hang" },
    { symbol: "•", label: "Repassage doux (110°C max)", isIcon: true, iconType: "iron-low" },
    { symbol: "△", label: "Pas de blanchiment", isIcon: true, iconType: "no-bleach" },
    { symbol: "⊘", label: "Pas de nettoyage à sec", isIcon: true, iconType: "no-dry-clean" },
  ]

  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-rose-500/25">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Guide d'entretien</span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Entretien – Gilet et Vestes{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Réversibles Wax & Bouclette
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* À propos des tissus */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
                <Shirt className="h-4 w-4" />
                À propos des tissus
              </div>
              <p className="text-lg text-slate-600">
                Votre pièce combine deux tissus de qualité pour un confort optimal et un style réversible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Côté Wax */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Côté Wax</h3>
                    <p className="text-sm text-amber-700 font-medium">100% coton</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Le wax est une matière naturelle, légère et respirante, avec un toucher doux et ferme 
                  agréable sur la peau. Résistant à l'usure et stable dans le temps, ce tissu a été 
                  <span className="font-semibold text-amber-700"> prélavé pour éviter tout rétrécissement</span> lors de vos lavages.
                </p>
              </div>

              {/* Côté Bouclette */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🧶</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Côté Bouclette</h3>
                    <p className="text-sm text-purple-700 font-medium">Selon les modèles</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  La bouclette est composée soit de <span className="font-semibold">80% polyester et 20% mohair</span>, 
                  soit de <span className="font-semibold">100% polyester</span> selon les modèles. Ses fibres souples, 
                  légères et chaudes offrent un toucher doux et légèrement duveteux. Grâce aux petites boucles du tissu, 
                  la pièce maintient sa forme et son gonflant même après lavage.
                </p>
              </div>
            </div>

            {/* Résultat */}
            <div className="mt-8 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 text-center">
              <p className="text-white text-lg">
                <span className="font-semibold text-rose-400">Résultat :</span> une pièce réversible, pratique et élégante, 
                adaptable selon votre humeur ou l'occasion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entretien Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-5 py-2 mb-4 shadow-lg">
                <Droplets className="h-4 w-4" />
                <span className="text-sm font-semibold">Entretien</span>
              </div>
              <p className="text-lg text-slate-600">
                Pour préserver forme, confort et couleurs, suivez ces consignes simples.
              </p>
            </div>

            <div className="space-y-6">
              {/* Lavage */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Droplets className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Lavage</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Lavez votre pièce <span className="font-semibold">à la main ou en machine</span> sur programme 
                      délicat à <span className="font-semibold text-blue-600">20°C</span> avec une lessive douce.
                    </p>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">💡 Astuce :</span> Lors du premier lavage, ajoutez un peu de 
                        <span className="font-semibold"> vinaigre blanc</span> dans le compartiment adoucissant pour fixer 
                        les couleurs du wax. Ne lavez pas cette pièce avec des vêtements blancs ou de couleurs claires.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Séchage */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Wind className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Séchage</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Faites sécher votre pièce <span className="font-semibold">sur cintre</span>. Si vous portez le côté wax, 
                      privilégiez un <span className="font-semibold text-emerald-600">séchage à l'ombre</span> pour éviter 
                      de ternir les couleurs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Repassage */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <ThermometerSun className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Repassage</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Repassez à <span className="font-semibold">température douce</span> sur le côté wax ou utilisez 
                      une <span className="font-semibold">pattemouille</span>. Évitez la vapeur pour préserver la texture bouclette.
                    </p>
                  </div>
                </div>
              </div>

              {/* Rangement */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Shirt className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Rangement</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Suspendez votre pièce <span className="font-semibold">sur cintre</span> pour maintenir sa forme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symboles d'entretien */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Symboles d'entretien
              </h2>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <div className="space-y-6">
                {[
                  { icon: "🌡️", text: "20°", label: "Lavage à 20°C maximum" },
                  { icon: "〰️", text: null, label: "Programme délicat" },
                  { icon: "🚫", text: null, label: "Pas de sèche-linge" },
                  { icon: "🌑", text: null, label: "Séchage à l'ombre" },
                  { icon: "👔", text: null, label: "Séchage suspendu sur cintre" },
                  { icon: "🔘", text: null, label: "Repassage doux (110°C max)" },
                  { icon: "△", text: null, label: "Pas de blanchiment" },
                  { icon: "⊘", text: null, label: "Pas de nettoyage à sec" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-xl bg-white border-2 border-slate-300 flex items-center justify-center flex-shrink-0">
                      {item.text ? (
                        <span className="text-lg font-bold text-slate-700">{item.text}</span>
                      ) : (
                        <span className="text-2xl">{item.icon}</span>
                      )}
                    </div>
                    <span className="text-slate-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white rounded-full px-5 py-2 mb-6">
                <Heart className="h-4 w-4 fill-white" />
                <span className="text-sm font-semibold">Points forts</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Pourquoi vous allez l'adorer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Deux styles en un : côté wax coloré pour un look vif, côté bouclette pour un style sobre",
                "Douce, légère et confortable à porter",
                "Garde sa forme et son volume après lavage",
                "Facile à entretenir au quotidien"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-white font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Scissors className="h-10 w-10 mx-auto mb-6 text-rose-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Une question sur l'entretien ?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Je suis là pour vous conseiller et vous accompagner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 py-6 shadow-lg">
                <Link href="/contact">
                  Me contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6">
                <Link href="/shop">
                  Voir la boutique
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}