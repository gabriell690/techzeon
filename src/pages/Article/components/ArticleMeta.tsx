import {
  CalendarDays,
  Clock3,
  Eye,
  User2,
} from "lucide-react";

import type { Article } from "@/types";

interface Props {
  article: Article;
}

export default function ArticleMeta({ article }: Props) {
  const author =
    typeof article.author === "string"
      ? article.author
      : article.author?.name ?? "Equipe TechZeon";

  const date = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(article.published_at || article.created_at));

  const readingTime =
    article.reading_time ??
    Math.max(
      1,
      Math.ceil(
        article.content
          .replace(/<[^>]+>/g, "")
          .trim()
          .split(/\s+/).length / 200
      )
    );

  return (
    <section className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-500">
            <User2 size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Autor
            </p>

            <p className="font-semibold">
              {author}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/10 text-violet-500">
            <CalendarDays size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Publicado
            </p>

            <p className="font-semibold">
              {date}
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
            <Clock3 size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Leitura
            </p>

            <p className="font-semibold">
              {readingTime} min
            </p>
          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <Eye size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Visualizações
            </p>

            <p className="font-semibold">
              {(article.views ?? 0).toLocaleString("pt-BR")}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}