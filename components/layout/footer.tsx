"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

const FOOTER_LINKS = {
  shop: ["Flours & Millets", "Cold-Pressed Oils", "Pulses", "Spices", "Ghee", "Jaggery", "Honey", "Traditional Grains"],
  kro: ["About KRO", "Our Farms", "KRO Kitchen", "Certifications", "Wholesale", "Contact"],
  help: ["Shipping & Delivery", "Returns & Refunds", "FAQ", "Track Order", "WhatsApp Us"],
  legal: ["Privacy Policy", "Terms of Service", "Refund Policy", "Shipping Policy"],
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full bg-primary-dark text-white">

      {/* ── Zone 1: Newsletter + Social ── */}
      <div className="w-full bg-primary-green">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Newsletter */}
          <div className="flex flex-col gap-1.5">
            <h4 className="text-base font-serif font-semibold text-white">
              Get recipes + first-order discount
            </h4>
            <p className="text-sm text-white/70">New harvest updates straight to your inbox.</p>
          </div>
          <div className="flex items-center gap-2 w-full max-w-[380px]">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2.5 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:bg-white/15"
            />
            <button className="px-5 py-2.5 bg-primary-gold hover:bg-opacity-90 text-white font-bold text-xs uppercase tracking-wider rounded-r-full transition-all cursor-pointer whitespace-nowrap">
              Subscribe
            </button>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
              <svg className="w-4 h-4 fill-none stroke-white" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.7A12.94 12.94 0 0 0 12 3.5a12.94 12.94 0 0 0-3.82.49 4.83 4.83 0 0 1-3.77 2.7A4.78 4.78 0 0 0 2 11c0 3.42 2.1 6.37 5 7.72A12.86 12.86 0 0 0 12 20.5a12.86 12.86 0 0 0 5-.78C19.9 18.37 22 15.42 22 12a4.78 4.78 0 0 0-2.41-5.31zM10 15V9l5 3-5 3z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Zone 2: Five-column footer ── */}
      <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {/* Col 1: About KRO */}
        <div className="lg:col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-lightGreen/20 rounded-xl flex items-center justify-center">
              <span className="text-sm font-serif font-bold text-primary-gold">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-serif font-bold text-white leading-none">
                Krish Royal<span className="text-primary-gold">.</span>
              </span>
              <span className="text-[8px] font-bold tracking-[0.18em] text-white/50 uppercase leading-none mt-0.5">
                Organics
              </span>
            </div>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Premium organic food from Karnataka's farmer clusters — stone-milled, cold-pressed, and delivered fresh to your door.
          </p>
          <span className="text-[10px] text-white/40">FSSAI Lic. #XXXXXXXXX</span>
        </div>

        {/* Col 2: Shop */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white/90 border-b border-white/10 pb-2">Shop</h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.shop.map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-white/55 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: KRO */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white/90 border-b border-white/10 pb-2">KRO</h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.kro.map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-white/55 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Help */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white/90 border-b border-white/10 pb-2">Help</h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.help.map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-white/55 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5: Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white/90 border-b border-white/10 pb-2">Legal</h4>
          <ul className="flex flex-col gap-2">
            {FOOTER_LINKS.legal.map((item) => (
              <li key={item}>
                <a href="#" className="text-xs text-white/55 hover:text-white transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Zone 3: Bottom bar ── */}
      <div className="w-full border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/40">
            © 2026 Krish Royal Organics. FSSAI Lic. #XXXXXXXXX
          </span>

          {/* Payment method icons */}
          <div className="flex items-center gap-2">
            {["UPI", "Visa", "Mastercard", "RuPay", "COD"].map((method) => (
              <span
                key={method}
                className="px-2 py-0.5 bg-white/10 text-white/60 text-[9px] font-bold rounded border border-white/10 tracking-wider"
              >
                {method}
              </span>
            ))}
            <span className="px-2 py-0.5 bg-[#B08A3E]/30 text-[#F5EDDB] text-[9px] font-bold rounded border border-[#B08A3E]/30 tracking-wider">
              Razorpay
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 bg-primary-green text-white rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all active:scale-95 cursor-pointer z-50"
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
