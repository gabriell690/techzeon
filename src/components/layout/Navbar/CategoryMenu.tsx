import { NavLink } from "react-router-dom";

const categories = [
  { name: "Notícias", href: "/noticias" },
  { name: "Reviews", href: "/reviews" },
  { name: "Guias", href: "/guias" },
  { name: "Hardware", href: "/categoria/hardware" },
  { name: "IA", href: "/categoria/ia" },
  { name: "Mobile", href: "/categoria/mobile" },
  { name: "Games", href: "/categoria/games" },
];

export default function CategoryMenu() {
  return (
    <nav className="flex items-center justify-center gap-10">
      {categories.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `relative py-2 text-sm font-semibold transition-colors duration-300 ${
              isActive
                ? "text-white"
                : "text-zinc-400 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.name}

              <span
                className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-orange-500 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}