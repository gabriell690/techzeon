import {
  FileText,
  Eye,
  FolderOpen,
  Users,
} from "lucide-react";

import StatsCard from "../../../components/StatsCard/StatsCard";

import type { DashboardStats as DashboardStatsType } from "@/types/dashboard";

interface DashboardStatsProps {
  stats: DashboardStatsType;
}

export default function DashboardStats({
  stats,
}: DashboardStatsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Artigos"
        value={stats.totalArticles}
        icon={FileText}
        trend={12}
        trendLabel="este mês"
        color="cyan"
      />

      <StatsCard
        title="Visualizações"
        value={stats.totalViews.toLocaleString("pt-BR")}
        icon={Eye}
        trend={18}
        trendLabel="últimos 30 dias"
        color="purple"
      />

      <StatsCard
        title="Categorias"
        value={stats.totalCategories}
        icon={FolderOpen}
        trend={4}
        trendLabel="ativas"
        color="amber"
      />

      <StatsCard
        title="Autores"
        value={stats.totalAuthors}
        icon={Users}
        trend={2}
        trendLabel="cadastrados"
        color="green"
      />
    </div>
  );
}