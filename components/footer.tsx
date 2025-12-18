"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/shop", label: "Boutique" },
    { href: "/projets", label: "Projets personnalisés" },
    { href: "/entretien", label: "Entretien" },
    { href: "/contact", label: "Contact" },
    { href: "/cgv", label: "CGV" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative group-hover:scale-105 transition-transform">
                <Image 
                  src="/icon.png" 
                  alt="Le Dressing Coloré Logo" 
                  width={50} 
                  height={50}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Le Dressing Coloré</h3>
                <p className="text-xs text-slate-500 font-medium">Créations artisanales</p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Vêtements réversibles artisanaux qui célèbrent l'individualité par la couleur et l'unicité.
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

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+33745112268" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-rose-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Phone className="h-4 w-4 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">07 45 11 22 68</p>
                    <p className="text-xs text-slate-500">Appelez-nous</p>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ledressingcolore@gmail.com" 
                  className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 group-hover:bg-orange-500/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Mail className="h-4 w-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">ledressingcolore@gmail.com</p>
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
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-10 border-t border-slate-800">
          {[
            { icon: "🔒", text: "Paiement sécurisé", subtext: "SSL & SumUp" },
            { icon: "🚚", text: "Livraison rapide", subtext: "48h en France" },
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
          <p className="text-slate-500 text-sm text-center">
            © {currentYear} Le Dressing Coloré
          </p>
        </div>
      </div>
    </footer>
  )
}