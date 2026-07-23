import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { VisitorsChart as VisitorsChartType } from "@/types/dashboard";

interface VisitorsChartProps {
  data: VisitorsChartType[];
}

export default function VisitorsChart({
  data,
}: VisitorsChartProps) {
  const totalViews = data.reduce(
    (total, item) => total + item.views,
    0
  );

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-zinc-800 p-6">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Visualizações
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Últimos 30 dias
          </p>
        </div>

        <div className="text-right">
          <h3 className="text-3xl font-bold text-white">
            {totalViews.toLocaleString("pt-BR")}
          </h3>

          <span className="text-sm text-zinc-500">
            Total de visualizações
          </span>
        </div>
      </div>

      <div className="h-95 p-6">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="viewsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#27272a"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#71717a",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              tick={{
                fill: "#71717a",
                fontSize: 12,
              }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="views"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#viewsGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}