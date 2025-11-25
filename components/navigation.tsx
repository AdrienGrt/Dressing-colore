"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CartSheet } from "./cart-sheet"
import { Menu, X, Scissors, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Accueil", icon: "🏠" },
    { href: "/shop", label: "Boutique", icon: "🛍️" },
    { href: "/about", label: "À propos", icon: "✨" },
    { href: "/contact", label: "Contact", icon: "✉️" },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-white via-orange-50/80 to-pink-50/80 backdrop-blur-md border-b-2 border-primary/10 shadow-lg">
      {/* Top decorative border */}
      <div className="h-1 bg-gradient-to-r from-primary via-orange-500 to-pink-500" />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-br from-primary via-orange-500 to-pink-500 p-2.5 rounded-full group-hover:scale-110 transition-transform">
                <Scissors className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-primary via-orange-500 to-pink-600 bg-clip-text text-transparent">
                Le Dressing Coloré
              </span>
              <span className="text-[10px] font-medium text-muted-foreground -mt-1 tracking-wider uppercase">
                Mercerie & Couture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 group",
                  isActive(link.href)
                    ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg scale-105"
                    : "text-foreground hover:bg-white/60 hover:scale-105"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{link.icon}</span>
                  {link.label}
                </span>
                {!isActive(link.href) && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                )}
              </Link>
            ))}

            <div className="ml-2">
              <CartSheet />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <CartSheet />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-full bg-gradient-to-br from-primary to-orange-500 text-white hover:scale-110 transition-transform shadow-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-2xl text-base font-bold transition-all",
                  isActive(link.href)
                    ? "bg-gradient-to-r from-primary to-orange-500 text-white shadow-lg scale-105"
                    : "text-foreground hover:bg-white/80 hover:scale-105"
                )}
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.label}</span>
                {isActive(link.href) && (
                  <Sparkles className="h-4 w-4 ml-auto animate-pulse" />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  )
}