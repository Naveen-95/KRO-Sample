"use client";

import React, { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import FilterSidebar, { FilterState } from "@/components/ui/filter-sidebar";
import ProductCard from "@/components/ui/product-card";
import Pagination from "@/components/ui/pagination";
import {
  BESTSELLERS,
  FLOURS_MILLETS,
  OILS,
  SPICES,
  GHEE_HONEY,
  PULSES,
  GRAINS,
  POPULAR_CATEGORIES,
  Product,
} from "@/lib/data";

const ITEMS_PER_PAGE = 12;

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [subscriptionOnly, setSubscriptionOnly] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    certifications: [],
    inStock: false,
    rating: null,
  });

  // Combine all products
  const allProducts = useMemo(
    () => [...BESTSELLERS, ...FLOURS_MILLETS, ...OILS, ...SPICES, ...GHEE_HONEY, ...PULSES, ...GRAINS],
    []
  );

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const price = parseInt(product.price.replace("₹", ""));

      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        filters.categories.length === 0 || filters.categories.includes(product.category);
      const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];
      const matchesRating = filters.rating === null || (product.rating || 0) >= filters.rating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [allProducts, searchTerm, filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => parseInt(a.price.replace("₹", "")) - parseInt(b.price.replace("₹", "")));
      case "price-high":
        return products.sort((a, b) => parseInt(b.price.replace("₹", "")) - parseInt(a.price.replace("₹", "")));
      case "rating":
        return products.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest":
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  // Paginate
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = sortedProducts.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const categories = POPULAR_CATEGORIES.map((cat) => cat.title);
  const certifications = ["FSSAI Approved", "India Organic", "NPOP", "Lab Tested"];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section */}
      <section className="bg-primary-green/5 px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-2">Shop All Products</h1>
          <p className="text-gray-600">Explore our complete range of organic farm-fresh products</p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search & Toolbar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Search */}
            <div className="lg:col-span-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for products, flours, oils, spices..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="lg:col-span-4">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Desktop layout: Sidebar + Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                categories={categories}
                certifications={certifications}
                maxPrice={1000}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="lg:hidden mb-6 w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {showMobileFilters ? "Hide Filters" : "Show Filters"}
              </button>

              {/* Mobile Filters */}
              {showMobileFilters && (
                <div className="lg:hidden mb-6 pb-6 border-b border-gray-200">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={setFilters}
                    categories={categories}
                    certifications={certifications}
                    maxPrice={1000}
                  />
                </div>
              )}

              {/* Results info */}
              <div className="mb-6">
                <p className="text-sm text-gray-600">
                  Showing {paginatedProducts.length > 0 ? startIdx + 1 : 0}–{Math.min(startIdx + ITEMS_PER_PAGE, sortedProducts.length)} of{" "}
                  {sortedProducts.length} products
                </p>
              </div>

              {/* Product Grid */}
              {paginatedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12">
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="py-16 text-center">
                  <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                  <button
                    onClick={() =>
                      setFilters({
                        categories: [],
                        priceRange: [0, 1000],
                        certifications: [],
                        inStock: false,
                        rating: null,
                      })
                    }
                    className="text-primary-green font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
