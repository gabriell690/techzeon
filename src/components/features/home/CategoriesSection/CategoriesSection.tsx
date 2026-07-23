const categories = [
  {
    title: "Hardware",
    description: "Placas de vídeo, processadores, memórias, SSDs e tudo para montar seu PC.",
    icon: "🖥️",
  },
  {
    title: "Smartphones",
    description: "Lançamentos, comparativos, reviews e dicas de compra.",
    icon: "📱",
  },
  {
    title: "Inteligência Artificial",
    description: "ChatGPT, Gemini, Claude, automações e o futuro da IA.",
    icon: "🤖",
  },
  {
    title: "Games",
    description: "PlayStation, Xbox, Nintendo, Steam e universo gamer.",
    icon: "🎮",
  },
  {
    title: "Reviews",
    description: "Análises completas feitas pela equipe TechZeon.",
    icon: "⭐",
  },
  {
    title: "Guias de Compra",
    description: "Os melhores produtos para cada faixa de preço.",
    icon: "🛒",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-375 px-8">

        <div className="mb-14 text-center">

          <span className="font-bold uppercase tracking-[4px] text-blue-500">
            Explore
          </span>

          <h2 className="mt-3 text-5xl font-black text-white">
            Explore por Categoria
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-400">
            Encontre rapidamente o conteúdo que procura navegando pelas principais
            categorias da TechZeon.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (

            <article
              key={category.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-600"
            >

              <div className="text-5xl">
                {category.icon}
              </div>

              <h3 className="mt-6 text-3xl font-black text-white">
                {category.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                {category.description}
              </p>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}