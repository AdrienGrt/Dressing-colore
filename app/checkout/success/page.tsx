"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  Package, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Heart,
  Truck,
  MessageCircle,
  Instagram,
  Gift
} from "lucide-react"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"

export default function CheckoutSuccessPage() {
  const [orderNumber] = useState(() => `DC-${Date.now().toString().slice(-8)}`)
  
  // Confetti effect on mount
  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fb923c', '#f472b6', '#a855f7']
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f43f5e', '#fb923c', '#f472b6', '#a855f7']
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="min-h-screen bg-[#FFFBF7] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-orange-100/40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 pt-24 pb-12 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Success Card */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-8 md:p-12 text-center">
            {/* Success Icon */}
            <div className="relative inline-block mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30 animate-bounce-slow">
                <CheckCircle2 className="h-12 w-12 text-white" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 text-2xl animate-float-gentle">🎉</div>
              <div className="absolute -bottom-1 -left-3 text-xl animate-float-gentle-delayed">✨</div>
            </div>

            {/* Main message */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Commande{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                confirmée !
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg mx-auto">
              Merci pour votre confiance ! Votre commande a été validée et sera préparée avec soin.
            </p>

            {/* Order number */}
            <div className="inline-flex items-center gap-3 bg-slate-100 rounded-2xl px-6 py-4 mb-10">
              <Package className="h-5 w-5 text-slate-500" />
              <div className="text-left">
                <p className="text-xs text-slate-500 uppercase tracking-wider">Numéro de commande</p>
                <p className="font-mono font-bold text-slate-900 text-lg">{orderNumber}</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 rounded-2xl p-6 md:p-8 mb-10">
              <h2 className="font-bold text-slate-900 mb-6 flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-rose-500" />
                Et maintenant ?
              </h2>
              
              <div className="grid gap-4 text-left">
                {[
                  {
                    icon: Mail,
                    title: "Email de confirmation",
                    description: "Vous allez recevoir un récapitulatif complet de votre commande",
                    color: "from-rose-500 to-pink-500"
                  },
                  {
                    icon: Package,
                    title: "Préparation sous 24h",
                    description: "Notre équipe prépare votre colis avec le plus grand soin",
                    color: "from-orange-500 to-amber-500"
                  },
                  {
                    icon: Truck,
                    title: "Expédition & suivi",
                    description: "Vous recevrez un email avec le lien de suivi de votre colis",
                    color: "from-blue-500 to-cyan-500"
                  }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <p className="text-sm text-slate-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                asChild 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white rounded-full px-8 py-6 shadow-lg shadow-rose-500/25 font-semibold"
              >
                <Link href="/">
                  Retour à l'accueil
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="rounded-full px-8 py-6 border-2 border-slate-200 hover:border-rose-300 font-semibold"
              >
                <Link href="/shop">
                  Continuer mes achats
                </Link>
              </Button>
            </div>

            {/* Social / Newsletter CTA */}
            <div className="pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-slate-600 hover:text-rose-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="text-sm font-medium">Suivez-nous</span>
                </a>
                <div className="hidden sm:block w-px h-6 bg-slate-200" />
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-slate-600 hover:text-rose-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Une question ?</span>
                </a>
              </div>
            </div>
          </div>

          {/* Promo for next order */}
          <div className="mt-8 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 rounded-2xl p-6 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Gift className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">-15% sur votre prochaine commande</p>
                  <p className="text-white/80 text-sm">Utilisez le code MERCI15</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust footer */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
              Merci d'avoir choisi Le Dressing Coloré
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        
        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(-5deg); }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        
        .animate-float-gentle-delayed {
          animation: float-gentle-delayed 3.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}