import { Search } from "lucide-react";

export default function SearchButton() {
  return (
    <button
      className="
        flex
        h-11
        w-full
        max-w-md
        items-center
        gap-3
        rounded-full
        border
        border-zinc-800
        bg-zinc-900
        px-5
        text-left
        transition
        hover:border-blue-500
        hover:bg-zinc-800
      "
    >
      <Search className="h-5 w-5 text-zinc-400" />

      <span className="text-sm text-zinc-500">
        Pesquisar artigos...
      </span>
    </button>
  );
}