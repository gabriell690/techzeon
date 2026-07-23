import PageHeader from "@/admin/components/PageHeader";

import ArticlesToolbar from "./components/ArticlesToolbar";
import ArticlesTable from "./ArticlesTable";

export default function ArticlesPage() {
  return (
    <>
      <PageHeader
        title="Artigos"
        description="Gerencie todas as publicações do TechZeon."
      />

      <div className="mt-6 space-y-6">
        <ArticlesToolbar />

        <ArticlesTable />
      </div>
    </>
  );
}