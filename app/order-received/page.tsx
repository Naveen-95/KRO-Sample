"use client";

import React from "react";
import { CheckCircle2, Truck, Phone, Gift, ArrowRight } from "lucide-react";
import Timeline from "@/components/ui/timeline";
import { RECIPES } from "@/lib/data";

export default function OrderReceivedPage() {
  const orderNumber = "KRO-2024-" + Math.floor(Math.random() * 100000);
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 1);

  const orderItems = [
    { name: "Ragi Flour (1kg)", qty: 2, price: 185 },
    { name: "A2 Bilona Ghee (250g)", qty: 1, price: 649 },
  ];

  const timelineSteps = [
    {
      title: "Order Packed",
      description: "Your order is being carefully packed with fresh ingredients",
      completed: true,
      icon: "✓",
    },
    {
      title: "Out for Delivery",
      description: "Your order is on its way to you",
      completed: false,
      icon: "2",
    },
    {
      title: "Delivered",
      description: "Enjoy your organic goodness!",
      completed: false,
      icon: "3",
    },
  ];

  const recipeSuggestions = RECIPES.slice(0, 2);

  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-green/5 to-white">
      {/* Success section */}
      <section className="px-4 py-12 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto" />
        </div>

        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-3">Order Confirmed!</h1>
        <p className="text-xl text-gray-600 mb-8">Thank you for shopping at KRO. Your order is on its way!</p>

        {/* Order number */}
        <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-green-200">
          <p className="text-gray-600 text-sm mb-2">Order Number</p>
          <p className="text-3xl font-bold text-gray-800 font-mono mb-4">{orderNumber}</p>
          <p className="text-sm text-gray-600">
            Confirmation sent to your email. Track your order via WhatsApp.
          </p>
        </div>

        {/* Delivery info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6">
            <Truck className="w-8 h-8 text-primary-green mx-auto mb-3" />
            <p className="font-semibold text-gray-800 mb-1">Delivery Date</p>
            <p className="text-2xl font-bold text-primary-green">
              {deliveryDate.toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })}
            </p>
            <p className="text-xs text-gray-600 mt-2">10 AM - 6 PM</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <Phone className="w-8 h-8 text-primary-green mx-auto mb-3" />
            <p className="font-semibold text-gray-800 mb-1">Track Order</p>
            <a href="#" className="text-primary-green font-bold hover:underline">
              Via WhatsApp
            </a>
            <p className="text-xs text-gray-600 mt-2">+91-XXXXXXXXXX</p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <Gift className="w-8 h-8 text-primary-green mx-auto mb-3" />
            <p className="font-semibold text-gray-800 mb-1">Help & Support</p>
            <a href="/contact" className="text-primary-green font-bold hover:underline">
              Contact Us
            </a>
            <p className="text-xs text-gray-600 mt-2">24/7 support available</p>
          </div>
        </div>
      </section>

      {/* Order details */}
      <section className="px-4 py-12 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Items */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Items Ordered</h3>
              <div className="space-y-3">
                {orderItems.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-gray-700">
                    <span>{item.name}</span>
                    <span className="font-semibold">₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span className="text-primary-green text-lg">₹{185 * 2 + 649}</span>
              </div>
            </div>

            {/* Shipping address */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Delivery Address</h3>
              <div className="text-gray-700 space-y-1">
                <p className="font-semibold">John Doe</p>
                <p>123 Main Street</p>
                <p>Indiranagar, Bengaluru</p>
                <p>Karnataka 560008</p>
                <p className="mt-3 text-sm">
                  <strong>Phone:</strong> +91-9876543210
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What Happens Next</h2>
          <Timeline steps={timelineSteps} variant="vertical" />
        </div>

        {/* Recipe suggestions */}
        {recipeSuggestions.length > 0 && (
          <div className="bg-primary-green/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Try These Recipes</h2>
            <p className="text-gray-700 mb-6">
              Make the most of your fresh ingredients with our curated recipes!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recipeSuggestions.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-800">{recipe.title}</h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {recipe.prepTime + recipe.cookTime} min · {recipe.difficulty}
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-primary-green text-sm font-semibold hover:underline flex items-center gap-1">
                    View Recipe <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="bg-gradient-to-r from-primary-green to-primary-green/80 rounded-2xl p-8 text-white text-center mb-12">
          <h2 className="text-2xl font-bold mb-3">Don't forget to follow us!</h2>
          <p className="mb-6">Get exclusive recipes, farming stories, and early access to new products</p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#" className="px-6 py-2 bg-white text-primary-green font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Instagram
            </a>
            <a href="#" className="px-6 py-2 bg-white text-primary-green font-bold rounded-lg hover:bg-gray-100 transition-colors">
              YouTube
            </a>
            <a href="#" className="px-6 py-2 bg-white text-primary-green font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Facebook
            </a>
            <a href="#" className="px-6 py-2 bg-white text-primary-green font-bold rounded-lg hover:bg-gray-100 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/shop"
            className="px-8 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all text-center"
          >
            Shop More
          </a>
          <a
            href="/"
            className="px-8 py-3 border-2 border-primary-green text-primary-green hover:bg-primary-green/5 font-bold rounded-lg transition-all text-center"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
