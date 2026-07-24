// src/components/articles/ArticleCard.tsx

import { CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Article } from "@/types/article";

interface Props {
  article: Article;
}

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      to={`/artigo/${article.slug}`}
      className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={
            article.cover_image ||
            "/images/blog-placeholder.webp"
          }
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">

        {article.category && (
          <span className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            {article.category.name}
          </span>
        )}

        <h3 className="mt-4 line-clamp-2 text-xl font-bold text-white transition group-hover:text-orange-400">
          {article.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-zinc-500">

          <span>
            {typeof article.author === "string"
              ? article.author
              : article.author?.name}
          </span>

          {article.published_at && (
            <span className="flex items-center gap-2">
              <CalendarDays size={14} />
              {new Date(
                article.published_at
              ).toLocaleDateString("pt-BR")}
            </span>
          )}

          {article.reading_time && (
            <span className="flex items-center gap-2">
              <Clock3 size={14} />
              {article.reading_time} min
            </span>
          )}

        </div>

      </div>
    </Link>
  );
}