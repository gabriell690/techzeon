import {
  Calendar,
  Eye,
  Loader2,
  Save,
  Send,
} from "lucide-react";

interface PublishCardProps {
  loading: boolean;

  onPublish: () => void;

  onSaveDraft: () => void;

  onPreview?: () => void;
}

export default function PublishCard({
  loading,
  onPublish,
  onSaveDraft,
  onPreview,
}: PublishCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

      <h3 className="text-sm font-semibold text-white">
        Publicação
      </h3>

      <p className="mt-1 text-xs text-zinc-500">
        Gerencie a publicação deste artigo.
      </p>

      <div className="mt-5 space-y-3">

        <button
          type="button"
          disabled={loading}
          onClick={onPublish}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-cyan-500 disabled:opacity-50"
        >
          {loading ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            <Send size={18} />
          )}

          Publicar
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={onSaveDraft}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800 disabled:opacity-50"
        >
          <Save size={18} />
          Salvar rascunho
        </button>

        <button
          type="button"
          onClick={onPreview}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-800"
        >
          <Eye size={18} />
          Visualizar
        </button>

      </div>

      <div className="mt-6 border-t border-zinc-800 pt-4">

        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Calendar size={16} />
          Publicar imediatamente
        </div>

      </div>

    </div>
  );
}