// src/components/article/ReadingSidebar.tsx

import { Flame, Share2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import type { Article } from "@/types";

import TableOfContents from "./TableOfContents";
import NewsletterCard from "./NewsletterCard";
import ShareBar from "./ShareBar";

interface ReadingSidebarProps {
  article: Article;
}

export default function ReadingSidebar({
  article,
}: ReadingSidebarProps) {
  return (
    <aside className="sticky top-24 space-y-8">

      {/* Índice */}

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

        <div className="border-b border-zinc-200 px-6 py-5 dark:border-zinc-800">

          <h3 className="text-lg font-bold">
            Neste artigo
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            Navegue rapidamente pelos tópicos.
          </p>

        </div>

        <div className="p-6">
         <TableOfContents />
        </div>

      </div>

      {/* Compartilhar */}

      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

        <div className="border-b border-zinc-200 px-6 py-5 dark:border-zinc-800">

          <div className="flex items-center gap-2">

            <Share2
              className="text-cyan-500"
              size={20}
            />

            <h3 className="font-bold">
              Compartilhar
            </h3>

          </div>

        </div>

        <div className="p-6">

          <ShareBar article={article} />

        </div>

      </div>

      {/* Newsletter */}

      <NewsletterCard />

      {/* CTA */}

      <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 to-blue-600/10 p-7">

        <div className="flex items-center gap-2">

          <Flame
            className="text-cyan-500"
            size={20}
          />

          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-500">

            TechZeon

          </span>

        </div>

        <h3 className="mt-5 text-2xl font-bold leading-tight">

          Continue explorando tecnologia.

        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">

          Descubra artigos exclusivos sobre IA, hardware,
          programação, segurança, software e inovação.

        </p>

        <Link
          to="/"
          className="
            mt-7
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-cyan-500
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-cyan-600
          "
        >
          Explorar artigos

          <ArrowUpRight size={18} />

        </Link>

      </div>

    </aside>
  );
}