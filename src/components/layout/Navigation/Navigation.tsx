import { NavLink } from "react-router-dom";
import { navigationItems } from "../../../data/navigation";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-8">
      {navigationItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className="text-zinc-400 hover:text-white transition-colors duration-300"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}