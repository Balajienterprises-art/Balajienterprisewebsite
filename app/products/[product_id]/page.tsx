import React from "react";
import { categories } from "../../data/data";
import { FaChevronRight, FaPhone, FaEnvelope, FaCheckCircle, FaIndustry, FaShieldAlt, FaBolt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductInquiryActions from "../../components/ProductInquiryActions";
import ProductImageGallery from "../../components/ProductImageGallery";

export async function generateMetadata({ params }: { params: Promise<{ product_id: string }> }) {
  const { product_id } = await params;
  
  let product: any = null;
  let category: any = null;
  
  for (const cat of categories) {
    const found = cat.products.find(p => p.id === product_id);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Balaji Enterprise Surat`,
    description: product.description || `High-quality ${product.name} from Balaji Enterprise. Best prices in Surat, Gujarat.`,
    openGraph: {
      title: `${product.name} | Balaji Enterprise`,
      description: product.description || `Industrial grade ${product.name} supplier in Surat.`,
      images: [{ url: product.images?.[0] || '/hero_final.png' }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ product_id: string }> }) {
  const { product_id } = await params;
  
  let product: any = null;
  let category: any = null;
  
  for (const cat of categories) {
    const found = cat.products.find(p => p.id === product_id);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Clean & Minimal */}
        <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-10 font-medium">
          <Link href="/" className="hover:text-brand-primary transition">Home</Link>
          <FaChevronRight className="w-3 h-3 opacity-50" />
          <Link href="/categories" className="hover:text-brand-primary transition">Products</Link>
          <FaChevronRight className="w-3 h-3 opacity-50" />
          <Link href={`/categories/${category.id}`} className="hover:text-brand-primary transition truncate">{category.name}</Link>
          <FaChevronRight className="w-3 h-3 opacity-50" />
          <span className="text-gray-900 dark:text-gray-100 truncate font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Image & Highlights (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <ProductImageGallery images={product.images || [product.image]} name={product.name} />
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <FaShieldAlt className="w-6 h-6 text-brand-primary mb-2" />
                <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Quality Assured</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <FaIndustry className="w-6 h-6 text-brand-primary mb-2" />
                <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Direct Supply</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                <FaBolt className="w-6 h-6 text-brand-primary mb-2" />
                <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Product Info (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <span className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                {category.name}
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                <div className="flex items-center gap-1.5">
                  <FaCheckCircle className="w-4 h-4 text-green-500" />
                  Wholesale Available
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                <span>SKU: {product.id}</span>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-brand-primary pl-6 py-2">
                "{product.description}"
              </p>
            </div>


            {/* Product Details - Detailed Description */}
            {product.detailedDescription && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-primary rounded-full" />
                  Product Overview
                </h2>
                <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {product.detailedDescription}
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border-l-4 border-brand-primary rounded-r-2xl">
                  <p className="text-sm font-bold text-slate-800 dark:text-blue-300">
                    Trusted across South Gujarat: We specialize in high-volume supply for electrical contractors and winding industries.
                  </p>
                </div>
              </section>
            )}

            {/* Specifications - Table Style */}
            {product.specifications && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand-primary rounded-full" />
                  Technical Specifications
                </h2>
                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm">
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/50 dark:bg-slate-800/30' : 'bg-white dark:bg-slate-900'}>
                          <th className="px-6 py-5 text-sm font-bold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 w-1/3">
                            {key}
                          </th>
                          <td className="px-6 py-5 text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
                            {value as string}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Features & Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {product.features && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-brand-primary rounded-full" />
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0 mt-0.5">
                          <FaCheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {product.applications && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-brand-primary rounded-full" />
                    Common Applications
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app: string, idx: number) => (
                      <span key={idx} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700 uppercase tracking-tight">
                        {app}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
            
            {/* Price & Inquiry Section */}
            <ProductInquiryActions product={product} />
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-20 pt-20 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Related in {category.name}</h2>
            <Link href={`/categories/${category.id}`} className="text-brand-primary font-bold hover:underline">
              View All &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.products.filter((p: any) => p.id !== product_id).slice(0, 4).map((item: any) => (
              <Link 
                key={item.id} 
                href={`/products/${item.id}`}
                className="group bg-white dark:bg-slate-900 p-4 rounded-3xl border border-gray-50 dark:border-gray-800 hover:border-brand-primary/50 transition-all shadow-sm hover:shadow-xl flex flex-col gap-4"
              >
                <div className="relative aspect-square bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <Image src={item.images?.[0] || item.image || "/hero_final.png"} alt={item.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" unoptimized />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-brand-primary transition-colors line-clamp-1">{item.name}</h3>
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em]">Explore More</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.images?.[0] || product.image ? `https://balajienterprise.com${product.images?.[0] || product.image}` : "https://balajienterprise.com/hero_final.png",
            "description": product.description || `High-quality ${product.name} from Balaji Enterprise.`,
            "brand": {
              "@type": "Brand",
              "name": "Balaji Enterprise"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://balajienterprise.com/products/${product.id}`,
              "priceCurrency": "INR",
              "price": "0",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />
    </div>
  );
}
