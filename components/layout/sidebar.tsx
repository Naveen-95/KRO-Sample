"use client";

import React, { useState } from "react";
import {
  Wheat,
  Droplets,
  Layers,
  Flame,
  Package,
  Square,
  Hexagon,
  Sprout,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
  { icon: Wheat,    label: "Flours & Millets",    id: "flours-millets" },
  { icon: Droplets, label: "Cold-Pressed Oils",   id: "oils" },
  { icon: Layers,   label: "Pulses & Dals",        id: "pulses" },
  { icon: Flame,    label: "Spices & Masalas",     id: "spices" },
  { icon: Package,  label: "Ghee",                 id: "ghee" },
  { icon: Square,   label: "Jaggery",              id: "jaggery" },
  { icon: Hexagon,  label: "Honey",                id: "honey" },
  { icon: Sprout,   label: "Traditional Grains",   id: "grains" },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("flours-millets");

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[70px] bg-white border-r border-gray-100 flex flex-col items-center py-4 z-40 shadow-sidebar">
      {/* KRO leaf monogram */}
      <div className="w-10 h-10 bg-primary-lightGreen rounded-xl flex items-center justify-center mb-8 shrink-0">
        <span className="text-lg font-serif font-bold text-primary-green">K</span>
      </div>

      {/* Category icons */}
      <div className="flex-1 flex flex-col gap-3 w-full items-center overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div key={item.id} className="relative group w-full flex justify-center py-1.5">
              {/* Active indicator bar */}
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-[3px] bg-primary-green rounded-r transition-all duration-300",
                  isActive
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 group-hover:opacity-40 group-hover:scale-y-75"
                )}
              />

              <button
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer",
                  isActive
                    ? "bg-primary-lightGreen text-primary-green"
                    : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                )}
                aria-label={item.label}
              >
                <Icon className="w-[20px] h-[20px]" />
              </button>

              {/* Hover tooltip */}
              <div className="absolute left-[75px] top-1/2 -translate-y-1/2 bg-primary-dark text-white text-xs px-2.5 py-1.5 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-md">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
