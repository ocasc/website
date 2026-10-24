import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const routes = ['/', '/about', '/resources']

  return routes.flatMap((route) => {
    const zh = `${baseUrl}${route === '/' ? '' : route}`
    const en = `${baseUrl}/en${route === '/' ? '' : route}`
    return [
      {
        url: zh,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 1 : 0.8,
        alternates: { languages: { 'zh-CN': zh, en } },
      },
      {
        url: en,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '/' ? 0.9 : 0.7,
        alternates: { languages: { 'zh-CN': zh, en } },
      },
    ]
  })
}
