/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getCategories } from "../../../admin/services/category.service";
import type { Category } from "@/types/category";

export default function CategoryMenu() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();

        setCategories(
          data.filter((category: { slug: any; }) => category.slug)
        );
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return (
      <nav className="flex items-center justify-center gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-5 w-20 animate-pulse rounded bg-zinc-800"
          />
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center justify-center gap-8 overflow-x-auto whitespace-nowrap scrollbar-none">
      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/categoria/${category.slug}`}
          className={({ isActive }) =>
            `relative py-3 text-sm font-semibold transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {category.name}

              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}