interface SumUpCheckoutRequest {
  amount: number
  currency: string
  checkout_reference: string
  description: string
  pay_to_email: string
  redirect_url?: string
}

interface SumUpCheckoutResponse {
  id: string
  checkout_reference: string
  amount: number
  currency: string
  status: string
}

export async function createSumUpCheckout(
  amount: number,
  description: string,
  checkoutReference: string,
): Promise<SumUpCheckoutResponse> {
  const response = await fetch("/api/sumup/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      description,
      checkoutReference,
    }),
  })

  if (!response.ok) {
    throw new Error("Failed to create checkout")
  }

  return response.json()
}

export function loadSumUpSDK(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") {
      reject(new Error("Window is undefined"))
      return
    }

    if ((window as any).SumUpCard) {
      resolve()
      return
    }

    const script = document.createElement("script")
    script.src = "https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error("Failed to load SumUp SDK"))
    document.head.appendChild(script)
  })
}

export async function mountSumUpCard(checkoutId: string, onSuccess: () => void, onError: (error: any) => void) {
  try {
    await loadSumUpSDK()

    const SumUpCard = (window as any).SumUpCard

    SumUpCard.mount({
      id: "sumup-card",
      checkoutId: checkoutId,
      onResponse: (type: string, body: any) => {
        if (type === "success") {
          onSuccess()
        } else if (type === "error") {
          onError(body)
        }
      },
    })
  } catch (error) {
    onError(error)
  }
}
