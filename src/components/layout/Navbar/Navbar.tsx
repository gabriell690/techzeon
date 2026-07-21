import Container from "../../ui/Container/Container";

import Logo from "../Logo";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">

      <Container>

        <div className="flex h-20 items-center justify-between">

          <Logo />

          <Navigation />

          <SearchBar />

        </div>

      </Container>

    </header>
  );
}