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
  Landmark,
  PiggyBank,
  NotebookPen,
  UserPen,
  UserRoundX,
  HandCoins,
  CircleOff
} from "lucide-react"

export const metadata = {
  title: "Reglamento | Voy A Cambiar FC",
  description: "Reglamento interno oficial Voy A Cambiar FC",
}

const reglamento = [
  {
    titulo: "Mensualidad",
    icon: PiggyBank,
    reglas: [
      "Para pertenecer al club, cada jugador debe abonar la mensualidad correspondiente.",
      "El valor de la mensualidad será de $3.000 pesos",
      "El pago de la mensualidad debe realizarse antes del día 5 de cada mes.",
      "La mensualidad no es reembolsable. El no pago de la misma puede derivar en la suspensión de la participación del jugador en los partidos.",
    ],
  },
  {
    titulo: "Pago de Partidos",
    icon: HandCoins,
    reglas: [
      "El pago de los partidos es obligatorio para todos los jugadores inscritos.",
      "El valor de cada partido será anunciado con anticipación.",
      "El pago se debe realizar antes del inicio del partido y debe hacerse exclusivamente por transferencia bancaria.",
      "Para casos especiales, cada jugador deberá acercarse con los delegados del equipo.",
    ],
  },
  {
    titulo: "Nomina para partidos",
    icon: NotebookPen,
    reglas: [
      "La encuesta de nomina para cada partido se realizará a través del grupo de WhatsApp Oficial.",
      "La nomina se cerrará a las 21.00 horas del día anterior al partido.",
      "No podrá jugar quien no haya confirmado su asistencia, ni quien no haya pagado el valor del partido.",
      "El pago de los partidos no son reembolsables.",
    ],
  },
  {
    titulo: "Puntualidad",
    icon: Clock,
    reglas: [
      "Se exige puntualidad en la llegada a los partidos. Cada jugador debe presentarse a la hora indicada en la convocatoria.",
      "Cualquier retrado implica posible perdida de titularidad y minutos de juego.",
      "Retrasos reiterados pueden resultar en sanciones.",
      "Cualquier retraso debe ser justificado.",
    ],
  },
  {
    titulo: "Inasistencias",
    icon: UserRoundX,
    reglas: [
      "Se considera inasistencia cuando un jugador no se presenta a un partido cuando ya había confirmado su asistencia.",
      "Una inasistencia no justificada se considera una falta grave.",
      "Las inasistencias reiteradas pueden resultar en sanciones.",
      "Las inasistencias debe ser informadas con anticipación.",
    ],
  },
  {
    titulo: "Director Técnico",
    icon: UserPen,
    reglas: [
      "En cada partido se designará un jugador que hará el rol de director técnico.",
      "El director técnico será responsable de coordinar la estrategia del equipo durante el partido.",
      "El director técnico es el único autorizado a realizar las sustituciones durante el partido",
      "Los jugadores deben respetar las decisiones del director técnico y seguir sus indicaciones durante el partido.",
    ],
  },
  {
    titulo: "Compromiso y Respeto",
    icon: Users,
    reglas: [
      "Se espera la mayor participación posible de todos los miembros a asistir a la mayoría de los partidos.",
      "La falta prolongada a partidos puede incurrir en evaluación de permanencia en el equipo.",
      "Ningún jugador podrá exigir minutos ni titularidad, se prioriza el compromiso y respeto.",
      "Se exige el respeto mutuo entre todos los jugadores y el cumplimiento de las reglas del juego.",
    ],
  },
  {
    titulo: "Conducta",
    icon: AlertTriangle,
    reglas: [
      "Se exige jugar con integridad, intensidad y respeto. Se prioriza el juego limpio y la deportividad.",
      "Se exige mantener dominio emocional durante los partidos.",
      "Se requiere aceptar toda suplencia, cambios y decisiones sin generar conflictos.",
      "Se deben evitar reclamos, gestor y actitudes antideportivas que afecten al grupo.",
    ],
  },
  {
    titulo: "Prohibiciones",
    icon: CircleOff,
    reglas: [
      "Faltar el respeto a cualquier integrante del equipo o árbitro.",
      "Generar conflictos, peleas, amenazas o altercados durante el partido.",
      "Desobedecer las decisiones del árbitro o del director técnico.",
      "Abandonar el campo de juego durante el partido.",
    ],
  },
  {
    titulo: "Faltas Graves",
    icon: Flag,
    reglas: [
      "Generar conflictos internos, peleas, comentarios o actidudes constantes que rompan la armonia del equipo.",
      "Amenazas, insultos, agresiones fisicas y cualquier otra conducta que afecte la integridad del equipo.",
      "Robo, daño intencional a material o pertenencias.",
      "Cualquier falta y sanción puede resultar en explusión del jugador al equipo.",
    ],
  },
  {
    titulo: "Rendición de Cuentas",
    icon: Landmark,
    reglas: [
      "Cada mes se realizará la rendición de cuentas con los jugadores.",
      "Cada jugador tiene derecho a consultar por el estado de las finanzas del equipo.",
      "Para situaciones especiales relacionadas con dineros, cada jugador tiene derecho a conversar directamente con los encargados.",
      "Las transacciones financieras serán transparentes y serán informadas a todos los jugadores.",
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
              El árbitro tiene la última palabra en todas las decisiones durante el partido.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
