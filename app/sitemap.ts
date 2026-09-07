import type { MetadataRoute } from 'next'
import news from '@/data/news.json'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/noticias`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${siteUrl}/reglamento`, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const newsRoutes: MetadataRoute.Sitemap = news.map((article) => ({
    url: `${siteUrl}/noticias/${article.id}`,
    lastModified: article.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...newsRoutes]
}