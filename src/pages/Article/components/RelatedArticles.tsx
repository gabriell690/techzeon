// src/components/article/RelatedArticles.tsx

import type { Article } from "@/types";

interface Props {
  currentArticle: Article;
}

export default function RelatedArticles({
  currentArticle,
}: Props) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 text-3xl font-bold">
        Continue lendo
      </h2>

      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-zinc-500">
          Em breve serão exibidos artigos relacionados.
        </p>

        <h3 className="mt-4 text-xl font-semibold">
          Artigo atual:
        </h3>

        <p className="mt-2">
          {currentArticle.title}
        </p>
      </div>
    </section>
  );
}