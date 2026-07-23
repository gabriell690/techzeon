interface StatusFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const statusOptions = [
  {
    value: "draft",
    label: "Rascunho",
  },
  {
    value: "review",
    label: "Em revisão",
  },
  {
    value: "scheduled",
    label: "Agendado",
  },
  {
    value: "published",
    label: "Publicado",
  },
  {
    value: "archived",
    label: "Arquivado",
  },
];

export default function StatusField({
  value,
  onChange,
}: StatusFieldProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-white">
          Status
        </h3>

        <p className="mt-1 text-xs text-zinc-500">
          Defina o estado atual do artigo.
        </p>
      </div>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-950
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      >
        {statusOptions.map((status) => (
          <option
            key={status.value}
            value={status.value}
          >
            {status.label}
          </option>
        ))}
      </select>

      <div className="mt-4 rounded-lg bg-zinc-950 p-3">
        <span className="text-xs text-zinc-400">
          Status atual:
        </span>

        <div className="mt-2">
          {value === "draft" && (
            <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-medium text-yellow-400">
              Rascunho
            </span>
          )}

          {value === "review" && (
            <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">
              Em revisão
            </span>
          )}

          {value === "scheduled" && (
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-400">
              Agendado
            </span>
          )}

          {value === "published" && (
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
              Publicado
            </span>
          )}

          {value === "archived" && (
            <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-medium text-red-400">
              Arquivado
            </span>
          )}
        </div>
      </div>
    </div>
  );
}