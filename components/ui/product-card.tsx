"use client";

import React, { useState } from "react";
import { Heart, Star, ShoppingCart, Eye, ArrowLeftRight } from "lucide-react";
import Link from "next/link";
import Badge from "./badge";
import QuickViewModal from "./quick-view-modal";
import { cn } from "@/lib/utils";
import { getWellnessTagsForProduct, WELLNESS_TAG_LABELS } from "@/lib/data";

interface ProductCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating?: number;
  badge?: {
    type: "hot" | "discount" | "new";
    text: string;
  };
}

// Helper to generate product slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default function ProductCard({
  id,
  title,
  category,
  price,
  oldPrice,
  rating,
  badge,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isSubscription, setIsSubscription] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const productSlug = generateSlug(title);
  const wellnessTags = getWellnessTagsForProduct(title).slice(0, 2); // Show only top 2 tags

  // Calculate subscription savings (15% discount)
  const priceNum = parseInt(price.replace("₹", ""));
  const subscriptionPrice = Math.floor(priceNum * 0.85);
  const savings = priceNum - subscriptionPrice;

  const renderPlaceholder = () => {
    const t = title.toLowerCase();

    // Flour / Millet / Grain bag
    if (t.includes("flour") || t.includes("ragi") || t.includes("jowar") || t.includes("bajra") || t.includes("atta") || t.includes("millet") || t.includes("foxtail")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="22" y="28" width="56" height="52" rx="8" fill="#D4B896" />
          <path d="M22 28 Q50 16 78 28" fill="#BFA07A" />
          <path d="M38 28 Q50 12 62 28" fill="#6D4C41" opacity="0.7" />
          <rect x="28" y="44" width="44" height="22" rx="3" fill="white" opacity="0.4" />
          <line x1="50" y1="50" x2="50" y2="60" stroke="#6D4C41" strokeWidth="2" />
          <path d="M42 54 Q50 48 58 54" fill="#B08A3E" />
          <path d="M42 50 Q50 44 58 50" fill="#C9A44A" />
          <text x="50" y="78" fontSize="8" fontWeight="bold" fill="#5D4037" textAnchor="middle" opacity="0.7">1 kg</text>
        </svg>
      );
    }

    // Oil bottle
    if (t.includes("oil")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="32" y="45" width="36" height="44" rx="8" fill="#F9A825" opacity="0.9" />
          <rect x="32" y="62" width="36" height="27" rx="6" fill="#F57F17" opacity="0.5" />
          <rect x="38" y="30" width="24" height="17" rx="4" fill="#E0E0E0" />
          <rect x="34" y="22" width="32" height="10" rx="5" fill="#2E5E3A" />
          <rect x="34" y="58" width="32" height="20" rx="3" fill="white" opacity="0.5" />
          <text x="50" y="66" fontSize="6" fontWeight="bold" fill="#5D4037" textAnchor="middle">COLD</text>
          <text x="50" y="74" fontSize="6" fontWeight="bold" fill="#2E5E3A" textAnchor="middle">PRESSED</text>
          <rect x="34" y="48" width="9" height="34" rx="4" fill="white" opacity="0.2" />
          <path d="M45 22 Q43 14 50 10 Q57 14 55 22" fill="#F9A825" opacity="0.8" />
        </svg>
      );
    }

    // Pulses / Dal
    if (t.includes("dal") || t.includes("toor") || t.includes("moong") || t.includes("chana") || t.includes("rajma") || t.includes("pulse") || t.includes("lentil") || t.includes("gram")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M18 62 Q26 82 62 82 Q82 82 74 62 Z" fill="#D7CCC8" />
          <ellipse cx="46" cy="62" rx="28" ry="11" fill="#BCAAA4" />
          <circle cx="30" cy="61" r="5" fill="#B08A3E" />
          <circle cx="42" cy="58" r="5" fill="#B08A3E" />
          <circle cx="54" cy="60" r="5" fill="#B08A3E" />
          <circle cx="64" cy="63" r="4.5" fill="#C9A44A" />
          <circle cx="36" cy="70" r="3.5" fill="#9C7A28" />
          <circle cx="52" cy="72" r="3.5" fill="#9C7A28" />
          <text x="46" y="50" fontSize="7" fontWeight="bold" fill="#6D4C41" textAnchor="middle" opacity="0.7">DAL</text>
        </svg>
      );
    }

    // Spices
    if (t.includes("turmeric") || t.includes("chilli") || t.includes("coriander") || t.includes("cumin") || t.includes("pepper") || t.includes("masala") || t.includes("spice")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="28" y="35" width="44" height="48" rx="6" fill="#FFF3E0" stroke="#FFCC80" strokeWidth="1.5" />
          <rect x="25" y="24" width="50" height="13" rx="5" fill="#E65100" />
          <rect x="28" y="60" width="44" height="23" rx="5" fill="#E64A19" opacity="0.65" />
          <rect x="30" y="42" width="40" height="16" rx="2" fill="white" opacity="0.65" />
          <text x="50" y="52" fontSize="7" fontWeight="bold" fill="#BF360C" textAnchor="middle">ORGANIC</text>
          <circle cx="50" cy="30" r="4" fill="white" opacity="0.3" />
        </svg>
      );
    }

    // Ghee jar
    if (t.includes("ghee")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="82" rx="32" ry="11" fill="#8B5E3C" opacity="0.6" />
          <path d="M22 80 Q16 58 24 40 Q34 20 66 20 Q76 38 78 58 Q80 70 78 80 Z" fill="#A1887F" />
          <path d="M24 40 Q34 20 66 20 Q72 28 68 30 Q50 24 32 30 Z" fill="#BCAAA4" opacity="0.8" />
          <ellipse cx="50" cy="24" rx="20" ry="8" fill="#795548" />
          <ellipse cx="50" cy="24" rx="18" ry="6" fill="#FFD54F" opacity="0.9" />
          <ellipse cx="44" cy="23" rx="6" ry="3" fill="white" opacity="0.25" />
          <ellipse cx="36" cy="54" rx="8" ry="18" fill="white" opacity="0.1" />
          <rect x="30" y="56" width="36" height="18" rx="2" fill="white" opacity="0.25" />
          <text x="48" y="63" fontSize="6" fontWeight="bold" fill="#5D4037" textAnchor="middle">A2 BILONA</text>
          <text x="48" y="71" fontSize="5" fill="#5D4037" textAnchor="middle" opacity="0.8">GHEE</text>
        </svg>
      );
    }

    // Jaggery block
    if (t.includes("jaggery")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect x="18" y="45" width="52" height="34" rx="6" fill="#8D6E63" />
          <path d="M18 45 L32 32 L84 32 L70 45 Z" fill="#A1887F" />
          <path d="M70 45 L84 32 L84 66 L70 79 Z" fill="#6D4C41" />
          <path d="M28 58 Q44 51 62 58" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M28 68 Q44 61 62 68" stroke="#6D4C41" strokeWidth="1.5" fill="none" opacity="0.4" />
          <text x="42" y="52" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle" opacity="0.6">JAGGERY</text>
        </svg>
      );
    }

    // Honey jar
    if (t.includes("honey")) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M28 46 L22 60 L26 82 L74 82 L78 60 L72 46 Z" fill="#FFD54F" />
          <rect x="36" y="30" width="28" height="18" rx="4" fill="#E0E0E0" />
          <rect x="32" y="22" width="36" height="10" rx="4" fill="#F9A825" />
          <path d="M38 58 L44 54 L50 58 L50 66 L44 70 L38 66 Z" fill="#F57F17" opacity="0.45" />
          <path d="M50 58 L56 54 L62 58 L62 66 L56 70 L50 66 Z" fill="#F57F17" opacity="0.45" />
          <rect x="37" y="36" width="26" height="10" rx="2" fill="white" opacity="0.5" />
          <text x="50" y="43" fontSize="6" fontWeight="bold" fill="#7A5500" textAnchor="middle">HONEY</text>
          <path d="M45 22 Q43 12 50 8 Q57 12 55 22" fill="#F9A825" opacity="0.9" />
        </svg>
      );
    }

    // Traditional Grains / Rice / Quinoa default
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <ellipse cx="50" cy="72" rx="34" ry="12" fill="#D4B896" />
        <path d="M16 72 Q20 50 50 42 Q80 50 84 72 Z" fill="#C8A97E" />
        <ellipse cx="34" cy="60" rx="7" ry="3.5" fill="#A68B5B" transform="rotate(-20 34 60)" />
        <ellipse cx="50" cy="55" rx="7" ry="3.5" fill="#A68B5B" />
        <ellipse cx="66" cy="60" rx="7" ry="3.5" fill="#A68B5B" transform="rotate(20 66 60)" />
        <ellipse cx="42" cy="66" rx="5.5" ry="2.5" fill="#8D6E63" transform="rotate(-10 42 66)" />
        <ellipse cx="58" cy="66" rx="5.5" ry="2.5" fill="#8D6E63" transform="rotate(10 58 66)" />
        <text x="50" y="45" fontSize="7" fontWeight="bold" fill="#6D4C41" textAnchor="middle" opacity="0.6">GRAINS</text>
      </svg>
    );
  };

  return (
    <>
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 flex flex-col items-start relative hover:shadow-hover transition-all duration-300 select-none">

      {/* Badge overlay */}
      <div className="absolute top-3.5 left-3.5 flex flex-col gap-1 z-10">
        {badge && <Badge type={badge.type}>{badge.text}</Badge>}
      </div>

      {/* Product image area with hover overlay */}
      <div className="w-full aspect-square flex items-center justify-center p-3 mb-4 bg-primary-bg rounded-xl overflow-hidden relative">
        <Link href={`/product/${productSlug}`} className="w-[110px] h-[110px] group-hover:scale-105 transition-transform duration-300 cursor-pointer">
          {renderPlaceholder()}
        </Link>

        {/* Hover action buttons (WoodMart style) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowQuickView(true);
            }}
            className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors"
            title="Quick View"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors"
            title="Compare"
            aria-label="Compare"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-primary-green hover:text-white transition-colors"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className={cn("w-4 h-4", isWishlisted && "fill-red-500 text-red-500")} />
          </button>
        </div>
      </div>

      {/* Category */}
      <span className="text-[10px] uppercase font-bold tracking-wider text-primary-muted/70 mb-1">
        {category}
      </span>

      {/* Wellness Tags */}
      {wellnessTags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-1.5">
          {wellnessTags.map((tag) => {
            const tagInfo = WELLNESS_TAG_LABELS[tag];
            if (!tagInfo) return null;
            return (
              <span
                key={tag}
                className={cn(
                  "text-[9px] font-semibold px-2 py-0.5 rounded-full",
                  tagInfo.color
                )}
              >
                {tagInfo.label}
              </span>
            );
          })}
        </div>
      )}

      {/* Title */}
      <Link href={`/product/${productSlug}`} className="w-full">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 mb-1.5 hover:text-primary-green transition-colors cursor-pointer w-full">
          {title}
        </h3>
      </Link>

      {/* Stars */}
      {rating ? (
        <div className="flex items-center gap-1.5 mb-3">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-gray-500">{rating.toFixed(1)}</span>
        </div>
      ) : (
        <div className="h-5 mb-3" />
      )}

      {/* Subscription Toggle */}
      <div className="w-full mt-3 border-t border-gray-50 pt-3">
        <button
          onClick={() => setIsSubscription(!isSubscription)}
          className={`w-full px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
            isSubscription
              ? "bg-primary-green text-white"
              : "bg-primary-lightGreen text-primary-green hover:bg-primary-green/20"
          }`}
        >
          <input
            type="checkbox"
            checked={isSubscription}
            onChange={() => setIsSubscription(!isSubscription)}
            className="w-4 h-4 cursor-pointer"
          />
          Subscribe & Save 15%
        </button>
      </div>

      {/* Price + Add to cart */}
      <div className="w-full flex items-center justify-between gap-2 mt-2">
        <div className="flex flex-col gap-0.5">
          {isSubscription ? (
            <>
              <span className="text-xs text-gray-500 line-through">{price}</span>
              <span className="text-base font-bold text-primary-green">₹{subscriptionPrice}</span>
              <span className="text-xs text-green-600 font-semibold">Save ₹{savings}/month</span>
            </>
          ) : (
            <>
              <span className="text-base font-bold text-primary-green">{price}</span>
              {oldPrice && (
                <span className="text-xs text-gray-400 line-through font-medium">{oldPrice}</span>
              )}
            </>
          )}
        </div>
        <button className="w-8 h-8 bg-primary-lightGreen hover:bg-primary-green rounded-full flex items-center justify-center text-primary-green hover:text-white transition-all cursor-pointer group/cart" aria-label="Add to cart">
          <ShoppingCart className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    {/* Quick View Modal */}
    <QuickViewModal
      isOpen={showQuickView}
      onClose={() => setShowQuickView(false)}
      product={{ id, title, category, price, oldPrice, rating }}
    />
    </>
  );
}
