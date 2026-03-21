"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaArrowRight,
  FaTruck,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import {
  MdElectricBolt,
  MdCable,
  MdBolt,
  MdInventory2,
} from "react-icons/md";
import { GiWireCoil, GiMetalBar } from "react-icons/gi";
import { BiPackage } from "react-icons/bi";
import { categories } from "./data/data";

/* ── helpers ───────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

/* ── DATA ───────────────────────────────────────── */
const services = [
  {
    Icon: MdElectricBolt,
    iconBg: "bg-yellow-50",
    iconColor: "text-yellow-500",
    cardBorder: "border-yellow-100 hover:border-yellow-300",
    title: "Insulation Tapes",
    desc: "Premium electrical insulation tapes for safe and reliable wiring.",
    bullets: ["PVC Insulation Tape", "HT Rubber (EPR) Tape", "Self-Amalgamating Tape"],
    img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&auto=format&fit=crop&q=70",
  },
  {
    Icon: GiWireCoil,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    cardBorder: "border-orange-100 hover:border-orange-300",
    title: "Copper Conductors",
    desc: "High-purity copper wire for every electrical and winding application.",
    bullets: ["Bare Copper Wire", "Super Enameled Wire", "Flexible Copper Strip"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=70",
  },
  {
    Icon: GiMetalBar,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    cardBorder: "border-blue-100 hover:border-blue-300",
    title: "Brass Hardware",
    desc: "Precision-machined brass fasteners for electrical panels & switchgear.",
    bullets: ["Brass Nuts & Bolts", "Brass Washers", "Custom Brass Parts"],
    img: "https://images.unsplash.com/photo-1581244277943-fe4a9c777540?w=600&auto=format&fit=crop&q=70",
  },
];

const stats = [
  { value: "6+", label: "Product Categories", Icon: MdInventory2 },
  { value: "100%", label: "Quality Sourced", Icon: FaShieldAlt },
  { value: "Gujarat", label: "Supply Region", Icon: FaTruck },
  { value: "24/7", label: "WhatsApp Support", Icon: FaWhatsapp },
];

const whyUs = [
  { Icon: FaShieldAlt, title: "Quality Assured", desc: "Every product sourced from reputed manufacturers meeting industry standards." },
  { Icon: FaTruck, title: "Reliable Supply", desc: "Consistent stock and prompt dispatch for all your project timelines." },
  { Icon: FaStar, title: "Customer First", desc: "Honest advice and transparent pricing from inquiry to delivery." },
];

/* ── PAGE ───────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] font-sans">

      {/* ══ NAVBAR ══ */}
      <header className="sticky top-0 z-50 bg-[#0F3D81] shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 h-16 flex items-center justify-between gap-8">
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1674D3] to-[#0F3D81] border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-lg">
              BE
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight">Balaji Enterprise</div>
              <div className="text-blue-300 text-[10px] uppercase tracking-widest">Electricals &amp; Electronics</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-200">
            {["/", "/categories", "/#services", "/#about", "/#contact"].map((href, i) => (
              <a key={i} href={href} className="hover:text-white transition-colors">
                {["Home", "Products", "Services", "About", "Contact"][i]}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/917698787886"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#1674D3] hover:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" /> Get Quote
          </a>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0F3D81]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&auto=format&fit=crop&q=75"
            alt="Electrical components"
            fill
            className="object-cover opacity-15"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D81]/90 via-[#0F3D81]/70 to-[#1674D3]/60" />
        </div>
        <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#1674D3]/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full bg-[#EAB308]/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 py-24 w-full">
          <div className="max-w-3xl space-y-7">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-[#EAB308] bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full"
            >
              Trusted Electrical Supplier — Surat, Gujarat
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Quality Electricals,<br />
              <span className="text-[#EAB308]">Delivered Right.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg text-blue-100 max-w-xl leading-relaxed font-light"
            >
              Balaji Enterprise supplies PVC insulation tapes, copper wire, brass fasteners, and more — sourced reliably for businesses and contractors across Gujarat.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-white text-[#0F3D81] font-bold px-8 py-3.5 rounded-lg hover:bg-blue-50 transition-colors shadow-xl text-sm">
                Explore Products <FaArrowRight />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm">
                <FaEnvelope /> Contact Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-0 left-0 right-0 z-10 bg-white/5 backdrop-blur-sm border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <s.Icon className="text-[#EAB308] w-5 h-5 shrink-0" />
                <div>
                  <div className="text-white font-bold text-sm">{s.value}</div>
                  <div className="text-blue-300 text-[10px] uppercase tracking-wider">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ CORE SERVICES ══ */}
      <section id="services" className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#1674D3]">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D81] mt-2 tracking-tight">Our Core Services</h2>
            <p className="text-[#64748B] mt-3 max-w-xl text-sm leading-relaxed">
              Comprehensive electrical supply solutions tailored to meet your business needs with quality and consistency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${s.cardBorder}`}
              >
                {/* Card image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl ${s.iconBg} flex items-center justify-center shadow`}>
                    <s.Icon className={`w-5 h-5 ${s.iconColor}`} />
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F3D81] mb-1">{s.title}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed">{s.desc}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-[#1E293B]">
                        <FaCheckCircle className="text-[#1674D3] w-3.5 h-3.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#products" className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-[#1674D3] hover:text-[#0F3D81] transition-colors">
                    View Products <FaArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY US ══ */}
      <section className="py-16 px-6 lg:px-20 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyUs.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EBF4FF] flex items-center justify-center shrink-0">
                <w.Icon className="w-5 h-5 text-[#1674D3]" />
              </div>
              <div>
                <h3 className="font-bold text-[#0F3D81] mb-1">{w.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-16 px-6 lg:px-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div {...fadeUp} className="space-y-3 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F3D81] tracking-tight">
              Need something specific? We&apos;ll source it for you.
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed">
              Our team provides tailored sourcing for electrical &amp; electronics items — just share your specification.
            </p>
          </motion.div>
          <motion.div {...fadeIn} className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917698787886?text=Hello%2C%20I%20have%20a%20specific%20requirement."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F3D81] hover:bg-[#1674D3] text-white font-bold px-7 py-3.5 rounded-lg transition-colors text-sm shadow-md"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp Now
            </a>
            <a href="mailto:balajjenterprise.buz@gmail.com"
              className="inline-flex items-center gap-2 border border-[#0F3D81] text-[#0F3D81] font-semibold px-7 py-3.5 rounded-lg hover:bg-[#EBF4FF] transition-colors text-sm"
            >
              <FaEnvelope className="w-3.5 h-3.5" /> Email Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ PRODUCT CATEGORIES ══ */}
      <section id="products" className="py-20 px-6 lg:px-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#1674D3]">What We Stock</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D81] mt-2 tracking-tight">Product Categories</h2>
            <p className="text-[#64748B] mt-3 text-sm leading-relaxed">
              Explore our range of electrical &amp; electronics goods for contractors, manufacturers, and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <motion.a
                key={c.id}
                href={`/categories/${c.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D81]/60 to-transparent" />
                  <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#EAB308] text-[#0F3D81] px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {c.products.length} Items
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-bold text-[#0F3D81] group-hover:text-[#1674D3] transition-colors line-clamp-1">{c.name}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed flex-1 line-clamp-2">{c.description}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1674D3] group-hover:text-[#0F3D81] transition-colors mt-auto pt-2 border-t border-slate-50">
                    View Collection <FaArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 border-2 border-[#0F3D81] text-[#0F3D81] font-bold px-8 py-3 rounded-lg hover:bg-[#0F3D81] hover:text-white transition-colors text-sm"
            >
              Browse All Categories <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section id="about" className="py-20 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=75"
              alt="Electrical supply warehouse"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D81]/40 to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-[#0F3D81] flex items-center justify-center">
                <FaShieldAlt className="text-white w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-[#0F3D81]">Quality Assured</div>
                <div className="text-[10px] text-[#64748B] uppercase tracking-wider">Industry Standard Supply</div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#1674D3]">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D81] tracking-tight leading-tight">
              About Balaji Enterprise
            </h2>
            <p className="text-[#64748B] leading-relaxed text-sm">
              Balaji Enterprise is a Surat-based trading firm specializing in electrical and electronics components. We serve contractors, panel builders, OEM manufacturers, and businesses across Gujarat with quality sourcing and dependable supply.
            </p>
            <p className="text-[#64748B] leading-relaxed text-sm">
              Our catalog covers insulation tapes, copper conductors, brass fasteners, and more — with custom sourcing available for specialized requirements.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-4 flex items-center gap-3">
                  <s.Icon className="text-[#1674D3] w-5 h-5 shrink-0" />
                  <div>
                    <div className="font-bold text-[#0F3D81] text-sm">{s.value}</div>
                    <div className="text-[10px] text-[#64748B] uppercase tracking-wider">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 text-sm space-y-1.5">
              <div><span className="font-semibold text-[#1E293B]">GSTIN:</span> <span className="text-[#64748B] font-mono text-xs">24IIBPD6036E1ZO</span></div>
              <div><span className="font-semibold text-[#1E293B]">Address:</span> <span className="text-[#64748B] text-sm">Plot No. 185, Swarna Bhumi Society, Nr. Wisdom International School, Kamrej, Surat — 394180</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="py-20 px-6 lg:px-20 bg-[#0F3D81] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1674D3]/20 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#EAB308]">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 tracking-tight">Contact Balaji Enterprise</h2>
            <p className="text-blue-300 mt-3 text-sm max-w-xl leading-relaxed">Reach us via WhatsApp, email, or visit our office in Surat.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { Icon: FaPhone, label: "WhatsApp / Phone", value: "+91 76987 87886", cta: "Chat Now", href: "https://wa.me/917698787886" },
              { Icon: FaEnvelope, label: "Email", value: "balajjenterprise.buz@gmail.com", cta: "Send Email", href: "mailto:balajjenterprise.buz@gmail.com" },
              { Icon: FaMapMarkerAlt, label: "Office Address", value: "Plot 185, Swarna Bhumi Soc., Kamrej, Surat — 394180", cta: "View on Map", href: "https://maps.google.com/?q=Kamrej+Surat+394180" },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1674D3]/20 border border-[#1674D3]/30 flex items-center justify-center">
                  <c.Icon className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300 mb-1">{c.label}</div>
                  <div className="text-sm text-white font-medium leading-relaxed">{c.value}</div>
                </div>
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-sm font-bold text-[#EAB308] hover:text-yellow-300 transition-colors"
                >
                  {c.cta} <FaArrowRight className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 text-center space-y-5"
          >
            <h3 className="text-2xl font-bold text-white">Have a Specific Requirement?</h3>
            <p className="text-blue-300 text-sm leading-relaxed max-w-lg mx-auto">
              We source electrical &amp; electronics items as per customer requirements. Share your spec and we&apos;ll get back to you quickly.
            </p>
            <a
              href="https://wa.me/917698787886?text=Hello%2C%20I%20have%20a%20requirement%20for%20electrical%20items."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#EAB308] hover:bg-yellow-400 text-[#0F3D81] font-bold px-8 py-3.5 rounded-lg transition-colors text-sm shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" /> Send Requirement on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="bg-[#070F1F] text-blue-300 py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1674D3] flex items-center justify-center font-bold text-white text-sm">BE</div>
              <div className="text-white font-bold text-sm">Balaji Enterprise</div>
            </div>
            <p className="text-xs text-blue-400 leading-relaxed">
              Supplying quality electrical &amp; electronics items across Gujarat. Reliable. Trusted. Affordable.
            </p>
            <div className="text-[10px] text-blue-500 font-mono">GSTIN: 24IIBPD6036E1ZO</div>
          </div>
          {[
            {
              heading: "Products",
              links: ["PVC Insulation Tape", "HT Rubber (EPR) Tape", "Bare Copper Wire", "Super Enameled Wire", "Brass Nut, Bolt & Washer"],
              href: "/categories",
            },
            {
              heading: "Services",
              links: ["Insulation Tape Supply", "Copper Wire Supply", "Brass Hardware Supply", "Custom Sourcing", "Bulk Orders"],
              href: "/#services",
            },
            {
              heading: "Company",
              links: ["About Us", "Contact", "WhatsApp", "Email Us"],
              href: "/#about",
            },
          ].map((col, i) => (
            <div key={i} className="space-y-4">
              <h4 className="text-white font-bold text-sm">{col.heading}</h4>
              <ul className="space-y-2 text-xs">
                {col.links.map((l) => (
                  <li key={l}><a href={col.href} className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-blue-500">
          <span>&copy; {new Date().getFullYear()} Balaji Enterprise. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
