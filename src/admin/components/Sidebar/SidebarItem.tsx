import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  href: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: Props) {
  return (
    <NavLink
      to={href}
      end={href === "/admin"}
      className={({ isActive }) =>
        `
        flex items-center gap-3
        rounded-xl
        px-4 py-3
        transition-all

        ${
          isActive
            ? "bg-cyan-500 text-white"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }
        `
      }
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
}