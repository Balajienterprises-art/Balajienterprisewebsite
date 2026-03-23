"use client";

import React from "react";
import Link from "next/link";
import { categories } from "../data/data";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-white text-text-main font-sans pb-32 overflow-x-hidden w-full max-w-[100vw]">
      
      {/* ══ Header Section (Industrial Dark) ══ */}
      <section className="bg-brand-primary text-white py-32 px-6 relative overflow-hidden">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp}>
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-brass mb-6 block">Inventory_Portal // 02</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 tracking-tighter uppercase italic leading-[1.1] md:leading-[0.9]">
              The Supply <br/> <span className="text-accent-brass">Matrix.</span>
            </h1>
            <p className="text-blue-100/60 text-xl max-w-2xl leading-relaxed font-sans border-l-4 border-accent-brass pl-8">
              Every gauge, every material, every spec. Sourced precisely for industrial-grade local electricians and contractors across Gujarat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ Categories Grid ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/categories/${cat.id}`}
                className="group block relative"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 mb-8 border border-slate-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Scan Line Animation */}
                  <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                     <div className="w-full h-[2px] bg-accent-brass/50 shadow-[0_0_15px_#EAB308] animate-scan" />
                  </div>
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-all" />
                  
                  {/* Badge count (Technical style) */}
                  <div className="absolute top-0 right-0 p-4">
                    <span className="bg-white text-brand-primary font-mono text-[10px] font-bold px-3 py-1 border border-brand-primary/10 shadow-sm uppercase">
                      SKU_{cat.products.length.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-accent-brass group-hover:w-12 transition-all" />
                    <h3 className="text-2xl font-heading font-bold text-brand-primary uppercase italic tracking-tighter group-hover:text-brand-secondary transition-colors">
                      {cat.name}
                    </h3>
                  </div>
                  <p className="text-text-muted text-sm line-clamp-2 leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity font-sans pl-11">
                    {cat.description}
                  </p>
                  
                  <div className="pl-11 pt-2 flex items-center text-brand-secondary font-mono text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    Enter Catalog <FaArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ CALL TO ACTION (Floating Bar Style Emulation) ══ */}
      <section className="mt-20 px-6 max-w-7xl mx-auto">
         <div className="bg-brand-primary p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 left-0 w-2 h-full bg-accent-brass" />
            <div className="space-y-2 relative z-10">
               <h2 className="text-white font-heading font-bold text-3xl uppercase italic tracking-tighter">Custom Sourcing?</h2>
               <p className="text-blue-200/60 font-mono text-[10px] uppercase tracking-widest leading-relaxed">If it&apos;s not in the grid, we&apos;ll find the spec.</p>
            </div>
            <a
               href="https://wa.me/917698787886?text=Hello Balaji Enterprise, I am an electrician looking for a custom specific requirement."
               target="_blank" rel="noopener noreferrer"
               className="bg-accent-brass text-brand-primary px-10 py-5 font-heading font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all shadow-[6px_6px_0px_white] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
               WhatsApp Desk
            </a>
         </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
