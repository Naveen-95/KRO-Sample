"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, MessageCircle, TrendingUp, Truck, Shield, CheckCircle } from "lucide-react";
import ProductCard from "@/components/ui/product-card";
import Tabs from "@/components/ui/tabs";
import { BESTSELLERS, FLOURS_MILLETS, OILS, SPICES, GHEE_HONEY, PULSES, GRAINS } from "@/lib/data";

// Helper to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

// Helper to enhance product with additional details
const enhanceProduct = (product: any) => ({
  ...product,
  shortDesc: product.title.includes("Flour")
    ? "Stone-milled fresh " + product.title.toLowerCase() + " rich in nutrients. Perfect for traditional Indian preparations."
    : product.title.includes("Oil")
    ? "Cold-pressed premium " + product.title.toLowerCase() + ". No heat, no chemicals, pure goodness."
    : product.title.includes("Ghee")
    ? "Hand-churned traditional " + product.title.toLowerCase() + " from A2 cow milk."
    : product.title.includes("Honey")
    ? "Raw, unfiltered " + product.title.toLowerCase() + " from wildflower sources."
    : product.title.includes("Dal") || product.title.includes("Dal")
    ? "Premium quality " + product.title.toLowerCase() + " sourced directly from farmers."
    : "Premium organic " + product.title.toLowerCase() + " for your kitchen.",
  description: "Sourced from our farmer network in Karnataka. Stone-milled/cold-pressed within 48 hours of harvest. No additives, no preservatives — just pure organic goodness.",
  sourcing: "Grown without synthetic fertilizers or pesticides. Direct relationships with farmers ensuring fair pricing and quality.",
  nutrition: "Rich in essential nutrients, vitamins, and minerals. Lab tested for purity and quality.",
  howToUse: "Can be used in a variety of traditional and modern recipes. See our recipes section for inspiration.",
  certifications: ["FSSAI Approved", "India Organic", "NPOP Certified", "Lab Tested"],
  packSizes: ["500g", "1kg", "2kg"],
  deliveryTime: "Delivered by tomorrow 6 PM",
  inStock: true,
  reviews: 50 + Math.floor(Math.random() * 300),
});

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const allProducts = [...BESTSELLERS, ...FLOURS_MILLETS, ...OILS, ...SPICES, ...GHEE_HONEY, ...PULSES, ...GRAINS];
  const foundProduct = allProducts.find((p) => generateSlug(p.title) === params.slug);
  const product = foundProduct ? enhanceProduct(foundProduct) : enhanceProduct(BESTSELLERS[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.packSizes?.[0] || "1kg");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [purchaseType, setPurchaseType] = useState<"oneTime" | "subscription">("oneTime");
  const [subscriptionFrequency, setSubscriptionFrequency] = useState("monthly");

  // Calculate subscription savings
  const priceNum = parseInt(product.price.replace("₹", ""));
  const subscriptionPrice = Math.floor(priceNum * 0.85);
  const savings = priceNum - subscriptionPrice;

  // Get related products (same category)
  const relatedProducts = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 6);
  const fbtProducts = allProducts.filter((p) => p.category !== product.category).slice(0, 4);

  const tabs = [
    {
      id: "description",
      label: "Description",
      content: (
        <div className="prose max-w-none">
          <p className="text-gray-700">{product.description}</p>
          <h4 className="font-semibold mt-4 mb-2">Benefits:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>High in iron — supports healthy blood count</li>
            <li>Rich in calcium — strengthens bones</li>
            <li>Gluten-free — suitable for celiac diet</li>
            <li>High fiber — aids digestion</li>
          </ul>
        </div>
      ),
    },
    {
      id: "sourcing",
      label: "Sourcing & Origin",
      content: <p className="text-gray-700">{product.sourcing}</p>,
    },
    {
      id: "nutrition",
      label: "Nutrition",
      content: (
        <div>
          <p className="text-gray-700 mb-4">{product.nutrition}</p>
          <div className="bg-gray-50 rounded-lg p-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Calories (per 100g)</span>
              <span className="font-semibold">330 kcal</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>Carbohydrates</span>
              <span className="font-semibold">72g</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>Protein</span>
              <span className="font-semibold">7.3g</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span>Fat</span>
              <span className="font-semibold">1.3g</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "how-to-use",
      label: "How to Use",
      content: <p className="text-gray-700">{product.howToUse}</p>,
    },
    {
      id: "certifications",
      label: "Certifications",
      content: (
        <div className="space-y-3">
          {product.certifications?.map((cert: string) => (
            <div key={cert} className="flex items-start gap-3 p-3 bg-primary-lightGreen/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-primary-green shrink-0 mt-0.5" />
              <span className="text-gray-700 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "reviews",
      label: "Reviews",
      content: (
        <div className="text-center py-8">
          <div className="text-4xl font-bold text-primary-green mb-2">{product.rating}</div>
          <div className="text-gray-600 mb-4">Based on {product.reviews} verified purchases</div>
          <p className="text-gray-600">Customer reviews coming soon!</p>
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="px-4 py-4 lg:px-8 border-b border-gray-200 max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600 space-x-2">
          <a href="/" className="hover:text-primary-green">Home</a>
          <span>/</span>
          <a href="/shop" className="hover:text-primary-green">Shop</a>
          <span>/</span>
          <span className="text-gray-800 font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Product details */}
      <section className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-6">
            <div className="bg-primary-bg rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
              <div className="w-64 h-64">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect x="22" y="28" width="56" height="52" rx="8" fill="#D4B896" />
                  <path d="M22 28 Q50 16 78 28" fill="#BFA07A" />
                  <path d="M38 28 Q50 12 62 28" fill="#6D4C41" opacity="0.7" />
                  <rect x="28" y="44" width="44" height="22" rx="3" fill="white" opacity="0.4" />
                  <line x1="50" y1="50" x2="50" y2="60" stroke="#6D4C41" strokeWidth="2" />
                  <path d="M42 54 Q50 48 58 54" fill="#B08A3E" />
                  <path d="M42 50 Q50 44 58 50" fill="#C9A44A" />
                  <text x="50" y="78" fontSize="8" fontWeight="bold" fill="#5D4037" textAnchor="middle" opacity="0.7">
                    1 kg
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="lg:col-span-6">
            {/* Category & Title */}
            <span className="text-xs font-bold uppercase tracking-widest text-primary-muted">{product.category}</span>
            <h1 className="text-3xl lg:text-4xl font-serif font-bold text-gray-800 mt-2 mb-3">{product.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-primary-green">{product.rating}★</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-primary-green">
                  {purchaseType === "subscription" ? `₹${subscriptionPrice}` : product.price}
                </span>
                {purchaseType === "oneTime" && product.oldPrice && (
                  <span className="text-lg text-gray-400 line-through">{product.oldPrice}</span>
                )}
                {purchaseType === "subscription" && (
                  <span className="text-lg text-gray-400 line-through">{product.price}</span>
                )}
              </div>
              {purchaseType === "subscription" && (
                <p className="text-sm text-green-600 font-semibold">Save ₹{savings} every delivery (15% off)</p>
              )}
            </div>

            {/* Short description */}
            <p className="text-gray-700 mb-6 leading-relaxed">{product.shortDesc}</p>

            {/* Pack size */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-800 mb-3 block">Select Pack Size</label>
              <div className="flex gap-3">
                {product.packSizes?.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary-green text-white"
                        : "border border-gray-300 text-gray-700 hover:border-primary-green"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Purchase Type - One Time vs Subscription */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-800 mb-3 block">How Often</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPurchaseType("oneTime")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all border-2 ${
                    purchaseType === "oneTime"
                      ? "border-primary-green bg-primary-lightGreen text-primary-green"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setPurchaseType("subscription")}
                  className={`px-4 py-3 rounded-lg font-medium transition-all border-2 ${
                    purchaseType === "subscription"
                      ? "border-primary-green bg-primary-lightGreen text-primary-green"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Subscribe & Save 15%
                </button>
              </div>
            </div>

            {/* Subscription Frequency */}
            {purchaseType === "subscription" && (
              <div className="mb-6 p-4 bg-primary-green/5 rounded-lg">
                <label className="text-sm font-semibold text-gray-800 mb-3 block">Delivery Frequency</label>
                <select
                  value={subscriptionFrequency}
                  onChange={(e) => setSubscriptionFrequency(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20"
                >
                  <option value="weekly">Every Week</option>
                  <option value="biweekly">Every 2 Weeks</option>
                  <option value="monthly">Every Month</option>
                  <option value="quarterly">Every 3 Months</option>
                </select>
                <p className="text-xs text-gray-600 mt-3">
                  ✓ Pause or cancel anytime  •  ✓ Free delivery always  •  ✓ 15% discount every order
                </p>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-800 mb-3 block">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  −
                </button>
                <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </button>
            </div>

            {/* WhatsApp CTA */}
            <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all mb-6">
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </button>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Truck className="w-6 h-6 text-primary-green mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">{product.deliveryTime}</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-primary-green mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">100% Organic</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 text-primary-green mx-auto mb-2" />
                <p className="text-xs font-semibold text-gray-800">45+ Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-12 border-t border-gray-200 pt-8">
          <Tabs tabs={tabs} defaultTab="description" />
        </div>

        {/* FBT Section */}
        {fbtProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Frequently Bought Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fbtProducts.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">More from {product.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} {...prod} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
