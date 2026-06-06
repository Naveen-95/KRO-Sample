"use client";

import React, { useState } from "react";
import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8 select-none">

      {/* ── Main Hero Slide with Video Background ── */}
      <div
        className="lg:col-span-6 rounded-2xl p-8 md:p-12 flex flex-col justify-center min-h-[400px] relative overflow-hidden group shadow-sm"
        style={{
          background: "linear-gradient(135deg, #1E3D28 0%, #2E5E3A 45%, #3F7A4E 80%, #4A9660 100%)",
        }}
      >
        {/* Video Background Placeholder (WoodMart's Slider Revolution / Video Module mock) */}
        <div className="absolute inset-0 z-0">
          {/* Animated wheat field simulating video playback */}
          <svg viewBox="0 0 800 400" className="absolute bottom-0 w-full h-full" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="wheat-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#B08A3E" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#B08A3E" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <g opacity="0.25">
              {Array.from({ length: 30 }).map((_, i) => (
                <line
                  key={i}
                  x1={i * 28 + 10}
                  y1="400"
                  x2={i * 28 + 10 + (i % 2 === 0 ? 5 : -5)}
                  y2={280 + (i % 3) * 15}
                  stroke="url(#wheat-gradient)"
                  strokeWidth="2.5"
                  className="origin-bottom"
                  style={{
                    animation: `sway ${2 + (i % 3)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.08}s`,
                    transformOrigin: "bottom",
                  }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Video badge (LIVE FROM FARM) - top-left */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-red-600/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">
            LIVE FROM FARM
          </span>
        </div>

        {/* Video controls - top-right */}
        <div className="absolute top-4 right-4 z-20 flex gap-2">
          <button
            onClick={() => setVideoMuted(!videoMuted)}
            className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors flex items-center justify-center text-white"
            title={videoMuted ? "Unmute video" : "Mute video"}
            aria-label={videoMuted ? "Unmute video" : "Mute video"}
          >
            {videoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Content */}
        <div className="max-w-[360px] flex flex-col items-start z-10 relative">
          {/* Eyebrow */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-gold mb-3">
            From Our Farms to Your Kitchen
          </span>

          {/* H1 */}
          <h1 className="text-2xl md:text-3xl lg:text-[2.25rem] font-serif font-bold text-white leading-[1.2] mb-4">
            Royal organics, the way Karnataka has always grown them.
          </h1>

          {/* Sub copy */}
          <p className="text-sm text-white/75 leading-relaxed mb-6 font-light max-w-[300px]">
            Stone-milled, cold-pressed, and packed fresh — straight from farmer clusters to your door. No middlemen.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="/shop"
              className="flex items-center gap-2 px-6 py-3 bg-primary-gold hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all active:scale-95 cursor-pointer"
            >
              Shop Now <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/our-farms"
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-white/40 text-white hover:bg-white/10 font-semibold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              Our Farms
            </a>
          </div>
        </div>

        {/* Right SVG illustration — farm/grain motif */}
        <div className="absolute right-0 bottom-0 w-[260px] h-[280px] pointer-events-none hidden sm:block group-hover:scale-105 transition-transform duration-500">
          <svg viewBox="0 0 220 240" className="w-full h-full">
            {/* Background circle */}
            <circle cx="130" cy="130" r="90" fill="white" opacity="0.05" />

            {/* Clay pot (ghee/grain vessel) */}
            <ellipse cx="110" cy="175" rx="42" ry="28" fill="#6B4226" opacity="0.85" />
            <ellipse cx="110" cy="148" rx="32" ry="28" fill="#8B5E3C" opacity="0.9" />
            <ellipse cx="110" cy="124" rx="22" ry="8" fill="#A0714F" />
            <ellipse cx="110" cy="124" rx="20" ry="6" fill="#F5EDDB" opacity="0.7" />
            {/* Pot highlight */}
            <ellipse cx="98" cy="148" rx="8" ry="14" fill="white" opacity="0.1" />

            {/* Wheat stalks — left */}
            <line x1="50" y1="190" x2="60" y2="110" stroke="#B08A3E" strokeWidth="2.5" />
            <ellipse cx="58" cy="108" rx="6" ry="14" fill="#C9A44A" transform="rotate(-10 58 108)" />
            <ellipse cx="64" cy="115" rx="4" ry="10" fill="#D4B057" transform="rotate(8 64 115)" />
            <line x1="52" y1="145" x2="42" y2="135" stroke="#B08A3E" strokeWidth="1.5" />
            <ellipse cx="40" cy="133" rx="4" ry="8" fill="#C9A44A" transform="rotate(-20 40 133)" />

            {/* Wheat stalks — right */}
            <line x1="175" y1="195" x2="162" y2="108" stroke="#B08A3E" strokeWidth="2.5" />
            <ellipse cx="164" cy="106" rx="6" ry="14" fill="#C9A44A" transform="rotate(12 164 106)" />
            <ellipse cx="156" cy="115" rx="4" ry="10" fill="#D4B057" transform="rotate(-8 156 115)" />
            <line x1="172" y1="148" x2="184" y2="138" stroke="#B08A3E" strokeWidth="1.5" />
            <ellipse cx="186" cy="136" rx="4" ry="8" fill="#C9A44A" transform="rotate(20 186 136)" />

            {/* Grain spill at base */}
            <ellipse cx="90" cy="196" rx="8" ry="4" fill="#D4B896" opacity="0.7" />
            <ellipse cx="130" cy="198" rx="6" ry="3" fill="#D4B896" opacity="0.6" />
            <ellipse cx="112" cy="200" rx="5" ry="2.5" fill="#BFA07A" opacity="0.5" />
          </svg>
        </div>

        {/* Disclaimer text */}
        <p className="absolute bottom-4 left-8 text-[9px] text-white/40 max-w-[220px] hidden md:block leading-relaxed z-10">
          * Milled fresh weekly. Order by Wednesday for delivery before the weekend.
        </p>

        {/* Slide dots */}
        <div className="absolute bottom-4 right-8 flex items-center gap-2 z-10">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`rounded-full cursor-pointer transition-all ${
                activeSlide === idx
                  ? "bg-primary-gold w-5 h-2"
                  : "bg-white/30 hover:bg-white/50 w-2 h-2"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Side Banner 1: Cold-Pressed Oils ── */}
      <div className="lg:col-span-3 bg-[#E9F4FB] rounded-2xl p-6 flex flex-col justify-between min-h-[400px] relative overflow-hidden group shadow-sm">
        <div className="flex flex-col items-center text-center mt-4">
          <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-blue-700 mb-1">
            Save up to 35% on
          </span>
          <h2 className="text-xl font-serif font-bold text-gray-800 mb-3">
            Cold-Pressed Oils
          </h2>
          <p className="text-xs text-gray-500 mb-3 max-w-[160px] leading-relaxed">
            Wood-pressed, no heat, no chemicals. The old way is the best way.
          </p>
          <a href="#oils" className="text-xs font-bold text-blue-700 hover:text-blue-900 transition-colors underline z-10">
            Shop Oils →
          </a>
        </div>

        {/* Oil bottle SVG */}
        <div className="w-full h-[160px] mt-auto flex justify-center items-end">
          <div className="w-[100px] h-[140px] group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 80 120" className="w-full h-full">
              {/* Bottle body */}
              <rect x="22" y="55" width="36" height="52" rx="7" fill="#F9A825" opacity="0.9" />
              {/* Oil level (slightly lower) */}
              <rect x="22" y="70" width="36" height="37" rx="6" fill="#F57F17" opacity="0.5" />
              {/* Bottle neck */}
              <rect x="30" y="38" width="20" height="19" rx="3" fill="#E0E0E0" />
              {/* Cap */}
              <rect x="27" y="30" width="26" height="10" rx="4" fill="#2E5E3A" />
              {/* Label */}
              <rect x="25" y="68" width="30" height="24" rx="3" fill="white" opacity="0.6" />
              <text x="40" y="78" fontSize="5" fontWeight="bold" fill="#5D4037" textAnchor="middle">COLD</text>
              <text x="40" y="85" fontSize="5" fontWeight="bold" fill="#2E5E3A" textAnchor="middle">PRESSED</text>
              {/* Highlight */}
              <rect x="25" y="58" width="8" height="40" rx="4" fill="white" opacity="0.2" />
              {/* Oil drip */}
              <path d="M38 30 Q36 24 40 20 Q44 24 42 30" fill="#F9A825" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Side Banner 2: A2 Bilona Ghee ── */}
      <div className="lg:col-span-3 bg-[#F5EDDB] rounded-2xl p-6 flex flex-col justify-between min-h-[400px] relative overflow-hidden group shadow-sm">
        <div className="flex flex-col items-center text-center mt-4">
          <span className="text-[9px] uppercase tracking-[0.2em] font-extrabold text-amber-800 mb-1">
            Get discount -15% on
          </span>
          <h2 className="text-xl font-serif font-bold text-gray-800 mb-3">
            A2 Bilona Ghee
          </h2>
          <p className="text-xs text-gray-500 mb-3 max-w-[160px] leading-relaxed">
            Hand-churned from A2 cow milk. The aroma tells the story.
          </p>
          <a href="#ghee-honey" className="text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors underline z-10">
            Shop Ghee →
          </a>
        </div>

        {/* Clay ghee pot SVG */}
        <div className="w-full h-[160px] mt-auto flex justify-center items-end">
          <div className="w-[110px] h-[120px] group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Pot base */}
              <ellipse cx="50" cy="82" rx="36" ry="13" fill="#8B5E3C" opacity="0.7" />
              {/* Pot body */}
              <path d="M20 80 Q14 55 22 38 Q36 20 64 20 Q78 38 80 55 Q82 72 80 80 Z" fill="#A1887F" />
              {/* Pot shoulder highlight */}
              <path d="M22 38 Q36 20 64 20 Q72 30 68 32 Q50 24 32 32 Z" fill="#BCAAA4" opacity="0.8" />
              {/* Rim */}
              <ellipse cx="50" cy="24" rx="20" ry="7" fill="#795548" />
              {/* Ghee (golden surface) */}
              <ellipse cx="50" cy="24" rx="18" ry="5.5" fill="#FFD54F" opacity="0.9" />
              <ellipse cx="46" cy="23" rx="6" ry="3" fill="white" opacity="0.25" />
              {/* Body highlight */}
              <ellipse cx="34" cy="52" rx="7" ry="16" fill="white" opacity="0.1" />
              {/* Badge on pot */}
              <circle cx="68" cy="55" r="13" fill="#B33A2B" />
              <text x="68" y="53" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">-15%</text>
              <text x="68" y="62" fontSize="5" fill="white" textAnchor="middle">OFF</text>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
}
