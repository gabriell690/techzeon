import {
  ArrowUpRight,
  Eye,
  Newspaper,
} from "lucide-react";

import type { TopArticle } from "@/types/dashboard";

interface TopArticlesProps {
  articles: TopArticle[];
}

export default function TopArticles({
  articles,
}: TopArticlesProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-800 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Artigos Mais Acessados
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Ranking por visualizações
          </p>
        </div>

        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
          <Newspaper size={22} />
        </div>
      </div>

      <div className="divide-y divide-zinc-800">
        {articles.length === 0 ? (
          <div className="p-10 text-center text-zinc-500">
            Nenhum artigo encontrado.
          </div>
        ) : (
          articles.map((article, index) => (
            <div
              key={article.id}
              className="flex items-center justify-between p-5 transition-colors hover:bg-zinc-800/40"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-sm font-bold text-cyan-400">
                  #{index + 1}
                </div>

                <div>
                  <h3 className="font-medium text-white">
                    {article.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {article.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Eye size={18} />

                  <span className="font-medium">
                    {article.views.toLocaleString("pt-BR")}
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-emerald-400"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}