import { Clock3, FileText, Hash } from "lucide-react";

interface MetadataCardProps {
  words?: number;
  readingTime?: number;
}

export default function MetadataCard({
  words = 0,
  readingTime = 0,
}: MetadataCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <h3 className="text-sm font-semibold text-white">
        Metadados
      </h3>

      <p className="mt-1 text-xs text-zinc-500">
        Informações automáticas do artigo.
      </p>

      <div className="mt-5 space-y-4">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-400">
            <FileText size={16} />
            Palavras
          </div>

          <span className="text-white">
            {words}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-400">
            <Clock3 size={16} />
            Leitura
          </div>

          <span className="text-white">
            {readingTime} min
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-400">
            <Hash size={16} />
            Slug
          </div>

          <span className="text-xs text-zinc-500">
            automático
          </span>
        </div>

      </div>

    </div>
  );
}