import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Balaji Enterprise | Industrial Electrical Supplies',
    short_name: 'Balaji Ent',
    description: 'Surat\'s leading distributor of industrial electrical components.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F3D81',
    theme_color: '#1674D3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64',
        type: 'image/x-icon',
      },
      // Note: User should add larger icons for PWA/SEO benefit
    ],
  }
}
