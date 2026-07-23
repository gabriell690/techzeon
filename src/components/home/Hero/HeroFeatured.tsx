import { CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { HeroArticle } from "./Hero.types";

interface HeroFeaturedProps {
  article?: HeroArticle | null;
}

export default function HeroFeatured({ article }: HeroFeaturedProps) {
  if (!article) return null;

  return (
    <Link
      to={`/artigo/${article.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-zinc-900"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={article.cover_image || "/images/blog-placeholder.webp"}
          alt={article.title}
          loading="eager"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">
        {article.category && (
          <span className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            {article.category.name}
          </span>
        )}

        <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight text-white transition-colors duration-300 group-hover:text-orange-400 lg:text-5xl">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-300 lg:text-lg">
            {article.excerpt}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-zinc-300">
          {article.author && (
            <span className="font-medium">
              {article.author}
            </span>
          )}

          {article.published_at && (
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {new Date(article.published_at).toLocaleDateString("pt-BR")}
            </span>
          )}

          {article.reading_time && (
            <span className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              {article.reading_time} min
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}