/* eslint-disable @typescript-eslint/no-explicit-any */
interface LatestArticlesProps {
  articles: any[];
}

export default function LatestArticles({
  articles,
}: LatestArticlesProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">
        Últimos Artigos
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="rounded-xl border p-6"
          >
            <h3 className="font-semibold">
              {article.title}
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              {article.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}