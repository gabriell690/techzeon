import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        placeholder="Pesquisar..."
        className="
          w-full
          rounded-xl
          border
          border-zinc-800
          bg-zinc-900
          py-2.5
          pl-10
          pr-4
          text-white
          outline-none
          transition
          focus:border-cyan-500
        "
      />
    </div>
  );
}