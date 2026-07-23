import { ChevronDown, User } from "lucide-react";

export default function UserMenu() {
  return (
    <button
      className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-zinc-800
      px-3
      py-2
      hover:bg-zinc-800
      "
    >
      <div className="rounded-full bg-cyan-500 p-2 text-white">
        <User size={18} />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-white">
          Administrador
        </p>

        <p className="text-xs text-zinc-500">
          admin
        </p>
      </div>

      <ChevronDown
        size={18}
        className="text-zinc-500"
      />
    </button>
  );
}