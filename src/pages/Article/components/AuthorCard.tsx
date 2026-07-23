import { User, ArrowRight } from "lucide-react";
import type { Article } from "@/types";

interface Props {
  article: Article;
}

export default function AuthorCard({ article }: Props) {
  const author =
    typeof article.author === "string"
      ? article.author
      : article.author?.name ?? "Equipe TechZeon";

  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="flex flex-col gap-8 md:flex-row md:items-center">

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
          <User size={42} />
        </div>

        <div className="flex-1">

          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
            Autor
          </span>

          <h2 className="mt-2 text-3xl font-bold">
            {author}
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-zinc-600 dark:text-zinc-400">
            Especialista em tecnologia, inteligência artificial,
            hardware, software e inovação. Produz conteúdos
            aprofundados para ajudar profissionais e entusiastas
            a compreenderem as principais tendências do mercado.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600">
            Ver perfil
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}