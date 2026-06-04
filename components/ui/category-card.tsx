"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  items: string[];
  image: string;
  bgColor: string;
}

export default function CategoryCard({ title, items, bgColor }: CategoryCardProps) {

  const renderIcon = () => {
    const t = title.toLowerCase();

    if (t.includes("flour") || t.includes("millet") || t.includes("atta")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="18" y="28" width="44" height="40" rx="6" fill="#D4B896" />
          <path d="M18 28 Q40 18 62 28" fill="#BFA07A" />
          <path d="M32 28 Q40 14 48 28" fill="#6D4C41" opacity="0.7" />
          <line x1="40" y1="44" x2="40" y2="56" stroke="#6D4C41" strokeWidth="2" />
          <path d="M34 48 Q40 43 46 48" fill="#B08A3E" />
          <path d="M34 43 Q40 38 46 43" fill="#C9A44A" />
        </svg>
      );
    }

    if (t.includes("oil")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="27" y="36" width="26" height="34" rx="6" fill="#F9A825" opacity="0.9" />
          <rect x="31" y="26" width="18" height="12" rx="3" fill="#E0E0E0" />
          <rect x="28" y="20" width="24" height="8" rx="3" fill="#2E5E3A" />
          <rect x="29" y="46" width="22" height="16" rx="2" fill="white" opacity="0.5" />
          <rect x="27" y="39" width="7" height="26" rx="3" fill="white" opacity="0.2" />
          <path d="M37 20 Q35 14 40 10 Q45 14 43 20" fill="#F9A825" opacity="0.8" />
        </svg>
      );
    }

    if (t.includes("pulse") || t.includes("dal")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path d="M16 52 Q24 70 56 70 Q72 70 64 52 Z" fill="#D7CCC8" />
          <ellipse cx="40" cy="52" rx="24" ry="9" fill="#BCAAA4" />
          <circle cx="28" cy="51" r="4" fill="#B08A3E" />
          <circle cx="38" cy="49" r="4" fill="#B08A3E" />
          <circle cx="48" cy="50" r="4" fill="#B08A3E" />
          <circle cx="57" cy="52" r="3.5" fill="#C9A44A" />
          <circle cx="33" cy="58" r="3" fill="#9C7A28" />
          <circle cx="46" cy="59" r="3" fill="#9C7A28" />
        </svg>
      );
    }

    if (t.includes("spice") || t.includes("masala")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="24" y="30" width="32" height="36" rx="5" fill="#FFF3E0" stroke="#FFCC80" strokeWidth="1" />
          <rect x="22" y="22" width="36" height="10" rx="4" fill="#E65100" />
          <rect x="24" y="50" width="32" height="16" rx="4" fill="#E64A19" opacity="0.6" />
          <rect x="26" y="35" width="28" height="13" rx="2" fill="white" opacity="0.6" />
          <text x="40" y="43" fontSize="7" fontWeight="bold" fill="#BF360C" textAnchor="middle">SPICE</text>
        </svg>
      );
    }

    if (t.includes("ghee")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <ellipse cx="40" cy="68" rx="28" ry="9" fill="#8B5E3C" opacity="0.6" />
          <path d="M15 66 Q10 46 18 30 Q28 16 52 16 Q62 30 64 46 Q66 58 64 66 Z" fill="#A1887F" />
          <path d="M18 30 Q28 16 52 16 Q58 24 54 26 Q40 20 26 26 Z" fill="#BCAAA4" opacity="0.8" />
          <ellipse cx="40" cy="20" rx="16" ry="6" fill="#795548" />
          <ellipse cx="40" cy="20" rx="14" ry="4.5" fill="#FFD54F" opacity="0.9" />
          <ellipse cx="35" cy="19" rx="5" ry="2.5" fill="white" opacity="0.25" />
        </svg>
      );
    }

    if (t.includes("jaggery")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="16" y="38" width="44" height="28" rx="5" fill="#8D6E63" />
          <path d="M16 38 L28 26 L72 26 L60 38 Z" fill="#A1887F" />
          <path d="M60 38 L72 26 L72 54 L60 66 Z" fill="#6D4C41" />
          <path d="M26 50 Q40 44 54 50" stroke="#6D4C41" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M26 58 Q40 52 54 58" stroke="#6D4C41" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      );
    }

    if (t.includes("honey")) {
      return (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <path d="M24 38 L20 52 L24 70 L56 70 L60 52 L56 38 Z" fill="#FFD54F" />
          <rect x="30" y="25" width="20" height="15" rx="3" fill="#E0E0E0" />
          <rect x="27" y="18" width="26" height="9" rx="3" fill="#F9A825" />
          <path d="M32 45 L37 41 L42 45 L42 52 L37 56 L32 52 Z" fill="#F57F17" opacity="0.4" />
          <path d="M42 45 L47 41 L52 45 L52 52 L47 56 L42 52 Z" fill="#F57F17" opacity="0.4" />
          <path d="M36 25 Q34 18 40 14 Q46 18 44 25" fill="#F9A825" opacity="0.8" />
        </svg>
      );
    }

    // Traditional Grains default
    return (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <ellipse cx="40" cy="62" rx="28" ry="10" fill="#D4B896" />
        <path d="M12 62 Q17 40 40 34 Q63 40 68 62 Z" fill="#C8A97E" />
        <ellipse cx="28" cy="52" rx="6" ry="3" fill="#A68B5B" transform="rotate(-20 28 52)" />
        <ellipse cx="40" cy="48" rx="6" ry="3" fill="#A68B5B" />
        <ellipse cx="52" cy="52" rx="6" ry="3" fill="#A68B5B" transform="rotate(20 52 52)" />
        <ellipse cx="34" cy="57" rx="4.5" ry="2" fill="#8D6E63" transform="rotate(-10 34 57)" />
        <ellipse cx="47" cy="57" rx="4.5" ry="2" fill="#8D6E63" transform="rotate(10 47 57)" />
      </svg>
    );
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow select-none cursor-pointer group">
      {/* Category icon box */}
      <div className={cn("w-20 h-24 rounded-xl flex items-center justify-center p-3 shrink-0", bgColor)}>
        <div className="w-14 h-14 group-hover:scale-105 transition-transform duration-300">
          {renderIcon()}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-800 hover:text-primary-green transition-colors mb-2 font-serif">
          {title}
        </h3>
        <ul className="flex flex-col gap-1.5">
          {items.map((item, idx) => (
            <li key={idx}>
              <a href="#" className="text-xs text-gray-400 hover:text-primary-green transition-colors font-medium">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
