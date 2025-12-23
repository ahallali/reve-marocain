"use client"

import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const menuCategories = [
  {
    title: "Entrées",
    items: [
      {
        name: "Briouates au Fromage",
        description: "Petits feuilletés croustillants farcis au fromage de chèvre et aux herbes fraîches",
        price: "120MAD",
      },
      {
        name: "Zaalouk",
        description: "Caviar d'aubergines aux tomates confites, ail et épices marocaines",
        price: "100MAD",
      },
      {
        name: "Pastilla au Poulet",
        description: "Feuilleté traditionnel au poulet effiloché, amandes et cannelle",
        price: "160MAD",
      },
      {
        name: "Assortiment de Salades Marocaines",
        description: "Sélection de cinq salades fraîches préparées selon la tradition",
        price: "140MAD",
      },
    ],
  },
  {
    title: "Tajines",
    items: [
      {
        name: "Tajine d'Agneau aux Pruneaux",
        description: "Agneau fondant mijoté avec pruneaux, amandes grillées et miel",
        price: "280MAD",
      },
      {
        name: "Tajine de Poulet aux Citrons Confits",
        description: "Poulet fermier mariné aux épices, citrons confits et olives violettes",
        price: "240MAD",
      },
      {
        name: "Tajine de Poisson",
        description: "Poisson du jour aux légumes de saison et sauce chermoula",
        price: "260MAD",
      },
      {
        name: "Tajine Végétarien",
        description: "Légumes de saison mijotés aux épices douces et fruits secs",
        price: "220MAD",
      },
    ],
  },
  {
    title: "Couscous",
    items: [
      {
        name: "Couscous Royal",
        description: "Semoule fine aux sept légumes, agneau, poulet et merguez",
        price: "320MAD",
      },
      {
        name: "Couscous au Poulet",
        description: "Couscous traditionnel au poulet fermier et légumes de saison",
        price: "260MAD",
      },
      {
        name: "Couscous Impérial",
        description: "Notre couscous signature aux viandes grillées et légumes confits",
        price: "350MAD",
      },
      {
        name: "Couscous Tfaya",
        description: "Agneau caramélisé aux oignons, raisins secs et cannelle",
        price: "300MAD",
      },
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Cornes de Gazelle",
        description: "Pâtisseries traditionnelles aux amandes parfumées à la fleur d'oranger",
        price: "80MAD",
      },
      {
        name: "Baklava Maison",
        description: "Feuilletés au miel, pistaches et amandes",
        price: "90MAD",
      },
      {
        name: "M'hanncha",
        description: "Gâteau en forme de serpent aux amandes et cannelle",
        price: "100MAD",
      },
      {
        name: "Assortiment de Pâtisseries",
        description: "Sélection de pâtisseries orientales préparées par notre pâtissier",
        price: "120MAD",
      },
    ],
  },
]

const drinkCategories = [
  {
    title: "Boissons Chaudes",
    items: [
      { name: "Thé à la Menthe Traditionnel", price: "60MAD" },
      { name: "Café Marocain aux Épices", price: "50MAD" },
      { name: "Infusion aux Fleurs d'Oranger", price: "60MAD" },
    ],
  },
  {
    title: "Boissons Fraîches",
    items: [
      { name: "Jus d'Orange Pressé", price: "70MAD" },
      { name: "Citronnade à la Menthe", price: "60MAD" },
      { name: "Lait d'Amande Maison", price: "70MAD" },
    ],
  },
]

export default function MenusPage() {
  const [selectedCategory, setSelectedCategory] = useState(0)
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
          <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6 tracking-wider">Nos Menus</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez notre carte élaborée avec soin, mêlant traditions ancestrales et créativité culinaire. Chaque plat
            est une invitation au voyage.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="relative py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {menuCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  selectedCategory === index
                    ? "gold-texture text-background shadow-lg scale-105"
                    : "bg-secondary text-primary hover:bg-secondary/80 hover:scale-105"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {menuCategories[selectedCategory].items.map((item, index) => (
              <div
                key={index}
                className="group"
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary hover:scale-102 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-medium text-primary ml-4 whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="relative py-20 px-4 moroccan-pattern">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-serif text-center text-primary mb-16 tracking-wider">
            Nos Boissons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {drinkCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-2xl font-serif text-primary mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center p-4 bg-card/50 border border-border hover:border-primary transition-all duration-300"
                    >
                      <span className="text-foreground">{item.name}</span>
                      <span className="text-primary font-medium ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu du Jour CTA */}
      <section className="relative py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card border border-primary p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 gold-texture" />
            <div className="absolute bottom-0 left-0 w-full h-1 gold-texture" />

            <svg className="w-16 h-16 text-primary mx-auto mb-6" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5L57 30L82 30L62 45L70 70L50 55L30 70L38 45L18 30L43 30z" />
              <circle cx="50" cy="50" r="8" />
            </svg>

            <h3 className="text-3xl font-serif text-primary mb-4">Menu du Jour</h3>
            <p className="text-muted-foreground mb-6">
              Découvrez notre menu surprise élaboré chaque jour avec des produits frais de saison
            </p>
            <div className="text-4xl font-serif text-primary mb-6">380MAD</div>
            <p className="text-sm text-muted-foreground">Entrée • Plat • Dessert • Thé à la menthe</p>
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
