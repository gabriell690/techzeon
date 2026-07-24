// src/features/articles/api/articles.api.ts

import { supabase } from "@/lib/supabase";
import type {
  Article,
  CreateArticleDTO,
  UpdateArticleDTO,
  ListArticlesParams,
} from "@/types/article";

const TABLE = "articles";

const ARTICLE_SELECT = `
  *,
  category:categories!articles_category_id_fkey(
    id,
    name,
    slug,
    color
  )
`;

export const articlesApi = {
  async getAll(
    params?: ListArticlesParams
  ): Promise<Article[]> {
    let query = supabase
      .from(TABLE)
      .select(ARTICLE_SELECT)
      .order("created_at", {
        ascending: false,
      });

    if (params?.search) {
      query = query.or(
        [
          `title.ilike.%${params.search}%`,
          `slug.ilike.%${params.search}%`,
          `author.ilike.%${params.search}%`,
        ].join(",")
      );
    }

    if (params?.status) {
      query = query.eq(
        "status",
        params.status
      );
    }

    if (params?.category_id) {
      query = query.eq(
        "category_id",
        params.category_id
      );
    }

    if (
      params?.page &&
      params?.limit
    ) {
      const from =
        (params.page - 1) *
        params.limit;

      const to =
        from +
        params.limit -
        1;

      query = query.range(
        from,
        to
      );
    }

    const {
      data,
      error,
    } = await query;

    if (error) throw error;

    return (data ??
      []) as Article[];
  },

  async getById(
    id: string
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .select(ARTICLE_SELECT)
      .eq("id", id)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async getBySlug(
    slug: string
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .select(ARTICLE_SELECT)
      .eq("slug", slug)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async create(
    article: CreateArticleDTO
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .insert(article)
      .select(ARTICLE_SELECT)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async update(
    id: string,
    article: UpdateArticleDTO
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .update({
        ...article,
        updated_at:
          new Date().toISOString(),
      })
      .eq("id", id)
      .select(ARTICLE_SELECT)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async delete(
    id: string
  ): Promise<void> {
    const {
      error,
    } = await supabase
      .from(TABLE)
      .delete()
      .eq("id", id);

    if (error) throw error;
  },

  async publish(
    id: string
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .update({
        status:
          "published",
        published_at:
          new Date().toISOString(),
      })
      .eq("id", id)
      .select(ARTICLE_SELECT)
      .single();

    if (error) throw error;

    return data as Article;
  },

  async saveDraft(
    id: string
  ): Promise<Article> {
    const {
      data,
      error,
    } = await supabase
      .from(TABLE)
      .update({
        status: "draft",
      })
      .eq("id", id)
      .select(ARTICLE_SELECT)
      .single();

    if (error) throw error;

    return data as Article;
  },
};