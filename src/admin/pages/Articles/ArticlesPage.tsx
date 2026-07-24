import { useMemo, useState } from "react";

import PageHeader from "@/admin/components/PageHeader";

import { useArticles } from "@/hooks/useArticles";

import ArticlesStats from "./components/ArticlesStats";
import ArticlesToolbar from "./components/ArticlesToolbar";
import ArticlesTable from "./ArticlesTable";

export default function ArticlesPage() {

  const {
    articles,
    loading,
    error,
    refresh,
    removeArticle,
    stats,
  } = useArticles();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [category, setCategory] =
    useState("");

  const filteredArticles = useMemo(() => {

    return articles.filter((article) => {

      const author =
        typeof article.author === "string"
          ? article.author
          : article.author?.name ?? "";

      const matchesSearch =
        !search ||
        article.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        article.slug
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        author
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        !status ||
        article.status === status;

      const matchesCategory =
        !category ||
        article.category?.id === category;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory
      );

    });

  }, [
    articles,
    search,
    status,
    category,
  ]);

  return (
    <>
      <PageHeader
        title="Artigos"
        description="Gerencie todas as publicações do TechZeon."
      />

      <div className="mt-6 space-y-6">

        <ArticlesStats
          stats={stats}
        />

        <ArticlesToolbar
          search={search}
          status={status}
          category={category}
          onSearchChange={setSearch}
          onStatusChange={setStatus}
          onCategoryChange={setCategory}
        />

        <ArticlesTable
          articles={filteredArticles}
          loading={loading}
          error={error}
          refresh={refresh}
          removeArticle={removeArticle}
        />

      </div>
    </>
  );

}