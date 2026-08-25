import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import matches from "@/data/matchs.js"

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`)
}

export function CalendarSection() {
  const now = new Date()
  const currentMatches = matches.filter((match) => {
    const date = formatDate(match.date)
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
  })

  return (
    <section id="calendario" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">Partidos del mes</Badge>
          <h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-foreground sm:text-5xl">CALENDARIO</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Los encuentros programados para este mes.</p>
        </div>

        {currentMatches.length === 0 ? (
          <p className="text-center text-muted-foreground">No hay partidos registrados este mes.</p>
        ) : (
          <div className="mx-auto flex max-w-4xl flex-col gap-4">
            {currentMatches.map((match) => {
              const date = formatDate(match.date)
              const played = Boolean(match.result)
              return (
                <Card key={match.id} className="border-border bg-card">
                  <div className="grid gap-5 p-5 sm:grid-cols-[104px_1fr_190px] sm:items-center sm:gap-6 sm:p-6">
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <span className="text-xs uppercase">{date.toLocaleDateString("es-ES", { month: "short" })}</span>
                        <span className="font-[family-name:var(--font-bebas)] text-2xl leading-none">{date.getDate()}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{match.time}</span>
                    </div>

                    <div className="min-w-0 text-center">
                      <div className="flex min-h-8 items-center justify-center gap-2 sm:gap-3">
                        <span className="break-words font-[family-name:var(--font-bebas)] text-lg tracking-wide text-foreground sm:text-xl">{match.homeTeam}</span>
                        <span className="shrink-0 text-sm font-semibold text-muted-foreground">vs</span>
                        <span className="break-words font-[family-name:var(--font-bebas)] text-lg tracking-wide text-foreground sm:text-xl">{match.awayTeam}</span>
                      </div>
                      <div className="mt-3 border-t border-border pt-3">
                        <span className={`font-[family-name:var(--font-bebas)] text-base tracking-wider ${played ? "text-primary" : "text-muted-foreground"}`}>
                          {played ? `RESULTADO: ${match.result.home} - ${match.result.away}` : "POR JUGAR"}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-center sm:items-end sm:text-right">
                      <Badge variant="outline">{match.competition}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-4 w-4 shrink-0" />{match.venue}</span>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default CalendarSection
