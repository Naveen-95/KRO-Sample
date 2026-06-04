"use client";

import React from "react";
import { Package, Zap, MapPin } from "lucide-react";

const PACKAGING_ITEMS = [
  {
    icon: Zap,
    title: "Milled the week you order",
    body: "We don't sit on inventory. Stone-milled in small batches so the oil and aroma reach you intact.",
    iconBg: "bg-primary-lightGreen",
    iconColor: "text-primary-green",
  },
  {
    icon: Package,
    title: "Vacuum-sealed for freshness",
    body: "Multi-layer food-grade pouches with nitrogen flush — same standard used for export shipments.",
    iconBg: "bg-primary-lightGold",
    iconColor: "text-primary-gold",
  },
  {
    icon: MapPin,
    title: "Tracked from farm to door",
    body: "Every pack carries a batch code linked to the farmer cluster and harvest date. Full transparency.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];

export default function MiddleBanners() {
  return (
    <section className="w-full mb-10 select-none">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PACKAGING_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-hover hover:scale-[1.01] transition-all duration-300"
            >
              <div className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold font-serif text-gray-800 leading-snug">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
