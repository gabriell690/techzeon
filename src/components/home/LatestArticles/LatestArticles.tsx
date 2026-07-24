// src/components/home/LatestArticles.tsx

import type { Article } from "@/types/article";
import ArticleCard from "../../article/ArticleCard";

interface Props {
  articles: Article[];
}

export default function LatestArticles({
  articles,
}: Props) {

  if (!articles.length) return null;

  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">

          <h2 className="text-4xl font-black text-white">
            Últimos Artigos
          </h2>

          <p className="mt-2 text-zinc-400">
            Notícias recentes do universo da tecnologia.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}

        </div>

      </div>

    </section>
  );
}