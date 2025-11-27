"use client"

import Link from "next/link"
import { Scissors, Heart, ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/shop", label: "Boutique" },
    { href: "/projets", label: "Projets personnalisés" },
    { href: "/entretien", label: "Entretien" },
    { href: "/contact", label: "Contact" },
  ]

  const infoLinks = [
    { href: "/livraison", label: "Livraison & Retours" },
    { href: "/paiement", label: "Paiement sécurisé" },
    { href: "/cgv", label: "Conditions générales" },
    { href: "/faq", label: "FAQ" },
  ]

  const socialLinks = [
    { icon: "📷", label: "Instagram", href: "https://instagram.com" },
    { icon: "👍", label: "Facebook", href: "https://facebook.com" },
    { icon: "📌", label: "Pinterest", href: "https://pinterest.com" },
  ]

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500" />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Newsletter Section */}
      <div className="relative border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Restez{" "}
                <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                  inspirée
                </span>
              </h3>
              <p className="text-slate-400">
                Nouveautés, tutoriels et{" "}
                <span className="text-orange-400 font-semibold">-10% sur votre prochaine commande</span>
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 transition-all"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 font-semibold transition-all shadow-lg shadow-rose-500/25 whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg">
                <Scissors className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Le Dressing Coloré</h3>
                <p className="text-xs text-slate-500 font-medium">Mercerie & Couture</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Votre partenaire créatif pour tous vos projets couture. 
              Des tissus de qualité et un service personnalisé depuis 2020.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-gradient-to-br hover:from-rose-500 hover:to-orange-500 flex items-center justify-center transition-all duration-300 hover:scale-110 text-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-rose-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
              Informations
            </h4>
            <ul className="space-y-3">
              {infoLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-rose-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+33123456789" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-rose-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="h-4 w-4 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">01 23 45 67 89</p>
                    <p className="text-xs text-slate-500">Appelez-nous</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@dressing-colore.fr" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-orange-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">contact@dressing-colore.fr</p>
                    <p className="text-xs text-slate-500">Écrivez-nous</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Lun - Ven : 9h - 18h</p>
                  <p className="text-xs text-slate-500">Sam : 10h - 16h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Paris, France</p>
                  <p className="text-xs text-slate-500">Livraison partout en France</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-10 border-t border-slate-800">
          {[
            { icon: "🔒", text: "Paiement sécurisé", subtext: "SSL & SumUp" },
            { icon: "🚚", text: "Livraison rapide", subtext: "48h en France" },
            { icon: "↩️", text: "Retours gratuits", subtext: "30 jours" },
            { icon: "💬", text: "Support 7j/7", subtext: "À votre écoute" },
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-3 px-4">
              <span className="text-2xl">{badge.icon}</span>
              <div>
                <p className="text-sm font-medium text-white">{badge.text}</p>
                <p className="text-xs text-slate-500">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1.5">
              © {currentYear} Le Dressing Coloré • Fait avec{" "}
              <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />{" "}
              pour les passionnées
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/mentions-legales" className="text-slate-500 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-slate-500 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/cookies" className="text-slate-500 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}