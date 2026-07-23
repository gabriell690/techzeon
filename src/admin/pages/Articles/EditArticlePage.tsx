import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleForm from "../../pages/Articles/ArticleForm/ArticleForm";

import { getArticle } from "@/admin/services/article.service";

import type { Article } from "@/types/article";

export default function EditArticlePage() {
  const { id } = useParams();

  const [article, setArticle] =
    useState<Article | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      if (!id) return;

      try {
        const data = await getArticle(id);

        setArticle(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!article) {
    return <div>Artigo não encontrado.</div>;
  }

  return (
    <ArticleForm
      mode="edit"
      article={article}
    />
  );
}