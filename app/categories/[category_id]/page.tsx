"use client";

import React, { use } from "react";
import Link from "next/link";
import { categories } from "../../data/data";
import { notFound } from "next/navigation";
import { FaWhatsapp, FaArrowRight, FaChevronRight, FaBox } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CategoryDetailPage({ params }: { params: Promise<{ category_id: string }> }) {
  const { category_id } = use(params);
  const category = categories.find((c) => c.id === category_id);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans pb-32 pt-20 overflow-x-hidden w-full max-w-[100vw]">
      
      {/* ══ Header Section ══ */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
            <Link href="/" className="hover:text-brand-primary transition">Home</Link>
            <FaChevronRight className="w-2.5 h-2.5 opacity-50" />
            <Link href="/categories" className="hover:text-brand-primary transition">Products</Link>
            <FaChevronRight className="w-2.5 h-2.5 opacity-50" />
            <span className="text-slate-900 dark:text-white font-bold">{category.name}</span>
          </nav>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight italic">
              {category.name}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed italic border-l-4 border-brand-primary pl-6">
              {category.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 uppercase">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, i) => (
            <motion.div 
               key={product.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
               className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <Link href={`/products/${product.id}`} className="block relative aspect-square bg-slate-50 dark:bg-slate-800 overflow-hidden border-b border-slate-100 dark:border-slate-800 p-4">
                <Image
                  src={product.images?.[0] || "/hero_final.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </Link>

              {/* Content */}
              <div className="p-8 space-y-4">
                <Link href={`/products/${product.id}`} className="block">
                  <h3 className="font-bold text-slate-900 dark:text-white text-xl line-clamp-2 min-h-14 group-hover:text-brand-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 min-h-10 normal-case italic">
                  {product.description}
                </p>

                <div className="flex flex-col gap-3 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white py-3 rounded-xl font-bold text-xs hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                  >
                    View Details <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                  <a
                    href={`https://wa.me/917698787886?text=Hello Balaji Enterprise, I am interested in ${product.name} (ID: ${product.id}).`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-green-600/10 text-green-700 py-3 rounded-xl font-bold text-xs hover:bg-green-600 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-4 h-4" /> Check Price
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ Call to Action ══ */}
      <section className="px-6 max-w-7xl mx-auto mt-10">
         <div className="bg-slate-900 dark:bg-brand-primary rounded-4xl p-10 md:p-12 text-center space-y-6">
            <FaBox className="w-10 h-10 text-white opacity-20 mx-auto" />
            <h2 className="text-white font-bold text-3xl italic tracking-tight">Need Bulk Supply?</h2>
            <p className="text-slate-400 max-w-sm mx-auto normal-case italic">Contact our sales team for project-based pricing and custom requirements.</p>
            <a href="https://wa.me/917698787886" className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all active:scale-95">
               Message Sales Team
            </a>
         </div>
      </section>
    </div>
  );
}
