"use client";

import React from "react";
import { Sprout, Users, Award, TrendingUp } from "lucide-react";
import { TEAM_MEMBERS, TESTIMONIALS } from "@/lib/data";
import Timeline from "@/components/ui/timeline";

export default function AboutPage() {
  const timelineSteps = [
    {
      title: "Founded",
      description: "KRO started with a vision to connect organic farmers directly to conscious consumers",
      completed: true,
      icon: "2020",
    },
    {
      title: "First Farm Cluster",
      description: "Partnered with 12 farmers in Hassan district to scale production",
      completed: true,
      icon: "2021",
    },
    {
      title: "Expanded to Bengaluru",
      description: "Launched same-day delivery service across Bengaluru",
      completed: true,
      icon: "2023",
    },
    {
      title: "47-Farmer Network",
      description: "Now working with 47 farmers across Karnataka",
      completed: true,
      icon: "2024",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-green/10 to-white px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            Royals from the Soil Up
          </h1>
          <p className="text-xl text-gray-600">
            Krish Royal Organics brings farm-fresh organic products directly to your kitchen, without middlemen or compromises.
          </p>
        </div>
      </section>

      {/* Founder's story */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image - SVG placeholder */}
          <div className="bg-primary-green/10 rounded-2xl h-96 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-40">
              <circle cx="100" cy="60" r="30" fill="#2E5E3A" />
              <ellipse cx="100" cy="120" rx="35" ry="40" fill="#2E5E3A" opacity="0.8" />
              <line x1="80" y1="150" x2="70" y2="190" stroke="#B08A3E" strokeWidth="3" />
              <line x1="120" y1="150" x2="130" y2="190" stroke="#B08A3E" strokeWidth="3" />
            </svg>
          </div>

          {/* Story text */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary-gold">Our Story</span>
            <h2 className="text-3xl font-serif font-bold text-gray-800 mt-2 mb-6">
              From a Farmer's Dream to Your Kitchen
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Growing up in rural Karnataka, founder Rajesh Kant watched his family farm transition to chemical agriculture. He saw fertile soil degraded, farmers struggling, and the loss of traditional farming wisdom.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              In 2020, with deep respect for Karnataka's agricultural heritage, he founded Krish Royal Organics to reclaim these traditions and offer consumers the purest, most authentic organic products.
            </p>
            <p className="text-gray-700 italic font-serif text-lg text-primary-green mb-6">
              "Today's children should taste the same organic goodness our grandparents grew."
            </p>
            <p className="text-gray-600 text-sm">— Rajesh Kant, Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Sprout className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Heritage</h3>
              <p className="text-gray-600">
                Preserve traditional farming methods and agricultural knowledge passed down through generations.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Honesty</h3>
              <p className="text-gray-600">
                Every product certified, every claim verified, every batch traceable. No shortcuts, ever.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Health</h3>
              <p className="text-gray-600">
                Nourish both bodies and ecosystems with food that's clean, nutritious, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Journey</h2>
        <Timeline steps={timelineSteps} variant="vertical" />
      </section>

      {/* Team */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="text-center">
              <div className="w-32 h-32 bg-primary-green/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-green/30" />
              </div>
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-primary-green font-semibold text-sm">{member.role}</p>
              <p className="text-gray-600 text-xs mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-xs text-gray-600">{testimonial.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to taste the difference?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of families who've switched to organic without compromising on taste or convenience.
        </p>
        <a
          href="/shop"
          className="inline-block px-8 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
        >
          Shop Now
        </a>
      </section>
    </main>
  );
}
