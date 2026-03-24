"use client";

import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  description?: string;
}

export default function ProductInquiryActions({ product }: { product: Product }) {
  const whatsappUrl = `https://wa.me/917698787886?text=Hello Balaji Enterprise, I am interested in ${product.name} (SKU: ${product.id}). Please provide more details and a quote.`;

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg active:scale-95"
      >
        <FaWhatsapp className="w-5 h-5" />
        WhatsApp Inquiry
      </a>
      <a
        href="tel:+917698787886"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg active:scale-95"
      >
        <FaPhone className="w-4 h-4" />
        Call +91 76987 87886
      </a>
    </div>
  );
}
