import React from "react";
import Link from "next/link";
import { categories } from "../../data/data";
import { FaChevronRight, FaWhatsapp, FaArrowLeft, FaCheck, FaTools, FaMicrochip, FaCogs } from "react-icons/fa";
import Image from "next/image";

// Generate MetaData for SEO
export async function generateMetadata({ params }: { params: Promise<{ product_id: string }> }) {
  const { product_id } = await params;
  
  let product = null;
  for (const cat of categories) {
    const p = cat.products.find(prod => prod.id === product_id);
    if (p) {
      product = p;
      break;
    }
  }

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `Buy ${product.name} in Surat | Best Price & Specs | Balaji Enterprise`,
    description: `Original industrial ${product.name} available at Balaji Enterprise, Kamrej, Surat. Check detailed specifications, pricing, and project-ready inventory for all your electrical requirements in Gujarat.`,
    keywords: `${product.name} Surat, ${product.name} supplier Gujarat, electrical supplies Surat, industrial ${product.name} price`,
    alternates: {
      canonical: `/products/${product_id}`,
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ product_id: string }> }) {
  const { product_id } = await params;
  
  // Find the product and its parent category
  let product = null;
  let parentCategory = null;
  
  for (const cat of categories) {
    const p = cat.products.find(prod => prod.id === product_id);
    if (p) {
      product = p;
      parentCategory = cat;
      break;
    }
  }

  if (!product || !parentCategory) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-alt text-center px-6 overflow-x-hidden w-full max-w-[100vw]">
        <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6 uppercase italic tracking-tighter">SKU Not Found</h1>
        <p className="text-text-muted mb-10 max-w-sm mx-auto font-mono text-xs uppercase tracking-widest leading-relaxed">System error: the specified product ID could not be resolved.</p>
        <Link href="/categories" className="bg-brand-primary text-white px-10 py-5 font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-secondary transition-all shadow-[6px_6px_0px_#EAB308]">
          Return to Portal
        </Link>
      </div>
    );
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://balajienterprise.com${product.image}`,
    "description": product.description || `Original industrial ${product.name} available at Balaji Enterprise, Kamrej, Surat.`,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": (product.specifications && 'Brand' in product.specifications) ? (product.specifications as any).Brand : "Balaji Enterprise"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "12"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Industrial Buyer"
        },
        "reviewBody": "Highest quality insulation tapes in Surat. Great dispatch lead time."
      }
    ],
    "offers": {
      "@type": "Offer",
      "url": `https://balajienterprise.com/products/${product_id}`,
      "priceCurrency": "INR",
      "price": "0", // Contact for price
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Balaji Enterprise"
      }
    }
  };

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
        "name": parentCategory.name,
        "item": `https://balajienterprise.com/categories/${parentCategory.id}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": product.name,
        "item": `https://balajienterprise.com/products/${product.id}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary selection:text-white pb-32 overflow-x-hidden w-full max-w-[100vw]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      {/* ══ HEADER / BREADCRUMB ══ */}
      <div className="bg-brand-primary relative py-8 md:py-12 px-6 lg:px-20 border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white/50 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-accent-brass transition-colors">ROOT</Link>
            <span className="opacity-30">/</span>
            <Link href="/categories" className="hover:text-accent-brass transition-colors">CATALOG</Link>
            <span className="opacity-30">/</span>
            <Link href={`/categories/${parentCategory.id}`} className="hover:text-accent-brass transition-colors truncate max-w-[120px] md:max-w-none">
              {parentCategory.name.toUpperCase()}
            </Link>
            <span className="opacity-30">/</span>
            <span className="text-accent-brass font-bold">ITEM_{product.id.toUpperCase()}</span>
          </div>

          <Link href={`/categories/${parentCategory.id}`} className="inline-flex items-center gap-2 text-white/80 font-mono text-[10px] uppercase tracking-widest hover:text-accent-brass transition-all group">
            <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Collection
          </Link>
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 animate-fade-in">
          
          {/* Left: Product Visuals */}
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <div className="relative aspect-square md:aspect-4/5 bg-slate-50 border border-slate-200 overflow-hidden group shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain md:object-cover p-4 md:p-0 md:grayscale grayscale-0 group-hover:grayscale-0 transition-all duration-700"
                  unoptimized
                />
                
                {/* Visual Metadata Overlay */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none">
                  <div className="font-mono text-[9px] bg-white/90 backdrop-blur-md text-brand-primary px-3 py-1 font-bold border border-slate-200 shadow-sm uppercase tracking-widest">
                    P_SPEC v2.4
                  </div>
                  <div className="font-mono text-[10px] bg-accent-brass text-brand-primary px-3 py-1 font-black shadow-sm uppercase tracking-widest">
                    IN_STOCK
                  </div>
                </div>

                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')]" />
              </div>

              {/* Mobile CTA */}
              <div className="mt-8 lg:hidden">
                <a
                  href={`https://wa.me/917698787886?text=Balaji Enterprise Logistics Inquiry: SKU [${product.id}] Product [${product.name}]`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full flex justify-center items-center gap-4 bg-brand-primary text-white py-5 font-heading font-bold uppercase tracking-[0.2em] text-[11px] shadow-[8px_8px_0px_#EAB308] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all"
                >
                  <FaWhatsapp className="w-5 h-5 text-accent-brass" /> Get Technical Quote
                </a>
              </div>
            </div>
          </div>

          {/* Right: Technical Data */}
          <div className="lg:w-1/2 space-y-12 md:space-y-16">
            
            {/* Title & Description */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-accent-copper bg-orange-50/50 px-4 py-2 border border-orange-100/50">
                <span className="w-2 h-2 bg-accent-copper rounded-full animate-pulse" /> Verified Industrial Grade
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold text-brand-primary uppercase italic tracking-tighter leading-[0.95]">
                {product.name}
              </h1>
              <div className="h-2 w-24 bg-accent-brass" />
              <p className="text-base md:text-xl text-text-muted leading-relaxed font-sans max-w-2xl border-l-[6px] border-slate-100 pl-8 italic">
                {product.description || "High-performance electrical supply material sourced for mechanical and industrial reliability under heavy loads."}
              </p>
            </div>

            {/* Desktop Quick Inquiry */}
            <div className="hidden lg:flex items-center gap-8 p-10 bg-brand-primary text-white relative overflow-hidden group shadow-xl">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
               <div className="relative z-10 flex-1">
                 <span className="font-mono text-[10px] font-bold text-blue-300 block uppercase tracking-[0.3em] mb-2 opacity-60">Logistics Pricing</span>
                 <span className="font-heading font-bold text-3xl uppercase italic text-accent-brass tracking-tight">{product.price.toUpperCase()}</span>
               </div>
               <a
                  href={`https://wa.me/917698787886?text=Balaji Enterprise Logistics Inquiry: SKU [${product.id}] Product [${product.name}]`}
                  target="_blank" rel="noopener noreferrer"
                  className="relative z-10 flex items-center gap-4 bg-white text-brand-primary py-5 px-10 font-heading font-bold uppercase tracking-widest text-[11px] shadow-[8px_8px_0px_#EAB308] hover:bg-accent-brass transition-all active:translate-y-1 active:translate-x-1 active:shadow-none"
                >
                  <FaWhatsapp className="w-6 h-6" /> Inquiry Now
               </a>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
               {[
                 { label: "Technical Certification", value: "Verified Source", icon: FaCheck },
                 { label: "Material Composition", value: "High Grade", icon: FaTools },
                 { label: "Industrial UseCase", value: "Heavy Duty", icon: FaCogs },
                 { label: "Supply Readiness", value: "Immediate", icon: FaMicrochip }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-6 flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 text-brand-secondary">
                      <item.icon className="w-4 h-4" />
                   </div>
                   <div>
                     <span className="block font-mono text-[9px] text-text-muted uppercase tracking-widest font-bold">{item.label}</span>
                     <span className="block font-heading text-xs text-brand-primary font-bold uppercase italic mt-0.5">{item.value}</span>
                   </div>
                 </div>
               ))}
            </div>

            {/* Core Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                   <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-primary uppercase italic tracking-tighter">Performance Metrics</h3>
                   <div className="flex-1 h-px bg-slate-100" />
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {product.features.map((feature, idx) => (
                     <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 border-l-4 border-accent-brass group hover:bg-brand-light transition-all">
                       <span className="font-mono text-[10px] font-black text-brand-primary/20 group-hover:text-brand-secondary transition-colors">0{idx+1}</span>
                       <span className="font-mono text-xs font-bold text-brand-primary uppercase tracking-wider">{feature}</span>
                     </div>
                   ))}
                 </div>
              </div>
            )}

            {/* Detailed Spec Sheet */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="space-y-8">
                 <div className="flex items-center gap-4">
                   <h3 className="font-heading font-bold text-xl md:text-2xl text-brand-primary uppercase italic tracking-tighter">Technical Datasheet</h3>
                   <div className="flex-1 h-px bg-slate-100" />
                 </div>
                 <div className="bg-white border border-slate-100 overflow-hidden shadow-sm">
                   <div className="overflow-x-auto">
                     <table className="w-full text-left">
                       <tbody>
                         {Object.entries(product.specifications).map(([key, value], idx) => (
                           <tr key={idx} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                             <th className="py-5 px-8 font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted w-[40%] bg-slate-50/30 border-r border-slate-50">
                               {key}
                             </th>
                             <td className="py-5 px-8 font-heading text-xs font-bold text-brand-primary uppercase tracking-tight">
                               {value as string}
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>
                 </div>
              </div>
            )}

            {/* Footer Contact Callout */}
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
               <div className="w-20 h-20 rounded-full bg-accent-brass px-4 flex items-center justify-center shadow-lg border-4 border-white">
                  <FaWhatsapp className="w-8 h-8 text-brand-primary" />
               </div>
               <div>
                  <h4 className="font-heading font-bold text-lg text-brand-primary uppercase italic">Direct Dispatch Support</h4>
                  <p className="text-sm text-text-muted font-sans mt-1">Chat directly with our procurement team for volume discounts and custom gauges.</p>
                  <a href="https://wa.me/917698787886" className="inline-flex items-center gap-2 text-brand-secondary text-xs font-heading font-bold uppercase italic mt-4 hover:translate-x-2 transition-all">
                    Initiate Technical Inquiry <FaChevronRight className="w-2.5 h-2.5" />
                  </a>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
