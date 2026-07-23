import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Category {
  id: string;
  name: string;
}

interface CategoryFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryField({
  value,
  onChange,
}: CategoryFieldProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const { data, error } = await supabase
        .from("categories")
        .select("id,name")
        .order("name");

      console.log("Categorias:", data);
console.log("Erro:", error);

if (data) {
  setCategories(data);
}
    }

    loadCategories();
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="mb-1 text-sm font-semibold text-white">
        Categoria
      </h3>

      <p className="mb-4 text-xs text-zinc-500">
        Escolha a categoria do artigo.
      </p>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      >
        <option value="">Selecione uma categoria</option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}