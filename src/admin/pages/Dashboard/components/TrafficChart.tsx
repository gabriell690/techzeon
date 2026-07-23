import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  {
    name: "Google",
    value: 58,
    color: "#06b6d4",
  },
  {
    name: "Direto",
    value: 18,
    color: "#8b5cf6",
  },
  {
    name: "Instagram",
    value: 12,
    color: "#ec4899",
  },
  {
    name: "Facebook",
    value: 8,
    color: "#3b82f6",
  },
  {
    name: "Outros",
    value: 4,
    color: "#f59e0b",
  },
];

export default function TrafficChart() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-lg font-semibold text-white">
          Fontes de Tráfego
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Origem das visitas do TechZeon
        </p>
      </div>

      <div className="h-[280px] pt-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "#18181b",
                border: "1px solid #27272a",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell
                  key={entry.name}
                  fill={entry.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4 p-6 pt-2">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <span className="text-sm text-zinc-300">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-white">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}