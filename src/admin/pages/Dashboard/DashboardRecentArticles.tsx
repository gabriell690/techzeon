const articles = [
  "Como montar um PC Gamer em 2026",
  "RTX 6090 vale a pena?",
  "Intel lança novos processadores",
];

export default function DashboardRecentArticles() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Últimos artigos
      </h2>

      <div className="space-y-4">
        {articles.map((article) => (
          <div
            key={article}
            className="rounded-xl border border-zinc-800 p-4 hover:bg-zinc-800"
          >
            <p className="text-white">{article}</p>
          </div>
        ))}
      </div>
    </div>
  );
}