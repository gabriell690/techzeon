import { Menu } from "lucide-react";

interface Props {
  open: boolean;
  onOpen: () => void;
}

export default function MobileSidebar({
  onOpen,
}: Props) {
  return (
    <button
      onClick={onOpen}
      className="
        fixed
        left-4
        top-4
        z-50
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-zinc-800
        bg-zinc-900
        text-white
        shadow-lg
        lg:hidden
      "
    >
      <Menu size={22} />
    </button>
  );
}