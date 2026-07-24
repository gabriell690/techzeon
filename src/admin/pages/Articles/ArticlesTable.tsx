 

import { useMemo } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import DataTable, {
  type DataTableColumn,
} from "@/admin/components/DataTable";

import type { Article } from "@/types/article";

import ArticleActions from "./components/ArticleActions";
import ArticleStatusBadge from "./components/ArticleStatusBadge";

interface Props {
  articles: Article[];

  loading: boolean;

  error: string | null;

  refresh: () => void | Promise<void>;

  removeArticle: (id: string) => void;
}

interface ArticleRow {
  id: string;

  slug: string;

  title: string;

  author: string;

  category: string;

  cover?: string;

  status: "draft" | "published";

  publishedAt: string;

  updatedAt: string;
}

function formatDate(date?: string | null) {
  if (!date) return "-";

  return format(
    new Date(date),
    "dd/MM/yyyy",
    {
      locale: ptBR,
    }
  );
}

export default function ArticlesTable({
  articles,
  loading,
  error,
  refresh,
  removeArticle,
}: Props) {

  const rows = useMemo<ArticleRow[]>(() => {

    return articles.map((article) => ({

      id: article.id,

      slug: article.slug,

      title: article.title,

      cover: article.cover_image,

      author:
        typeof article.author === "string"
          ? article.author
          : article.author?.name ?? "Sem autor",

      category:
        article.category?.name ??
        "Sem categoria",

      status: article.status,

      publishedAt: formatDate(
        article.published_at
      ),

      updatedAt: formatDate(
        article.updated_at
      ),

    }));

  }, [articles]);

  const columns: DataTableColumn<ArticleRow>[] = [

    {
      key: "title",

      title: "Artigo",

      render: (row) => (

        <div className="flex items-center gap-3">

          <img
            src={
              row.cover ||
              "/placeholder.webp"
            }
            alt={row.title}
            className="h-12 w-12 rounded-lg object-cover border border-zinc-700"
          />

          <div>

            <h3 className="font-medium text-white">
              {row.title}
            </h3>

            <p className="text-xs text-zinc-500">
              /{row.slug}
            </p>

          </div>

        </div>

      ),
    },

    {
      key: "category",

      title: "Categoria",
    },

    {
      key: "author",

      title: "Autor",
    },

    {
      key: "status",

      title: "Status",

      render: (row) => (
        <ArticleStatusBadge
          status={row.status}
        />
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

    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

      <DataTable
        columns={columns}
        data={rows}
        emptyMessage="Nenhum artigo encontrado."
      />

    </div>

  );

}