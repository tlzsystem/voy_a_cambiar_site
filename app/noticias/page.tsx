import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import news from "@/data/news.json"

export const metadata = { title: "Noticias | Voy A Cambiar FC", description: "Todas las noticias de Voy A Cambiar FC." }

export default function NoticiasPage() {
  return <section className="min-h-screen py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-primary"><ArrowLeft className="h-4 w-4" />Volver al inicio</Link><div className="mb-12"><Badge variant="secondary" className="mb-4">Actualidad del club</Badge><h1 className="font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-foreground sm:text-6xl">TODAS LAS NOTICIAS</h1><p className="mt-4 max-w-2xl text-muted-foreground">Descubre todo lo que sucede alrededor de Voy A Cambiar FC.</p></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{news.map((item) => <Card key={item.id} className="group overflow-hidden"><Link href={`/noticias/${item.slug}`}><div className="relative aspect-[4/3] overflow-hidden bg-muted"><Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" /></div><CardContent className="p-5"><Badge variant="outline" className="mb-3 border-primary text-primary">{item.category}</Badge><h2 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wide group-hover:text-primary">{item.title}</h2><p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p><div className="mt-5 flex items-center justify-between text-sm text-muted-foreground"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{item.date}</span><span className="flex items-center gap-1 text-primary">Leer noticia <ArrowRight className="h-4 w-4" /></span></div></CardContent></Link></Card>)}</div></div></section>
}
