// src/components/home/Featured.tsx

import HeroFeatured from "../Hero/HeroFeatured";
import type { Article } from "@/types/article";

interface Props {
  article: Article;
}

export default function Featured({
  article,
}: Props) {
  if (!article) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h2 className="text-4xl font-black text-white">
              Artigo em destaque
            </h2>

            <p className="mt-2 text-zinc-400">
              O conteúdo mais importante do momento.
            </p>

          </div>

        </div>

        <HeroFeatured article={article} />

      </div>
    </section>
  );
}