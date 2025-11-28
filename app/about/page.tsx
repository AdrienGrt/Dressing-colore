"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Leaf, 
  MapPin,
  CheckCircle2,
  Scissors,
  Recycle,
  Clock,
  Euro
} from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-rose-500/25">
              <Scissors className="h-4 w-4" />
              <span className="text-sm font-semibold">L'Atelier</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              À propos de{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                nos matières
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Dans l'atelier, chaque création commence par un choix essentiel : la matière.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800&h=1000&auto=format&fit=crop"
                    alt="Tissus de qualité"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Floating card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-5 animate-float-gentle">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Slow Fashion</div>
                      <div className="text-sm text-slate-500">Mode responsable</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl -z-10 rotate-6" />
              </div>
            </div>

            {/* Text Side */}
            <div className="space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Je sélectionne des tissus que j'aime vraiment travailler, des matières qui apportent 
                du <span className="font-semibold text-rose-600">confort</span>, de la <span className="font-semibold text-rose-600">tenue</span> et 
                un vrai plaisir à être portées au quotidien.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Je choisis mes tissus auprès de <span className="font-semibold text-slate-900">fournisseurs européens</span>, 
                dont <span className="text-rose-600">Driessenstoffen</span> (Pays-Bas), 
                le <span className="text-rose-600">Quartier des Tissus</span> (Agen, France) 
                et <span className="text-rose-600">Amagate Tissus</span>.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Leur catalogue large me permet de trouver des matières spécifiques, comme les 
                <span className="font-semibold"> bouclés épais</span> ou les <span className="font-semibold">mélanges mohair</span>, 
                qui donnent un caractère unique aux pièces de la boutique.
              </p>

              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                <p className="text-slate-700 italic">
                  "Tous les tissus que je retiens ont été testés avant d'être intégrés : 
                  toucher, tenue, lavage… Je ne garde que ceux qui répondent à mes exigences de qualité."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Sourcing</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pourquoi ce{" "}
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  sourcing ?
                </span>
              </h2>
              <p className="text-lg text-slate-600">
                Je privilégie les fournisseurs européens pour plusieurs raisons
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: MapPin,
                  title: "Réduire les distances",
                  description: "Les tissus ne viennent pas de l'autre bout du monde.",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Sparkles,
                  title: "Matières techniques",
                  description: "Accéder à des matières difficiles à trouver dans de petites merceries françaises.",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Euro,
                  title: "Prix accessibles",
                  description: "Garder des prix accessibles sans sacrifier la qualité.",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  icon: Recycle,
                  title: "Petites séries",
                  description: "Je choisis mes tissus en quantités limitées pour éviter le gaspillage.",
                  gradient: "from-orange-500 to-amber-500"
                }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-center">
              <p className="text-white text-lg leading-relaxed">
                Je travaille de manière <span className="font-semibold text-rose-400">artisanale</span>, 
                en petites productions, loin des logiques de mode jetable. 
                Mes pièces sont pensées pour <span className="font-semibold text-orange-400">durer dans le temps</span> — 
                c'est aussi ça, la slow fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full px-5 py-2 mb-6 shadow-lg">
                <Heart className="h-4 w-4 fill-white" />
                <span className="text-sm font-semibold">Engagement</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Mon{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  engagement
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Je ne promets pas la perfection, mais je fais des choix honnêtes, cohérents et responsables.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Sélectionner des tissus durables dans l'usage",
                "Privilégier des fournisseurs européens",
                "Limiter les stocks et la surproduction",
                "Valoriser les chutes lorsque c'est possible",
                "Créer des pièces réversibles ou polyvalentes pour prolonger leur durée de vie"
              ].map((engagement, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-slate-700 font-medium">{engagement}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Chaque vêtement retrouvé dans l'atelier est le résultat d'un travail réfléchi, 
                d'une sélection de matières consciente, et d'une fabrication réalisée 
                <span className="font-semibold text-rose-600"> dans le Sud-Ouest</span> avec soin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-5xl mb-6">🌼</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Une mode douce, locale et sincère
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Ma boutique s'adresse à celles qui veulent des pièces uniques, confortables, 
              réversibles ou intemporelles, pensées pour accompagner la vraie vie, 
              pas pour être remplacées tous les mois.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-white text-rose-600 hover:bg-white/95 rounded-full px-10 py-6 text-lg shadow-lg font-semibold">
                <Link href="/shop">
                  Découvrir la boutique
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-10 py-6 text-lg">
                <Link href="/contact">
                  Me contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style jsx global>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}