/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Category } from "@/types/category";

import {
  createCategory,
  updateCategory,
} from "@/admin/services/category.service";

interface CategoryFormProps {
  mode: "create" | "edit";
  category?: Category;
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const colors = [
  "#3B82F6",
  "#22C55E",
  "#F59E0B",
  "#EF4444",
  "#A855F7",
  "#06B6D4",
  "#64748B",
  "#18181B",
];

export default function CategoryForm({
  mode,
  category,
}: CategoryFormProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(colors[0]);

  const [slugLocked, setSlugLocked] = useState(false);

  useEffect(() => {
    if (!slugLocked) {
      setSlug(slugify(name));
    }
  }, [name, slugLocked]);

  useEffect(() => {
    if (mode === "edit" && category) {
      setName(category.name);
      setSlug(category.slug);
      setDescription(category.description ?? "");
      setColor(category.color ?? colors[0]);
    }
  }, [mode, category]);

  async function save() {
    try {
      setLoading(true);

      if (!name.trim()) {
        alert("Informe o nome da categoria.");
        return;
      }

      const payload = {
        name,
        slug,
        description,
        color,
      };

      if (mode === "create") {
        await createCategory(payload);
      } else {
        await updateCategory(category!.id, payload);
      }

      navigate("/admin/categories");
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Erro ao salvar categoria."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl">

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

        <h1 className="mb-8 text-2xl font-bold text-white">
          {mode === "create"
            ? "Nova Categoria"
            : "Editar Categoria"}
        </h1>

        <div className="space-y-6">

          <div>

            <label className="mb-2 block text-sm text-zinc-300">
              Nome
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-zinc-300">
              Slug
            </label>

            <input
              value={slug}
              onChange={(e) => {
                setSlugLocked(true);
                setSlug(slugify(e.target.value));
              }}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-zinc-300">
              Descrição
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-yellow-500"
            />

          </div>

          <div>

            <label className="mb-3 block text-sm text-zinc-300">
              Cor da categoria
            </label>

            <div className="flex flex-wrap gap-3">

              {colors.map((item) => (

                <button
                  key={item}
                  type="button"
                  onClick={() => setColor(item)}
                  className={`h-10 w-10 rounded-full border-4 transition ${
                    color === item
                      ? "border-white"
                      : "border-transparent"
                  }`}
                  style={{
                    backgroundColor: item,
                  }}
                />

              ))}

            </div>

          </div>

          <div className="flex gap-4 pt-6">

            <button
              type="button"
              onClick={save}
              disabled={loading}
              className="rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition hover:bg-yellow-400 disabled:opacity-60"
            >
              {loading
                ? "Salvando..."
                : mode === "create"
                ? "Criar Categoria"
                : "Salvar Alterações"}
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/admin/categories")
              }
              className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:bg-zinc-800"
            >
              Cancelar
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}