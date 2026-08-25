import { Trophy, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Results() {
  return (
    <section className="bg-gradient-to-r from-primary to-accent py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge className="mb-4 bg-background/20 text-primary-foreground hover:bg-background/30">
            Último Resultado
          </Badge>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
          {/* Home Team */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background/10 backdrop-blur sm:h-32 sm:w-32">
              <Trophy className="h-12 w-12 text-primary-foreground sm:h-16 sm:w-16" />
            </div>
            <div className="text-center">
              <h3 className="font-[family-name:var(--font-bebas)] text-xl font-bold text-primary-foreground sm:text-2xl">
                VOY A CAMBIAR FC
              </h3>
              <p className="text-sm text-primary-foreground/70">Local</p>
            </div>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-4">
              <span className="font-[family-name:var(--font-bebas)] text-6xl font-bold text-primary-foreground sm:text-8xl">
                4
              </span>
              <span className="font-[family-name:var(--font-bebas)] text-4xl text-primary-foreground/50 sm:text-6xl">
                -
              </span>
              <span className="font-[family-name:var(--font-bebas)] text-6xl font-bold text-primary-foreground sm:text-8xl">
                1
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>28 Feb 2026</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>Campo Municipal</span>
              </div>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background/10 backdrop-blur sm:h-32 sm:w-32">
              <svg className="h-12 w-12 text-primary-foreground sm:h-16 sm:w-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="text-center">
              <h3 className="font-[family-name:var(--font-bebas)] text-xl font-bold text-primary-foreground sm:text-2xl">
                REAL UNIDOS
              </h3>
              <p className="text-sm text-primary-foreground/70">Visitante</p>
            </div>
          </div>
        </div>

        {/* Goal Scorers */}
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-16">
          <div className="text-center">
            <p className="text-sm text-primary-foreground/70">Goleadores</p>
            <div className="mt-2 space-y-1">
              <p className="text-primary-foreground">García 12&apos;, 45&apos;</p>
              <p className="text-primary-foreground">Martínez 67&apos;</p>
              <p className="text-primary-foreground">López 89&apos;</p>
            </div>
          </div>
          <div className="hidden h-16 w-px bg-primary-foreground/20 sm:block" />
          <div className="text-center">
            <p className="text-sm text-primary-foreground/70">MVP del Partido</p>
            <p className="mt-2 font-[family-name:var(--font-bebas)] text-xl font-bold text-primary-foreground">
              Carlos García
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
