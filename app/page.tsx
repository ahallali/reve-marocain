"use client"

import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Moroccan Pattern Borders */}
        <MoroccanPatternBorder side="left" />
        <MoroccanPatternBorder side="right" />

        {/* Gold Texture Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full opacity-20">
          <div className="w-full h-full gold-texture" />
        </div>
        <div className="absolute right-0 top-0 w-32 h-full opacity-20">
          <div className="w-full h-full gold-texture" />
        </div>

        {/* Main Content */}
        <div
          ref={heroRef}
          className={`relative z-10 max-w-4xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Hero Image Container */}
          <div className="relative group">
            <div className="relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <Image
                src="/images/tagine-hero.jpg"
                alt="Tajine Marocain"
                width={800}
                height={600}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Decorative Gold Elements */}
              <div className="absolute bottom-8 right-8 z-20">
                <svg className="w-24 h-24 text-primary opacity-80" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="70" rx="30" ry="15" fill="currentColor" />
                  <path d="M35 70 Q50 50 65 70" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>

            {/* Reservation Button */}
            <div className="flex justify-center mt-8">
              <Link
                href="/reservation"
                className="gold-texture text-background font-medium tracking-widest uppercase px-8 sm:px-12 py-3 sm:py-6 text-sm sm:text-base hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                Réserver une table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="relative py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">
            NOS SPÉCIALITÉS
          </h2>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { src: "/images/tagine-1.jpg", title: "Tajine d'Agneau aux Pruneaux" },
              { src: "/images/tagine-2.jpg", title: "Couscous Royal aux Sept Légumes" },
              { src: "/images/tagine-3.jpg", title: "Tajine de Poulet aux Citrons" },
              { src: "/images/tagine-4.jpg", title: "Couscous Impérial" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden cursor-pointer"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Title Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center p-6">
                    <h3 className="text-primary text-center text-sm lg:text-base font-medium tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-20 lg:py-32 px-4 moroccan-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">Une Expérience Authentique</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Découvrez les saveurs authentiques du Maroc dans un cadre raffiné. Notre chef vous transporte dans un voyage
            culinaire à travers les traditions ancestrales de la cuisine marocaine.
          </p>
          <Link
            href="/a-propos"
            className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 tracking-widest uppercase inline-block text-center"
          >
            En savoir plus
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Horaires</h3>
              <p className="text-muted-foreground text-sm">
                Lundi - Jeudi: 12h00 - 23h00
                <br />
                Vendredi - Samedi: 12h00 - 00h30
                <br />
                Dimanche: 12h00 - 23h00
              </p>
            </div>
            <div>
              <h3 className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Contact</h3>
              <p className="text-muted-foreground text-sm">
                45 Avenue Hassan II
                <br />
                Casablanca 20250, Maroc
                <br />
                +212 522 48 79 80
              </p>
            </div>
            <div>
              <h3 className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Suivez-nous</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Le Rêve Marocain. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
