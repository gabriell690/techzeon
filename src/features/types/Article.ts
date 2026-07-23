export type ArticleStatus = "draft" | "published" | "archived";

export interface Article {
  id: string;

  title: string;
  slug: string;
  excerpt: string | null;

  content: unknown;

  cover_image: string | null;

  author: string | null;

  category_id: string | null;

  featured: boolean;

  status: ArticleStatus;

  published_at: string | null;

  created_at: string;

  updated_at: string;
}