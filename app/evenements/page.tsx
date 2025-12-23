"use client"

import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Calendar, Users, Music } from "lucide-react"

const upcomingEvents = [
  {
    title: "Soirée Musicale Andalouse",
    date: "15 Mars 2025",
    time: "20h00",
    description:
      "Plongez dans l'ambiance envoûtante de la musique andalouse traditionnelle tout en savourant notre menu dégustation spécial. Artistes en direct depuis Fès.",
    image: "/images/event-music.jpg",
    capacity: "60 personnes",
    price: "550 MAD par personne",
  },
  {
    title: "Atelier Cuisine Marocaine",
    date: "22 Mars 2025",
    time: "14h00",
    description:
      "Apprenez les secrets de la cuisine marocaine avec notre chef. Préparation de tajine, couscous, pastilla et pâtisseries traditionnelles. Tablier et recettes inclus.",
    image: "/images/event-cooking.jpg",
    capacity: "12 personnes",
    price: "750 MAD par personne",
  },
  {
    title: "Célébration du Ramadan",
    date: "Du 1er au 30 Avril 2025",
    time: "Après le Maghreb",
    description:
      "Menu spécial Iftar avec harira, chebakia, dates et nos meilleurs plats traditionnels. Réservation recommandée pour partager ce moment de convivialité dans la tradition marocaine.",
    image: "/images/event-ramadan.jpg",
    capacity: "Sur réservation",
    price: "Menu à partir de 350 MAD",
  },
]

const privateEvents = [
  {
    icon: Users,
    title: "Événements Privés",
    description:
      "Organisez vos événements dans notre espace privatisable pouvant accueillir jusqu'à 60 personnes. Mariages, anniversaires, événements d'entreprise.",
  },
  {
    icon: Music,
    title: "Soirées à Thème",
    description:
      "Profitez de nos soirées musicales mensuelles avec des artistes traditionnels marocains dans une ambiance authentique et chaleureuse.",
  },
  {
    icon: Calendar,
    title: "Déjeuners d'Affaires",
    description:
      "Nos salons privés sont parfaits pour vos déjeuners d'affaires. Menu personnalisé et service discret garanti.",
  },
]

export default function EvenementsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <MoroccanPatternBorder side="left" />
        <MoroccanPatternBorder side="right" />

        <div
          className={`max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6 tracking-wider">Événements</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez nos événements à venir et privatisez notre restaurant pour vos occasions spéciales
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">
            Événements à Venir
          </h2>

          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.2}s both`,
                }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative group overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300">
                    <h3 className="text-3xl font-serif text-primary mb-4">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-primary" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-serif text-primary">{event.price}</span>
                      <Button className="gold-texture text-background hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                        Réserver
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="relative py-20 px-4 moroccan-pattern">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">
            Événements Privés
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privateEvents.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 group text-center"
                  style={{
                    animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 gold-texture group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-background" />
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">
            Ils Nous Font Confiance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Leila Bennis",
                event: "Mariage",
                text: "Une soirée magique dans un cadre somptueux! Le service, la cuisine, l'ambiance... tout était parfait. Nos invités en parlent encore des mois après!",
              },
              {
                name: "Omar Tazi",
                event: "Événement d'entreprise",
                text: "Professionnalisme exceptionnel. L'équipe du Rêve Marocain a su créer une expérience sur mesure pour notre événement d'entreprise.",
              },
              {
                name: "Sanaa Lahlou",
                event: "Anniversaire",
                text: "Un moment inoubliable dans une ambiance authentiquement marocaine. La cuisine était exceptionnelle et le service impeccable!",
              },
              {
                name: "Mehdi Alami",
                event: "Atelier cuisine",
                text: "L'atelier cuisine était fantastique! J'ai appris les secrets du tajine parfait et l'ambiance était très conviviale.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-primary font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border-2 border-primary p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 gold-texture" />
            <div className="absolute bottom-0 left-0 w-full h-2 gold-texture" />

            <svg className="w-16 h-16 text-primary mx-auto mb-6" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
              <circle cx="50" cy="50" r="8" />
            </svg>

            <h3 className="text-3xl font-serif text-primary mb-4">Organisez Votre Événement</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contactez-nous pour discuter de votre projet et recevoir une proposition personnalisée. Notre équipe est à
              votre disposition pour créer un événement mémorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-background transition-all duration-300 px-8 py-6 inline-block text-center"
              >
                Nous Contacter
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
      `}</style>
    </div>
  )
}
