"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  title: string;
  description: string;
  completed?: boolean;
  icon?: React.ReactNode;
}

interface TimelineProps {
  steps: TimelineStep[];
  variant?: "vertical" | "horizontal";
}

export default function Timeline({ steps, variant = "vertical" }: TimelineProps) {
  return (
    <div className={cn(variant === "horizontal" ? "flex gap-8" : "space-y-6")}>
      {steps.map((step, idx) => (
        <div
          key={idx}
          className={cn(
            "flex",
            variant === "horizontal" ? "flex-col items-center flex-1" : "flex gap-4"
          )}
        >
          {/* Timeline dot and line */}
          <div className="relative flex flex-col items-center">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10",
                step.completed
                  ? "bg-primary-green text-white"
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {step.icon ? step.icon : idx + 1}
            </div>

            {/* Line to next step */}
            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "absolute w-0.5 bg-gray-200",
                  variant === "horizontal" ? "w-0.5 h-8 top-10 left-1/2 -translate-x-1/2" : "h-12 top-10 left-5"
                )}
              />
            )}
          </div>

          {/* Step content */}
          <div className={cn(variant === "horizontal" ? "text-center mt-4" : "flex-1")}>
            <h3 className="font-semibold text-gray-800">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
