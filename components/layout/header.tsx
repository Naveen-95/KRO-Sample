"use client";

import React, { useState } from "react";
import {
  Heart,
  User,
  Search,
  ShoppingBag,
  Menu,
  X,
  Phone,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",           href: "/" },
  { label: "Shop",           href: "/shop" },
  { label: "KRO Kitchen",    href: "/kro-kitchen" },
  { label: "Our Farms",      href: "/our-farms" },
  { label: "Certifications", href: "/certifications" },
  { label: "About",          href: "/about" },
  { label: "Contact",        href: "/contact" },
];

const MARQUEE_TEXT =
  "Free delivery in Bengaluru on orders over ₹999  ·  Cold-pressed & milled fresh weekly  ·  FSSAI certified | India Organic  ·  ";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 flex flex-col z-30 sticky top-0">

      {/* ── Row 1: Top bar (dark green band with marquee) ── */}
      <div className="w-full bg-primary-green hidden md:block overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-1.5 flex items-center justify-between gap-4">
          {/* Marquee — duplicated string creates seamless loop */}
          <div className="flex-1 overflow-hidden relative">
            <div className="animate-marquee text-[11px] text-white/90 font-medium">
              {MARQUEE_TEXT.repeat(4)}
            </div>
          </div>

          {/* Right: phone + WhatsApp */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-1.5 text-[11px] text-white/85 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              +91-XXXXXXXXXX
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-white/85 hover:text-white transition-colors font-medium"
            >
              {/* WhatsApp icon */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Talk to us
            </a>
          </div>
        </div>
      </div>

      {/* ── Row 2: Logo + Search + Cart ── */}
      <div className="w-full border-b border-gray-50">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between gap-4">

          {/* Mobile: hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-gray-500 hover:text-primary-green md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* KRO Logo */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 bg-primary-lightGreen rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-base font-serif font-bold text-primary-green">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[18px] font-bold tracking-tight text-primary-dark font-serif leading-none">
                Krish Royal<span className="text-primary-gold">.</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.18em] text-primary-green uppercase leading-none mt-0.5">
                Organics
              </span>
            </div>
          </a>

          {/* Search — full width, no category dropdown (desktop) */}
          <div className="hidden md:flex flex-1 max-w-[560px] relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for ragi flour, ghee, oils…"
              className="w-full pl-5 pr-12 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-primary-green/30 focus:border-primary-green transition-all"
            />
            <button className="absolute right-1 top-1 w-8 h-8 bg-primary-green hover:bg-opacity-90 rounded-full flex items-center justify-center text-white transition-all cursor-pointer">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Actions: Account + Wishlist + Cart */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-primary-green transition-all cursor-pointer" aria-label="My account">
              <User className="w-4.5 h-4.5" />
            </button>
            <button className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-gray-50 text-gray-500 hover:text-primary-green transition-all cursor-pointer" aria-label="Wishlist">
              <Heart className="w-4.5 h-4.5" />
            </button>
            <button className="relative w-10 h-10 bg-primary-lightGreen hover:bg-opacity-80 rounded-full flex items-center justify-center text-primary-green cursor-pointer transition-all" aria-label="Cart">
              <ShoppingBag className="w-4.5 h-4.5" />
              <span className="absolute -top-1 -right-1 bg-primary-green text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                0
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Row 3: Navigation menu (desktop) ── */}
      <div className="w-full hidden md:block bg-white">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 flex items-center justify-between py-2">
          {/* Primary nav */}
          <nav className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1.5 text-[13px] font-medium rounded-lg transition-all",
                  link.href === "/"
                    ? "text-primary-green font-semibold"
                    : "text-gray-600 hover:text-primary-green hover:bg-primary-lightGreen"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right promo text */}
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-primary-gold">
            <MapPin className="w-3 h-3" />
            Same-day Bengaluru delivery available
          </span>
        </div>
      </div>

      {/* ── Mobile search bar ── */}
      <div className="w-full px-4 pb-3 md:hidden bg-white border-b border-gray-50">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for products…"
            className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-700 focus:outline-none focus:bg-white"
          />
          <button className="absolute right-1 top-1 w-8 h-8 bg-primary-green text-white rounded-full flex items-center justify-center cursor-pointer">
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer nav ── */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 animate-fade-in z-50">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center py-2 px-2 text-sm font-medium text-gray-700 hover:text-primary-green hover:bg-primary-lightGreen rounded-lg transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-gray-100 my-2" />
          <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-2 py-2 px-2 text-sm text-gray-500">
            <Phone className="w-4 h-4" /> +91-XXXXXXXXXX
          </a>
        </div>
      )}
    </header>
  );
}
