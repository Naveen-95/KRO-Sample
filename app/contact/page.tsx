"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FormInput, FormSelect, FormTextarea } from "@/components/ui/form-input";
import Accordion from "@/components/ui/accordion";
import { FAQS } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      text: "+91-XXXXXXXXXX",
      desc: "Fastest response (9 AM - 6 PM)",
    },
    {
      icon: Phone,
      title: "Call Us",
      text: "+91-XXXXXXXXXX",
      desc: "Mon-Sat, 10 AM - 5 PM",
    },
    {
      icon: Mail,
      title: "Email",
      text: "hello@krishroyalorganics.com",
      desc: "Response within 24 hours",
    },
  ];

  const faqAccordion = FAQS.slice(0, 6).map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary-green px-4 py-16 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Let's Talk</h1>
          <p className="text-xl text-white/90">
            Have questions? We're here to help. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="px-4 py-16 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.title} className="bg-gray-50 rounded-xl p-8 text-center">
                  <Icon className="w-10 h-10 text-primary-green mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-2">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary-green mb-1">{method.text}</p>
                  <p className="text-sm text-gray-600">{method.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Contact form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

              <FormInput
                label="Name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />

              <FormInput
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-4"
              />

              <FormInput
                label="Phone"
                placeholder="+91 XXXXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="mt-4"
              />

              <FormSelect
                label="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                options={[
                  { value: "order", label: "Order Related" },
                  { value: "wholesale", label: "Wholesale Enquiry" },
                  { value: "partnership", label: "Partnership" },
                  { value: "feedback", label: "Feedback" },
                  { value: "other", label: "Other" },
                ]}
                className="mt-4"
              />

              <FormTextarea
                label="Message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="mt-4"
              />

              <button
                type="submit"
                className="mt-6 w-full px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>

            {/* Address + Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="flex gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-primary-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Warehouse Address</h3>
                    <p className="text-gray-700">
                      Krish Royal Organics<br />
                      123 Organic Lane<br />
                      Bengaluru, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-bold text-gray-800 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-gray-700 text-sm">
                    <p>Monday - Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-xs text-gray-600 mt-3">
                      Holidays: All Indian National Holidays
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h3 className="font-bold text-gray-800 mb-3">Compliance</h3>
                  <div className="space-y-1 text-sm text-gray-700">
                    <p>FSSAI License: REG/12345678</p>
                    <p>GST Number: 29AABCR0001Z1Z0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">
            Quick Answers
          </h2>
          <Accordion items={faqAccordion} allowMultiple={true} />
        </div>
      </section>
    </main>
  );
}
