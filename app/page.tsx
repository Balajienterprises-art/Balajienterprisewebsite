"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdElectricBolt,
  MdInventory2,
} from "react-icons/md";
import { GiWireCoil, GiMetalBar } from "react-icons/gi";
import { categories } from "./data/data";

/* ── helpers ───────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

/* ── DATA ───────────────────────────────────────── */
const services = [
  {
    Icon: MdElectricBolt,
    iconBg: "bg-yellow-100/50",
    iconColor: "text-yellow-600",
    title: "Insulation Tapes",
    desc: "Premium electrical insulation tapes for safe and reliable wiring.",
    bullets: ["PVC Insulation Tape", "HT Rubber (EPR) Tape", "Self-Amalgamating Tape"],
  },
  {
    Icon: GiWireCoil,
    iconBg: "bg-orange-100/50",
    iconColor: "text-orange-600",
    title: "Copper Conductors",
    desc: "High-purity copper wire for every electrical and winding application.",
    bullets: ["Bare Copper Wire", "Super Enameled Wire", "Flexible Copper Strip"],
  },
  {
    Icon: GiMetalBar,
    iconBg: "bg-blue-100/50",
    iconColor: "text-blue-600",
    title: "Brass Hardware",
    desc: "Precision-machined brass fasteners for electrical panels & switchgear.",
    bullets: ["Brass Nuts & Bolts", "Brass Washers", "Custom Brass Parts"],
  },
];

const stats = [
  { value: "6+", label: "Product Categories" },
  { value: "100%", label: "Quality Sourced" },
  { value: "Gujarat", label: "Supply Region" },
  { value: "24/7", label: "WhatsApp Support" },
];

const whyUs = [
  { Icon: FaShieldAlt, title: "Quality Assured", desc: "Every product sourced from reputed manufacturers meeting industry standards." },
  { Icon: FaTruck, title: "Reliable Supply", desc: "Consistent stock and prompt dispatch for all your project timelines." },
  { Icon: FaShieldAlt, title: "Customer First", desc: "Honest advice and transparent pricing from inquiry to delivery." },
];

