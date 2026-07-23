import type { CategoryChart } from "@/types/dashboard";

interface CategoriesChartProps {
  data: CategoryChart[];
}

export default function CategoriesChart({
  data,
}: CategoriesChartProps) {
  const total = data.reduce(
    (acc, category) => acc + category.total,
    0
  );

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-semibold text-white">
          Categorias
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Distribuição dos artigos publicados
        </p>
      </div>

      {data.length === 0 ? (
        <div className="flex h-80 items-center justify-center text-zinc-500">
          Nenhuma categoria encontrada.
        </div>
      ) : (
        <div className="space-y-6 p-6">
          {data
            .sort((a, b) => b.total - a.total)
            .map((category, index) => {
              const percentage =
                total > 0
                  ? (category.total / total) * 100
                  : 0;

              const gradients = [
                "from-cyan-500 to-cyan-400",
                "from-violet-500 to-violet-400",
                "from-emerald-500 to-emerald-400",
                "from-amber-500 to-amber-400",
                "from-pink-500 to-pink-400",
                "from-blue-500 to-blue-400",
                "from-red-500 to-red-400",
              ];

              return (
                <div key={category.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">
                        {category.name}
                      </h3>

                      <p className="text-xs text-zinc-500">
                        {category.total} artigo
                        {category.total !== 1 && "s"}
                      </p>
                    </div>

                    <span className="text-sm font-semibold text-white">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        gradients[index % gradients.length]
                      } transition-all duration-700`}
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}