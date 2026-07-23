import { supabase } from "@/lib/supabase";

export async function getDashboardStats() {
  const [
    articles,
    categories,
    reviews,
    guides,
    authors,
  ] = await Promise.all([
    supabase.from("articles").select("*", { count: "exact", head: true }),
    supabase.from("categories").select("*", { count: "exact", head: true }),
    supabase.from("reviews").select("*", { count: "exact", head: true }),
    supabase.from("guides").select("*", { count: "exact", head: true }),
    supabase.from("authors").select("*", { count: "exact", head: true }),
  ]);

  return {
    articles: articles.count ?? 0,
    categories: categories.count ?? 0,
    reviews: reviews.count ?? 0,
    guides: guides.count ?? 0,
    authors: authors.count ?? 0,
  };
}