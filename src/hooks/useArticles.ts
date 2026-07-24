/* eslint-disable react-hooks/preserve-manual-memoization */
/* eslint-disable react-hooks/set-state-in-effect */

import { useCallback, useEffect, useMemo, useState } from "react";

import { articlesApi } from "@/features/articles/api/articles.api";
import type { Article, ArticleStatus } from "@/types/article";

interface UseArticlesOptions {
  status?: ArticleStatus;
}

export function useArticles(options?: UseArticlesOptions) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await articlesApi.getAll();

      const filtered = options?.status
        ? data.filter(
            (article) => article.status === options.status
          )
        : data;

      setArticles(filtered);
    } catch (err) {
      console.error(err);

      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível carregar os artigos."
      );
    } finally {
      setLoading(false);
    }
  }, [options?.status]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const refresh = useCallback(() => {
    return loadArticles();
  }, [loadArticles]);

  const removeArticle = useCallback((id: string) => {
    setArticles((prev) =>
      prev.filter((article) => article.id !== id)
    );
  }, []);

  const updateArticle = useCallback((article: Article) => {
    setArticles((prev) =>
      prev.map((item) =>
        item.id === article.id ? article : item
      )
    );
  }, []);

  const addArticle = useCallback((article: Article) => {
    setArticles((prev) => [article, ...prev]);
  }, []);

  const stats = useMemo(() => {
    const published = articles.filter(
      (article) => article.status === "published"
    ).length;

    const drafts = articles.filter(
      (article) => article.status === "draft"
    ).length;

    const totalViews = articles.reduce(
      (total, article) => total + (article.views ?? 0),
      0
    );

    return {
      total: articles.length,
      published,
      drafts,
      totalViews,
    };
  }, [articles]);

  return {
    articles,
    loading,
    error,

    stats,

    refresh,

    removeArticle,
    updateArticle,
    addArticle,
  };
}