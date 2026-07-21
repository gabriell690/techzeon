import Button from "../../ui/Button/Button";
import Section from "../../ui/Section/Section";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

      <div className="relative">

        <div className="mx-auto max-w-5xl py-24 text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-5 py-2 text-sm font-semibold text-blue-400">
            🚀 TECHZEON • Portal Brasileiro de Tecnologia
          </span>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white lg:text-8xl">
            Tecnologia
            <br />
            sem enrolação.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Hardware, Inteligência Artificial, Smartphones,
            Games, Reviews e Guias de Compra.
          </p>

          <div className="mt-12 flex justify-center gap-5">

            <Button>
              Explorar Notícias
            </Button>

            <Button variant="outline">
              Últimos Reviews
            </Button>

          </div>

        </div>

      </div>

    </Section>
  );
}