"use client";

import React from "react";
import Link from "next/link";
import { TrendingUp, Flame, Clock, AlertCircle } from "lucide-react";
import { BESTSELLERS } from "@/lib/data";

// Helper to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Mock trending data
const trendingProducts = BESTSELLERS.slice(0, 6).map((product, idx) => ({
  ...product,
  soldToday: Math.floor(Math.random() * 30) + 15,
  stockLeft: Math.floor(Math.random() * 8) + 2,
  trending: idx < 3,
}));

export default function TrendingTicker() {
  return (
    <section className="w-full py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full">
                <Flame className="w-3 h-3 text-red-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Trending Now
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live updates</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
              Selling Fast Today
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Real-time bestsellers — order before they're gone!
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-primary-green hover:text-primary-green/80 whitespace-nowrap"
          >
            View All <TrendingUp className="w-4 h-4" />
          </Link>
        </div>

        {/* Horizontal scrolling ticker */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {trendingProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${generateSlug(product.title)}`}
              className="group bg-white rounded-xl border border-gray-100 p-3 hover:shadow-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Trending Rank Badge */}
              {product.trending && (
                <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5" />
                  HOT
                </div>
              )}

              {/* Product Image */}
              <div className="w-full aspect-square bg-primary-bg rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-16 h-16 group-hover:scale-110 transition-transform">
                  <rect x="22" y="28" width="56" height="52" rx="8" fill="#D4B896" />
                  <path d="M22 28 Q50 16 78 28" fill="#BFA07A" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-xs font-semibold text-gray-800 line-clamp-1 mb-1 group-hover:text-primary-green transition-colors">
                {product.title}
              </h3>

              {/* Price */}
              <p className="text-sm font-bold text-primary-green mb-2">{product.price}</p>

              {/* Urgency Indicators */}
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[10px] text-gray-600">
                  <Clock className="w-2.5 h-2.5" />
                  <span>{product.soldToday} bought today</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-orange-600">
                  <AlertCircle className="w-2.5 h-2.5" />
                  <span>Only {product.stockLeft} left!</span>
                </div>
              </div>

              {/* Stock progress bar */}
              <div className="mt-2 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all"
                  style={{ width: `${(product.stockLeft / 10) * 100}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
