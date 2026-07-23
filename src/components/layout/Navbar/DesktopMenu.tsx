import { NavLink } from "react-router-dom";
import { navigation } from "./navigation";

export default function DesktopMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navigation.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `relative text-sm font-semibold transition ${
              isActive
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}