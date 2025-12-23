"use client"

import type React from "react"

import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-serif: ${cormorant.style.fontFamily};
        }
        .font-serif {
          font-family: var(--font-serif);
        }
      `}</style>
      {children}
    </>
  )
}
