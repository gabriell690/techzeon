import { supabase } from "@/lib/supabase";

export async function getHomeData() {
  const [featured, latest, categories] = await Promise.all([
    supabase
      .from("articles")
      .select("*, category:categories(*)")
      .eq("featured", true)
      .limit(1)
      .maybeSingle(),

    supabase
      .from("articles")
      .select("*, category:categories(*)")
      .order("created_at", { ascending: false })
      .limit(8),

    supabase
      .from("categories")
      .select("*")
      .order("name"),
  ]);

  if (featured.error) {
    console.error(featured.error);
  }

  if (latest.error) {
    console.error(latest.error);
  }

  if (categories.error) {
    console.error(categories.error);
  }

  return {
    featured: featured.data ?? null,
    latest: latest.data ?? [],
    categories: categories.data ?? [],
  };
}