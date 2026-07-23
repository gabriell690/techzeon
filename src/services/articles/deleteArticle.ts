import { supabase } from "@/lib/supabase";

export async function deleteArticle(id: string) {
  return supabase
    .from("articles")
    .delete()
    .eq("id", id);
}