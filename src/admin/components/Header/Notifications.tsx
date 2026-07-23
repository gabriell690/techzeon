import { Bell } from "lucide-react";

export default function Notifications() {
  return (
    <button
      className="
      rounded-xl
      border
      border-zinc-800
      p-2.5
      text-zinc-400
      transition
      hover:bg-zinc-800
      hover:text-white
      "
    >
      <Bell size={20} />
    </button>
  );
}