import React, { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md", // default size; not used in our fixed Figma style
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base styles updated to match Figma:
        // - display: inline-flex
        // - height: 48px (h-12)
        // - padding: 16px top/bottom (py-4), 16px right (pr-4), 12px left (pl-3)
        // - center content and add 8px gap (gap-2)
        // - border-radius: 12px (rounded-xl)
        "inline-flex h-12 items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none py-4 pr-4 pl-3",
        
        // Variant styles:
        {
          // For primary, set background to the Figma color and text to white:
          "bg-[var(--Colors-ball-blue,#17B0BA)] text-white": variant === "primary",
          // Keep the other variants unchanged:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400": variant === "secondary",
          "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400": variant === "outline",
          "bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400": variant === "ghost",
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500": variant === "destructive",
        },
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
