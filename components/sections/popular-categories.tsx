"use client";

import React from "react";
import CategoryCard from "../ui/category-card";
import { POPULAR_CATEGORIES } from "@/lib/data";

export default function PopularCategories() {
  return (
    <section className="w-full mb-10 select-none">
      <div className="w-full border-b border-gray-100 pb-3 mb-6 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-bold font-serif text-gray-800 tracking-tight">
          Shop by Category
        </h2>
        <a href="/shop" className="text-xs font-bold text-primary-green hover:underline uppercase tracking-wider">
          All Categories
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {POPULAR_CATEGORIES.map((category, idx) => (
          <CategoryCard
            key={idx}
            title={category.title}
            items={category.items}
            image={category.image}
            bgColor={category.bgColor}
          />
        ))}
      </div>
    </section>
  );
}
