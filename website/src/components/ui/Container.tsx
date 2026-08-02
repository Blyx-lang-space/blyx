import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({
  children,
  size = "xl",
  className = "",
  style = {},
}: ContainerProps) {
  const maxProps = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <div
      style={style}
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxProps[size]} ${className}`}
    >
      {children}
    </div>
  );
}
