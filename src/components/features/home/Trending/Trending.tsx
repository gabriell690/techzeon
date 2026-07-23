const trending = [
  "RTX 6090 bate recorde de desempenho",
  "iPhone Fold chega em 2027",
  "ChatGPT recebe novos recursos",
  "PlayStation 6 ganha nova previsão",
  "Melhores notebooks de 2026",
];

export default function Trending() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
      <h2 className="mb-8 text-3xl font-black text-white">
        🔥 Mais Lidas
      </h2>

      <div className="space-y-6">
        {trending.map((item, index) => (
          <div
            key={item}
            className="flex items-start gap-5 border-b border-zinc-800 pb-5 last:border-none"
          >
            <span className="text-3xl font-black text-blue-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="font-semibold leading-7 text-zinc-300 hover:text-white cursor-pointer transition-colors">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}