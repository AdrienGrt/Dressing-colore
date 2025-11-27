"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  ArrowRight, 
  Heart,
  CheckCircle2,
  MessageCircle,
  Palette,
  Ruler,
  Clock,
  Star,
  Scissors,
  Gift
} from "lucide-react"

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-purple-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-purple-500/25">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">Créations uniques</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Vos projets{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                sur mesure
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Transformez vos idées en réalité ! Nous créons des pièces uniques 
              adaptées à vos envies, votre style et vos mesures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-6 shadow-lg shadow-purple-500/25">
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 py-6 border-2 border-slate-200 hover:border-purple-300">
                <a href="#services">
                  Découvrir nos services
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
              <Scissors className="h-4 w-4" />
              Nos services
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Ce que nous{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                proposons
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👗",
                title: "Vêtements sur mesure",
                description: "Robes, jupes, hauts... Créations uniques adaptées à votre morphologie et vos goûts.",
                features: ["Prise de mesures", "Choix du tissu", "Essayages inclus"],
                gradient: "from-rose-500 to-pink-500"
              },
              {
                icon: "🏠",
                title: "Décoration intérieure",
                description: "Coussins, rideaux, nappes... Habillez votre intérieur avec des créations personnalisées.",
                features: ["Sur mesure exactes", "Tissus assortis", "Pose possible"],
                gradient: "from-purple-500 to-violet-500"
              },
              {
                icon: "🎁",
                title: "Cadeaux personnalisés",
                description: "Trousses brodées, sacs uniques, accessoires... Le cadeau parfait qui a du sens.",
                features: ["Broderie nom/prénom", "Emballage cadeau", "Carte personnalisée"],
                gradient: "from-orange-500 to-amber-500"
              },
              {
                icon: "👶",
                title: "Créations bébé & enfant",
                description: "Gigoteuses, doudous, vêtements... Des pièces douces et sûres pour les tout-petits.",
                features: ["Tissus certifiés", "Normes sécurité", "Lavables"],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: "💍",
                title: "Mariages & événements",
                description: "Accessoires de mariage, pochettes demoiselles d'honneur, déco de table...",
                features: ["Coordination couleurs", "Grandes quantités", "Délais garantis"],
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: "🔧",
                title: "Retouches & réparations",
                description: "Ourlets, ajustements, fermetures... Donnez une seconde vie à vos vêtements.",
                features: ["Devis gratuit", "Rapide", "Tous vêtements"],
                gradient: "from-emerald-500 to-teal-500"
              }
            ].map((service, i) => (
              <div 
                key={i}
                className="group bg-white rounded-3xl border border-slate-200 p-8 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
              <Clock className="h-4 w-4" />
              Comment ça marche
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Votre projet en{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                4 étapes
              </span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  icon: MessageCircle,
                  title: "Échange & conseil",
                  description: "Parlez-nous de votre projet ! Par téléphone, email ou en boutique, nous définissons ensemble vos besoins.",
                  color: "rose"
                },
                {
                  step: "02",
                  icon: Palette,
                  title: "Choix des matières",
                  description: "Sélectionnez parmi notre gamme de tissus de qualité. Nous vous conseillons selon votre projet.",
                  color: "purple"
                },
                {
                  step: "03",
                  icon: Ruler,
                  title: "Mesures & création",
                  description: "Prise de mesures précises si nécessaire, puis confection soignée de votre pièce unique.",
                  color: "orange"
                },
                {
                  step: "04",
                  icon: Gift,
                  title: "Livraison & bonheur",
                  description: "Récupérez votre création ! Essayage final et ajustements inclus pour un résultat parfait.",
                  color: "emerald"
                }
              ].map((item, i) => (
                <div key={i} className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all">
                  <div className={`absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-${item.color}-500 text-white text-sm font-bold flex items-center justify-center shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <item.icon className={`h-8 w-8 text-${item.color}-500 mb-4`} />
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
              <Star className="h-4 w-4 fill-current" />
              Témoignages
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Elles ont{" "}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                adoré
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                text: "Ma robe de demoiselle d'honneur était parfaite ! Justine a su comprendre exactement ce que je voulais.",
                name: "Léa M.",
                project: "Robe sur mesure",
                avatar: "👩‍🦰"
              },
              {
                text: "Les rideaux de mon salon sont magnifiques. Un travail soigné et un service au top !",
                name: "Catherine D.",
                project: "Décoration maison",
                avatar: "👩"
              },
              {
                text: "La gigoteuse pour mon bébé est superbe et tellement douce. Je recommande à 100% !",
                name: "Marie L.",
                project: "Création bébé",
                avatar: "👩‍🍼"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-purple-600">{testimonial.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Prête à créer ensemble ?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contactez-nous pour discuter de votre projet. 
              Devis gratuit et sans engagement !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-white text-purple-600 hover:bg-white/95 rounded-full px-10 py-6 text-lg shadow-lg font-semibold">
                <Link href="/contact">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <p className="mt-8 text-white/70 flex items-center justify-center gap-2">
              <Heart className="h-4 w-4 fill-current" />
              Réponse sous 24h garantie
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}