import { supabase } from "@/lib/supabase";

import type { Article } from "@/types/article";

export async function updateArticle(
  id: string,
  article: Partial<Article>
) {
  return supabase
    .from("articles")
    .update(article)
    .eq("id", id)
    .select()
    .single();
}