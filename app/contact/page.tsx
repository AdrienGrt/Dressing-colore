"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  Heart,
  HelpCircle,
  Package,
  RefreshCw,
  ChevronDown
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

    setTimeout(() => setSubmitted(false), 8000)
  }

  const faqs = [
    {
      question: "Quels sont les délais de livraison ?",
      answer: "Nous expédions sous 24h et la livraison s'effectue en 48h en France métropolitaine. Pour les DOM-TOM et l'international, comptez 5 à 10 jours ouvrés."
    },
    {
      question: "Comment retourner un article ?",
      answer: "Vous disposez de 30 jours pour nous retourner un article. Contactez-nous pour obtenir une étiquette de retour gratuite. Le remboursement est effectué sous 5 jours après réception."
    },
    {
      question: "Les tissus sont-ils pré-lavés ?",
      answer: "Nos tissus en lin et double gaze sont pré-lavés. Pour les autres tissus, nous recommandons un premier lavage à 30°C avant la coupe pour éviter le rétrécissement."
    },
    {
      question: "Proposez-vous des échantillons ?",
      answer: "Oui ! Nous proposons des échantillons à 1€ pièce (remboursés sur votre première commande de 30€ ou plus). Contactez-nous avec les références souhaitées."
    }
  ]

  return (
    <main className="min-h-screen bg-[#FFFBF7] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-rose-500/25">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-semibold">On adore vous lire</span>
            </div>

            <h1 className="font-display text-xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
  Une question ?{" "}
  <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
    Parlons-en !
  </span>
</h1>

            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Notre équipe de passionnées est là pour vous accompagner 
              dans tous vos projets créatifs.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-8 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "contact@dressing-colore.fr",
                subtitle: "Réponse sous 24h",
                gradient: "from-rose-500 to-pink-500",
                href: "mailto:contact@dressing-colore.fr"
              },
              {
                icon: Phone,
                title: "Téléphone",
                value: "01 23 45 67 89",
                subtitle: "Lun-Ven 9h-18h",
                gradient: "from-orange-500 to-amber-500",
                href: "tel:+33123456789"
              },
              {
                icon: MessageCircle,
                title: "Chat en direct",
                value: "Disponible maintenant",
                subtitle: "Réponse instantanée",
                gradient: "from-emerald-500 to-teal-500",
                href: "#"
              }
            ].map((item, i) => (
              <a 
                key={i}
                href={item.href}
                className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm text-slate-500 mb-1">{item.title}</div>
                <div className="font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-xs text-slate-400">{item.subtitle}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
            
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Envoyez-nous un message</h2>
                    <p className="text-slate-500 text-sm">Nous vous répondons sous 24h</p>
                  </div>
                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="mb-8 p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-emerald-800 mb-1">Message envoyé avec succès !</h3>
                      <p className="text-sm text-emerald-700">
                        Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700 font-medium">
                        Nom complet <span className="text-rose-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        placeholder="Marie Dupont"
                        className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email <span className="text-rose-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="marie@exemple.fr"
                        className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Téléphone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="06 12 34 56 78"
                        className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700 font-medium">
                        Sujet <span className="text-rose-500">*</span>
                      </Label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-4 focus:ring-rose-100 py-3 px-4 text-slate-900 bg-white"
                      >
                        <option value="">Choisir un sujet...</option>
                        <option value="question">Question sur un produit</option>
                        <option value="commande">Suivi de commande</option>
                        <option value="retour">Retour / Échange</option>
                        <option value="conseil">Demande de conseil</option>
                        <option value="partenariat">Partenariat / Presse</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Votre message <span className="text-rose-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      placeholder="Décrivez votre demande en détail..."
                      className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-lg shadow-lg shadow-rose-500/25 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Envoyer le message
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-sm text-slate-500">
                    En envoyant ce formulaire, vous acceptez notre{" "}
                    <a href="#" className="text-rose-600 hover:underline">politique de confidentialité</a>
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Hours Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">Horaires du service client</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    { day: "Lundi - Vendredi", hours: "9h - 18h", active: true },
                    { day: "Samedi", hours: "10h - 16h", active: true },
                    { day: "Dimanche", hours: "Fermé", active: false }
                  ].map((schedule, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600">{schedule.day}</span>
                      <span className={`font-medium ${schedule.active ? 'text-slate-900' : 'text-slate-400'}`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-sm text-emerald-700 font-medium">Actuellement disponible</span>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-rose-600" />
                  </div>
                  <h3 className="font-bold text-slate-900">Notre adresse</h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  Le Dressing Coloré<br />
                  123 Rue de la Couture<br />
                  75011 Paris, France
                </p>

                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700 transition-colors"
                >
                  Voir sur Google Maps
                  <span className="text-lg">→</span>
                </a>
              </div>

              {/* Promise Card */}
              <div className="bg-gradient-to-br from-rose-500 via-pink-500 to-orange-500 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="h-5 w-5 fill-white" />
                    <span className="font-semibold">Notre promesse</span>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    Une réponse personnalisée et chaleureuse sous 24h. 
                    Parce que chaque question mérite une attention particulière.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4">Liens utiles</h3>
                <div className="space-y-2">
                  {[
                    { icon: Package, label: "Suivre ma commande", href: "#" },
                    { icon: RefreshCw, label: "Politique de retour", href: "#" },
                    { icon: HelpCircle, label: "Centre d'aide", href: "#" }
                  ].map((link, i) => (
                    <a 
                      key={i}
                      href={link.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <link.icon className="h-5 w-5 text-slate-400 group-hover:text-rose-500 transition-colors" />
                      <span className="text-slate-700 group-hover:text-slate-900">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 rounded-full px-4 py-1.5 mb-4 text-sm font-semibold">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Questions{" "}
                <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  fréquentes
                </span>
              </h2>
              <p className="text-slate-600">
                Retrouvez les réponses aux questions les plus posées
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-rose-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === i ? 'pb-5 max-h-40' : 'max-h-0'}`}>
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-slate-500 mb-4">Vous n'avez pas trouvé votre réponse ?</p>
              <Button 
                variant="outline" 
                className="rounded-full border-2 border-rose-200 hover:border-rose-400 hover:bg-rose-50 text-rose-600 px-6"
              >
                Voir toutes les FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              {/* Map placeholder - Replace with actual map */}
              <div className="relative h-80 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Carte interactive</p>
                  <p className="text-sm text-slate-400">123 Rue de la Couture, 75011 Paris</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-rose-200/50 rounded-full blur-xl" />
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-orange-200/50 rounded-full blur-xl" />
              </div>
              
              <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Venez nous rendre visite !</h3>
                  <p className="text-slate-500 text-sm">Métro : Voltaire (ligne 9) ou Charonne (ligne 9)</p>
                </div>
                <Button 
                  asChild
                  className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-6"
                >
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    Obtenir l'itinéraire
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Sparkles className="h-10 w-10 mx-auto mb-6 text-rose-400" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Rejoignez notre newsletter
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Recevez nos nouveautés, conseils couture et{" "}
              <span className="text-orange-400 font-semibold">-10% sur votre prochaine commande</span>
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="votre@email.fr"
                className="flex-1 rounded-full border-0 bg-white/10 backdrop-blur-sm text-white placeholder:text-slate-400 py-6 px-5 focus:ring-2 focus:ring-rose-500"
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 py-6 font-semibold shadow-lg shadow-rose-500/25"
              >
                S'inscrire
              </Button>
            </form>

            <p className="text-sm text-slate-400 mt-4">
              Pas de spam, uniquement du contenu de qualité. Désinscription en un clic.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}