import SEO from "@/components/seo/SEO";
import { Cpu, Shield, Brain, Code2, MonitorSmartphone, Newspaper } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="Sobre o TechZeon"
        description="Conheça o TechZeon, portal brasileiro dedicado às últimas notícias, análises e conteúdos sobre Inteligência Artificial, Hardware, Software, Programação, Segurança Digital e Tecnologia."
        canonical="/sobre"
      />

      <main className="bg-zinc-950 text-white">
        {/* Hero */}
        <section className="border-b border-zinc-800">
          <div className="mx-auto max-w-6xl px-6 py-24">

            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-1 text-sm font-semibold text-cyan-400">
              SOBRE O TECHZEON
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight">
              Tecnologia explicada de forma clara,
              precisa e confiável.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              O TechZeon é um portal brasileiro criado para acompanhar a
              evolução da tecnologia e tornar informações complexas mais
              acessíveis. Nosso objetivo é publicar conteúdos relevantes,
              atualizados e baseados em fontes confiáveis para ajudar pessoas,
              profissionais e empresas a compreenderem as principais mudanças
              do setor tecnológico.
            </p>

          </div>
        </section>

        {/* Missão */}
        <section className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold">
                Nossa missão
              </h2>

              <p className="mt-6 text-zinc-400 leading-8">
                Produzir conteúdo de qualidade que informe, eduque e acompanhe
                as transformações da tecnologia moderna, oferecendo análises,
                notícias e guias completos para todos os níveis de conhecimento.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Nossa visão
              </h2>

              <p className="mt-6 text-zinc-400 leading-8">
                Tornar o TechZeon uma das principais referências brasileiras em
                conteúdo sobre tecnologia, reconhecido pela qualidade editorial,
                imparcialidade e compromisso com informações verificadas.
              </p>
            </div>

          </div>

        </section>

        {/* Categorias */}
        <section className="border-y border-zinc-800 bg-zinc-900/40">

          <div className="mx-auto max-w-6xl px-6 py-20">

            <h2 className="text-center text-4xl font-black">
              O que você encontra aqui
            </h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

              <Card
                icon={<Brain size={28} />}
                title="Inteligência Artificial"
                description="Novidades, ferramentas, tendências e aplicações práticas da IA."
              />

              <Card
                icon={<Cpu size={28} />}
                title="Hardware"
                description="Processadores, placas de vídeo, notebooks, PCs e lançamentos."
              />

              <Card
                icon={<MonitorSmartphone size={28} />}
                title="Software"
                description="Aplicativos, sistemas operacionais, produtividade e plataformas."
              />

              <Card
                icon={<Code2 size={28} />}
                title="Programação"
                description="Tutoriais, frameworks, linguagens e desenvolvimento moderno."
              />

              <Card
                icon={<Shield size={28} />}
                title="Segurança Digital"
                description="Privacidade, proteção de dados, golpes e cibersegurança."
              />

              <Card
                icon={<Newspaper size={28} />}
                title="Notícias"
                description="Cobertura diária dos principais acontecimentos do mundo da tecnologia."
              />

            </div>

          </div>

        </section>

        {/* Compromisso */}
        <section className="mx-auto max-w-6xl px-6 py-20">

          <h2 className="text-4xl font-black">
            Nosso compromisso editorial
          </h2>

          <div className="mt-10 space-y-6 text-zinc-400 leading-8">

            <p>
              O TechZeon busca produzir conteúdos originais, atualizados e
              relevantes, utilizando fontes públicas e confiáveis sempre que
              possível.
            </p>

            <p>
              Nosso compromisso é apresentar informações de maneira clara,
              objetiva e transparente, diferenciando fatos, opiniões e análises
              técnicas.
            </p>

            <p>
              Estamos em constante evolução para oferecer uma experiência de
              leitura moderna, rápida e acessível em qualquer dispositivo.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-cyan-500/50">

      <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>

    </article>
  );
}