"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Target, Gift } from "lucide-react";

export default function WellnessQuizCTA() {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const quizPreview = [
    { id: 0, label: "Manage Diabetes", icon: "🩺" },
    { id: 1, label: "Lose Weight", icon: "🍎" },
    { id: 2, label: "Boost Immunity", icon: "🛡️" },
    { id: 3, label: "Heart Health", icon: "❤️" },
  ];

  return (
    <section className="w-full py-12 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary-green via-primary-green to-emerald-900 rounded-3xl overflow-hidden shadow-xl">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <circle cx="100" cy="100" r="60" fill="#FFD54F" />
              <circle cx="700" cy="300" r="80" fill="#B08A3E" />
              <circle cx="400" cy="50" r="40" fill="#FFFFFF" />
              <path d="M0 350 Q200 250 400 350 T800 350 L800 400 L0 400 Z" fill="#1E3D28" opacity="0.5" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left: Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary-gold">
                  Personalized For You
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
                Take Our 2-Minute<br />
                <span className="text-primary-gold">Wellness Quiz</span>
              </h2>

              <p className="text-white/85 mb-6 leading-relaxed max-w-md">
                Tell us about your health goals and we'll recommend the perfect organic products tailored to your needs.
              </p>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary-gold" />
                  </div>
                  <span className="text-sm">Personalized product recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                    <Gift className="w-4 h-4 text-primary-gold" />
                  </div>
                  <span className="text-sm font-bold">10% off your first order!</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary-gold" />
                  </div>
                  <span className="text-sm">Custom wellness plan via email</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-8 py-4 bg-primary-gold hover:bg-primary-gold/90 text-white font-bold rounded-full text-sm uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95">
                Start Quiz Now <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-xs text-white/60 mt-4">
                ⏱️ Takes only 2 minutes · 🔒 100% private · 📧 No spam
              </p>
            </div>

            {/* Right: Quiz Preview Cards */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Mock quiz card */}
                <div className="bg-white rounded-2xl p-6 shadow-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary-green mb-2">
                    Question 1 of 5
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    What's your primary health goal?
                  </h3>

                  <div className="space-y-2">
                    {quizPreview.map((option) => (
                      <button
                        key={option.id}
                        onMouseEnter={() => setHoveredOption(option.id)}
                        onMouseLeave={() => setHoveredOption(null)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                          hoveredOption === option.id
                            ? "border-primary-green bg-primary-lightGreen"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className="text-sm font-semibold text-gray-800 text-left flex-1">
                          {option.label}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-all ${
                            hoveredOption === option.id
                              ? "text-primary-green translate-x-1"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">Progress</span>
                      <span className="text-xs font-bold text-primary-green">20%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-green to-primary-gold w-1/5 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 bg-primary-gold rounded-full p-3 shadow-lg animate-bounce">
                  <Gift className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
