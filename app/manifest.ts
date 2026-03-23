import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balaji Enterprise | #1 Industrial Electrical Supplier Surat',
    short_name: 'Balaji Ent',
    description: 'Surat\'s leading distributor of industrial electrical components. Premium PVC Tapes, HT Rubber Tapes, Bare Copper Wire, and Brass Hardware.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F3D81',
    theme_color: '#0F3D81',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['business', 'industrial', 'electrical'],
    orientation: 'portrait',
    scope: '/',
  }
}

