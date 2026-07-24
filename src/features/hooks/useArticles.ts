/* eslint-disable react-hooks/set-state-in-effect */
// src/hooks/useArticles.ts

import { useCallback, useEffect, useMemo, useState } from "react";

import { articlesApi } from "@/features/articles/api/articles.api";

import type {
  Article,
  ListArticlesParams,
} from "@/types/article";

export function useArticles(
  initialFilters?: ListArticlesParams
) {
  const [articles, setArticles] =
    useState<Article[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const [filters, setFilters] =
    useState<ListArticlesParams>({
      page: 1,
      limit: 20,
      ...initialFilters,
    });

  const loadArticles =
    useCallback(async () => {
      try {
        setLoading(true);

        const data =
          await articlesApi.getAll(filters);

        setArticles(data);

        setError(null);
      } catch (err) {
        console.error(err);

        setError(
          "Não foi possível carregar os artigos."
        );
      } finally {
        setLoading(false);
      }
    }, [filters]);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  const published =
    useMemo(
      () =>
        articles.filter(
          (a) =>
            a.status === "published"
        ).length,
      [articles]
    );

  const drafts =
    useMemo(
      () =>
        articles.filter(
          (a) =>
            a.status === "draft"
        ).length,
      [articles]
    );

  const totalViews =
    useMemo(
      () =>
        articles.reduce(
          (acc, article) =>
            acc +
            (article.views ?? 0),
          0
        ),
      [articles]
    );

  const removeArticle =
    useCallback(
      (id: string) => {
        setArticles((current) =>
          current.filter(
            (article) =>
              article.id !== id
          )
        );
      },
      []
    );

  return {
    articles,

    loading,

    error,

    filters,

    setFilters,

    refresh: loadArticles,

    removeArticle,

    stats: {
      total: articles.length,
      published,
      drafts,
      totalViews,
    },
  };
}