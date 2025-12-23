"use client"

import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import Image from "next/image"
import { useState, useEffect } from "react"

const values = [
  {
    title: "Authenticité",
    description:
      "Nous perpétuons les traditions culinaires marocaines avec respect et passion, en utilisant des recettes transmises de génération en génération.",
  },
  {
    title: "Qualité",
    description:
      "Des ingrédients soigneusement sélectionnés, importés directement du Maroc ou issus de producteurs locaux de confiance.",
  },
  {
    title: "Excellence",
    description:
      "Notre chef et son équipe s'engagent à offrir une expérience gastronomique inoubliable à chaque visite.",
  },
  {
    title: "Hospitalité",
    description: "L'accueil chaleureux à la marocaine est au cœur de notre philosophie. Vous êtes ici chez vous.",
  },
]

export default function AProposPage() {
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
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6 tracking-wider">À Propos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            L'histoire d'une passion, d'un héritage et d'un rêve devenu réalité
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="order-2 lg:order-1"
              style={{
                animation: "fade-in-left 1s ease-out both",
              }}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le Rêve Marocain est né de la passion d'une famille pour la cuisine authentique du Maroc. En 2015,
                  nous avons ouvert nos portes à Casablanca avec une mission simple : célébrer et partager les saveurs
                  et l'hospitalité marocaine dans un cadre raffiné et contemporain.
                </p>
                <p>
                  Notre chef, formé dans les meilleures maisons de Marrakech et Fès, apporte avec lui un savoir-faire
                  ancestral qu'il perpétue avec créativité et respect des traditions. Chaque plat raconte une histoire,
                  chaque épice évoque un souvenir des souks et médinas du Maroc.
                </p>
                <p>
                  Aujourd'hui, Le Rêve Marocain est devenu une référence de la gastronomie marocaine à Casablanca, un
                  lieu où l'on vient pour savourer les traditions, pour retrouver les saveurs de l'enfance ou pour
                  découvrir une cuisine riche, généreuse et authentiquement marocaine.
                </p>
              </div>
            </div>

            <div
              className="order-1 lg:order-2"
              style={{
                animation: "fade-in-right 1s ease-out both",
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 gold-texture opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Intérieur du restaurant"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="relative py-20 px-4 moroccan-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              style={{
                animation: "fade-in-left 1s ease-out 0.2s both",
              }}
            >
              <div className="relative group">
                <div className="absolute inset-0 gold-texture opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                <Image
                  src="/images/chef-portrait.jpg"
                  alt="Notre Chef"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div
              style={{
                animation: "fade-in-right 1s ease-out 0.2s both",
              }}
            >
              <h2 className="text-4xl font-serif text-primary mb-6">Notre Chef</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-xl text-primary font-medium">Chef Karim El Mansouri</p>
                <p>
                  Originaire de Fès, Chef Karim a grandi entouré des arômes envoûtants de la cuisine marocaine
                  traditionnelle. Formé auprès des grands maîtres culinaires de Marrakech et Fès, il a perfectionné son
                  art pendant plus de vingt ans dans les riads et palaces les plus prestigieux du Maroc.
                </p>
                <p>
                  Sa philosophie : respecter les traditions tout en osant la créativité. Chaque tajine, chaque couscous
                  est préparé avec la même attention et le même amour que dans les cuisines familiales marocaines. Des
                  épices de Taliouine au safran de Taza, en passant par l'huile d'argan d'Essaouira.
                </p>
                <p>
                  Chef Karim sélectionne personnellement chaque épice des souks, chaque ingrédient, pour garantir
                  l'authenticité et la qualité de nos plats. Son engagement envers l'excellence a fait du Rêve Marocain
                  une adresse incontournable de la gastronomie marocaine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">Nos Valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 hover:border-primary transition-all duration-300 group"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex items-start gap-4">
                  <svg
                    className="w-12 h-12 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
                    <circle cx="50" cy="50" r="8" />
                  </svg>
                  <div>
                    <h3 className="text-2xl font-serif text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-8 tracking-wider">Notre Équipe</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Une équipe passionnée et dévouée, prête à vous faire vivre une expérience mémorable. Du chef aux serveurs,
            chaque membre incarne les valeurs d'hospitalité et d'excellence qui font la renommée du Rêve Marocain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Fatima Zahra Bennani", role: "Responsable de salle" },
              { name: "Youssef Alaoui", role: "Sous-chef" },
              { name: "Amina Idrissi", role: "Chef Pâtissière" },
            ].map((member, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="relative mb-4 overflow-hidden">
                  <Image
                    src={`/images/team-${index + 1}.jpg`}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>
                <h3 className="text-xl font-medium text-primary mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
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
