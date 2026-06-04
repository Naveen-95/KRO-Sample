"use client";

import React from "react";
import { Truck, Wheat, Shield, CreditCard, MessageCircle } from "lucide-react";

const USP_ITEMS = [
  {
    icon: Truck,
    headline: "Free Bengaluru delivery",
    sub: "Orders above ₹999",
    color: "text-primary-green",
    bg: "bg-primary-lightGreen",
  },
  {
    icon: Wheat,
    headline: "Cold-pressed & milled fresh",
    sub: "Weekly batches",
    color: "text-primary-gold",
    bg: "bg-primary-lightGold",
  },
  {
    icon: Shield,
    headline: "FSSAI + India Organic certified",
    sub: "Lab-tested every batch",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: CreditCard,
    headline: "COD, UPI & cards accepted",
    sub: "Pay your way",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: MessageCircle,
    headline: "WhatsApp support",
    sub: "Chat us anytime",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

export default function InfoBar() {
  return (
    <section className="w-full bg-white border border-gray-100 rounded-2xl p-4 md:p-5 mb-8 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y sm:divide-y-0 sm:divide-x-0 md:divide-x divide-gray-100">
        {USP_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 px-2 py-3 sm:py-2 first:pt-0 md:first:pl-0 md:px-5"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 leading-snug">{item.headline}</span>
                <span className="text-[10px] text-gray-400 font-medium mt-0.5">{item.sub}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
