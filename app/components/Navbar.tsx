"use client";
import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#0F3D81] border-b border-white/5 backdrop-blur-md">
      {/* ── TOP INFO BAR (Always On Top Priority) ── */}
      <div className="w-full bg-brand-primary/40 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-2.5 flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.25em] text-blue-200/80">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-default">
              <FaMapMarkerAlt className="text-accent-brass group-hover:scale-110 transition-transform" />
              <span>Kamrej, <span className="text-white font-bold border-b border-accent-brass/30">Surat</span>, Gujarat</span>
            </div>
            <div className="flex items-center gap-2 group">
              <FaEnvelope className="text-accent-brass group-hover:scale-110 transition-transform" />
              <a href="mailto:balajienterprise.buz@gmail.com" className="hover:text-white transition-colors">balajienterprise.buz@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 group">
              <FaPhoneAlt className="text-accent-brass group-hover:rotate-12 transition-transform" />
              <span className="text-white font-bold tracking-widest selection:bg-accent-brass selection:text-brand-primary">+91 76987 87886</span>
            </div>
            <div className="h-3 w-px bg-white/10 mx-1" />
            <div className="flex items-center gap-2 text-accent-brass font-bold">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </div>
              <span className="text-[9px]">Ready to Dispatch</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-sm bg-brand-secondary border border-white/20 flex items-center justify-center font-heading font-bold text-white text-lg shadow-[4px_4px_0px_rgba(255,255,255,0.1)] group-hover:bg-accent-brass group-hover:text-brand-primary transition-all">
            BE
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-heading font-bold text-xl leading-none tracking-tight group-hover:text-accent-brass transition-colors uppercase italic">Balaji Enterprise</div>
            <div className="text-blue-300 font-mono text-[9px] uppercase tracking-widest mt-1 opacity-80 font-black">Industrial Supply Specialist</div>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-200">
          {[
            { label: "Home", href: "/" },
            { label: "Inventory", href: "/categories" },
            { label: "Strategy", href: "/#about" },
            { label: "Dispatch Desk", href: "/#contact" }
          ].map((link, i) => (
            <Link key={i} href={link.href} className="hover:text-white transition-all hover:translate-y-[-1px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-accent-brass hover:after:w-full after:transition-all">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-white">
          <div className="hidden xl:flex flex-col items-end mr-2">
            <span className="text-[10px] font-mono text-blue-300/60 uppercase tracking-widest font-black leading-none mb-1">Logistics Support</span>
            <span className="text-sm font-bold font-heading italic tracking-tighter">+91 76987 87886</span>
          </div>
          <a
            href="https://wa.me/917698787886"
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-3 bg-brand-secondary hover:bg-white hover:text-brand-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-none transition-all shadow-[6px_6px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_#EAB308] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <FaWhatsapp className="w-4 h-4 text-accent-brass group-hover:text-brand-primary" /> Technical Quote
          </a>
        </div>
      </div>
    </header>
  );
}

