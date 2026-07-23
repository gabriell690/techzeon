import { useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import DataTable, {
  type DataTableColumn,
} from "@/admin/components/DataTable";

import { useArticles } from "@/hooks/useArticles";

import type { Article } from "@/types/article";

import ArticleActions from "./components/ArticleActions";
import ArticleStatusBadge from "./components/ArticleStatusBadge";

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: "draft" | "published";
  publishedAt: string;
  updatedAt: string;
}

function formatDate(value?: string | null) {
  if (!value) return "-";

  return format(new Date(value), "dd/MM/yyyy", {
    locale: ptBR,
  });
}

export default function ArticlesTable() {
  const {
    articles,
    loading,
    error,
    refresh,
    removeArticle,
  } = useArticles();

  const rows = useMemo<ArticleRow[]>(() => {
    return articles.map((article: Article) => ({
      id: article.id,
      slug: article.slug,
      title: article.title,
     category: article.category?.name ?? "Sem categoria",
      status: article.status,
      publishedAt: formatDate(article.published_at),
      updatedAt: formatDate(article.updated_at),
    }));
  }, [articles]);

  const columns: DataTableColumn<ArticleRow>[] = [
    {
      key: "title",
      title: "Título",
    },
    {
      key: "category",
      title: "Categoria",
    },
    {
      key: "status",
      title: "Status",
      render: (article) => (
        <ArticleStatusBadge status={article.status} />
      ),
    },
    {
      key: "publishedAt",
      title: "Publicado",
    },
    {
      key: "updatedAt",
      title: "Atualizado",
    },
    {
      key: "actions",
      title: "",
      width: "120px",
      render: (article) => (
        <ArticleActions
          articleId={article.id}
          slug={article.slug}
          onDeleted={() => {
            removeArticle(article.id);
            refresh();
          }}
        />
      ),
    },
  ];

  if (loading) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        text-center
        text-sm
        text-zinc-400
        sm:p-8
      "
    >
      Carregando artigos...
    </div>
  );
}

 if (error) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-red-900
        bg-red-950/30
        p-6
        text-center
        text-sm
        text-red-400
        sm:p-8
      "
    >
      {error}
    </div>
  );
}

  return (
  <div
    className="
      mt-6
      overflow-x-auto
      rounded-2xl
      border
      border-zinc-800
      bg-zinc-900
    "
  >
    <div className="min-w-225">
      <DataTable
        columns={columns}
        data={rows}
        emptyMessage="Nenhum artigo encontrado."
      />
    </div>
  </div>
);
}