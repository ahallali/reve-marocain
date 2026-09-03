"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { MoroccanPatternBorder } from "@/components/moroccan-pattern-border"
import { Button } from "@/components/ui/button"

export default function ReservationPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // For now we just simulate a successful submit.
    setSubmitted(true)
    // In a real app you'd call an API here.
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative py-20 px-4 pt-28">
        <MoroccanPatternBorder side="left" />
        <MoroccanPatternBorder side="right" />

        <div className="max-w-5xl mx-auto bg-surface border border-border rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Info */}
            <div className="p-8 md:p-12 bg-gradient-to-b from-background/80 to-transparent">
              <h1 className="text-3xl lg:text-4xl font-serif text-primary mb-4">Réserver une table — démonstration</h1>
              <p className="text-muted-foreground mb-6">
                Prototype de formulaire : aucune réservation ne sera envoyée ou enregistrée. Utilisez uniquement des informations fictives.
              </p>

              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Horaires: 12h00 - 23h00 (vérifiez nos heures selon le jour)</li>
                <li>Adresse: 45 Avenue Hassan II, Casablanca</li>
                <li>Téléphone: +212 522 48 79 80</li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="p-6 md:p-10">
              {submitted ? (
                <div className="p-6 rounded-lg bg-background/50 border border-border text-center">
                  <h2 className="text-xl font-medium text-primary mb-2">Démonstration terminée</h2>
                  <p className="text-muted-foreground">Aucune réservation n’a été créée et aucun e-mail n’a été envoyé.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Nom</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">E‑mail</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Téléphone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Date</label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Heure</label>
                      <input
                        name="time"
                        type="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-muted-foreground mb-2">Convives</label>
                      <select
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Remarques (facultatif)</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full gold-texture text-background font-medium tracking-widest uppercase px-6 py-4">
                      Tester le formulaire
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
