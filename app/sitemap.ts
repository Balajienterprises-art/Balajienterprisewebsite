import { MetadataRoute } from 'next'
import { categories } from './data/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://balajienterprise.com'

  const routes = [
    '',
    '/categories',
    '/#about',
    '/#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'daily' : 'weekly'),
    priority: route === '' ? 1.0 : 0.8,
  })) as MetadataRoute.Sitemap


  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

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

