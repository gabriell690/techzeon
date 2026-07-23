import { User } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 transition hover:border-blue-500 hover:bg-zinc-800"
    >
      <User className="h-5 w-5 text-zinc-300" />

      <span className="hidden text-sm text-zinc-300 xl:block">
        Entrar
      </span>
    </button>
  );
}