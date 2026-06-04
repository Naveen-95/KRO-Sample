"use client";

import React from "react";
import Hero from "@/components/sections/hero";
import InfoBar from "@/components/sections/info-bar";
import PopularCategories from "@/components/sections/popular-categories";
import CategoryShelf from "@/components/sections/category-shelf";
import MiddleBanners from "@/components/sections/middle-banners";
import Editorial from "@/components/sections/editorial";
import { ArrowRight } from "lucide-react";
import {
  BESTSELLERS,
  FLOURS_MILLETS,
  OILS,
  SPICES,
  GHEE_HONEY,
} from "@/lib/data";

const RECIPES = [
  { title: "Ragi Mudde with Cold-Pressed Groundnut Chutney", category: "Millet Recipes", time: "25 min", emoji: "🫓" },
  { title: "Three-Millet Upma in 10 Minutes", category: "Healthy Swaps", time: "10 min", emoji: "🥣" },
  { title: "Holige with Palm Jaggery", category: "Traditional Sweets", time: "45 min", emoji: "🥮" },
];

const TESTIMONIALS = [
  { name: "Priya S.", city: "Koramangala, Bengaluru", rating: 5, quote: "The ragi flour is incredible — you can actually smell the grain. Our family has switched completely from supermarket brands." },
  { name: "Karthik M.", city: "Whitefield, Bengaluru", rating: 5, quote: "The A2 bilona ghee is worth every rupee. The aroma when it hits the pan is unlike anything we've had before." },
  { name: "Anita R.", city: "Indiranagar, Bengaluru", rating: 5, quote: "Wild forest honey is genuinely different. Not overly sweet, deeply complex. Fast delivery too — same day!" },
];

