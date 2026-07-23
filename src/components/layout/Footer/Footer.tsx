import {
  ArrowUp,
  ArrowUpRight,
  Cpu,
  Mail,
  Send,
  Globe,
} from "lucide-react";

import { Link } from "react-router-dom";

const navigation = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Buscar",
    href: "/buscar",
  },
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Contato",
    href: "/contato",
  },
];

const categories = [
  {
    label: "Inteligência Artificial",
    href: "/categoria/inteligencia-artificial",
  },
  {
    label: "Hardware",
    href: "/categoria/hardware",
  },
  {
    label: "Software",
    href: "/categoria/software",
  },
  {
    label: "Programação",
    href: "/categoria/programacao",
  },
  {
    label: "Segurança",
    href: "/categoria/seguranca",
  },
];

const company = [
  {
    label: "Sobre",
    href: "/sobre",
  },
  {
    label: "Contato",
    href: "/contato",
  },
  {
    label: "Política de Privacidade",
    href: "/politica-de-privacidade",
  },
  {
    label: "Termos de Uso",
    href: "/termos-de-uso",
  },
];

const socials = [
  {
    name: "Instagram",
    icon: Globe,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Send,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Mail,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-linear-to-b from-black via-zinc-950 to-black">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

      {/* Newsletter */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-6 pt-24">

          <div className="overflow-hidden rounded-[36px] border border-zinc-800 bg-linear-to-br from-zinc-900 to-black">

            <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">

              {/* Texto */}

              <div>

                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2">

                  <Cpu
                    size={18}
                    className="text-blue-400"
                  />

                  <span className="text-sm font-semibold text-blue-300">
                    TechZeon Newsletter
                  </span>

                </div>

                <h2 className="max-w-xl text-4xl font-black leading-tight text-white lg:text-5xl">

                  Receba as principais notícias do mundo da tecnologia.

                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">

                  Inteligência Artificial, Hardware, Software,
                  Programação, Segurança Digital e as maiores novidades
                  do setor diretamente no seu e-mail.

                </p>

              </div>

              {/* Formulário */}

              <div>

                <div className="rounded-3xl border border-zinc-800 bg-black/40 p-6 backdrop-blur-xl">

                  <label className="mb-4 block text-sm font-medium text-zinc-400">

                    Seu melhor e-mail

                  </label>

                  <div className="flex flex-col gap-4 sm:flex-row">

                    <div className="relative flex-1">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      />

                      <input
                        type="email"
                        placeholder="voce@email.com"
                        className="h-14 w-full rounded-2xl border border-zinc-700 bg-zinc-950 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
                      />

                    </div>

                    <button
                      className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 font-semibold text-white transition hover:bg-blue-500"
                    >

                      <Send size={18} />

                      Inscrever

                    </button>

                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">

                    Sem spam. Apenas conteúdos relevantes sobre tecnologia.

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer Principal */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
                        {/* Marca */}

            <div>

              <Link
                to="/"
                className="inline-block"
              >

                <h2 className="text-4xl font-black tracking-tight text-white">

                  TECH<span className="text-blue-500">ZEON</span>

                </h2>

              </Link>

              <p className="mt-8 max-w-md text-[15px] leading-8 text-zinc-400">

                O TechZeon acompanha a evolução da tecnologia com notícias,
                análises, reviews e guias completos sobre Inteligência
                Artificial, Hardware, Software, Programação e Segurança
                Digital.

              </p>

              <div className="mt-10 flex flex-wrap gap-3">

                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                  IA
                </span>

                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300">
                  Hardware
                </span>

                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300">
                  Software
                </span>

                <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300">
                  Programação
                </span>

              </div>

            </div>

            {/* Navegação */}

            <div>

              <h3 className="mb-8 text-lg font-bold tracking-wide text-white">

                Explorar

              </h3>

              <nav className="space-y-5">

                {navigation.map((item) => (

                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex items-center justify-between text-zinc-400 transition hover:text-white"
                  >

                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                  </Link>

                ))}

              </nav>

            </div>

            {/* Categorias */}

            <div>

              <h3 className="mb-8 text-lg font-bold tracking-wide text-white">

                Categorias

              </h3>

              <nav className="space-y-5">

                {categories.map((item) => (

                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex items-center justify-between text-zinc-400 transition hover:text-white"
                  >

                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                  </Link>

                ))}

              </nav>

            </div>

            {/* Institucional */}

            <div>

              <h3 className="mb-8 text-lg font-bold tracking-wide text-white">

                Institucional

              </h3>

              <nav className="space-y-5">

                {company.map((item) => (

                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex items-center justify-between text-zinc-400 transition hover:text-white"
                  >

                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={16}
                      className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                    />

                  </Link>

                ))}

              </nav>

            </div>

          </div>

          <div className="my-20 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

            {/* Redes Sociais */}

            <div>

              <h3 className="mb-6 text-lg font-bold text-white">
                Acompanhe o TechZeon
              </h3>

              <div className="flex flex-wrap gap-4">

                {socials.map((social) => {

                  const Icon = social.icon;

                  return (

                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
                    >

                      <Icon
                        size={22}
                        className="text-zinc-300 transition group-hover:scale-110 group-hover:text-white"
                      />

                    </a>

                  );

                })}

              </div>

            </div>

            {/* Estatísticas */}

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">

              <div>

                <p className="text-3xl font-black text-white">
                  24h
                </p>

                <span className="mt-2 block text-sm text-zinc-500">
                  Cobertura de notícias
                </span>

              </div>

              <div>

                <p className="text-3xl font-black text-white">
                  IA
                </p>

                <span className="mt-2 block text-sm text-zinc-500">
                  Conteúdo especializado
                </span>

              </div>

              <div>

                <p className="text-3xl font-black text-white">
                  SEO
                </p>

                <span className="mt-2 block text-sm text-zinc-500">
                  Conteúdo otimizado
                </span>

              </div>

              <div>

                <p className="text-3xl font-black text-white">
                  BR
                </p>

                <span className="mt-2 block text-sm text-zinc-500">
                  Produzido no Brasil
                </span>

              </div>

            </div>

          </div>

          <div className="mt-20 flex flex-col gap-10 border-t border-zinc-800 pt-10 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="text-zinc-300">

                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-white">
                  TechZeon
                </span>

              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">

                O TechZeon é um portal brasileiro dedicado à cobertura de
                tecnologia, inovação, inteligência artificial, hardware,
                software, programação e segurança digital. Nosso objetivo é
                oferecer conteúdo confiável, atualizado e relevante para
                profissionais, estudantes e entusiastas da tecnologia.

              </p>

            </div>

            <div className="flex flex-wrap items-center gap-6">

              <Link
                to="/politica-de-privacidade"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                Política de Privacidade
              </Link>

              <Link
                to="/termos-de-uso"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                Termos de Uso
              </Link>

              <Link
                to="/contato"
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                Contato
              </Link>
                            <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >

                <ArrowUp
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />

                Voltar ao topo

              </button>

            </div>

          </div>

        </div>

      </section>

      {/* Barra Inferior */}

      <section className="border-t border-zinc-900 bg-black/70 backdrop-blur">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-zinc-500 lg:flex-row">

          <p>
            Desenvolvido com React, TypeScript e Vite. Conteúdo protegido por
            direitos autorais.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
              React
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
              TypeScript
            </span>

            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
              Vite
            </span>

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-blue-300">
              TechZeon
            </span>

          </div>

        </div>

      </section>

    </footer>
  );
}