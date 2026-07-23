interface ArticleStatusBadgeProps {
  status: "draft" | "published" | "archived";
}

const statusConfig = {
  draft: {
    label: "Rascunho",
    className:
      "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  },
  published: {
    label: "Publicado",
    className:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },
  archived: {
    label: "Arquivado",
    className:
      "border-zinc-600 bg-zinc-700/30 text-zinc-300",
  },
};

export default function ArticleStatusBadge({
  status,
}: ArticleStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}