import { Link } from "react-router-dom";

export default function DashboardQuickActions() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="mb-5 text-lg font-semibold text-white">
        Ações rápidas
      </h2>

      <div className="space-y-3">
        <Link
          to="/admin/articles/new"
          className="block rounded-xl bg-cyan-500 px-4 py-3 text-center font-medium text-white transition hover:bg-cyan-600"
        >
          Novo artigo
        </Link>

        <Link
          to="/admin/categories/new"
          className="block rounded-xl border border-zinc-700 px-4 py-3 text-center text-zinc-300 transition hover:bg-zinc-800"
        >
          Nova categoria
        </Link>
      </div>
    </div>
  );
}