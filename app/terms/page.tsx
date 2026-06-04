import React from "react";
import { LEGAL_PAGES } from "@/lib/data";

export default function TermsPage() {
  const content = LEGAL_PAGES.terms;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-primary-green/5 px-4 py-12 lg:px-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-2">{content.title}</h1>
          <p className="text-sm text-gray-600">Last updated: {new Date(content.lastUpdated).toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* TOC - Desktop only */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <h3 className="font-bold text-gray-800 mb-4 text-sm">Table of Contents</h3>
              <nav className="space-y-2 text-sm">
                {content.sections.map((section, idx) => (
                  <a
                    key={idx}
                    href={`#section-${idx}`}
                    className="text-primary-green hover:underline block"
                  >
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-sm max-w-none">
              {content.sections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 scroll-mt-20">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-800 mb-3">Have questions?</h3>
              <p className="text-gray-700 mb-4">
                Contact us at{" "}
                <a href="mailto:legal@krishroyalorganics.com" className="text-primary-green hover:underline">
                  legal@krishroyalorganics.com
                </a>
              </p>
              <a
                href="/contact"
                className="text-primary-green font-medium hover:underline"
              >
                Visit our contact page →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
