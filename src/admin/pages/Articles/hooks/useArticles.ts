/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

import { articlesApi } from "@/features/articles/api/articles.api";
import type { Article } from "@/types/article";

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadArticles() {
    try {
      setLoading(true);

      const data = await articlesApi.getAll();

      setArticles(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Não foi possível carregar os artigos.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadArticles();
  }, []);

  return {
    articles,
    loading,
    error,
    refresh: loadArticles,
  };
}