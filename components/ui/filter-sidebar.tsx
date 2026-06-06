"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import Accordion from "./accordion";
import { cn } from "@/lib/utils";

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  certifications: string[];
  inStock: boolean;
  rating: number | null;
  subscriptionOnly?: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  categories?: string[];
  certifications?: string[];
  maxPrice?: number;
}

export default function FilterSidebar({
  filters,
  onFilterChange,
  categories = [],
  certifications = [],
  maxPrice = 1000,
}: FilterSidebarProps) {
  const toggleCategory = (cat: string) => {
    const updated = filters.categories.includes(cat)
      ? filters.categories.filter((c) => c !== cat)
      : [...filters.categories, cat];
    onFilterChange({ ...filters, categories: updated });
  };

  const toggleCertification = (cert: string) => {
    const updated = filters.certifications.includes(cert)
      ? filters.certifications.filter((c) => c !== cert)
      : [...filters.certifications, cert];
    onFilterChange({ ...filters, certifications: updated });
  };

  const handlePriceChange = (range: [number, number]) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  return (
    <aside className="w-full lg:w-64 space-y-6 select-none">
      {/* Categories */}
      {categories.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-800 mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-4 h-4 accent-primary-green"
                />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div>
        <h3 className="font-bold text-gray-800 mb-3">Price Range</h3>
        <div className="px-2">
          <Slider
            min={0}
            max={maxPrice}
            step={50}
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            className="w-full"
          />
          <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h3 className="font-bold text-gray-800 mb-3">Certifications</h3>
          <div className="space-y-2">
            {certifications.map((cert) => (
              <label key={cert} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.certifications.includes(cert)}
                  onChange={() => toggleCertification(cert)}
                  className="w-4 h-4 accent-primary-green"
                />
                <span className="text-sm text-gray-700">{cert}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Stock Status */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({ ...filters, inStock: e.target.checked })}
            className="w-4 h-4 accent-primary-green"
          />
          <span className="text-sm font-medium text-gray-700">In Stock Only</span>
        </label>
      </div>

      {/* Subscribe & Save */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <label className="flex items-center gap-3 cursor-pointer p-3 bg-primary-green/10 rounded-lg">
          <input
            type="checkbox"
            checked={filters.subscriptionOnly || false}
            onChange={(e) => onFilterChange({ ...filters, subscriptionOnly: e.target.checked })}
            className="w-4 h-4 accent-primary-green"
          />
          <div>
            <span className="text-sm font-bold text-primary-green">Subscribe & Save</span>
            <p className="text-xs text-gray-600 mt-0.5">Save 15% on every delivery</p>
          </div>
        </label>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-bold text-gray-800 mb-3">Minimum Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3].map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onFilterChange({ ...filters, rating })}
                className="w-4 h-4 accent-primary-green"
              />
              <span className="text-sm text-gray-700">
                {rating}★ & Up
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={() =>
          onFilterChange({
            categories: [],
            priceRange: [0, maxPrice],
            certifications: [],
            inStock: false,
            rating: null,
          })
        }
        className="w-full px-4 py-2 border border-primary-green text-primary-green rounded-lg font-medium hover:bg-primary-lightGreen transition-colors"
      >
        Reset Filters
      </button>
    </aside>
  );
}
