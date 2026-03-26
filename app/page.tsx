import { Metadata } from "next";
import { categories } from "./data/data";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient categories={categories} />;
}
