import { type NextRequest, NextResponse } from "next/server"

/**
 * API Route pour créer un checkout SumUp
 * POST /api/sumup/checkout
 */
export async function POST(request: NextRequest) {
  try {
    const { amount, description, checkoutReference } = await request.json()

    // Validation
    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Le montant doit être supérieur à 0" }, 
        { status: 400 }
      )
    }

    if (!checkoutReference) {
      return NextResponse.json(
        { error: "La référence de commande est requise" }, 
        { status: 400 }
      )
    }

    // Configuration SumUp
    const accessToken = process.env.SUMUP_ACCESS_TOKEN
    const merchantEmail = process.env.SUMUP_MERCHANT_EMAIL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://le-dressing-colore.vercel.app"

    if (!accessToken || !merchantEmail) {
      console.error("[SumUp] ❌ Configuration manquante")
      return NextResponse.json(
        { error: "Configuration SumUp manquante" }, 
        { status: 500 }
      )
    }

    console.log("[SumUp] 📦 Création checkout:", {
      amount: amount.toFixed(2) + "€",
      reference: checkoutReference,
    })

    // Appel API SumUp
    const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount.toFixed(2)),
        currency: "EUR",
        checkout_reference: checkoutReference,
        description: description || `Commande Le Dressing Coloré - ${checkoutReference}`,
        pay_to_email: merchantEmail,
        redirect_url: `${baseUrl}/checkout/success`,
        return_url: `${baseUrl}/checkout/success`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[SumUp] ❌ Erreur:", errorData)

      let errorMessage = "Erreur lors de la création du paiement"
      if (response.status === 401) errorMessage = "Token SumUp invalide"
      if (response.status === 403) errorMessage = "Accès refusé"
      if (response.status === 409) errorMessage = "Commande déjà existante"

      return NextResponse.json(
        { error: errorMessage, details: errorData }, 
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log("[SumUp] ✅ Checkout créé:", data.id)

    return NextResponse.json(data)

  } catch (error) {
    console.error("[SumUp] ❌ Erreur:", error)
    return NextResponse.json(
      { error: "Erreur serveur" }, 
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const checkoutId = searchParams.get("id")

    if (!checkoutId) {
      return NextResponse.json({ error: "ID requis" }, { status: 400 })
    }

    const accessToken = process.env.SUMUP_ACCESS_TOKEN
    if (!accessToken) {
      return NextResponse.json({ error: "Config manquante" }, { status: 500 })
    }

    const response = await fetch(`https://api.sumup.com/v0.1/checkouts/${checkoutId}`, {
      headers: { "Authorization": `Bearer ${accessToken}` },
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Checkout non trouvé" }, { status: response.status })
    }

    return NextResponse.json(await response.json())
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}