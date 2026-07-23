import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;

  trend?: number;
  trendLabel?: string;

 color?:
  | "cyan"
  | "green"
  | "yellow"
  | "red"
  | "purple"
  | "amber";
}

const colorClasses = {
  cyan: "bg-cyan-500/10 text-cyan-400",
  green: "bg-emerald-500/10 text-emerald-400",
  yellow: "bg-yellow-500/10 text-yellow-400",
  red: "bg-red-500/10 text-red-400",
  purple: "bg-violet-500/10 text-violet-400",
  amber: "bg-amber-500/10 text-amber-400",
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  color = "cyan",
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-400">{title}</span>

        <div className={`rounded-xl p-3 ${colorClasses[color]}`}>
          <Icon size={20} />
        </div>
      </div>

      <h2 className="mt-6 text-4xl font-bold text-white">
        {value}
      </h2>

      {trend !== undefined && (
        <div className="mt-4 flex items-center gap-2 text-sm">
          {trend >= 0 ? (
            <ArrowUpRight
              size={16}
              className="text-emerald-400"
            />
          ) : (
            <ArrowDownRight
              size={16}
              className="text-red-400"
            />
          )}

          <span
            className={
              trend >= 0
                ? "text-emerald-400"
                : "text-red-400"
            }
          >
            {Math.abs(trend)}%
          </span>

          {trendLabel && (
            <span className="text-zinc-500">
              {trendLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}