import { X } from "lucide-react";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";
import { sidebarItems } from "./sidebarItems";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SidebarDrawer({
  open,
  onClose,
}: Props) {
  return (
    <aside
      className={`
        fixed
        inset-y-0
        left-0
        z-50
        flex
        w-72
        flex-col
        border-r
        border-zinc-800
        bg-zinc-950
        transition-transform
        duration-300
        lg:hidden

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }
      `}
    >
      <div className="flex items-center justify-between p-4">

        <SidebarLogo />

        <button
          onClick={onClose}
          className="
            rounded-lg
            p-2
            text-zinc-400
            hover:bg-zinc-800
            hover:text-white
          "
        >
          <X size={20} />
        </button>

      </div>

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