import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

import { deleteArticle } from "@/admin/services/article.service";

interface ArticleActionsProps {
  articleId: string;
  slug: string;
  onDeleted: () => void;
}

export default function ArticleActions({
  articleId,
  slug,
  onDeleted,
}: ArticleActionsProps) {
  async function handleDelete() {
    const confirmed = window.confirm(
      "Deseja realmente excluir este artigo?"
    );

    if (!confirmed) return;

    try {
      await deleteArticle(articleId);

      onDeleted();

      alert("Artigo excluído com sucesso.");
    } catch (error) {
      console.error(error);

      alert("Erro ao excluir o artigo.");
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <Link
        to={`/artigo/${slug}`}
        title="Visualizar"
        className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
      >
        <Eye size={18} />
      </Link>

      <Link
        to={`/admin/articles/${articleId}/edit`}
        title="Editar"
        className="rounded-lg p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-cyan-400"
      >
        <Pencil size={18} />
      </Link>

      <button
        type="button"
        title="Excluir"
        onClick={handleDelete}
        className="rounded-lg p-2 text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}