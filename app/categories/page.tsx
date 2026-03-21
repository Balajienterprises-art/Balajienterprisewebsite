"use client";

import React from "react";
import Link from "next/link";
import { categories } from "../data/data";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans pb-20">
      {/* Header Section */}
      <section className="bg-[#0F3D81] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Product Categories
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive catalog of electrical and electronics items, sourced reliably for your business needs.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              href={`/categories/${cat.id}`}
              key={cat.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F3D81]/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Badge count */}
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-[#EAB308] text-[#0F3D81] text-xs font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-sm">
                    {cat.products.length} Products
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#0F3D81] mb-2 group-hover:text-[#1674D3] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[#64748B] text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                  {cat.description}
                </p>
                
                <div className="mt-auto flex items-center text-[#1674D3] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  View Collection <FaArrowRight className="ml-2 w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
