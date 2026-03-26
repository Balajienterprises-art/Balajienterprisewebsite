"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaTags, FaBoxOpen } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const CategoriesClient = ({ categories }: { categories: any[] }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans pb-32 pt-20 overflow-x-hidden w-full max-w-[100vw]">
      
      {/* ══ Header Section (Professional & Clean) ══ */}
      <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeUp}>
            <div className="flex justify-center items-center gap-2 mb-6 text-brand-primary font-bold uppercase tracking-widest text-xs">
               <FaTags className="w-4 h-4" />
               Official Product Catalog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight dark:text-white">
              Industrial Electrical <br/><span className="text-brand-primary">Solutions</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive range of high-quality electrical supplies. From premium insulation tapes to industrial-grade fasteners, we source only the best for Surat&apos;s industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══ Categories Grid ══ */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                className="group block bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-50 dark:bg-slate-800">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Item Count */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-brand-primary font-bold text-[10px] px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider">
                      {cat.products.length} Products
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                       <FaArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-brand-primary font-bold text-[11px] uppercase tracking-widest">
                    Explore Collection
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ CALL TO ACTION ══ */}
      <section className="mt-20 px-6 max-w-7xl mx-auto mb-20">
         <div className="bg-brand-primary rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl text-white" />
            <div className="space-y-4 relative z-10 text-center md:text-left">
               <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-white text-[10px] uppercase font-bold tracking-widest">
                  <FaBoxOpen className="w-3 h-3" /> Custom Sourcing Service
               </div>
               <h2 className="text-white font-extrabold text-3xl md:text-5xl tracking-tight leading-tight">Can&apos;t find what <br/>you need?</h2>
               <p className="text-blue-100/70 max-w-sm mx-auto md:mx-0">We have a vast network to source any specific electrical component per your requirement.</p>
            </div>
            <a
               href="https://wa.me/917698787886?text=Hello Balaji Enterprise, I need help with a custom electrical requirement."
               target="_blank" rel="noopener noreferrer"
               className="bg-white text-brand-primary px-10 py-5 rounded-2xl font-extrabold uppercase tracking-widest text-sm hover:bg-slate-100 transition-all shadow-xl active:scale-95"
            >
               Request Quote
            </a>
         </div>
      </section>
    </div>
  );
};

export default CategoriesClient;
