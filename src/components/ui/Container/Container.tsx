import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-375
        px-8
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}