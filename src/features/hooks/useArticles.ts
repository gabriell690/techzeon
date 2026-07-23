import { useEffect, useState } from "react";
import { articlesApi } from "../articles/api/articles.api";
import type { Article } from "@/types/article";

export function useArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await articlesApi.getAll();
        setArticles(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return {
    articles,
    loading,
    error,
  };
}