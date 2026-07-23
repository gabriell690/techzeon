import {
  LayoutDashboard,
  FileText,
  FolderTree,
  BookOpen,
  MessageSquare,
  Users,
  Image,
  BarChart3,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Artigos",
    href: "/admin/articles",
    icon: FileText,
  },
  {
    title: "Categorias",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Guias",
    href: "/admin/guides",
    icon: BookOpen,
  },
  {
    title: "Reviews",
    href: "/admin/reviews",
    icon: MessageSquare,
  },
  {
    title: "Autores",
    href: "/admin/authors",
    icon: Users,
  },
  {
    title: "Mídia",
    href: "/admin/media",
    icon: Image,
  },
  {
    title: "Relatórios",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "Configurações",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default navigation;