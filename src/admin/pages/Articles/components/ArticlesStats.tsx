// src/admin/pages/articles/components/ArticlesStats.tsx

import {
  FileText,
  Eye,
  CheckCircle2,
  PencilLine,
} from "lucide-react";

interface ArticlesStatsProps {
  stats: {
    total: number;
    published: number;
    drafts: number;
    totalViews: number;
  };
}

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-5
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h3>

        </div>

        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${color}20`,
            color,
          }}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default function ArticlesStats({
  stats,
}: ArticlesStatsProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4

        md:grid-cols-2

        xl:grid-cols-4
      "
    >
      <StatCard
        title="Artigos"
        value={stats.total}
        color="#3b82f6"
        icon={<FileText size={22} />}
      />

      <StatCard
        title="Publicados"
        value={stats.published}
        color="#22c55e"
        icon={<CheckCircle2 size={22} />}
      />

      <StatCard
        title="Rascunhos"
        value={stats.drafts}
        color="#f59e0b"
        icon={<PencilLine size={22} />}
      />

      <StatCard
        title="Visualizações"
        value={stats.totalViews.toLocaleString("pt-BR")}
        color="#8b5cf6"
        icon={<Eye size={22} />}
      />
    </div>
  );
}