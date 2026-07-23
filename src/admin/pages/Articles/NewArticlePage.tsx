import PageHeader from "@/admin/components/PageHeader";

import ArticleForm from "./ArticleForm";

export default function NewArticlePage() {
  return (
    <>
      <PageHeader
        title="Novo artigo"
        description="Crie um novo artigo para o TechZeon."
      />

      <ArticleForm mode="create" />
    </>
  );
}