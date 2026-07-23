import DashboardStats from "./components/DashboardStats";
import VisitorsChart from "./components/VisitorsChart";
import TrafficChart from "./components/TrafficChart";
import CategoriesChart from "./components/CategoriesChart";
import TopArticles from "./components/TopArticles";
import RecentActivity from "./components/RecentActivity";

import { useDashboard } from "@/hooks/useDashboard";

export default function Dashboard() {
  const {
    dashboard,
    loading,
    error,
    refresh,
  } = useDashboard();

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
      </div>
    );
  }

  if (error || !dashboard) {
    return (
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
        <h1 className="text-2xl font-bold text-red-400">
          Erro ao carregar Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          {error ?? "Erro desconhecido."}
        </p>

        <button
          onClick={refresh}
          className="mt-6 rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-600"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <DashboardStats stats={dashboard.stats} />

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <VisitorsChart data={dashboard.visitors} />
        </div>

        <TrafficChart />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <CategoriesChart data={dashboard.categories} />

        <TopArticles articles={dashboard.topArticles} />
      </div>

      <RecentActivity activities={dashboard.activities} />
    </div>
  );
}