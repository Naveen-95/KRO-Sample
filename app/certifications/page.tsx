"use client";

import React from "react";
import { CheckCircle, Award, Beaker, Leaf } from "lucide-react";
import Timeline from "@/components/ui/timeline";
import Accordion from "@/components/ui/accordion";
import { CERTIFICATIONS, FAQS } from "@/lib/data";

export default function CertificationsPage() {
  const certTimelineSteps = [
    {
      title: "Sample Collection",
      description: "Products tested at each batch before packing",
      completed: true,
      icon: "1",
    },
    {
      title: "Lab Testing",
      description: "Independent testing for pesticides, heavy metals, microbials",
      completed: true,
      icon: "2",
    },
    {
      title: "Results Published",
      description: "Test results available on every batch",
      completed: true,
      icon: "3",
    },
    {
      title: "Batch Coded",
      description: "Unique code on packaging for full traceability",
      completed: true,
      icon: "4",
    },
  ];

  const certificationFAQs = FAQS.filter((faq) => faq.category === "products").map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-green to-primary-green/80 px-4 py-16 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">Certified. Tested. Verified.</h1>
          <p className="text-xl text-white/90">
            Every product is independently verified for purity, safety, and authenticity. We believe in complete transparency.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="px-4 py-16 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.id} className="bg-white border-2 border-primary-green/20 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-green/10 rounded-lg flex items-center justify-center shrink-0">
                  <Award className="w-8 h-8 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{cert.name}</h3>
                  <p className="text-sm text-primary-green font-semibold mt-1">{cert.code}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-800 mb-1">What It Certifies:</p>
                  <p>{cert.what}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Issued By:</p>
                  <p>{cert.issuer}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Valid Until:</p>
                  <p>{new Date(cert.validUntil).toLocaleDateString()}</p>
                </div>
              </div>

              <button className="mt-6 w-full px-4 py-2 border border-primary-green text-primary-green rounded-lg font-medium hover:bg-primary-lightGreen transition-colors">
                Download Certificate →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Testing Process */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Testing Process</h2>

          <div className="bg-white rounded-2xl p-8">
            <Timeline steps={certTimelineSteps} variant="horizontal" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Beaker className="w-10 h-10 text-primary-green mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Lab Tested</h3>
              <p className="text-sm text-gray-600">
                Every batch tested for pesticides, heavy metals, and microbial contamination
              </p>
            </div>
            <div className="text-center">
              <Leaf className="w-10 h-10 text-primary-green mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Organic Verified</h3>
              <p className="text-sm text-gray-600">
                Certified by India Organic and NPOP standards for authentic organic farming
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-10 h-10 text-primary-green mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Batch Coded</h3>
              <p className="text-sm text-gray-600">
                Every package has a unique code for complete farm-to-door traceability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Traceability */}
      <section className="px-4 py-16 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">Batch Traceability</h2>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <p className="text-gray-700 mb-6">
            Every KRO product includes a unique batch code on the packaging. Use it to verify the exact farm, harvest date, processing method, and lab test results.
          </p>

          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Enter batch code (e.g., KRO-2024-001)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green/20"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
            >
              Trace Batch
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-3">
            Can't find your batch code? Look on the back of your package or check your order confirmation.
          </p>
        </div>
      </section>

      {/* Certifications FAQ */}
      <section className="px-4 py-16 lg:px-8 bg-primary-green/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Questions About Certifications?</h2>
          <Accordion items={certificationFAQs} allowMultiple={true} />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Have More Questions?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We're transparent about everything. Ask us anything about our certifications, farming practices, or products.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary-green hover:bg-primary-green/90 text-white font-bold rounded-lg transition-all"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
