/* eslint-disable @typescript-eslint/no-empty-object-type */

export type ArticleStatus = "draft" | "published";

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  color?: string;
}
export interface ArticleAuthor {
  id?: string;
  name: string;
  avatar?: string;
  bio?: string;
}
export interface Article {
  id: string;

  title: string;

  slug: string;

  excerpt: string;

  content: string;

  cover_image: string;

  /**
   * Compatibilidade com a estrutura atual
   */
  author: string | ArticleAuthor;

  category_id: string | null;

  category: ArticleCategory | null;

  featured: boolean;

  status: ArticleStatus;

  /**
   * Novos campos
   */
  views?: number;

  reading_time?: number;

  seo_title?: string;

  seo_description?: string;

  seo_keywords?: string[];

  published_at: string;

  created_at: string;

  updated_at: string;
}

export interface CreateArticleDTO {
  title: string;

  slug: string;

  excerpt: string;

  content: string;

  cover_image?: string;

  author?: string;

  category_id?: string | null;

  featured?: boolean;

  status?: ArticleStatus;

  published_at?: string;
}

export interface UpdateArticleDTO
  extends Partial<CreateArticleDTO> {}

export interface ListArticlesParams {
  page?: number;

  limit?: number;

  search?: string;

  status?: ArticleStatus;

  category_id?: string;
}