import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-blue-500 hover:bg-zinc-800"
      aria-label="Alterar tema"
    >
      <Moon className="h-5 w-5 text-zinc-300" />
    </button>
  );
}