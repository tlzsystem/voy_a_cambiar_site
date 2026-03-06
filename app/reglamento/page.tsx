import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Users, 
  AlertTriangle, 
  Shield, 
  Target, 
  Repeat, 
  Flag,
  CircleDot,
  HandMetal,
  UserX
} from "lucide-react"

export const metadata = {
  title: "Reglamento | Voy A Cambiar FC",
  description: "Reglamento oficial de partidos del Voy A Cambiar FC",
}

const reglamento = [
  {
    titulo: "Duración del Partido",
    icon: Clock,
    reglas: [
      "El partido consta de dos tiempos de 45 minutos cada uno.",
      "El árbitro añadirá tiempo adicional por interrupciones y sustituciones.",
      "El descanso entre tiempos no excederá los 15 minutos.",
      "En caso de empate en eliminatorias, se jugarán dos tiempos extra de 15 minutos.",
    ],
  },
  {
    titulo: "Jugadores",
    icon: Users,
    reglas: [
      "Cada equipo debe tener un mínimo de 7 jugadores para iniciar el partido.",
      "El máximo de jugadores en cancha es de 11, incluyendo al portero.",
      "Se permiten hasta 5 sustituciones por equipo durante el partido.",
      "Un jugador sustituido no puede volver a ingresar al campo de juego.",
    ],
  },
  {
    titulo: "Equipamiento",
    icon: Shield,
    reglas: [
      "Los jugadores deben usar camiseta, shorts, medias, espinilleras y calzado adecuado.",
      "El portero debe usar colores que lo distingan de los demás jugadores y árbitros.",
      "No se permite el uso de joyas, relojes o accesorios peligrosos.",
      "Las espinilleras son obligatorias y deben estar cubiertas por las medias.",
    ],
  },
  {
    titulo: "Inicio y Reanudación",
    icon: CircleDot,
    reglas: [
      "El partido inicia con un saque desde el centro del campo.",
      "Después de cada gol, el equipo que recibió el gol realiza el saque inicial.",
      "Los jugadores deben estar en su propia mitad del campo en el saque inicial.",
      "El balón está en juego cuando es pateado y se mueve hacia adelante.",
    ],
  },
  {
    titulo: "Gol",
    icon: Target,
    reglas: [
      "Se marca gol cuando el balón cruza completamente la línea de meta entre los postes.",
      "El equipo con más goles al final del partido es el ganador.",
      "Un gol puede ser anotado directamente de un saque de esquina.",
      "No se puede anotar gol directamente de un saque lateral.",
    ],
  },
  {
    titulo: "Fuera de Juego",
    icon: Flag,
    reglas: [
      "Un jugador está en fuera de juego si está más cerca de la línea de meta que el balón y el penúltimo defensor.",
      "No hay fuera de juego si el jugador está en su propia mitad del campo.",
      "No hay fuera de juego en saques de banda, esquina o de meta.",
      "Estar en posición de fuera de juego no es infracción en sí misma.",
    ],
  },
  {
    titulo: "Faltas y Conducta Antideportiva",
    icon: AlertTriangle,
    reglas: [
      "Patear, zancadillear, empujar o sujetar a un adversario es falta.",
      "Tocar el balón con la mano deliberadamente es falta (excepto el portero en su área).",
      "El juego brusco grave se sanciona con tarjeta roja directa.",
      "Las protestas excesivas pueden ser sancionadas con tarjeta amarilla.",
    ],
  },
  {
    titulo: "Tarjetas",
    icon: UserX,
    reglas: [
      "Tarjeta amarilla: amonestación por conducta antideportiva o infracciones repetidas.",
      "Dos tarjetas amarillas equivalen a una tarjeta roja.",
      "Tarjeta roja: expulsión inmediata del partido.",
      "Un jugador expulsado no puede ser sustituido.",
    ],
  },
  {
    titulo: "Tiros Libres",
    icon: HandMetal,
    reglas: [
      "Tiro libre directo: se puede anotar gol directamente.",
      "Tiro libre indirecto: el balón debe tocar a otro jugador antes de entrar a la meta.",
      "La barrera debe estar a mínimo 9.15 metros del balón.",
      "El balón debe estar inmóvil antes de ejecutar el tiro.",
    ],
  },
  {
    titulo: "Sustituciones",
    icon: Repeat,
    reglas: [
      "Las sustituciones solo pueden realizarse cuando el balón está fuera de juego.",
      "El jugador que sale debe hacerlo por la línea media del campo.",
      "El sustituto solo puede ingresar con autorización del árbitro.",
      "El tiempo de juego no se detiene durante las sustituciones regulares.",
    ],
  },
]

export default function ReglamentoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
            Normativa Oficial
          </Badge>
          <h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-primary-foreground sm:text-6xl lg:text-7xl">
            REGLAMENTO
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Conoce las reglas oficiales que rigen nuestros partidos amistosos y competiciones internas.
          </p>
        </div>
      </section>

      {/* Reglamento Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {reglamento.map((seccion, index) => {
              const Icon = seccion.icon
              return (
                <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide text-foreground">
                        {seccion.titulo}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {seccion.reglas.map((regla, reglaIndex) => (
                        <li key={reglaIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {regla}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="mt-12 rounded-xl border border-border bg-muted/50 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Este reglamento está basado en las reglas oficiales de la FIFA y adaptado para partidos amistosos. 
              El árbitro tiene la última palabra en todas las decisiones durante el partido.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
