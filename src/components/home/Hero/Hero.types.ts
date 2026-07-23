export interface HeroArticle {
  id: string;

  slug: string;

  title: string;

  excerpt: string;

  cover_image: string | null;

  category: {
    id: string;
    name: string;
    slug: string;
  } | null;

  author: string;

  published_at: string | null;

  featured: boolean;

  reading_time?: number;
}