"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { getCart, clearCart } from "@/lib/cart"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { Cart } from "@/lib/types"
import { createSumUpCheckout, mountSumUpCard } from "@/lib/sumup"
import { 
  ArrowLeft, 
  CreditCard, 
  Loader2, 
  ShieldCheck, 
  Truck, 
  Package,
  Lock,
  CheckCircle2,
  ChevronRight,
  MapPin,
  User,
  Mail,
  Phone,
  Gift,
  Info
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

type CheckoutStep = "info" | "shipping" | "payment"

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 })
  const [step, setStep] = useState<CheckoutStep>("info")
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressComplement: "",
    postalCode: "",
    city: "",
    country: "France",
    message: "",
  })

  // Shipping options
  const [selectedShipping, setSelectedShipping] = useState("standard")
  const shippingOptions = [
    { id: "standard", name: "Livraison standard", delay: "3-5 jours", price: 4.90, icon: "📦" },
    { id: "express", name: "Livraison express", delay: "24-48h", price: 9.90, icon: "🚀" },
    { id: "relay", name: "Point relais", delay: "3-5 jours", price: 3.90, icon: "📍" },
  ]

  const selectedShippingOption = shippingOptions.find(s => s.id === selectedShipping)!
  
  // Calculate totals
  const subtotal = cart.total
  const discount = promoApplied ? subtotal * 0.2 : 0
  const shippingCost = subtotal >= 50 ? 0 : selectedShippingOption.price
  const total = subtotal - discount + shippingCost

  useEffect(() => {
    const currentCart = getCart()
    setCart(currentCart)

    if (currentCart.items.length === 0) {
      router.push("/shop")
    }
  }, [router])

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "BIENVENUE20") {
      setPromoApplied(true)
    }
  }

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("shipping")
  }

  const handleShippingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError(null)

    try {
      const checkoutReference = `ORDER-${Date.now()}`
      const description = `Commande: ${cart.items.map((item) => item.product.name).join(", ")}`

      const checkout = await createSumUpCheckout(total, description, checkoutReference)

      setStep("payment")

      setTimeout(() => {
        mountSumUpCard(
          checkout.id,
          () => {
            clearCart()
            window.dispatchEvent(new Event("cartUpdated"))
            router.push("/checkout/success")
          },
          (error) => {
            console.error("[v0] Payment error:", error)
            setError("Le paiement a échoué. Veuillez réessayer.")
            setIsProcessing(false)
          },
        )
      }, 100)
    } catch (err) {
      console.error("[v0] Checkout error:", err)
      setError("Une erreur est survenue. Veuillez réessayer.")
      setIsProcessing(false)
    }
  }

  if (cart.items.length === 0) {
    return null
  }

  // Step indicator
  const steps = [
    { id: "info", label: "Informations", icon: User },
    { id: "shipping", label: "Livraison", icon: Truck },
    { id: "payment", label: "Paiement", icon: CreditCard },
  ]

  const currentStepIndex = steps.findIndex(s => s.id === step)

  return (
    <main className="min-h-screen bg-[#FFFBF7]">
      {/* Header */}
      

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-10">
          <div className="flex items-center justify-center">
            {steps.map((s, i) => (
              <div key={s.id} className="flex items-center">
                <div className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full transition-all",
                  currentStepIndex >= i 
                    ? "bg-gradient-to-r from-rose-500 to-orange-500 text-white" 
                    : "bg-slate-100 text-slate-400"
                )}>
                  <s.icon className="h-4 w-4" />
                  <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
                  <span className="text-sm font-medium sm:hidden">{i + 1}</span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight className={cn(
                    "h-5 w-5 mx-2",
                    currentStepIndex > i ? "text-rose-500" : "text-slate-300"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-3">
            {/* Step 1: Info */}
            {step === "info" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Vos informations</h2>
                    <p className="text-sm text-slate-500">Informations de contact et de livraison</p>
                  </div>
                </div>

                <form onSubmit={handleInfoSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />
                      Contact
                    </h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-700">
                          Prénom <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          placeholder="Marie"
                          className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700">
                          Nom <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          placeholder="Dupont"
                          className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700">
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
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700">
                          Téléphone <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          placeholder="06 12 34 56 78"
                          className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      Adresse de livraison
                    </h3>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-slate-700">
                        Adresse <span className="text-rose-500">*</span>
                      </Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                        placeholder="123 Rue de la Couture"
                        className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="addressComplement" className="text-slate-700">
                        Complément d'adresse
                      </Label>
                      <Input
                        id="addressComplement"
                        value={formData.addressComplement}
                        onChange={(e) => setFormData({ ...formData, addressComplement: e.target.value })}
                        placeholder="Appartement, étage, code..."
                        className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode" className="text-slate-700">
                          Code postal <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="postalCode"
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          required
                          placeholder="75011"
                          className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                        />
                      </div>
                      <div className="space-y-2 col-span-1 sm:col-span-2">
                        <Label htmlFor="city" className="text-slate-700">
                          Ville <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          placeholder="Paris"
                          className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 py-5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <Label htmlFor="message" className="text-slate-700">
                      Instructions de livraison (optionnel)
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      placeholder="Informations complémentaires pour le livreur..."
                      className="rounded-xl border-slate-200 focus:border-rose-400 focus:ring-rose-100 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold text-base shadow-lg shadow-rose-500/25"
                  >
                    Continuer vers la livraison
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            )}

            {/* Step 2: Shipping */}
            {step === "shipping" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Mode de livraison</h2>
                    <p className="text-sm text-slate-500">Choisissez votre option de livraison</p>
                  </div>
                </div>

                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  {/* Shipping address summary */}
                  <div className="bg-slate-50 rounded-2xl p-4 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-slate-400 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-900">{formData.firstName} {formData.lastName}</p>
                        <p className="text-sm text-slate-500">{formData.address}</p>
                        <p className="text-sm text-slate-500">{formData.postalCode} {formData.city}</p>
                      </div>
                    </div>
                    <button 
                      type="button"
                      onClick={() => setStep("info")}
                      className="text-sm text-rose-600 hover:text-rose-700 font-medium"
                    >
                      Modifier
                    </button>
                  </div>

                  {/* Shipping options */}
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all",
                          selectedShipping === option.id 
                            ? "border-rose-500 bg-rose-50/50" 
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={option.id}
                          checked={selectedShipping === option.id}
                          onChange={() => setSelectedShipping(option.id)}
                          className="sr-only"
                        />
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl">
                          {option.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-slate-900">{option.name}</p>
                          <p className="text-sm text-slate-500">{option.delay}</p>
                        </div>
                        <div className="text-right">
                          {subtotal >= 50 && option.id !== "express" ? (
                            <div>
                              <p className="font-bold text-emerald-600">Gratuit</p>
                              <p className="text-xs text-slate-400 line-through">{option.price.toFixed(2)}€</p>
                            </div>
                          ) : (
                            <p className="font-bold text-slate-900">{option.price.toFixed(2)}€</p>
                          )}
                        </div>
                        {selectedShipping === option.id && (
                          <CheckCircle2 className="h-6 w-6 text-rose-500" />
                        )}
                      </label>
                    ))}
                  </div>

                  {/* Free shipping notice */}
                  {subtotal < 50 && (
                    <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-200">
                      <Info className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <p className="text-sm text-amber-800">
                        Plus que <span className="font-bold">{(50 - subtotal).toFixed(2)}€</span> d'achat pour bénéficier de la livraison gratuite !
                      </p>
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl">
                      <p className="text-sm text-rose-600">{error}</p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={() => setStep("info")}
                      className="flex-1 py-6 rounded-xl border-2 border-slate-200 hover:border-slate-300"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Retour
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-[2] py-6 rounded-xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-semibold shadow-lg shadow-rose-500/25"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Préparation du paiement...
                        </>
                      ) : (
                        <>
                          Procéder au paiement
                          <CreditCard className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === "payment" && (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Paiement sécurisé</h2>
                    <p className="text-sm text-slate-500">Vos données sont protégées par SumUp</p>
                  </div>
                </div>

                {/* Payment methods accepted */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Moyens de paiement acceptés :</span>
                  <div className="flex gap-2">
                    {["💳", "🅿️", "📱"].map((icon, i) => (
                      <div key={i} className="w-10 h-7 bg-slate-100 rounded flex items-center justify-center text-sm">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* SumUp Card Mount Point */}
                <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                  <div id="sumup-card" className="min-h-[350px]"></div>
                </div>

                {error && (
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl mb-6">
                    <p className="text-sm text-rose-600">{error}</p>
                  </div>
                )}

                {/* Security badges */}
                <div className="flex items-center justify-center gap-6 py-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Lock className="h-4 w-4 text-emerald-500" />
                    <span>SSL sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>PCI DSS compliant</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  onClick={() => setStep("shipping")} 
                  disabled={isProcessing}
                  className="w-full py-5 rounded-xl border-2 border-slate-200 hover:border-slate-300 mt-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour aux options de livraison
                </Button>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sticky top-28">
              <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Package className="h-5 w-5 text-slate-400" />
                Récapitulatif
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.product.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-sm line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-slate-400">Qté: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {(item.product.price * item.quantity).toFixed(2)}€
                    </p>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="pb-6 border-b border-slate-100">
                <div className="flex gap-2">
                  <Input
                    placeholder="Code promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={promoApplied}
                    className="rounded-xl border-slate-200 focus:border-rose-400 text-sm"
                  />
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={handleApplyPromo}
                    disabled={promoApplied || !promoCode}
                    className="rounded-xl border-slate-200 px-4"
                  >
                    {promoApplied ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : "OK"}
                  </Button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-emerald-600 mt-2 flex items-center gap-1">
                    <Gift className="h-3 w-3" />
                    Code BIENVENUE20 appliqué (-20%)
                  </p>
                )}
              </div>

              {/* Totals */}
              <div className="space-y-3 py-6 border-b border-slate-100">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Sous-total</span>
                  <span className="text-slate-700">{subtotal.toFixed(2)}€</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-emerald-600">Réduction (-20%)</span>
                    <span className="text-emerald-600">-{discount.toFixed(2)}€</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Livraison</span>
                  <span className={shippingCost === 0 ? "text-emerald-600 font-medium" : "text-slate-700"}>
                    {shippingCost === 0 ? "Gratuite" : `${shippingCost.toFixed(2)}€`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-6">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-2xl font-black bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                  {total.toFixed(2)}€
                </span>
              </div>

              {/* Trust badges */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                {[
                  { icon: ShieldCheck, text: "Paiement 100% sécurisé via SumUp", color: "text-emerald-500" },
                  { icon: Truck, text: "Expédition sous 24h", color: "text-blue-500" },
                  { icon: Package, text: "Retour gratuit sous 30 jours", color: "text-orange-500" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                    <badge.icon className={cn("h-4 w-4", badge.color)} />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}