import {
  CheckCircle2,
  Clock3,
  FilePlus2,
  Pencil,
} from "lucide-react";

import type { Activity } from "@/types/dashboard";

interface RecentActivityProps {
  activities: Activity[];
}

function getActivityIcon(type: string) {
  switch (type) {
    case "published":
      return (
        <div className="rounded-full bg-emerald-500/10 p-2 text-emerald-400">
          <CheckCircle2 size={18} />
        </div>
      );

    case "draft":
      return (
        <div className="rounded-full bg-amber-500/10 p-2 text-amber-400">
          <Clock3 size={18} />
        </div>
      );

    case "updated":
      return (
        <div className="rounded-full bg-cyan-500/10 p-2 text-cyan-400">
          <Pencil size={18} />
        </div>
      );

    default:
      return (
        <div className="rounded-full bg-violet-500/10 p-2 text-violet-400">
          <FilePlus2 size={18} />
        </div>
      );
  }
}

function getActivityLabel(type: string) {
  switch (type) {
    case "published":
      return "Artigo publicado";

    case "draft":
      return "Rascunho salvo";

    case "updated":
      return "Artigo atualizado";

    default:
      return "Novo artigo";
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

export default function RecentActivity({
  activities,
}: RecentActivityProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-semibold text-white">
          Atividade Recente
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Últimas ações realizadas no sistema
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="p-12 text-center text-zinc-500">
          Nenhuma atividade encontrada.
        </div>
      ) : (
        <div className="relative p-6">
          <div className="absolute bottom-6 left-11 top-6 w-px bg-zinc-800" />

          <div className="space-y-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="relative flex gap-5"
              >
                <div className="relative z-10">
                  {getActivityIcon(activity.type)}
                </div>

                <div className="flex-1 rounded-xl border border-transparent p-2 transition-all hover:border-zinc-800 hover:bg-zinc-800/40">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">
                      {getActivityLabel(activity.type)}
                    </h3>

                    <span className="text-xs text-zinc-500">
                      {formatDate(activity.created_at)}
                    </span>
                  </div>

                  <p className="mt-2 text-zinc-300">
                    {activity.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}