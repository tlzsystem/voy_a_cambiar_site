import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import news from "@/data/news.json"

export function News() {
  return (
    <section id="noticias" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center"><Badge variant="secondary" className="mb-4">Últimas Noticias</Badge><h2 className="font-[family-name:var(--font-bebas)] text-4xl tracking-wide text-foreground sm:text-5xl">MANTENTE AL DÍA</h2><p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Las novedades del club, partidos y actividades del equipo.</p></div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.slice(0, 4).map((item) => <Card key={item.id} className="group overflow-hidden border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"><Link href={`/noticias/${item.id}`}><div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" /></div><CardContent className="p-4"><Badge variant="outline" className="mb-2 border-primary text-primary">{item.category}</Badge><h3 className="mb-2 line-clamp-2 font-[family-name:var(--font-bebas)] text-xl text-card-foreground group-hover:text-primary">{item.title}</h3><p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{item.excerpt}</p><div className="flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{item.date}</span><span className="flex items-center gap-1 text-sm font-medium text-primary">Leer más <ArrowRight className="h-3 w-3" /></span></div></CardContent></Link></Card>)}
        </div>
        <div className="mt-10 text-center"><Link href="/noticias" className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80">Ver todas las noticias <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  )
}
