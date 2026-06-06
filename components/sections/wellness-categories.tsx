"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Heart, Activity, Apple, Shield, Sparkles, Baby, Flower, Users } from "lucide-react";
import { WELLNESS_CATEGORIES } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  diabetic: <Activity className="w-7 h-7" />,
  weight: <Apple className="w-7 h-7" />,
  heart: <Heart className="w-7 h-7" />,
  immunity: <Shield className="w-7 h-7" />,
  gut: <Sparkles className="w-7 h-7" />,
  kids: <Baby className="w-7 h-7" />,
  pregnancy: <Flower className="w-7 h-7" />,
  senior: <Users className="w-7 h-7" />,
};

export default function WellnessCategories() {
  return (
    <section className="w-full py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-gold mb-2 block">
              Shop by Goal
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
              Find Foods That Match Your Wellness Journey
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl">
              Curated organic foods for every health goal. Diabetic-friendly millets, heart-healthy oils, immunity-boosting honey & more.
            </p>
          </div>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 text-sm font-semibold text-primary-green hover:text-primary-green/80 transition-colors whitespace-nowrap"
          >
            View All Goals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Wellness Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {WELLNESS_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/shop?wellness=${category.id}`}
              className="group bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className={category.iconColor}>{iconMap[category.icon]}</div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1 group-hover:text-primary-green transition-colors">
                {category.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3 line-clamp-2 leading-relaxed">
                {category.subtitle}
              </p>

              {/* Product count + Arrow */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-xs font-semibold text-gray-700">
                  {category.productCount} products
                </span>
                <ArrowRight className="w-4 h-4 text-primary-green group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="md:hidden mt-6 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-green hover:text-primary-green/80"
          >
            View All Wellness Goals <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
