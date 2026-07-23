import HeroCard from "./HeroCard";
import type { Article } from "@/types";

interface HeroSidebarProps {
  articles: Article[];
}

export default function HeroSidebar({
  articles,
}: HeroSidebarProps) {
  return (
    <aside className="rounded-3xl border border-zinc-800 bg-zinc-950">

      <div className="border-b border-zinc-800 px-6 py-5">
        <h2 className="text-lg font-bold text-white">
          Últimas Notícias
        </h2>
      </div>

      <div className="divide-y divide-zinc-800">
        {articles.map((article) => (
          <HeroCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

    </aside>
  );
}