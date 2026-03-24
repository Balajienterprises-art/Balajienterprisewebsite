"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sticky top-28">
      {/* ── Thumbnails ── */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] no-scrollbar py-1 px-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveImage(img)}
            onClick={() => setActiveImage(img)}
            className={`relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              activeImage === img
                ? "border-brand-primary ring-2 ring-brand-primary/20 scale-105"
                : "border-slate-100 dark:border-slate-800 hover:border-brand-primary/40 grayscale hover:grayscale-0"
            }`}
          >
            <Image
              src={img}
              alt={`${name} thumbnail ${idx + 1}`}
              fill
              className="object-contain p-2"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* ── Main Display Area ── */}
      <div className="flex-1">
        <div className="relative aspect-square bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner cursor-zoom-in group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt={name}
                fill
                className="object-contain p-10 transition-transform duration-700 group-hover:scale-125"
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Badge */}
          <div className="absolute bottom-6 right-6">
             <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] uppercase font-black text-slate-800 dark:text-slate-200 tracking-widest">Hi-Res View</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
