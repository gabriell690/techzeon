import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Newspaper,
  FolderKanban,
  Images,
  Users,
  Globe,
  Settings,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Artigos",
    icon: Newspaper,
    href: "/admin/articles",
  },
  {
    title: "Categorias",
    icon: FolderKanban,
    href: "/admin/categories",
  },
  {
    title: "Biblioteca",
    icon: Images,
    href: "/admin/media",
  },
  {
    title: "Autores",
    icon: Users,
    href: "/admin/authors",
  },
  {
    title: "SEO",
    icon: Globe,
    href: "/admin/seo",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "/admin/settings",
  },
];