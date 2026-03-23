"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0F3D81] border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-sm bg-brand-secondary border border-white/20 flex items-center justify-center font-heading font-bold text-white text-lg shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
            BE
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-heading font-bold text-xl leading-none tracking-tight">Balaji Enterprise</div>
            <div className="text-blue-300 font-mono text-[10px] uppercase tracking-widest mt-1 opacity-80">Industrial Supplies</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold uppercase tracking-wider text-blue-200">
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/categories" },
            { label: "About Us", href: "/#about" },
            { label: "Reach Us", href: "/#contact" }
          ].map((link, i) => (
            <Link key={i} href={link.href} className="hover:text-white transition-all hover:translate-y-[-1px]">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-white">
           <div className="hidden xl:flex flex-col items-end mr-4">
              <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest">Call Logistics</span>
              <span className="text-sm font-bold font-heading">+91 76987 87886</span>
           </div>
          <a
            href="https://wa.me/917698787886"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 bg-brand-secondary hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-none transition-all shadow-[6px_6px_0px_#0F3D81,7px_7px_0px_rgba(255,255,255,0.2)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <FaWhatsapp className="w-4 h-4" /> Inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
