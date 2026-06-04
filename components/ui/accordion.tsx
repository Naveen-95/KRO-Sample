"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      if (!allowMultiple) {
        newExpanded.clear();
      }
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  return (
    <div className="space-y-3 select-none">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(item.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
          >
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary-green transition-transform duration-300",
                expanded.has(item.id) ? "rotate-180" : ""
              )}
            />
          </button>

          {expanded.has(item.id) && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 text-sm leading-relaxed">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
