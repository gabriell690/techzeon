import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

import ArticleContent from "../../components/article/ArticleContent";
import type { Article } from "@/types";
import { getArticleBySlug } from "@/services/articles";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticle() {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        const data = await getArticleBySlug(slug);
        setArticle(data);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto py-20 text-center">
        Carregando...
      </div>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="container mx-auto max-w-5xl px-6 py-10">
      {article.cover_image && (
        <img
          src={article.cover_image}
          alt={article.title}
          className="mb-8 h-96 w-full rounded-2xl object-cover"
        />
      )}

      <span className="text-sm font-medium text-blue-600">
        {article.category?.name}
      </span>

      <h1 className="mt-4 text-5xl font-bold">
        {article.title}
      </h1>

      {article.excerpt && (
        <p className="mt-6 text-xl text-zinc-500">
          {article.excerpt}
        </p>
      )}

      <div className="mt-12">
        <ArticleContent article={article} />
      </div>
    </main>
  );
}