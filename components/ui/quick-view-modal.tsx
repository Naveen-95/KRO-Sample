"use client";

import React, { useState } from "react";
import { X, Heart, ShoppingCart, Star, Truck, Shield, RotateCcw } from "lucide-react";
import Link from "next/link";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    category: string;
    price: string;
    oldPrice?: string;
    rating?: number;
  };
}

export default function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("1kg");
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!isOpen) return null;

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Image */}
          <div className="bg-primary-bg rounded-xl p-8 flex items-center justify-center aspect-square">
            <svg viewBox="0 0 100 100" className="w-48 h-48">
              <rect x="22" y="28" width="56" height="52" rx="8" fill="#D4B896" />
              <path d="M22 28 Q50 16 78 28" fill="#BFA07A" />
              <path d="M38 28 Q50 12 62 28" fill="#6D4C41" opacity="0.7" />
            </svg>
          </div>

          {/* Details */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary-muted">
              {product.category}
            </span>
            <h2 className="text-2xl font-serif font-bold text-gray-800 mt-2 mb-3">
              {product.title}
            </h2>

            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating || 0)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.rating}</span>
              </div>
            )}

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-3xl font-bold text-primary-green">{product.price}</span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">{product.oldPrice}</span>
              )}
            </div>

            <p className="text-gray-700 text-sm mb-6">
              Premium organic {product.title.toLowerCase()} sourced directly from our farmer network in Karnataka. Lab-tested, certified pure.
            </p>

            {/* Pack size */}
            <div className="mb-4">
              <label className="text-xs font-semibold text-gray-800 mb-2 block">Pack Size</label>
              <div className="flex gap-2">
                {["500g", "1kg", "2kg"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary-green text-white"
                        : "border border-gray-300 text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + CTA */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  −
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-50"
                >
                  +
                </button>
              </div>

              <button className="flex-1 px-4 py-2.5 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>

              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-11 h-11 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                />
              </button>
            </div>

            {/* Buy Now button */}
            <button className="w-full px-4 py-2.5 bg-primary-gold hover:bg-primary-gold/90 text-white font-bold rounded-lg mb-4 transition-all">
              Buy Now
            </button>

            {/* View full details link */}
            <Link
              href={`/product/${generateSlug(product.title)}`}
              className="text-primary-green font-medium text-sm hover:underline block text-center mb-4"
            >
              View Full Details →
            </Link>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-5 h-5 text-primary-green mx-auto mb-1" />
                <p className="text-xs text-gray-700">Free Delivery</p>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-primary-green mx-auto mb-1" />
                <p className="text-xs text-gray-700">100% Organic</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-primary-green mx-auto mb-1" />
                <p className="text-xs text-gray-700">48h Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
