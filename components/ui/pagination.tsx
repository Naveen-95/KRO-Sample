"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const pages = [];
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) pages.push(1);
  if (startPage > 2) pages.push("...");
  for (let i = startPage; i <= endPage; i++) pages.push(i);
  if (endPage < totalPages - 1) pages.push("...");
  if (endPage < totalPages) pages.push(totalPages);

  return (
    <div className="flex items-center justify-center gap-2 select-none">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "p-2 rounded-lg border transition-all",
          currentPage === 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:border-primary-green hover:text-primary-green"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page, idx) => (
        <button
          key={idx}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={cn(
            "w-8 h-8 rounded-lg font-medium transition-all",
            page === "..."
              ? "cursor-default text-gray-400"
              : currentPage === page
              ? "bg-primary-green text-white"
              : "border border-gray-200 text-gray-700 hover:border-primary-green hover:text-primary-green"
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "p-2 rounded-lg border transition-all",
          currentPage === totalPages
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:border-primary-green hover:text-primary-green"
        )}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
