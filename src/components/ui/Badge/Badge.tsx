import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  color?: "blue" | "green" | "red" | "yellow";
}

const colors = {
  blue: "bg-blue-500/10 text-blue-400",
  green: "bg-green-500/10 text-green-400",
  red: "bg-red-500/10 text-red-400",
  yellow: "bg-yellow-500/10 text-yellow-400",
};

export default function Badge({
  children,
  color = "blue",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        colors[color]
      )}
    >
      {children}
    </span>
  );
}