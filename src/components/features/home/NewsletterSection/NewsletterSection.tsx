export default function NewsletterSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-375 px-8">

        <div className="overflow-hidden rounded-[40px] border border-blue-900/50 bg-linear-to-br from-blue-700 via-blue-900 to-black p-12 lg:p-20">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-bold uppercase tracking-[4px] text-blue-300">
              Newsletter TechZeon
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
              Receba as principais notícias de tecnologia antes de todo mundo.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
              Reviews, lançamentos, inteligência artificial, hardware, games,
              comparativos e guias de compra diretamente no seu e-mail.
            </p>

            <form className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 md:flex-row">

              <input
                type="email"
                placeholder="Digite seu melhor e-mail"
                className="flex-1 rounded-2xl border border-zinc-700 bg-zinc-900 px-6 py-5 text-white outline-none transition focus:border-blue-500"
              />

              <button
                className="rounded-2xl bg-blue-600 px-10 py-5 font-bold text-white transition hover:bg-blue-700"
              >
                Inscrever-se
              </button>

            </form>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              <div>
                <h3 className="text-2xl font-bold text-white">
                  3x por semana
                </h3>

                <p className="mt-2 text-zinc-300">
                  Apenas conteúdo relevante.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Sem spam
                </h3>

                <p className="mt-2 text-zinc-300">
                  Você pode cancelar quando quiser.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Conteúdo exclusivo
                </h3>

                <p className="mt-2 text-zinc-300">
                  Guias, reviews e comparativos antecipados.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}