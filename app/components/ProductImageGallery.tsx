"use client"
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageGalleryProps {
  images: string[];
  name: string;
}

export default function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate position in percentage
    let x = ((e.clientX - left) / width) * 100;
    let y = ((e.clientY - top) / height) * 100;
    
    // Constrain to 0-100%
    x = Math.max(0, Math.min(100, x));
    y = Math.max(0, Math.min(100, y));
    
    setMousePos({ x, y });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-6 sticky top-28 w-full">
      {/* ── Thumbnails ── */}
      <div className="flex lg:flex-col gap-2 md:gap-3 overflow-x-auto lg:overflow-y-auto lg:max-h-[500px] no-scrollbar py-2 px-1 w-full lg:w-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onMouseEnter={() => setActiveImage(img)}
            onClick={() => setActiveImage(img)}
            className={`relative w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 shrink-0 rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
              activeImage === img
                ? "border-brand-primary ring-4 ring-brand-primary/10 scale-105"
                : "border-slate-100 dark:border-slate-800 hover:border-brand-primary/20 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${name} thumbnail ${idx + 1}`}
              fill
              className="object-contain p-1"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* ── Main Display Area ── */}
      <div className="flex-1 relative group/container w-full">
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsZooming(true)}
          onMouseLeave={() => setIsZooming(false)}
          onMouseMove={handleMouseMove}
          className="relative aspect-square w-full bg-[#fcfcfc] dark:bg-slate-950 rounded-3xl md:rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl cursor-crosshair"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative w-full h-full"
            >
              <Image
                src={activeImage}
                alt={name}
                fill
                className="object-contain" // REMOVED padding as requested (take whole container outer)
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          
          {/* 🔍 Magnifier Cursor Lens (Desktop only) */}
          {isZooming && (
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="absolute pointer-events-none hidden lg:block border-2 border-brand-primary/40 bg-brand-primary/5 shadow-2xl rounded-lg z-20"
               style={{
                  left: `${mousePos.x}%`,
                  top: `${mousePos.y}%`,
                  width: '180px',
                  height: '180px',
                  transform: 'translate(-50%, -50%)',
               }}
             />
          )}

          {/* Premium Badge */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 pointer-events-none">
             <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-slate-200/50 shadow-sm flex items-center gap-2 md:gap-2.5">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent-brass rounded-full shadow-[0_0_8px_#EAB308]" />
                <span className="text-[8px] md:text-[10px] uppercase font-black text-brand-primary tracking-[0.1em] md:tracking-[0.15em]">Verified Quality</span>
             </div>
          </div>
        </div>

        {/* 🚀 External Zoom Window (Amazon Style) */}
        <AnimatePresence>
          {isZooming && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="fixed lg:absolute lg:left-[calc(100%+1.5rem)] top-0 w-full h-full md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] z-[100] pointer-events-none rounded-3xl overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] bg-white hidden lg:block"
            >
              <div 
                className="w-full h-full transform translate-z-0"
                style={{
                  backgroundImage: `url("${activeImage}")`,
                  backgroundPosition: `${mousePos.x}% ${mousePos.y}%`,
                  backgroundSize: '240%', // Slightly higher zoom
                  backgroundRepeat: 'no-repeat',
                  transition: 'background-position 0.05s linear' // Faster tracking
                }}
              />
              <div className="absolute top-4 left-4 bg-brand-primary/95 text-white text-[9px] uppercase font-black px-4 py-1.5 rounded-full backdrop-blur-md shadow-lg tracking-[0.2em]">
                Magnified
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Helper (Mobile only) */}
        <div className="mt-4 text-center lg:hidden">
            <span className="text-[9px] text-text-muted font-black uppercase tracking-widest bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl inline-block">
              Slide thumbnails to see all views
            </span>
        </div>
      </div>
    </div>
  );
}
