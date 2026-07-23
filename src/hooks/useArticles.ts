/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/preserve-manual-memoization */
import { useCallback, useEffect, useState } from "react";

import { getArticles } from "@/admin/services/article.service";
import type { Article } from "@/types/article";

interface UseArticlesOptions {
  status?: "draft" | "published" | "archived";
}

export function useArticles(options?: UseArticlesOptions) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getArticles();

      const filtered = options?.status
        ? data.filter(
            (article) => article.status === options.status
          )
        : data;

      setArticles(filtered);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao carregar artigos."
      );
    } finally {
      setLoading(false);
    }
  }, [options?.status]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  function removeArticle(id: string) {
    setArticles((prev) =>
      prev.filter((article) => article.id !== id)
    );
  }

  function updateArticle(article: Article) {
    setArticles((prev) =>
      prev.map((item) =>
        item.id === article.id ? article : item
      )
    );
  }

  function addArticle(article: Article) {
    setArticles((prev) => [article, ...prev]);
  }

  return {
    articles,
    loading,
    error,
    refresh: loadArticles,
    removeArticle,
    updateArticle,
    addArticle,
  };
}