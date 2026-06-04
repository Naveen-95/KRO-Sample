"use client";

import React from "react";

interface SliderProps {
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  className?: string;
}

export function Slider({ min, max, step, value, onValueChange, className }: SliderProps) {
  const handleChange = (index: number, newValue: number) => {
    const newRange: [number, number] = [...value];
    newRange[index] = newValue;
    if (newRange[0] <= newRange[1]) {
      onValueChange(newRange);
    }
  };

  return (
    <div className={className}>
      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[0]}
            onChange={(e) => handleChange(0, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
          />
        </div>
        <div className="flex gap-2">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[1]}
            onChange={(e) => handleChange(1, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-green"
          />
        </div>
      </div>
    </div>
  );
}
