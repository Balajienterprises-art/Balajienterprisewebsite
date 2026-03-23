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

export default async function CategoryLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ category_id: string }>
}) {
  const { category_id } = await params;
  const category = categories.find((c) => c.id === category_id);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://balajienterprise.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Catalog",
        "item": "https://balajienterprise.com/categories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category?.name || "Category",
        "item": `https://balajienterprise.com/categories/${category_id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
