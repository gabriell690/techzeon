// src/components/article/TableOfContents.tsx

export default function TableOfContents() {
  return (
    <nav className="space-y-3">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Neste artigo
      </h3>

      <ul className="space-y-2">
        <li>
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Introdução
          </button>
        </li>

        <li>
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Desenvolvimento
          </button>
        </li>

        <li>
          <button className="w-full rounded-lg px-3 py-2 text-left text-sm transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            Conclusão
          </button>
        </li>
      </ul>
    </nav>
  );
}