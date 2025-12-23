import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Le Rêve Marocain - Restaurant Marocain Authentique",
  description: "Découvrez les saveurs authentiques du Maroc dans un cadre raffiné à Paris",
  icons: {
    // Use a versioned SVG filename to avoid stale browser cache
    icon: "/icon-v2.svg",
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
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
