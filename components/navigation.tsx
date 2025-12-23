"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useIsMobile } from "./ui/use-mobile"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        (isScrolled || isMobile) ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Desktop Navigation - Left */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/menus"
              className="text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Menus
            </Link>
            <Link
              href="/a-propos"
              className="text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300"
            >
              À propos
            </Link>
          </div>

          <Link href="/" className="flex flex-col items-center group">
            <div className="relative">
              {/* Moroccan Star Logo */}
              <svg
                className="w-12 h-12 lg:w-16 lg:h-16 text-primary transition-transform duration-500 group-hover:rotate-45"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
                <circle cx="50" cy="50" r="8" />
              </svg>
            </div>
            <div className="text-center mt-2 whitespace-nowrap">
              <div className="text-xl lg:text-2xl font-serif tracking-wider text-primary">LE RÊVE MAROCAIN</div>
            </div>
          </Link>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/evenements"
              className="text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Événements
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-primary p-2 absolute right-4 top-1/2 -translate-y-1/2 z-50 hover:scale-110 transition-transform duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-background/98 backdrop-blur-xl border-l border-primary/30 shadow-2xl transform transition-all duration-700 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L22 8L30 8L24 13L27 21L20 16L13 21L16 13L10 8L18 8z' fill='%23d4af37' opacity='0.03'/%3E%3C/svg%3E\")",
          }}
        >
          {/* Close button inside menu */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-primary hover:rotate-90 transition-transform duration-500"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          {/* Logo in mobile menu */}
          <div className="flex flex-col items-center pt-16 pb-8 border-b border-primary/20">
            <svg className="w-16 h-16 text-primary mb-4" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
              <circle cx="50" cy="50" r="8" />
            </svg>
            <div className="text-2xl font-serif text-primary whitespace-nowrap">LE RÊVE MAROCAIN</div>
          </div>

          {/* Menu items with staggered animations */}
          <nav className="flex flex-col gap-2 p-8">
            {[
              { href: "/menus", label: "Menus", delay: 0.1 },
              { href: "/a-propos", label: "À propos", delay: 0.2 },
              { href: "/evenements", label: "Événements", delay: 0.3 },
              { href: "/contact", label: "Contact", delay: 0.4 },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-lg tracking-widest uppercase text-primary py-4 px-6 hover:bg-primary/10 transition-all duration-500 border-l-4 border-transparent hover:border-primary ${
                  isMobileMenuOpen ? "animate-slide-in-right" : ""
                }`}
                style={{
                  animationDelay: `${item.delay}s`,
                  animationFillMode: "both",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:translate-x-2 inline-block transition-transform duration-300">
                  {item.label}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-2 left-6 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-500" />
              </Link>
            ))}
          </nav>

          {/* Decorative element at bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20">
            <svg className="w-32 h-32 text-primary" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
              <circle cx="50" cy="50" r="8" />
            </svg>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  )
}
