"use client";

import React, { use } from "react";
import Link from "next/link";
import { categories } from "../../data/data";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";


export default function CategoryDetailPage({ params }: { params: Promise<{ category_id: string }> }) {
  const { category_id } = use(params);
  const category = categories.find((c) => c.id === category_id);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-alt text-center px-6">
        <h1 className="text-4xl font-heading font-bold text-brand-primary mb-6 uppercase italic tracking-tighter">Inventory Node Not Found</h1>
        <p className="text-text-muted mb-10 max-w-sm mx-auto font-mono text-xs uppercase tracking-widest leading-relaxed">System error: the specified category ID could not be resolved within the local supply matrix.</p>
        <Link href="/categories" className="bg-brand-primary text-white px-10 py-5 font-heading font-bold uppercase tracking-widest text-sm hover:bg-brand-secondary transition-all shadow-[6px_6px_0px_#EAB308]">
          Return to Portal
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary selection:text-white pb-32 overflow-x-hidden w-full max-w-[100vw]">
      
      {/* ══ Global Header (Spec Sheet Style) ══ */}
      <div className="bg-brand-primary border-b border-white/5 relative py-20 px-6 lg:px-20 overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb (Mono style) */}
          <div className="flex items-center gap-3 text-white font-mono text-[9px] uppercase tracking-[0.4em] mb-12 opacity-40">
            <Link href="/" className="hover:text-accent-brass transition-colors underline-offset-4 hover:underline">ROOT</Link>
            <span className="opacity-40">/</span>
            <Link href="/categories" className="hover:text-accent-brass transition-colors underline-offset-4 hover:underline">CATALOG</Link>
            <span className="opacity-40">/</span>
            <span className="text-brand-light font-bold">SPEC_{category.id.toUpperCase()}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="font-mono text-xs font-bold text-accent-brass uppercase tracking-widest block mb-4">Domain_Inventory</span>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold text-white mb-6 uppercase italic leading-[1.1] md:leading-[0.9] tracking-tighter">
                {category.name}
              </h1>
              <p className="text-blue-100/60 text-xl max-w-3xl leading-relaxed font-sans border-l-4 border-accent-brass pl-8 italic">
                {category.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ Layout Grid ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row gap-20">
        
        {/* Sidebar (Spec Index) */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-28 space-y-12">
            <div>
               <h2 className="font-heading font-bold text-brand-primary text-sm mb-6 uppercase italic tracking-[0.2em] flex items-center gap-3">
                 <span className="w-2 h-2 bg-accent-brass" /> Catalog Matrix
               </h2>
               <nav className="flex flex-col gap-2 font-mono text-[10px] uppercase tracking-widest font-bold">
                 {categories.map((cat) => (
                   <Link
                     key={cat.id}
                     href={`/categories/${cat.id}`}
                     className={`px-5 py-3 transition-all flex justify-between items-center group ${
                       cat.id === category_id
                         ? "bg-brand-primary text-white shadow-[6px_6px_0px_#EAB308]"
                         : "text-text-muted hover:bg-bg-alt hover:text-brand-primary"
                     }`}
                   >
                     <span>{cat.name}</span>
                     <span className={`text-[9px] opacity-30 group-hover:opacity-100 transition-opacity`}>{cat.products.length.toString().padStart(2, '0')}</span>
                   </Link>
                 ))}
               </nav>
            </div>

            <div className="bg-bg-alt p-8 relative border-l-4 border-brand-primary">
               <span className="font-mono text-[10px] font-bold text-brand-secondary block mb-3 opacity-50 uppercase">Technical Desk</span>
               <p className="text-xs text-text-muted leading-relaxed font-bold uppercase tracking-wider mb-6">Need a specific gauge or material that isn&apos;t listed?</p>
               <a href="https://wa.me/917698787886" className="inline-flex items-center gap-2 text-brand-primary text-xs font-heading font-bold uppercase italic hover:text-brand-secondary transition-colors">
                  Contact Dispatch <FaArrowRight className="w-3 h-3" />
               </a>
            </div>
          </div>
        </aside>

        {/* Product Grid (Inventory Unit Cards) */}
        <main className="flex-1">
          <div className="mb-12 flex items-center justify-between pb-6 border-b border-slate-100">
            <h2 className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-text-muted">
              Inventory_Units / Count: [{category.products.length.toString().padStart(2, '0')}]
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 border border-slate-100 overflow-hidden">
            {category.products.map((product, i) => (
              <motion.div 
                 key={product.id}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: i * 0.05 }}
                 className="group bg-white p-10 flex flex-col h-full hover:bg-brand-light transition-colors relative"
              >
                {/* Visual Label */}
                <span className="absolute top-6 left-10 font-mono text-[9px] text-zinc-300 uppercase tracking-widest font-bold pointer-events-none group-hover:text-brand-secondary/40 transition-colors">
                  Unit_{product.id.toString().padStart(3, '0')}
                </span>

                {/* Image Container */}
                <Link href={`/products/${product.id}`} className="block relative aspect-[4/3] bg-slate-50 overflow-hidden mb-10 border border-slate-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                  {/* Scan Line Animation */}
                  <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                     <div className="w-full h-[2px] bg-accent-brass/50 shadow-[0_0_15px_#EAB308] animate-scan" />
                  </div>
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-all" />
                </Link>

                {/* Content (Spec style) */}
                <div className="flex-1 flex flex-col gap-6">
                  <Link href={`/products/${product.id}`} className="block">
                    <h3 className="font-heading font-bold text-brand-primary text-2xl uppercase italic tracking-tighter leading-none group-hover:text-brand-secondary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-bold text-brand-primary bg-bg-alt px-4 py-2 border border-brand-primary/10">
                      AVAIL_{product.price.toUpperCase()}
                    </span>
                    <a
                      href={`https://wa.me/917698787886?text=Balaji Enterprise Logistics Inquiry: Spec ID [${product.id}] Product [${product.name}] Sub-Category [${category.name}]`}
                      target="_blank" rel="noopener noreferrer"
                      className="bg-brand-secondary text-white py-4 px-6 font-heading font-bold uppercase tracking-widest text-[10px] hover:bg-brand-primary transition-all shadow-[4px_4px_0px_#EAB308] flex items-center gap-3"
                    >
                      <FaWhatsapp className="w-4 h-4" /> Stock Inquiry
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
