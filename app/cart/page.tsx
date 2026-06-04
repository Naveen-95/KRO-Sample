"use client";

import React, { useState } from "react";
import { Trash2, ShoppingCart, TrendingUp } from "lucide-react";
import ProductCard from "@/components/ui/product-card";
import { BESTSELLERS } from "@/lib/data";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "bs-1",
      title: "Ragi Flour",
      price: 185,
      quantity: 2,
      size: "1kg",
      image: "/images/prod-ragi-flour.jpg",
    },
    {
      id: "bs-2",
      title: "A2 Bilona Ghee",
      price: 649,
      quantity: 1,
      size: "250g",
      image: "/images/prod-bilona-ghee.jpg",
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const recommendedProducts = BESTSELLERS.filter((p) => !cartItems.find((item) => item.id === p.id)).slice(0, 4);

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <section className="px-4 py-16 lg:px-8 text-center max-w-7xl mx-auto">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some organic goodness to get started!</p>
          <a
            href="/shop"
            className="inline-block px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
          >
            Continue Shopping
          </a>

          {/* Recommendations */}
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">Recommended for You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {BESTSELLERS.slice(0, 4).map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Free shipping progress */}
      {subtotal < 999 && (
        <div className="bg-primary-green/10 px-4 py-3 lg:px-8 border-b border-primary-green/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-800">
                Add ₹{999 - subtotal} more for free delivery!
              </p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-green transition-all"
                style={{ width: `${(subtotal / 999) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <section className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items - Left 65% */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                {/* Image */}
                <div className="w-24 h-24 bg-primary-bg rounded-lg flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <rect x="22" y="28" width="56" height="52" rx="8" fill="#D4B896" />
                    <path d="M22 28 Q50 16 78 28" fill="#BFA07A" />
                  </svg>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{item.size}</p>
                  <p className="font-bold text-primary-green mt-2">₹{item.price}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-white"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border border-gray-300 rounded hover:bg-white"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total + Remove */}
                <div className="text-right">
                  <p className="font-bold text-gray-800">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-4 text-red-600 hover:text-red-700 font-medium flex items-center gap-1 ml-auto"
                  >
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* Cross-sell */}
            {recommendedProducts.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary-green" />
                  <h3 className="font-bold text-gray-800">Frequently bought with these items</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order summary - Right 35% */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
              <h2 className="font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  {shipping === 0 ? (
                    <span className="text-green-600 font-medium">FREE</span>
                  ) : (
                    <span>₹{shipping}</span>
                  )}
                </div>
              </div>

              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-primary-green text-2xl">₹{total}</span>
              </div>

              <a
                href="/checkout"
                className="block w-full px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg text-center transition-all mb-3"
              >
                Proceed to Checkout
              </a>

              <button className="w-full px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-lg hover:bg-gray-50 transition-all">
                Continue Shopping
              </button>

              {/* Trust badges */}
              <div className="mt-8 space-y-3 pt-8 border-t border-gray-200">
                <div className="flex items-start gap-2">
                  <div className="text-green-600 text-lg">✓</div>
                  <div className="text-xs text-gray-600">
                    <p className="font-semibold text-gray-800">Secure Checkout</p>
                    <p>SSL encrypted payment</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-green-600 text-lg">✓</div>
                  <div className="text-xs text-gray-600">
                    <p className="font-semibold text-gray-800">Easy Returns</p>
                    <p>48-hour return window</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-green-600 text-lg">✓</div>
                  <div className="text-xs text-gray-600">
                    <p className="font-semibold text-gray-800">WhatsApp Support</p>
                    <p>Get help anytime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