const CERTIFICATIONS = [
  { label: "FSSAI Certified", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { label: "India Organic", color: "bg-green-100 text-green-900 border-green-200" },
  { label: "Jaivik Bharat", color: "bg-emerald-100 text-emerald-900 border-emerald-200" },
  { label: "NPOP Certified", color: "bg-teal-100 text-teal-900 border-teal-200" },
  { label: "Lab Tested Every Batch", color: "bg-amber-100 text-amber-900 border-amber-200" },
];

export default function Home() {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 lg:px-8 py-6 flex flex-col">

      {/* 1. Heritage Hero */}
      <Hero />

      {/* 2. USP / Trust bar */}
      <InfoBar />

      {/* 3. Featured categories (8 categories, 4-col grid) */}
      <PopularCategories />

      {/* 4. Bestsellers shelf */}
      <CategoryShelf
        id="bestsellers"
        title="Bestsellers"
        products={BESTSELLERS}
      />

      {/* 5. Packaging & freshness reassurance (3-col) */}
      <MiddleBanners />

      {/* 6. Brand story strip (2-col) */}
      <Editorial />

      {/* 7. Oils spotlight banner + shelf */}
      <div className="w-full mb-5 rounded-2xl bg-[#E9F4FB] overflow-hidden p-7 flex flex-col sm:flex-row items-center justify-between gap-5 select-none">
        <div className="flex flex-col gap-2 max-w-[420px]">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
            Cold-Pressed Collection
          </span>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-800 leading-snug">
            The old way of pressing — no heat, no chemicals.
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed">
            Wood-pressed on traditional wooden ghanis. The seed's oils and nutrients reach you intact.
          </p>
          <a
            href="#oils"
            className="flex items-center gap-2 w-fit mt-1 px-5 py-2 bg-primary-green text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-opacity-90 transition-all"
          >
            Shop All Oils <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <div className="text-7xl hidden sm:block opacity-80 select-none">🫙</div>
      </div>
      <CategoryShelf
        id="oils"
        title="Cold-Pressed Oils"
        products={OILS}
      />

      {/* 8. Flours & Millets shelf */}
      <CategoryShelf
        id="flours-millets"
        title="Flours & Millets"
        products={FLOURS_MILLETS}
      />

      {/* 9. Subscription teaser band */}
      <section
        id="subscription"
        className="w-full mb-12 rounded-2xl text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 select-none overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #1E3D28 0%, #2E5E3A 60%, #3F7A4E 100%)" }}
      >
        {/* Decorative grain pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-[200px] opacity-10 pointer-events-none hidden md:block">
          <svg viewBox="0 0 200 300" className="w-full h-full">
            {[30, 60, 90, 120, 150].map((x, i) => (
              <g key={i}>
                <line x1={x} y1="300" x2={x - 10} y2="150" stroke="#B08A3E" strokeWidth="2" />
                <ellipse cx={x - 10} cy="145" rx="8" ry="20" fill="#C9A44A" transform={`rotate(${i % 2 === 0 ? 10 : -10} ${x - 10} 145)`} />
              </g>
            ))}
          </svg>
        </div>

        <div className="flex flex-col gap-2.5 max-w-[500px] relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-gold">
            Monthly Subscription
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-snug">
            KRO Monthly Box — your pantry, refilled.
          </h2>
          <p className="text-sm text-white/75 leading-relaxed font-light">
            Essentials · Family · Wellness boxes. Curated fresh every month. Save 10%, always. Cancel anytime.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {["KRO Essentials — ₹999/mo", "KRO Family — ₹2,499/mo", "KRO Wellness — ₹1,499/mo"].map((box) => (
              <span key={box} className="text-[10px] text-white/60 border border-white/20 rounded-full px-3 py-1 font-medium">
                {box}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 shrink-0 relative z-10">
          <a
            href="#"
            className="px-8 py-3 bg-primary-gold hover:bg-opacity-90 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-sm text-center cursor-pointer transition-all"
          >
            Start a Box
          </a>
          <span className="text-[10px] text-white/50 text-center">Cancel anytime · No commitment</span>
        </div>
      </section>

      {/* 10. Spices shelf */}
      <CategoryShelf
        id="spices"
        title="Spices & Masalas"
        products={SPICES}
      />

      {/* 11. Ghee, Honey & Jaggery shelf */}
      <CategoryShelf
        id="ghee-honey"
        title="Ghee, Honey & Jaggery"
        products={GHEE_HONEY}
      />

      {/* 12. KRO Kitchen recipe teaser */}
      <section className="w-full mb-12 select-none">
        <div className="w-full border-b border-gray-100 pb-3.5 mb-6 flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-bold font-serif text-gray-800 tracking-tight">
            From KRO Kitchen
          </h2>
          <a href="/kro-kitchen" className="flex items-center gap-1.5 text-xs font-bold text-primary-green hover:underline uppercase tracking-wider">
            All Recipes <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECIPES.map((recipe, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-hover hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
            >
              <div className="bg-primary-lightGreen h-40 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                {recipe.emoji}
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary-green">
                  {recipe.category}
                </span>
                <h3 className="text-sm font-semibold font-serif text-gray-800 mt-1.5 mb-2 line-clamp-2 group-hover:text-primary-green transition-colors">
                  {recipe.title}
                </h3>
                <span className="text-[11px] text-gray-400 font-medium">⏱ {recipe.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Testimonials */}
      <section className="w-full mb-12 select-none">
        <div className="w-full border-b border-gray-100 pb-3.5 mb-6">
          <h2 className="text-lg md:text-xl font-bold font-serif text-gray-800 tracking-tight">
            What Bengaluru families say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-hover transition-all"
            >
              {/* Stars */}
              <div className="flex text-amber-400 gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-3 border-t border-gray-50 flex flex-col gap-0.5">
                <span className="text-sm font-bold text-gray-800">{t.name}</span>
                <span className="text-xs text-gray-400">{t.city}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. Certifications strip */}
      <section className="w-full mb-12 bg-primary-lightYellow rounded-2xl p-7 md:p-10 select-none">
        <h2 className="text-center text-lg md:text-xl font-bold font-serif text-gray-800 mb-2">
          Certified. Tested. Verified.
        </h2>
        <p className="text-center text-xs text-gray-500 mb-6">
          Every claim, every batch. Lab reports available on request.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <a
              key={idx}
              href="/certifications"
              className={`px-5 py-2 rounded-full text-xs font-bold border cursor-pointer hover:shadow-sm transition-all ${cert.color}`}
            >
              {cert.label}
            </a>
          ))}
        </div>
      </section>

      {/* 15. Newsletter band */}
      <section
        className="w-full mb-6 rounded-2xl overflow-hidden select-none"
        style={{ background: "linear-gradient(135deg, #2E5E3A 0%, #3F7A4E 100%)" }}
      >
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-[400px]">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white leading-snug">
              Recipes, harvest news, member-only offers.
            </h2>
            <p className="text-sm text-white/65 font-light">
              New recipe every week. Get them first.
            </p>
          </div>
          <div className="flex items-center gap-0 w-full max-w-[380px] rounded-full overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 bg-white/15 border-0 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/20"
            />
            <button className="px-6 py-3 bg-primary-gold hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
