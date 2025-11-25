import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { amount, description, checkoutReference } = await request.json()

    // Validate required environment variables
    const accessToken = process.env.SUMUP_ACCESS_TOKEN
    const merchantEmail = process.env.SUMUP_MERCHANT_EMAIL

    if (!accessToken || !merchantEmail) {
      return NextResponse.json({ error: "SumUp configuration missing" }, { status: 500 })
    }

    // Create checkout with SumUp API
    const response = await fetch("https://api.sumup.com/v0.1/checkouts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        currency: "EUR",
        checkout_reference: checkoutReference,
        description: description,
        pay_to_email: merchantEmail,
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout/success`,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] SumUp API error:", errorData)
      return NextResponse.json({ error: "Failed to create checkout", details: errorData }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Checkout creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
