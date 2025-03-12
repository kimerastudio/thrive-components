import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "flat";
  padding?: "none" | "sm" | "md" | "lg";
  elevation?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = "default",
  padding = "md",
  elevation = "sm",
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        // Base styles
        "rounded-lg overflow-hidden",

        // Variant styles
        {
          "bg-white": variant === "default" || variant === "bordered",
          "bg-gray-50": variant === "flat",
          "border border-gray-200": variant === "bordered",
        },

        // Padding styles
        {
          "p-0": padding === "none",
          "p-3": padding === "sm",
          "p-5": padding === "md",
          "p-7": padding === "lg",
        },

        // Elevation styles
        {
          "shadow-none": elevation === "none",
          "shadow-sm": elevation === "sm",
          "shadow-md": elevation === "md",
          "shadow-lg": elevation === "lg",
        },

        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("mb-3 flex flex-col space-y-1.5", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription: React.FC<
  React.HTMLAttributes<HTMLParagraphElement>
> = ({ className, children, ...props }) => {
  return (
    <p className={cn("text-sm text-gray-500", className)} {...props}>
      {children}
    </p>
  );
};

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("mt-3 flex items-center", className)} {...props}>
      {children}
    </div>
  );
};
