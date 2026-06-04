"use client";

import React, { useState } from "react";
import Accordion from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("orders");

  const categories = [
    { id: "orders", label: "Orders & Payment" },
    { id: "shipping", label: "Shipping & Delivery" },
    { id: "returns", label: "Returns & Refunds" },
    { id: "products", label: "Products & Certifications" },
    { id: "subscription", label: "Subscriptions" },
    { id: "account", label: "Account" },
  ];

  const filteredFAQs = FAQS.filter((faq) => faq.category === selectedCategory).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary-green/5 px-4 py-16 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products, orders, and service.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-8 lg:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4 py-12 lg:px-8 max-w-4xl mx-auto">
        <Accordion items={filteredFAQs} allowMultiple={true} />

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No FAQs found in this category.</p>
            <p className="text-gray-600">Please contact us for more information.</p>
          </div>
        )}
      </section>

      {/* Still need help */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Didn't find your answer?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help. Reach out to us on WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all"
            >
              Chat on WhatsApp
            </a>
            <a
              href="mailto:hello@krishroyalorganics.com"
              className="px-6 py-3 border-2 border-primary-green text-primary-green hover:bg-primary-green/5 font-bold rounded-lg transition-all"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
