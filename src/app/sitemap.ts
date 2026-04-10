import type { MetadataRoute } from 'next'
import { posts } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://orengen.io'
  
  const staticRoutes = [
    '', '/about', '/orenagents', '/orennexus', '/orenweb', '/orensocial', '/orencustoms',
    '/blog', '/case-studies', '/faqs',
    '/terms', '/privacy-policy', '/cookie-policy', '/acceptable-use', '/refund-policy',
    '/copyright-notice', '/security-overview', '/trademark-policy', '/legal-disclaimers',
    '/ai-communications-opt-in',
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : route.startsWith('/oren') ? 0.9 : 0.7,
  }))

  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
