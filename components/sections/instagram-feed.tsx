"use client";

import React, { useState } from "react";
import { Instagram, ShoppingBag, Heart, MessageCircle, ExternalLink } from "lucide-react";

interface InstagramPost {
  id: string;
  caption: string;
  likes: number;
  comments: number;
  productTag: { name: string; price: string };
  bgColor: string;
  emoji: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "1",
    caption: "Fresh ragi flour just milled this morning! 🌾",
    likes: 1245,
    comments: 89,
    productTag: { name: "Ragi Flour", price: "₹185" },
    bgColor: "bg-gradient-to-br from-amber-100 to-amber-200",
    emoji: "🌾",
  },
  {
    id: "2",
    caption: "Cold-pressed at sunrise. The way it should be 🌅",
    likes: 2103,
    comments: 156,
    productTag: { name: "Groundnut Oil", price: "₹380" },
    bgColor: "bg-gradient-to-br from-yellow-100 to-orange-200",
    emoji: "🫒",
  },
  {
    id: "3",
    caption: "Hand-churned A2 ghee from happy cows ✨",
    likes: 3456,
    comments: 245,
    productTag: { name: "A2 Bilona Ghee", price: "₹649" },
    bgColor: "bg-gradient-to-br from-orange-100 to-amber-200",
    emoji: "🥛",
  },
  {
    id: "4",
    caption: "Wild forest honey straight from Karnataka 🐝",
    likes: 1876,
    comments: 134,
    productTag: { name: "Wild Forest Honey", price: "₹325" },
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-200",
    emoji: "🍯",
  },
  {
    id: "5",
    caption: "Sun-dried turmeric, lab tested for purity 🧪",
    likes: 987,
    comments: 67,
    productTag: { name: "Turmeric Powder", price: "₹125" },
    bgColor: "bg-gradient-to-br from-yellow-200 to-orange-300",
    emoji: "🌿",
  },
  {
    id: "6",
    caption: "Farmer-direct foxtail millet 🌱",
    likes: 1543,
    comments: 98,
    productTag: { name: "Foxtail Millet", price: "₹140" },
    bgColor: "bg-gradient-to-br from-green-100 to-emerald-200",
    emoji: "🌾",
  },
];

export default function InstagramFeed() {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <section className="w-full py-16 px-4 lg:px-8 bg-gradient-to-b from-white to-primary-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 via-purple-100 to-orange-100 px-4 py-2 rounded-full mb-4">
            <Instagram className="w-4 h-4 text-pink-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
              Follow Us @krishroyalorganics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
            From Our Farms to Your Feed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Behind-the-scenes from our farms, recipes from our kitchen, and stories from our farmers. Tag #KROStory to be featured!
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/krishroyalorganics"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* Post Image */}
              <div className={`absolute inset-0 ${post.bgColor} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                  {post.emoji}
                </span>
              </div>

              {/* Shoppable Product Tag (always visible) */}
              <div className="absolute top-2 left-2 z-10">
                <div className="bg-white shadow-md rounded-full p-1.5 flex items-center gap-1 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-3 h-3 text-primary-green" />
                </div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col justify-between p-3 transition-opacity duration-300 ${
                  hoveredPost === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Engagement stats (top) */}
                <div className="flex items-center justify-between text-white text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-white" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 fill-white" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white" />
                </div>

                {/* Shoppable product card (bottom) */}
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-gold">
                      Shop the look
                    </span>
                    <ShoppingBag className="w-3 h-3 text-primary-green" />
                  </div>
                  <p className="text-xs font-bold text-gray-800 line-clamp-1">
                    {post.productTag.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-primary-green">
                      {post.productTag.price}
                    </span>
                    <span className="text-[10px] text-gray-600 hover:text-primary-green font-semibold">
                      Buy →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/krishroyalorganics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 text-white font-bold rounded-full text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <Instagram className="w-4 h-4" />
            Follow @krishroyalorganics
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Join 45K+ wellness enthusiasts sharing their KRO journey
          </p>
        </div>
      </div>
    </section>
  );
}
