import ImagePlaceholder from "../../../ui/ImagePlaceholder";

const guides = [
  {
    title: "Melhores Notebooks até R$ 5.000",
    category: "Notebook",
  },
  {
    title: "Top 10 SSDs para Games",
    category: "Hardware",
  },
  {
    title: "Melhores Celulares Custo-Benefício",
    category: "Smartphones",
  },
  {
    title: "Qual GPU comprar em 2026?",
    category: "Hardware",
  },
];

export default function BuyingGuides() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-375 px-8">

        <div className="mb-14">

          <span className="font-bold uppercase tracking-[4px] text-blue-500">
            Guias
          </span>

          <h2 className="mt-3 text-5xl font-black text-white">
            Guias de Compra
          </h2>

          <p className="mt-5 max-w-3xl text-lg text-zinc-400">
            Descubra os melhores produtos para cada categoria com análises,
            comparativos e recomendações da equipe TechZeon.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {guides.map((guide) => (
            <article
              key={guide.title}
              className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-blue-600"
            >
              <ImagePlaceholder height="h-52" />

              <div className="p-6">

                <span className="text-sm font-bold uppercase text-blue-500">
                  {guide.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold leading-8 text-white">
                  {guide.title}
                </h3>

                <button className="mt-6 text-blue-500 transition hover:text-blue-400">
                  Ver guia →
                </button>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}