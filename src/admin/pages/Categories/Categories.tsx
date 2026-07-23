import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  FolderOpen,
} from "lucide-react";

import {
  getCategories,
  deleteCategory,
} from "@/admin/services/category.service";

import type { Category } from "@/types/category";

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadCategories() {
    try {
      setLoading(true);

      const data = await getCategories();

      setCategories(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  async function handleDelete(id: string) {
    const confirmDelete = confirm(
      "Deseja realmente excluir esta categoria?"
    );

    if (!confirmDelete) return;

    await deleteCategory(id);

    loadCategories();
  }

  const filtered = useMemo(() => {
    return categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [categories, search]);

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Categorias
          </h1>

          <p className="mt-1 text-zinc-400">
            Gerencie todas as categorias do blog.
          </p>

        </div>

        <Link
          to="/admin/categories/new"
          className="flex items-center gap-2 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
        >
          <Plus size={18} />
          Nova Categoria
        </Link>

      </div>

      <div className="relative">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar categoria..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none focus:border-yellow-500"
        />

      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

        <table className="w-full">

          <thead>

            <tr className="border-b border-zinc-800 text-left">

              <th className="px-6 py-4">Categoria</th>

              <th className="px-6 py-4">Slug</th>

              <th className="px-6 py-4 text-center">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={3}
                  className="py-12 text-center text-zinc-500"
                >
                  Carregando...
                </td>

              </tr>

            ) : filtered.length === 0 ? (

              <tr>

                <td
                  colSpan={3}
                  className="py-16 text-center"
                >

                  <FolderOpen
                    className="mx-auto mb-3 text-zinc-600"
                    size={42}
                  />

                  <p className="text-zinc-500">
                    Nenhuma categoria encontrada.
                  </p>

                </td>

              </tr>

            ) : (

              filtered.map((category) => (

                <tr
                  key={category.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40"
                >

                  <td className="px-6 py-5 font-medium text-white">
                    {category.name}
                  </td>

                  <td className="px-6 py-5 text-zinc-400">
                    {category.slug}
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-3">

                      <Link
                        to={`/admin/categories/${category.id}/edit`}
                        className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-500"
                      >
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(category.id)
                        }
                        className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-500"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}