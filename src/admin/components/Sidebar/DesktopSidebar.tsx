import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import { sidebarItems } from "./sidebarItems";

export default function DesktopSidebar() {
  return (
    <aside
      className="
        hidden
        lg:flex
        fixed
        inset-y-0
        left-0
        z-40
        w-72
        flex-col
        border-r
        border-zinc-800
        bg-zinc-950
      "
    >
      <SidebarLogo />

      <nav className="flex-1 overflow-y-auto space-y-2 p-4">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            {...item}
          />
        ))}
      </nav>

      <SidebarFooter />
    </aside>
  );
}