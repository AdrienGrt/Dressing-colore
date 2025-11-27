"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  ArrowRight, 
  Droplets,
  ThermometerSun,
  Wind,
  Shirt,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Scissors,
  Heart
} from "lucide-react"
import { useState } from "react"

export default function EntretienPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const fabrics = [
    {
      name: "Coton",
      icon: "🧵",
      color: "from-blue-500 to-cyan-500",
      wash: "30-40°C",
      dry: "Sèche-linge possible",
      iron: "Fer chaud (200°C)",
      tips: [
        "Laver les couleurs foncées à l'envers",
        "Premier lavage séparé pour les couleurs vives",
        "Repasser légèrement humide pour un meilleur résultat"
      ]
    },
    {
      name: "Lin",
      icon: "🌿",
      color: "from-emerald-500 to-teal-500",
      wash: "30-40°C",
      dry: "Éviter le sèche-linge",
      iron: "Fer très chaud + vapeur",
      tips: [
        "Le lin se détend au lavage, c'est normal",
        "Repasser sur l'envers pour éviter le brillant",
        "Stocker plié, pas sur cintre"
      ]
    },
    {
      name: "Jersey",
      icon: "👕",
      color: "from-rose-500 to-pink-500",
      wash: "30°C max",
      dry: "À plat ou sur cintre",
      iron: "Fer doux (110°C)",
      tips: [
        "Ne pas essorer trop fort",
        "Sécher à plat pour éviter les déformations",
        "Repasser à l'envers"
      ]
    },
    {
      name: "Velours",
      icon: "✨",
      color: "from-purple-500 to-violet-500",
      wash: "30°C programme délicat",
      dry: "Jamais de sèche-linge",
      iron: "À la vapeur, sans appuyer",
      tips: [
        "Toujours laver à l'envers",
        "Sécher à plat",
        "Brosser dans le sens du poil"
      ]
    },
    {
      name: "Soie",
      icon: "💎",
      color: "from-amber-500 to-orange-500",
      wash: "À la main ou pressing",
      dry: "À plat à l'ombre",
      iron: "Fer très doux + pattemouille",
      tips: [
        "Utiliser une lessive spéciale soie",
        "Ne jamais tordre",
        "Éviter le soleil direct"
      ]
    },
    {
      name: "Laine",
      icon: "🐑",
      color: "from-slate-500 to-slate-700",
      wash: "À la main, eau froide",
      dry: "À plat, loin de la chaleur",
      iron: "Vapeur uniquement",
      tips: [
        "Ne jamais frotter",
        "Utiliser une lessive spéciale laine",
        "Stocker avec anti-mites naturels"
      ]
    }
  ]

  const faqs = [
    {
      question: "Comment éviter que mes tissus déteignent ?",
      answer: "Lavez toujours les tissus foncés et colorés séparément lors des premiers lavages. Ajoutez une lingette anti-décoloration dans le tambour. Pour les tissus qui déteignent beaucoup, faites tremper 30 min dans de l'eau vinaigrée avant le premier lavage."
    },
    {
      question: "Comment enlever une tache sur du tissu ?",
      answer: "Traitez la tache le plus vite possible ! Pour le gras : talc ou terre de Sommières. Pour le vin : sel puis eau gazeuse. Pour l'encre : lait tiède. Toujours tamponner, jamais frotter. Testez d'abord sur un endroit caché."
    },
    {
      question: "Faut-il pré-laver les tissus avant de coudre ?",
      answer: "Oui, absolument ! La plupart des tissus rétrécissent au premier lavage (jusqu'à 5-10% pour le lin). Lavez et séchez votre tissu dans les mêmes conditions que le vêtement fini avant de couper."
    },
    {
      question: "Comment éviter les bouloches sur le jersey ?",
      answer: "Lavez à l'envers, évitez l'essorage trop fort et ne mélangez pas avec des vêtements à fermetures ou velcro. Si des bouloches apparaissent, utilisez un rasoir anti-bouloches."
    },
    {
      question: "Comment stocker mes tissus ?",
      answer: "À l'abri de la lumière directe (qui décolore), dans un endroit sec. Roulez les tissus délicats plutôt que de les plier. Pour le long terme, utilisez des housses en coton qui laissent respirer."
    }
  ]

  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-emerald-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-blue-500/25">
              <Droplets className="h-4 w-4" />
              <span className="text-sm font-semibold">Guide d'entretien</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Prenez soin de{" "}
              <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                vos créations
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tous nos conseils pour laver, sécher et repasser vos tissus 
              et faire durer vos créations dans le temps.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Bar */}
      <section className="py-8 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {[
              { icon: Droplets, label: "Eau froide = couleurs préservées", color: "text-blue-500" },
              { icon: ThermometerSun, label: "Séchage à l'air = fibres protégées", color: "text-orange-500" },
              { icon: Wind, label: "Pas de sèche-linge = pas de rétrécissement", color: "text-emerald-500" }
            ].map((tip, i) => (
              <div key={i} className="flex items-center gap-3">
                <tip.icon className={`h-6 w-6 ${tip.color}`} />
                <span className="text-sm font-medium text-slate-700">{tip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
              <Shirt className="h-4 w-4" />
              Par type de tissu
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Guide{" "}
              <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                par matière
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Chaque tissu a ses spécificités. Voici comment en prendre soin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fabrics.map((fabric, i) => (
              <div 
                key={i}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${fabric.color} p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{fabric.icon}</span>
                    <h3 className="text-2xl font-bold">{fabric.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Quick info */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-slate-50 rounded-xl p-3">
                      <Droplets className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Lavage</p>
                      <p className="text-sm font-semibold text-slate-900">{fabric.wash}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3">
                      <Wind className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Séchage</p>
                      <p className="text-sm font-semibold text-slate-900 text-[11px]">{fabric.dry}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3">
                      <ThermometerSun className="h-5 w-5 text-orange-500 mx-auto mb-1" />
                      <p className="text-xs text-slate-500">Repassage</p>
                      <p className="text-sm font-semibold text-slate-900 text-[11px]">{fabric.iron}</p>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm font-semibold text-slate-900 mb-3">💡 Astuces :</p>
                    <ul className="space-y-2">
                      {fabric.tips.map((tip, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-amber-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Avant le premier lavage</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Pré-lavez toujours vos tissus avant de coudre !</strong> La plupart des tissus 
                  naturels (coton, lin, viscose) rétrécissent au premier lavage. Un pré-lavage dans 
                  les mêmes conditions que l'utilisation finale évite les mauvaises surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                FAQ
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Questions{" "}
                <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                  fréquentes
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all hover:border-blue-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'pb-5 max-h-48' : 'max-h-0'}`}>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Card */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Téléchargez notre guide complet
                </h3>
                <p className="text-white/90 mb-8 max-w-lg mx-auto">
                  Un PDF pratique avec tous les symboles de lavage, 
                  les températures et nos meilleures astuces à garder près de votre machine !
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-white/95 rounded-full px-8 font-semibold shadow-lg">
                  Télécharger le guide (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Scissors className="h-10 w-10 mx-auto mb-6 text-blue-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Une question sur l'entretien ?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Notre équipe est là pour vous conseiller sur le choix 
              et l'entretien de vos tissus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white rounded-full px-8 py-6 shadow-lg">
                <Link href="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6">
                <Link href="/shop">
                  Voir nos tissus
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}