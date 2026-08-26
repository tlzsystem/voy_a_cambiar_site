"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import players from "@/data/players.json"

type Position = "all" | "portero" | "defensa" | "mediocampista" | "delantero"
const positions: { value: Position; label: string }[] = [{ value: "all", label: "Todos" }, { value: "portero", label: "Portero" }, { value: "defensa", label: "Defensa" }, { value: "mediocampista", label: "Mediocampista" }, { value: "delantero", label: "Delantero" }]
const positionLabels: Record<Exclude<Position, "all">, string> = { portero: "Porteros", defensa: "Defensas", mediocampista: "Mediocampistas", delantero: "Delanteros" }

type PlayerWithImage = (typeof players)[number] & { image?: string }

export function Team() {
  const [filter, setFilter] = useState<Position>("all")
  const filteredPlayers = filter === "all" ? players : players.filter((player) => player.position === filter)
  return <section id="plantilla" className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 text-center"><Badge variant="secondary" className="mb-4">Nuestro Equipo</Badge><h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-foreground sm:text-5xl">PLANTILLA</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Conoce a los jugadores que representan nuestros colores.</p></div><div className="mb-10 flex flex-wrap justify-center gap-2">{positions.map((position) => <Button key={position.value} variant={filter === position.value ? "default" : "outline"} size="sm" onClick={() => setFilter(position.value)}>{position.label}</Button>)}</div><div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{filteredPlayers.map((player) => { const image = (player as PlayerWithImage).image; return <Card key={player.id} className="group overflow-hidden"><div className="relative aspect-[3/4] overflow-hidden bg-muted">{image ? <img src={image} alt={`Foto de ${player.name}`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" /> : <div className="flex h-full items-center justify-center"><User className="h-24 w-24 text-muted-foreground/30" /></div>}<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4"><span className="font-[family-name:var(--font-bebas)] text-5xl text-primary-foreground/80">{player.number}</span></div><div className="absolute right-2 top-2"><Badge className="bg-primary text-primary-foreground">{positionLabels[player.position as Exclude<Position, "all">]}</Badge></div></div><CardContent className="p-4 text-center"><h3 className="font-[family-name:var(--font-bebas)] text-xl text-card-foreground">{player.name}</h3><p className="text-sm text-muted-foreground">{positionLabels[player.position as Exclude<Position, "all">]}</p></CardContent></Card> })}</div></div></section>
}

