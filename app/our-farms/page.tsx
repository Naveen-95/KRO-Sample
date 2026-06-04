"use client";

import React from "react";
import { Sprout, Users, Leaf, TrendingUp } from "lucide-react";
import Timeline from "@/components/ui/timeline";
import { TEAM_MEMBERS, TESTIMONIALS, CERTIFICATIONS } from "@/lib/data";

export default function OurFarmsPage() {
  const farmingTimelineSteps = [
    {
      title: "Sowing",
      description: "Indigenous seeds planted during monsoon season",
      completed: true,
      icon: "1",
    },
    {
      title: "Growing",
      description: "No synthetic fertilizers or pesticides used",
      completed: true,
      icon: "2",
    },
    {
      title: "Harvesting",
      description: "Hand-picked at optimal ripeness for maximum nutrition",
      completed: true,
      icon: "3",
    },
    {
      title: "Processing",
      description: "Stone-milled or cold-pressed within 48 hours",
      completed: true,
      icon: "4",
    },
    {
      title: "Packaging",
      description: "Vacuum-sealed with batch coding for traceability",
      completed: true,
      icon: "5",
    },
    {
      title: "Delivery",
      description: "Fresh to your doorstep within 24 hours",
      completed: true,
      icon: "6",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-green/20 to-white px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Sprout className="w-16 h-16 text-primary-green mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            From Our Farms to Your Kitchen
          </h1>
          <p className="text-xl text-gray-600">
            Meet the farmers and farming communities that make KRO possible. Direct relationships, fair pricing, regenerative agriculture.
          </p>
        </div>
      </section>

      {/* The KRO Story */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image - SVG placeholder */}
          <div className="bg-primary-green/10 rounded-2xl h-96 flex items-center justify-center order-2 lg:order-1">
            <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-40">
              <rect x="20" y="100" width="160" height="80" fill="#8B5E3C" />
              <circle cx="60" cy="80" r="30" fill="#2E5E3A" />
              <circle cx="140" cy="70" r="35" fill="#2E5E3A" />
              <line x1="40" y1="50" x2="50" y2="20" stroke="#B08A3E" strokeWidth="2" />
              <line x1="160" y1="50" x2="150" y2="15" stroke="#B08A3E" strokeWidth="2" />
            </svg>
          </div>

          {/* Story text */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-widest text-primary-gold">Our Farming Philosophy</span>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mt-2 mb-6">
              Farming the Way Our Grandparents Did
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We partner with small-scale farmers across Karnataka who practice regenerative organic farming. No synthetic fertilizers, no pesticides, no chemicals — just soil, sun, and seeds that have been grown for generations.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our 47-farmer network spans Hassan, Kolar, and surrounding districts. We pay fair prices directly to farmers, ensuring they thrive while maintaining the land for future generations.
            </p>
            <p className="text-gray-700 italic font-serif text-lg text-primary-green">
              "Good farming starts with good soil. When you care for the earth, the earth cares for you."
            </p>
          </div>
        </div>
      </section>

      {/* How We Farm */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">How We Farm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <Leaf className="w-10 h-10 text-primary-green mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">No Synthetic Chemicals</h3>
              <p className="text-gray-600">
                Zero synthetic fertilizers or pesticides. We use crop rotation, composting, and natural pest control methods.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Sprout className="w-10 h-10 text-primary-green mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Indigenous Seeds</h3>
              <p className="text-gray-600">
                We prioritize heritage and indigenous seed varieties that are adapted to Karnataka's climate and soil.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <TrendingUp className="w-10 h-10 text-primary-green mb-3" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Soil Health First</h3>
              <p className="text-gray-600">
                Healthy soil = healthy crops = healthy communities. We regenerate soil through organic practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm-to-Fork Timeline */}
      <section className="px-4 py-16 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">The Journey of Your Food</h2>
        <div className="bg-white rounded-2xl p-8">
          <Timeline steps={farmingTimelineSteps} variant="vertical" />
        </div>
      </section>

      {/* Meet Our Farmers */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Meet Our Farmer Clusters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-primary-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-green/40" />
              </div>
              <h3 className="font-bold text-gray-800 text-lg">{member.name}</h3>
              <p className="text-primary-green font-semibold text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-3">{member.region} District</p>
              <p className="text-xs text-gray-700 mb-3 leading-relaxed">{member.bio}</p>
              <div className="flex items-center justify-center gap-1 text-xs bg-primary-green/10 rounded-lg py-2 px-3">
                <Leaf className="w-3 h-3 text-primary-green" />
                <span className="font-semibold text-gray-800">{member.farmersCount} farmers</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processing Methods */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Processing Methods</h2>

          {/* Cold-Pressing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white rounded-2xl h-72 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-60">
                <rect x="60" y="50" width="80" height="100" rx="10" fill="#F9A825" opacity="0.3" />
                <circle cx="100" cy="30" r="20" fill="#2E5E3A" />
                <rect x="90" y="50" width="20" height="40" fill="#6D4C41" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cold-Pressed Oils</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Our oils are pressed at low temperatures to preserve nutrients, flavor, and aroma. No heat, no chemicals, no refinement.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Wood-pressing using traditional methods passed down through generations. This takes longer and produces less, but the quality is incomparable.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 100% pure, single-origin oils</li>
                <li>✓ No additives or preservatives</li>
                <li>✓ Rich in natural antioxidants</li>
              </ul>
            </div>
          </div>

          {/* Stone-Milling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Stone-Milled Flours</h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Our flours are ground using traditional stone mills that preserve the nutritional integrity of each grain. The slow, cool milling process keeps nutrients intact.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Milled fresh within 48 hours of harvest. Each batch is unique — color, taste, and texture vary slightly depending on harvest season and soil conditions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Fresh-milled each week</li>
                <li>✓ Full fiber and bran retained</li>
                <li>✓ No bleaching or refining</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl h-72 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-60">
                <circle cx="100" cy="100" r="80" fill="#D4B896" opacity="0.3" />
                <circle cx="100" cy="100" r="70" fill="#BFA07A" opacity="0.5" />
                <path d="M100 40 L140 80 L140 120 L100 140 L60 120 L60 80 Z" fill="#8B5E3C" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-xs text-gray-600">{testimonial.city}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Certified by</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.id} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-primary-green" />
                </div>
                <p className="font-bold text-sm text-gray-800">{cert.name}</p>
                <p className="text-xs text-gray-600 mt-1">{cert.code}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Taste the Difference</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience the flavor and nutrition that comes from soil loved with care, seeds grown with respect, and farming done the right way.
        </p>
        <a
          href="/shop"
          className="inline-block px-8 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
        >
          Shop Our Products
        </a>
      </section>
    </main>
  );
}
