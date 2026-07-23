import { Flame } from "lucide-react";

const news = [
  "RTX 6090 chega ao mercado",
  "Apple Intelligence evolui",
  "Windows 12 pode ser anunciado",
  "OpenAI lança novo modelo",
  "Galaxy Z Fold 8 impressiona",
];

export default function TrendingBar() {
  const items = [...news, ...news];

  return (
    <section className="relative border-b border-zinc-800 bg-black">
      {/* Gradiente esquerdo */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-black to-transparent" />

      {/* Gradiente direito */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-black to-transparent" />

      <div className="flex h-11 items-center overflow-hidden">

        <div className="z-20 ml-6 mr-10 flex shrink-0 items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1">
          <Flame size={14} className="text-orange-500" />

        </div>

        <div className="flex min-w-max animate-marquee items-center gap-14 whitespace-nowrap">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sm text-zinc-300 transition-colors duration-300 hover:text-orange-500"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}