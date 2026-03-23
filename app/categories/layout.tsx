import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Supply Catalog',
  description: 'Browse our full range of industrial electrical components in Surat, including PVC tapes, copper conductors, and brass hardware.',
  keywords: 'electrical catalog Surat, industrial supplies list, electrical project materials Gujarat',
  alternates: {
    canonical: '/categories',
  },
}

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
