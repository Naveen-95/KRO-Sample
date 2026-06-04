"use client";

import React, { useState } from "react";
import { Lock, Phone, MapPin } from "lucide-react";
import { FormInput, FormSelect, FormTextarea } from "@/components/ui/form-input";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  instructions: string;
  paymentMethod: string;
}

export default function CheckoutPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "Bengaluru",
    state: "Karnataka",
    pin: "",
    instructions: "",
    paymentMethod: "upi",
  });

  const cartItems = [
    { id: 1, name: "Ragi Flour", qty: 2, price: 185 },
    { id: 2, name: "A2 Bilona Ghee", qty: 1, price: 649 },
  ];

  const subtotal = 185 * 2 + 649;
  const shipping = subtotal >= 999 ? 0 : 99;
  const discount = formData.paymentMethod !== "cod" ? Math.floor(subtotal * 0.02) : 0;
  const total = subtotal + shipping - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, submit to backend
    window.location.href = "/order-received";
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Checkout form - 60% */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8">
              {/* Delivery address */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-green" />
                  Delivery Address
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormInput
                    label="First Name"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                  <FormInput
                    label="Last Name"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>

                <FormInput
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <FormInput
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-4"
                />

                <FormTextarea
                  label="Address"
                  placeholder="House number, building name, street name"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="mt-4"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <FormSelect
                    label="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    options={[{ value: "Bengaluru", label: "Bengaluru" }]}
                  />
                  <FormSelect
                    label="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    options={[{ value: "Karnataka", label: "Karnataka" }]}
                  />
                  <FormInput
                    label="PIN Code"
                    placeholder="560001"
                    value={formData.pin}
                    onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                    required
                  />
                </div>

                <FormTextarea
                  label="Delivery Instructions (Optional)"
                  placeholder="e.g., Leave with neighbor, ring doorbell twice..."
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  className="mt-4"
                />
              </div>

              {/* Payment method */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary-green" />
                  Payment Method
                </h2>

                <div className="space-y-3">
                  {[
                    { id: "upi", label: "UPI (Recommended)", desc: "Get 2% cashback" },
                    { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard, RuPay" },
                    { id: "netbanking", label: "Net Banking", desc: "All major banks" },
                    { id: "cod", label: "Cash on Delivery", desc: "Pay when you receive" },
                  ].map((method) => (
                    <label key={method.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                        className="w-4 h-4 mt-1 accent-primary-green"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{method.label}</p>
                        <p className="text-xs text-gray-600">{method.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full mt-8 px-6 py-4 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all text-lg"
              >
                Place Order
              </button>

              {/* Trust info */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-600">
                <Lock className="w-4 h-4" />
                Secure SSL encrypted checkout
              </div>
            </form>
          </div>

          {/* Right: Order summary - 40% */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-8">
              <h2 className="font-bold text-gray-800 mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-700">
                    <span>{item.name} × {item.qty}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 text-sm">
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
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Prepaid Discount (2%)</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-6">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-bold text-primary-green text-2xl">₹{total}</span>
                </div>
              </div>

              {/* Delivery info */}
              <div className="bg-primary-green/10 rounded-lg p-4 text-sm space-y-2">
                <div>
                  <p className="font-semibold text-gray-800">Estimated Delivery</p>
                  <p className="text-gray-600">Tomorrow by 6 PM</p>
                </div>
                <div className="pt-2 border-t border-primary-green/20">
                  <p className="font-semibold text-gray-800">Need Help?</p>
                  <p className="text-gray-600">Contact us on WhatsApp +91-XXXXXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
