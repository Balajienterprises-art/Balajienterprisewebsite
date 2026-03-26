import { Metadata } from "next";
import { categories } from "../data/data";
import CategoriesClient from "./CategoriesClient";

export const metadata: Metadata = {
  title: "Product Categories | Industrial Electrical Supplies Surat",
  description: "Browse our extensive range of high-quality electrical supplies. From premium insulation tapes to industrial-grade fasteners in Surat, Gujarat.",
  alternates: {
    canonical: "/categories",
  },
};

export default function CategoriesPage() {
  return <CategoriesClient categories={categories} />;
}
