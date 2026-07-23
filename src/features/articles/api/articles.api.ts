import { supabase } from "@/lib/supabase";
import type { Article } from "@/types/article";

const TABLE = "articles";

export const articlesApi = {
  async getAll(): Promise<Article[]> {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data as Article[];
  },

  async getPublished(): Promise<Article[]> {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("status", "published")
      .order("published_at", { ascending: false });

    if (error) throw error;

    return data as Article[];
  },

  async getBySlug(slug: string): Promise<Article | null> {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async create(
    article: Omit<
      Article,
      "id" | "created_at" | "updated_at"
    >
  ) {
    const { data, error } = await supabase
      .from(TABLE)
      .insert(article)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async update(
    id: string,
    article: Partial<Article>
  ) {
    const { data, error } = await supabase
      .from(TABLE)
      .update(article)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  },

  async delete(id: string) {
    const { error } = await supabase
      .from(TABLE)
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};