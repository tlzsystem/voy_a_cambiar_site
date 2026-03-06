"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"

type Position = "all" | "porteros" | "defensas" | "centrocampistas" | "delanteros"

const players = [
  { id: 1, name: "Sebastian Sanhueza", number: 1, position: "porteros", role: "Portero" },
  { id: 2, name: "Samuel Toloza", number: 4, position: "defensas", role: "Central" },
  { id: 3, name: "Oliver Jara", number: 2, position: "defensas", role: "Central" },
  { id: 4, name: "Felipe Escobar", number: 3, position: "defensas", role: "Lateral" },
  { id: 5, name: "Hector Regalon", number: 4, position: "defensas", role: "Central" },
  { id: 6, name: "Cristian Dinho", number: 4, position: "defensas", role: "Lateral" },
  { id: 7, name: "Diego Cortez", number: 5, position: "defensas", role: "Lateral" },
  { id: 8, name: "Vitoco", number: 5, position: "defensas", role: "Lateral" },
  { id: 9, name: "Vicente Perez", number: 6, position: "centrocampistas", role: "Mediocentro" },
  { id: 10, name: "Gabriel Turbina", number: 8, position: "centrocampistas", role: "Mediocentro" },
  { id: 11, name: "Jazz", number: 10, position: "centrocampistas", role: "Mediapunta" },
  { id: 12, name: "Juan K", number: 10, position: "centrocampistas", role: "Mediapunta" },
  { id: 13, name: "Jarol Catalan", number: 14, position: "centrocampistas", role: "Interior" },
  { id: 14, name: "Francisco Roman", number: 7, position: "delanteros", role: "Extremo Derecho" },
  { id: 15, name: "Julio Castillo", number: 9, position: "delanteros", role: "Delantero Centro" },
  { id: 16, name: "Jere", number: 11, position: "delanteros", role: "Delantero Centr" },
]

const positions: { value: Position; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "porteros", label: "Porteros" },
  { value: "defensas", label: "Defensas" },
  { value: "centrocampistas", label: "Centrocampistas" },
  { value: "delanteros", label: "Delanteros" },
]

export function Team() {
  const [filter, setFilter] = useState<Position>("all")

  const filteredPlayers = filter === "all" 
    ? players 
    : players.filter((p) => p.position === filter)

  return (
    <section id="plantilla" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Nuestro Equipo
          </Badge>
          <h2 className="text-balance font-[family-name:var(--font-bebas)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            PLANTILLA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Conoce a los jugadores que representan nuestros colores con orgullo y pasión.
          </p>
        </div>

        {/* Position Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {positions.map((pos) => (
            <Button
              key={pos.value}
              variant={filter === pos.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(pos.value)}
              className={filter === pos.value ? "bg-primary text-primary-foreground" : ""}
            >
              {pos.label}
            </Button>
          ))}
        </div>

        {/* Players Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPlayers.map((player) => (
            <Card
              key={player.id}
              className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <div className="flex h-full items-center justify-center">
                  <User className="h-24 w-24 text-muted-foreground/30" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <span className="font-[family-name:var(--font-bebas)] text-5xl font-bold text-primary-foreground/80">
                    {player.number}
                  </span>
                </div>
                <div className="absolute right-2 top-2">
                  <Badge className="bg-primary text-primary-foreground">
                    {player.role}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-[family-name:var(--font-bebas)] text-lg font-semibold text-card-foreground">
                  {player.name}
                </h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {player.position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Staff Section */}
        <div className="mt-16">
          <h3 className="mb-8 text-center font-[family-name:var(--font-bebas)] text-2xl font-bold text-foreground">
            CUERPO TÉCNICO
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Felipe Escobar", role: "Primer Entrenador" },
              { name: "Vicente Perez", role: "Segundo Entrenador" },
              { name: "Oliver Jara", role: "Tercer Entrenador" },
              { name: "Francisco Román", role: "Cuarto Entrenador" },
            ].map((staff) => (
              <Card
                key={staff.name}
                className="border-border bg-card transition-all hover:shadow-md"
              >
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-bebas)] font-semibold text-card-foreground">
                      {staff.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{staff.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
