"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";

export function MobileDock() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-brand-primary/90 backdrop-blur-xl text-white border border-white/10 z-50 flex items-center justify-around gap-8 px-8 py-4 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <Link href="/" className="flex flex-col items-center gap-1 hover:text-accent-brass transition-colors">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </Link>
      <Link href="/categories" className="flex flex-col items-center gap-1 hover:text-accent-brass transition-colors">
        <MdInventory2 className="w-6 h-6" />
      </Link>
      <a href="https://wa.me/917698787886" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-accent-brass hover:text-white transition-colors">
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
