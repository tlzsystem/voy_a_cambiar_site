'use client'

import Image from "next/image"
import { MapPin, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import matches from "@/data/matches.json"
import { AddToCalendarButton } from "add-to-calendar-button-react"

type Match = (typeof matches)[number]

function formatDate(value: string) {
  return new Date(value.replace(" ", "T"))
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
            {currentMatches.map((match: Match) => {
              const date = formatDate(match.date)
              const startDateStr = date.toISOString().split("T")[0]
              const startTimeStr = date.toTimeString().slice(0, 5)
              
              const endDateObj = new Date(date.getTime() + 1 * 60 * 60 * 1000)
              const endDateStr = endDateObj.toISOString().split("T")[0]
              const endTimeStr = endDateObj.toTimeString().slice(0, 5)

              return (
                <Card key={match.id} className="border-border bg-card">
                  {/* Cambiamos el Grid a 2 columnas principales en desktop */}
                  <div className="grid gap-5 p-5 sm:grid-cols-[104px_1fr] sm:items-center sm:gap-6 sm:p-6">
                    
                    {/* Columna 1: Fecha */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <span className="text-xs uppercase">{date.toLocaleDateString("es-ES", { month: "short" })}</span>
                        <span className="font-[family-name:var(--font-bebas)] text-2xl leading-none">{date.getDate()}</span>
                      </div>
                    </div>

                    {/* Columna 2: Equipos, Resultado, Ubicación y Botón abajo */}
                    <div className="min-w-0 text-center">
                      <div className="flex min-h-10 items-center justify-center gap-3 sm:gap-5">
                        <span className="flex min-w-0 items-center justify-end gap-2 text-right">
                          <span className="break-words font-[family-name:var(--font-bebas)] text-lg tracking-wide text-foreground sm:text-xl">{match.team_a}</span>
                          {match.team_a_logo ? (
                            <Image src={match.team_a_logo} alt={`Escudo de ${match.team_a}`} width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
                          ) : (
                            <Trophy className="h-8 w-8 shrink-0 text-primary" aria-label={`Copa para ${match.team_a}`} />
                          )}
                        </span>
                        <span className="shrink-0 text-sm font-semibold text-muted-foreground">vs</span>
                        <span className="flex min-w-0 items-center gap-2 text-left">
                          {match.team_b_logo ? (
                            <Image src={match.team_b_logo} alt={`Escudo de ${match.team_b}`} width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
                          ) : (
                            <Trophy className="h-8 w-8 shrink-0 text-primary" aria-label={`Copa para ${match.team_b}`} />
                          )}
                          <span className="break-words font-[family-name:var(--font-bebas)] text-lg tracking-wide text-foreground sm:text-xl">{match.team_b}</span>
                        </span>
                      </div>

                      {/* Ubicación e Hora (agrupado sutilmente) */}
                      <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 shrink-0" />{match.location}</span>
                        <span>•</span>
                        <span>{date.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })} hrs</span>
                      </div>

                      {/* Sección Estado / Resultado */}
                      <div className="mt-3 border-t border-border pt-3">
                        <span className={`font-[family-name:var(--font-bebas)] text-base tracking-wider ${match.status === "completed" ? "text-primary" : "text-muted-foreground"}`}>
                          {match.status === "completed" ? `RESULTADO: ${match.score_team_a} - ${match.score_team_b}` : "POR JUGAR"}
                        </span>
                      </div>

                   
                      {match.status !== "completed" && (
                        <div className="mt-4 flex justify-center">
                          <AddToCalendarButton
                            name={`${match.team_a} vs ${match.team_b}`}
                            startDate={startDateStr}
                            startTime={startTimeStr}
                            endDate={endDateStr}
                            endTime={endTimeStr}
                            location={match.location}
                            options={['Google', 'Apple', 'Outlook.com', 'Yahoo']}
                            timeZone="America/Santiago"
                            language="es"
                            buttonStyle="round"
                            lightMode="bodyScheme"
                            size="1"
                          />
                        </div>
                      )}

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