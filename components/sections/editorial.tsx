"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Editorial() {
  return (
    <section className="w-full mb-10 select-none">
      <div className="bg-primary-lightYellow rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* Left: Farm illustration */}
          <div className="relative min-h-[300px] flex items-center justify-center p-8 md:p-12 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #2E5E3A 0%, #3F7A4E 60%, #4A9660 100%)" }}
          >
            {/* Grain overlay texture */}
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
            />
            <svg viewBox="0 0 240 220" className="w-full max-w-[240px] relative z-10">
              {/* Field horizon */}
              <ellipse cx="120" cy="175" rx="100" ry="25" fill="#1A3D22" opacity="0.4" />

              {/* Farmer silhouette */}
              <circle cx="90" cy="100" r="14" fill="#1A3D22" opacity="0.7" />
              <path d="M90 114 L82 150 L86 150 L90 132 L94 150 L98 150 L90 114 Z" fill="#1A3D22" opacity="0.7" />
              <path d="M82 126 L70 140 M98 126 L110 140" stroke="#1A3D22" strokeWidth="4" strokeLinecap="round" opacity="0.7" />

              {/* Wheat stalks */}
              {[130, 148, 165, 182, 200].map((x, i) => (
                <g key={i}>
                  <line x1={x} y1="175" x2={x - 5} y2="100" stroke="#B08A3E" strokeWidth="2" />
                  <ellipse cx={x - 5} cy="97" rx="5" ry="13" fill="#C9A44A" transform={`rotate(${i % 2 === 0 ? 10 : -10} ${x - 5} 97)`} />
                  <ellipse cx={x - 11} cy="108" rx="3.5" ry="9" fill="#D4B057" transform={`rotate(${i % 2 === 0 ? -15 : 15} ${x - 11} 108)`} />
                </g>
              ))}

              {/* Sun */}
              <circle cx="195" cy="45" r="22" fill="#F9A825" opacity="0.3" />
              <circle cx="195" cy="45" r="14" fill="#F9A825" opacity="0.5" />

              {/* KRO text overlay */}
              <text x="40" y="60" fontSize="28" fontWeight="bold" fill="white" opacity="0.15" fontFamily="serif">KRO</text>
            </svg>
          </div>

          {/* Right: Brand story text */}
          <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-gold">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 leading-snug">
              Royals from the soil up.
            </h2>

            {/* Playfair pull-quote */}
            <blockquote className="border-l-4 border-primary-gold pl-4 italic font-serif text-gray-600 text-base leading-relaxed">
              "Every grain we sell was grown by a farmer we know by name, in a field we've walked."
            </blockquote>

            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Krish Royal Organics was born in Bengaluru from a simple frustration: why is genuinely organic, traditionally-processed food so hard to find, and when you do find it, why does it taste like a compromise?
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              We work directly with farmer clusters across Karnataka — Tumkur, Hassan, Dharwad, Raichur. No middlemen. Every batch is stone-milled or cold-pressed the week you order it.
            </p>

            <a
              href="/our-farms"
              className="flex items-center gap-2 text-sm font-bold text-primary-green hover:text-primary-gold transition-colors w-fit"
            >
              Meet our farmers <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
