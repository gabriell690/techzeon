import { Search } from "lucide-react";

interface SearchArticlesProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchArticles({
  value,
  onChange,
}: SearchArticlesProps) {
  return (
    <div className="relative flex-1">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar artigos..."
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