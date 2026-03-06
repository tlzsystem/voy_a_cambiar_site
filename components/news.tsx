import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const news = [
  {
    id: 1,
    title: "Empate y derrota en jornada doble",
    excerpt: "El equipo mostró buena actitud en empate y derrota con equipos de la Liga HZ.",
    date: "04 Mar 2026",
    category: "Partido",
    image: "/news-1.jpg",
  },
  {
    id: 2,
    title: "Nueva jornada de entrenamiento",
    excerpt: "Este miercoles 11 de marzo tendremos una nueva jornada de entrenamiento.",
    date: "06 Mar 2026",
    category: "Entrenamiento",
    image: "/news-2.jpg",
  },
  {
    id: 3,
    title: "Julio Castillo Jugador del partido",
    excerpt: "Saludamos a nuestro delantero Julio que fue elegido el jugador del partido en empate contra equipo La Esquina FC",
    date: "06 Mar 2026",
    category: "Partido",
    image: "/news-3.jpg",
  },
  {
    id: 4,
    title: "Entrenamiento en cara a Relampago",
    excerpt: "El cuerpo técnico ha preparado un programa intensivo para llegar en forma óptima.",
    date: "11 Mar 2026",
    category: "Entrenamiento",
    image: "/news-4.jpg",
  },
]

export function News() {
  return (
    <section id="noticias" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge variant="secondary" className="mb-4">
            Últimas Noticias
          </Badge>
          <h2 className="text-balance font-[family-name:var(--font-bebas)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            MANTENTE AL DÍA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Todas las novedades del club, fichajes, partidos y eventos especiales.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
              <CardContent className="p-4">
                <Badge
                  variant="outline"
                  className="mb-2 border-primary text-primary"
                >
                  {item.category}
                </Badge>
                <h3 className="mb-2 line-clamp-2 font-[family-name:var(--font-bebas)] text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Leer más
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
          >
            Ver todas las noticias
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
