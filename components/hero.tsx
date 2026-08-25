import { Button } from "@/components/ui/button"
import Image from "next/image"
import { CalendarPlus } from "lucide-react"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-background blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-background blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-background/95 p-3 shadow-2xl ring-4 ring-background/20 sm:h-44 sm:w-44">
            <Image
              src="/images/voy_a_cambiar.png"
              alt="Escudo de Voy A Cambiar FC"
              width={176}
              height={176}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <p className="mb-4 inline-block rounded-full bg-background/10 px-4 py-1 text-sm font-medium text-primary-foreground backdrop-blur">
            Temporada 2025-2026
          </p>
          <h1 className="text-balance font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-primary-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            VOY A CAMBIAR FC
          </h1>
          <p className="mt-6 text-pretty text-lg text-primary-foreground/80 sm:text-xl">
            Somos más que un equipo. Somos una familia unida por la pasión al fútbol y el espíritu deportivo.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              <CalendarPlus className="mr-2 h-4 w-4" />
              Agendar Amistoso
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              Ver Calendario
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
