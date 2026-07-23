import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewArticleButton() {
  return (
    <Link
      to="/admin/articles/new"
      className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-5
        py-2.5
        font-medium
        text-white
        transition
        hover:bg-cyan-600
      "
    >
      <Plus size={18} />
      Novo artigo
    </Link>
  );
}