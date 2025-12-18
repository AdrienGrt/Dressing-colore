"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Heart,
  CheckCircle2,
  MessageCircle,
  Palette,
  Ruler,
  Gift
} from "lucide-react"

export default function ProjetsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-transparent to-purple-100/30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-purple-600 font-semibold mb-4">Créations uniques</p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Vos projets sur mesure
            </h1>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Ce que nous proposons
            </h2>

            <div className="space-y-8">
              {/* Vêtements sur mesure */}
              <div className="border-b border-slate-200 pb-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">👗</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Vêtements sur mesure</h3>
                    <p className="text-slate-600 mb-4">
                      Robes, jupes, hauts... Créations uniques adaptées à votre morphologie et vos goûts.
                    </p>
                    <ul className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Prise de mesures
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Choix du tissu
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Essayages inclus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cadeaux personnalisés */}
              <div className="border-b border-slate-200 pb-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎁</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cadeaux personnalisés</h3>
                    <p className="text-slate-600 mb-4">
                      Trousses brodées, sacs uniques, accessoires... Le cadeau parfait qui a du sens.
                    </p>
                    <ul className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Broderie nom/prénom
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Emballage cadeau
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Carte personnalisée
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Comment ça marche
            </h2>
            <p className="text-slate-600 text-center mb-12">
              Votre projet en 4 étapes simples
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  icon: MessageCircle,
                  title: "Échange & conseil",
                  description: "Parlez-nous de votre projet ! Par téléphone, email ou en boutique, nous définissons ensemble vos besoins."
                },
                {
                  step: "2",
                  icon: Palette,
                  title: "Choix des matières",
                  description: "Sélectionnez parmi notre gamme de tissus de qualité. Nous vous conseillons selon votre projet."
                },
                {
                  step: "3",
                  icon: Ruler,
                  title: "Mesures & création",
                  description: "Prise de mesures précises si nécessaire, puis confection soignée de votre pièce unique."
                },
                {
                  step: "4",
                  icon: Gift,
                  title: "Livraison & bonheur",
                  description: "Récupérez votre création ! Essayage final et ajustements inclus pour un résultat parfait."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Prête à créer ensemble ?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contactez-nous pour discuter de votre projet. 
              Devis gratuit et sans engagement !
            </p>

            <Button size="lg" asChild className="group bg-white text-purple-600 hover:bg-white/95 rounded-full px-10 py-6 text-lg shadow-lg font-semibold">
              <Link href="/contact">
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <p className="mt-6 text-white/70 flex items-center justify-center gap-2 text-sm">
              <Heart className="h-4 w-4 fill-current" />
              Réponse sous 24h garantie
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}