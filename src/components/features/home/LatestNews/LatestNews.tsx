import ImagePlaceholder from "../../../ui/ImagePlaceholder";
import Trending from "../Trending";

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
    title: "PlayStation 6 ganha nova previsão de lançamento",
    category: "Games",
  },
  {
    title: "Intel responde oficialmente à nova geração Ryzen",
    category: "Hardware",
  },
];

export default function LatestNews() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-375 px-8">

        <div className="mb-12 flex items-center justify-between">

          <h2 className="text-5xl font-black text-white">
            Últimas Notícias
          </h2>

          <button className="rounded-xl border border-zinc-700 px-5 py-3 text-zinc-300 transition hover:border-blue-500 hover:text-white">
            Ver todas →
          </button>

        </div>

        <div className="grid gap-10 xl:grid-cols-[2fr_420px]">

          <div className="grid gap-8 md:grid-cols-2">

            {articles.map((article) => (
              <article
                key={article.title}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600"
              >
                <ImagePlaceholder height="h-64" />

                <div className="p-7">

                  <span className="text-sm font-bold uppercase tracking-wider text-blue-500">
                    {article.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold leading-8 text-white">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>

                </div>

              </article>
            ))}

          </div>

          <Trending />

        </div>

      </div>

    </section>
  );
}