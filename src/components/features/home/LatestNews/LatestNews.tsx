import ImagePlaceholder from "../../../ui/ImagePlaceholder";

const articles = [
  {
    title: "RTX 6090 supera expectativas nos primeiros benchmarks",
    category: "Hardware",
  },
  {
    title: "Apple prepara iPhone com tela sem bordas para 2027",
    category: "Smartphones",
  },
  {
    title: "OpenAI anuncia novos recursos para o ChatGPT",
    category: "IA",
  },
  {
    title: "Os melhores notebooks para estudar em 2026",
    category: "Guia",
  },
  {
    title: "PlayStation 6: rumores indicam lançamento próximo",
    category: "Games",
  },
  {
    title: "Intel responde oficialmente à nova geração Ryzen",
    category: "Hardware",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-4xl font-black text-white">
          Últimas Notícias
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {articles.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600"
            >
              <ImagePlaceholder height="h-56" />

              <div className="p-6">

                <span className="text-sm font-semibold text-blue-500">
                  {article.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold leading-8 text-white">
                  {article.title}
                </h3>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}