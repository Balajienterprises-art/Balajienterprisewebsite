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
    bullets: ["Steelgrip+ PVC Tape", "HT Rubber (EPR) Tape", "Self-Amalgamating Tape"],
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


const whyUs = [
  { Icon: FaShieldAlt, title: "Quality Assured", desc: "Every product sourced from reputed manufacturers meeting industry standards." },
  { Icon: FaTruck, title: "Reliable Supply", desc: "Consistent stock and prompt dispatch for all your project timelines." },
  { Icon: FaShieldAlt, title: "Customer First", desc: "Honest advice and transparent pricing from inquiry to delivery." },
];

/* ── PAGE ───────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-text-main font-sans selection:bg-brand-primary selection:text-white overflow-x-hidden w-full max-w-[100vw]">

      {/* ══ HERO ══ */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex flex-col items-center pt-24 md:pt-32 pb-24 px-6 text-center overflow-hidden bg-brand-primary">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 flex items-center justify-center bg-brand-primary">
          <Image
            src="/hero_final.png"
            alt="Industrial Electrical Components"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-bottom opacity-90 md:grayscale grayscale-0"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-primary/70 via-brand-primary/20 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-4 md:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold"
          >
            Welcome To
          </motion.p>
          
          <motion.h1 
            {...fadeUp}
            className="text-white font-heading font-black text-4xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tighter uppercase italic"
          >
            Balaji <br className="hidden md:block" />
            <span className="text-accent-brass">Enterprise</span>
          </motion.h1>
          
          <motion.p 
            {...fadeUp}
            transition={{ delay: 0.1 }}
            className="text-blue-100/95 text-base md:text-2xl max-w-xl mx-auto leading-relaxed font-medium"
          >
            Powering industrial growth with precision-engineered electrical components & supplies
          </motion.p>

          <motion.div 
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="pt-6 md:pt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/categories" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand-primary font-heading font-black text-xs hover:bg-accent-brass transition-all uppercase tracking-widest shadow-[6px_6px_0px_rgba(0,0,0,0.2)]"
            >
              Browse Catalog
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ CORE SERVICES (Technical Grid) ══ */}
      <section id="services" className="py-16 md:py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 md:mb-20 max-w-2xl text-center md:text-left">
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-secondary font-bold">Capabilities / 01</span>
            <h2 className="text-3xl md:text-6xl font-heading font-bold text-brand-primary mt-4 tracking-tighter uppercase italic">Our Core Domains</h2>
            <div className="w-20 h-2 bg-accent-brass mt-6 mx-auto md:mx-0" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-200 border border-slate-200">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`lg:col-span-4 bg-white p-8 md:p-10 group hover:bg-brand-light transition-all`}
              >
                <div className="flex flex-col h-full gap-8">
                  <div className={`w-14 h-14 rounded-none ${s.iconBg} flex items-center justify-center border-b-4 border-accent-brass shadow-sm`}>
                    <s.Icon className={`w-7 h-7 ${s.iconColor}`} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-primary uppercase tracking-tight">{s.title}</h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-sans">{s.desc}</p>
                  </div>
                  <ul className="space-y-3 mt-4">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-[11px] md:text-xs font-bold text-brand-primary font-mono lowercase">
                        <span className="w-1.5 h-1.5 bg-accent-brass" /> {b}
                      </li>
                    ))}
                  </ul>
                  <Link href="/categories" className="mt-auto group-hover:pl-4 transition-all inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-secondary border-b border-transparent hover:border-brand-secondary pb-1 w-fit">
                    View Specs <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US (Technical Spec Style) ══ */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-bg-alt relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 md:w-2 bg-brand-primary opacity-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {whyUs.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 md:p-8 border-l-2 border-slate-200 hover:border-brand-secondary transition-colors"
            >
              <div className="text-brand-secondary font-mono text-[9px] md:text-[10px] uppercase tracking-widest mb-4 opacity-50 font-bold">Metric_{i+1}</div>
              <w.Icon className="w-6 h-6 md:w-8 md:h-8 text-brand-primary mb-6" />
              <h3 className="font-heading font-bold text-lg md:text-xl text-brand-primary mb-3 uppercase italic">{w.title}</h3>
              <p className="text-xs md:text-sm text-text-muted leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ PRODUCT CATEGORIES (Asymmetric Grid) ══ */}
      <section id="products" className="py-16 md:py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 md:mb-20 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
               <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-primary font-bold">Inventory / 02</span>
               <h2 className="text-3xl md:text-6xl font-heading font-bold text-brand-primary mt-4 tracking-tighter uppercase italic">Supply Catalog</h2>
            </div>
            <Link
              href="/categories"
              className="w-full md:w-auto px-10 py-5 bg-brand-primary text-white font-heading font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-secondary transition-all"
            >
              Browse Full Inventory
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
                      className="object-cover md:grayscale grayscale-0 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      unoptimized
                    />
                    <div className="absolute top-0 right-0 p-4">
                       <span className="font-mono text-[9px] md:text-[10px] font-bold bg-white text-brand-primary px-3 py-1 border border-brand-primary/10">
                         QTY_{c.products.length}
                       </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-primary uppercase tracking-tighter group-hover:text-brand-secondary transition-colors italic">
                      {c.name}
                    </h3>
                    <p className="text-xs md:text-sm text-text-muted font-sans line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
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
      <section id="about" className="py-16 md:py-32 px-6 lg:px-20 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-10 text-center md:text-left"
          >
            <div className="space-y-4">
               <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent-brass font-bold">The Firm / 03</span>
               <h2 className="text-3xl sm:text-4xl md:text-7xl font-heading font-bold uppercase italic leading-[1.1] md:leading-[0.9] tracking-tighter">
                 Surat's Strategic <br/> Supply Partner.
               </h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:gap-8 text-blue-100/70 text-base md:text-lg font-sans max-w-xl">
              <p>
                Balaji Enterprise isn&apos;t just a trader; we are the backbone for heavy industrial procurement in Kamrej. 
              </p>
              <p>
                Founded on the principles of technical precision and local promptness, we bridge the gap between world-class standards and Gujarat&apos;s project timelines.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative overflow-hidden border-4 md:border-8 border-white/5">
               <Image
                 src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=75"
                 alt="Warehouse Logistics"
                 fill
                 className="object-cover md:grayscale grayscale-0 hover:grayscale-0 transition-all duration-700"
                 unoptimized
               />
            </div>
             <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-accent-brass p-4 md:p-8 text-brand-primary hidden sm:block border-4 md:border-8 border-brand-primary">
                <span className="font-mono text-[8px] md:text-xs uppercase tracking-widest font-bold block mb-2 md:mb-4">Auth_Sign</span>
                <span className="font-heading font-bold text-sm md:text-lg leading-tight block italic">Verified Supply Chain</span>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT (The Hook) ══ */}
      <section id="contact" className="py-16 md:py-32 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/2 space-y-8 md:space-y-12">
            <div className="space-y-4 text-center md:text-left">
               <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-brand-secondary font-bold">Operations / 04</span>
               <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-bold text-brand-primary uppercase italic tracking-tighter">Reach Out.</h2>
            </div>
            
            <div className="space-y-6 md:space-y-10">
              {[
                { Icon: FaPhone, label: "Dispatch Desk", value: "+91 76987 87886", href: "tel:+917698787886" },
                { Icon: FaEnvelope, label: "Logistics Email", value: "balajienterprise.buz@gmail.com", href: "mailto:balajienterprise.buz@gmail.com" },
                { Icon: FaMapMarkerAlt, label: "H.O. Kamrej", value: "Plot 185, Swarna Bhumi Soc., Kamrej, Surat — 394180", href: "#" },
              ].map((c, i) => (
                <a key={i} href={c.href} className="flex flex-col sm:flex-row items-center md:items-start gap-4 md:gap-8 group text-center md:text-left">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-alt flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-brand-primary transition-all">
                    <c.Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-text-muted font-bold">{c.label}</div>
                    <div className="font-heading text-lg md:text-xl text-brand-primary font-bold tracking-tight group-hover:text-brand-secondary transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="lg:w-1/2 bg-bg-alt p-8 md:p-12 border border-slate-200 relative"
          >
             <div className="absolute top-0 right-10 w-12 h-2 bg-brand-primary" />
             <h3 className="text-2xl md:text-3xl font-heading font-bold text-brand-primary uppercase italic mb-6">Quick Sourcing</h3>
             <p className="text-xs md:text-base text-text-muted mb-8 md:mb-10 leading-relaxed font-sans">
               Need specific copper wire gauges? Message us directly for an immediate technical quote and lead time.
             </p>
             <a
               href="https://wa.me/917698787886"
               target="_blank" rel="noopener noreferrer"
               className="w-full inline-flex items-center justify-center gap-4 bg-brand-primary text-white py-5 md:py-6 font-heading font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm hover:bg-brand-secondary transition-all shadow-[8px_8px_0px_#EAB308]"
             >
               <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" /> WhatsApp Inquiry
             </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
