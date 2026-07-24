import { supabase } from "@/lib/supabase";
import type {
  Article,
  CreateArticleDTO,
  UpdateArticleDTO,
} from "@/types/article";

const TABLE = "articles";

export async function getArticles() {
  const { data, error } = await supabase
    .from(TABLE)
    .select(`
  *,
  categories (
    id,
    name,
    slug
  )
`)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data as Article[];
}

export async function getArticle(id: string) {
  const { data, error } = await supabase
    .from(TABLE)
   .select(`
  *,
  categories (
    id,
    name,
    slug
  )
`)
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Article;
}

export async function getArticleBySlug(
  slug: string
) {
  const { data, error } = await supabase
    .from(TABLE)
    .select(`
  *,
  categories (
    id,
    name,
    slug
  )
`)
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data as Article;
}
export async function getArticlesByCategory(
  categoryId: string
) {
  const { data, error } = await supabase
    .from("articles")
    .select(`
  *,
  categories (
    id,
    name,
    slug
  )
`)
    .eq("status", "published")
    .eq("category_id", categoryId)
    .order("published_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
}

export async function createArticle(
  article: CreateArticleDTO
) {
  const payload = {
    ...article,

    featured: article.featured ?? false,

    status: article.status ?? "draft",

    published_at:
      article.status === "published"
        ? new Date().toISOString()
        : null,
  };

  const { data, error } = await supabase
    .from(TABLE)
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data as Article;
}

export async function updateArticle(
  id: string,
  article: UpdateArticleDTO
) {
  const payload = {
    ...article,

    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from(TABLE)
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Article;
}

export async function deleteArticle(
  id: string
) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;
}

export async function publishArticle(
  id: string
) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({
      status: "published",

      published_at:
        new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Article;
}

export async function saveDraft(
  id: string
) {
  const { data, error } = await supabase
    .from(TABLE)
    .update({
      status: "draft",
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Article;
}