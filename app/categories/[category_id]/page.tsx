import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "../../data/data";
import { FaChevronRight, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

// Generate MetaData for SEO
export async function generateMetadata({ params }: { params: { category_id: string } }) {
  const { category_id } = params;
  const category = categories.find((c) => c.id === category_id);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} | Balaji Enterprise`,
    description: category.description,
  };
}

export default function CategoryDetailPage({ params }: { params: { category_id: string } }) {
  const { category_id } = params;
  const category = categories.find((c) => c.id === category_id);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] text-center px-4">
        <h1 className="text-3xl font-bold text-[#0F3D81] mb-4">Category Not Found</h1>
        <p className="text-[#64748B] mb-8">We couldn&apos;t find the category you&apos;re looking for.</p>
        <Link href="/categories" className="bg-[#EAB308] text-[#0F3D81] px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
      
      {/* ══ Header ══ */}
      <div className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#64748B] mb-6 font-medium">
            <Link href="/" className="hover:text-[#1674D3] transition-colors">Home</Link>
            <FaChevronRight className="w-3 h-3" />
            <Link href="/categories" className="hover:text-[#1674D3] transition-colors">Categories</Link>
            <FaChevronRight className="w-3 h-3" />
            <span className="text-[#0F3D81] font-semibold">{category.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold text-[#0F3D81] mb-4 tracking-tight">
                {category.name}
              </h1>
              <p className="text-[#64748B] text-lg leading-relaxed max-w-3xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══ Layout container ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar */}
        <aside className="lg:w-72 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24">
            <h2 className="font-bold text-[#0F3D81] text-lg mb-4 flex items-center gap-2">
              All Categories
            </h2>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    cat.id === category_id
                      ? "bg-[#0F3D81]/5 text-[#1674D3] border-l-4 border-[#1674D3]"
                      : "text-[#64748B] hover:bg-slate-50 hover:text-[#0F3D81]"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <Link href="/#contact" className="block p-5 bg-[#0F3D81] rounded-xl text-white text-center hover:bg-[#1674D3] transition-colors shadow-md">
                <p className="text-sm font-medium opacity-90 mb-1">Need something custom?</p>
                <span className="font-bold">Contact Us &rarr;</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#1E293B]">
              {category.products.length} Products Available
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {category.products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0F3D81] text-[15px] mb-2 leading-snug group-hover:text-[#1674D3] transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1E293B] bg-slate-100 px-3 py-1 rounded-full">
                      {product.price}
                    </span>
                    <a
                      href={`https://wa.me/917698787886?text=Hi, I am interested in ${product.name} (${category.name})`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#EAB308] hover:bg-yellow-400 text-[#0F3D81] flex items-center justify-center transition-colors shadow-sm"
                      title="Inquire on WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
