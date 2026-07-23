import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LatestArticles from "@/components/home/LatestArticles";

import { getCategoryBySlug } from "../../admin/services/category.service";
import { getArticlesByCategory } from "../../admin/services/article.service";

import type { Category } from "@/types/category";
import type { Article } from "@/types/article";

export default function CategoryPage() {
  const { slug } = useParams();

  const [category, setCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;

      try {
        const category = await getCategoryBySlug(slug);

        setCategory(category);

        const data = await getArticlesByCategory(category.id);

        setArticles(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (!category) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-20">
        Categoria não encontrada.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        {category.name}
      </h1>

      <LatestArticles articles={articles} />
    </div>
  );
}