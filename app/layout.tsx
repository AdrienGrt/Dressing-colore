import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "Le Dressing Coloré | Vêtements Réversibles Artisanaux",
  description:
    "Découvrez nos vêtements réversibles uniques, confectionnés à la main dans le Sud-Ouest. Manteaux, vestes et gilets en wax et bouclette.",
  generator: "v0.app",
  keywords: [
    "vêtements réversibles",
    "wax",
    "bouclette",
    "artisanal",
    "fait main",
    "mode éthique",
    "slow fashion",
    "pièce unique",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${plusJakarta.variable} font-sans antialiased`}>
        <CartProvider>
          <Navigation />
          {children}
          <Footer />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}