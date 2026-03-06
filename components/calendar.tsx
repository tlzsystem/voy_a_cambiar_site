import { Calendar, MapPin, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const matches = [
  {
    id: 1,
    homeTeam: "Voy A Cambiar FC",
    awayTeam: "La Esquina FC",
    date: "4 Mar 2026",
    time: "21:00",
    venue: "La Araucana",
    isHome: true,
    competition: "Amistoso",
  },
  {
    id: 2,
    homeTeam: "Voy A Cambiar FC",
    awayTeam: "Union Panen",
    date: "4 Mar 2026",
    time: "22:00",
    venue: "La Araucana",
    isHome: true,
    competition: "Amistoso",
  },
  {
    id: 3,
    homeTeam: "Voy A Cambiar FC",
    awayTeam: "Por Confirmar",
    date: "18 Mar 2026",
    time: "21:20",
    venue: "Mall Tobalaba",
    isHome: true,
    competition: "Amistoso",
  },
  {
    id: 4,
    homeTeam: "Voy A Cambiar FC",
    awayTeam: "Por Confirmar",
    date: "18 Mar 2026",
    time: "22:20",
    venue: "Mall Tobalaba",
    isHome: true,
    competition: "Amistoso",
  },
  {
    id: 5,
    homeTeam: "Voy A Cambiar FC",
    awayTeam: "Torneo Relampago",
    date: "28 Mar 2026",
    time: "20:00",
    venue: "Florida Soccer",
    isHome: true,
    competition: "Torneo Relampago",
  },
]

export function CalendarSection() {
  return (
    <section id="calendario" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Próximos Partidos
          </Badge>
          <h2 className="text-balance font-[family-name:var(--font-bebas)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            CALENDARIO MARZO
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            No te pierdas ningún partido. Aquí tienes los próximos encuentros del equipo.
          </p>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {matches.map((match) => (
            <Card
              key={match.id}
              className="overflow-hidden border-border bg-card transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                {/* Date & Time */}
                <div className="flex items-center gap-4 sm:w-40">
                  <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <span className="text-xs font-medium">{match.date.split(" ")[1]}</span>
                    <span className="font-[family-name:var(--font-bebas)] text-xl font-bold">{match.date.split(" ")[0]}</span>
                  </div>
                  <div className="sm:hidden">
                    <p className="font-medium text-card-foreground">{match.time}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {match.competition}
                    </Badge>
                  </div>
                </div>

                {/* Teams */}
                <div className="flex flex-1 flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <div className="flex items-center gap-3 sm:w-48 sm:justify-end">
                    <span className={`font-[family-name:var(--font-bebas)] text-lg ${match.isHome ? "font-bold text-card-foreground" : "text-muted-foreground"}`}>
                      {match.homeTeam}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="font-[family-name:var(--font-bebas)] text-sm font-bold text-primary">VS</span>
                  </div>

                  <div className="flex items-center gap-3 sm:w-48">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <svg className="h-5 w-5 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className={`font-[family-name:var(--font-bebas)] text-lg ${!match.isHome ? "font-bold text-card-foreground" : "text-muted-foreground"}`}>
                      {match.awayTeam}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="hidden flex-col items-end gap-1 sm:flex sm:w-40">
                  <Badge variant="outline" className="text-xs">
                    {match.competition}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{match.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{match.venue}</span>
                  </div>
                </div>

                {/* Mobile Info */}
                <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground sm:hidden">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{match.venue}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
