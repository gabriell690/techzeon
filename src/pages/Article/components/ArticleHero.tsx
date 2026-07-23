 
// src/components/article/ArticleHero.tsx

import {
  Bookmark,
  Share2,
} from "lucide-react";
import type { Article } from "@/types";

interface Props {
  article: Article;
}

export default function ArticleHero({ article }: Props) {


  return (
    <header className="relative overflow-hidden border-b border-zinc-200 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white dark:border-zinc-800">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8">

        {/* Breadcrumb */}

        <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-400">

          <span>Home</span>

          <span>/</span>

          {article.category?.name && (
            <>
              <span>{article.category.name}</span>
              <span>/</span>
            </>
          )}

          <span className="truncate text-zinc-200">
            {article.title}
          </span>

        </nav>

        {/* Categoria */}

        {article.category && (
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {article.category.name}
          </span>
        )}

        {/* Título */}

        <h1
          className="
          mt-8
          max-w-5xl
          text-4xl
          font-black
          leading-tight
          tracking-tight

          sm:text-5xl

          lg:text-6xl

          xl:text-7xl
        "
        >
          {article.title}
        </h1>

        {/* Resumo */}

        {article.excerpt && (
          <p
            className="
            mt-8
            max-w-4xl
            text-lg
            leading-9
            text-zinc-300

            md:text-xl
          "
          >
            {article.excerpt}
          </p>
        )}

      
        {/* Botões */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900/60
            px-5
            py-3
            transition
            hover:border-cyan-500
            hover:bg-cyan-500/10
          "
          >
            <Share2 size={18} />

            Compartilhar

          </button>

          <button
            className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900/60
            px-5
            py-3
            transition
            hover:border-yellow-500
            hover:bg-yellow-500/10
          "
          >
            <Bookmark size={18} />

            Salvar

          </button>

        </div>

        {/* Imagem */}

        {article.cover_image && (
          <div
            className="
            mt-16
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            shadow-2xl
          "
          >
            <img
              src={article.cover_image}
              alt={article.title}
              loading="eager"
              className="
              aspect-21/9
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.03]
            "
            />
          </div>
        )}
      </div>
    </header>
  );
}