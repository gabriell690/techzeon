import { supabase } from "@/lib/supabase";

export async function getArticles() {
  return supabase
    .from("articles")
    .select("*")
    .order("created_at", {
      ascending: false,
    });
}