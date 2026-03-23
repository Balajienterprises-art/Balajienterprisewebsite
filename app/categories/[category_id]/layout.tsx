import { Metadata } from 'next'
import { categories } from '../../data/data'

type Props = {
  params: Promise<{ category_id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { category_id } = await params
  const category = categories.find((c) => c.id === category_id)

  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  return {
    title: `${category.name} — Industrial Supply in Surat`,
    description: `Leading supplier of ${category.name} in Surat, Gujarat. High-quality products and reliable distribution for industrial projects.`,
    keywords: `${category.name} Surat, industrial ${category.name} distributor, Gujarat electrical supplies, ${category.name} price Surat`,
    alternates: {
      canonical: `/categories/${category_id}`,
    },
  }
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
