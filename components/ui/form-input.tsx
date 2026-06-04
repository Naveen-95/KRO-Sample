"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 border rounded-lg text-sm transition-colors",
            "placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-red-300 focus:ring-red-200 focus:border-red-400"
              : "border-gray-300 focus:ring-primary-green/20 focus:border-primary-green",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
        {helperText && <p className="text-gray-500 text-xs mt-1">{helperText}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 border rounded-lg text-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-offset-0",
            error
              ? "border-red-300 focus:ring-red-200 focus:border-red-400"
              : "border-gray-300 focus:ring-primary-green/20 focus:border-primary-green",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 border rounded-lg text-sm transition-colors",
            "placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none",
            error
              ? "border-red-300 focus:ring-red-200 focus:border-red-400"
              : "border-gray-300 focus:ring-primary-green/20 focus:border-primary-green",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
