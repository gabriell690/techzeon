export interface DashboardStats {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;

  totalCategories: number;
  totalReviews: number;
  totalGuides: number;
  totalAuthors: number;

  totalViews: number;
}

export interface CategoryChart {
  name: string;
  total: number;
}

export interface TopArticle {
  id: string;
  title: string;
  views: number;
  category: string;
}

export interface Activity {
  id: string;
  type: string;
  title: string;
  created_at: string;
}

export interface VisitorsChart {
  day: string;
  views: number;
}

export interface DashboardResponse {
  stats: DashboardStats;

  visitors: VisitorsChart[];

  categories: CategoryChart[];

  topArticles: TopArticle[];

  activities: Activity[];
}