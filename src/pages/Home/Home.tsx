import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import LatestArticles from "@/components/home/LatestArticles";
import Categories from "@/components/home/Categories";
import SEO from "@/components/seo/SEO";

import { useArticles } from "@/hooks/useArticles";

export default function Home() {
  const { articles, loading } = useArticles();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Carregando artigos...
      </div>
    );
  }

  const featured = articles[0] ?? null;

  const latest = articles.slice(1, 7);

  const categories = [
    ...new Map(
      articles
        .filter((article) => article.category)
        .map((article) => [
          article.category!.id,
          article.category!,
        ])
    ).values(),
  ];

  return (
    <>
      <SEO
        title="TechZeon"
        description="As principais notícias sobre Inteligência Artificial, Hardware, Software, Segurança Digital, Programação e Tecnologia."
        canonical="/"
      />

      <Hero
        featured={featured}
        latest={latest}
      />

      {featured && (
        <Featured
          article={featured}
        />
      )}

      <LatestArticles
        articles={latest}
      />

      <Categories
        categories={categories}
      />
    </>
  );
}