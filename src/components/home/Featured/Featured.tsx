/* eslint-disable @typescript-eslint/no-explicit-any */
interface FeaturedProps {
  article: any;
}

export default function Featured({
  article,
}: FeaturedProps) {
  if (!article) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-3xl font-bold">
        Artigo em destaque
      </h2>

      <div className="rounded-2xl border p-8 shadow-sm">
        <h3 className="text-3xl font-bold">
          {article.title}
        </h3>

        <p className="mt-4 text-zinc-500">
          {article.excerpt}
        </p>
      </div>
    </section>
  );
}