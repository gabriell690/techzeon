import Logo from "./Logo";
import CategoryMenu from "./CategoryMenu";
import SearchButton from "./SearchButton";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

export default function TopHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[220px_1fr_220px] items-center px-6">

        {/* Esquerda */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Centro */}
        <div className="hidden justify-center lg:flex">
          <CategoryMenu />
        </div>

        {/* Direita */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden lg:block">
            <SearchButton />
          </div>

          <ThemeToggle />

          <UserMenu />

          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>

      </div>
    </header>
  );
}