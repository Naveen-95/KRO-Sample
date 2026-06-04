"use client";

import React from "react";
import ProductCard from "../ui/product-card";
import { Product } from "@/lib/data";

interface CategoryShelfProps {
  title: string;
  products: Product[];
  id?: string;
}

export default function CategoryShelf({ title, products, id }: CategoryShelfProps) {
  return (
    <section id={id} className="w-full mb-12 select-none scroll-mt-6">
      {/* Header section with title and link */}
      <div className="w-full border-b border-gray-100 pb-3.5 mb-6 flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight">
          {title}
        </h2>
        <a 
          href="#" 
          className="text-xs font-bold text-primary-green hover:underline uppercase tracking-wider transition-all"
        >
          All Products
        </a>
      </div>

      {/* 6 Column Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            image={product.image}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            badge={product.badge}
          />
        ))}
      </div>
    </section>
  );
}
