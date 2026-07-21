import type { ReactNode } from "react";
import Container from "../Container/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`relative py-28 ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}