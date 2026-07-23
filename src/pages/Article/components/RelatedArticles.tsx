import { useEffect, useState } from "react";

import type { Article } from "@/types/article";
import { articlesApi } from "@/features/articles/api/articles.api";

import SectionHeader from "@/components/editorial/SectionHeader";

interface Props {
  article: Article;
}

export default function RelatedArticles({ article }: Props) {
  const [related, setRelated] = useState<Article[]>([]);

  useEffect(() => {
    async function loadRelated() {
      try {
        const articles = await articlesApi.getPublished();

        const filtered = articles
          .filter(
            (a) =>
              a.id !== article.id &&
              a.category_id === article.category_id
          )
          .slice(0, 3);

        setRelated(filtered);
      } catch (error) {
        console.error("Erro ao carregar artigos relacionados:", error);
      }
    }

    loadRelated();
  }, [article]);

  if (!related.length) return null;

  return (
    <section className="border-t border-zinc-800 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <SectionHeader
          badge="Relacionados"
          title="Continue lendo"
          description="Mais conteúdos da mesma categoria."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {related.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
            >
              <span className="text-xs uppercase tracking-widest text-blue-400">
                {item.category_id ?? "Sem categoria"}
              </span>

              <h3 className="mt-3 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-400 line-clamp-3">
                {item.excerpt}
              </p>

              <div className="mt-6 text-xs text-zinc-500">
                {item.published_at
                  ? new Date(item.published_at).toLocaleDateString("pt-BR")
                  : "Não publicado"}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}