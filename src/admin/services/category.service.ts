import { supabase } from "@/lib/supabase";
import type {
  Category,
  CreateCategoryDTO,
  UpdateCategoryDTO,
} from "@/types/category";

const TABLE = "categories";

export async function getCategories() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("name", {
      ascending: true,
    });

  if (error) throw error;

  return data as Category[];
}

export async function getCategory(id: string) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data as Category;
}

export async function getCategoryBySlug(
  slug: string
) {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return data as Category;
}

export async function createCategory(
  category: CreateCategoryDTO
) {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(category)
    .select()
    .single();

  if (error) throw error;

  return data as Category;
}

export async function updateCategory(
  id: string,
  category: UpdateCategoryDTO
) {
  const payload = {
    ...category,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from(TABLE)
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data as Category;
}

export async function deleteCategory(
  id: string
) {
  const { error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id);

  if (error) throw error;
}