import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return <>{children}</>;
}