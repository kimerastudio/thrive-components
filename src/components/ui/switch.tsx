import React from "react";
import { cn } from "../../lib/utils";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "danger" | "warning" | "info";
  label?: string;
  labelPosition?: "left" | "right";
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  size = "md",
  color = "primary",
  label,
  labelPosition = "right",
  id,
  ...props
}) => {
  const uniqueId = id || `switch-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={cn("flex items-center", className)}>
      {label && labelPosition === "left" && (
        <label
          htmlFor={uniqueId}
          className={cn(
            "mr-2 text-sm font-medium",
            props.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {label}
        </label>
      )}

      <label
        className={cn("relative inline-block", {
          "h-5 w-9": size === "sm",
          "h-6 w-11": size === "md",
          "h-7 w-14": size === "lg",
        })}
      >
        <input
          id={uniqueId}
          type="checkbox"
          className="sr-only peer"
          {...props}
        />
        <span
          className={cn(
            // Base styles
            "absolute inset-0 rounded-full cursor-pointer transition-all duration-200 peer-checked:duration-300",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2",
            "before:content-[''] before:absolute before:transition-all before:rounded-full",

            // Size variations
            {
              "before:h-3.5 before:w-3.5 before:left-0.75 before:bottom-0.75 peer-checked:before:translate-x-4":
                size === "sm",
              "before:h-4 before:w-4 before:left-1 before:bottom-1 peer-checked:before:translate-x-5":
                size === "md",
              "before:h-5 before:w-5 before:left-1 before:bottom-1 peer-checked:before:translate-x-7":
                size === "lg",
            },

            // Unchecked state
            "bg-gray-200 before:bg-white",

            // Checked state color variations
            {
              "peer-checked:bg-blue-600 peer-focus-visible:ring-blue-500":
                color === "primary",
              "peer-checked:bg-green-600 peer-focus-visible:ring-green-500":
                color === "success",
              "peer-checked:bg-red-600 peer-focus-visible:ring-red-500":
                color === "danger",
              "peer-checked:bg-yellow-600 peer-focus-visible:ring-yellow-500":
                color === "warning",
              "peer-checked:bg-sky-600 peer-focus-visible:ring-sky-500":
                color === "info",
            },

            // Disabled state
            "peer-disabled:opacity-50 peer-disabled:cursor-not-allowed"
          )}
        />
      </label>

      {label && labelPosition === "right" && (
        <label
          htmlFor={uniqueId}
          className={cn(
            "ml-2 text-sm font-medium",
            props.disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};
