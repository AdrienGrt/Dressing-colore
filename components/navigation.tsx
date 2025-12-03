"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartSheet } from "./cart-sheet"
import { Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll for navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navLinks = [
    { href: "/", label: "Accueil", icon: "🏠", description: "Retour à l'accueil" },
    { href: "/shop", label: "Boutique", icon: "🛍️", description: "Nos tissus & accessoires" },
    { href: "/projets", label: "Projets personnalisés", icon: "✨", description: "Créations sur mesure" },
    { href: "/entretien", label: "Entretien", icon: "🧼", description: "Conseils & astuces" },
    { href: "/about", label: "À propos", icon: "💜", description: "Notre histoire" },
    { href: "/contact", label: "Contact", icon: "✉️", description: "Nous écrire" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200" 
          : "bg-gradient-to-r from-white via-orange-50/80 to-rose-50/80 backdrop-blur-md border-b border-rose-100"
      )}>
        {/* Top decorative border */}
        <div className="h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500" />
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative group-hover:scale-110 transition-all duration-300">
                <Image 
                  src="/icon.png" 
                  alt="Le Dressing Coloré Logo" 
                  width={50} 
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight bg-gradient-to-r from-rose-500 via-orange-500 to-pink-600 bg-clip-text text-transparent">
                  Le Dressing Coloré
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 group",
                    isActive(link.href)
                      ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/25"
                      : "text-slate-700 hover:text-rose-600"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-sm">{link.icon}</span>
                    {link.label}
                  </span>
                  {!isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  )}
                </Link>
              ))}

              <div className="ml-3 pl-3 border-l border-slate-200">
                <CartSheet />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <CartSheet />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative p-2.5 rounded-xl transition-all duration-300 shadow-lg",
                  isOpen 
                    ? "bg-slate-900 text-white rotate-90" 
                    : "bg-gradient-to-br from-rose-500 to-orange-500 text-white hover:scale-105"
                )}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-all duration-500",
        isOpen ? "visible" : "invisible"
      )}>
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={cn(
          "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Menu Header */}
          <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-pink-500 px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-1">
                  <Image 
                    src="/icon.png" 
                    alt="Le Dressing Coloré Logo" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Le Dressing Coloré</p>
                  <p className="text-white/70 text-xs">Menu</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Decorative elements */}
            <div className="flex gap-2">
              {["🧵", "✂️", "🪡", "🎨", "💜"].map((emoji, i) => (
                <span 
                  key={i} 
                  className="text-2xl opacity-60 animate-bounce"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div className="px-4 py-6 space-y-2 overflow-y-auto h-[calc(100%-200px)]">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group",
                  isActive(link.href)
                    ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white shadow-lg shadow-rose-500/25"
                    : "text-slate-700 hover:bg-slate-50 active:scale-[0.98]"
                )}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none"
                }}
              >
                <span className={cn(
                  "text-3xl transition-transform duration-300",
                  isActive(link.href) ? "" : "group-hover:scale-125 group-hover:rotate-12"
                )}>
                  {link.icon}
                </span>
                <div className="flex-1">
                  <p className={cn(
                    "font-bold",
                    isActive(link.href) ? "text-white" : "text-slate-900"
                  )}>
                    {link.label}
                  </p>
                  <p className={cn(
                    "text-xs",
                    isActive(link.href) ? "text-white/70" : "text-slate-400"
                  )}>
                    {link.description}
                  </p>
                </div>
                <ChevronRight className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isActive(link.href) 
                    ? "text-white/70" 
                    : "text-slate-300 group-hover:text-rose-500 group-hover:translate-x-1"
                )} />
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-50 border-t border-slate-100">
            <div className="text-center">
              <p className="text-xs text-slate-400 mb-2">Besoin d'aide ?</p>
              <a 
                href="tel:+33123456789" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600"
              >
                📞 01 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}