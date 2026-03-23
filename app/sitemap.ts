import { MetadataRoute } from 'next'
import { categories } from './data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balajienterprise.com' // Replace with actual domain

  // Base routes
  const routes = [
    '',
    '/categories',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Category routes
  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Product routes
  const productRoutes = categories.flatMap((category) =>
    category.products.map((product) => ({
      url: `${baseUrl}/products/${product.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  )

  return [...routes, ...categoryRoutes, ...productRoutes]
}
