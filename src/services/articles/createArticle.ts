import { supabase } from "@/lib/supabase";

import type { Article } from "@/types/article";

export async function createArticle(
  article: Partial<Article>
) {
  return supabase
    .from("articles")
    .insert(article)
    .select()
    .single();
}