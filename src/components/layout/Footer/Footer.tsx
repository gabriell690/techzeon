import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  "Início",
  "Notícias",
  "Reviews",
  "Guias de Compra",
  "Contato",
];

const categories = [
  "Hardware",
  "Smartphones",
  "IA",
  "Games",
  "Software",
];

const socials = [
  "Instagram",
  "YouTube",
  "X",
  "LinkedIn",
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black">

      <div className="mx-auto max-w-375 px-8 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Marca */}

          <div>

            <h2 className="text-4xl font-black text-white">
              TECH<span className="text-blue-500">ZEON</span>
            </h2>

            <p className="mt-6 leading-8 text-zinc-400">
              Portal brasileiro especializado em tecnologia,
              inteligência artificial, hardware, games,
              reviews e guias de compra.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Navegação
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-zinc-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Categorias */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Categorias
            </h3>

            <div className="space-y-4">

              {categories.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-zinc-400 transition hover:text-white"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Acompanhe
            </h3>

            <div className="space-y-4">

              {socials.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
                >
                  {item}
                  <ArrowUpRight size={16} />
                </a>

              ))}

            </div>

          </div>

        </div>

        <div className="my-14 h-px bg-zinc-800" />

        <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row">

          <p className="text-zinc-500">
            © {new Date().getFullYear()} TechZeon. Todos os direitos reservados.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="text-zinc-500 transition hover:text-white"
            >
              Política de Privacidade
            </a>

            <a
              href="#"
              className="text-zinc-500 transition hover:text-white"
            >
              Termos de Uso
            </a>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="font-semibold text-blue-500 hover:text-blue-400"
            >
              Voltar ao topo ↑
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}