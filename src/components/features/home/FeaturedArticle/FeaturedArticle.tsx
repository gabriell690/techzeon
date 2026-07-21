import ImagePlaceholder from "../../../ui/ImagePlaceholder";

export default function FeaturedArticle() {
  return (
    <section className="pb-24">

      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-900">

          <div className="grid lg:grid-cols-2">

            <ImagePlaceholder height="h-[520px]" />

            <div className="flex flex-col justify-center p-16">

              <span className="text-sm font-bold uppercase tracking-widest text-blue-500">
                Destaque do Dia
              </span>

              <h2 className="mt-6 text-5xl font-black text-white">
                RTX 6090:
                vale a pena comprar?
              </h2>

              <p className="mt-6 text-lg leading-9 text-zinc-400">
                Fizemos todos os benchmarks,
                consumo, temperatura e comparativos
                completos.
              </p>

              <button className="mt-10 w-fit rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white">
                Ler matéria →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}