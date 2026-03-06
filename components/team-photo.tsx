import Image from "next/image"

export function TeamPhoto() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Temporada 2025-2026
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-foreground sm:text-5xl">
            Nuestro Equipo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Unidos por la pasión, comprometidos con la excelencia. Este es el Voy A Cambiar FC.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="aspect-[16/9] relative">
            <Image
              src="/images/voy-a-cambiar-plantel.jpg"
              alt="Foto oficial del equipo Voy A Cambiar FC temporada 2025-2026"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl sm:text-3xl text-primary-foreground tracking-wide">
                  Voy A Cambiar FC
                </h3>
                <p className="text-primary-foreground/80 text-sm sm:text-base">
                  Liga Amateur - Division de Honor
                </p>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-primary-foreground">25</span>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm">Jugadores</p>
                </div>
                <div className="text-center">
                  <span className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl text-primary-foreground">4</span>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm">Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
