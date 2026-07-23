import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { HeroArticle } from "./Hero.types";

interface HeroCardProps {
  article: HeroArticle;
}

export default function HeroCard({ article }: HeroCardProps) {
  return (
    <Link
      to={`/artigo/${article.slug}`}
      className="group flex gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-zinc-900"
    >
      <div className="h-24 w-36 shrink-0 overflow-hidden rounded-xl">
        <img
          src={article.cover_image || "/images/blog-placeholder.webp"}
          alt={article.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
          {article.category?.name ?? "Sem categoria"}
        </span>

        <h3 className="line-clamp-2 text-base font-bold leading-6 text-white transition duration-300 group-hover:text-orange-400">
          {article.title}
        </h3>

        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>
            {article.author || "Administrador"}
          </span>

          <span className="flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {article.reading_time ?? 0} min
          </span>
        </div>
      </div>
    </Link>
  );
}