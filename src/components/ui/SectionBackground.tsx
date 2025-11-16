import React from "react";

interface SectionBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBackground({
  children,
  className = "",
}: SectionBackgroundProps) {
  return (
    <div
      className={`relative overflow-hidden py-16 bg-gradient-to-br from-gray-50 via-slate-100/80 to-blue-50/60 dark:from-black dark:via-gray-950/80 dark:to-slate-950/60 ${className}`}
    >
      {children}
    </div>
  );
}
