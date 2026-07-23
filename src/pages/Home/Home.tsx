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
      <div className="flex h-screen items-center justify-center">
        Carregando...
      </div>
    );
  }

  const featured = articles[0] ?? null;

  const latest = articles.slice(1, 7);

  return (
    <>
      <Hero
        featured={featured}
        latest={latest}
      />

      {featured && (
        <Featured article={featured} />
      )}

      <LatestArticles
        articles={latest}
      />

      <Categories
        categories={[]}
      />
      <SEO
  title="TechZeon"
  description="As principais notícias sobre Inteligência Artificial, Hardware, Software, Segurança Digital, Programação e Tecnologia."
  canonical="/"
/>
    </>
  );
}