// src/components/home/Categories.tsx

import { Link } from "react-router-dom";
import type { ArticleCategory } from "@/types/article";

interface Props {
  categories: ArticleCategory[];
}

export default function Categories({
  categories,
}: Props) {

  if (!categories.length) return null;

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-4xl font-black text-white">
            Categorias
          </h2>

          <p className="mt-2 text-zinc-400">
            Explore os conteúdos por tema.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">

          {categories.map((category) => (

            <Link
              key={category.id}
              to={`/categoria/${category.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center transition-all duration-300 hover:border-orange-500 hover:bg-zinc-800"
            >

              <h3 className="font-bold text-white group-hover:text-orange-400">
                {category.name}
              </h3>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}