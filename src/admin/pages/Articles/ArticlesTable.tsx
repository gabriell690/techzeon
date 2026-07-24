/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import DataTable, {
  type DataTableColumn,
} from "@/admin/components/DataTable";

import { useArticles } from "@/hooks/useArticles";

import ArticleActions from "./components/ArticleActions";
import ArticleStatusBadge from "./components/ArticleStatusBadge";

interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  author: string;
  category: string;
  status: "draft" | "published";
  publishedAt: string;
  updatedAt: string;
}

function formatDate(date?: string | null) {
  if (!date) return "-";

  return format(new Date(date), "dd/MM/yyyy", {
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
    return articles.map((article: any) => ({
      id: article.id,
      slug: article.slug,
      title: article.title,

      author:
        article.author ||
        article.profile?.name ||
        "Sem autor",

      category:
        article.category?.name ||
        article.categories?.name ||
        "Sem categoria",

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
      key: "author",
      title: "Autor",
      width: "170px",
    },
    {
      key: "category",
      title: "Categoria",
      width: "180px",
    },
    {
      key: "status",
      title: "Status",
      width: "140px",
      render: (row) => (
        <ArticleStatusBadge status={row.status} />
      ),
    },
    {
      key: "publishedAt",
      title: "Publicado",
      width: "120px",
    },
    {
      key: "updatedAt",
      title: "Atualizado",
      width: "120px",
    },
    {
      key: "actions",
      title: "",
      width: "120px",
      render: (row) => (
        <ArticleActions
          articleId={row.id}
          slug={row.slug}
          onDeleted={() => {
            removeArticle(row.id);
            refresh();
          }}
        />
      ),
    },
  ];

  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center text-zinc-400">
        Carregando artigos...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-900 bg-red-950/30 p-8 text-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
      <DataTable
        columns={columns}
        data={rows}
        emptyMessage="Nenhum artigo encontrado."
      />
    </div>
  );
}