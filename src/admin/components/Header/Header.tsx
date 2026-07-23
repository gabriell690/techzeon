import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-16
        items-center
        justify-end
        border-b
        border-zinc-800
        bg-zinc-950/80
        px-4
        backdrop-blur
        lg:justify-between
        lg:px-8
      "
    >
      <div className="hidden lg:block">
        <SearchBar />
      </div>

      <div className="flex items-center gap-3 lg:gap-4">
        <Notifications />
        <UserMenu />
      </div>
    </header>
  );
}