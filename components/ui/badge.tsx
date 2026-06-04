import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  type: "hot" | "discount" | "new";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ type, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider text-white select-none inline-block",
        type === "hot" && "bg-badge-hot",
        type === "discount" && "bg-badge-discount",
        type === "new" && "bg-badge-new",
        className
      )}
    >
      {children}
    </span>
  );
}