/* ── PAGE ───────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-text-main font-sans selection:bg-brand-primary selection:text-white">

      {/* ══ NAVBAR ══ */}
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

      {/* ══ HERO ══ */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&auto=format&fit=crop&q=75"
            alt="Electrical components"
            fill
            className="object-cover opacity-20 grayscale"
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-br from-brand-primary/95 via-brand-primary/80 to-brand-secondary/40" />
        </div>
        
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-32 w-full">
          <div className="max-w-4xl space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-none"
            >
              <span className="w-2 h-2 rounded-full bg-accent-brass animate-pulse" />
              <span className="text-white font-mono text-xs uppercase tracking-[0.3em]">Precision-Engineered Supplies</span>
            </motion.div>
            
            <motion.h1 
              {...fadeUp}
              className="text-white font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[0.95] tracking-tighter"
            >
              Powering <span className="text-accent-brass">Gujarat's</span> <br className="hidden md:block" />  
              Industrial Pulse.
            </motion.h1>
            
            <motion.p 
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className="text-blue-100/80 text-lg md:text-xl max-w-2xl leading-relaxed font-sans"
            >
              High-performance electrical & electronics trading. From PVC insulation to copper conductors—we source only what's battle-tested for Surat's heavy industry.
            </motion.p>
            
            <motion.div 
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 pt-6"
            >
              <Link 
                href="/categories" 
                className="w-full sm:w-auto px-10 py-5 bg-white text-brand-primary font-heading font-bold text-lg hover:bg-accent-brass transition-colors flex items-center justify-center gap-3 group"
              >
                Browse Catalog <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/917698787886" 
                className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-heading font-bold text-lg hover:border-white transition-colors flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-green-400" /> Consult Supplies
              </a>
            </motion.div>

            {/* Quick Stats Banner */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/10"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-accent-brass font-mono text-3xl font-bold tracking-tighter transition-all hover:scale-110 origin-left cursor-default">
                    {stat.value}
                  </div>
                  <div className="text-blue-200/50 font-mono text-[10px] uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ CORE SERVICES (Technical Grid) ══ */}
      <section id="services" className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-20 max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-secondary">Capabilities / 01</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-brand-primary mt-4 tracking-tighter uppercase italic">Our Core Domains</h2>
            <div className="w-24 h-2 bg-accent-brass mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-200 border border-slate-200">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:col-span-4 bg-white p-10 group hover:bg-brand-light transition-all`}
              >
                <div className="flex flex-col h-full gap-8">
                  <div className={`w-14 h-14 rounded-none ${s.iconBg} flex items-center justify-center border-b-4 border-accent-brass shadow-sm`}>
                    <s.Icon className={`w-7 h-7 ${s.iconColor}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-brand-primary uppercase tracking-tight">{s.title}</h3>
                    <p className="text-text-muted leading-relaxed font-sans">{s.desc}</p>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-bold text-brand-primary font-mono lowercase">
                        <span className="w-1.5 h-1.5 bg-accent-brass" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/categories" className="mt-auto group-hover:pl-4 transition-all inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-brand-secondary border-b border-transparent hover:border-brand-secondary pb-1 w-fit">
                    View Specs <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US (Technical Spec Style) ══ */}
      <section className="py-24 px-6 lg:px-20 bg-bg-alt relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-brand-primary opacity-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {whyUs.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border-l-2 border-slate-200 hover:border-brand-secondary transition-colors"
            >
              <div className="text-brand-secondary font-mono text-[10px] uppercase tracking-widest mb-4 opacity-50">Metric_{i+1}</div>
              <w.Icon className="w-8 h-8 text-brand-primary mb-6" />
              <h3 className="font-heading font-bold text-xl text-brand-primary mb-3 uppercase italic">{w.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ PRODUCT CATEGORIES (Asymmetric Grid) ══ */}
      <section id="products" className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-20 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="max-w-xl">
               <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent-copper">Inventory / 02</span>
               <h2 className="text-3xl sm:text-4xl md:text-6xl font-heading font-bold text-brand-primary mt-4 tracking-tighter uppercase italic">Supply Catalog</h2>
            </div>
            <Link
              href="/categories"
              className="px-10 py-5 bg-brand-primary text-white font-heading font-bold uppercase tracking-widest text-xs hover:bg-brand-secondary transition-all"
            >
              Browse Full Inventory
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <Link href={`/categories/${c.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 mb-6 border border-slate-100">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      unoptimized
                    />
                    {/* Scan Line Animation */}
                    <div className="absolute inset-0 bg-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                       <div className="w-full h-[2px] bg-accent-brass/50 shadow-[0_0_15px_#EAB308] animate-scan" />
                    </div>
                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-all" />
                    <div className="absolute top-0 right-0 p-4">
                       <span className="font-mono text-[10px] font-bold bg-white text-brand-primary px-3 py-1 border border-brand-primary/10">
                         QTY_{c.products.length}
                       </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-bold text-brand-primary uppercase tracking-tighter group-hover:text-brand-secondary transition-colors italic">
                      {c.name}
                    </h3>
                    <p className="text-sm text-text-muted font-sans line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {c.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT (Industrial Story) ══ */}
      <section id="about" className="py-32 px-6 lg:px-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-4">
               <span className="font-mono text-xs uppercase tracking-[0.4em] text-accent-brass">The Firm / 03</span>
               <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold uppercase italic leading-[1.1] md:leading-[0.9] tracking-tighter">
                 Surat's Strategic <br/> Supply Partner.
               </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8 text-blue-100/70 text-lg font-sans max-w-xl">
              <p>
                Balaji Enterprise isn't just a trader; we are the backbone for heavy industrial procurement in Kamrej. We understand that in electrical winding and panel building, a 1% drop in purity means 100% failure.
              </p>
              <p>
                Founded on the principles of technical precision and local promptness, we bridge the gap between world-class standards and Gujarat's aggressive project timelines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden border-8 border-white/5">
               <Image
                 src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=75"
                 alt="Warehouse Logistics"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 unoptimized
               />
            </div>
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent-brass p-8 text-brand-primary hidden md:block border-8 border-brand-primary">
                <span className="font-mono text-xs uppercase tracking-widest font-bold block mb-4">Auth_Sign</span>
                <span className="font-heading font-bold text-lg leading-tight block italic">Verified Supply Chain</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT (The Hook) ══ */}
      <section id="contact" className="py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 space-y-12">
            <div className="space-y-4">
               <span className="font-mono text-xs uppercase tracking-[0.4em] text-brand-secondary">Operations / 04</span>
               <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-brand-primary uppercase italic tracking-tighter">Reach Out.</h2>
            </div>
            
            <div className="space-y-10">
              {[
                { Icon: FaPhone, label: "Dispatch Desk", value: "+91 76987 87886", href: "tel:+917698787886" },
                { Icon: FaEnvelope, label: "Logistics Email", value: "balajjenterprise.buz@gmail.com", href: "mailto:balajjenterprise.buz@gmail.com" },
                { Icon: FaMapMarkerAlt, label: "H.O. Kamrej", value: "Plot 185, Swarna Bhumi Soc., Kamrej, Surat — 394180", href: "#" },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 bg-bg-alt flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-primary transition-all">
                    <c.Icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted font-bold">{c.label}</div>
                    <div className="font-heading text-xl text-brand-primary font-bold tracking-tight group-hover:text-brand-secondary transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="lg:w-1/2 bg-bg-alt p-12 border border-slate-200 relative"
          >
             <div className="absolute top-0 right-10 w-12 h-2 bg-brand-primary" />
             <h3 className="text-3xl font-heading font-bold text-brand-primary uppercase italic mb-6">Quick Sourcing</h3>
             <p className="text-text-muted mb-10 leading-relaxed font-sans">
               Need specific copper wire gauges or custom brass fastener dimensions? Message us directly for an immediate technical quote and lead time.
             </p>
             <a
               href="https://wa.me/917698787886"
               target="_blank" rel="noopener noreferrer"
               className="w-full inline-flex items-center justify-center gap-4 bg-brand-primary text-white py-6 font-heading font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-secondary transition-all shadow-[8px_8px_0px_#EAB308]"
             >
               <FaWhatsapp className="w-6 h-6" /> WhatsApp Inquiry
             </a>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-brand-primary text-blue-200/50 py-20 px-6 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-brand-secondary flex items-center justify-center font-heading font-bold text-white text-lg">BE</div>
              <div className="text-white font-heading font-bold text-xl uppercase tracking-tighter italic">Balaji Enterprise</div>
            </div>
            <p className="font-sans text-sm leading-relaxed max-w-xs">
              Primary supplier for the electrical winding and industrial panel industries of Surat. Precision sourced. Regionally trusted.
            </p>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] pt-4 border-t border-white/5">
              GST: 24IIBPD6036E1ZO
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {[
              { title: "Catalog", items: ["Tapes", "Conductors", "Hardware", "Custom"] },
              { title: "Network", items: ["Surat", "Kamrej", "Gujarat", "Pan-India"] },
              { title: "Contact", items: ["WhatsApp", "Email", "Visit", "Call"] },
            ].map((col, i) => (
              <div key={i} className="space-y-6">
                 <h4 className="text-white font-heading font-bold uppercase tracking-widest text-xs italic">{col.title}</h4>
                 <ul className="space-y-4 font-mono text-[11px] uppercase tracking-wider">
                    {col.items.map(item => (
                      <li key={item}><Link href="/categories" className="hover:text-accent-brass transition-colors">[{item}]</Link></li>
                    ))}
                 </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[9px] uppercase tracking-[0.3em]">
          <span>© 2024 Balaji Enterprise // Kamrej Operations</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Security</Link>
            <Link href="#" className="hover:text-white">Logistics</Link>
            <Link href="#" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </footer>

      {/* ══ MOBILE DOCK ══ */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-primary text-white border-t border-white/10 z-50 flex items-center justify-around py-3 pb-safe shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <Link href="/" className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Home</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
          <MdInventory2 className="w-5 h-5" />
          <span className="font-mono text-[9px] uppercase tracking-wider font-bold">Catalog</span>
        </Link>
        <a href="https://wa.me/917698787886" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-accent-brass hover:text-white transition-colors relative -top-3">
          <div className="w-12 h-12 bg-accent-brass rounded-full flex items-center justify-center shadow-lg border-4 border-white">
            <FaWhatsapp className="w-6 h-6 text-brand-primary" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider font-bold mt-1 text-white">Inquiry</span>
        </a>
      </div>

    </div>
  );
}
