"use client";

import React, { useState } from "react";
import { Clock, Users, ChefHat, ArrowRight } from "lucide-react";
import { RECIPES } from "@/lib/data";

export default function KROKitchenPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Recipes" },
    { id: "millet", label: "Millet Recipes" },
    { id: "oil", label: "Cold-Pressed Cooking" },
    { id: "sweet", label: "Traditional Sweets" },
    { id: "swap", label: "Healthy Swaps" },
    { id: "festival", label: "Festival Specials" },
  ];

  const filteredRecipes = selectedCategory === "all" ? RECIPES : RECIPES.filter((r) => r.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-green to-primary-green/80 px-4 py-16 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <ChefHat className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">KRO Kitchen</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover traditional recipes and modern cooking techniques using our fresh, organic ingredients
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 py-8 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes grid */}
      <section className="px-4 py-12 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <a
              key={recipe.id}
              href={`/kro-kitchen/${recipe.id}`}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Image */}
              <div className="w-full h-48 bg-gradient-to-br from-primary-green/10 to-primary-gold/10 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-50">
                  <circle cx="100" cy="100" r="60" fill="#2E5E3A" opacity="0.1" />
                  <path d="M100 50 L130 140 L70 140 Z" fill="#B08A3E" opacity="0.3" />
                </svg>
              </div>

              {/* Content */}
              <div className="p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-green">
                  {recipe.difficulty}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mt-2 group-hover:text-primary-green transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 mt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {recipe.prepTime + recipe.cookTime} min
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {recipe.servings} servings
                  </div>
                </div>

                {/* CTA */}
                <button className="mt-4 w-full px-4 py-2 border border-primary-green text-primary-green rounded-lg font-medium hover:bg-primary-lightGreen transition-colors flex items-center justify-center gap-2 group-hover:bg-primary-green group-hover:text-white">
                  View Recipe <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </a>
          ))}
        </div>

        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No recipes found in this category yet. Stay tuned!</p>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="px-4 py-12 lg:px-8 bg-primary-green/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Weekly Recipes</h2>
          <p className="text-gray-600 mb-6">Subscribe to get seasonal recipes & cooking tips delivered to your inbox</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
