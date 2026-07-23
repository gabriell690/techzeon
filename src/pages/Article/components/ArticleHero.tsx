import type { Article } from "@/types/article";

import MetaInfo from "@/components/editorial/MetaInfo";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface ArticleHeroProps {
  article: Article;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-8 py-20">
        <span className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-400">
          {article.category_id ?? "Sem categoria"}
        </span>

        <h1 className="max-w-5xl text-5xl font-black leading-tight text-white md:text-6xl">
          {article.title}
        </h1>

        {article.excerpt && (
          <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-400">
            {article.excerpt}
          </p>
        )}

        <div className="mt-8">
          <MetaInfo
            author={article.author ?? "Equipe TechZeon"}
            date={
              article.published_at
                ? new Date(article.published_at).toLocaleDateString("pt-BR")
                : ""
            }
            readingTime={6}
          />
        </div>

        <div className="mt-14">
          {article.cover_image ? (
            <img
              src={article.cover_image}
              alt={article.title}
              className="h-130 w-full rounded-3xl object-cover"
            />
          ) : (
            <ImagePlaceholder height="h-[520px]" />
          )}
        </div>
      </div>
    </section>
  );
}