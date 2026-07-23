import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900",
        hover &&
          "transition-all duration-300 hover:-translate-y-2 hover:border-blue-600",
        className
      )}
    >
      {children}
    </div>
  );
}