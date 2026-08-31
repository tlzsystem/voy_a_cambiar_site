import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import news from "@/data/news.json"

type NewsItem = (typeof news)[number]

type PageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return news.map((item) => ({ id: item.slug }))
}

function getNewsItem(id: string): NewsItem | undefined {
  return news.find((item) => item.slug === id)
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const item = getNewsItem(id)

  return item
    ? { title: `${item.title} | Voy A Cambiar FC`, description: item.excerpt }
    : { title: "Noticia no encontrada | Voy A Cambiar FC" }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { id } = await params
  const item = getNewsItem(id)

  if (!item) notFound()

  return (
    <article className="min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/noticias" className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
          <ArrowLeft className="h-4 w-4" />
          Volver a noticias
        </Link>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="outline" className="border-primary text-primary">{item.category}</Badge>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{item.date}</span>
        </div>

        <h1 className="text-balance font-[family-name:var(--font-bebas)] text-5xl tracking-wide text-foreground sm:text-7xl">
          {item.title}
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {item.excerpt}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-muted shadow-lg">
          <Image src={item.image} alt={item.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 896px" />
        </div>

        <div className="prose prose-neutral mt-10 max-w-none text-foreground">
          <p className="text-base leading-8 whitespace-pre-line">
            {item.content}
          </p>
        </div>
      </div>
    </article>
  )
}
