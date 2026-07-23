import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 lg:hidden"
    >
      <Menu className="h-6 w-6 text-white" />
    </button>
  );
}