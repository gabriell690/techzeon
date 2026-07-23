/* eslint-disable no-empty-pattern */
 
import type { Article } from "../../../types";

interface Props {
  article: Article;
}

export default function ArticleSidebar({ }: Props) {
  return (
    <aside className="sticky top-24 h-fit space-y-10">

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

        <h3 className="mb-5 text-lg font-bold">
          Índice
        </h3>

        <ul className="space-y-3 text-sm text-zinc-400">
          <li>Introdução</li>
          <li>Benchmarks</li>
          <li>Consumo</li>
          <li>Conclusão</li>
        </ul>

      </div>

    </aside>
  );
}