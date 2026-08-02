import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  const maxProps = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxProps[size]} ${className}`}
    >
      {children}
    </div>
  );
}
