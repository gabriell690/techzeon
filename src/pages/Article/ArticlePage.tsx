// src/pages/Article/ArticlePage.tsx

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import type { Article } from "@/types";

import { getArticleBySlug } from "@/services/articles";
import SEO from "@/components/seo/SEO";
import ReadingProgress from "../Article/components/ReadingProgress";
import ArticleHero from "../../pages/Article/components/ArticleHero";
import ArticleContent from "@/components/article/ArticleContent";
import ReadingSidebar from "./components/ReadingSidebar";
import AuthorCard from "./components/AuthorCard";
import RelatedArticles from "../Article/components/RelatedArticles";
import ArticleSchema from "@/components/seo/AticlesSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

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
      <main className="flex min-h-screen items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />
          <p className="text-zinc-500 dark:text-zinc-400">
            Carregando artigo...
          </p>
        </div>
      </main>
    );
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
    <SEO
  title={article.title}
  description={article.excerpt}
  canonical={`/artigo/${article.slug}`}
  image={article.cover_image}
 keywords={[]}
  author={
    typeof article.author === "string"
      ? article.author
      : article.author?.name
  }
  type="article"
/>
<ArticleSchema article={article} />
 <BreadcrumbSchema
  items={[
    {
      name: "Início",
      url: "https://techzeon.com",
    },

    ...(article.category
      ? [
          {
            name: article.category.name,
            url: `https://techzeon.com/categoria/${article.category.slug}`,
          },
        ]
      : []),

    {
      name: article.title,
      url: `https://techzeon.com/artigo/${article.slug}`,
    },
  ]}
/>

      {/* Barra de progresso */}
      <ReadingProgress />

      <main className="relative">

        {/* Hero */}
        <ArticleHero article={article} />

        {/* Conteúdo */}
       {/* Conteúdo */}
<section className="mx-auto w-full max-w-[1600px] px-6 py-20 xl:px-10">

  <div className="grid items-start gap-20 xl:grid-cols-[minmax(0,1fr)_340px]">

    {/* Artigo */}
    <article
      id="article-content"
      className="min-w-0"
    >
      <ArticleContent article={article} />

      <div className="mt-24">
        <AuthorCard article={article} />
      </div>

      <div className="mt-28">
        <RelatedArticles
          currentArticle={article}
        />
      </div>
    </article>

    {/* Sidebar */}
    <aside className="sticky top-28 hidden self-start xl:block">
      <ReadingSidebar article={article} />
    </aside>

  </div>

</section>

      </main>
    </>
  );
}