import { supabase } from "@/lib/supabase";
import type {
  DashboardResponse,
  DashboardStats,
  VisitorsChart,
  CategoryChart,
  TopArticle,
  Activity,
} from "@/types/dashboard";

export async function getDashboard(): Promise<DashboardResponse> {
  const [
    articlesRes,
    categoriesRes,
    reviewsRes,
    guidesRes,
    authorsRes,
  ] = await Promise.all([
    supabase
      .from("articles")
      .select("*"),

    supabase
      .from("categories")
      .select("*"),

    supabase
      .from("reviews")
      .select("*"),

    supabase
      .from("guides")
      .select("*"),

    supabase
      .from("authors")
      .select("*"),
  ]);

  if (articlesRes.error) throw articlesRes.error;
  if (categoriesRes.error) throw categoriesRes.error;

  const articles = articlesRes.data ?? [];
  const categories = categoriesRes.data ?? [];
  const reviews = reviewsRes.data ?? [];
  const guides = guidesRes.data ?? [];
  const authors = authorsRes.data ?? [];

  // -------------------------
  // STATS
  // -------------------------

  const stats: DashboardStats = {
    totalArticles: articles.length,

    publishedArticles: articles.filter(
      (a) => a.status === "published"
    ).length,

    draftArticles: articles.filter(
      (a) => a.status === "draft"
    ).length,

    totalCategories: categories.length,

    totalReviews: reviews.length,

    totalGuides: guides.length,

    totalAuthors: authors.length,

    totalViews: articles.reduce(
      (acc, article) => acc + (article.views ?? 0),
      0
    ),
  };

  // -------------------------
  // VISITORS CHART
  // -------------------------

  const visitorsMap = new Map<string, number>();

  articles.forEach((article) => {
    const date = new Date(article.created_at);

    const day = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
    });

    visitorsMap.set(
      day,
      (visitorsMap.get(day) ?? 0) + (article.views ?? 0)
    );
  });

  const visitors: VisitorsChart[] = [...visitorsMap.entries()]
    .map(([day, views]) => ({
      day,
      views,
    }))
    .sort((a, b) => Number(a.day) - Number(b.day));

  // -------------------------
  // CATEGORY CHART
  // -------------------------

  const categoriesChart: CategoryChart[] = categories.map(
    (category) => ({
      name: category.name,

      total: articles.filter(
        (article) => article.category_id === category.id
      ).length,
    })
  );

  // -------------------------
  // TOP ARTICLES
  // -------------------------

  const topArticles: TopArticle[] = [...articles]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 5)
    .map((article) => ({
      id: article.id,

      title: article.title,

      views: article.views ?? 0,

      category:
        categories.find(
          (c) => c.id === article.category_id
        )?.name ?? "-",
    }));

  // -------------------------
  // RECENT ACTIVITY
  // -------------------------

  const activities: Activity[] = [...articles]
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() -
        new Date(a.created_at).getTime()
    )
    .slice(0, 10)
    .map((article) => ({
      id: article.id,

      type: article.status,

      title: article.title,

      created_at: article.created_at,
    }));

  return {
    stats,
    visitors,
    categories: categoriesChart,
    topArticles,
    activities,
  };
}