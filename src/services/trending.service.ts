import { supabase } from "@/lib/supabase";

export interface TrendingArticle {
  id: string;
  title: string;
  slug: string;
  views: number;
  trending: boolean;
}

export async function getTrendingArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, views, trending")
    .eq("status", "published")
    .eq("trending", true)
    .order("views", { ascending: false })
    .limit(10);

  if (error) throw error;

  return data as TrendingArticle[];
}