"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-primary text-blue-200/50 py-16 md:py-20 px-6 lg:px-20 border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 text-center md:text-left">
        <div className="md:col-span-4 space-y-6 md:space-y-8">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-none bg-brand-secondary flex items-center justify-center font-heading font-bold text-white text-base md:text-lg">BE</div>
            <div className="text-white font-heading font-bold text-lg md:text-xl uppercase tracking-tighter italic">Balaji Enterprise</div>
          </div>
          <p className="font-sans text-xs md:text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Primary supplier for the electrical winding and industrial panel industries of Surat.
          </p>
        </div>
        
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-left">
          {[
            { title: "Catalog", items: ["Tapes", "Conductors", "Hardware"] },
            { title: "Network", items: ["Surat", "Kamrej", "Gujarat"] },
            { title: "Contact", items: ["WhatsApp", "Email", "Visit"] },
          ].map((col, i) => (
            <div key={i} className="space-y-4 md:space-y-6">
               <h4 className="text-white font-heading font-bold uppercase tracking-widest text-[10px] md:text-xs italic">{col.title}</h4>
               <ul className="space-y-3 md:space-y-4 font-mono text-[9px] md:text-[11px] uppercase tracking-wider">
                  {col.items.map(item => (
                    <li key={item}><Link href="/categories" className="hover:text-accent-brass transition-colors">[{item.toUpperCase()}]</Link></li>
                  ))}
               </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 md:mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-center">
        <span>© 2024 Balaji Enterprise // Kamrej</span>
        <div className="flex gap-4 md:gap-8">
          <Link href="#" className="hover:text-white">Security</Link>
          <Link href="#" className="hover:text-white">Logistics</Link>
          <Link href="#" className="hover:text-white">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
