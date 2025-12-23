"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <MoroccanPatternBorder side="left" />
        <MoroccanPatternBorder side="right" />

        <div
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6 tracking-wider">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou réservation
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                info: "45 Avenue Hassan II\nCasablanca 20250, Maroc",
              },
              {
                icon: Phone,
                title: "Téléphone",
                info: "+212 522 48 79 80\n+212 661 23 45 67",
              },
              {
                icon: Mail,
                title: "Email",
                info: "contact@lerevemarocain.ma\nreservation@lerevemarocain.ma",
              },
              {
                icon: Clock,
                title: "Horaires",
                info: "Lun-Jeu: 12h-23h\nVen-Sam: 12h-00h30\nDim: 12h-23h",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group text-center"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 gold-texture group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-background" />
                  </div>
                  <h3 className="text-lg font-medium text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line leading-relaxed">{item.info}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              style={{
                animation: "fade-in-left 1s ease-out both",
              }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">Envoyez-nous un Message</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-secondary border-border focus:border-primary"
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-secondary border-border focus:border-primary"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-secondary border-border focus:border-primary"
                      placeholder="+212 6 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-secondary border-border focus:border-primary"
                    placeholder="Réservation, événement, question..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-secondary border-border focus:border-primary min-h-[150px]"
                    placeholder="Écrivez votre message ici..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gold-texture text-background hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 py-6 text-base tracking-wider uppercase"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>

            {/* Map & Info */}
            <div
              style={{
                animation: "fade-in-right 1s ease-out both",
              }}
            >
              <h2 className="text-3xl lg:text-4xl font-serif text-primary mb-6">Où Nous Trouver</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Situé sur l'Avenue Hassan II à Casablanca, notre restaurant est facilement accessible en voiture ou en
                taxi. Parking disponible à proximité.
              </p>

              {/* Map Placeholder */}
              <div className="relative aspect-square lg:aspect-[4/5] bg-secondary border border-border mb-6 overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">45 Avenue Hassan II</p>
                    <p className="text-muted-foreground">Casablanca 20250, Maroc</p>
                    <p className="text-sm text-muted-foreground/80 mt-4">Quartier Bourgogne</p>
                  </div>
                </div>
                <div className="absolute inset-0 moroccan-pattern opacity-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-20 px-4 moroccan-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border-2 border-primary p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 gold-texture" />
            <div className="absolute bottom-0 left-0 w-full h-2 gold-texture" />

            <svg className="w-16 h-16 text-primary mx-auto mb-6" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
              <circle cx="50" cy="50" r="8" />
            </svg>

            <h3 className="text-3xl font-serif text-primary mb-4">Réserver une Table</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Envie de vivre une expérience culinaire inoubliable ? Réservez dès maintenant votre table et laissez-vous
              transporter par les saveurs du Maroc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reservation"
                className="gold-texture text-background hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 px-8 py-6 inline-block text-center"
              >
                Réserver en Ligne
              </Link>
            </div>
          </div>
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
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
